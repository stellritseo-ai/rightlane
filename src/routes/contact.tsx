import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion, AnimatePresence } from "framer-motion";
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
  Hammer,
  Sparkles,
  Info
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
      { property: "og:description", content: "Connect with owner Robert Thompson for premium remodeling and landscape solutions in San Antonio, TX." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    description: "",
    contactTime: ""
  });

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
    "Bandera",
    "Hondo",
    "Pleasanton",
    "Floresville",
    "Luling",
    "Lockhart",
    "Gonzales",
  ];

  const trustValues = [
    {
      title: "35 Years of Experience",
      desc: "Deep local expertise in remodeling, construction, and landscape design.",
      icon: Hammer,
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Your complete protection and peace of mind.",
      icon: ShieldCheck,
    },
    {
      title: "Owner-Led Oversight",
      desc: "Robert Thompson is personally involved in every project.",
      icon: Building,
    },
    {
      title: "Free Consultations",
      desc: "No-obligation meetings to discuss your vision and provide expert guidance.",
      icon: UserCheck,
    },
    {
      title: "Comprehensive Services",
      desc: "From house remodeling and new construction to outdoor kitchens, fireplaces, and complete landscaping.",
      icon: Info,
    },
    {
      title: "24/7 Emergency Services",
      desc: "Available for urgent issues requiring immediate attention.",
      icon: AlertTriangle,
    },
    {
      title: "Clear Communication",
      desc: "Transparent quotes, no hidden fees, and open dialogue throughout.",
      icon: Sparkles,
    },
  ];

  const steps = [
    {
      number: "1",
      title: "We'll Respond Within 24 Hours",
      desc: "We'll acknowledge your inquiry and schedule your free consultation.",
    },
    {
      number: "2",
      title: "Your On-Site Consultation",
      desc: "Robert will meet you at your property to discuss your vision, assess your space, and answer all your questions.",
    },
    {
      number: "3",
      title: "Receive Your Transparent Proposal",
      desc: "We'll provide a clear, detailed estimate and project timeline.",
    },
    {
      number: "4",
      title: "Begin Your Project",
      desc: "Once you're ready, we'll bring your vision to life with craftsmanship and integrity.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center px-6 py-16">
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
              Contact Us
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              We're Here to Help Bring Your Vision to Life
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              At JRM Construction Landscaping Design, we believe great projects begin with great communication. Whether you're ready to schedule your free consultation, have questions about our services, or need emergency assistance, owner Robert Thompson and our team are here to listen, guide, and support you every step of the way.
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

      {/* ── INTRODUCTORY COPY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-light">
              With over 35 years of experience serving San Antonio and the surrounding area, we understand that every project is unique. That's why we take the time to understand your vision, answer your questions, and provide the expert guidance you need to make informed decisions.
            </p>
          </div>
        </section>
      </div>

      {/* ── GET IN TOUCH & CONSULTATION FORM ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section 
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-start">
            
            {/* Left Column: Direct channels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <h4 className="text-sm font-bold text-neutral-900">📞 Phone</h4>
                  <p className="mt-2 text-xs text-neutral-500 font-light leading-relaxed">
                    Call to speak directly with Robert for consultations, estimates, or urgent needs.
                  </p>
                  <p className="mt-3 text-md font-bold text-[#3d5636] group-hover:underline">(210) 429-5526</p>
                </a>

                {/* Office Hours */}
                <div className="p-5 rounded-xl border border-neutral-200/50 bg-white text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">🕒 Office Hours</h4>
                  <p className="mt-3 text-sm font-bold text-neutral-800">Monday - Saturday</p>
                  <p className="text-xs text-neutral-600 mt-1">8:00 AM - 5:00 PM</p>
                </div>

                {/* Emergency Card */}
                <div className="p-5 rounded-xl border border-red-200/60 bg-red-50/40 text-left relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/30 rounded-full translate-x-8 -translate-y-8 pointer-events-none" />
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-red-900">⚡ 24/7 Emergency Services</h4>
                  <p className="mt-3 text-xs text-red-950 font-light leading-relaxed">
                    For urgent issues requiring immediate attention to protect your property, call our main line anytime.
                  </p>
                </div>

                {/* Email Card */}
                <a 
                  href="mailto:robertsa210@icloud.com"
                  className="group block p-5 rounded-xl border border-neutral-200/50 bg-white hover:border-[#577a4c]/40 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">📧 Email</h4>
                  <p className="mt-2 text-xs text-neutral-500 font-light leading-relaxed">
                    Ideal for sending project inspiration photos, detailed inquiries, or scheduling requests.
                  </p>
                  <p className="mt-3 text-sm font-bold text-[#3d5636] group-hover:underline truncate font-light">robertsa210@icloud.com</p>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Contact Message Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-neutral-200/50 p-8 shadow-lg space-y-6 text-left relative"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 tracking-wide capitalize">
                        Send Us a Message
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1 font-light">
                        Prefer to reach out online? Fill out the form below, and we'll respond within one business day.
                      </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                      {/* Row 1: Name */}
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all"
                        />
                      </div>

                      {/* Row 2: Email */}
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email Address"
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all"
                        />
                      </div>

                      {/* Row 3: Phone */}
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number"
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all"
                        />
                      </div>

                      {/* Row 4: Address */}
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Property Address
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Property Address"
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all"
                        />
                      </div>

                      {/* Row 5: Project Type Dropdown */}
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Project Type
                        </label>
                        <div className="relative w-full">
                          <select
                            required
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 py-3 pl-4 pr-10 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled hidden>
                              Select project type...
                            </option>
                            <option value="remodeling">House Remodeling</option>
                            <option value="new-construction">New Construction</option>
                            <option value="outdoor-kitchen">Outdoor Kitchen</option>
                            <option value="fireplace">Custom Fireplace</option>
                            <option value="patio">Covered Patio</option>
                            <option value="hardscapes">Hardscapes</option>
                            <option value="softscapes">Softscapes</option>
                            <option value="fencing">Fencing</option>
                            <option value="turf">Artificial Turf</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center text-neutral-500">
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </div>
                      </div>

                      {/* Row 6: Description */}
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Brief Description of Your Project
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Tell us about your project vision, timeline, and goals..."
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all resize-none font-light"
                        />
                      </div>

                      {/* Row 7: Best Time to Contact */}
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Best Time to Contact
                        </label>
                        <div className="relative w-full">
                          <select
                            required
                            value={formData.contactTime}
                            onChange={(e) => setFormData({ ...formData, contactTime: e.target.value })}
                            className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200/70 py-3 pl-4 pr-10 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#577a4c]/30 focus:border-[#577a4c] transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled hidden>
                              Select best time...
                            </option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                          </select>
                          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center text-neutral-500">
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-[#1c140d] hover:bg-[#2c2015] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-lg py-4 transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none cursor-pointer text-center"
                      >
                        Send Message
                      </button>
                    </form>

                    <div className="pt-2 border-t border-neutral-100 text-center">
                      <span className="text-[11px] text-neutral-500 font-light">
                        We typically respond to all inquiries within one business day.
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-[#577a4c]/15 text-[#3d5636] rounded-full flex items-center justify-center shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-neutral-900 tracking-wide font-serif">
                        Thank You, {formData.name}!
                      </h3>
                      <p className="text-sm text-neutral-600 font-light max-w-sm mx-auto">
                        Your message was successfully received. Owner Robert Thompson will contact you during the {formData.contactTime} to discuss details.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          address: "",
                          projectType: "",
                          description: "",
                          contactTime: ""
                        });
                      }}
                      className="text-xs font-semibold text-[#3d5636] border border-[#577a4c]/30 hover:bg-[#577a4c]/5 rounded-full px-5 py-2 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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
            viewport={{ once: true }}
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
              Visit Our Service Area
            </h2>
            <p className="mt-4 text-sm text-neutral-700 leading-relaxed font-light">
              Based in San Antonio, TX, we proudly serve homeowners and businesses within an 80-mile radius, including:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3.5 max-w-6xl mx-auto">
            {cities.map((city, idx) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="bg-white/80 border border-neutral-200/40 rounded-full py-2.5 px-4 shadow-sm hover:bg-white hover:border-[#577a4c]/30 hover:scale-[1.02] transition-all duration-300 text-xs font-semibold text-neutral-800 flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#3d5636]" />
                <span>{city}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] font-bold text-xs px-5 py-2.5 rounded-full select-none shadow-sm">
              Not sure if you're in our area? Just ask—we're happy to confirm.
            </span>
          </div>
        </section>
      </div>

      {/* ── WHAT HAPPENS NEXT SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-3">
              Our Process
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What Happens Next?
            </h2>
          </div>

          {/* Stepper Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left relative">
            {steps.map((s) => (
              <div key={s.number} className="bg-white border border-neutral-200/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all relative">
                <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-[#1c140d] text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  {s.number}
                </div>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">{s.title}</h4>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── WHY CONTACT JRM VALUES ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
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
        </section>
      </div>

      {/* ── LET'S BUILD SOMETHING CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(28,20,13,0.96), rgba(28,20,13,0.98)), url(/src/assets/wel-bg.png)",
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Logo */}
            <img src={logo} alt="JRM" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Let's Start the Conversation
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Your project begins with a simple conversation. Whether you're dreaming of a kitchen remodel, a custom outdoor kitchen, or a complete property transformation, we're here to help.
            </p>

            <p className="text-md font-bold text-[#a5b89d] mb-10 tracking-wide uppercase">
              Contact us today—we're ready to listen and guide you.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-md font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                JRM Construction Landscaping Design
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-5 text-[15px] font-light">
                <a href="tel:2104295526" className="flex items-center gap-3.5 hover:text-[#a5b89d] transition-colors">
                  <Phone className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>(210) 429-5526</span>
                </a>
                <a href="mailto:robertsa210@icloud.com" className="flex items-center gap-3.5 hover:text-[#a5b89d] transition-colors">
                  <Mail className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>robertsa210@icloud.com</span>
                </a>
                <div className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Proudly Serving San Antonio & the Surrounding 80-Mile Area</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Licensed · Insured · Bonded</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call Robert Now
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
