import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead } from "@/lib/leads-store";
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
  MapPin,
  CheckCircle2,
  ChevronDown,
  Phone,
  Mail as MailIcon,
  Check,
  Sparkles,
  Wrench,
  Trash2,
  Hammer,
  Droplets,
  ArrowRight,
  Send,
  Star
} from "lucide-react";
import welBg from "@/assets/wel-bg.png";
import imgCleaning from "@/assets/svc-cleaning.png";
import imgPressureWash from "@/assets/svc-pressure-wash.png";
import imgDemolition from "@/assets/svc-demolition.png";
import imgJunkRemoval from "@/assets/svc-junk-removal.png";
import imgMaintenance from "@/assets/why-choose-2.png";
import yelpBadge from "@/assets/yelp-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/seo-schema";

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: [
      { title: "Handyman Services in Tampa Bay, FL | Service Areas | Right Lane Handyman" },
      {
        name: "description",
        content:
          "Right Lane Handyman Services LLC provides trusted handyman, home repair & property maintenance across Tampa Bay, Hillsborough County & Pinellas County. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Handyman Services in Tampa Bay, FL | Right Lane Handyman" },
      {
        property: "og:description",
        content:
          "Serving Tampa, Clearwater, St. Petersburg, Brandon, Riverview & all surrounding communities with 25+ years of licensed handyman craftsmanship.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.rightlanehandymanservicellc.com/service-areas" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.rightlanehandymanservicellc.com/service-areas",
      },
    ],
  }),
  component: ServiceAreasHubPage,
});

const FAQS = [
  {
    question: "What areas of Tampa Bay does Right Lane Handyman Services cover?",
    answer:
      "We provide comprehensive handyman, home repair, property maintenance, demolition, pressure washing, and hauling services across both Hillsborough County and Pinellas County, Florida. This includes Tampa, Brandon, Riverview, Plant City, Temple Terrace, Clearwater, St. Petersburg, Largo, Palm Harbor, Tarpon Springs, Dunedin, and Pinellas Park.",
  },
  {
    question: "Are your handyman services in Tampa Bay licensed and insured?",
    answer:
      "Yes. Right Lane Handyman Services LLC is fully licensed, insured, and bonded in the State of Florida. We carry full general liability and workers' compensation coverage for your complete peace of mind.",
  },
  {
    question: "How do I request a handyman estimate in Tampa or Pinellas County?",
    answer:
      "You can request an upfront, transparent estimate by calling Ronnie Lane directly at (727) 642-0201 or by submitting our online quote request form. We respond promptly within 24 hours.",
  },
  {
    question: "Do you handle both residential and commercial handyman projects across Tampa Bay?",
    answer:
      "Yes, we serve single-family homeowners, condominiums, rental properties, retail stores, commercial offices, and industrial facilities throughout the entire Tampa Bay metropolitan area.",
  },
  {
    question: "What types of home repairs do you commonly handle in Florida homes?",
    answer:
      "We handle drywall repair, interior & exterior painting, door adjustments, tile repair, carpentry, fence tear-down, storm preparation, pressure washing, gutter cleanup, and general preventative property maintenance.",
  },
];

const COUNTIES = [
  {
    name: "Hillsborough County, FL",
    slug: "/service-areas/hillsborough-county-fl",
    desc: "Comprehensive handyman, home maintenance, and hauling services across Tampa, Brandon, Riverview, Plant City, and Temple Terrace.",
    cities: ["Tampa", "Brandon", "Riverview", "Plant City", "Temple Terrace", "Carrollwood", "Westchase"],
  },
  {
    name: "Pinellas County, FL",
    slug: "/service-areas/pinellas-county-fl",
    desc: "Trusted coastal and suburban home repairs, pressure washing, junk removal, and demolition in Clearwater, St. Pete, Largo, and Palm Harbor.",
    cities: ["Clearwater", "St. Petersburg", "Largo", "Palm Harbor", "Tarpon Springs", "Dunedin", "Pinellas Park"],
  },
];

const CITY_HUBS = [
  { name: "Tampa, FL", slug: "/service-areas/tampa-fl", desc: "Handyman, Drywall, Painting & Property Repairs" },
  { name: "Brandon, FL", slug: "/service-areas/brandon-fl", desc: "Residential Home Repairs & Maintenance" },
  { name: "Clearwater, FL", slug: "/service-areas/clearwater-fl", desc: "Local Handyman & Coastal Property Care" },
  { name: "St. Petersburg, FL", slug: "/service-areas/st-petersburg-fl", desc: "Home Remodeling, Repairs & Cleanup" },
  { name: "Palm Harbor, FL", slug: "/hauling-services-palm-harbor", desc: "Hauling & Handyman Debris Removal" },
  { name: "Tarpon Springs, FL", slug: "/debris-removal-tarpon-springs", desc: "Debris Removal & Property Cleanup" },
];

function ServiceAreasHubPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Tampa",
    service: "Property Maintenance & Handyman",
    message: "",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
  ]);

  const faqSchema = getFAQSchema(FAQS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "contact@rightlanehandymanservicellc.com",
      address: formData.location,
      projectType: formData.service,
      description: `[Service Areas Form - ${formData.location}] ${formData.message}`,
      contactTime: "anytime",
      estimatedValue: 500,
    });
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <SiteHeader />

      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <div className="w-full pt-[5px] pb-[5px] px-[15px]">
        <section
          className="relative mx-auto max-w-[1400px] w-full rounded-[10px] bg-cover bg-center px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] overflow-hidden"
          style={{ backgroundImage: `url(${welBg})` }}
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-900/10 bg-white/80 backdrop-blur-md text-neutral-800 text-[11px] font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#ffa326]" />
              <span>Tampa Bay Regional Service Areas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
              Professional Handyman Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
                Tampa Bay, FL
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
              Right Lane Handyman Services LLC delivers top-tier residential and commercial home repairs, property maintenance, demolition, pressure washing, and junk hauling across Hillsborough and Pinellas Counties.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:7276420201"
                className="inline-flex items-center gap-2 rounded-full bg-[#ffa326] hover:bg-[#cc7e14] px-7 py-3.5 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Ronnie: (727) 642-0201</span>
              </a>
              <Link
                to="/free-estimate"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 px-7 py-3.5 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Counties Served Grid */}
      <div className="w-full py-10 px-[15px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Primary County Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Serving Hillsborough & Pinellas Counties
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Explore our dedicated county hubs for localized handyman services and prompt scheduling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COUNTIES.map((county) => (
              <div
                key={county.name}
                className="bg-white rounded-2xl p-8 border border-[#e1ded4] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14]">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{county.name}</h3>
                    </div>
                    <span className="text-xs font-bold uppercase text-[#ffa326] bg-neutral-900 px-2.5 py-1 rounded-md">
                      Active Area
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">{county.desc}</p>

                  <div className="mb-6">
                    <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-2">
                      Communities Served:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {county.cities.map((city) => (
                        <span
                          key={city}
                          className="text-xs px-2.5 py-1 rounded-md bg-[#f4f3ef] text-neutral-700 font-medium"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to={county.slug}
                  className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-[#ffa326]/10 hover:bg-[#ffa326] text-neutral-900 hover:text-white font-bold text-sm transition-all duration-200"
                >
                  <span>View {county.name} Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Cities Grid */}
      <div className="w-full py-10 px-[15px] bg-white border-y border-[#eae8e1]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              City Landing Pages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Handyman Services by City
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Select your city below for specialized home repair and maintenance solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITY_HUBS.map((city) => (
              <Link
                key={city.name}
                to={city.slug}
                className="group p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4] hover:border-[#ffa326] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-4 h-4 text-[#ffa326] group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#cc7e14] transition-colors">
                      {city.name}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">{city.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#cc7e14] group-hover:translate-x-1 transition-transform">
                  <span>Explore City Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Handyman Services Overview */}
      <div className="w-full py-14 px-[15px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Complete Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Comprehensive Handyman & Home Repair Services
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Every project is backed by 25+ years of craftsmanship, owner-led oversight, and upfront pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#e1ded4] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Property Maintenance</h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Drywall patching, door alignment, painting, trim carpentry, and seasonal home repairs.
              </p>
              <Link to="/property-maintenance" className="text-xs font-bold text-[#cc7e14] hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e1ded4] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Post Construction Cleaning</h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Spotless move-in detailing, paint overspray removal, window glass polishing, and fine dust removal.
              </p>
              <Link to="/post-construction-cleaning" className="text-xs font-bold text-[#cc7e14] hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e1ded4] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Pressure Washing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Driveway, patio, siding, and deck cleaning removing algae, mildew, and grime for instant curb appeal.
              </p>
              <Link to="/pressure-washing" className="text-xs font-bold text-[#cc7e14] hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e1ded4] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Junk Removal & Hauling</h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Full-service property cleanouts, furniture & appliance hauling, and construction debris clearing.
              </p>
              <Link to="/junk-removal" className="text-xs font-bold text-[#cc7e14] hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form & Trust Signals Section */}
      <div className="w-full py-14 px-[15px] bg-[#fbfaf7] border-t border-[#eae8e1]">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 mt-3 leading-tight">
              Request Handyman Service in Tampa Bay
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Fill out the form to describe your project. Ronnie Lane and our experienced crew will contact you promptly with clear options and upfront pricing.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-neutral-800">
                  25+ Years Experience in Hillsborough & Pinellas Counties
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-neutral-800">
                  Licensed, Insured & Bonded Florida Contractor
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-neutral-800">
                  Upfront Pricing with 100% Satisfaction Guarantee
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <img src={bbbBadge} alt="BBB Accredited" className="h-10 w-auto object-contain" />
              <img src={yelpBadge} alt="Yelp reviews" className="h-10 w-auto object-contain" />
              <img src={homeadvisorBadge} alt="HomeAdvisor approved" className="h-10 w-auto object-contain" />
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#e1ded4] shadow-md">
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Thank You!</h3>
                <p className="text-sm text-neutral-600 mt-2">
                  Your request has been received. Ronnie will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Request an Estimate</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(727) 000-0000"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your City/Area</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326] bg-white"
                    >
                      <option value="Tampa">Tampa, FL</option>
                      <option value="Brandon">Brandon, FL</option>
                      <option value="Riverview">Riverview, FL</option>
                      <option value="Clearwater">Clearwater, FL</option>
                      <option value="St. Petersburg">St. Petersburg, FL</option>
                      <option value="Largo">Largo, FL</option>
                      <option value="Palm Harbor">Palm Harbor, FL</option>
                      <option value="Other Tampa Bay">Other Tampa Bay Area</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326] bg-white"
                  >
                    <option value="Property Maintenance & Handyman">Property Maintenance & Handyman Repairs</option>
                    <option value="Drywall & Painting">Drywall Repair & Painting</option>
                    <option value="Post Construction Cleaning">Post Construction Cleaning</option>
                    <option value="Pressure Washing">Pressure Washing</option>
                    <option value="Demolition">Light Demolition</option>
                    <option value="Junk Removal & Hauling">Junk Removal & Hauling</option>
                    <option value="Fence Removal">Fence Removal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Project Details</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the repairs or maintenance work you need..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Estimate Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-14 px-[15px]">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Frequently Asked Questions About Tampa Bay Handyman Services
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all ${
                    isOpen ? "border-[#ffa326] bg-white shadow-sm" : "border-neutral-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#ffa326] shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
