import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Hammer } from "lucide-react";
import { useTranslation } from "@/context/translation-context";

const areasData = [
  { name: "Belleair", x: "48%", y: "51%", primary: true },
  { name: "Clearwater", x: "46%", y: "38%", primary: true },
  { name: "Saint Petersburg", x: "78%", y: "85%" },
  { name: "Largo", x: "56%", y: "58%" },
  { name: "Seminole", x: "52%", y: "72%" },
  { name: "Palm Harbor", x: "40%", y: "14%" },
  { name: "Pinellas Park", x: "68%", y: "66%" },
  { name: "Dunedin", x: "42%", y: "26%" },
  { name: "Tarpon Springs", x: "38%", y: "4%" },
  { name: "Belleair Beach", x: "25%", y: "48%" },
  { name: "Bay Pines", x: "44%", y: "76%" },
  { name: "Oldsmar", x: "82%", y: "20%" },
  { name: "Ozona", x: "32%", y: "20%" },
  { name: "Safety Harbor", x: "68%", y: "32%" },
  { name: "Crystal Beach", x: "28%", y: "15%" },
  { name: "Indian Rocks Beach", x: "20%", y: "62%" },
];

const TinyHammerIcon = () => (
  <Hammer className="w-3.5 h-3.5 text-[#cc7e14] shrink-0 animate-pulse" />
);

