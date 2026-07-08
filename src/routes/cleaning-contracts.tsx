import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award, ShieldCheck, Building2, Clock, CircleDollarSign, ThumbsUp,
  MapPin, CheckCircle2, ChevronDown, Star, Send, User,
  Smartphone, Phone, Mail as MailIcon, Check, FileText, CalendarClock, RefreshCw, Handshake
} from "lucide-react";
import imgHero from "@/assets/svc-cleaning-contracts.png";
import imgWork from "@/assets/svc-property-care.png";
import imgResult from "@/assets/svc-maintenance.png";
import yelpBadge from "@/assets/yelp-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/cleaning-contracts")({
  head: () => ({
    meta: [
      { title: "Cleaning Contracts - Right Lane Handyman Services, LLC | Clearwater, FL" },
      {
        name: "description",
        content:
          "Short-term and long-term cleaning contracts for commercial and residential properties in Clearwater, Tampa Bay Area, Hillsborough & Pinellas County. Reliable scheduled cleaning services. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Cleaning Contracts - Right Lane Handyman Services" },
      { property: "og:description", content: "Flexible short-term and long-term cleaning maintenance contracts for businesses, property managers, and homeowners. Reliable, scheduled service with upfront pricing." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CleaningContractsPage,
});

const BENEFITS = [
  { icon: Award, title: "25+ Years of Experience", text: "Decades of professional commercial and residential maintenance cleaning." },
  { icon: ShieldCheck, title: "Licensed, Insured & Bonded", text: "Full coverage on all contracted cleaning operations." },
  { icon: Building2, title: "Commercial & Residential", text: "Contracts available for businesses, property managers, and homeowners." },
  { icon: CalendarClock, title: "Flexible Scheduling", text: "Daily, weekly, bi-weekly, monthly, or custom schedule." },
  { icon: CircleDollarSign, title: "Fixed Contract Pricing", text: "Predictable, transparent costs with no surprise fees." },
  { icon: ThumbsUp, title: "Guaranteed Service Quality", text: "Consistent, high-quality results on every visit." },
  { icon: RefreshCw, title: "Reliable & Recurring", text: "A dedicated team you can count on, visit after visit." },
  { icon: MapPin, title: "Locally Owned & Operated", text: "Serving Clearwater, Tampa Bay & Pinellas County." },
];

const CORE_SERVICES = [
  { icon: Building2, title: "Commercial Cleaning Contracts", desc: "Regular scheduled cleaning for offices, retail stores, restaurants, medical offices, and commercial spaces. Daily, weekly, or monthly frequency tailored to your business operations." },
  { icon: CheckCircle2, title: "Residential Cleaning Contracts", desc: "Ongoing scheduled cleaning for homeowners who want a consistently clean home. Choose weekly, bi-weekly, or monthly service that fits your lifestyle and budget." },
  { icon: FileText, title: "Property Management Contracts", desc: "Bulk and portfolio cleaning contracts for property managers. We provide reliable, consistent cleaning across multiple residential or commercial units." },
  { icon: Handshake, title: "Short-Term Contracts", desc: "Need cleaning for a specific project timeline? We offer short-term contracts for construction periods, events, seasonal operations, or temporary lease agreements." },
  { icon: RefreshCw, title: "Long-Term Maintenance Contracts", desc: "Annual and multi-year cleaning agreements that deliver consistent service quality and locked-in pricing, providing peace of mind and budget predictability." },
  { icon: CalendarClock, title: "Custom Contract Packages", desc: "We design cleaning contracts around your specific needs — scope of work, frequency, access requirements, and quality standards. No one-size-fits-all approach." },
];

const PROCESS_STEPS = [
  { step: "Step 1", title: "Consultation & Site Visit", desc: "We visit your property to understand your cleaning needs, assess scope of work, and discuss preferred scheduling and service frequency." },
  { step: "Step 2", title: "Custom Contract Design", desc: "We prepare a detailed cleaning contract outlining services, frequency, pricing, and quality standards — customized for your specific requirements." },
  { step: "Step 3", title: "Contract Kick-Off", desc: "Your dedicated cleaning team begins service on schedule. We start with a comprehensive initial deep clean before transitioning to your recurring maintenance schedule." },
  { step: "Step 4", title: "Quality Monitoring", desc: "We perform regular quality checks and remain responsive to feedback, ensuring service standards are consistently maintained throughout your contract." },
];

const CONTRACT_TYPES = [
  { type: "Office Buildings", desc: "Daily or weekly janitorial service" },
  { type: "Retail Stores", desc: "Before/after hours cleaning" },
  { type: "Restaurant & Food Service", desc: "Daily deep cleaning contracts" },
  { type: "Medical & Dental Offices", desc: "Sanitation-grade protocols" },
  { type: "Property Management", desc: "Multi-unit portfolio contracts" },
  { type: "HOA Common Areas", desc: "Scheduled community cleaning" },
  { type: "Single-Family Homes", desc: "Weekly or bi-weekly home cleaning" },
];

const SERVICE_CITIES = [
  "Clearwater", "Largo", "St. Petersburg", "Tampa", "Brandon",
  "Riverview", "Dunedin", "Tarpon Springs", "Safety Harbor",
  "Palm Harbor", "Pinellas Park", "Seminole", "Hillsborough County",
  "Pinellas County", "Tampa Bay Area",
];

const FAQS = [
  { question: "What is included in a cleaning contract?", answer: "Our cleaning contracts cover a customized scope of cleaning services at a defined frequency. This includes regular sweeping, mopping, vacuuming, surface cleaning, restroom sanitization, trash removal, and any specialty services you require." },
  { question: "Do you offer both short-term and long-term contracts?", answer: "Yes. We offer flexible contracts ranging from month-to-month arrangements to annual and multi-year agreements. Contract length is tailored to your needs." },
  { question: "How is contract pricing structured?", answer: "We provide fixed monthly or periodic pricing based on scope of work and frequency. All pricing is upfront and transparent with no surprise fees." },
  { question: "Can we customize the cleaning schedule?", answer: "Absolutely. We build your cleaning schedule around your business hours, access requirements, and operational needs — whether that means overnight, early morning, weekend, or custom timed service." },
  { question: "Do you provide equipment and supplies?", answer: "Yes. We bring all professional cleaning equipment, tools, and supplies. You don't need to provide anything — just access to the property." },
  { question: "Are you insured for contracted cleaning operations?", answer: "Yes! Right Lane Handyman Services, LLC is fully licensed, insured, and bonded for all commercial and residential cleaning contract operations." },
  { question: "How do we get started?", answer: "Simply contact us for a free consultation and site visit. We'll assess your needs, provide a customized proposal, and can start service within days of contract agreement." },
];

const REVIEWS = [
  { quote: "Right Lane has been maintaining our office building for over a year. Consistent quality, reliable scheduling, and they always go above and beyond.", author: "Christine B.", city: "Tampa" },
  { quote: "We contract Right Lane for 12 of our residential units. They handle turnover and monthly maintenance seamlessly. Highly recommend.", author: "David M.", city: "Clearwater" },
  { quote: "Professional, affordable, and they show up every time. Our restaurant has never been cleaner. Great contract cleaning team.", author: "Sofia A.", city: "St. Petersburg" },
  { quote: "They customized a bi-weekly home cleaning contract for us that fits our budget perfectly. Consistent, thorough, and trustworthy.", author: "Marcus T.", city: "Largo" },
];

function CleaningContractsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "", city: "", state: "FL", zip: "", details: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullAddress = `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`;
    try {
      await addLead({ name: formData.name, email: formData.email, phone: formData.phone, address: fullAddress, projectType: "Cleaning Contracts", description: formData.details, contactTime: "Anytime" });
      await addWebEmail({ name: formData.name, email: formData.email, phone: formData.phone, service: "Cleaning Contracts", message: `${formData.details}\n\nAddress: ${fullAddress}`, source: "cleaning_contracts_page" });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting cleaning contract request:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* HERO */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[460px] md:min-h-[520px] flex items-center justify-center text-center px-6 py-16">
          <motion.div initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgHero})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/94 via-[#1c140d]/82 to-[#1c140d]/94 z-10" />
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-20 max-w-4xl mx-auto flex flex-col items-center bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">📋 Recurring Maintenance Cleaning</span>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">Cleaning Contracts</h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium uppercase tracking-widest">Short-Term & Long-Term – Commercial & Residential</p>
            <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-3xl">A consistently clean property starts with a reliable cleaning partner. Right Lane Handyman Services, LLC offers flexible short-term and long-term cleaning contracts for businesses, property managers, and homeowners across the Tampa Bay Area — delivering dependable, scheduled cleaning that maintains your property at the highest standard.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 items-center opacity-90">
              <img src={bbbBadge} alt="BBB" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={homeadvisorBadge} alt="HomeAdvisor" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={yelpBadge} alt="Yelp" className="h-9 sm:h-10 w-auto object-contain filter drop-shadow-md" />
            </div>
            <a href="#estimate-form" className="mt-8 rounded-full bg-copper hover:bg-copper-deep px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]">Request Free Proposal</a>
          </motion.div>
        </section>
      </div>

      {/* WHY CHOOSE */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Our Advantage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Why Choose Right Lane for Cleaning Contracts?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }} className="bg-white rounded-2xl border border-[#eae8e1] p-6 text-left shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.02] transition-all group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper/5 text-copper mb-4 border border-copper/10 group-hover:bg-copper group-hover:text-white transition-all"><b.icon className="w-5 h-5" /></div>
                <h3 className="text-sm font-bold text-neutral-900 mb-1.5">{b.title}</h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>


      {/* VISUAL SHOWCASE */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-sm">
          <div className="grid lg:grid-cols-2 min-h-[420px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative h-[280px] lg:h-auto overflow-hidden"
            >
              <img src={imgWork} alt="Cleaning contract service team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-neutral-900 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                  Reliable Scheduled Service
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-neutral-950 p-8 md:p-12 flex flex-col justify-center"
            >
              <span className="inline-flex items-center bg-copper/20 border border-copper/30 text-copper rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-6 w-fit">Our Work</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                Consistent, Reliable Cleaning — Every Visit
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                From daily office janitorial service to monthly residential maintenance contracts, Right Lane delivers a consistently clean property on every scheduled visit — backed by a quality guarantee and upfront, transparent pricing.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: "25+", label: "Years Experience" },
                  { stat: "100%", label: "Show-Up Rate" },
                  { stat: "5★", label: "Client Rating" },
                ].map((item) => (
                  <div key={item.stat} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-extrabold text-copper">{item.stat}</p>
                    <p className="text-[11px] text-neutral-400 mt-1 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-3 h-[160px] md:h-[220px]">
            {[imgHero, imgWork, imgResult].map((img, i) => (
              <div key={i} className="relative overflow-hidden group">
                <img src={img} alt={`Cleaning contract photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CORE SERVICES */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">Contract Types</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Cleaning Contract Options</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {CORE_SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-[#fcfbf8] border border-neutral-200/50 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.01] transition-all group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper/5 text-copper border border-copper/10 group-hover:bg-copper group-hover:text-white transition-all mb-5"><s.icon className="h-5 w-5" /></div>
                <h3 className="text-sm font-extrabold text-neutral-900 mb-3">{s.title}</h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* CONTRACT PROPERTY TYPES */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Property Types</span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>We Contract for Every Property Type</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {CONTRACT_TYPES.map((c, i) => (
              <motion.div key={c.type} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="bg-white/90 rounded-2xl border border-neutral-200/40 p-5 shadow-xs hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="flex items-start gap-3"><Check className="h-4 w-4 text-copper mt-0.5 shrink-0" /><div><p className="text-sm font-bold text-neutral-900">{c.type}</p><p className="text-xs text-neutral-500 mt-0.5">{c.desc}</p></div></div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* PROCESS */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">How It Works</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>How Cleaning Contracts Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#fcfbf8] rounded-2xl border border-neutral-200/50 p-6 shadow-xs">
                <span className="text-xs font-extrabold text-copper uppercase tracking-widest mb-3 block">{step.step}</span>
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* SERVICE AREA */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Service Area</span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Serving the Tampa Bay Region</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {SERVICE_CITIES.map((city) => (
              <span key={city} className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 text-neutral-700 rounded-full px-3 py-1.5 text-xs font-semibold"><MapPin className="h-3 w-3 text-copper" />{city}</span>
            ))}
          </div>
        </section>
      </div>

      {/* ESTIMATE FORM */}
      <div id="estimate-form" className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">Free Proposal</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Request a Free Cleaning Contract Proposal</h2>
            <p className="mt-3 text-sm text-neutral-500 font-light">Tell us about your property and cleaning needs. We'll prepare a customized contract proposal within 24 hours.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-8 bg-[#f9f7f2] rounded-2xl border border-neutral-200">
                  <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5"><Check className="h-8 w-8 text-emerald-600" /></div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Request Received!</h3>
                  <p className="text-sm text-neutral-500 font-light">We'll contact you within 24 hours. Call <a href="tel:7276420201" className="text-copper font-bold">(727) 642-0201</a>.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative"><User className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input required name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name *" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" /></div>
                    <div className="relative"><Smartphone className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input required name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number *" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" /></div>
                  </div>
                  <div className="relative"><MailIcon className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" /></div>
                  <div className="relative"><MapPin className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input name="address" value={formData.address} onChange={handleInputChange} placeholder="Property Address" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" /></div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" />
                    <input name="state" value={formData.state} onChange={handleInputChange} placeholder="State" className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" />
                    <input name="zip" value={formData.zip} onChange={handleInputChange} placeholder="ZIP Code" className="col-span-2 sm:col-span-1 w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" />
                  </div>
                  <textarea name="details" value={formData.details} onChange={handleInputChange} rows={4} placeholder="Tell us about your property type, cleaning frequency needed, and contract duration (short-term or long-term)..." className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 resize-none" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] text-white rounded-full py-4 text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"><Send className="h-4 w-4" />Request My Cleaning Contract Proposal</button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">FAQ</span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-200/50 overflow-hidden shadow-xs">
                <button onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                  <span className="text-sm font-bold text-neutral-900">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${expandedFAQ === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {expandedFAQ === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-5 text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100 pt-4">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* REVIEWS */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">Reviews</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>What Our Contract Clients Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {REVIEWS.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-[#fcfbf8] rounded-2xl border border-neutral-200/50 p-6 shadow-xs">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, si) => <Star key={si} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />)}</div>
                <p className="text-sm text-neutral-700 italic leading-relaxed mb-4">"{r.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-copper/10 flex items-center justify-center"><User className="h-4 w-4 text-copper" /></div>
                  <div><p className="text-xs font-bold text-neutral-900">{r.author}</p><p className="text-xs text-neutral-400">{r.city}, FL</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-neutral-950 border border-neutral-800 px-6 py-16 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready to Set Up Your Cleaning Contract?</h2>
          <p className="text-sm text-neutral-400 font-light mb-8 max-w-xl mx-auto">Call Ronnie Lane today to discuss your cleaning needs. We'll design a contract that fits your schedule, property, and budget. Serving the entire Tampa Bay Area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7276420201" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] text-white rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg hover:scale-[1.03] transition-all"><Phone className="h-4 w-4" />(727) 642-0201</a>
            <Link to="/free-estimate" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all">Get Free Estimate</Link>
          </div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
