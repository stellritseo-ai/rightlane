import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Schedule Service",
    desc: "Book a consultation online or call Ronnie at (727) 642-0201 for immediate response.",
  },
  {
    icon: Search,
    title: "Site Assessment",
    desc: "We inspect your project site, assess the repairs or cleanup, and scope the work precisely.",
  },
  {
    icon: FileText,
    title: "Transparent Quote",
    desc: "Upfront, itemized estimate provided before any work starts. What we quote is what you pay.",
  },
  {
    icon: Wrench,
    title: "Expert Workmanship",
    desc: "Our skilled crews handle the repairs, hauling, or cleaning safely, efficiently, and professionally.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guarantee",
    desc: "Final walkthrough with Ronnie to check the work and ensure your property is back in the right lane.",
  },
];

// Desktop S-curve node positions (centered on the SVG path)
const desktopPositions = [
  { left: "20%", top: "50px" },
  { left: "50%", top: "50px" },
  { left: "80%", top: "50px" },
  { left: "20%", top: "310px" },
  { left: "50%", top: "310px" },
];

export function Process() {
  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section id="process" className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative py-20 overflow-hidden">

      {/* Background grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffa326 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes electricFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -30; }
        }
        @keyframes sparkFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 45; }
        }
        @keyframes verticalElectricFlow {
          0%   { background-position: 0 0; }
          100% { background-position: 0 -40px; }
        }
        @keyframes pulseGlow {
          0%,100% { transform: scale(0.96); opacity: 0.15; }
          50%     { transform: scale(1.04); opacity: 0.35; }
        }
        @keyframes pulseGlowLarge {
          0%,100% { transform: scale(0.98); opacity: 0.05; }
          50%     { transform: scale(1.02); opacity: 0.15; }
        }
        @keyframes sprayWash {
          0% { stroke-dashoffset: 24; opacity: 0.4; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.4; }
        }
        .pulse-glow      { animation: pulseGlow 2s infinite ease-in-out; transform-origin: 17px 15px; }
        .pulse-glow-large{ animation: pulseGlowLarge 3s infinite ease-in-out; transform-origin: 17px 15px; }
        .electric-flow   { stroke-dasharray: 6 6; animation: electricFlow 0.5s infinite linear; }
        .spark-flow      { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
        .mobile-electric-flow {
          background: linear-gradient(to bottom, #ffa326 0%, #ffa326 30%, #fff2df 50%, #ffa326 70%, #ffa326 100%);
          background-size: 100% 40px;
          animation: verticalElectricFlow 1.2s infinite linear;
        }
        .water-spray {
          stroke-dasharray: 4 4;
          animation: sprayWash 0.6s infinite linear;
        }
      `}</style>

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">

        {/* ── Section Header ──────────────────────────────── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffa326] animate-pulse" />
            Step by Step Process
          </span>

          <h2 
            className="text-[#1c140d] tracking-tight leading-[1.15] font-sans"
            style={{ fontSize: "36px", marginTop: "-15px", marginBottom: "10px", fontWeight: 800 }}
          >
            We Complete Every{" "}
            <span className="bg-gradient-to-r from-[#ffa326] to-[#cc7e14] bg-clip-text text-transparent">
              Step Carefully.
            </span>
          </h2>

          <p 
            className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal leading-relaxed"
            style={{ marginBottom: "-50px" }}
          >
            Our proven process guarantees precision, clean jobsites, and solid results — from your first call to our final inspection walkthrough.
          </p>
        </motion.div>

        {/* ── 1. DESKTOP: S-Curve SVG Layout ──────────────── */}
        <div className="hidden lg:block relative w-full h-[500px] select-none">
          <svg
            viewBox="0 0 1200 360"
            className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-0"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#2c241d" />
                <stop offset="40%"  stopColor="#4a3e35" />
                <stop offset="60%"  stopColor="#382e26" />
                <stop offset="100%" stopColor="#1c140d" />
              </linearGradient>
            </defs>

            {/* Drop shadow */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#1c140d" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.07" />
            {/* Outer conduit */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#382e26" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* Animated gold core */}
            <motion.path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#ffa326" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            {/* Light yellow flow */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#fff2df" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
              opacity="0.8" className="spark-flow" />
            {/* Glossy highlight */}
            <motion.path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              opacity="0.75"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />

            {/* Tool chest icon at start */}
            <g transform="translate(45, 20)">
              {/* Tool chest main box */}
              <rect x="0" y="10" width="55" height="42" rx="6" fill="#382e26" stroke="#2c241d" strokeWidth="2.5" />
              {/* Tool chest lid/handle */}
              <path d="M 15 10 Q 27.5 -2 40 10" stroke="#ffa326" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Latches */}
              <rect x="12" y="20" width="6" height="10" rx="1.5" fill="#ffa326" />
              <rect x="37" y="20" width="6" height="10" rx="1.5" fill="#ffa326" />
              {/* Tool line detail */}
              <path d="M 27 22 L 27 34" stroke="#ffa326" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Glowing completed project at end with animated pressure washer connected to conduit */}
            <g transform="translate(920, 310)">
              {/* Brass hex coupling to background pipe */}
              <polygon points="-4,-6 2,-6 5,-3 5,3 2,6 -4,6" fill="#cc7e14" stroke="#995906" strokeWidth="1" />
              <rect x="2" y="-3" width="6" height="6" fill="#475569" rx="1" />
              
              {/* Pressure Washer Spray Gun Group */}
              <g className="hover:scale-105 transition-transform duration-300 origin-left">
                {/* Gun handle & trigger guard */}
                <path d="M 8 3 L 16 13 L 13 19 L 6 15 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
                <path d="M 10 9 C 10 13, 14 13, 14 9" stroke="#ffa326" strokeWidth="1" fill="none" />
                <line x1="11" y1="6" x2="11" y2="10" stroke="#ffa326" strokeWidth="1.5" />
                {/* Gun Casing */}
                <rect x="6" y="-4" width="22" height="8" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
                {/* Brand color stripe accent */}
                <line x1="12" y1="-2" x2="22" y2="-2" stroke="#ffa326" strokeWidth="1" />
                {/* Brass lance coupler */}
                <rect x="28" y="-3.5" width="4" height="7" fill="#cc7e14" rx="0.5" />
                {/* Lance rubber hand-sleeve grip */}
                <rect x="32" y="-3" width="12" height="6" fill="#0f172a" rx="1" />
                {/* Stainless steel lance extension pipe */}
                <line x1="44" y1="0" x2="74" y2="0" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
                {/* Quick-connect nozzle collar */}
                <rect x="74" y="-1.5" width="2" height="3" fill="#cbd5e1" />
                {/* High pressure red spray nozzle tip */}
                <polygon points="76,-3 81,-4 83,3 78,4" fill="#ef4444" />
                
                {/* Animated Water Spray Jets (Fan Jet Spray Pattern) */}
                <line x1="81" y1="0" x2="114" y2="-12" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" className="water-spray" />
                <line x1="81" y1="0" x2="118" y2="-5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" className="water-spray" style={{ animationDelay: "0.15s" }} />
                <line x1="81" y1="0" x2="120" y2="0" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" className="water-spray" style={{ animationDelay: "0.3s" }} />
                <line x1="81" y1="0" x2="118" y2="5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" className="water-spray" style={{ animationDelay: "0.45s" }} />
                <line x1="81" y1="0" x2="114" y2="12" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" className="water-spray" style={{ animationDelay: "0.6s" }} />

                {/* Splashing water mist droplets */}
                <circle cx="110" cy="-6" r="1.5" fill="#e0f2fe" opacity="0.8" className="pulse-glow" />
                <circle cx="114" cy="4" r="1" fill="#e0f2fe" opacity="0.8" className="pulse-glow" style={{ animationDelay: "0.3s" }} />
                <circle cx="106" cy="2" r="1.2" fill="#e0f2fe" opacity="0.8" className="pulse-glow" style={{ animationDelay: "0.6s" }} />
              </g>

              {/* Glowing Gold Satisfaction Guarantee Seal */}
              <g>
                <circle cx="136" cy="0" r="22" fill="#ffa326" opacity="0.15" className="pulse-glow" />
                <circle cx="136" cy="0" r="34" fill="#cc7e14" opacity="0.05" className="pulse-glow-large" />
                
                {/* Rosette Ribbon Details */}
                <path d="M 126 12 L 130 28 L 136 22 L 142 28 L 146 12" fill="#cc7e14" opacity="0.8" />
                <path d="M 130 10 L 126 28 L 136 22" fill="#ffa326" opacity="0.9" />

                {/* Gold Seal Outer Border */}
                <circle cx="136" cy="0" r="16" fill="#1c140d" stroke="#ffa326" strokeWidth="2" />
                {/* Gold Seal Inner Dotted Ring */}
                <circle cx="136" cy="0" r="12" fill="none" stroke="#cc7e14" strokeWidth="1" strokeDasharray="1.5 1.5" />
                
                {/* Gold Checkmark */}
                <path d="M 130 1 L 134 5 L 143 -4" stroke="#ffa326" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                
                {/* Sparkle effects around the seal */}
                <path d="M 118 -16 L 118 -12 M 116 -14 L 120 -14" stroke="#ffa326" strokeWidth="1.5" strokeLinecap="round" className="pulse-glow" />
                <path d="M 154 12 L 154 16 M 152 14 L 156 14" stroke="#ffa326" strokeWidth="1.5" strokeLinecap="round" className="pulse-glow" style={{ animationDelay: "0.5s" }} />
                <path d="M 150 -14 L 150 -10 M 148 -12 L 152 -12" stroke="#ffa326" strokeWidth="1.5" strokeLinecap="round" className="pulse-glow" style={{ animationDelay: "0.8s" }} />
              </g>
            </g>
          </svg>

          {/* Step nodes */}
          {steps.map((s, i) => {
            const pos = desktopPositions[i];
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="absolute group cursor-default"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Circle node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(255,163,38,0.25)] group-hover:border-[#ffa326]/30">
                  {/* Step number badge */}
                  <div className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-[#ffa326] flex items-center justify-center shadow-md border-2 border-white">
                    <span className="text-white text-[9px] font-black leading-none">{i + 1}</span>
                  </div>
                  {/* Outer halo */}
                  <div className="absolute -inset-3 rounded-full border border-[#ffa326]/15 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400" />
                  {/* Inner ring */}
                  <div className="absolute inset-1 rounded-full border border-transparent group-hover:border-[#ffa326]/30 transition-all duration-300" />
                  {/* Icon */}
                  <Icon className="h-7 w-7 text-neutral-400 group-hover:text-[#ffa326] transition-colors duration-300" />
                </div>

                {/* Text block below node */}
                <div className="absolute top-[48px] -translate-x-1/2 text-center w-[220px] flex flex-col items-center pt-1">
                  <h3 className="font-extrabold text-[15px] text-neutral-900 leading-tight mt-1 mb-1.5 group-hover:text-[#cc7e14] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-medium px-1">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── 2. MOBILE: Vertical Timeline ────────────────── */}
        <div className="relative grid gap-8 pl-14 lg:hidden">
          {/* Animated vertical conduit */}
          <div className="absolute left-[39px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
            <div className="absolute inset-0 bg-neutral-900/10 rounded-full blur-[2px]" />
            <div className="absolute inset-0 bg-[#382e26] rounded-full" />
            <div className="absolute inset-[2px] rounded-full mobile-electric-flow" />
            <div className="absolute left-[3px] top-[2px] bottom-[2px] w-[1.5px] bg-white/75 rounded-full" />
          </div>

          {/* Tool chest at top */}
          <div className="absolute left-[18px] -top-6 pointer-events-none z-10 w-[50px] h-[54px]">
            <svg viewBox="0 0 60 65" className="w-full h-full" fill="none">
              <rect x="5" y="15" width="50" height="40" rx="6" fill="#382e26" stroke="#2c241d" strokeWidth="2" />
              <path d="M 18 15 Q 30 3 42 15" stroke="#ffa326" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <rect x="15" y="25" width="6" height="10" rx="1" fill="#ffa326" />
              <rect x="39" y="25" width="6" height="10" rx="1" fill="#ffa326" />
            </svg>
          </div>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col group text-left"
              >
                {/* Circle node */}
                <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#ffa326]/30">
                  {/* Step badge */}
                  <div className="absolute -top-1.5 -right-0.5 w-4 h-4 rounded-full bg-[#ffa326] flex items-center justify-center border border-white">
                    <span className="text-white text-[8px] font-black">{i + 1}</span>
                  </div>
                  <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-[#ffa326]/40 transition-colors duration-300" />
                  <div className="absolute -inset-2 rounded-full border border-[#ffa326]/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <Icon className="h-5 w-5 text-neutral-400 group-hover:text-[#ffa326] transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="pl-4 py-0.5">
                  <h3 className="font-extrabold text-base text-neutral-900 leading-tight mt-0 mb-1.5 group-hover:text-[#cc7e14] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-medium max-w-sm">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  </div>
  );
}
