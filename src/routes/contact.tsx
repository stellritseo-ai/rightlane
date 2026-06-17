import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Building,
  UserCheck,
  Hammer
} from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import welBg from "@/assets/wel-bg.png";
import contactHero from "@/assets/stats-jobsite.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JRM Construction Landscape Design — San Antonio, TX" },
      { name: "description", content: "Contact JRM Construction for free estimates, on-site design consultations, or 24/7 emergency service in San Antonio, TX." },
      { property: "og:title", content: "Contact JRM Construction Landscape Design" },
      { property: "og:description", content: "Connect with principal consultant Robert Thompson for premium remodeling and landscape solutions in San Antonio, TX." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();

  const cities = [
    "New Braunfels",
    "Boerne",
    "San Marcos",
    "Seguin",
    "Canyon Lake",
    "Bulverde",
    "Schertz",
    "Castroville",
    "Fredericksburg",
    "Kerrville",
  ];

  const trustValues = [
    {
      title: "Direct Owner Communication",
      desc: "Work closely with Robert Thompson from blueprint to cleanup. No sales reps, no layers of bureaucracy.",
      icon: UserCheck,
    },
    {
      title: "35 Years of Local Expertise",
      desc: "Deep knowledge of San Antonio's unique soil types, shifting foundations, micro-climates, and regional style trends.",
      icon: Hammer,
    },
    {
      title: "Full Licensing & Insurance",
      desc: "We hold extensive liability insurance and structural bonding for your ultimate protection (License details available on request).",
      icon: ShieldCheck,
    },
    {
      title: "Comprehensive Service Range",
      desc: "From massive home additions and custom masonry patios to outdoor kitchens and low-maintenance artificial grass layouts.",
      icon: Building,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center px-6 py-16">
          {/* Animated Background Image */}
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactHero})` }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Contact JRM Construction
            </span>

            {/* Title */}
            <h1 className="text-[26px] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Your Vision Starts with a Conversation
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
              For over 35 years, JRM Construction has been built on a foundation of clear communication, trusted partnerships, and attentive service. Your project deserves a personalized approach, and it all begins here.
            </p>
          </motion.div>

          {/* Scroll prompt */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <span className="text-[9px] font-bold text-white uppercase tracking-widest select-none">Scroll Down</span>
            <div className="w-[1.5px] h-10 bg-white/20 relative rounded-full overflow-hidden">
              <motion.div
                animate={{
                  y: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-full h-1/3 bg-[#a5b89d] rounded-full"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── EDITORIAL GRID COLUMN LAYOUT ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-start">
            
            {/* Left Column: Details & Consultation Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                  Get in Touch
                </span>
                <h2 
                  className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Reach Out Directly
                </h2>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-light">
                  We proudly serve San Antonio and the surrounding 80-mile area with licensed, insured, and bonded professionalism. Connect via your preferred method.
                </p>
              </div>

              {/* Direct channels grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Phone Card */}
                <a 
                  href="tel:2104295526"
                  className="group block p-5 rounded-xl border border-neutral-200/50 bg-white hover:border-[#577a4c]/40 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">Phone (Primary)</h4>
                  <span className="text-[11px] text-neutral-400 font-semibold tracking-wider block mt-0.5">ESTIMATES & ASSISTANCE</span>
                  <p className="mt-3 text-md font-bold text-[#3d5636] group-hover:underline">(210) 429-5526</p>
                  <p className="mt-2 text-xs text-neutral-500 font-light">Call to speak directly with Robert Thompson.</p>
                </a>

                {/* Email Card */}
                <a 
                  href="mailto:robertsa210@icloud.com"
                  className="group block p-5 rounded-xl border border-neutral-200/50 bg-white hover:border-[#577a4c]/40 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">Email Address</h4>
                  <span className="text-[11px] text-neutral-400 font-semibold tracking-wider block mt-0.5">INSPIRATIONS & SCHEDULING</span>
                  <p className="mt-3 text-sm font-bold text-[#3d5636] group-hover:underline truncate">robertsa210@icloud.com</p>
                  <p className="mt-2 text-xs text-neutral-500 font-light">Ideal for sending project details & photos.</p>
                </a>

                {/* Office Hours */}
                <div className="p-5 rounded-xl border border-neutral-200/50 bg-white text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">Office Hours</h4>
                  <span className="text-[11px] text-neutral-400 font-semibold tracking-wider block mt-0.5">STANDARD OPERATION</span>
                  <p className="mt-3 text-sm font-bold text-neutral-800">Monday - Saturday</p>
                  <p className="text-xs text-neutral-600 mt-1">8:00 AM - 5:00 PM</p>
                </div>

                {/* Emergency Card */}
                <div className="p-5 rounded-xl border border-red-200/60 bg-red-50/40 text-left relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/30 rounded-full translate-x-8 -translate-y-8 pointer-events-none" />
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-red-900">24/7 Emergency Support</h4>
                  <span className="text-[11px] text-red-700 font-bold tracking-wider block mt-0.5">PROPERTY PROTECTION</span>
                  <p className="mt-3 text-xs text-red-950 font-light leading-relaxed">
                    For urgent structural or water issues requiring immediate attention, call our main line anytime.
                  </p>
                </div>
              </div>

              {/* Ready for Consultation Section */}
              <div className="bg-neutral-100/70 border border-neutral-200/40 rounded-2xl p-6 text-left space-y-4">
                <h3 className="text-md font-bold text-neutral-900 tracking-wide capitalize">
                  Ready for Your Free Consultation?
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                  The first step to transforming your home or commercial property is a no-obligation, on-site consultation. During this meeting, Robert Thompson will:
                </p>
                <ul className="space-y-2.5 text-xs text-neutral-700 font-light">
                  <li className="flex gap-2.5 items-start">
                    <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#577a4c]/20 text-[#3d5636] mt-0.5 select-none font-bold text-[10px]">✓</span>
                    <span>Listen directly to your unique vision, goals, and budget.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#577a4c]/20 text-[#3d5636] mt-0.5 select-none font-bold text-[10px]">✓</span>
                    <span>Assess your outdoor or indoor space and provide expert insights.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#577a4c]/20 text-[#3d5636] mt-0.5 select-none font-bold text-[10px]">✓</span>
                    <span>Explain our hands-on process and answer any structural or licensing questions.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#577a4c]/20 text-[#3d5636] mt-0.5 select-none font-bold text-[10px]">✓</span>
                    <span>Outline clear next steps for a transparent project estimate.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Contact Message Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-neutral-200/50 p-8 shadow-lg space-y-6 text-left"
            >
              <div>
                <h3 className="text-xl font-bold text-neutral-900 tracking-wide capitalize">
                  Send Us a Message
                </h3>
                <p className="text-xs text-neutral-500 mt-1 font-light">
                  Complete the form below to receive a direct call or email assessment.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Row 1: Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Property Address */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(210) 000-0000"
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Property Address
                    </label>
                    <input
                      type="text"
                      placeholder="San Antonio, TX"
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Project Type Select */}
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Project Type
                  </label>
                  <div className="relative w-full">
                    <select
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 py-3 pl-4 pr-10 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Select project focus...
                      </option>
                      <option value="remodeling">House Remodeling</option>
                      <option value="construction">New Construction</option>
                      <option value="kitchen">Outdoor Kitchen</option>
                      <option value="fireplace">Fireplace Installation</option>
                      <option value="hardscaping">Hardscaping & Patios</option>
                      <option value="landscaping">Landscaping Design</option>
                      <option value="fencing">Fencing</option>
                      <option value="turf">Artificial Turf</option>
                      <option value="other">Other project</option>
                    </select>
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center text-neutral-500">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Row 4: Description textarea */}
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Brief Description of Your Project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project vision, timeline, and goals..."
                    className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#1c140d] hover:bg-[#2c2015] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-lg py-4 transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none cursor-pointer text-center"
                >
                  Request Consultation
                </button>
              </form>

              <div className="pt-2 border-t border-neutral-100 text-center">
                <span className="text-[11px] text-neutral-500 font-light">
                  We typically respond to all inquiries within one business day.
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── SERVICE AREA SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Territory
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              San Antonio & Surrounding Areas
            </h2>
            <p className="mt-3 text-sm text-neutral-700 leading-relaxed font-light">
              We are based in San Antonio, Texas and proudly serve homeowners and businesses within an 80-mile radius, including:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {cities.map((city, idx) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/80 border border-neutral-200/40 rounded-full py-2.5 px-4 shadow-sm hover:bg-white hover:border-[#577a4c]/30 hover:scale-[1.02] transition-all duration-300 text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#3d5636]" />
                <span>{city}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] font-bold text-xs px-5 py-2.5 rounded-full select-none shadow-sm">
              Not sure if you're in our area? Just ask!
            </span>
          </div>
        </section>
      </div>

      {/* ── WHY CONTACT JRM VALUES ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Our Promise
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Why Contact JRM Construction?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trustValues.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md hover:scale-[1.02] hover:border-[#577a4c]/30 transition-all duration-300 flex flex-col items-start text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 tracking-wide mb-2">{v.title}</h4>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center border-t border-neutral-200/50 pt-8 max-w-4xl mx-auto space-y-4">
            <p className="text-neutral-700 text-sm font-light italic" style={{ fontFamily: "Georgia, serif" }}>
              "We look forward to the opportunity to earn your trust and build something remarkable for you."
            </p>
            <div className="flex flex-col items-center select-none leading-none pt-2 text-[#565737]">
              <div className="text-md font-bold tracking-wider">JRM CONSTRUCTION LANDSCAPING DESIGN</div>
              <div className="text-[10px] font-extrabold tracking-widest text-[#6c6d4d] mt-1">LICENSED · INSURED · BONDED | SAN ANTONIO, TEXAS</div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
