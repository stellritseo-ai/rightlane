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

export const Route = createFileRoute("/service-areas/pinellas-county-fl")({
  head: () => ({
    meta: [
      { title: "Handyman in Pinellas County, FL | Right Lane Handyman Services" },
      {
        name: "description",
        content:
          "Trusted handyman, home repair & property maintenance across Pinellas County, FL. Clearwater, St. Petersburg, Largo & Palm Harbor. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Handyman Services in Pinellas County, FL | Right Lane Handyman" },
      {
        property: "og:description",
        content:
          "Licensed, insured & bonded handyman solutions for coastal and residential homes across Pinellas County. 25+ years experience.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.rightlanehandymanservicellc.com/service-areas/pinellas-county-fl",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.rightlanehandymanservicellc.com/service-areas/pinellas-county-fl",
      },
    ],
  }),
  component: PinellasCountyPage,
});

const PINELLAS_FAQS = [
  {
    question: "What areas in Pinellas County does Right Lane Handyman serve?",
    answer:
      "We serve all municipalities and neighborhoods in Pinellas County, including Clearwater, St. Petersburg, Largo, Palm Harbor, Dunedin, Pinellas Park, Tarpon Springs, Safety Harbor, Seminole, and Oldsmar.",
  },
  {
    question: "How do you handle coastal corrosion and weather damage in Pinellas County homes?",
    answer:
      "We use corrosion-resistant hardware, exterior-grade sealants, marine-grade fasteners, and specialized Florida coatings to combat salt air, high humidity, and intense UV exposure.",
  },
  {
    question: "Do you offer emergency storm cleanup and hauling in Pinellas County?",
    answer:
      "Yes. Right Lane provides 24/7 rapid response for hurricane and storm cleanups, fence haul-away, roof tarping coordination, and fallen branch clearing across Pinellas County.",
  },
  {
    question: "How quickly can Ronnie Lane start a handyman project in Pinellas County?",
    answer:
      "Because our operational base is centrally located in Clearwater, FL, we often accommodate same-day or next-day consultations and rapid turnaround across all Pinellas communities.",
  },
];

const COMMUNITIES = [
  { name: "Clearwater", desc: "Our home base: comprehensive handyman, repairs & pressure washing", link: "/service-areas/clearwater-fl" },
  { name: "St. Petersburg", desc: "Historic home restoration, drywall, painting & fixture installation", link: "/service-areas/st-petersburg-fl" },
  { name: "Largo", desc: "Residential upkeep, door repairs, fencing & light demolition", link: "/service-areas/pinellas-county-fl" },
  { name: "Palm Harbor", desc: "Hauling, property maintenance & exterior surface restoration", link: "/hauling-services-palm-harbor" },
  { name: "Tarpon Springs", desc: "Storm debris removal, property cleanouts & carpentry", link: "/debris-removal-tarpon-springs" },
  { name: "Dunedin & Safety Harbor", desc: "Cottage and condo maintenance, drywall repair & painting", link: "/service-areas/pinellas-county-fl" },
];

function PinellasCountyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Clearwater",
    service: "Property Maintenance & Handyman",
    message: "",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: "Pinellas County, FL", url: "/service-areas/pinellas-county-fl" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Handyman Services in Pinellas County, FL",
    description:
      "Premier residential handyman, home repair, drywall, painting, pressure washing, and property maintenance in Pinellas County, Florida.",
    serviceType: "Handyman & Home Repair Services",
    url: "/service-areas/pinellas-county-fl",
    areaServedName: "Pinellas County, Florida",
  });

  const faqSchema = getFAQSchema(PINELLAS_FAQS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "contact@rightlanehandymanservicellc.com",
      address: `Pinellas County (${formData.city})`,
      projectType: formData.service,
      description: `[Pinellas County Form - ${formData.city}] ${formData.message}`,
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
              <span>Pinellas County Service Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
              Handyman Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
                Pinellas County, FL
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
              Based in Clearwater and serving every corner of Pinellas County. 25+ years of trusted home repairs, drywall patching, pressure washing, fence removal, and commercial property maintenance.
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
                <span>Request Pinellas Estimate</span>
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
              Pinellas Cities & Towns
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Serving All Pinellas County Communities
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              From North County (Palm Harbor, Tarpon) to South County (St. Pete, Gulfport), we are your local handyman team.
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

      {/* Coastal Repair Challenges */}
      <div className="w-full py-14 px-[15px] bg-white border-y border-[#eae8e1]">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Pinellas Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Pinellas County Coastal & Residential Specialties
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              We understand the environmental impact of Pinellas peninsula living and build repairs designed to last.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Exterior Hardware & Wood Care</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Salt air accelerates metal corrosion and wood rot. We replace rusted hinges, rotted fascia boards, and damaged door jambs with resilient materials.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Driveway & Deck Deep Washing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Restore stained travertine, concrete driveways, and composite decking. Eliminates slick algae and restores clean curb appeal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Full Property Cleanouts & Hauling</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                From condo turnovers to estate cleanouts and storm debris hauling, our trucks and crew handle the heavy lifting safely.
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
              Pinellas County Estimates
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Request Handyman Service in Pinellas County
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Serving Clearwater, St. Pete, Largo, and all Pinellas communities. Free quotes, transparent rates, and guaranteed workmanship.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">Clearwater Base with Fast Countywide Response</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">Licensed, Insured & Bonded in Florida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-800">25+ Years Local Reputation & 100% Guaranteed</span>
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
                <h3 className="text-xl font-bold text-neutral-900">Request Received!</h3>
                <p className="text-sm text-neutral-600 mt-2">
                  Thank you. Ronnie Lane will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Request Pinellas Estimate</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Robert Smith"
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
                      placeholder="robert@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">City / Community</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326] bg-white"
                    >
                      <option value="Clearwater">Clearwater</option>
                      <option value="St. Petersburg">St. Petersburg</option>
                      <option value="Largo">Largo</option>
                      <option value="Palm Harbor">Palm Harbor</option>
                      <option value="Tarpon Springs">Tarpon Springs</option>
                      <option value="Dunedin">Dunedin</option>
                      <option value="Pinellas Park">Pinellas Park</option>
                      <option value="Safety Harbor">Safety Harbor</option>
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
                    placeholder="Describe your home repair or project needs in Pinellas County..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:border-[#ffa326]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Pinellas Request</span>
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
              Pinellas County Handyman FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {PINELLAS_FAQS.map((faq, index) => {
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
