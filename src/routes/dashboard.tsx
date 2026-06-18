import { useState, useEffect, useMemo, useRef } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useTranslation } from "@/context/translation-context";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Briefcase,
  Users,
  DollarSign,
  MapPin,
  Star,
  CheckCircle,
  AlertTriangle,
  Clock,
  Trash2,
  Edit2,
  Plus,
  Phone,
  Mail,
  FileText,
  Settings,
  LogOut,
  MessageSquare,
  Calendar,
  ChevronRight,
  Filter,
  Search,
  MessageCircle,
  Building,
  User,
  ThumbsUp,
  Sliders,
  Bell,
  ArrowUpRight,
  ShieldAlert,
  Info,
  Image as ImageIcon,
  Eye
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from "recharts";
import {
  getLeads,
  getReviews,
  updateLeadStatus,
  updateLeadDetails,
  deleteLead,
  addCustomLead,
  toggleReviewFeatured,
  replyToReview,
  addReview,
  Lead,
  Review,
  getChatSessions,
  createChatSession,
  sendChatMessage,
  markChatAsRead,
  uploadLeadPhoto,
  removeLeadPhoto,
  uploadReviewPhoto,
  ChatSession,
  getGalleryPhotos,
  uploadGalleryPhoto,
  removeGalleryPhoto,
  getWebEmails,
  deleteWebEmail,
  verifyAdminToken,
  WebEmail,
  updateUserCredentials,
  getPortalUsers,
  createPortalUser,
  deletePortalUser,
  PortalUser
} from "@/lib/leads-store";
import { toast } from "sonner";
import { io } from "socket.io-client";
import logo from "@/assets/jrm-logo.png";

