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

export const Route = createFileRoute("/service-areas/hillsborough-county-fl")({
  head: () => ({
    meta: [
      { title: "Handyman in Hillsborough County, FL | Right Lane Handyman Services" },
      {
        name: "description",
        content:
          "Professional handyman, home repair & property maintenance in Hillsborough County, FL. Serving Tampa, Brandon, Riverview & Plant City. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Handyman Services in Hillsborough County, FL | Right Lane Handyman" },
      {
        property: "og:description",
        content:
          "Licensed, insured & bonded handyman solutions for homeowners and commercial properties across Hillsborough County. 25+ years experience.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.rightlanehandymanservicellc.com/service-areas/hillsborough-county-fl",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.rightlanehandymanservicellc.com/service-areas/hillsborough-county-fl",
      },
    ],
  }),
  component: HillsboroughCountyPage,
});

const HILLSBOROUGH_FAQS = [
  {
    question: "What communities in Hillsborough County do you serve?",
    answer:
      "We serve all major communities across Hillsborough County, including Tampa (South Tampa, Westchase, Carrollwood, Tampa Palms, Ybor), Brandon, Riverview, Plant City, Temple Terrace, Valrico, and Lutz.",
  },
  {
    question: "Do you offer emergency storm cleanup and repairs in Hillsborough County?",
    answer:
      "Yes. We provide rapid-response emergency storm cleanup, debris hauling, fence repair, and urgent property maintenance across Hillsborough County following severe Florida weather.",
  },
  {
    question: "What handyman services are most popular in Hillsborough County homes?",
    answer:
      "Our most requested services include drywall repair, interior & exterior painting, door adjustments, pressure washing of driveways & pool enclosures, fixture installation, and seasonal home maintenance.",
  },
  {
    question: "Are your technicians licensed and insured in Hillsborough County?",
    answer:
      "Yes. Right Lane Handyman Services LLC is fully licensed, insured, and bonded throughout the state of Florida, ensuring your home and investment are completely protected.",
  },
];

const COMMUNITIES = [
  { name: "Tampa", desc: "Urban, suburban, and historic home repairs & property care", link: "/service-areas/tampa-fl" },
  { name: "Brandon", desc: "Residential handyman, drywall, and fixture repairs", link: "/service-areas/brandon-fl" },
  { name: "Riverview", desc: "New development maintenance, painting & fence tear-down", link: "/service-areas/hillsborough-county-fl" },
  { name: "Plant City", desc: "Residential home repairs, pressure washing & hauling", link: "/service-areas/hillsborough-county-fl" },
  { name: "Temple Terrace", desc: "Handyman repairs, carpentry, and rental turnarounds", link: "/service-areas/hillsborough-county-fl" },
  { name: "Westchase & Carrollwood", desc: "High-end maintenance, drywall, and door installation", link: "/service-areas/tampa-fl" },
];

function HillsboroughCountyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Tampa",
    service: "Property Maintenance & Handyman",
    message: "",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: "Hillsborough County, FL", url: "/service-areas/hillsborough-county-fl" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Handyman Services in Hillsborough County, FL",
    description:
      "Professional residential handyman, home repair, drywall, painting, and property maintenance in Hillsborough County, Florida.",
    serviceType: "Handyman & Home Repair Services",
    url: "/service-areas/hillsborough-county-fl",
    areaServedName: "Hillsborough County, Florida",
  });

  const faqSchema = getFAQSchema(HILLSBOROUGH_FAQS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "contact@rightlanehandymanservicellc.com",
      address: `Hillsborough County (${formData.city})`,
      projectType: formData.service,
      description: `[Hillsborough County Form - ${formData.city}] ${formData.message}`,
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
              <span>Hillsborough County Service Coverage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
              Handyman Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
                Hillsborough County, FL
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
              From historic renovations in Tampa to family home repairs in Brandon and Riverview, Right Lane Handyman Services LLC brings 25+ years of licensed craftsmanship directly to your doorstep.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:7276420201"
                className="inline-flex items-center gap-2 rounded-full bg-[#ffa326] hover:bg-[#cc7e14] px-7 py-3.5 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call (727) 642-0201</span>
              </a>
              <Link
                to="/free-estimate"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 px-7 py-3.5 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <span>Request Hillsborough Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Communities Section */}
      <div className="w-full py-12 px-[15px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Local Communities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Hillsborough County Communities We Serve
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Prompt, reliable handyman response throughout Tampa, eastern Hillsborough, and northern suburbs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITIES.map((c) => (
              <Link
                key={c.name}
                to={c.link}
                className="bg-white p-6 rounded-2xl border border-[#e1ded4] shadow-xs hover:border-[#ffa326] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <MapPin className="w-4 h-4 text-[#ffa326] group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#cc7e14] transition-colors">
                      {c.name}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">{c.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#cc7e14] group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* County Specific Repair Challenges */}
      <div className="w-full py-14 px-[15px] bg-white border-y border-[#eae8e1]">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Tailored Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Common Hillsborough County Home Maintenance Challenges
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Florida's unique heat, humidity, and rainy season require specialized attention from seasoned tradesmen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Humidity & Drywall Settling</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Seasonal humidity shifts cause drywall cracks and joint tape separation. We deliver seamless tape, spackle, and texture matching.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Algae & Mildew Buildup</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Intense summer rains promote black mold and algae on driveways and pool decks. Our high-pressure washing restores safety and curb appeal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Storm Preparation & Cleanup</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Pre-season shutter anchoring, tree limb clearing, and post-storm fence replacement and heavy debris removal.
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
              Hillsborough County Estimates
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Need a Handyman in Hillsborough County?
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Contact Ronnie Lane today. We provide transparent, itemized quotes with no hidden charges and a 100% satisfaction guarantee.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">Prompt Scheduling Across Tampa & Brandon</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">Licensed, Insured & Bonded Florida Craftsmen</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">Residential, Commercial & Rental Properties</span>
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
                <h3 className="text-xl font-bold text-neutral-900">Request Sent!</h3>
                <p className="text-sm text-neutral-600 mt-2">
                  Thank you. Ronnie Lane will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Request Hillsborough Estimate</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
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
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">City / Town</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326] bg-white"
                    >
                      <option value="Tampa">Tampa</option>
                      <option value="Brandon">Brandon</option>
                      <option value="Riverview">Riverview</option>
                      <option value="Plant City">Plant City</option>
                      <option value="Temple Terrace">Temple Terrace</option>
                      <option value="Valrico">Valrico</option>
                      <option value="Lutz">Lutz</option>
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
                    placeholder="Tell us what needs fixing or maintaining in Hillsborough County..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Estimate Request</span>
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
              Hillsborough County Handyman FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {HILLSBOROUGH_FAQS.map((faq, index) => {
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
