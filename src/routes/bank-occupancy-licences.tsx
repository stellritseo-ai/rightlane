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
  Smartphone, Phone, Mail as MailIcon, Check, FileText, Key, ClipboardList
} from "lucide-react";
import imgHero from "@/assets/svc-bank-occupancy.png";
import imgWork from "@/assets/svc-leasing-licensing.png";
import imgResult from "@/assets/svc-cleaning.png";
import yelpBadge from "@/assets/yelp-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/bank-occupancy-licences")({
  head: () => ({
    meta: [
      { title: "Bank Occupancy Licences Cleaning - Right Lane Handyman Services, LLC | Clearwater, FL" },
      {
        name: "description",
        content:
          "Professional cleaning and preparation for bank occupancy licences in Clearwater, Tampa Bay Area, Hillsborough & Pinellas County. Inspection-ready cleaning for banks and financial institutions. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Bank Occupancy Licences Cleaning - Right Lane Handyman" },
      { property: "og:description", content: "Thorough pre-occupancy cleaning and preparation for banking institutions. Ensure your space is clean, compliant, and inspection-ready." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BankOccupancyLicencesPage,
});

const BENEFITS = [
  { icon: Award, title: "25+ Years of Experience", text: "Decades of commercial and institutional cleaning expertise." },
  { icon: ShieldCheck, title: "Licensed, Insured & Bonded", text: "Full coverage for all cleaning operations." },
  { icon: Building2, title: "Commercial Banking Specialists", text: "We understand the high standards required by financial institutions." },
  { icon: Clock, title: "Deadline-Driven Service", text: "We work to your occupancy inspection timeline." },
  { icon: CircleDollarSign, title: "Upfront Pricing", text: "No surprises, no hidden fees — ever." },
  { icon: ThumbsUp, title: "Inspection-Ready Results", text: "100% satisfaction, guaranteed." },
  { icon: FileText, title: "Compliance Knowledge", text: "Familiar with commercial occupancy standards and requirements." },
  { icon: MapPin, title: "Locally Owned & Operated", text: "Serving Clearwater, Tampa Bay & Pinellas County." },
];

const CORE_SERVICES = [
  { icon: ClipboardList, title: "Pre-Occupancy Deep Clean", desc: "A thorough, top-to-bottom cleaning of the entire facility before your occupancy inspection. Floors, walls, ceilings, fixtures, restrooms, and all surfaces are cleaned to a spotless standard." },
  { icon: CheckCircle2, title: "Floor Care & Polishing", desc: "Professional floor stripping, waxing, and buffing for marble, tile, and vinyl flooring. We restore floors to a professional-grade shine suitable for banking institution standards." },
  { icon: ShieldCheck, title: "Restroom Sanitization", desc: "Deep sanitization of all restroom facilities including fixtures, tile, grout, mirrors, and touch-point surfaces to ensure a hygienic, presentable environment." },
  { icon: Building2, title: "Lobby & Reception Cleaning", desc: "Meticulous cleaning of customer-facing areas including reception desks, waiting areas, glass partitions, entrance doors, and ATM alcoves." },
  { icon: Key, title: "Vault & Secure Area Preparation", desc: "Careful cleaning of vault areas and secure rooms. We work within your security protocols and access limitations to prepare all areas for occupancy inspection." },
  { icon: Award, title: "Final Walkthrough & Touch-Up", desc: "A detailed final inspection walkthrough ensures nothing is missed. We address any touch-up items before your scheduled occupancy review." },
];

const PROCESS_STEPS = [
  { step: "Step 1", title: "Site Assessment", desc: "We assess the full scope of your banking facility — size, flooring types, special security zones, and specific inspection requirements." },
  { step: "Step 2", title: "Customized Cleaning Plan", desc: "We develop a detailed cleaning checklist tailored to banking occupancy standards and your facility's unique layout and requirements." },
  { step: "Step 3", title: "Professional Execution", desc: "Our trained crew arrives on schedule and performs a systematic, thorough cleaning of every area — working within your security protocols." },
  { step: "Step 4", title: "Inspection Prep & Final Check", desc: "We complete a final walkthrough, address all deficiencies, and confirm your facility is clean, organized, and inspection-ready." },
];

const SERVICE_TYPES = [
  { type: "Bank Branch Spaces", desc: "Full branch preparation for new occupancy" },
  { type: "ATM Rooms & Alcoves", desc: "Detailed cleaning of ATM areas" },
  { type: "Vault Areas", desc: "Within your security protocols" },
  { type: "Teller Stations & Counters", desc: "Glass, surfaces, and hardware" },
  { type: "Customer Waiting Areas", desc: "Seating, flooring, and fixtures" },
  { type: "Restrooms", desc: "Deep sanitization to healthcare standards" },
  { type: "Conference Rooms", desc: "Tables, chairs, AV equipment, glass" },
];

const SERVICE_CITIES = [
  "Clearwater", "Largo", "St. Petersburg", "Tampa", "Brandon",
  "Riverview", "Dunedin", "Tarpon Springs", "Safety Harbor",
  "Palm Harbor", "Pinellas Park", "Seminole", "Hillsborough County",
  "Pinellas County", "Tampa Bay Area",
];

const FAQS = [
  { question: "What is a bank occupancy licence cleaning?", answer: "A bank occupancy licence cleaning is a comprehensive pre-occupancy cleaning service designed to prepare banking institutions for official inspection and occupancy approval. It covers every area of the facility to meet commercial standards." },
  { question: "Do you work within banking security protocols?", answer: "Yes. We are experienced with secure facility operations and will coordinate closely with your management team to work within all access restrictions and security requirements." },
  { question: "How long does a bank occupancy cleaning take?", answer: "Timeline depends on facility size, but most bank branch preparations can be completed within 1-3 business days. We work quickly without compromising quality." },
  { question: "Do you provide a cleaning checklist?", answer: "Yes. We provide a detailed service checklist and can complete documentation to support your occupancy inspection process." },
  { question: "Are you insured?", answer: "Yes! Right Lane Handyman Services, LLC is fully licensed, insured, and bonded for your protection and peace of mind." },
  { question: "Do you offer free estimates?", answer: "Absolutely. We provide free, no-obligation estimates for all bank occupancy cleaning projects. Call (727) 642-0201 or submit our form." },
];

const REVIEWS = [
  { quote: "Right Lane prepared our new branch location for the occupancy inspection. Thorough, professional, and they understood the security requirements.", author: "Jennifer L.", city: "Tampa" },
  { quote: "Immaculate cleaning on our bank expansion space. They completed everything on our tight schedule. Highly recommend.", author: "Michael T.", city: "Clearwater" },
  { quote: "They handled our entire branch cleaning from lobby to vault corridor. Passed our occupancy inspection with no issues.", author: "Patricia R.", city: "Largo" },
  { quote: "Professional team that understood the sensitivity of our facility. Great results and excellent communication throughout.", author: "Anthony K.", city: "St. Petersburg" },
];

function BankOccupancyLicencesPage() {
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
      await addLead({ name: formData.name, email: formData.email, phone: formData.phone, address: fullAddress, projectType: "Bank Occupancy Licences Cleaning", description: formData.details, contactTime: "Anytime" });
      await addWebEmail({ name: formData.name, email: formData.email, phone: formData.phone, service: "Bank Occupancy Licences Cleaning", message: `${formData.details}\n\nAddress: ${fullAddress}`, source: "bank_occupancy_licences_page" });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting bank occupancy request:", err);
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">🏦 Commercial Banking Cleaning</span>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">Bank Occupancy Licences</h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium uppercase tracking-widest">Clearwater, Tampa Bay Area, Hillsborough & Pinellas County</p>
            <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-3xl">Banking institutions require spotless, professionally prepared facilities before occupancy licence approval. Right Lane Handyman Services, LLC provides comprehensive pre-occupancy cleaning tailored specifically for bank branches and financial spaces — ensuring your facility is clean, compliant, and inspection-ready.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 items-center opacity-90">
              <img src={bbbBadge} alt="BBB" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={homeadvisorBadge} alt="HomeAdvisor" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={yelpBadge} alt="Yelp" className="h-9 sm:h-10 w-auto object-contain filter drop-shadow-md" />
            </div>
            <a href="#estimate-form" className="mt-8 rounded-full bg-copper hover:bg-copper-deep px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]">Request Free Estimate</a>
          </motion.div>
        </section>
      </div>

      {/* WHY CHOOSE */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Our Advantage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Why Choose Right Lane for Bank Occupancy Cleaning?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }} className="bg-white rounded-2xl border border-[#eae8e1] p-6 text-left shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.02] transition-all duration-300 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper/5 text-copper mb-4 border border-copper/10 group-hover:bg-copper group-hover:text-white transition-all duration-300"><b.icon className="w-5 h-5" /></div>
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
              <img src={imgWork} alt="Bank occupancy cleaning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-neutral-900 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  Inspection-Ready Results
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
                Immaculate Bank Spaces — Inspection Ready
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                Banking institutions require the highest standards of cleanliness. Our professional team prepares every square foot of your facility — lobby, teller stations, restrooms, and secure areas — to pass any occupancy inspection.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: "25+", label: "Years Experience" },
                  { stat: "100%", label: "Compliance" },
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
                <img src={img} alt={`Bank occupancy cleaning photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">Services</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Comprehensive Bank Occupancy Cleaning</h2>
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

      {/* AREAS COVERED */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Areas Covered</span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>What We Clean in Your Bank</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {SERVICE_TYPES.map((s, i) => (
              <motion.div key={s.type} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="bg-white/90 rounded-2xl border border-neutral-200/40 p-5 shadow-xs hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="flex items-start gap-3"><Check className="h-4 w-4 text-copper mt-0.5 shrink-0" /><div><p className="text-sm font-bold text-neutral-900">{s.type}</p><p className="text-xs text-neutral-500 mt-0.5">{s.desc}</p></div></div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* PROCESS */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">Process</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Our 4-Step Occupancy Cleaning Process</h2>
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
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">Free Estimate</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Request a Bank Occupancy Cleaning Quote</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-8 bg-[#f9f7f2] rounded-2xl border border-neutral-200">
                  <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5"><Check className="h-8 w-8 text-emerald-600" /></div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Request Received!</h3>
                  <p className="text-sm text-neutral-500 font-light">We'll contact you within 24 hours. Call us at <a href="tel:7276420201" className="text-copper font-bold">(727) 642-0201</a>.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative"><User className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input required name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name *" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" /></div>
                    <div className="relative"><Smartphone className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input required name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number *" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" /></div>
                  </div>
                  <div className="relative"><MailIcon className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" /></div>
                  <div className="relative"><MapPin className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input name="address" value={formData.address} onChange={handleInputChange} placeholder="Facility Address" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" /></div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" />
                    <input name="state" value={formData.state} onChange={handleInputChange} placeholder="State" className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" />
                    <input name="zip" value={formData.zip} onChange={handleInputChange} placeholder="ZIP Code" className="col-span-2 sm:col-span-1 w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50" />
                  </div>
                  <textarea name="details" value={formData.details} onChange={handleInputChange} rows={4} placeholder="Describe your facility and occupancy cleaning needs (square footage, type of bank branch, inspection date, etc.)..." className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 resize-none" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] text-white rounded-full py-4 text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"><Send className="h-4 w-4" />Send Estimate Request</button>
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
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>What Our Clients Say</h2>
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

      {/* FOOTER CTA */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-neutral-950 border border-neutral-800 px-6 py-16 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready for Your Occupancy Inspection?</h2>
          <p className="text-sm text-neutral-400 font-light mb-8 max-w-xl mx-auto">Let Right Lane Handyman Services prepare your banking facility. Serving the Tampa Bay Area, Hillsborough County, Pinellas County, and surrounding communities.</p>
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
