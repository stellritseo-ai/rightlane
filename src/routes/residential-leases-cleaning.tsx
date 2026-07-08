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
  Smartphone, Phone, Mail as MailIcon, Check, Home, Sparkles, HeartPulse, Timer
} from "lucide-react";
import imgHero from "@/assets/svc-residential-leasing-cleaning.png";
import imgWork from "@/assets/svc-cleaning.png";
import imgResult from "@/assets/svc-property-care.png";
import yelpBadge from "@/assets/yelp-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/residential-leases-cleaning")({
  head: () => ({
    meta: [
      { title: "Residential Leases Cleaning Service - Right Lane Handyman Services, LLC | Clearwater, FL" },
      {
        name: "description",
        content:
          "Professional residential lease cleaning in Clearwater, Tampa Bay Area, Hillsborough & Pinellas County. Move-in and move-out deep cleaning for apartments, condos, and houses. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Residential Leases Cleaning - Right Lane Handyman" },
      { property: "og:description", content: "Move-in and move-out deep cleaning for apartments, condominiums, townhouses, and single-family homes. Get your deposit back." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ResidentialLeasesCleaningPage,
});

const BENEFITS = [
  { icon: Award, title: "25+ Years of Experience", text: "Reliable residential cleaning for homes and rentals." },
  { icon: ShieldCheck, title: "Licensed, Insured & Bonded", text: "Complete protection for your property and belongings." },
  { icon: Home, title: "All Property Types", text: "Apartments, condos, townhomes, and single-family houses." },
  { icon: Clock, title: "Same-Day Scheduling", text: "Fast response for urgent move-out deadlines." },
  { icon: CircleDollarSign, title: "Deposit-Recovery Cleaning", text: "We clean to landlord inspection standards." },
  { icon: ThumbsUp, title: "Guaranteed Satisfaction", text: "We re-clean any missed areas at no charge." },
  { icon: HeartPulse, title: "Eco-Friendly Options", text: "Safe cleaning products for families and pets." },
  { icon: MapPin, title: "Locally Owned", text: "Serving Clearwater, Tampa Bay & Pinellas County." },
];

const CORE_SERVICES = [
  { icon: Sparkles, title: "Move-Out Deep Cleaning", desc: "A comprehensive top-to-bottom clean of your entire unit before you hand back the keys. Kitchens, bathrooms, bedrooms, closets, floors, baseboards, blinds, and appliances — everything." },
  { icon: Home, title: "Move-In Cleaning", desc: "Starting fresh in a new home? We deep-clean every surface before your belongings arrive — eliminating prior tenant residue, dust, and odors so your new home feels truly yours." },
  { icon: CheckCircle2, title: "Kitchen Deep Clean", desc: "Inside/outside oven, refrigerator, microwave, dishwasher, cabinets, countertops, backsplash, sink, and hood vent. We leave kitchens spotless and grease-free." },
  { icon: HeartPulse, title: "Bathroom Sanitization", desc: "Scrubbing tile grout, toilets, tubs, showers, sinks, mirrors, exhaust fans, and fixtures. We sanitize to medical-grade cleanliness where needed." },
  { icon: Timer, title: "Carpet & Floor Cleaning", desc: "Vacuuming, mopping, and spot treatment of all flooring types. We remove stains, scuffs, and embedded dirt from carpets, hardwood, tile, and luxury vinyl." },
  { icon: Building2, title: "Wall & Window Cleaning", desc: "Wipe-down of walls, light switches, outlets, baseboards, windowsills, blinds, and glass panes to remove marks, smudges, and accumulated grime." },
];

const PROCESS_STEPS = [
  { step: "Step 1", title: "Free Assessment", desc: "We assess your property size, condition, and specific lease requirements to provide an accurate free estimate." },
  { step: "Step 2", title: "Custom Cleaning Checklist", desc: "We build a cleaning checklist aligned with your landlord's inspection standards or move-in preferences." },
  { step: "Step 3", title: "Professional Deep Cleaning", desc: "Our experienced residential cleaning team systematically cleans every room to a move-in/move-out ready standard." },
  { step: "Step 4", title: "Final Walkthrough", desc: "We inspect the property with you before leaving. Any touch-up items are addressed immediately at no additional charge." },
];

const PROPERTY_TYPES = [
  { type: "Studio & 1BR Apartments", desc: "Quick, affordable turnover cleaning" },
  { type: "2-4 Bedroom Apartments", desc: "Multi-room lease cleaning" },
  { type: "Condominiums", desc: "HOA-approved cleaning standards" },
  { type: "Townhouses", desc: "Multi-level residential cleaning" },
  { type: "Single-Family Homes", desc: "Full property move-out service" },
  { type: "Vacation Rentals", desc: "Airbnb and short-term turnover" },
  { type: "Student Housing", desc: "End-of-year lease cleaning" },
];

const SERVICE_CITIES = [
  "Clearwater", "Largo", "St. Petersburg", "Tampa", "Brandon",
  "Riverview", "Dunedin", "Tarpon Springs", "Safety Harbor",
  "Palm Harbor", "Pinellas Park", "Seminole", "Hillsborough County",
  "Pinellas County", "Tampa Bay Area",
];

const FAQS = [
  { question: "What is included in a residential lease cleaning?", answer: "Our move-out and move-in lease cleanings include kitchen deep cleaning (appliances, cabinets, counters), bathroom sanitization, floor cleaning, window and blind wiping, wall wipe-down, baseboard cleaning, and all common areas." },
  { question: "Will this help me get my security deposit back?", answer: "Yes. Our cleaning is specifically calibrated to meet landlord inspection standards. Many of our clients successfully recover their full security deposit after our move-out cleaning service." },
  { question: "How long does a residential lease cleaning take?", answer: "A typical 1-2 bedroom apartment takes 3-5 hours. Larger homes may require a full day or multi-day service. We'll provide an accurate time estimate when you book." },
  { question: "Do you clean inside appliances?", answer: "Yes. Our service includes cleaning inside and outside the oven, refrigerator, dishwasher, and microwave as part of the kitchen cleaning." },
  { question: "Are your cleaning products safe for pets and children?", answer: "We offer eco-friendly cleaning options that are safe for pets and children. Let us know your preference when booking and we'll use appropriate products." },
  { question: "Do you offer same-day or emergency move-out cleaning?", answer: "We do our best to accommodate urgent move-out timelines. Call (727) 642-0201 and we'll do our best to schedule your cleaning as quickly as possible." },
  { question: "Are you insured?", answer: "Yes! Right Lane Handyman Services, LLC is fully licensed, insured, and bonded for residential cleaning operations." },
];

const REVIEWS = [
  { quote: "Got my full security deposit back after Right Lane did my move-out cleaning. The apartment was spotless. Highly recommend!", author: "Ashley B.", city: "Clearwater" },
  { quote: "They cleaned our 3-bedroom condo before our move-in. Completely transformed the space. Every surface was immaculate.", author: "Carlos M.", city: "Tampa" },
  { quote: "Move-out cleaning was done to perfection. My landlord was genuinely impressed and returned our full deposit.", author: "Kendra L.", city: "Largo" },
  { quote: "Professional team, great communication, and the results were beyond what I expected. Would use again for every move.", author: "James W.", city: "St. Petersburg" },
];

function ResidentialLeasesCleaningPage() {
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
      await addLead({ name: formData.name, email: formData.email, phone: formData.phone, address: fullAddress, projectType: "Residential Leases Cleaning", description: formData.details, contactTime: "Anytime" });
      await addWebEmail({ name: formData.name, email: formData.email, phone: formData.phone, service: "Residential Leases Cleaning", message: `${formData.details}\n\nAddress: ${fullAddress}`, source: "residential_leases_cleaning_page" });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting residential lease cleaning request:", err);
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">🏡 Move-In & Move-Out Cleaning</span>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">Residential Leases Cleaning</h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium uppercase tracking-widest">Apartments, Condos & Houses – Tampa Bay Area</p>
            <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-3xl">Moving in or out? Right Lane Handyman Services, LLC provides professional residential lease cleaning for apartments, condominiums, townhouses, and single-family homes across the Tampa Bay Area. From studio apartments to large family homes, we clean to lease-standard quality so you can move confidently and recover your deposit.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 items-center opacity-90">
              <img src={bbbBadge} alt="BBB" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={homeadvisorBadge} alt="HomeAdvisor" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={yelpBadge} alt="Yelp" className="h-9 sm:h-10 w-auto object-contain filter drop-shadow-md" />
            </div>
            <a href="#estimate-form" className="mt-8 rounded-full bg-copper hover:bg-copper-deep px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]">Get Free Estimate</a>
          </motion.div>
        </section>
      </div>

      {/* WHY CHOOSE */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Our Advantage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Why Choose Right Lane for Residential Lease Cleaning?</h2>
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
              <img src={imgWork} alt="Residential lease cleaning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-neutral-900 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Deposit-Recovery Cleaning
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
                Move-In & Move-Out Ready — Every Time
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                Whether you are moving into your dream home or leaving your old apartment for the last time, our residential lease cleaning service delivers a spotless, lease-compliant finish — helping you get your full security deposit back.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: "25+", label: "Years Experience" },
                  { stat: "100%", label: "Deposit-Ready" },
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
                <img src={img} alt={`Residential cleaning photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">What's Included</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Residential Lease Cleaning Services</h2>
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

      {/* PROPERTY TYPES */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Property Types</span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>We Clean Every Type of Residential Property</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {PROPERTY_TYPES.map((p, i) => (
              <motion.div key={p.type} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="bg-white/90 rounded-2xl border border-neutral-200/40 p-5 shadow-xs hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="flex items-start gap-3"><Check className="h-4 w-4 text-copper mt-0.5 shrink-0" /><div><p className="text-sm font-bold text-neutral-900">{p.type}</p><p className="text-xs text-neutral-500 mt-0.5">{p.desc}</p></div></div>
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
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Our Simple 4-Step Process</h2>
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
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Get Your Free Residential Cleaning Quote</h2>
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
                  <textarea name="details" value={formData.details} onChange={handleInputChange} rows={4} placeholder="Describe your property (type, size/bedrooms, move-in or move-out, specific areas of concern, etc.)..." className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 resize-none" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] text-white rounded-full py-4 text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"><Send className="h-4 w-4" />Send My Estimate Request</button>
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

      {/* CTA */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-neutral-950 border border-neutral-800 px-6 py-16 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready to Move In or Out with Confidence?</h2>
          <p className="text-sm text-neutral-400 font-light mb-8 max-w-xl mx-auto">Call Ronnie Lane today for a free, no-obligation residential lease cleaning estimate. Serving Clearwater, Tampa Bay Area, Hillsborough County, and Pinellas County.</p>
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
