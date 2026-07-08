import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Building,
  UserCheck,
  Hammer,
  Sparkles,
  Info,
  Facebook,
  Instagram,
  ChevronRight,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import contactHero from "@/assets/stats-cleanup.png";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us - Right Lane Handyman Services, LLC | Clearwater, FL" },
      { name: "description", content: "Contact Ronnie and the Right Lane team today for a free, no-obligation estimate. Servicing Clearwater, Largo, St. Petersburg & all Pinellas County. 24/7 emergency storm cleanup." },
      { property: "og:title", content: "Contact Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "Get in touch for professional remodeling, pressure washing, junk removal, and handyman solutions in Pinellas County. Call (727) 642-0201." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: ContactUsPage,
});

interface FAQItem {
  question: string;
  answer: string;
}

function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "FL",
    zip: "",
    service: "",
    details: "",
    contactMethod: "Phone Call",
    contactTime: "Morning (8 AM – 12 PM)"
  });

  const servicesList = [
    "Post Construction Cleaning",
    "Pressure Washing",
    "Demolition",
    "Junk Removal & Hauling",
    "Landscaping",
    "Property Maintenance",
    "Waste & Debris Removal",
    "Handyman Services",
    "Remodeling",
    "Emergency Cleanup",
    "Fence Removal",
    "Window Cleaning & Removal",
    "Bank Occupancy Licences",
    "Industrial Leases Cleaning Services",
    "Residential Leases (Apartments, Condos, Houses) Cleaning Service",
    "Cleaning Contracts",
    "Other"
  ];

  const serviceCities = [
    "Tampa Bay Area", "Hillsborough County", "Pinellas County",
    "Clearwater", "Largo", "St. Petersburg", "Dunedin",
    "Tarpon Springs", "Safety Harbor", "Palm Harbor", "Pinellas Park",
    "Seminole", "Belleair", "Belleair Beach", "Bay Pines",
    "Oldsmar", "Ozona", "Crystal Beach", "Indian Rocks Beach"
  ];

  const benefitsList = [
    { title: "25+ Years of Experience", text: "Every job is handled with skill and speed." },
    { title: "Licensed, Insured & Bonded", text: "Complete peace of mind for your property." },
    { title: "Residential, Commercial & Industrial", text: "We do it all." },
    { title: "24/7 Emergency Service", text: "Nights, weekends, and Sundays (emergency only)." },
    { title: "Upfront Pricing", text: "No surprises, no hidden fees." },
    { title: "Guaranteed Work", text: "100% satisfaction." },
    { title: "We Haul What Others Won't", text: "Heavy debris, mixed materials, and full-site cleanouts." },
    { title: "Locally Owned", text: "Clearwater, FL – We know these communities." }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the Tampa Bay Area, Hillsborough County, and Pinellas County, including Clearwater, Largo, St. Petersburg, Dunedin, Tarpon Springs, Safety Harbor, Palm Harbor, Pinellas Park, Seminole, and surrounding communities."
    },
    {
      question: "Are you licensed, insured, and bonded?",
      answer: "Yes! Right Lane Handyman Services, LLC is fully licensed, insured, and bonded for your protection and peace of mind."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Absolutely. We provide free, no-obligation estimates for all services. Contact us today to schedule yours."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we offer 24/7 emergency service for storm damage, debris removal, and urgent property cleanouts. Call (727) 642-0201 anytime."
    },
    {
      question: "What types of jobs do you handle?",
      answer: "We handle it all – from small handyman repairs and pressure washing to demolition, heavy junk removal, landscaping, post-construction cleaning, and full property maintenance. No job is too big or too small."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, and all major credit cards. Payment is due upon completion of the job unless otherwise arranged."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullAddress = `${formData.address1}${formData.address2 ? ", " + formData.address2 : ""}, ${formData.city}, ${formData.state} ${formData.zip}`;
    try {
      await addLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: fullAddress,
        projectType: formData.service,
        description: formData.details,
        contactTime: `${formData.contactMethod} | ${formData.contactTime}`
      });
      
      await addWebEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: `${formData.details} (Address: ${fullAddress}, Preferred Contact Method: ${formData.contactMethod}, Best Time to Contact: ${formData.contactTime})`,
        source: "contact_us_page"
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting lead:", error);
    }
  };

  const toggleFAQ = (idx: number) => {
    setExpandedFAQ(expandedFAQ === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── HERO BANNER ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[360px] md:min-h-[440px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.05, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/92 via-[#1c140d]/78 to-[#1c140d]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Contact Us
            </span>
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-md">
              Get in Touch with Right Lane
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
              Ready to tackle your next project? Whether you need a quick repair, a major demolition, heavy junk removal, or a complete property cleanout, we're here to help. Contact Ronnie and the Right Lane team today.
            </p>
          </motion.div>
        </section>
      </div>

      {/* ── MAIN CONTENT (SPLIT INFO & FORM) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-4 py-16 sm:px-8 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Contact Information */}
            <div className="space-y-10 text-left">
              
              {/* Card 1: Call/Text & Hours */}
              <div className="bg-white border border-neutral-200/50 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14] shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-md font-extrabold text-neutral-900 tracking-wide">Call or Text</h2>
                    <a href="tel:7276420201" className="text-sm font-bold text-[#cc7e14] hover:underline">
                      (727) 642-0201
                    </a>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-neutral-700">
                  <h3 className="font-extrabold text-neutral-850 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-neutral-400" /> Hours of Operation
                  </h3>
                  <div className="grid grid-cols-[100px_1fr] gap-y-2 font-light">
                    <span className="font-medium text-neutral-900">Mon – Fri:</span>
                    <span>7:00 AM – 7:00 PM</span>
                    <span className="font-medium text-neutral-900">Saturday:</span>
                    <span>8:00 AM – 5:00 PM</span>
                    <span className="font-medium text-neutral-900">Sunday:</span>
                    <span className="font-semibold text-red-650">Emergency Service Only</span>
                  </div>
                  
                  <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 text-xs leading-relaxed font-light text-neutral-600 mt-2">
                    <span className="font-bold text-red-700 block mb-1">24/7 Emergency Support</span>
                    We offer 24/7 Emergency Service for storm damage, debris removal, and urgent property cleanouts. If you have an emergency, call us anytime – nights, weekends, and holidays included.
                  </div>
                </div>
              </div>

              {/* Card 2: Email & Address */}
              <div className="bg-white border border-neutral-200/50 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14] shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-md font-extrabold text-neutral-900 tracking-wide">Email Us</h2>
                    <a href="mailto:rightlanehandymanservice@yahoo.com" className="text-sm font-semibold text-[#cc7e14] hover:underline break-all">
                      rightlanehandymanservice@yahoo.com
                    </a>
                  </div>
                </div>
                
                <p className="text-xs text-neutral-500 font-light mt-1">
                  We typically respond within 24 hours. For faster service, please call us directly.
                </p>

                <div className="flex items-start gap-3.5 border-t border-neutral-100 pt-5 text-sm text-neutral-700 font-light">
                  <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-extrabold text-neutral-850 mb-1">Service Area & Location</h3>
                    <p className="text-neutral-950 font-semibold mb-2">Right Lane Handyman Services, LLC</p>
                    <p className="text-neutral-500 text-xs">Clearwater, FL 33756</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Service Areas */}
              <div className="bg-white border border-neutral-200/50 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="text-sm font-extrabold text-neutral-900 uppercase tracking-widest">
                  Proudly Serving the Tampa Bay Area & Surrounding Counties
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {serviceCities.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f4f3ef]/80 rounded-full border border-neutral-200/40 text-neutral-800 text-xs font-semibold"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#cc7e14] shrink-0" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Service Request Form */}
            <div className="bg-white border border-neutral-200/50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm text-left relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffa326]/60 to-transparent" />
              
              <div className="mb-8">
                <h2 className="text-xl font-extrabold text-neutral-900 tracking-wide flex items-center gap-2">
                  Request a Free Estimate
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1.5">
                  Fill out the form below and we'll get back to you promptly with a free, no-obligation estimate for your project.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 capitalize">Thank You, {formData.name}!</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-sm">
                    Your request has been received. Ronnie or a team member will review your details and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "", phone: "", email: "", address1: "", address2: "",
                        city: "", state: "FL", zip: "", service: "", details: "",
                        contactMethod: "Phone Call", contactTime: "Morning (8 AM – 12 PM)"
                      });
                    }}
                    className="text-xs text-[#cc7e14] font-bold uppercase tracking-wider hover:underline pt-4 cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                  
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold text-neutral-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="font-semibold text-neutral-800">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(727) 555-0199"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-semibold text-neutral-800">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60"
                      />
                    </div>
                  </div>

                  {/* Address Line 1 */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address1" className="font-semibold text-neutral-800">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="address1"
                      name="address1"
                      value={formData.address1}
                      onChange={handleInputChange}
                      placeholder="Street Address, P.O. Box"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60"
                    />
                  </div>

                  {/* Address Line 2 */}
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="address2"
                      value={formData.address2}
                      onChange={handleInputChange}
                      placeholder="Apartment, suite, unit, building, floor, etc. (Optional)"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60"
                    />
                  </div>

                  {/* City, State, ZIP */}
                  <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-3">
                    <div className="flex flex-col gap-2">
                      <input
                        required
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <input
                        required
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60 text-center"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <input
                        required
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        placeholder="ZIP"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60"
                      />
                    </div>
                  </div>

                  {/* Select Service */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="font-semibold text-neutral-800">
                      Select Service <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60 appearance-none text-neutral-850"
                      >
                        <option value="" disabled>Select a Service</option>
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="details" className="font-semibold text-neutral-800">
                      Project Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Please describe your project or maintenance needs..."
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] outline-none transition-colors bg-[#fbfaf7]/60 resize-none"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="flex flex-col gap-2.5 pt-2">
                    <span className="font-semibold text-neutral-855">Preferred Contact Method</span>
                    <div className="flex flex-wrap gap-4 pt-0.5">
                      {["Phone Call", "Text Message", "Email"].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer select-none">
                          <input
                            type="radio"
                            name="contactMethod"
                            checked={formData.contactMethod === method}
                            onChange={() => handleRadioChange("contactMethod", method)}
                            className="w-4 h-4 accent-[#cc7e14] cursor-pointer"
                          />
                          <span className="text-neutral-700 font-light">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Best Time to Contact */}
                  <div className="flex flex-col gap-2.5 pt-2">
                    <span className="font-semibold text-neutral-855">Best Time to Contact</span>
                    <div className="flex flex-wrap gap-4 pt-0.5">
                      {[
                        "Morning (8 AM – 12 PM)",
                        "Afternoon (12 PM – 5 PM)",
                        "Evening (5 PM – 7 PM)"
                      ].map((time) => (
                        <label key={time} className="flex items-center gap-2 cursor-pointer select-none">
                          <input
                            type="radio"
                            name="contactTime"
                            checked={formData.contactTime === time}
                            onChange={() => handleRadioChange("contactTime", time)}
                            className="w-4 h-4 accent-[#cc7e14] cursor-pointer"
                          />
                          <span className="text-neutral-700 font-light">{time.split(" (")[0]}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#cc7e14] hover:bg-[#ffa326] py-3.5 text-white text-[13px] sm:text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg mt-4 cursor-pointer"
                  >
                    Submit Request
                  </button>

                </form>
              )}

            </div>

          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE RIGHT LANE (BENEFITS GRID) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Why Choose Right Lane Handyman Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefitsList.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl border border-neutral-200/50 p-6 flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffa326]/10 text-[#cc7e14] mb-4 border border-[#ffa326]/20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-wide mb-2">{benefit.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFAQ === idx;
              return (
                <div key={idx} className="bg-[#fcfbf8] border border-neutral-200/60 rounded-2xl overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-neutral-900 text-sm sm:text-base cursor-pointer hover:bg-neutral-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180 text-[#cc7e14]" : ""}`} />
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

      {/* ── CONNECT & VERIFIED PLATFORMS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-16 md:px-12 lg:px-16 text-center">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-6xl mx-auto">
            
            {/* Left: Connect With Us */}
            <div className="text-left space-y-6">
              <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider">
                Follow Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Connect With Us
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed font-light">
                Stay updated on our latest projects, remodeling updates, and seasonal home maintenance tips by following us on social media.
              </p>
              
              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="#"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:bg-[#3b5998] hover:text-white transition-all text-xs font-semibold"
                >
                  <Facebook className="w-4 h-4 shrink-0" />
                  Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:bg-[#e1306c] hover:text-white transition-all text-xs font-semibold"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:bg-[#ff1a1a] hover:text-white transition-all text-xs font-semibold"
                >
                  Yelp Reviews
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-neutral-200 bg-white hover:bg-[#cc7e14] hover:text-white transition-all text-xs font-semibold"
                >
                  HomeAdvisor
                </a>
              </div>
            </div>

            {/* Right: Verified Badges */}
            <div className="space-y-6 text-left">
              <h3 className="text-sm font-extrabold text-neutral-500 uppercase tracking-widest">
                Verified by Trusted Platforms
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <img src={bbbBadge} alt="BBB Accredited" className="h-[46px] w-auto object-contain filter brightness-95 hover:brightness-100 transition-all" />
                <img src={yelpBadge} alt="Yelp" className="h-[46px] w-auto object-contain filter brightness-95 hover:brightness-100 transition-all" />
                <img src={homeAdvisorBadge} alt="HomeAdvisor approved" className="h-[46px] w-auto object-contain filter brightness-95 hover:brightness-100 transition-all" />
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* ── EMERGENCY BANNER ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-red-50 border border-red-200/60 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 rounded-full text-red-700 text-xs font-extrabold uppercase tracking-wide">
              24/7 Emergency Support
            </span>
            <h3 className="text-lg font-bold text-neutral-900">Emergency? We're Here 24/7</h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-2xl leading-relaxed">
              Storm damage? Post-construction pileup? Unexpected property cleanout? We respond fast with trucks and crew. Call Mr. Ronnie Lane directly anytime.
            </p>
          </div>
          <a
            href="tel:7276420201"
            className="rounded-full bg-red-650 hover:bg-red-700 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-md whitespace-nowrap shrink-0"
          >
            Call (727) 642-0201
          </a>
        </section>
      </div>

      {/* ── BOTTOM CALL TO ACTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(28,20,13,0.96), rgba(28,20,13,0.98)), url(/src/assets/wel-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img src={logo} alt="Right Lane Logo" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Cross That Project Off Your List?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              Whether it's a garage full of junk, a property that needs pressure washing, or post-construction cleanup – we're here to help. Contact Ronnie Lane today for a free, no-obligation estimate. No hassle. Just honest, reliable service from a name you can trust.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-lg font-bold text-white mb-5 text-center sm:text-left tracking-wide font-sans">
                Right Lane Handyman Services, LLC
              </h3>

              <div className="grid sm:grid-cols-3 gap-5 text-[14px] font-light">
                <a href="tel:7276420201" className="flex items-center gap-2.5 hover:text-[#ffa326] transition-colors">
                  <Phone className="w-4 h-4 text-[#ffa326] shrink-0" />
                  <span>(727) 642-0201</span>
                </a>
                <a href="mailto:rightlanehandymanservice@yahoo.com" className="flex items-center gap-2.5 hover:text-[#ffa326] transition-colors">
                  <Mail className="w-4 h-4 text-[#ffa326] shrink-0" />
                  <span className="truncate">rightlanehandymanservice@yahoo.com</span>
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#ffa326] shrink-0" />
                  <span>Clearwater, FL 33756</span>
                </div>
              </div>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-2 select-none">
              Proudly Serving the Tampa Bay Area, Hillsborough County, and Pinellas County
            </p>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
