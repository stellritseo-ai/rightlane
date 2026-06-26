import { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, Mail, X, Send } from "lucide-react";
import logo from "@/assets/logo.png";
import { io } from "socket.io-client";
import {
  getChatSessions,
  getChatSessionById,
  createChatSession,
  sendChatMessage,
  ChatSession
} from "@/lib/leads-store";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actions?: boolean;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [chatSession, setChatSession] = useState<ChatSession | null>(null);
  const [showPreChatForm, setShowPreChatForm] = useState(false);
  const [preChatData, setPreChatData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const socketRef = useRef<any>(null);

  // Connect to Socket.io relay server
  useEffect(() => {
    if (typeof window === "undefined" || !chatSession?.id) return;

    // Connect to relay sidecar
    const socket = io("http://localhost:3001");
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[Socket] Connected to relay server");
      socket.emit("join-room", chatSession.id);
    });

    // Listen for incoming messages from administrator
    socket.on("receive-message", (msg: any) => {
      console.log("[Socket] Received message:", msg);
      setChatSession((prev) => {
        if (!prev) return null;
        const exists = prev.messages.some((m) => m.id === msg._id || m.id === msg.id);
        if (exists) return prev;
        return {
          ...prev,
          messages: [...prev.messages, msg],
          lastMessage: msg.text,
          lastMessageTime: msg.timestamp
        };
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [chatSession?.id]);

  // Initialize or load chat session on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sessionId = localStorage.getItem("rightlane-client-chat-session-id");
    
    const initializeChat = async () => {
      const currentSession = sessionId ? await getChatSessionById(sessionId) : null;
      if (currentSession) {
        setChatSession(currentSession);
        setShowPreChatForm(false);
      } else {
        setShowPreChatForm(true);
      }
    };
    
    initializeChat();
  }, []);

  const handlePreChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preChatData.name.trim() || !preChatData.email.trim()) return;

    setIsConnecting(true);
    try {
      const newSession = await createChatSession(
        preChatData.name,
        "Clearwater",
        preChatData.email,
        preChatData.phone || "N/A"
      );

      // Seed with initial welcome message from admin
      const welcomed = await sendChatMessage(
        newSession.id,
        "admin",
        "Hi there! Welcome to Right Lane Emergency Cleanup & Hauling. How can we help you with your cleanup, hauling, or pressure washing project today?"
      );

      localStorage.setItem("rightlane-client-chat-session-id", newSession.id);
      setChatSession(welcomed || newSession);
      setShowPreChatForm(false);
    } catch (error) {
      console.error("Failed to start chat session:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  // Poll database every 3 seconds to pull incoming admin replies in real-time
  useEffect(() => {
    if (typeof window === "undefined" || !chatSession?.id) return;
    const interval = setInterval(async () => {
      const refreshed = await getChatSessionById(chatSession.id);
      if (refreshed) {
        setChatSession(refreshed);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [chatSession?.id]);

  // Trigger tooltip notification after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [chatSession?.messages, isTyping, isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (showNotification) {
      setShowNotification(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !chatSession) return;

    const textToSend = inputValue;
    setInputValue("");

    // 1. Send client message
    const updated = await sendChatMessage(chatSession.id, "client", textToSend);
    if (updated) {
      setChatSession(updated);
      setIsTyping(true);

      // Emit new message event to Socket.io relay
      const lastMsg = updated.messages[updated.messages.length - 1];
      if (socketRef.current && lastMsg) {
        socketRef.current.emit("new-message", {
          sessionId: chatSession.id,
          message: { ...lastMsg, sessionId: chatSession.id }
        });
      }
    }

    // 2. Trigger fallback simulated response after 15 seconds
    // only if the admin hasn't active-responded since then
    setTimeout(async () => {
      setIsTyping(false);
      
      const fresh = await getChatSessionById(chatSession.id);
      
      // If the very last message in the thread is still from the client, send the auto-bot reply
      if (fresh && fresh.messages.length > 0 && fresh.messages[fresh.messages.length - 1].sender === "client") {
        const botReply = await sendChatMessage(
          fresh.id,
          "admin",
          "Thank you for contacting us! Your message has been received. Ronnie Lane or a member of our team will get back to you shortly. For immediate assistance, feel free to use the link below to chat via WhatsApp."
        );
        
        if (botReply) {
          setChatSession(botReply);
          // Emit bot message to socket so dashboard sees it instantly
          const lastMsg = botReply.messages[botReply.messages.length - 1];
          if (socketRef.current && lastMsg) {
            socketRef.current.emit("new-message", {
              sessionId: fresh.id,
              message: { ...lastMsg, sessionId: fresh.id }
            });
          }
        }
      }
    }, 15000);
  };

  const formatTime = (timestamp: string) => {
    try {
      if (timestamp.includes("-") || timestamp.includes("T")) {
        const d = new Date(timestamp);
        if (!isNaN(d.getTime())) {
          return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        }
      }
      return timestamp;
    } catch {
      return timestamp;
    }
  };

  const whatsappNumber = "17276420201";
  const defaultMessage = "Hi, I'm interested in your handyman and remodeling services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Translations
  const t = {
    title: "Right Lane Assistant",
    subtitle: "Online · Right Lane Support",
    inputPlaceholder: "Type a message...",
    tooltip: "Have questions? Chat with us!",
    whatsappBtn: "Chat on WhatsApp",
    emailBtn: "Send Email",
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none font-sans">
      {/* Tooltip Notification */}
      {showNotification && !isOpen && (
        <div className="mb-3 mr-1 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-800 text-xs py-2.5 px-4 rounded-xl shadow-xl animate-bounce flex items-center gap-2 max-w-xs relative">
          <div className="absolute right-5 -bottom-1.5 w-3 h-3 bg-white dark:bg-neutral-900 border-r border-b border-neutral-200/80 dark:border-neutral-800 transform rotate-45"></div>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
          <p className="font-semibold">{t.tooltip}</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowNotification(false);
            }} 
            className="hover:text-red-500 ml-1 text-neutral-400"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-48px)] max-w-[340px] sm:w-[360px] h-[480px] bg-white rounded-3xl border border-neutral-200/70 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#2c241d] p-4 text-white relative flex items-center gap-3 shrink-0">
            <div className="relative">
              <img 
                src={logo} 
                alt="Right Lane Handyman Services" 
                className="h-10 w-10 rounded-full object-cover bg-white border-2 border-white/20" 
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#2c241d]"></span>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wide">{t.title}</h4>
              <p className="text-[10px] text-neutral-300 font-medium flex items-center gap-1">
                {t.subtitle}
              </p>
            </div>
            <button 
              onClick={handleToggle}
              className="absolute right-4 top-4 text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Conditional Pre-Chat Form or Message History */}
          {showPreChatForm ? (
            <form onSubmit={handlePreChatSubmit} className="flex-1 p-5 bg-[#fbfaf7] flex flex-col justify-center overflow-y-auto space-y-3.5 text-left">
              <div className="text-center mb-1 select-none">
                <h3 className="text-sm font-extrabold text-neutral-800 uppercase tracking-wider mb-1">
                  Start Live Chat
                </h3>
                <p className="text-[10.5px] text-neutral-500 font-light leading-normal">
                  Please introduce yourself to start chatting with Ronnie Lane and the team.
                </p>
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={preChatData.name}
                  onChange={(e) => setPreChatData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-[#f4f6f8] hover:bg-[#ebedf0] focus:bg-white border-none rounded-xl py-2 px-3.5 text-xs text-neutral-800 placeholder-neutral-450 focus:outline-none focus:ring-2 focus:ring-[#ffa326]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={preChatData.email}
                  onChange={(e) => setPreChatData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-[#f4f6f8] hover:bg-[#ebedf0] focus:bg-white border-none rounded-xl py-2 px-3.5 text-xs text-neutral-800 placeholder-neutral-450 focus:outline-none focus:ring-2 focus:ring-[#ffa326]/20 transition-all"
                />
              </div>

              {/* Phone number field removed */}


              <button
                type="submit"
                disabled={isConnecting}
                className="w-full py-2.5 bg-[#ffa326] text-black hover:bg-[#e68a00] disabled:bg-neutral-200 disabled:text-neutral-400 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-98 mt-1.5"
              >
                {isConnecting ? "Connecting..." : "Start Chatting"}
              </button>
            </form>
          ) : (
            <>
              {/* Messages Thread Container */}
              <div className="flex-1 overflow-y-auto p-4 bg-[#fbfaf7] space-y-4">
                {(chatSession?.messages || []).map((msg) => (
                  <div key={msg.id} className={`flex flex-col ${msg.sender === "client" ? "items-end" : "items-start"}`}>
                    <div 
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs md:text-sm leading-relaxed shadow-[0_2px_8px_rgba(0,0,0,0.02)] ${
                        msg.sender === "client" 
                          ? "bg-[#ffa326] text-[#1c140d] font-semibold rounded-tr-none" 
                          : "bg-white text-neutral-800 border border-neutral-100/90 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-neutral-400 mt-1 px-1">
                      {formatTime(msg.timestamp)}
                    </span>

                    {/* Show Quick Action Buttons under specific Bot messages */}
                    {msg.sender === "admin" && msg.text.includes("Welcome to Right Lane") && (
                      <div className="mt-3 space-y-2 w-[85%]">
                        {/* WhatsApp */}
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2 px-3 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all shadow-sm active:scale-98"
                        >
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.33 4.99L2 22l5.163-1.355a9.92 9.92 0 004.846 1.258h.004c5.506 0 9.99-4.482 9.99-9.988 0-2.668-1.039-5.176-2.927-7.065A9.91 9.91 0 0012.012 2zm5.72 14.195c-.247.694-1.22 1.267-1.684 1.34-.407.065-.94.12-2.738-.624-2.298-.952-3.766-3.29-3.882-3.447-.115-.156-.939-1.248-.939-2.38 0-1.132.592-1.787.804-1.912.213-.225.467-.282.624-.282.156 0 .311.002.447.008.143.006.335-.054.524.398.195.467.669 1.63.729 1.75.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.253.31-.36.42-.12.12-.246.25-.106.49.14.24.62 1.024 1.33 1.657.914.814 1.683 1.065 1.922 1.184.24.12.38.1.522-.06.142-.16.612-.712.776-.956.164-.244.328-.2.553-.117.225.084 1.427.674 1.673.797.246.124.41.185.47.288.06.103.06.602-.187 1.296z"/>
                          </svg>
                          {t.whatsappBtn}
                        </a>
                        
                        {/* Email */}
                        <a 
                          href="mailto:rightlanehandymanservice@yahoo.com"
                          className="flex items-center justify-center gap-2 w-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 py-2 px-3 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all shadow-xs active:scale-98"
                        >
                          <Mail className="h-3.5 w-3.5 text-neutral-500" />
                          {t.emailBtn}
                        </a>
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex flex-col items-start">
                    <div className="bg-white border border-neutral-100 text-neutral-800 rounded-2xl rounded-tl-none px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Form Input Bar */}
              <form onSubmit={handleSend} className="p-3 bg-white border-t border-neutral-150 flex items-center gap-2 shrink-0">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t.inputPlaceholder}
                  className="flex-1 bg-[#f4f6f8] hover:bg-[#ebedf0] focus:bg-white border-none rounded-xl py-2.5 px-4 text-xs md:text-sm text-neutral-800 placeholder-neutral-450 focus:outline-none focus:ring-2 focus:ring-[#ffa326]/20 transition-all"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffa326] text-black hover:bg-[#e68a00] disabled:bg-neutral-100 disabled:text-neutral-300 transition-all cursor-pointer shrink-0"
                >
                  <Send className="h-4.5 w-4.5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}

      {/* Floating Button Trigger */}
      <button 
        onClick={handleToggle}
        className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 shadow-2xl relative group active:scale-95 cursor-pointer ${
          isOpen 
            ? "bg-[#2c241d] hover:bg-[#1a1511] rotate-90 text-white" 
            : "bg-[#ffa326] hover:bg-[#e68a00] hover:scale-105 text-black"
        }`}
      >
        {/* Pulsing ring animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#ffa326]/40 animate-ping opacity-75"></span>
        )}
        
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="h-6 w-6 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
}