const formatChatTime = (timestamp: string) => {
  if (!timestamp) return "";
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

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Robert's Office — JRM Construction Admin Portal" },
      { name: "description", content: "Internal business management console for JRM Construction Landscape Design." }
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [currentUser, setCurrentUser] = useState<{ id: string; username: string; role: string } | null>(null);

  const isViewer = currentUser?.role === "viewer";

  // Verify authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("jrm-admin-token");
      if (!token) {
        setIsAuthenticated(false);
        navigate({ to: "/login" });
        return;
      }
      try {
        const res = await verifyAdminToken(token);
        if (res.valid) {
          setIsAuthenticated(true);
          setCurrentUser({
            id: res.id || "",
            username: res.username || "",
            role: res.role || "admin"
          });
        } else {
          localStorage.removeItem("jrm-admin-token");
          setIsAuthenticated(false);
          navigate({ to: "/login" });
        }
      } catch (e) {
        console.error("Token verification failed:", e);
        setIsAuthenticated(false);
        navigate({ to: "/login" });
      }
    };
    checkAuth();
  }, [navigate]);

  const { language } = useTranslation();
  const [activeTab, setActiveTab] = useState<"overview" | "leads" | "reviews" | "settings" | "chat" | "gallery" | "emails" | "security">("overview");

  // Portal Security States
  const [portalUsers, setPortalUsers] = useState<PortalUser[]>([]);
  const [updateUsername, setUpdateUsername] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [addUsername, setAddUsername] = useState("");
  const [addPassword, setAddPassword] = useState("");
  const [addRole, setAddRole] = useState<"admin" | "editor" | "viewer">("viewer");

  // Prefill self-credentials update field with active username
  useEffect(() => {
    if (currentUser) {
      setUpdateUsername(currentUser.username);
    }
  }, [currentUser]);

  // Load Portal Users list when Security tab is active
  useEffect(() => {
    if (activeTab === "security" && currentUser?.role === "admin") {
      getPortalUsers()
        .then(setPortalUsers)
        .catch((err) => {
          console.error("Failed to fetch portal users:", err);
          toast.error("Could not load portal accounts list.");
        });
    }
  }, [activeTab, currentUser]);

  // Self credentials update handler
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    const toastId = toast.loading("Updating security credentials...");
    try {
      const res = await updateUserCredentials(currentUser.id, updateUsername, updatePassword);
      if (res.success) {
        toast.success("Credentials updated successfully!", { id: toastId });
        setCurrentUser(prev => prev ? { ...prev, username: res.username } : null);
        setUpdatePassword("");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to update profile", { id: toastId });
    }
  };

  // Add new portal user handler
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addUsername.trim() || !addPassword.trim()) {
      toast.error("Username and password are required.");
      return;
    }

    const toastId = toast.loading("Creating portal account...");
    try {
      const res = await createPortalUser(addUsername, addPassword, addRole);
      if (res.success) {
        toast.success(`User '${res.username}' logged as '${res.role}'.`, { id: toastId });
        setAddUsername("");
        setAddPassword("");
        setAddRole("viewer");
        // Reload list
        const users = await getPortalUsers();
        setPortalUsers(users);
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to create portal user.", { id: toastId });
    }
  };

  // Delete portal user handler
  const handleDeleteUser = (userId: string, username: string) => {
    if (username === "jrm") {
      toast.error("The primary administrator account 'jrm' cannot be deleted.");
      return;
    }
    if (currentUser && userId === currentUser.id) {
      toast.error("You cannot delete the account you are currently logged in with.");
      return;
    }

    triggerConfirm({
      title: "Delete Portal User",
      message: `Are you sure you want to delete the portal account for '${username}'? They will be signed out and disabled immediately.`,
      confirmText: "Delete Account",
      type: "danger",
      onConfirm: async () => {
        const toastId = toast.loading(`Deleting '${username}'...`);
        try {
          const res = await deletePortalUser(userId);
          if (res.success) {
            toast.success("User deleted successfully.", { id: toastId });
            const users = await getPortalUsers();
            setPortalUsers(users);
          }
        } catch (err: any) {
          console.error(err);
          toast.error(err.message || "Failed to delete user.", { id: toastId });
        }
      }
    });
  };

  // Local state for leads, reviews, and web emails
  const [leads, setLeads] = useState<Lead[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [webEmails, setWebEmails] = useState<WebEmail[]>([]);

  // Chat sessions state
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [adminReplyText, setAdminReplyText] = useState("");

  // Lightbox and Review Photo Upload state
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);
  const [newReviewPhoto, setNewReviewPhoto] = useState<string>("");
  const [galleryPhotos, setGalleryPhotos] = useState<string[]>([]);

  // Gallery upload progress state
  const [uploadProgress, setUploadProgress] = useState<{ current: number; total: number } | null>(null);

  // Gallery delete progress state
  const [deleteProgress, setDeleteProgress] = useState<{ current: number; total: number } | null>(null);

  // Gallery multi-select state
  const [selectMode, setSelectMode] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState<Set<number>>(new Set());

  // Custom premium confirm modal state
  const [confirmConfig, setConfirmConfig] = useState<{
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: "danger" | "warning" | "info";
    onConfirm: () => void | Promise<void>;
  } | null>(null);

  const triggerConfirm = (config: {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: "danger" | "warning" | "info";
    onConfirm: () => void | Promise<void>;
  }) => {
    setConfirmConfig(config);
  };

  const socketRef = useRef<any>(null);
  const activeSessionIdRef = useRef<string | null>(null);
  const subscribedRoomsRef = useRef<Set<string>>(new Set());
  const seenWebEmailsRef = useRef<Set<string>>(new Set());
  const seenChatMessagesRef = useRef<Set<string>>(new Set());

  // Keep the active session ID ref updated
  useEffect(() => {
    activeSessionIdRef.current = activeSessionId;
  }, [activeSessionId]);

  // Connect to Socket.io relay server once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Connect to relay sidecar
    const socket = io("http://localhost:3001");
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[Socket] Admin connected to relay server");
      // Join rooms for all current chat sessions to get real-time alerts
      chatSessions.forEach((s) => {
        socket.emit("join-room", s.id);
        subscribedRoomsRef.current.add(s.id);
      });
    });

    socket.on("receive-message", (msg: any) => {
      console.log("[Socket] Admin received message:", msg);

      setChatSessions((prev) => {
        return prev.map((session) => {
          if (session.id === msg.sessionId) {
            const exists = session.messages.some((m) => m.id === msg.id);
            if (exists) return session;

            const updatedMessages = [...session.messages, msg];
            return {
              ...session,
              messages: updatedMessages,
              lastMessage: msg.text,
              lastMessageTime: msg.timestamp,
              unread: activeSessionIdRef.current !== session.id // Mark unread if not the active chat
            };
          }
          return session;
        });
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Dynamically subscribe to rooms as chat sessions load or update
  useEffect(() => {
    if (socketRef.current) {
      chatSessions.forEach((s) => {
        if (!subscribedRoomsRef.current.has(s.id)) {
          console.log("[Socket] Dynamically joining room:", s.id);
          socketRef.current.emit("join-room", s.id);
          subscribedRoomsRef.current.add(s.id);
        }
      });
    }
  }, [chatSessions]);

  // Load data on mount
  useEffect(() => {
    getLeads().then(setLeads);
    getReviews().then(setReviews);
    getChatSessions().then((sessions) => {
      setChatSessions(sessions);
      sessions.forEach((s) => {
        s.messages.forEach((m) => seenChatMessagesRef.current.add(m.id));
      });
    });
    getWebEmails().then((emails) => {
      setWebEmails(emails);
      emails.forEach((e) => seenWebEmailsRef.current.add(e.id));
    });

    // Fetch gallery photos from DB instead of localStorage
    getGalleryPhotos().then((photos) => {
      setGalleryPhotos(photos.map(p => p.url));
    });
  }, []);

  // Poll database every 3 seconds to sync chat messages, sessions, and web emails in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      getChatSessions().then(setChatSessions);
      getWebEmails().then(setWebEmails);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Request Notification permission on mount
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "default") {
        Notification.requestPermission().then((permission) => {
          console.log("[Notification] Permission status:", permission);
          if (permission === "granted") {
            toast.success("Web notifications enabled!");
          }
        });
      }
    }
  }, []);

  // Trigger notification for new chat messages
  useEffect(() => {
    if (chatSessions.length === 0) return;

    let hasNew = false;
    let lastNewMsg: any = null;
    let chatSessionTitle = "Visitor";

    chatSessions.forEach((session) => {
      session.messages.forEach((msg) => {
        if (!seenChatMessagesRef.current.has(msg.id)) {
          seenChatMessagesRef.current.add(msg.id);
          if (msg.sender !== "admin") {
            hasNew = true;
            lastNewMsg = msg;
            chatSessionTitle = session.userName || "Visitor";
          }
        }
      });
    });

    if (hasNew && lastNewMsg) {
      if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
        new Notification(`New message from ${chatSessionTitle}`, {
          body: lastNewMsg.text,
          icon: "/favicon.ico"
        });
      }
    }
  }, [chatSessions]);

  // Trigger notification for new web emails
  useEffect(() => {
    if (webEmails.length === 0) return;

    let hasNew = false;
    let lastNewEmail: any = null;

    webEmails.forEach((email) => {
      if (!seenWebEmailsRef.current.has(email.id)) {
        seenWebEmailsRef.current.add(email.id);
        hasNew = true;
        lastNewEmail = email;
      }
    });

    if (hasNew && lastNewEmail) {
      if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
        new Notification("New Web Email Submission", {
          body: `From: ${lastNewEmail.name}\nService: ${lastNewEmail.service || "General"}\nMessage: ${lastNewEmail.message || ""}`,
          icon: "/favicon.ico"
        });
      }
    }
  }, [webEmails]);

  // Compute analytics dynamically from active state
  const analytics = useMemo(() => {
    const totalValue = leads.reduce((acc, curr) => curr.status !== "lost" ? acc + curr.estimatedValue : acc, 0);
    const activeCount = leads.filter(l => ["contacted", "consultation_scheduled", "proposal_sent"].includes(l.status)).length;
    const wonLeads = leads.filter(l => l.status === "won");
    const lostLeads = leads.filter(l => l.status === "lost");
    const wonValue = wonLeads.reduce((acc, curr) => acc + curr.estimatedValue, 0);
    const totalClosed = wonLeads.length + lostLeads.length;
    const winRate = totalClosed > 0 ? Math.round((wonLeads.length / totalClosed) * 100) : 0;
    const averageValue = leads.length > 0 ? Math.round(leads.reduce((acc, curr) => acc + curr.estimatedValue, 0) / leads.length) : 0;

    // 1. Project type distribution
    const typeCounts: Record<string, { count: number; value: number }> = {};
    leads.forEach(l => {
      if (!typeCounts[l.projectType]) {
        typeCounts[l.projectType] = { count: 0, value: 0 };
      }
      typeCounts[l.projectType].count += 1;
      typeCounts[l.projectType].value += l.estimatedValue;
    });

    const COLORS_PIE = ["#577a4c", "#3d5636", "#8fa886", "#a5b89d", "#b49876", "#8c6f4c", "#5a4533", "#2c2015", "#c5b59f", "#808a70"];
    const projectTypesChart = Object.entries(typeCounts).map(([name, data], idx) => ({
      name: name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
      value: data.count,
      amount: data.value,
      color: COLORS_PIE[idx % COLORS_PIE.length]
    }));

    // 2. Status distribution
    const statusLabels: Record<Lead["status"], string> = {
      new: "New Lead",
      contacted: "Contacted",
      consultation_scheduled: "Consultation Scheduled",
      proposal_sent: "Proposal Sent",
      won: "Contract Won",
      lost: "Lost / Closed"
    };

    const statusCounts: Record<string, number> = {
      "New Lead": 0,
      "Contacted": 0,
      "Consultation Scheduled": 0,
      "Proposal Sent": 0,
      "Contract Won": 0,
      "Lost / Closed": 0
    };

    leads.forEach(l => {
      const label = statusLabels[l.status];
      statusCounts[label] = (statusCounts[label] || 0) + 1;
    });

    const statusChart = Object.entries(statusCounts).map(([name, value]) => ({
      name,
      value
    }));

    // 3. Regional distribution (cities)
    const cityCounts: Record<string, number> = {};
    leads.forEach(l => {
      const parts = l.address.split(",");
      let city = "San Antonio";
      if (parts.length >= 2) {
        city = parts[parts.length - 2].trim();
      }
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });

    const regionChart = Object.entries(cityCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);

    // 4. Monthly timeline
    const monthlyData: Record<string, { count: number; value: number }> = {
      "Jan": { count: 3, value: 34000 },
      "Feb": { count: 5, value: 69000 },
      "Mar": { count: 8, value: 135000 },
      "Apr": { count: 7, value: 92000 },
      "May": { count: 11, value: 215000 },
      "Jun": { count: 0, value: 0 }
    };

    leads.forEach(l => {
      const date = new Date(l.createdAt);
      const month = date.toLocaleString("en-US", { month: "short" });
      if (monthlyData[month]) {
        monthlyData[month].count += 1;
        monthlyData[month].value += l.estimatedValue;
      }
    });

    const timelineChart = Object.entries(monthlyData).map(([month, data]) => ({
      name: month,
      leads: data.count,
      revenue: Math.round(data.value / 1000) // in thousands
    }));

    return {
      totalValue,
      activeCount,
      winRate,
      wonValue,
      averageValue,
      totalLeads: leads.length,
      projectTypesChart,
      statusChart,
      regionChart,
      timelineChart
    };
  }, [leads]);

  // leads filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filteredLeads = useMemo(() => {
    return leads.filter(l => {
      const matchesSearch =
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === "all" || l.status === statusFilter;
      const matchesType = typeFilter === "all" || l.projectType === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [leads, searchTerm, statusFilter, typeFilter]);

  // Lead editing state
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [selectedWebEmail, setSelectedWebEmail] = useState<WebEmail | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [editStatus, setEditStatus] = useState<Lead["status"]>("new");
  const [editNotes, setEditNotes] = useState<string>("");

  const handleOpenLeadDetails = (lead: Lead) => {
    setSelectedLead(lead);
    setEditValue(lead.estimatedValue.toString());
    setEditStatus(lead.status);
    setEditNotes(lead.notes || "");
  };

  const handleSaveLeadDetails = async () => {
    if (!selectedLead) return;
    const valueNum = parseInt(editValue) || 0;
    const updated = await updateLeadDetails(selectedLead.id, {
      estimatedValue: valueNum,
      status: editStatus,
      notes: editNotes
    });
    if (updated) setLeads(updated);
    setSelectedLead(null);
    toast.success("Lead details updated successfully.");
  };

  const handleDeleteLead = (id: string) => {
    triggerConfirm({
      title: "Delete Lead",
      message: "Are you sure you want to delete this lead? This action will permanently remove their records from your dashboard.",
      confirmText: "Delete",
      type: "danger",
      onConfirm: async () => {
        const updated = await deleteLead(id);
        setLeads(updated);
        setSelectedLead(null);
        toast.success("Lead deleted successfully.");
      }
    });
  };

  // Photo Uploader handler functions for Lead
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedLead) return;
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      const updatedLeads = await uploadLeadPhoto(selectedLead.id, base64String);
      setLeads(updatedLeads);
      const refreshed = updatedLeads.find(l => l.id === selectedLead.id);
      if (refreshed) setSelectedLead(refreshed);
      toast.success("Photo uploaded successfully.");
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoRemove = async (photoIndex: number) => {
    if (!selectedLead) return;
    const updatedLeads = await removeLeadPhoto(selectedLead.id, photoIndex);
    setLeads(updatedLeads);
    const refreshed = updatedLeads.find(l => l.id === selectedLead.id);
    if (refreshed) setSelectedLead(refreshed);
    toast.success("Photo removed successfully.");
  };

  // Review Photo Upload handler
  const handleReviewPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewReviewPhoto(reader.result as string);
      toast.success("Review completion photo attached.");
    };
    reader.readAsDataURL(file);
  };

  const handleGalleryPhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    setUploadProgress({ current: 0, total: fileList.length });

    try {
      let latestPhotos: any[] = [];

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];

        const base64String = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        setUploadProgress({ current: i + 1, total: fileList.length });
        const updated = await uploadGalleryPhoto(base64String);
        latestPhotos = updated;
      }

      if (latestPhotos.length > 0) {
        setGalleryPhotos(latestPhotos.map(p => p.url));
      }
      toast.success(`${fileList.length} photo(s) uploaded successfully!`);
    } catch (err) {
      console.error("Failed to upload photos:", err);
      toast.error("An error occurred during upload.");
    } finally {
      setUploadProgress(null);
      // Reset file input
      e.target.value = "";
    }
  };

  const handleBulkDelete = () => {
    if (selectedIndices.size === 0) return;
    triggerConfirm({
      title: "Delete Multiple Photos",
      message: `Are you sure you want to delete ${selectedIndices.size} photo(s) from the public gallery? This cannot be undone.`,
      confirmText: "Delete Photos",
      type: "danger",
      onConfirm: async () => {
        const toastId = toast.loading(`Deleting ${selectedIndices.size} photo(s)...`);
        try {
          const photos = await getGalleryPhotos();
          const ids = Array.from(selectedIndices).map(i => photos[i]?.id).filter(Boolean);

          setDeleteProgress({ current: 0, total: ids.length });
          let latestPhotos: any[] = [];
          for (let i = 0; i < ids.length; i++) {
            setDeleteProgress({ current: i + 1, total: ids.length });
            latestPhotos = await removeGalleryPhoto(ids[i]);
          }

          setGalleryPhotos(latestPhotos.map(p => p.url));
          setSelectedIndices(new Set());
          setSelectMode(false);
          toast.success(`${ids.length} photo(s) deleted.`, { id: toastId });
        } catch (err) {
          console.error("Bulk delete failed:", err);
          toast.error("Failed to delete some photos.", { id: toastId });
        } finally {
          setDeleteProgress(null);
        }
      }
    });
  };

  const toggleSelectPhoto = (index: number) => {
    setSelectedIndices(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedIndices.size === galleryPhotos.length) {
      setSelectedIndices(new Set());
    } else {
      setSelectedIndices(new Set(galleryPhotos.map((_, i) => i)));
    }
  };

  const handleGalleryPhotoRemove = (index: number) => {
    triggerConfirm({
      title: "Delete Gallery Photo",
      message: "Are you sure you want to remove this photo from the public gallery?",
      confirmText: "Remove",
      type: "danger",
      onConfirm: async () => {
        const photos = await getGalleryPhotos();
        const photoId = photos[index]?.id;
        if (!photoId) return;
        const updated = await removeGalleryPhoto(photoId);
        setGalleryPhotos(updated.map(p => p.url));
        toast.success("Photo removed from public gallery.");
      }
    });
  };

  const handleDeleteWebEmail = (id: string) => {
    triggerConfirm({
      title: "Delete Web Email",
      message: "Are you sure you want to delete this web email submission permanently? This cannot be undone.",
      confirmText: "Delete",
      type: "danger",
      onConfirm: async () => {
        const updated = await deleteWebEmail(id);
        setWebEmails(updated);
        toast.success("Web email deleted successfully.");
      }
    });
  };

  // Chat Session handlers
  const handleSelectSession = async (id: string) => {
    setActiveSessionId(id);
    const updated = await markChatAsRead(id);
    setChatSessions(updated);
  };

  const handleSendAdminReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminReplyText.trim() || !activeSessionId) return;

    const updated = await sendChatMessage(activeSessionId, "admin", adminReplyText);
    if (updated) {
      const allChats = await getChatSessions();
      setChatSessions(allChats);
      setAdminReplyText("");

      // Emit new message event to Socket.io relay
      const session = allChats.find((s) => s.id === activeSessionId);
      const lastMsg = session?.messages[session.messages.length - 1];
      if (socketRef.current && lastMsg) {
        socketRef.current.emit("new-message", {
          sessionId: activeSessionId,
          message: { ...lastMsg, sessionId: activeSessionId }
        });
      }
    }
  };

  const handleSimulateClientMessage = () => {
    if (!activeSessionId) {
      toast.error("Please select an active chat session first.");
      return;
    }
    const session = chatSessions.find(s => s.id === activeSessionId);
    if (!session) return;
    toast.info(`Simulating incoming message from ${session.clientName}...`);

    setTimeout(async () => {
      const messagesList = [
        "Hey! We're looking at a budget of around $25,000.",
        "Could you send me some project photos of covered patios you've built?",
        "Do you have openings next Wednesday morning for Robert to stop by?",
        "Thanks for the prompt response! Let's schedule it.",
        "Awesome! Looking forward to meeting Robert."
      ];
      const randomMsg = messagesList[Math.floor(Math.random() * messagesList.length)];
      const updated = await sendChatMessage(activeSessionId, "client", randomMsg);
      if (updated) {
        const allChats = await getChatSessions();
        setChatSessions(allChats);
        toast.success(`New message from ${session.clientName}!`);
      }
    }, 2500);
  };

  // Add Custom Lead Form State
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [newLeadData, setNewLeadData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "remodeling",
    description: "",
    contactTime: "morning",
    status: "new" as Lead["status"],
    estimatedValue: 15000,
    notes: ""
  });

  const handleAddLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadData.name || !newLeadData.phone) {
      toast.error("Please fill in Name and Phone Number.");
      return;
    }
    const added = await addCustomLead({
      name: newLeadData.name,
      email: newLeadData.email || `${newLeadData.name.toLowerCase().replace(/\s+/g, "")}@example.com`,
      phone: newLeadData.phone,
      address: newLeadData.address || "San Antonio, TX",
      projectType: newLeadData.projectType,
      description: newLeadData.description || "Manually logged customer lead.",
      contactTime: newLeadData.contactTime,
      status: newLeadData.status,
      estimatedValue: Number(newLeadData.estimatedValue) || 10000,
      notes: newLeadData.notes
    });
    setLeads([added, ...leads]);
    setShowAddLeadModal(false);
    setNewLeadData({
      name: "",
      email: "",
      phone: "",
      address: "",
      projectType: "remodeling",
      description: "",
      contactTime: "morning",
      status: "new",
      estimatedValue: 15000,
      notes: ""
    });
    toast.success("New lead logged successfully.");
  };

  // Review management states
  const [replyTextMap, setReplyTextMap] = useState<Record<string, string>>({});
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [newReviewData, setNewReviewData] = useState({
    title: "",
    text: "",
    author: "",
    location: "San Antonio",
    rating: 5
  });

  const handleToggleFeatured = async (id: string) => {
    const updated = await toggleReviewFeatured(id);
    if (updated) setReviews(updated);
    toast.success("Review visibility status toggled.");
  };

  const handleSaveReply = async (id: string) => {
    const replyText = replyTextMap[id];
    if (!replyText?.trim()) return;
    const updated = await replyToReview(id, replyText);
    if (updated) setReviews(updated);
    setReplyTextMap(prev => ({ ...prev, [id]: "" }));
    toast.success("Response posted to review.");
  };

  const handleAddReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewData.author || !newReviewData.text || !newReviewData.title) {
      toast.error("Please fill in all review fields.");
      return;
    }
    await addReview({
      title: newReviewData.title,
      text: newReviewData.text,
      author: newReviewData.author,
      location: newReviewData.location,
      rating: newReviewData.rating,
      newReviewPhoto: newReviewPhoto || undefined
    });
    const allReviews = await getReviews();
    setReviews(allReviews);
    setShowAddReviewModal(false);
    setNewReviewPhoto("");
    setNewReviewData({
      title: "",
      text: "",
      author: "",
      location: "San Antonio",
      rating: 5
    });
    toast.success("Client review added successfully.");
  };

  // Settings mock state
  const [settings, setSettings] = useState({
    adminEmail: "robertsa210@icloud.com",
    officePhone: "(210) 429-5526",
    autoSmsTemplate: "Hi {Name}, thank you for contacting JRM Construction! Robert Thompson will contact you during the {Time} to discuss your {Type} project.",
    sendAutoEmail: true,
    sendAutoSms: true,
    hoursWeekday: "8:00 AM - 5:00 PM",
    hoursSaturday: "8:00 AM - 5:00 PM",
    hoursSunday: "Closed (Emergency 24/7)"
  });

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Configuration preferences saved successfully.");
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#1c140d] flex flex-col items-center justify-center text-white" style={{ backgroundImage: "linear-gradient(to bottom, rgba(28, 20, 13, 0.95), rgba(20, 16, 13, 0.98)), url('/src/assets/wel-bg.png')" }}>
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
          <p className="text-xs text-neutral-400 font-light tracking-widest uppercase mt-4">Robert's Office — Loading Portal...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f4f3ef] text-neutral-800 font-sans flex flex-col antialiased">
      {/* ── TOP NAV BAR ── */}
      <header className="bg-[#1c140d] text-white py-4 px-6 md:px-12 flex items-center justify-between shadow-md shrink-0 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <Link to="/" className="hover:opacity-85 transition-opacity">
            <img src={logo} alt="JRM" className="h-10 w-auto object-contain brightness-110" />
          </Link>
          <div className="hidden sm:block h-5 w-[1px] bg-neutral-700 mx-2" />
          <div className="hidden sm:block">
            <h2 className="text-sm font-semibold tracking-wider text-[#a5b89d] uppercase">Admin Portal</h2>
            <p className="text-[10px] text-neutral-400 font-light">Robert's Office v1.2</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-xs font-semibold text-neutral-200 capitalize">
              {currentUser?.username || "Robert Thompson"}
            </p>
            <p className="text-[10px] text-neutral-400 capitalize">
              {currentUser?.role ? `${currentUser.role} Account` : "Owner & Administrator"}
            </p>
          </div>
          <div className="h-9 w-9 rounded-full bg-[#577a4c] text-white flex items-center justify-center font-bold text-sm shadow-inner uppercase">
            {currentUser?.username ? currentUser.username.substring(0, 2) : "RT"}
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("jrm-admin-token");
              toast.success("Successfully logged out.");
              navigate({ to: "/login" });
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-neutral-300 transition-all cursor-pointer border border-white/10"
            title="Log Out / Exit"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* ── DASHBOARD WORKSPACE ── */}
      <main className="flex-1 max-w-[1500px] w-full mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-6 items-start">
        {/* Sidebar Navigation */}
        <nav className="w-full md:w-[240px] shrink-0 bg-white border border-[#eae8e1] rounded-2xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.02)] space-y-1.5 md:sticky md:top-8 z-10">
          <div className="px-3 py-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
            Navigation Menu
          </div>
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "overview"
              ? "bg-[#577a4c]/10 text-[#3d5636] border-l-4 border-[#577a4c]"
              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
          >
            <TrendingUp className="h-4.5 w-4.5" />
            <span>Overview & Stats</span>
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "leads"
              ? "bg-[#577a4c]/10 text-[#3d5636] border-l-4 border-[#577a4c]"
              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
          >
            <span className="flex items-center gap-3">
              <Briefcase className="h-4.5 w-4.5" />
              <span>Leads Manager</span>
            </span>
            {leads.filter(l => l.status === "new").length > 0 && (
              <span className="bg-[#577a4c] text-white text-[9px] font-bold h-4.5 min-w-4.5 px-1 rounded-full flex items-center justify-center animate-pulse">
                {leads.filter(l => l.status === "new").length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "reviews"
              ? "bg-[#577a4c]/10 text-[#3d5636] border-l-4 border-[#577a4c]"
              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
          >
            <MessageSquare className="h-4.5 w-4.5" />
            <span>Reviews Moderator</span>
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "chat"
              ? "bg-[#577a4c]/10 text-[#3d5636] border-l-4 border-[#577a4c]"
              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="h-4.5 w-4.5" />
              <span>Live Chat</span>
            </span>
            {chatSessions.filter(s => s.unread).length > 0 && (
              <span className="bg-[#577a4c] text-white text-[9px] font-bold h-4.5 min-w-4.5 px-1 rounded-full flex items-center justify-center animate-pulse">
                {chatSessions.filter(s => s.unread).length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "gallery"
              ? "bg-[#577a4c]/10 text-[#3d5636] border-l-4 border-[#577a4c]"
              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
          >
            <ImageIcon className="h-4.5 w-4.5" />
            <span>Update Gallery</span>
          </button>

          <button
            onClick={() => setActiveTab("emails")}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "emails"
              ? "bg-[#577a4c]/10 text-[#3d5636] border-l-4 border-[#577a4c]"
              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
          >
            <span className="flex items-center gap-3">
              <Mail className="h-4.5 w-4.5" />
              <span>Web Emails</span>
            </span>
            {webEmails.length > 0 && (
              <span className="bg-[#577a4c]/15 text-[#3d5636] text-[9px] font-bold h-4.5 min-w-4.5 px-1.5 rounded-full flex items-center justify-center">
                {webEmails.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "settings"
              ? "bg-[#577a4c]/10 text-[#3d5636] border-l-4 border-[#577a4c]"
              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
          >
            <Settings className="h-4.5 w-4.5" />
            <span>Portal Settings</span>
          </button>

          {currentUser?.role === "admin" && (
            <button
              onClick={() => setActiveTab("security")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "security"
                ? "bg-[#577a4c]/10 text-[#3d5636] border-l-4 border-[#577a4c]"
                : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
            >
              <ShieldAlert className="h-4.5 w-4.5" />
              <span>Security Settings</span>
            </button>
          )}

          <div className="pt-4 border-t border-[#eae8e1] mt-4">
            <div className="bg-[#fcfbf8] border border-neutral-100 rounded-xl p-3.5 space-y-2 text-left">
              <div className="flex items-center gap-2 text-[#3d5636] font-bold text-[11px] uppercase tracking-wide">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Quick Assist</span>
              </div>
              <p className="text-[10px] text-neutral-500 font-light leading-relaxed">
                Log leads, check performance logs, moderate public review widgets, and track conversion values in real time.
              </p>
              <a
                href="tel:2104295526"
                className="block text-center text-[10px] font-bold text-[#3d5636] border border-[#577a4c]/30 hover:bg-[#577a4c]/5 py-1.5 rounded-lg mt-2 transition-all"
              >
                Call Support
              </a>
            </div>
          </div>
        </nav>

        {/* Dynamic Display Panels */}
        <section className="flex-1 w-full min-w-0">
          <AnimatePresence mode="wait">
            {/* ── TAB 1: OVERVIEW & ANALYTICS ── */}
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Heading Widget */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900 font-serif">Executive Summary & Analytics</h1>
                    <p className="text-xs text-neutral-500 font-light mt-1">Real-time indicators and visualizations calculated from customer activities.</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-[#eae8e1] px-4 py-2 rounded-xl text-xs font-semibold text-neutral-600 shadow-xs">
                    <Calendar className="h-4 w-4 text-[#3d5636]" />
                    <span>June 2026 Summary</span>
                  </div>
                </div>

                {/* KPI Metrics Strip */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  {/* KPI 1 */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-[10px] font-bold uppercase tracking-wider">Pipeline Value</span>
                      <DollarSign className="h-4 w-4 text-[#577a4c]" />
                    </div>
                    <div className="mt-3.5">
                      <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-none">
                        ${analytics.totalValue.toLocaleString()}
                      </h3>
                      <p className="text-[10px] text-green-600 font-semibold mt-1.5 flex items-center gap-0.5">
                        <ArrowUpRight className="h-3 w-3" />
                        <span>+12% vs last month</span>
                      </p>
                    </div>
                  </div>

                  {/* KPI 2 */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-[10px] font-bold uppercase tracking-wider">Active Deals</span>
                      <Briefcase className="h-4 w-4 text-[#577a4c]" />
                    </div>
                    <div className="mt-3.5">
                      <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-none">
                        {analytics.activeCount}
                      </h3>
                      <p className="text-[10px] text-neutral-500 font-light mt-1.5">
                        Remodels & landscapes
                      </p>
                    </div>
                  </div>

                  {/* KPI 3 */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-[10px] font-bold uppercase tracking-wider">Win Rate</span>
                      <TrendingUp className="h-4 w-4 text-[#577a4c]" />
                    </div>
                    <div className="mt-3.5">
                      <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-none">
                        {analytics.winRate}%
                      </h3>
                      <p className="text-[10px] text-green-600 font-semibold mt-1.5 flex items-center gap-0.5">
                        <ArrowUpRight className="h-3 w-3" />
                        <span>+4% this quarter</span>
                      </p>
                    </div>
                  </div>

                  {/* KPI 4 */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-[10px] font-bold uppercase tracking-wider">Won Revenue</span>
                      <DollarSign className="h-4 w-4 text-[#577a4c]" />
                    </div>
                    <div className="mt-3.5">
                      <h3 className="text-xl md:text-2xl font-extrabold text-[#3d5636] leading-none">
                        ${analytics.wonValue.toLocaleString()}
                      </h3>
                      <p className="text-[10px] text-neutral-500 font-light mt-1.5">
                        Completed & deposits
                      </p>
                    </div>
                  </div>

                  {/* KPI 5 */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-[10px] font-bold uppercase tracking-wider">Avg Deal Value</span>
                      <Users className="h-4 w-4 text-[#577a4c]" />
                    </div>
                    <div className="mt-3.5">
                      <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-none">
                        ${analytics.averageValue.toLocaleString()}
                      </h3>
                      <p className="text-[10px] text-neutral-500 font-light mt-1.5">
                        Across {analytics.totalLeads} enquiries
                      </p>
                    </div>
                  </div>
                </div>

                {/* Charts Grid */}
                <div className="grid md:grid-cols-12 gap-6">
                  {/* Graph 1: Timeline Volume */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Monthly Revenue & Lead Volume</h4>
                      <p className="text-[11px] text-neutral-500 font-light">Lead counts and estimated pipeline value ($ in Thousands) per month.</p>
                    </div>
                    <div className="h-[250px] w-full mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={analytics.timelineChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#577a4c" stopOpacity={0.4} />
                              <stop offset="95%" stopColor="#577a4c" stopOpacity={0.0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1eeeb" />
                          <XAxis dataKey="name" stroke="#a3a3a3" fontSize={10} tickLine={false} />
                          <YAxis stroke="#a3a3a3" fontSize={10} tickLine={false} />
                          <RechartsTooltip />
                          <Legend verticalAlign="top" height={36} iconSize={10} wrapperStyle={{ fontSize: 11 }} />
                          <Area name="Pipeline Value ($K)" type="monotone" dataKey="revenue" stroke="#577a4c" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                          <Area name="Leads Count" type="monotone" dataKey="leads" stroke="#1c140d" fill="none" strokeWidth={1.5} strokeDasharray="4 4" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Graph 2: Project types donut */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs md:col-span-5 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Project Distribution</h4>
                      <p className="text-[11px] text-neutral-500 font-light">Distribution of leads categorized by request project type.</p>
                    </div>
                    <div className="h-[220px] w-full mt-2 relative flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={analytics.projectTypesChart}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {analytics.projectTypesChart.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <RechartsTooltip formatter={(value, name, props) => [`${value} leads ($${props.payload.amount.toLocaleString()})`, name]} />
                        </PieChart>
                      </ResponsiveContainer>
                      {/* Center labels */}
                      <div className="absolute text-center">
                        <span className="text-2xl font-black text-neutral-900">{analytics.totalLeads}</span>
                        <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">Enquiries</p>
                      </div>
                    </div>
                    <div className="max-h-[100px] overflow-y-auto grid grid-cols-2 gap-1.5 text-[10px] font-medium text-neutral-600 border-t border-[#f4f3ef] pt-3.5 mt-2">
                      {analytics.projectTypesChart.map((entry) => (
                        <div key={entry.name} className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                          <span className="truncate">{entry.name} ({entry.value})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Graph 3: Status Breakdown */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Pipeline Stage Funnel</h4>
                      <p className="text-[11px] text-neutral-500 font-light">Volume of leads currently sitting in each step of our sales process.</p>
                    </div>
                    <div className="h-[240px] w-full mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={analytics.statusChart} layout="vertical" margin={{ top: 5, right: 10, left: 30, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1eeeb" horizontal={false} />
                          <XAxis type="number" stroke="#a3a3a3" fontSize={10} tickLine={false} />
                          <YAxis type="category" dataKey="name" stroke="#a3a3a3" fontSize={9} tickLine={false} width={110} />
                          <RechartsTooltip />
                          <Bar dataKey="value" fill="#3d5636" radius={[0, 4, 4, 0]}>
                            {analytics.statusChart.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.name.includes("Won") ? "#577a4c" : entry.name.includes("Lost") ? "#cc5c5c" : "#b49876"} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Graph 4: Regional Distribution */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 md:p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Regional Market Volume</h4>
                      <p className="text-[11px] text-neutral-500 font-light">Ranking of inquiry counts by city within our 80-mile service radius.</p>
                    </div>
                    <div className="h-[240px] w-full mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={analytics.regionChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1eeeb" vertical={false} />
                          <XAxis dataKey="name" stroke="#a3a3a3" fontSize={10} tickLine={false} />
                          <YAxis stroke="#a3a3a3" fontSize={10} tickLine={false} />
                          <RechartsTooltip />
                          <Bar dataKey="value" fill="#8fa886" radius={[4, 4, 0, 0]} barSize={25} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── TAB 2: LEADS & INQUIRIES MANAGER ── */}
            {activeTab === "leads" && (
              <motion.div
                key="leads"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Heading Widget */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900 font-serif">Customer Leads Tracker</h1>
                    <p className="text-xs text-neutral-500 font-light mt-1">Manage, evaluate, and coordinate all inbound project inquiries.</p>
                  </div>
                  <button
                    onClick={() => setShowAddLeadModal(true)}
                    disabled={isViewer}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md select-none cursor-pointer ${
                      isViewer
                        ? "bg-neutral-300 text-neutral-500 cursor-not-allowed opacity-60"
                        : "bg-[#1c140d] hover:bg-[#2c2015] text-white active:scale-98"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                    <span>Log New Inquiry</span>
                  </button>
                </div>

                {/* Filters Banner */}
                <div className="bg-white border border-[#eae8e1] rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full md:max-w-xs">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search name, phone, address..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#577a4c]/20 focus:border-[#577a4c] transition-all placeholder-neutral-400"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    {/* Status Filter */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                      <Filter className="h-3.5 w-3.5 text-neutral-400" />
                      <span>Status:</span>
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-neutral-50 border border-neutral-200 rounded-lg py-1.5 px-3 text-xs text-neutral-700 focus:outline-none focus:ring-1 focus:ring-[#577a4c] focus:border-[#577a4c] cursor-pointer"
                      >
                        <option value="all">All Statuses</option>
                        <option value="new">New Lead</option>
                        <option value="contacted">Contacted</option>
                        <option value="consultation_scheduled">Consultation Scheduled</option>
                        <option value="proposal_sent">Proposal Sent</option>
                        <option value="won">Won (Contracted)</option>
                        <option value="lost">Lost / Closed</option>
                      </select>
                    </div>

                    {/* Project Type Filter */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                      <span>Project:</span>
                      <select
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="bg-neutral-50 border border-neutral-200 rounded-lg py-1.5 px-3 text-xs text-neutral-700 focus:outline-none focus:ring-1 focus:ring-[#577a4c] focus:border-[#577a4c] cursor-pointer"
                      >
                        <option value="all">All Projects</option>
                        <option value="remodeling">House Remodeling</option>
                        <option value="new-construction">New Construction</option>
                        <option value="outdoor-kitchen">Outdoor Kitchen</option>
                        <option value="fireplace">Custom Fireplace</option>
                        <option value="patio">Covered Patio</option>
                        <option value="hardscapes">Hardscapes</option>
                        <option value="softscapes">Softscapes</option>
                        <option value="fencing">Fencing</option>
                        <option value="turf">Artificial Turf</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Leads Table Container */}
                <div className="bg-white border border-[#eae8e1] rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs md:text-sm border-collapse">
                      <thead>
                        <tr className="bg-neutral-50 border-b border-[#eae8e1] text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                          <th className="py-4 px-5">Contact / Client</th>
                          <th className="py-4 px-5">Date</th>
                          <th className="py-4 px-5 font-semibold">City</th>
                          <th className="py-4 px-5">Project Type</th>
                          <th className="py-4 px-5">Estimated Value</th>
                          <th className="py-4 px-5">Status</th>
                          <th className="py-4 px-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredLeads.length > 0 ? (
                          filteredLeads.map((lead) => {
                            const parts = lead.address.split(",");
                            let city = "San Antonio";
                            if (parts.length >= 2) {
                              city = parts[parts.length - 2].trim();
                            }

                            const statusColors: Record<Lead["status"], string> = {
                              new: "bg-[#2563eb]/10 text-[#2563eb] border-[#2563eb]/20",
                              contacted: "bg-blue-600/10 text-blue-700 border-blue-600/20",
                              consultation_scheduled: "bg-[#b49876]/10 text-[#8c6f4c] border-[#b49876]/20",
                              proposal_sent: "bg-orange-500/10 text-orange-700 border-orange-500/20",
                              won: "bg-[#577a4c]/15 text-[#3d5636] border-[#577a4c]/20",
                              lost: "bg-red-500/10 text-red-700 border-red-500/20"
                            };

                            const statusLabels: Record<Lead["status"], string> = {
                              new: "New Lead",
                              contacted: "Contacted",
                              consultation_scheduled: "Consultation Scheduled",
                              proposal_sent: "Proposal Sent",
                              won: "Contract Won",
                              lost: "Closed / Lost"
                            };

                            return (
                              <tr key={lead.id} className="border-b border-[#f4f3ef] hover:bg-neutral-50/50 transition-colors">
                                <td className="py-4 px-5">
                                  <div className="font-semibold text-neutral-900 text-xs md:text-sm">{lead.name}</div>
                                  <div className="text-[10px] text-neutral-400 mt-0.5">{lead.phone}</div>
                                </td>
                                <td className="py-4 px-5 text-[11px] text-neutral-500">
                                  {new Date(lead.createdAt).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}
                                </td>
                                <td className="py-4 px-5 font-medium text-neutral-700 text-xs">{city}</td>
                                <td className="py-4 px-5">
                                  <span className="inline-flex bg-neutral-100 text-neutral-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                                    {lead.projectType.split("-").join(" ")}
                                  </span>
                                </td>
                                <td className="py-4 px-5 font-bold text-neutral-800">
                                  ${lead.estimatedValue.toLocaleString()}
                                </td>
                                <td className="py-4 px-5">
                                  <span className={`inline-flex items-center border text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${statusColors[lead.status]}`}>
                                    {statusLabels[lead.status]}
                                  </span>
                                </td>
                                <td className="py-4 px-5 text-right">
                                  <div className="flex items-center justify-end gap-1.5">
                                    <button
                                      onClick={() => handleOpenLeadDetails(lead)}
                                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 hover:bg-[#577a4c]/10 hover:text-[#3d5636] text-neutral-600 transition-all cursor-pointer"
                                      title={isViewer ? "View Lead Details" : "Review / Edit Lead"}
                                    >
                                      {isViewer ? <Eye className="h-3.5 w-3.5" /> : <Edit2 className="h-3.5 w-3.5" />}
                                    </button>
                                    {!isViewer && (
                                      <button
                                        onClick={() => handleDeleteLead(lead.id)}
                                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 hover:bg-red-500/10 hover:text-red-600 text-neutral-600 transition-all cursor-pointer"
                                        title="Delete"
                                      >
                                        <Trash2 className="h-3.5 w-3.5" />
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan={7} className="py-12 px-5 text-center text-neutral-400 font-light text-xs">
                              No records match current searches or category configurations.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-neutral-50 px-5 py-3.5 border-t border-[#eae8e1] flex items-center justify-between text-[11px] text-neutral-400 font-medium">
                    <span>Showing {filteredLeads.length} of {leads.length} recorded inquiries</span>
                    <span>Values dynamic from client forms</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── TAB 3: REVIEWS MODERATOR ── */}
            {activeTab === "reviews" && (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Heading Widget */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900 font-serif">Customer Reviews & Testimonials</h1>
                    <p className="text-xs text-neutral-500 font-light mt-1">Moderate customer reviews and publish replies directly to the client website.</p>
                  </div>
                  <button
                    onClick={() => setShowAddReviewModal(true)}
                    disabled={isViewer}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md select-none cursor-pointer ${
                      isViewer
                        ? "bg-neutral-300 text-neutral-500 cursor-not-allowed opacity-60"
                        : "bg-[#1c140d] hover:bg-[#2c2015] text-white active:scale-98"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                    <span>Post Review Manually</span>
                  </button>
                </div>

                {/* Score Summary Banner */}
                <div className="grid sm:grid-cols-3 gap-6">
                  {/* Score Card 1 */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xl">
                      ★
                    </div>
                    <div>
                      <h4 className="text-2xl font-extrabold text-neutral-950">5.0 / 5.0</h4>
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Perfect Rating Average</p>
                    </div>
                  </div>

                  {/* Score Card 2 */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center">
                      <ThumbsUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-extrabold text-neutral-950">
                        {reviews.filter(r => r.featured).length}
                      </h4>
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Featured on Website</p>
                    </div>
                  </div>

                  {/* Score Card 3 */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-500 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-extrabold text-neutral-950">
                        {reviews.filter(r => r.replyText).length}
                      </h4>
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Replies Documented</p>
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white border border-[#eae8e1] rounded-2xl p-5 md:p-6 shadow-xs relative overflow-hidden flex flex-col md:flex-row gap-6 justify-between text-left group"
                    >
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-neutral-900 text-sm">{review.author}</span>
                            <span className="text-neutral-300">·</span>
                            <span className="inline-flex items-center gap-1 bg-[#577a4c]/10 text-[#3d5636] text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              <MapPin className="w-2.5 h-2.5" />
                              {review.location}
                            </span>
                          </div>

                          <div className="text-[10px] text-neutral-400 font-medium">
                            {new Date(review.createdAt).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}
                          </div>
                        </div>

                        {/* Stars & Title */}
                        <div className="flex items-center gap-2">
                          <div className="flex text-amber-500 text-xs">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                          <span className="text-xs font-bold text-neutral-800 uppercase tracking-wide">
                            {review.title}
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-neutral-600 font-light italic leading-relaxed font-serif">
                          "{review.text}"
                        </p>

                        {/* Robert's Reply Column */}
                        {review.replyText ? (
                          <div className="bg-[#fcfbf8] border border-neutral-100 rounded-xl p-3.5 space-y-1.5 ml-4 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#577a4c] rounded-full" />
                            <div className="flex items-center gap-1.5 text-[#3d5636] font-bold text-[10px] uppercase tracking-wider">
                              <Building className="h-3 w-3" />
                              <span>Owner Reply (Robert Thompson)</span>
                            </div>
                            <p className="text-xs text-neutral-600 leading-relaxed font-light font-sans">
                              "{review.replyText}"
                            </p>
                          </div>
                        ) : !isViewer ? (
                          <div className="ml-4 pt-1 max-w-lg">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                placeholder="Write Robert's reply here..."
                                value={replyTextMap[review.id] || ""}
                                onChange={(e) => setReplyTextMap(prev => ({ ...prev, [review.id]: e.target.value }))}
                                className="flex-1 bg-neutral-50 border border-neutral-200 rounded-lg py-1.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#577a4c] placeholder-neutral-400"
                              />
                              <button
                                onClick={() => handleSaveReply(review.id)}
                                className="bg-[#577a4c] hover:bg-[#3d5636] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95"
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="ml-4 pt-1 text-[11px] text-neutral-400 font-light italic">
                            Replying is restricted to editor and admin roles.
                          </div>
                        )}
                      </div>

                      {/* Right Control Box */}
                      <div className="md:w-[150px] shrink-0 border-t md:border-t-0 md:border-l border-neutral-100 pt-4 md:pt-0 md:pl-5 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center gap-4">
                        <div className="text-left">
                          <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Featured</span>
                          <span className="text-[9px] text-neutral-500 font-light block">Display on reviews page</span>
                        </div>
                        <label className={`relative inline-flex items-center select-none ${isViewer ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                          <input
                            type="checkbox"
                            checked={review.featured}
                            disabled={isViewer}
                            onChange={() => handleToggleFeatured(review.id)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#577a4c]" />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── TAB 4: SYSTEM SETTINGS ── */}
            {activeTab === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs max-w-4xl"
              >
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-neutral-900 font-serif">Portal & Site configurations</h1>
                  <p className="text-xs text-neutral-500 font-light mt-1">Set contact alerts, office calendar variables, and SMS automation triggers.</p>
                </div>

                <form onSubmit={handleSaveSettings} className="space-y-6 mt-8 text-left">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Inquiry Alert Email Address
                      </label>
                      <input
                        type="email"
                        disabled={isViewer}
                        value={settings.adminEmail}
                        onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Primary Office Contact Line
                      </label>
                      <input
                        type="text"
                        disabled={isViewer}
                        value={settings.officePhone}
                        onChange={(e) => setSettings({ ...settings, officePhone: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c]"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Automated Customer Text/SMS Template
                    </label>
                    <textarea
                      rows={3}
                      disabled={isViewer}
                      value={settings.autoSmsTemplate}
                      onChange={(e) => setSettings({ ...settings, autoSmsTemplate: e.target.value })}
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c] resize-none font-light leading-relaxed"
                    />
                    <span className="text-[10px] text-neutral-450 mt-1 block">
                      Variables auto-populated: {'{Name}'}, {'{Time}'}, {'{Type}'}
                    </span>
                  </div>

                  {/* Row 3 */}
                  <div className="border-t border-[#eae8e1] pt-6 grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 bg-[#fcfbf8] rounded-xl border border-neutral-100">
                      <div>
                        <span className="text-xs font-bold text-neutral-800 block">Automated Email Alert</span>
                        <span className="text-[10px] text-neutral-400 font-light">Send receipt copies to Robert</span>
                      </div>
                      <label className={`relative inline-flex items-center ${isViewer ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                        <input
                          type="checkbox"
                          disabled={isViewer}
                          checked={settings.sendAutoEmail}
                          onChange={(e) => setSettings({ ...settings, sendAutoEmail: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-neutral-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#577a4c]" />
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#fcfbf8] rounded-xl border border-neutral-100">
                      <div>
                        <span className="text-xs font-bold text-neutral-800 block">Immediate SMS Alert</span>
                        <span className="text-[10px] text-neutral-400 font-light">Send welcome message to client phone</span>
                      </div>
                      <label className={`relative inline-flex items-center ${isViewer ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                        <input
                          type="checkbox"
                          disabled={isViewer}
                          checked={settings.sendAutoSms}
                          onChange={(e) => setSettings({ ...settings, sendAutoSms: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-neutral-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#577a4c]" />
                      </label>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="border-t border-[#eae8e1] pt-6 space-y-4">
                    <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">Business Calendar Schedule</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[10px] text-neutral-500 font-bold uppercase mb-1">Weekdays</label>
                        <input
                          type="text"
                          disabled={isViewer}
                          value={settings.hoursWeekday}
                          onChange={(e) => setSettings({ ...settings, hoursWeekday: e.target.value })}
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-neutral-500 font-bold uppercase mb-1">Saturdays</label>
                        <input
                          type="text"
                          disabled={isViewer}
                          value={settings.hoursSaturday}
                          onChange={(e) => setSettings({ ...settings, hoursSaturday: e.target.value })}
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-neutral-550 font-bold uppercase mb-1">Sundays</label>
                        <input
                          type="text"
                          disabled={isViewer}
                          value={settings.hoursSunday}
                          onChange={(e) => setSettings({ ...settings, hoursSunday: e.target.value })}
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#eae8e1] flex justify-end">
                    <button
                      type="submit"
                      disabled={isViewer}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer select-none ${
                        isViewer
                          ? "bg-neutral-300 text-neutral-500 cursor-not-allowed opacity-60"
                          : "bg-[#1c140d] hover:bg-[#2c2015] text-white active:scale-98"
                      }`}
                    >
                      {isViewer ? "Read-Only Settings" : "Save Configurations"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* ── TAB 5: LIVE CHAT WORKSPACE ── */}
            {activeTab === "chat" && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#eae8e1] rounded-2xl overflow-hidden shadow-xs flex flex-col md:flex-row h-[600px] w-full"
              >
                {/* Left Side: Sessions List */}
                <div className="w-full md:w-[280px] shrink-0 border-b md:border-b-0 md:border-r border-neutral-100 flex flex-col h-1/3 md:h-full bg-[#fcfbf8]">
                  <div className="p-4 border-b border-neutral-100 bg-white text-left">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-850">
                      Active Conversations
                    </h3>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Real-time customer threads</p>
                  </div>
                  <div className="flex-1 overflow-y-auto divide-y divide-neutral-100/50">
                    {chatSessions.length === 0 ? (
                      <div className="p-8 text-center text-neutral-400 text-xs font-light">
                        No active conversations yet.
                      </div>
                    ) : (
                      chatSessions.map((session) => {
                        const lastMsg = session.messages[session.messages.length - 1];
                        return (
                          <button
                            key={session.id}
                            type="button"
                            onClick={() => handleSelectSession(session.id)}
                            className={`w-full text-left p-4 transition-all duration-200 cursor-pointer flex flex-col gap-1.5 ${activeSessionId === session.id
                              ? "bg-[#577a4c]/5 border-l-4 border-[#577a4c]"
                              : "hover:bg-neutral-50/80 bg-transparent border-l-4 border-transparent"
                              }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900 block truncate max-w-[140px]">
                                {session.clientName}
                              </span>
                              <span className="text-[9px] text-neutral-400 whitespace-nowrap">
                                {lastMsg ? formatChatTime(lastMsg.timestamp) : ""}
                              </span>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] text-neutral-500 font-light truncate flex-1 leading-normal">
                                {lastMsg ? lastMsg.text : "No messages yet"}
                              </span>
                              {session.unread && (
                                <span className="bg-[#577a4c] text-white text-[9px] font-bold h-4.5 min-w-4.5 px-1.5 rounded-full flex items-center justify-center shrink-0 animate-pulse">
                                  NEW
                                </span>
                              )}
                            </div>
                            <span className="text-[8px] bg-neutral-100 text-neutral-500 font-semibold px-1.5 py-0.5 rounded self-start uppercase tracking-wider">
                              {session.clientCity}
                            </span>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Right Side: Messages Pane */}
                <div className="flex-1 flex flex-col h-2/3 md:h-full bg-white">
                  {activeSessionId ? (
                    (() => {
                      const session = chatSessions.find(s => s.id === activeSessionId);
                      if (!session) return null;
                      return (
                        <>
                          {/* Chat Header */}
                          <div className="p-4 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between bg-[#fcfbf8] gap-3">
                            <div className="text-left">
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <h4 className="text-sm font-bold text-neutral-900">{session.clientName}</h4>
                                <span className="text-[9px] bg-[#577a4c]/10 text-[#577a4c] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  {session.clientCity}
                                </span>
                              </div>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-neutral-500 font-light mt-1">
                                {session.clientPhone && (
                                  <a href={`tel:${session.clientPhone}`} className="hover:text-[#577a4c] hover:underline transition-colors flex items-center gap-1">
                                    <Phone className="h-3 w-3 text-neutral-450" />
                                    <span>{session.clientPhone}</span>
                                  </a>
                                )}
                                {session.clientPhone && session.clientEmail && (
                                  <span className="text-neutral-300">|</span>
                                )}
                                {session.clientEmail && (
                                  <a href={`mailto:${session.clientEmail}`} className="hover:text-[#577a4c] hover:underline transition-colors flex items-center gap-1">
                                    <Mail className="h-3 w-3 text-neutral-450" />
                                    <span>{session.clientEmail}</span>
                                  </a>
                                )}
                              </div>
                            </div>
                            {!isViewer && (
                              <button
                                type="button"
                                onClick={handleSimulateClientMessage}
                                className="text-[9px] font-bold bg-[#1c140d] hover:bg-[#2c2015] text-white px-2.5 py-1.5 rounded-lg uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 shadow-sm self-start sm:self-auto"
                              >
                                <Plus className="h-3 w-3" />
                                Simulate Client Msg
                              </button>
                            )}
                          </div>

                          {/* Message List */}
                          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#fbfaf7]/40 flex flex-col">
                            {session.messages.map((msg) => {
                              const isAdmin = msg.sender === "admin";
                              return (
                                <div
                                  key={msg.id}
                                  className={`flex flex-col max-w-[80%] ${isAdmin ? "ml-auto items-end" : "mr-auto items-start"
                                    }`}
                                >
                                  <div
                                    className={`p-3 rounded-2xl text-xs leading-relaxed text-left ${isAdmin
                                      ? "bg-[#577a4c] text-white rounded-tr-none shadow-sm"
                                      : "bg-white border border-neutral-200 text-neutral-800 rounded-tl-none shadow-xs"
                                      }`}
                                  >
                                    {msg.text}
                                  </div>
                                  <span className="text-[8px] text-neutral-450 mt-1 px-1">
                                    {formatChatTime(msg.timestamp)}
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Chat Input */}
                          <form
                            onSubmit={handleSendAdminReply}
                            className="p-4 border-t border-neutral-100 bg-white space-y-2 text-left"
                          >
                            <div className="flex gap-2">
                              <input
                                type="text"
                                disabled={isViewer}
                                placeholder={isViewer ? "Chat replies are deactivated for read-only viewer role" : "Type response message here..."}
                                value={adminReplyText}
                                onChange={(e) => setAdminReplyText(e.target.value)}
                                className="flex-1 bg-[#fbfaf7] rounded-xl border border-neutral-200 px-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c]"
                              />
                              <button
                                type="submit"
                                disabled={isViewer}
                                className={`px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-1 ${
                                  isViewer
                                    ? "bg-neutral-300 text-neutral-500 cursor-not-allowed opacity-60"
                                    : "bg-[#577a4c] hover:bg-[#3d5636] text-white"
                                }`}
                              >
                                Send
                              </button>
                            </div>
                            <p className="text-[9px] text-neutral-400 font-light text-right">
                              Replies are broadcast to the user widget instantly via HTML5 storage.
                            </p>
                          </form>
                        </>
                      );
                    })()
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#fcfbf8]">
                      <div className="h-12 w-12 rounded-full bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-3">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <h4 className="text-xs font-bold text-neutral-805 uppercase tracking-wider">
                        No thread selected
                      </h4>
                      <p className="text-[10px] text-neutral-400 font-light mt-1 max-w-[220px] leading-relaxed">
                        Select a chat thread from the left pane to begin instant conversation with the client website visitor.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ── TAB 6: GALLERY MANAGER WORKSPACE ── */}
            {activeTab === "gallery" && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs w-full text-left space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
                  <div>
                    <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-serif">Portfolio Gallery Manager</h1>
                    <p className="text-xs text-neutral-500 font-light mt-1">
                      {galleryPhotos.length} photo{galleryPhotos.length !== 1 ? "s" : ""} in gallery
                      {selectMode && selectedIndices.size > 0 && (
                        <span className="ml-2 text-[#577a4c] font-semibold">· {selectedIndices.size} selected</span>
                      )}
                    </p>
                  </div>
                  {!isViewer ? (
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Select Mode Toggle */}
                      <button
                        type="button"
                        onClick={() => { setSelectMode(s => !s); setSelectedIndices(new Set()); }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm border ${selectMode
                          ? "bg-neutral-800 text-white border-neutral-800"
                          : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                          }`}
                      >
                        {selectMode ? "Cancel" : "Select"}
                      </button>

                      {/* Select All (only in select mode) */}
                      {selectMode && galleryPhotos.length > 0 && (
                        <button
                          type="button"
                          onClick={handleSelectAll}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm border bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                        >
                          {selectedIndices.size === galleryPhotos.length ? "Deselect All" : "Select All"}
                        </button>
                      )}

                      {/* Bulk Delete (only in select mode with selections) */}
                      {selectMode && selectedIndices.size > 0 && (
                        <button
                          type="button"
                          onClick={handleBulkDelete}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Delete {selectedIndices.size}
                        </button>
                      )}

                      {/* Upload Button */}
                      {!selectMode && (
                        <label className="flex items-center gap-2 px-4 py-2 bg-[#577a4c] hover:bg-[#3d5636] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer select-none">
                          <Plus className="h-4.5 w-4.5" />
                          <span>Upload Photos</span>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleGalleryPhotoUpload}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  ) : (
                    <div className="text-xs text-neutral-400 font-light italic bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-100">
                      Portfolio gallery edits and uploads are restricted to editor/admin roles.
                    </div>
                  )}
                </div>

                {/* Upload Progress Bar */}
                {uploadProgress && (
                  <div className="rounded-xl border border-[#577a4c]/30 bg-[#577a4c]/5 px-5 py-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-[#3d5636] uppercase tracking-wider">
                        Uploading to Cloudinary...
                      </p>
                      <span className="text-xs font-black text-[#577a4c]">
                        {uploadProgress.current} / {uploadProgress.total}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#577a4c] rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-neutral-400 font-light">
                      Photo {uploadProgress.current} of {uploadProgress.total} — please do not close this page.
                    </p>
                  </div>
                )}

                {/* Delete Progress Bar */}
                {deleteProgress && (
                  <div className="rounded-xl border border-red-500/30 bg-red-50/50 px-5 py-4 space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wider">
                        Deleting from Cloudinary & Database...
                      </p>
                      <span className="text-xs font-black text-red-600">
                        {deleteProgress.current} / {deleteProgress.total}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${(deleteProgress.current / deleteProgress.total) * 100}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-neutral-400 font-light">
                      Deleting photo {deleteProgress.current} of {deleteProgress.total} — please do not close this page.
                    </p>
                  </div>
                )}

                {galleryPhotos.length === 0 ? (
                  <div className="py-20 text-center text-neutral-400 font-light text-sm flex flex-col items-center justify-center gap-2">
                    <ImageIcon className="h-10 w-10 text-neutral-300" />
                    <p>No photos in the portfolio gallery yet.</p>
                    <p className="text-xs text-neutral-400">Click the button above to upload your first project picture.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryPhotos.map((photo, index) => {
                      const isSelected = selectedIndices.has(index);
                      return (
                        <div
                          key={index}
                          className={`group relative aspect-video rounded-xl overflow-hidden border-2 bg-neutral-50 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer ${isSelected ? "border-[#577a4c] ring-2 ring-[#577a4c]/40" : "border-neutral-200"
                            }`}
                          onClick={() => selectMode ? toggleSelectPhoto(index) : undefined}
                        >
                          <img
                            src={photo}
                            alt={`Gallery item ${index + 1}`}
                            className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-500"
                          />

                          {/* Select Mode Checkbox Overlay */}
                          {selectMode && (
                            <div className={`absolute inset-0 transition-all duration-200 flex items-start justify-start p-2.5 ${isSelected ? "bg-[#577a4c]/20" : "bg-black/10 opacity-0 group-hover:opacity-100"
                              }`}>
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-md transition-all duration-200 ${isSelected
                                ? "bg-[#577a4c] border-[#577a4c]"
                                : "bg-white/80 border-white backdrop-blur-sm"
                                }`}>
                                {isSelected && (
                                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Normal Hover Action Overlay (only when NOT in select mode) */}
                          {!selectMode && (
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                              <button
                                type="button"
                                onClick={() => setLightboxPhoto(photo)}
                                className="bg-white hover:bg-neutral-100 text-neutral-800 rounded-full px-3 py-1.5 shadow-md transition-all cursor-pointer text-[10px] font-bold uppercase tracking-wider"
                                title="Preview Image"
                              >
                                Zoom
                              </button>
                              {!isViewer && (
                                <button
                                  type="button"
                                  onClick={() => handleGalleryPhotoRemove(index)}
                                  className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-md transition-all cursor-pointer"
                                  title="Delete Photo"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            )}

            {/* ── TAB 7: WEB EMAILS WORKSPACE ── */}
            {activeTab === "emails" && (
              <motion.div
                key="emails"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs w-full text-left space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
                  <div>
                    <h1 className="text-xl font-bold tracking-tight text-neutral-900 font-serif">Website Email Submissions</h1>
                    <p className="text-xs text-neutral-500 font-light mt-1">
                      View and manage contact inquiries sent from all forms across the site.
                    </p>
                  </div>
                </div>

                {/* Email Table / List */}
                {webEmails.length === 0 ? (
                  <div className="py-20 text-center text-neutral-400 font-light text-sm flex flex-col items-center justify-center gap-2">
                    <Mail className="h-10 w-10 text-neutral-300 animate-pulse" />
                    <p>No email submissions found.</p>
                    <p className="text-xs text-neutral-400">When visitors fill out forms on the landing page, contact page, or lets-talk page, they will appear here.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto border border-neutral-100 rounded-xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-neutral-50 border-b border-neutral-100 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                          <th className="p-4">Submission Date</th>
                          <th className="p-4">Visitor Info</th>
                          <th className="p-4">Form Source</th>
                          <th className="p-4">Service Interest</th>
                          <th className="p-4">Message / Description</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100 text-xs">
                        {webEmails.map((email) => {
                          const dateStr = new Date(email.createdAt).toLocaleDateString([], {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          });

                          let sourceLabel = "General Form";
                          let sourceColor = "bg-neutral-100 text-neutral-600";
                          if (email.source === "landing_page") {
                            sourceLabel = "Landing Page Quote";
                            sourceColor = "bg-blue-50 text-blue-600 border border-blue-100";
                          } else if (email.source === "contact_page") {
                            sourceLabel = "Contact Page Form";
                            sourceColor = "bg-amber-50 text-amber-600 border border-amber-100";
                          } else if (email.source === "lets_talk_page") {
                            sourceLabel = "Let's Talk Form";
                            sourceColor = "bg-emerald-50 text-emerald-600 border border-emerald-100";
                          }

                          return (
                            <tr
                              key={email.id}
                              onClick={() => setSelectedWebEmail(email)}
                              className="hover:bg-neutral-50 transition-colors cursor-pointer"
                            >
                              <td className="p-4 font-medium text-neutral-500 whitespace-nowrap">
                                {dateStr}
                              </td>
                              <td className="p-4">
                                <div className="font-bold text-neutral-900">{email.name}</div>
                                <div className="text-[10px] text-neutral-400 mt-0.5">{email.email}</div>
                                {email.phone && (
                                  <div className="text-[10px] text-[#577a4c] font-medium mt-0.5">{email.phone}</div>
                                )}
                              </td>
                              <td className="p-4 whitespace-nowrap">
                                <span className={`text-[9.5px] font-semibold px-2 py-0.5 rounded-full ${sourceColor}`}>
                                  {sourceLabel}
                                </span>
                              </td>
                              <td className="p-4 whitespace-nowrap font-semibold text-neutral-700 capitalize">
                                {email.service}
                              </td>
                              <td className="p-4 text-neutral-500 max-w-[280px] break-words truncate font-light leading-relaxed">
                                {email.message}
                              </td>
                              <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => setSelectedWebEmail(email)}
                                    className="p-2 bg-neutral-50 hover:bg-[#577a4c]/10 hover:text-[#3d5636] text-neutral-600 rounded-lg transition-all cursor-pointer"
                                    title="View Details"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </button>
                                  {!isViewer && (
                                    <button
                                      type="button"
                                      onClick={() => handleDeleteWebEmail(email.id)}
                                      className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-all cursor-pointer"
                                      title="Delete Record"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            )}

            {/* ── TAB 8: SECURITY WORKSPACE ── */}
            {activeTab === "security" && currentUser?.role === "admin" && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="text-left">
                  <h1 className="text-2xl font-bold tracking-tight text-neutral-900 font-serif">Security & User Management</h1>
                  <p className="text-xs text-neutral-500 font-light mt-1">Manage portal access credentials, update security permissions, and log new administrative users.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  {/* Profile update credentials */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs lg:col-span-5 text-left space-y-5">
                    <div>
                      <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-wide">Update Profile Credentials</h3>
                      <p className="text-[10px] text-neutral-400 font-light mt-0.5">Modify your own account username or security password.</p>
                    </div>

                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                          Account Username
                        </label>
                        <input
                          type="text"
                          required
                          value={updateUsername}
                          onChange={(e) => setUpdateUsername(e.target.value)}
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3.5 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          value={updatePassword}
                          onChange={(e) => setUpdatePassword(e.target.value)}
                          placeholder="•••••••• (leave blank to keep unchanged)"
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3.5 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#577a4c] hover:bg-[#3d5636] text-white py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer select-none active:scale-98"
                      >
                        Update Credentials
                      </button>
                    </form>
                  </div>

                  {/* Create portal user */}
                  <div className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xs lg:col-span-7 text-left space-y-5">
                    <div>
                      <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-wide">Register New Portal User</h3>
                      <p className="text-[10px] text-neutral-400 font-light mt-0.5">Configure access accounts for editors or read-only viewers.</p>
                    </div>

                    <form onSubmit={handleCreateUser} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            New Username
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. jrm-assistant"
                            value={addUsername}
                            onChange={(e) => setAddUsername(e.target.value)}
                            className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3.5 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Access Password
                          </label>
                          <input
                            type="password"
                            required
                            placeholder="Enter secure password"
                            value={addPassword}
                            onChange={(e) => setAddPassword(e.target.value)}
                            className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3.5 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                          User Authorization Role
                        </label>
                        <select
                          value={addRole}
                          onChange={(e) => setAddRole(e.target.value as "admin" | "editor" | "viewer")}
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3.5 py-2 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#577a4c] cursor-pointer"
                        >
                          <option value="admin">Administrator (Full Access & User Control)</option>
                          <option value="editor">Editor (Read/Write Content, No Security Access)</option>
                          <option value="viewer">Viewer (Read-Only Portal Access)</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="bg-[#1c140d] hover:bg-[#2c2015] text-white px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer select-none active:scale-98"
                      >
                        Create Portal User
                      </button>
                    </form>
                  </div>
                </div>

                {/* Portal Users List Table */}
                <div className="bg-white border border-[#eae8e1] rounded-2xl overflow-hidden shadow-xs text-left">
                  <div className="p-4 border-b border-[#eae8e1] bg-neutral-50 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">Active Portal Accounts</h4>
                      <p className="text-[10px] text-neutral-400 font-light mt-0.5">Database log of authenticated users authorized to access this dashboard.</p>
                    </div>
                    <span className="bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 text-[9.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {portalUsers.length} accounts
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-neutral-50 border-b border-[#eae8e1] text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                          <th className="py-3 px-5">Registered User</th>
                          <th className="py-3 px-5">Authorization Role</th>
                          <th className="py-3 px-5">Database ID</th>
                          <th className="py-3 px-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f4f3ef]">
                        {portalUsers.map((user) => {
                          const isSelf = currentUser && user.id === currentUser.id;
                          const isPrimaryAdmin = user.username === "jrm";
                          
                          let badgeStyle = "bg-neutral-100 text-neutral-600 border border-neutral-200";
                          if (user.role === "admin") {
                            badgeStyle = "bg-red-50 text-red-700 border border-red-100";
                          } else if (user.role === "editor") {
                            badgeStyle = "bg-blue-50 text-blue-700 border border-blue-100";
                          }

                          return (
                            <tr key={user.id} className="hover:bg-neutral-50/50 transition-colors">
                              <td className="py-3 px-5 font-bold text-neutral-800 capitalize flex items-center gap-2">
                                <User className="h-3.5 w-3.5 text-neutral-450" />
                                <span>{user.username}</span>
                                {isSelf && (
                                  <span className="text-[8px] bg-[#577a4c]/15 text-[#3d5636] font-bold px-1.5 py-0.5 rounded uppercase">
                                    Current User
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-5">
                                <span className={`text-[9px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${badgeStyle}`}>
                                  {user.role}
                                </span>
                              </td>
                              <td className="py-3 px-5 font-mono text-[9.5px] text-neutral-400">
                                {user.id}
                              </td>
                              <td className="py-3 px-5 text-right">
                                {isPrimaryAdmin ? (
                                  <span className="text-[9.5px] text-neutral-400 font-light italic px-2">Protected System Account</span>
                                ) : isSelf ? (
                                  <span className="text-[9.5px] text-neutral-400 font-light italic px-2">Logged In Account</span>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteUser(user.id, user.username)}
                                    className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-all cursor-pointer"
                                    title="Delete User"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* ── FOOTER BAR ── */}
      <footer className="bg-[#1c140d] border-t border-neutral-800 text-neutral-400 py-4 text-center text-[10px] font-medium tracking-wide">
        <span>© 2026 JRM Construction Landscape Design · Internal Admin Portal · Secured Session Design By <a href="https://stellrit.com" target="_blank" rel="noopener noreferrer" className="text-[#577a4c]">StellR IT LLC</a></span>
      </footer>

      {/* ── MODAL: LEAD REVIEW & DETAILS ── */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#eae8e1] rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col text-left"
            >
              {/* Header */}
              <div className="bg-[#1c140d] text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a5b89d]">Lead Details</h3>
                  <p className="text-[10px] text-neutral-400 font-light">ID: {selectedLead.id}</p>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5 flex-1 overflow-y-auto">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Client Name</span>
                    <span className="text-sm font-bold text-neutral-900 mt-1 flex items-center gap-1.5">
                      <User className="h-4 w-4 text-[#577a4c]" />
                      {selectedLead.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Date Submitted</span>
                    <span className="text-sm font-semibold text-neutral-700 mt-1 flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-[#577a4c]" />
                      {new Date(selectedLead.createdAt).toLocaleString([], { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <div>
                    <a href={`tel:${selectedLead.phone}`} className="group block">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Phone Number</span>
                      <span className="text-sm font-semibold text-[#3d5636] group-hover:underline mt-1 flex items-center gap-1.5">
                        <Phone className="h-4 w-4 text-[#577a4c]" />
                        {selectedLead.phone}
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href={`mailto:${selectedLead.email}`} className="group block">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Email Address</span>
                      <span className="text-sm font-semibold text-[#3d5636] group-hover:underline mt-1 flex items-center gap-1.5">
                        <Mail className="h-4 w-4 text-[#577a4c]" />
                        {selectedLead.email}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="border-t border-neutral-100 pt-4">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Property Address</span>
                  <span className="text-xs font-semibold text-neutral-700 mt-1 flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 text-[#577a4c] shrink-0 mt-0.5" />
                    {selectedLead.address}
                  </span>
                </div>

                <div className="border-t border-neutral-100 pt-4">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Project Description</span>
                  <p className="text-xs text-neutral-600 font-light mt-1.5 bg-neutral-50 border border-neutral-150 p-3 rounded-lg leading-relaxed max-h-[120px] overflow-y-auto font-serif italic">
                    "{selectedLead.description}"
                  </p>
                </div>

                {/* Edit Controls */}
                <div className="border-t border-neutral-100 pt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Estimated Project Value ($)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-bold">$</span>
                      <input
                        type="number"
                        disabled={isViewer}
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 pl-7 pr-3 py-1.5 text-xs text-neutral-800 font-bold focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Status Stage
                    </label>
                    <select
                      value={editStatus}
                      disabled={isViewer}
                      onChange={(e) => setEditStatus(e.target.value as Lead["status"])}
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-800 font-bold focus:outline-none cursor-pointer"
                    >
                      <option value="new">New Lead</option>
                      <option value="contacted">Contacted</option>
                      <option value="consultation_scheduled">Consultation Scheduled</option>
                      <option value="proposal_sent">Proposal Sent</option>
                      <option value="won">Won (Contracted)</option>
                      <option value="lost">Lost / Closed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    Robert's Notes / Reminders
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Document conversation details or project schedules..."
                    value={editNotes}
                    disabled={isViewer}
                    onChange={(e) => setEditNotes(e.target.value)}
                    className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-800 font-light resize-none focus:outline-none"
                  />
                </div>

                <div className="border-t border-neutral-100 pt-4">
                  <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Project Concept & Site Photos
                  </label>

                  <div className="grid grid-cols-4 gap-3">
                    {/* Render existing photos */}
                    {(selectedLead.photos || []).map((photo, index) => (
                      <div key={index} className="relative group aspect-square rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xs">
                        <img
                          src={photo}
                          alt={`Concept ${index + 1}`}
                          className="h-full w-full object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                          onClick={() => setLightboxPhoto(photo)}
                        />
                        {!isViewer && (
                          <button
                            type="button"
                            onClick={() => handlePhotoRemove(index)}
                            className="absolute top-1 right-1 bg-red-600 hover:bg-red-750 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                            title="Remove Photo"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    ))}

                    {/* Add Photo Button Slot */}
                    {!isViewer && (
                      <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-neutral-200 hover:border-[#577a4c] rounded-lg bg-[#fbfaf7] hover:bg-[#577a4c]/5 cursor-pointer transition-all duration-200 text-center p-2 select-none">
                        <Plus className="h-4 w-4 text-neutral-400 group-hover:text-[#577a4c]" />
                        <span className="text-[9px] font-bold text-neutral-500 mt-1 uppercase tracking-wide">
                          Upload
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="bg-neutral-50 px-6 py-3.5 border-t border-neutral-100 flex items-center justify-between">
                {!isViewer ? (
                  <button
                    onClick={() => handleDeleteLead(selectedLead.id)}
                    className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Delete Lead
                  </button>
                ) : (
                  <div />
                )}
                <div className="flex gap-2.5">
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    {isViewer ? "Close" : "Cancel"}
                  </button>
                  {!isViewer && (
                    <button
                      onClick={handleSaveLeadDetails}
                      className="bg-[#577a4c] hover:bg-[#3d5636] text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL: WEB EMAIL DETAILS ── */}
      <AnimatePresence>
        {selectedWebEmail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#eae8e1] rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col text-left"
            >
              {/* Header */}
              <div className="bg-[#1c140d] text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a5b89d]">Web Email Details</h3>
                  <p className="text-[10px] text-neutral-400 font-light">ID: {selectedWebEmail.id}</p>
                </div>
                <button
                  onClick={() => setSelectedWebEmail(null)}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5 flex-1 overflow-y-auto">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Visitor Name</span>
                    <span className="text-sm font-bold text-neutral-900 mt-1 flex items-center gap-1.5">
                      <User className="h-4 w-4 text-[#577a4c]" />
                      {selectedWebEmail.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Date Submitted</span>
                    <span className="text-sm font-semibold text-neutral-700 mt-1 flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-[#577a4c]" />
                      {new Date(selectedWebEmail.createdAt).toLocaleString([], { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <div>
                    {selectedWebEmail.phone ? (
                      <a href={`tel:${selectedWebEmail.phone}`} className="group block">
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Phone Number</span>
                        <span className="text-sm font-semibold text-[#3d5636] group-hover:underline mt-1 flex items-center gap-1.5">
                          <Phone className="h-4 w-4 text-[#577a4c]" />
                          {selectedWebEmail.phone}
                        </span>
                      </a>
                    ) : (
                      <div>
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Phone Number</span>
                        <span className="text-sm font-semibold text-neutral-400 mt-1 flex items-center gap-1.5">
                          <Phone className="h-4 w-4 text-neutral-300" />
                          Not Provided
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <a href={`mailto:${selectedWebEmail.email}`} className="group block">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Email Address</span>
                      <span className="text-sm font-semibold text-[#3d5636] group-hover:underline mt-1 flex items-center gap-1.5">
                        <Mail className="h-4 w-4 text-[#577a4c]" />
                        {selectedWebEmail.email}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 border-t border-neutral-100 pt-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Form Source</span>
                    <span className="inline-block mt-1.5">
                      {(() => {
                        let label = "General Form";
                        let color = "bg-neutral-100 text-neutral-600";
                        if (selectedWebEmail.source === "landing_page") {
                          label = "Landing Page Quote";
                          color = "bg-blue-50 text-blue-600 border border-blue-100";
                        } else if (selectedWebEmail.source === "contact_page") {
                          label = "Contact Page Form";
                          color = "bg-amber-50 text-amber-600 border border-amber-100";
                        } else if (selectedWebEmail.source === "lets_talk_page") {
                          label = "Let's Talk Form";
                          color = "bg-emerald-50 text-emerald-600 border border-emerald-100";
                        }
                        return (
                          <span className={`text-[9.5px] font-semibold px-2 py-0.5 rounded-full ${color}`}>
                            {label}
                          </span>
                        );
                      })()}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Service Interest</span>
                    <span className="text-sm font-semibold text-neutral-700 mt-1 capitalize block">
                      {selectedWebEmail.service || "General Inquiry"}
                    </span>
                  </div>
                </div>

                {selectedWebEmail.message && (
                  <div className="border-t border-neutral-100 pt-4">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Message / Description</span>
                    <p className="text-xs text-neutral-600 font-light mt-1.5 bg-neutral-50 border border-neutral-150 p-3 rounded-lg leading-relaxed max-h-[200px] overflow-y-auto font-serif italic">
                      "{selectedWebEmail.message}"
                    </p>
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="bg-neutral-50 px-6 py-3.5 border-t border-neutral-100 flex items-center justify-between">
                {!isViewer ? (
                  <button
                    onClick={() => {
                      handleDeleteWebEmail(selectedWebEmail.id);
                      setSelectedWebEmail(null);
                    }}
                    className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Delete Submission
                  </button>
                ) : (
                  <div />
                )}
                <button
                  onClick={() => setSelectedWebEmail(null)}
                  className="bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL: ADD CUSTOM LEAD ── */}
      <AnimatePresence>
        {showAddLeadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#eae8e1] rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col text-left"
            >
              <div className="bg-[#1c140d] text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a5b89d]">Log Inquiry Manually</h3>
                  <p className="text-[10px] text-neutral-400 font-light">Register walk-ins or telephone inquiries.</p>
                </div>
                <button
                  onClick={() => setShowAddLeadModal(false)}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddLeadSubmit} className="flex flex-col flex-1">
                <div className="p-6 space-y-4 flex-1 overflow-y-auto max-h-[480px]">
                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Client Name*
                      </label>
                      <input
                        type="text"
                        required
                        value={newLeadData.name}
                        onChange={(e) => setNewLeadData({ ...newLeadData, name: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="text"
                        required
                        value={newLeadData.phone}
                        onChange={(e) => setNewLeadData({ ...newLeadData, phone: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  {/* Email & Address */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={newLeadData.email}
                        onChange={(e) => setNewLeadData({ ...newLeadData, email: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Property Address
                      </label>
                      <input
                        type="text"
                        value={newLeadData.address}
                        onChange={(e) => setNewLeadData({ ...newLeadData, address: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        placeholder="123 Road, City, TX"
                      />
                    </div>
                  </div>

                  {/* Project Type & Contact Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Project Type
                      </label>
                      <select
                        value={newLeadData.projectType}
                        onChange={(e) => setNewLeadData({ ...newLeadData, projectType: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none cursor-pointer"
                      >
                        <option value="remodeling">House Remodeling</option>
                        <option value="new-construction">New Construction</option>
                        <option value="outdoor-kitchen">Outdoor Kitchen</option>
                        <option value="fireplace">Custom Fireplace</option>
                        <option value="patio">Covered Patio</option>
                        <option value="hardscapes">Hardscapes</option>
                        <option value="softscapes">Softscapes</option>
                        <option value="fencing">Fencing</option>
                        <option value="turf">Artificial Turf</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Preferred Contact Time
                      </label>
                      <select
                        value={newLeadData.contactTime}
                        onChange={(e) => setNewLeadData({ ...newLeadData, contactTime: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none cursor-pointer"
                      >
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Value & Initial Status */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Estimated Value ($)
                      </label>
                      <input
                        type="number"
                        value={newLeadData.estimatedValue}
                        onChange={(e) => setNewLeadData({ ...newLeadData, estimatedValue: Number(e.target.value) })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Initial Status
                      </label>
                      <select
                        value={newLeadData.status}
                        onChange={(e) => setNewLeadData({ ...newLeadData, status: e.target.value as Lead["status"] })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none cursor-pointer"
                      >
                        <option value="new">New Lead</option>
                        <option value="contacted">Contacted</option>
                        <option value="consultation_scheduled">Consultation Scheduled</option>
                        <option value="proposal_sent">Proposal Sent</option>
                        <option value="won">Won (Contracted)</option>
                        <option value="lost">Lost / Closed</option>
                      </select>
                    </div>
                  </div>

                  {/* Project description */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Brief Project Description
                    </label>
                    <textarea
                      rows={2}
                      value={newLeadData.description}
                      onChange={(e) => setNewLeadData({ ...newLeadData, description: e.target.value })}
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none resize-none font-light"
                      placeholder="Describe what client wants..."
                    />
                  </div>

                  {/* Admin notes */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Internal Office Notes
                    </label>
                    <textarea
                      rows={2}
                      value={newLeadData.notes}
                      onChange={(e) => setNewLeadData({ ...newLeadData, notes: e.target.value })}
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none resize-none font-light"
                      placeholder="Notes or follow up info..."
                    />
                  </div>
                </div>

                <div className="bg-neutral-50 px-6 py-3.5 border-t border-neutral-100 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowAddLeadModal(false)}
                    className="bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1c140d] hover:bg-[#2c2015] text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Log Inquiry
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL: POST REVIEW MANUALLY ── */}
      <AnimatePresence>
        {showAddReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#eae8e1] rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col text-left"
            >
              <div className="bg-[#1c140d] text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#a5b89d]">Log Client Review</h3>
                  <p className="text-[10px] text-neutral-400 font-light">Append verified client feedback to the reviews database.</p>
                </div>
                <button
                  onClick={() => setShowAddReviewModal(false)}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddReviewSubmit} className="flex flex-col flex-1">
                <div className="p-6 space-y-4 flex-1 overflow-y-auto">
                  {/* Author & Location */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Author Name / Family*
                      </label>
                      <input
                        type="text"
                        required
                        value={newReviewData.author}
                        onChange={(e) => setNewReviewData({ ...newReviewData, author: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        placeholder="e.g. The Anderson Family or Mark T."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Location (City)*
                      </label>
                      <input
                        type="text"
                        required
                        value={newReviewData.location}
                        onChange={(e) => setNewReviewData({ ...newReviewData, location: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        placeholder="e.g. San Antonio or Boerne"
                      />
                    </div>
                  </div>

                  {/* Title & Rating */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Review Summary Title*
                      </label>
                      <input
                        type="text"
                        required
                        value={newReviewData.title}
                        onChange={(e) => setNewReviewData({ ...newReviewData, title: e.target.value })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none"
                        placeholder="e.g. Dream Backyard Created"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Rating (1-5 stars)*
                      </label>
                      <select
                        value={newReviewData.rating}
                        onChange={(e) => setNewReviewData({ ...newReviewData, rating: Number(e.target.value) })}
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none cursor-pointer"
                      >
                        <option value={5}>5 Stars (Excellent)</option>
                        <option value={4}>4 Stars (Good)</option>
                        <option value={3}>3 Stars (Average)</option>
                        <option value={2}>2 Stars (Poor)</option>
                        <option value={1}>1 Star (Unacceptable)</option>
                      </select>
                    </div>
                  </div>

                  {/* Feedback text */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Review Description Text*
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={newReviewData.text}
                      onChange={(e) => setNewReviewData({ ...newReviewData, text: e.target.value })}
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 px-3 py-2 text-xs focus:outline-none resize-none font-light leading-relaxed font-serif"
                      placeholder="Write customer feedback description here..."
                    />
                  </div>

                  {/* Attach Completion Photo */}
                  <div className="border-t border-neutral-100 pt-4 text-left">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Attach Completion Photo (Optional)
                    </label>
                    {newReviewPhoto ? (
                      <div className="relative inline-block h-20 w-20 rounded-lg overflow-hidden border border-neutral-200">
                        <img
                          src={newReviewPhoto}
                          alt="Review Preview"
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setNewReviewPhoto("")}
                          className="absolute top-1 right-1 bg-red-600 hover:bg-red-750 text-white rounded-full p-1 shadow-md transition-all cursor-pointer"
                          title="Remove Photo"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex items-center gap-2 px-3 py-2 border border-dashed border-neutral-250 hover:border-[#577a4c] rounded-lg bg-[#fbfaf7] hover:bg-[#577a4c]/5 cursor-pointer transition-all duration-200 w-full sm:w-auto inline-flex select-none">
                        <Plus className="h-4 w-4 text-neutral-400" />
                        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                          Select Photo
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleReviewPhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div className="bg-neutral-50 px-6 py-3.5 border-t border-neutral-100 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowAddReviewModal(false)}
                    className="bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1c140d] hover:bg-[#2c2015] text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Custom Confirm Modal Overlay */}
      <AnimatePresence>
        {confirmConfig && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none"
            onClick={() => setConfirmConfig(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white border border-[#eae8e1] rounded-2xl p-6 shadow-xl w-full max-w-md text-left space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${confirmConfig.type === 'danger'
                  ? 'bg-red-50 text-red-600'
                  : confirmConfig.type === 'warning'
                    ? 'bg-amber-50 text-amber-600'
                    : 'bg-[#577a4c]/10 text-[#3d5636]'
                  }`}>
                  {confirmConfig.type === 'danger' ? (
                    <Trash2 className="h-6 w-6" />
                  ) : confirmConfig.type === 'warning' ? (
                    <AlertTriangle className="h-6 w-6" />
                  ) : (
                    <Info className="h-6 w-6" />
                  )}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold font-serif text-neutral-900 leading-snug">
                    {confirmConfig.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {confirmConfig.message}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setConfirmConfig(null)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  {confirmConfig.cancelText || "Cancel"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    confirmConfig.onConfirm();
                    setConfirmConfig(null);
                  }}
                  className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer text-white ${confirmConfig.type === 'danger'
                    ? 'bg-red-600 hover:bg-red-750 shadow-red-200'
                    : confirmConfig.type === 'warning'
                      ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-100'
                      : 'bg-[#577a4c] hover:bg-[#3d5636]'
                    }`}
                >
                  {confirmConfig.confirmText || "Confirm"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
