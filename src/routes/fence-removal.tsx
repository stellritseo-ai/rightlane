import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award, ShieldCheck, Building2, Clock, CircleDollarSign, ThumbsUp,
  Truck, MapPin, CheckCircle2, ChevronDown, Star, Send, User,
  Smartphone, Phone, Mail as MailIcon, Check, X, Hammer, Trash2, TreePine
} from "lucide-react";
import logo from "@/assets/logo.png";
import imgHero from "@/assets/svc-fence-removal.png";
import imgWork from "@/assets/svc-fence-removal.png";
import imgResult from "@/assets/svc-landscaping.png";
import yelpBadge from "@/assets/yelp-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/fence-removal")({
  head: () => ({
    meta: [
      { title: "Fence Removal - Right Lane Handyman Services, LLC | Clearwater, FL" },
      {
        name: "description",
        content:
          "Professional fence removal and haul-away in Clearwater, Hillsborough County, Pinellas County & Tampa Bay Area. Wood, vinyl, chain-link, and metal fencing. Licensed & insured. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Fence Removal Services - Right Lane Handyman" },
      { property: "og:description", content: "Safe, efficient removal of wood, vinyl, or chain-link fencing with full debris haul-away. 25+ years of experience, licensed and insured." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FenceRemovalPage,
});

const BENEFITS = [
  { icon: Award, title: "25+ Years of Experience", text: "Decades of fence removal and site cleanup expertise." },
  { icon: ShieldCheck, title: "Licensed, Insured & Bonded", text: "Complete peace of mind for your property." },
  { icon: Building2, title: "Residential, Commercial & Industrial", text: "Any fence type, any property size." },
  { icon: Clock, title: "24/7 Emergency Service", text: "Available for urgent removal needs." },
  { icon: CircleDollarSign, title: "Upfront Pricing", text: "No surprises, no hidden fees." },
  { icon: ThumbsUp, title: "Guaranteed Work", text: "100% satisfaction, guaranteed." },
  { icon: Truck, title: "Full Debris Haul-Away", text: "We remove every post, panel, and section." },
  { icon: MapPin, title: "Locally Owned", text: "Serving Tampa Bay, Hillsborough & Pinellas County." },
];

const CORE_SERVICES = [
  { icon: Hammer, title: "Wood Fence Removal", desc: "We carefully dismantle wooden fences of all styles — privacy, picket, split-rail, and board-on-board. Posts are extracted, panels stacked, and everything hauled away cleanly." },
  { icon: CheckCircle2, title: "Vinyl & PVC Fence Removal", desc: "Vinyl fencing is safely dismantled section by section. We handle all sizes and profiles, ensuring your yard is clear and ready for new installation or landscaping." },
  { icon: Truck, title: "Chain-Link Fence Removal", desc: "Chain-link fencing and posts are efficiently removed and recycled where possible. We take special care around neighboring properties and utility lines." },
  { icon: Building2, title: "Metal & Wrought Iron Removal", desc: "Heavy metal and ornamental iron fencing requires specialized equipment. Our team handles removal safely and hauls away all materials." },
  { icon: TreePine, title: "Post Extraction", desc: "Stubborn concrete-set posts are extracted using specialized tools to avoid lawn and hardscape damage. We fill post holes and leave your yard clean." },
  { icon: ThumbsUp, title: "Complete Site Cleanup", desc: "We don't leave debris behind. After removal, we perform a thorough site cleanup so your property is tidy and ready for whatever comes next." },
];

const PROCESS_STEPS = [
  { step: "Step 1", title: "Free On-Site Assessment", desc: "We visit your property, inspect the fence condition and footings, identify any utility conflicts, and provide a free, detailed estimate." },
  { step: "Step 2", title: "Custom Removal Plan", desc: "We develop a removal plan tailored to your fence type, yard layout, and timeline — minimizing disruption to your property." },
  { step: "Step 3", title: "Professional Removal", desc: "Our trained crew arrives on schedule and efficiently removes every section, post, and panel with the right equipment." },
  { step: "Step 4", title: "Cleanup & Final Walkthrough", desc: "We fill post holes, rake the area, and walk the site with you to ensure everything meets your expectations." },
];

const FENCE_TYPES = [
  { type: "Wood Privacy Fence", desc: "6-ft, 8-ft, and custom height" },
  { type: "Picket Fence", desc: "Residential and decorative styles" },
  { type: "Vinyl / PVC Fence", desc: "All panel profiles and colors" },
  { type: "Chain-Link Fence", desc: "Galvanized, coated, and barbed-wire" },
  { type: "Wrought Iron / Metal", desc: "Ornamental and industrial grades" },
  { type: "Split-Rail Fence", desc: "Rustic and farm-style fencing" },
  { type: "Electric / Agricultural Fence", desc: "Safe decommissioning and removal" },
];

const SERVICE_CITIES = [
  "Clearwater", "Largo", "St. Petersburg", "Tampa", "Brandon",
  "Riverview", "Dunedin", "Tarpon Springs", "Safety Harbor",
  "Palm Harbor", "Pinellas Park", "Seminole", "Hillsborough County",
  "Pinellas County", "Tampa Bay Area",
];

const FAQS = [
  { question: "What types of fences do you remove?", answer: "We remove all types of residential and commercial fencing including wood, vinyl/PVC, chain-link, wrought iron, split-rail, and agricultural electric fencing." },
  { question: "Do you remove the posts too?", answer: "Yes! Full post extraction is included in our service. We use specialized equipment to extract concrete-set posts without causing unnecessary lawn or hardscape damage." },
  { question: "What happens to the old fence materials?", answer: "We haul away all removed materials. Where possible, we recycle metal and other materials responsibly." },
  { question: "Do you serve both residential and commercial properties?", answer: "Absolutely. We handle fence removal for homeowners, landlords, property managers, contractors, and commercial businesses across the Tampa Bay Area." },
  { question: "Are you insured?", answer: "Yes! Right Lane Handyman Services, LLC is fully licensed, insured, and bonded for your protection and peace of mind." },
  { question: "Do you offer free estimates?", answer: "Yes, we provide free, no-obligation estimates for all fence removal projects. Contact us today to schedule yours." },
  { question: "How quickly can you start?", answer: "We respond quickly to all inquiries. For urgent needs, we offer 24/7 emergency service. Call (727) 642-0201 anytime." },
];

const REVIEWS = [
  { quote: "Right Lane removed our old chain-link fence quickly and cleanly. The yard was spotless when they left. Great team!", author: "Kevin B.", city: "Clearwater" },
  { quote: "They removed a massive wood privacy fence including concrete posts. Efficient, professional, and worth every penny.", author: "Sandra M.", city: "Largo" },
  { quote: "Impressed with how carefully they worked around our landscaping. Zero damage, 100% satisfied.", author: "Tom R.", city: "Tampa" },
  { quote: "Called them for an urgent fence removal before our new install. They came out the next morning and got it done.", author: "Maria L.", city: "Palm Harbor" },
];

function FenceRemovalPage() {
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
      await addLead({ name: formData.name, email: formData.email, phone: formData.phone, address: fullAddress, projectType: "Fence Removal", description: formData.details, contactTime: "Anytime" });
      await addWebEmail({ name: formData.name, email: formData.email, phone: formData.phone, service: "Fence Removal", message: `${formData.details}\n\nAddress: ${fullAddress}`, source: "fence_removal_page" });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting fence removal request:", err);
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
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }} className="relative z-20 max-w-4xl mx-auto flex flex-col items-center bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">🪚 Professional Fence Removal</span>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">Fence Removal Services</h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium uppercase tracking-widest">Clearwater, Tampa Bay Area, Hillsborough & Pinellas County</p>
            <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-3xl">Got an old fence that needs to go? Right Lane Handyman Services, LLC provides safe, efficient, and affordable fence removal for residential and commercial properties across Tampa Bay. We remove every type of fence — wood, vinyl, chain-link, wrought iron — and haul everything away. Posts extracted, yard cleaned. No mess left behind.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 items-center opacity-90">
              <img src={bbbBadge} alt="BBB Accredited" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={homeadvisorBadge} alt="HomeAdvisor Approved" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Why Choose Right Lane for Fence Removal?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }} className="bg-white hover:bg-neutral-50/50 rounded-2xl border border-[#eae8e1] p-6 text-left shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.02] transition-all duration-300 group">
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
            {/* Left: Large image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative h-[280px] lg:h-auto overflow-hidden"
            >
              <img src={imgWork} alt="Fence removal in progress" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-neutral-900 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Professional Crew On-Site
                </span>
              </div>
            </motion.div>
            {/* Right: Stats + highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-neutral-950 p-8 md:p-12 flex flex-col justify-center"
            >
              <span className="inline-flex items-center bg-copper/20 border border-copper/30 text-copper rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-6 w-fit">Our Work</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                Safe, Efficient Fence Removal — Every Time
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                From a single backyard fence to multi-acre commercial perimeters, our experienced team handles complete removal, post extraction, and full haul-away with zero mess left behind.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: "25+", label: "Years Experience" },
                  { stat: "100%", label: "Debris Hauled" },
                  { stat: "5★", label: "Average Rating" },
                ].map((item) => (
                  <div key={item.stat} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-extrabold text-copper">{item.stat}</p>
                    <p className="text-[11px] text-neutral-400 mt-1 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Bottom photo strip */}
          <div className="grid grid-cols-3 h-[160px] md:h-[220px]">
            {[imgHero, imgWork, imgResult].map((img, i) => (
              <div key={i} className="relative overflow-hidden group">
                <img src={img} alt={`Fence removal photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">Scope of Work</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Our Fence Removal Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {CORE_SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-[#fcfbf8] border border-neutral-200/50 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper/5 text-copper border border-copper/10 group-hover:bg-copper group-hover:text-white transition-all duration-300 mb-5"><s.icon className="h-5 w-5" /></div>
                <h3 className="text-sm font-extrabold text-neutral-900 mb-3">{s.title}</h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* FENCE TYPES */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Fence Types We Remove</span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Any Fence. Any Material.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {FENCE_TYPES.map((f, i) => (
              <motion.div key={f.type} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="bg-white/90 rounded-2xl border border-neutral-200/40 p-5 shadow-xs hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-copper mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-neutral-900">{f.type}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* OUR PROCESS */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">How It Works</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Our Simple 4-Step Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#fcfbf8] rounded-2xl border border-neutral-200/50 p-6 shadow-xs hover:shadow-md transition-all">
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
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">Service Coverage</span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Serving the Entire Tampa Bay Region</h2>
            <p className="mt-4 text-sm text-neutral-600 font-light">We serve Hillsborough County, Pinellas County, and the wider Tampa Bay Area.</p>
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
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Get Your Free Fence Removal Quote</h2>
            <p className="mt-3 text-sm text-neutral-500 font-light">Fill out the form below and we'll reach out within 24 hours with a free, no-obligation estimate.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-8 bg-[#f9f7f2] rounded-2xl border border-neutral-200">
                  <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5"><Check className="h-8 w-8 text-emerald-600" /></div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Request Received!</h3>
                  <p className="text-sm text-neutral-500 font-light">We'll contact you within 24 hours to schedule your free estimate. Call us anytime at <a href="tel:7276420201" className="text-copper font-bold">(727) 642-0201</a>.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative"><User className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input required name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name *" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 focus:ring-2 focus:ring-copper/10" /></div>
                    <div className="relative"><Smartphone className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input required name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number *" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 focus:ring-2 focus:ring-copper/10" /></div>
                  </div>
                  <div className="relative"><MailIcon className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 focus:ring-2 focus:ring-copper/10" /></div>
                  <div className="relative"><MapPin className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" /><input name="address" value={formData.address} onChange={handleInputChange} placeholder="Property Address" className="w-full pl-9 pr-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 focus:ring-2 focus:ring-copper/10" /></div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="col-span-1 sm:col-span-1 w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 focus:ring-2 focus:ring-copper/10" />
                    <input name="state" value={formData.state} onChange={handleInputChange} placeholder="State" className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 focus:ring-2 focus:ring-copper/10" />
                    <input name="zip" value={formData.zip} onChange={handleInputChange} placeholder="ZIP Code" className="col-span-2 sm:col-span-1 w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 focus:ring-2 focus:ring-copper/10" />
                  </div>
                  <textarea name="details" value={formData.details} onChange={handleInputChange} rows={4} placeholder="Describe your fence (type, length, any special considerations)..." className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl bg-neutral-50 focus:outline-none focus:border-copper/50 focus:ring-2 focus:ring-copper/10 resize-none" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] text-white rounded-full py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.02]"><Send className="h-4 w-4" />Send My Free Estimate Request</button>
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
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white rounded-2xl border border-neutral-200/50 overflow-hidden shadow-xs">
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
              </motion.div>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready to Remove Your Old Fence?</h2>
          <p className="text-sm text-neutral-400 font-light mb-8 max-w-xl mx-auto">Call Ronnie Lane today for a free, no-obligation fence removal estimate. Serving Clearwater, Tampa Bay Area, Hillsborough County, Pinellas County, and surrounding communities.</p>
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
