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

export const Route = createFileRoute("/service-areas/st-petersburg-fl")({
  head: () => ({
    meta: [
      { title: "Handyman in St. Petersburg, FL | Right Lane Handyman Services" },
      {
        name: "description",
        content:
          "Professional handyman services in St. Petersburg, FL. Quality drywall repair, painting, door fixing, pressure washing & property maintenance. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Handyman Services in St. Petersburg, FL | Right Lane Handyman" },
      {
        property: "og:description",
        content:
          "Trusted residential and commercial handyman repairs across St. Petersburg, FL. Licensed, insured & bonded with 25+ years experience.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.rightlanehandymanservicellc.com/service-areas/st-petersburg-fl",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.rightlanehandymanservicellc.com/service-areas/st-petersburg-fl",
      },
    ],
  }),
  component: StPetersburgLocationPage,
});

const ST_PETE_FAQS = [
  {
    question: "What handyman services do you provide in St. Petersburg, FL?",
    answer:
      "We provide home repairs, drywall patching, interior & exterior painting, door adjustments, custom trim carpentry, pressure washing, fixture replacement, fence removal, and commercial property maintenance across St. Pete.",
  },
  {
    question: "Do you service historic homes in St. Petersburg neighborhoods like Old Northeast and Kenwood?",
    answer:
      "Yes! We have extensive experience with the architectural nuances of St. Petersburg's historic craftsman bungalows and vintage homes, providing careful, respectful repairs that preserve character.",
  },
  {
    question: "Are your handyman technicians licensed and insured for work in St. Petersburg?",
    answer:
      "Yes. Right Lane Handyman Services LLC is fully licensed, insured, and bonded in Florida, carrying comprehensive liability coverage on every project.",
  },
];

const ST_PETE_NEIGHBORHOODS = [
  "Old Northeast",
  "Historic Kenwood",
  "Snell Isle",
  "Downtown St. Pete",
  "Grand Central District",
  "Crescent Lake",
  "Jungle Prada",
  "Coquina Key",
  "Shore Acres",
  "Disston Heights",
];

function StPetersburgLocationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    neighborhood: "Old Northeast",
    service: "Property Maintenance & Handyman",
    message: "",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: "Pinellas County", url: "/service-areas/pinellas-county-fl" },
    { name: "St. Petersburg, FL", url: "/service-areas/st-petersburg-fl" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Handyman Services in St. Petersburg, FL",
    description:
      "Premier handyman and home repair services in St. Petersburg, Florida. Drywall, carpentry, painting, and maintenance.",
    serviceType: "Handyman & Home Repair Services",
    url: "/service-areas/st-petersburg-fl",
    areaServedName: "St. Petersburg, Florida",
  });

  const faqSchema = getFAQSchema(ST_PETE_FAQS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "contact@rightlanehandymanservicellc.com",
      address: `St. Petersburg, FL (${formData.neighborhood})`,
      projectType: formData.service,
      description: `[St Petersburg FL Form - ${formData.neighborhood}] ${formData.message}`,
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
              <span>St. Petersburg, FL Coverage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
              Handyman Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
                St. Petersburg, FL
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
              Expert handyman repairs, drywall patching, painting, custom carpentry, and property care across St. Petersburg, FL. 25+ years of licensed Florida trade experience.
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
                <span>Request St. Pete Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Neighborhoods */}
      <div className="w-full py-12 px-[15px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              St. Pete Communities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Serving All St. Petersburg Neighborhoods
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {ST_PETE_NEIGHBORHOODS.map((n) => (
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

      {/* Services in St. Pete */}
      <div className="w-full py-14 px-[15px] bg-white border-y border-[#eae8e1]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              St. Pete Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Popular Handyman Services in St. Petersburg
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#fbfaf7] p-6 rounded-2xl border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Drywall & Historic Wall Repair</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Plaster & drywall repairs, crack stabilization, and texture matching for classic and modern St. Pete interiors.
              </p>
            </div>

            <div className="bg-[#fbfaf7] p-6 rounded-2xl border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Pressure Washing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Remove coastal grime, mildew, and algae from brick pavers, stucco, driveways, and outdoor living areas.
              </p>
            </div>

            <div className="bg-[#fbfaf7] p-6 rounded-2xl border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Carpentry & Door Repairs</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Door adjustments, locks, trim molding, baseboards, and exterior wood rot repairs built to withstand moisture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="w-full py-14 px-[15px] bg-[#fbfaf7]">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              St. Pete Estimates
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Request Your Free St. Pete Handyman Quote
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Serving Downtown St. Pete, Snell Isle, Old Northeast, Kenwood, and all surrounding areas. Upfront pricing and guaranteed quality.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <img src={bbbBadge} alt="BBB Accredited" className="h-10 w-auto object-contain" />
              <img src={yelpBadge} alt="Yelp reviews" className="h-10 w-auto object-contain" />
              <img src={homeadvisorBadge} alt="HomeAdvisor approved" className="h-10 w-auto object-contain" />
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-[#e1ded4] shadow-md">
            {formSubmitted ? (
              <div className="text-center py-8">
                <Check className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-neutral-900">Request Sent!</h3>
                <p className="text-xs text-neutral-600 mt-1">Ronnie Lane will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white"
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
                      className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white"
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
                      placeholder="email@example.com"
                      className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">St. Pete Area</label>
                    <select
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white"
                    >
                      {ST_PETE_NEIGHBORHOODS.map((nb) => (
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
                    className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white"
                  >
                    <option value="Property Maintenance & Handyman">Property Maintenance & Handyman</option>
                    <option value="Drywall & Painting">Drywall & Painting</option>
                    <option value="Pressure Washing">Pressure Washing</option>
                    <option value="Junk Removal & Hauling">Junk Removal & Hauling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Project Details</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your St. Petersburg repair or property maintenance needs..."
                    className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#ffa326] hover:bg-[#cc7e14] text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Send St. Pete Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="w-full py-12 px-[15px]">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 text-center mb-6">
            St. Petersburg Handyman FAQs
          </h2>
          <div className="space-y-3">
            {ST_PETE_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-neutral-200">
                <h3 className="font-bold text-sm text-neutral-900 mb-1">{faq.question}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
