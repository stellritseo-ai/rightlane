import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead } from "@/lib/leads-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import {
  Award,
  ShieldCheck,
  Building2,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Phone,
  Check,
  Sparkles,
  Wrench,
  Trash2,
  Droplets,
  ArrowRight,
  Send,
  Home,
  Hammer
} from "lucide-react";
import welBg from "@/assets/wel-bg.png";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/seo-schema";

export const Route = createFileRoute("/service-areas/tampa-fl")({
  head: () => ({
    meta: [
      { title: "Handyman in Tampa, FL | Top-Rated Home Repair | Right Lane Handyman" },
      {
        name: "description",
        content:
          "Professional handyman services in Tampa, FL. Expert home repairs, drywall patching, painting, carpentry, pressure washing & property maintenance. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Handyman Services in Tampa, FL | Right Lane Handyman" },
      {
        property: "og:description",
        content:
          "Trusted residential and commercial handyman services in Tampa, FL. Licensed, insured & bonded with 25+ years of craftsmanship. Free estimates.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.rightlanehandymanservicellc.com/service-areas/tampa-fl",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.rightlanehandymanservicellc.com/service-areas/tampa-fl",
      },
    ],
  }),
  component: TampaLocationPage,
});

const TAMPA_FAQS = [
  {
    question: "What handyman services do you offer in Tampa, FL?",
    answer:
      "We provide comprehensive home repairs and maintenance across Tampa, including drywall repair & texturing, interior & exterior painting, door adjustments & hardware installation, fixture repairs, light carpentry, pressure washing, post-construction cleanup, and junk hauling.",
  },
  {
    question: "Do you service both residential homes and commercial businesses in Tampa?",
    answer:
      "Yes. We serve historic homes in Seminole Heights & Hyde Park, luxury residences in South Tampa, suburban properties in Westchase & Tampa Palms, as well as retail stores, corporate offices, and property management rentals.",
  },
  {
    question: "Are Right Lane handyman technicians licensed and insured in Tampa, Florida?",
    answer:
      "Yes. Right Lane Handyman Services LLC is a fully licensed, insured, and bonded Florida contractor. We maintain comprehensive liability and workers' compensation coverage for every project.",
  },
  {
    question: "How do I get an estimate for a home repair project in Tampa?",
    answer:
      "Simply call Ronnie Lane at (727) 642-0201 or submit our fast online quote form. We provide straightforward, transparent pricing with no surprises.",
  },
];

const TAMPA_NEIGHBORHOODS = [
  "South Tampa",
  "Hyde Park",
  "Seminole Heights",
  "Westchase",
  "Carrollwood",
  "Tampa Palms",
  "Ybor City",
  "Davis Islands",
  "New Tampa",
  "Channelside",
];

function TampaLocationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    neighborhood: "South Tampa",
    service: "Property Maintenance & Handyman",
    message: "",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: "Tampa, FL", url: "/service-areas/tampa-fl" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Handyman Services in Tampa, FL",
    description:
      "Professional handyman, home repair, drywall, painting, and maintenance services for homeowners and businesses in Tampa, Florida.",
    serviceType: "Handyman & Home Repair Services",
    url: "/service-areas/tampa-fl",
    areaServedName: "Tampa, Florida",
  });

  const faqSchema = getFAQSchema(TAMPA_FAQS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "contact@rightlanehandymanservicellc.com",
      address: `Tampa, FL (${formData.neighborhood})`,
      projectType: formData.service,
      description: `[Tampa FL Form - ${formData.neighborhood}] ${formData.message}`,
      contactTime: "anytime",
      estimatedValue: 500,
    });
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="w-full pt-[5px] pb-[5px] px-[15px]">
        <section
          className="relative mx-auto max-w-[1400px] w-full rounded-[10px] bg-cover bg-center px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] overflow-hidden"
          style={{ backgroundImage: `url(${welBg})` }}
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-900/10 bg-white/80 backdrop-blur-md text-neutral-800 text-[11px] font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#ffa326]" />
              <span>Tampa, Florida Service Coverage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
              Handyman Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
                Tampa, FL
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
              Right Lane Handyman Services LLC delivers premier home repairs, drywall solutions, painting, pressure washing, and property maintenance throughout Tampa. Backed by 25+ years of licensed craftsmanship.
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
                <span>Request Tampa Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Tampa Neighborhoods */}
      <div className="w-full py-12 px-[15px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Citywide Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Serving All Tampa Neighborhoods
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              From waterfront estates to historic bungalows and modern townhomes across Tampa, FL.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TAMPA_NEIGHBORHOODS.map((n) => (
              <span
                key={n}
                className="px-4 py-2.5 rounded-xl bg-white border border-[#e1ded4] text-neutral-800 text-sm font-semibold shadow-xs hover:border-[#ffa326] transition-all"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Core Services for Tampa */}
      <div className="w-full py-14 px-[15px] bg-white border-y border-[#eae8e1]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Popular Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Top Handyman Solutions in Tampa
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Drywall & Wall Repairs</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Expert hole patching, crack repair, water stain cleanup, and flawless knockdown or orange peel texture matching.
                </p>
              </div>
              <Link to="/property-maintenance" className="text-xs font-bold text-[#cc7e14] hover:underline">
                View service details →
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Door & Trim Carpentry</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Interior & exterior door hanging, deadbolt adjustments, baseboard installation, crown molding, and weatherstripping.
                </p>
              </div>
              <Link to="/property-maintenance" className="text-xs font-bold text-[#cc7e14] hover:underline">
                View service details →
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Pressure Washing</h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Deep exterior cleaning for Tampa driveways, sidewalks, paver pool patios, fences, and stucco siding.
                </p>
              </div>
              <Link to="/pressure-washing" className="text-xs font-bold text-[#cc7e14] hover:underline">
                View service details →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="w-full py-14 px-[15px] bg-[#fbfaf7]">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Tampa Handyman Quotes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Need Reliable Home Repairs in Tampa?
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Let Right Lane Handyman Services take care of your to-do list. From small fixture repairs to major property cleanups, we guarantee exceptional results.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">Licensed, Insured & Bonded Florida Contractor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">25+ Years Experience & Upfront Honest Rates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">100% Satisfaction Guaranteed On Every Job</span>
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
                <h3 className="text-xl font-bold text-neutral-900">Estimate Request Sent!</h3>
                <p className="text-sm text-neutral-600 mt-2">
                  Thank you. Ronnie Lane will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Request Tampa Estimate</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Michael Johnson"
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
                      placeholder="(813) 000-0000"
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
                      placeholder="michael@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Tampa Neighborhood</label>
                    <select
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326] bg-white"
                    >
                      {TAMPA_NEIGHBORHOODS.map((nb) => (
                        <option key={nb} value={nb}>
                          {nb}
                        </option>
                      ))}
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
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Project Details</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what repairs or handyman work you need in Tampa..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Tampa Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="w-full py-14 px-[15px]">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Tampa Handyman FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {TAMPA_FAQS.map((faq, index) => {
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