export function ServiceArea() {
  const { t } = useTranslation();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section 
        id="service-area" 
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative py-16 px-6 sm:px-8 lg:px-12 overflow-hidden"
      >
        {/* Background glowing blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-[#ffa326]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-neutral-400/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Chips (50% width) */}
            <div className="z-10 text-left">
              <span className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
                <TinyHammerIcon /> Our Service Area <TinyHammerIcon />
              </span>
              
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-neutral-900 leading-tight tracking-tight mb-4 font-serif">
                Proudly Serving Clearwater &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
                  Pinellas County
                </span>.
              </h2>
              
              <p className="text-[15px] sm:text-base text-neutral-500 leading-relaxed font-light mb-8 max-w-lg">
                We provide prompt, dependable handyman, remodeling, and property maintenance solutions across Clearwater and the surrounding Pinellas County area.
              </p>

              {/* Premium Capsule Chips */}
              <div className="flex flex-wrap gap-2">
                {areasData.map((a) => {
                  const isActive = hoveredArea === a.name;
                  return (
                    <motion.div
                      key={a.name}
                      onMouseEnter={() => setHoveredArea(a.name)}
                      onMouseLeave={() => setHoveredArea(null)}
                      whileHover={{ scale: 1.02, y: -0.5 }}
                      className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider rounded-xl py-2 px-3 transition-all duration-300 cursor-pointer border select-none ${
                        isActive
                          ? "bg-[#ffa326]/15 border-[#ffa326]/40 text-[#cc7e14] shadow-sm"
                          : "text-neutral-600 bg-neutral-50/70 border-neutral-200/60 hover:bg-[#ffa326]/5 hover:border-[#ffa326]/30 hover:text-[#cc7e14]"
                      }`}
                    >
                      <MapPin className={`h-3 w-3 shrink-0 transition-colors duration-300 ${
                        isActive ? "text-[#cc7e14] animate-bounce" : "text-neutral-400"
                      }`} />
                      {a.name}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sleek Dispatch Telemetry Map (50% width) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1324] to-[#040814] border border-slate-800 shadow-glow ring-1 ring-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10"
            >
              {/* Corner Tech Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ffa326]/30 pointer-events-none z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#ffa326]/30 pointer-events-none z-20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ffa326]/30 pointer-events-none z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#ffa326]/30 pointer-events-none z-20" />

              {/* Coordinates HUD overlay */}
              <div className="absolute top-5 right-5 bg-slate-950/75 border border-slate-800/80 backdrop-blur-md text-[9px] font-mono text-amber-200/90 rounded-lg px-2.5 py-1.5 select-none z-20 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>LAT: 27.9416 / LNG: -82.8158</span>
              </div>

              {/* Embedded Google Map Background (Centered on Belleair, FL) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197.658047637324!2d-82.81583400642698!3d27.941618417109392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f09282937ff3%3A0x9589e475b686ea2e!2sBelleair%2C%20FL%2033756%2C%20USA!5e0!3m2!1sen!2snp!4v1782418198716!5m2!1sen!2snp"
                className="absolute inset-0 w-full h-full opacity-65 grayscale invert contrast-[1.3] brightness-[0.8] pointer-events-none transition-opacity duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Scanline background */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none z-10" />

              {/* Radar Glow & Sweep */}
              <div 
                className="absolute pointer-events-none z-15"
                style={{
                  left: "48%",
                  top: "51%",
                  width: "400px",
                  height: "400px",
                  transform: "translate(-50%, -50%)",
                  background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 163, 38, 0.15) 0deg, rgba(255, 163, 38, 0) 120deg)",
                  borderRadius: "50%",
                  animation: "radar-sweep 8s linear infinite",
                  mixBlendMode: "screen",
                }}
              />

              <svg
                viewBox="0 0 600 450"
                className="absolute inset-0 h-full w-full pointer-events-none z-10"
                aria-hidden
              >
                <circle cx="288" cy="229.5" r="50" fill="none" stroke="rgba(255, 163, 38, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="288" cy="229.5" r="120" fill="none" stroke="rgba(255, 163, 38, 0.1)" strokeWidth="1" />
                <circle cx="288" cy="229.5" r="200" fill="none" stroke="rgba(255, 163, 38, 0.05)" strokeWidth="1" strokeDasharray="8 8" />

                {/* Styled coverage contour boundary */}
                <path
                  d="M 200 100 C 230 60, 380 60, 420 200 S 450 400, 380 430 C 300 440, 210 410, 180 340 S 170 140, 200 100 Z"
                  fill="rgba(255, 163, 38, 0.01)"
                  stroke="#ffa326"
                  strokeWidth="1.5"
                  className="animated-boundary"
                  opacity="0.4"
                />
              </svg>

              {/* Pins with glowing radar rings */}
              {areasData.map((pin) => (
                <Pin
                  key={pin.name}
                  x={pin.x}
                  y={pin.y}
                  label={pin.name}
                  primary={pin.primary}
                  active={hoveredArea === pin.name}
                  onMouseEnter={() => setHoveredArea(pin.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                />
              ))}

              {/* Coverage badge */}
              <div className="absolute bottom-5 left-5 bg-slate-950/75 border border-slate-800/80 backdrop-blur-md text-white rounded-2xl px-4 py-3 select-none z-20">
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                  Service Area
                </div>
                <div className="font-bold text-sm text-[#ffa326] mt-0.5">
                  Clearwater & Pinellas County
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @keyframes radar-sweep {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes boundary-dash {
            to {
              stroke-dashoffset: -20;
            }
          }
          .animated-boundary {
            stroke-dasharray: 6 4;
            animation: boundary-dash 15s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
}

function Pin({
  x,
  y,
  label,
  primary = false,
  active = false,
  onMouseEnter,
  onMouseLeave,
}: {
  x: string;
  y: string;
  label: string;
  primary?: boolean;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-20 transition-all duration-300"
      style={{ left: x, top: y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center gap-1.5">
        {/* Glowing hotspot */}
        <div className="relative flex h-7 w-7 items-center justify-center">
          {/* Pulsing ring */}
          <span className={`animate-ping absolute inline-flex h-5.5 w-5.5 rounded-full opacity-75 transition-all duration-300 ${
            active 
              ? "bg-[#ffa326] scale-125" 
              : primary 
                ? "bg-[#ffa326]/50" 
                : "bg-amber-500/30"
          }`}></span>
          {/* Inner solid ring */}
          <span className={`relative inline-flex rounded-full h-4 w-4 items-center justify-center text-white shadow-md transition-all duration-300 ${
            active 
              ? "bg-[#ffa326] scale-110 shadow-[0_0_10px_rgba(255,163,38,0.6)]" 
              : primary 
                ? "bg-[#ffa326] border border-white/20" 
                : "bg-slate-800 border border-slate-700"
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full bg-white transition-transform duration-300 ${
              active ? "scale-125" : ""
            }`} />
          </span>
        </div>
        
        {/* Label frame */}
        <span className={`px-2 py-0.5 rounded-md backdrop-blur-md border transition-all duration-300 text-[9px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm ${
          primary || active ? "inline-block" : "hidden sm:inline-block"
        } ${
          active
            ? "bg-[#ffa326] border-[#ffa326] text-white scale-105"
            : "bg-slate-900/90 border-slate-800/80 text-slate-300 group-hover:bg-[#ffa326] group-hover:border-[#ffa326] group-hover:text-white"
        }`}>
          {label}
        </span>
      </div>
    </div>
  );
}

export function QuoteSection() {
  return <ServiceArea />;
}