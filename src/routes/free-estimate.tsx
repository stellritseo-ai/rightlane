import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Building2,
  Clock,
  CircleDollarSign,
  ThumbsUp,
  Truck,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Star,
  Upload,
  Send,
  ExternalLink,
  User,
  Smartphone,
  Phone,
  Mail as MailIcon,
  MapPin as MapIcon,
  Check,
  X
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import heroImg from "@/assets/stats-cleanup.png";
import yelpBadge from "@/assets/yelp-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/free-estimate")({
  head: () => ({
    meta: [
      { title: "Free Estimate - Right Lane Handyman Services, LLC | Clearwater, FL" },
      {
        name: "description",
        content:
          "Request a free, no-obligation estimate from Right Lane Handyman Services, LLC. Serving Clearwater, Largo, St. Petersburg & all of Pinellas County. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Get Your Free Estimate - Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "Fill out our quick estimate form and Ronnie Lane will reach out within 24 hours with a clear, upfront quote." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FreeEstimatePage,
});

const SERVICES = [
  "Post Construction Cleaning",
  "Pressure Washing",
  "Demolition",
  "Junk Removal & Hauling",
  "Landscaping",
  "Property Maintenance",
  "Waste, Building Materials & Debris Removal",
  "Handyman Services (Repairs, Carpentry, etc.)",
  "Remodeling",
  "Emergency Cleanup",
  "Other (Please specify below)",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within the next week",
  "Within the next month",
  "Flexible – No rush",
];

const REFERRAL_OPTIONS = [
  "Google Search",
  "Facebook",
  "Yelp",
  "HomeAdvisor",
  "BBB",
  "Word of Mouth / Referral",
  "Yard Sign / Vehicle",
  "Other (Please specify)",
];

const CONTACT_METHODS = ["Phone Call", "Text Message", "Email"];
const CONTACT_TIMES = [
  "Morning (8 AM – 12 PM)",
  "Afternoon (12 PM – 5 PM)",
  "Evening (5 PM – 7 PM)",
];

const BENEFITS = [
  { icon: Award, title: "25+ Years of Experience", text: "Every job is handled with skill and speed." },
  { icon: ShieldCheck, title: "Licensed, Insured & Bonded", text: "Complete peace of mind for your property." },
  { icon: Building2, title: "Residential, Commercial & Industrial", text: "We do it all." },
  { icon: Clock, title: "24/7 Emergency Service", text: "Nights, weekends, and Sundays (emergency only)." },
  { icon: CircleDollarSign, title: "Upfront Pricing", text: "No surprises, no hidden fees." },
  { icon: ThumbsUp, title: "Guaranteed Work", text: "100% satisfaction." },
  { icon: Truck, title: "We Haul What Others Won't", text: "Heavy debris, mixed materials, and full-site cleanouts." },
  { icon: MapPin, title: "Locally Owned", text: "Clearwater, FL – We know these communities." },
];

const PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "We Review Your Request",
    desc: "Once you submit your request, our team will review your project details within 24 hours.",
  },
  {
    step: "Step 2",
    title: "We Contact You",
    desc: "We'll reach out via your preferred contact method to discuss your project in more detail and schedule a time to visit your property if needed.",
  },
  {
    step: "Step 3",
    title: "We Provide Your Estimate",
    desc: "You'll receive a clear, detailed, no-obligation estimate with upfront pricing – no surprises, no hidden fees.",
  },
  {
    step: "Step 4",
    title: "We Get to Work",
    desc: "Once you approve the estimate, we'll schedule your project and get started. We complete every step carefully, from your first call to our final inspection walkthrough.",
  },
];

const SERVICE_CITIES = [
  "Clearwater", "Largo", "St. Petersburg",
  "Dunedin", "Tarpon Springs", "Safety Harbor",
  "Palm Harbor", "Pinellas Park", "Seminole",
  "Belleair", "Belleair Beach", "Bay Pines",
  "Oldsmar", "Ozona", "Crystal Beach",
  "Indian Rocks Beach",
];

const FAQS = [
  {
    question: "Do you really offer free estimates?",
    answer:
      "Yes! We provide free, no-obligation estimates for all services. There's no cost and no pressure – just honest, reliable information to help you make an informed decision.",
  },
  {
    question: "How long does it take to get an estimate?",
    answer:
      "We typically respond within 24 hours. For urgent or emergency projects, we can provide estimates even faster – just call us directly at (727) 642-0201.",
  },
  {
    question: "What information do you need for an estimate?",
    answer:
      "The more details you can provide, the more accurate your estimate will be. Please include: Project type and scope, approximate size or quantity (e.g., square footage, number of rooms, load size), any photos or measurements, and your timeline.",
  },
  {
    question: "Are your estimates binding?",
    answer:
      "We provide accurate, detailed estimates based on the information you provide. If the scope of work changes, we'll discuss any adjustments with you before proceeding.",
  },
  {
    question: "Do you charge for travel?",
    answer:
      "No. We serve all of Pinellas County and do not charge travel fees within our service area.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, checks, and all major credit cards. Payment is due upon completion of the job unless otherwise arranged.",
  },
];

const REVIEWS = [
  { quote: "Ronnie was professional, on time, and left our backyard spotless. 5 stars!", author: "Rachel S.", city: "Tarpon Springs" },
  { quote: "Great prices and prompt service in Largo.", author: "Gary D.", city: "Largo" },
  { quote: "Very sturdy work and fair pricing. Will definitely hire Ronnie again.", author: "Nancy P.", city: "Pinellas Park" },
  {
    quote: "Outstanding service from start to finish. The crew was courteous, efficient, and clearly knew what they were doing.",
    author: "Sandra K.",
    city: "Safety Harbor",
  },
];

function FreeEstimatePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "FL",
    zip: "",
    details: "",
    timeline: "As soon as possible",
    referral: "",
    contactMethod: "Phone Call",
    contactTime: "Morning (8 AM – 12 PM)",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadio = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setUploadedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullAddress = `${formData.address1}${formData.address2 ? ", " + formData.address2 : ""}, ${formData.city}, ${formData.state} ${formData.zip}`;
    const servicesList = selectedServices.join(", ") || "Not specified";
    try {
      await addLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: fullAddress,
        projectType: servicesList,
        description: formData.details,
        contactTime: `${formData.contactMethod} | ${formData.contactTime}`,
      });
      await addWebEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: servicesList,
        message: `${formData.details}\n\nAddress: ${fullAddress}\nTimeline: ${formData.timeline}\nReferral: ${formData.referral}\nContact Method: ${formData.contactMethod}\nBest Time: ${formData.contactTime}`,
        source: "free_estimate_page",
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting estimate request:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── HERO ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[460px] md:min-h-[520px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/94 via-[#1c140d]/82 to-[#1c140d]/94 z-10" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center bg-black/35 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Free Estimate
            </span>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
              Get Your No-Obligation Quote Today
            </h1>
            <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
              Ready to cross that project off your list? Whether it's a garage full of junk, a property that needs pressure washing, post-construction cleanup, or a complete home renovation – we're here to help. Contact Ronnie Lane today for a free, no-obligation estimate. No hassle. Just honest, reliable service from a name you can trust.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 items-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={bbbBadge} alt="BBB Accredited Business" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={homeadvisorBadge} alt="HomeAdvisor Screened & Approved" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={yelpBadge} alt="Find us on Yelp" className="h-9 sm:h-10 w-auto object-contain filter drop-shadow-md" />
            </div>

            <a
              href="#estimate-form"
              className="mt-8 rounded-full bg-copper hover:bg-copper-deep px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]"
            >
              Get My Free Estimate
            </a>
          </motion.div>
        </section>
      </div>

      {/* ── WHY CHOOSE RIGHT LANE ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Why Choose Right Lane for Your Project?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="bg-white hover:bg-neutral-50/50 rounded-2xl border border-[#eae8e1] p-6 text-left shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper/5 text-copper mb-4 border border-copper/10 group-hover:bg-copper group-hover:text-white transition-all duration-300 shadow-xs">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 mb-1.5">{b.title}</h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── ESTIMATE FORM ── */}
      <div id="estimate-form" className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-4 py-16 sm:px-8 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
                Request Form
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Request Your Free Estimate
              </h2>
              <p className="mt-3 text-sm text-neutral-600 font-light">
                Fill out the form below and we'll get back to you promptly with a free, no-obligation estimate for your project.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-copper/60 to-transparent" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">Thank You, {formData.name}!</h3>
                  <p className="text-sm text-neutral-600 font-light max-w-sm leading-relaxed">
                    Your estimate request has been received. Ronnie or a team member will review your details and reach out within 24 hours via your preferred contact method.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4 justify-center">
                    <a
                      href="tel:7276420201"
                      className="rounded-full bg-copper hover:bg-copper-deep px-6 py-2.5 text-white text-sm font-bold uppercase tracking-wide transition-all shadow-md"
                    >
                      Call Us Now
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setSelectedServices([]);
                        setUploadedFile(null);
                        setFormData({
                          name: "", phone: "", email: "", address1: "", address2: "",
                          city: "", state: "FL", zip: "", details: "",
                          timeline: "As soon as possible", referral: "",
                          contactMethod: "Phone Call", contactTime: "Morning (8 AM – 12 PM)",
                        });
                      }}
                      className="text-xs text-copper font-bold uppercase tracking-wider hover:underline cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 text-sm">

                  {/* Section 1: Contact Info */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-copper uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-neutral-100">
                      <User className="w-4 h-4" /> 📋 Free Estimate Request Form
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { id: "name", label: "Full Name", required: true, type: "text", placeholder: "John Doe", icon: User },
                        { id: "phone", label: "Phone Number", required: true, type: "tel", placeholder: "(727) 642-0201", icon: Smartphone },
                        { id: "email", label: "Email Address", required: false, type: "email", placeholder: "john@example.com", icon: MailIcon },
                      ].map((field) => (
                        <div key={field.id} className="flex flex-col gap-1.5">
                          <label htmlFor={field.id} className="font-semibold text-neutral-800 text-xs">
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                              <field.icon className="h-4 w-4" />
                            </div>
                            <input
                              required={field.required}
                              type={field.type}
                              id={field.id}
                              name={field.id}
                              value={(formData as any)[field.id]}
                              onChange={handleInputChange}
                              placeholder={field.placeholder}
                              className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all bg-[#fbfaf7]/60 text-sm focus:bg-white"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 2: Property Address */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-copper uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-neutral-100">
                      <MapIcon className="w-4 h-4" /> Property Address
                    </h3>
                    <div className="space-y-3">
                      <label className="font-semibold text-neutral-800 text-xs block">
                        Address Details <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <MapIcon className="h-4 w-4" />
                        </div>
                        <input
                          required type="text" name="address1" value={formData.address1} onChange={handleInputChange}
                          placeholder="Street Address"
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all bg-[#fbfaf7]/60 text-sm focus:bg-white"
                        />
                      </div>
                      <input
                        type="text" name="address2" value={formData.address2} onChange={handleInputChange}
                        placeholder="Apartment, unit, suite, etc. (optional)"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all bg-[#fbfaf7]/60 text-sm focus:bg-white"
                      />
                      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-3">
                        {[
                          { name: "city", placeholder: "City", required: true },
                          { name: "state", placeholder: "State", required: true },
                          { name: "zip", placeholder: "ZIP", required: true },
                        ].map((f) => (
                          <input
                            key={f.name} required={f.required} type="text" name={f.name}
                            value={(formData as any)[f.name]} onChange={handleInputChange}
                            placeholder={f.placeholder}
                            className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all bg-[#fbfaf7]/60 text-sm focus:bg-white"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Select Services */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-copper uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-neutral-100">
                      <Award className="w-4 h-4" /> Select Service(s)
                    </h3>
                    <div className="space-y-3">
                      <span className="font-semibold text-neutral-800 text-xs block">
                        Select all that apply
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {SERVICES.map((svc) => {
                          const active = selectedServices.includes(svc);
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => toggleService(svc)}
                              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                                active
                                  ? "bg-copper border-copper text-white shadow-md scale-[1.02]"
                                  : "bg-white border-neutral-200 text-neutral-700 hover:border-copper hover:bg-copper/5"
                              }`}
                            >
                              <span className="flex items-center gap-1.5">
                                {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                {svc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-copper uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-neutral-100">
                      <CheckCircle2 className="w-4 h-4" /> Project Details
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[11px] text-neutral-400 font-light">
                        Please describe your project in as much detail as possible. The more information you provide, the more accurate your estimate will be.
                      </p>
                      <textarea
                        id="details" name="details" rows={5} value={formData.details} onChange={handleInputChange}
                        placeholder="e.g. We need the entire garage cleared out – old furniture, metal scrap, cardboard boxes, and some drywall debris. Approximately 500 sq ft space..."
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-colors bg-[#fbfaf7]/60 resize-none text-sm focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Section 5: Timeline & Referral Grid */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Project Timeline */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-copper uppercase tracking-wider pb-1 border-b border-neutral-100">
                        Project Timeline
                      </h3>
                      <div className="grid grid-cols-2 gap-2.5">
                        {TIMELINE_OPTIONS.map((t) => {
                          const active = formData.timeline === t;
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleRadio("timeline", t)}
                              className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                                active
                                  ? "bg-copper/10 border-copper text-copper font-semibold shadow-xs scale-[1.01]"
                                  : "bg-white border-neutral-200 text-neutral-600 hover:border-copper/40"
                              }`}
                            >
                              <span className="text-xs">{t}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* How Did You Hear About Us? */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-copper uppercase tracking-wider pb-1 border-b border-neutral-100">
                        How Did You Hear About Us?
                      </h3>
                      <div className="grid grid-cols-2 gap-2.5">
                        {REFERRAL_OPTIONS.map((r) => {
                          const active = formData.referral === r;
                          return (
                            <button
                              key={r}
                              type="button"
                              onClick={() => handleRadio("referral", r)}
                              className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                                active
                                  ? "bg-copper/10 border-copper text-copper font-semibold shadow-xs scale-[1.01]"
                                  : "bg-white border-neutral-200 text-neutral-600 hover:border-copper/40"
                              }`}
                            >
                              <span className="text-xs">{r}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Section 6: Contact Preference Grid */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Preferred Contact Method */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-copper uppercase tracking-wider pb-1 border-b border-neutral-100">
                        Preferred Contact Method
                      </h3>
                      <div className="grid grid-cols-3 gap-2.5">
                        {CONTACT_METHODS.map((m) => {
                          const active = formData.contactMethod === m;
                          return (
                            <button
                              key={m}
                              type="button"
                              onClick={() => handleRadio("contactMethod", m)}
                              className={`p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                                active
                                  ? "bg-copper/10 border-copper text-copper font-semibold shadow-xs scale-[1.01]"
                                  : "bg-white border-neutral-200 text-neutral-600 hover:border-copper/40"
                              }`}
                            >
                              <span className="text-xs">{m}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Best Time to Contact */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-copper uppercase tracking-wider pb-1 border-b border-neutral-100">
                        Best Time to Contact
                      </h3>
                      <div className="grid grid-cols-3 gap-2.5">
                        {CONTACT_TIMES.map((t) => {
                          const active = formData.contactTime === t;
                          const displayLabel = t.split(" (")[0];
                          const timeLabel = t.split(" (")[1]?.replace(")", "") || "";
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleRadio("contactTime", t)}
                              className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center gap-0.5 transition-all duration-200 cursor-pointer ${
                                active
                                  ? "bg-copper/10 border-copper text-copper font-semibold shadow-xs scale-[1.01]"
                                  : "bg-white border-neutral-200 text-neutral-600 hover:border-copper/40"
                              }`}
                            >
                              <span className="text-xs">{displayLabel}</span>
                              {timeLabel && <span className="text-[9px] opacity-75 font-normal block">{timeLabel}</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Section 7: Photo Upload */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-copper uppercase tracking-wider pb-1 border-b border-neutral-100">
                      Upload Photos (Optional)
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[11px] text-neutral-400 font-light">
                        If you have photos of the project area, please upload them. This helps us provide a more accurate estimate.
                      </p>
                      <label
                        htmlFor="photo-upload"
                        className="flex flex-col items-center justify-center gap-2 w-full h-28 rounded-xl border-2 border-dashed border-neutral-200 bg-[#fbfaf7]/60 cursor-pointer hover:border-copper/50 hover:bg-copper/5 transition-all duration-200"
                      >
                        <Upload className="w-6 h-6 text-neutral-400" />
                        {uploadedFile ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-copper">{uploadedFile.name}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                setUploadedFile(null);
                              }}
                              className="p-1 rounded-full hover:bg-neutral-100 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <span className="text-xs font-semibold text-neutral-700">Click to Upload Photos</span>
                            <span className="text-[10px] text-neutral-400">Accepted: JPG, PNG, PDF · Max 10MB</span>
                          </>
                        )}
                      </label>
                      <input
                        id="photo-upload" type="file" accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileChange} className="hidden"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-copper hover:bg-copper-deep py-4 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg mt-2 cursor-pointer hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request for Free Estimate
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* ── WHAT HAPPENS NEXT ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              What Happens Next?
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto mt-12">
            {/* Connection line on desktop */}
            <div className="hidden lg:block absolute top-[20px] left-[12%] right-[12%] h-[2px] bg-neutral-200/70 z-0" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {PROCESS_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="bg-[#fcfbf8] rounded-2xl border border-neutral-200/50 p-6 shadow-xs hover:shadow-md transition-shadow relative text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper text-white text-sm font-bold mb-4 shadow-sm border border-copper/20">
                    {i + 1}
                  </div>
                  <span className="text-[10px] font-bold text-copper uppercase tracking-wider block mb-1">{s.step}</span>
                  <h3 className="text-sm font-extrabold text-neutral-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── CALL US DIRECTLY ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-16 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-5">
              <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                Direct Line
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Or Call Us Directly
              </h2>
              <p className="text-sm text-neutral-700 font-light leading-relaxed">
                Prefer to speak with someone right away? Call Ronnie Lane directly at:
              </p>
              <a
                href="tel:7276420201"
                className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-extrabold text-copper hover:text-copper-deep transition-colors bg-white/80 px-6 py-3.5 rounded-2xl border border-neutral-200/40 shadow-xs hover:shadow-sm"
              >
                <Phone className="w-6 h-6 shrink-0 fill-current" />
                (727) 642-0201
              </a>
              <p className="text-xs text-neutral-600 font-light pt-4 border-t border-neutral-300/40 leading-relaxed">
                We offer <strong>24/7 Emergency Service</strong> for storm damage, debris removal, and urgent property cleanouts. Call anytime – nights, weekends, and holidays included.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-neutral-900 uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" /> Hours of Operation
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "Emergency Service Only (Call for availability)" },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                    <span className="font-semibold text-neutral-800 text-xs">{row.day}</span>
                    <span className={`text-xs font-light ${row.day.includes("Sunday") ? "text-red-600 font-semibold" : "text-neutral-600"}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── SERVICE AREAS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16 text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Coverage
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Service Areas
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-light">
              We proudly serve residential, commercial, and industrial clients across all of Pinellas County:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {SERVICE_CITIES.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f4f3ef]/80 rounded-full border border-neutral-200/50 text-neutral-800 text-xs font-semibold hover:border-copper/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                {city}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* ── FAQ ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = expandedFAQ === idx;
              return (
                <div key={idx} className="bg-white border border-neutral-200/60 rounded-2xl overflow-hidden shadow-xs hover:border-copper/20 transition-all duration-200">
                  <button
                    onClick={() => setExpandedFAQ(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-neutral-900 text-sm cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180 text-copper" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-neutral-100 bg-white"
                      >
                        <div className="p-5 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── CLIENT REVIEWS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Client Reviews
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto text-left">
            {REVIEWS.map((rev, i) => (
              <motion.div
                key={rev.author}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl border border-neutral-200/50 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-0.5 mb-4 text-[#ffa326]">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-xs text-neutral-700 italic leading-relaxed font-light mb-5">"{rev.quote}"</p>
                </div>
                <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-900">{rev.author}</span>
                  <span className="text-[9px] font-bold text-copper bg-copper/5 border border-copper/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {rev.city}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img src={logo} alt="Right Lane Handyman Services" className="h-14 w-auto object-contain mb-8 filter brightness-110" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-10 max-w-3xl">
              Don't let home repairs or project cleanups pile up. From drywall patching and custom carpentry to property maintenance and heavy debris hauling, our licensed, insured, and bonded crew is here to help get your property back in the right lane.
            </p>

            <span className="text-xs font-semibold text-copper uppercase tracking-wider mb-2 block">
              Contact Us Today For a Free Estimate
            </span>
            <p className="text-xs text-neutral-400 font-light mb-8">
              Right Lane Handyman Services, LLC · Clearwater, FL 33756 · Proudly Serving All of Pinellas County
            </p>

            {/* Quick Contact Table */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-widest text-center sm:text-left">Quick Contact</h3>
              <div className="divide-y divide-white/10 text-sm">
                {[
                  { label: "Phone", value: "(727) 642-0201", href: "tel:7276420201" },
                  { label: "Email", value: "rightlanehandymanservice@yahoo.com", href: "mailto:rightlanehandymanservice@yahoo.com" },
                  { label: "Address", value: "Clearwater, FL 33756", href: undefined },
                  { label: "Service Area", value: "All of Pinellas County", href: undefined },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3 gap-4">
                    <span className="text-neutral-400 font-semibold text-xs uppercase tracking-wide shrink-0">{row.label}</span>
                    {row.href ? (
                      <a href={row.href} className="text-white font-light hover:text-copper transition-colors text-right text-xs sm:text-sm truncate">
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-white font-light text-right text-xs sm:text-sm">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#estimate-form"
                className="rounded-full bg-copper hover:bg-copper-deep px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Submit Request for Free Estimate
              </a>
              <a
                href="tel:7276420201"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call (727) 642-0201
              </a>
            </div>

            <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-copper select-none italic font-serif">
              "Let us get your property back in the right lane."
            </p>
            <p className="mt-2 text-[10px] text-neutral-500 font-light">
              We look forward to serving you!
            </p>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
