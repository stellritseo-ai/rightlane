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

export const Route = createFileRoute("/service-areas/brandon-fl")({
  head: () => ({
    meta: [
      { title: "Handyman in Brandon, FL | Top-Rated Home Repairs | Right Lane Handyman" },
      {
        name: "description",
        content:
          "Trusted handyman services in Brandon, FL. Quality drywall patching, painting, door repairs, pressure washing, fencing & property maintenance. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Handyman Services in Brandon, FL | Right Lane Handyman" },
      {
        property: "og:description",
        content:
          "Professional residential & commercial handyman repairs in Brandon & Valrico, FL. 25+ years experience, licensed, insured & bonded.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.rightlanehandymanservicellc.com/service-areas/brandon-fl",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.rightlanehandymanservicellc.com/service-areas/brandon-fl",
      },
    ],
  }),
  component: BrandonLocationPage,
});

const BRANDON_FAQS = [
  {
    question: "What handyman services do you provide for Brandon homeowners?",
    answer:
      "We provide residential home repairs including drywall repair & texture matching, door alignment, interior/exterior painting, fixture installation, pressure washing, fence tear-down, and routine property maintenance.",
  },
  {
    question: "Do you service surrounding communities near Brandon, like Valrico and Riverview?",
    answer:
      "Yes, we actively serve Brandon, Valrico, Bloomingdale, Riverview, FishHawk, and surrounding Hillsborough County communities.",
  },
  {
    question: "How quickly can you give an estimate for a home repair in Brandon, FL?",
    answer:
      "We respond to estimate requests within 24 hours. Call Ronnie Lane directly at (727) 642-0201 for prompt scheduling.",
  },
];

function BrandonLocationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Property Maintenance & Handyman",
    message: "",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: "Hillsborough County", url: "/service-areas/hillsborough-county-fl" },
    { name: "Brandon, FL", url: "/service-areas/brandon-fl" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Handyman Services in Brandon, FL",
    description:
      "Expert handyman repairs, property maintenance, drywall, and painting in Brandon, Florida.",
    serviceType: "Handyman & Home Repair Services",
    url: "/service-areas/brandon-fl",
    areaServedName: "Brandon, Florida",
  });

  const faqSchema = getFAQSchema(BRANDON_FAQS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "contact@rightlanehandymanservicellc.com",
      address: "Brandon, FL",
      projectType: formData.service,
      description: `[Brandon FL Form] ${formData.message}`,
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
              <span>Brandon & Eastern Hillsborough Coverage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
              Handyman Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
                Brandon, FL
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
              Trusted, prompt handyman repairs for Brandon, Valrico, and Bloomingdale homes. Quality workmanship, licensed protection, and 25+ years of trade experience.
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
                <span>Request Brandon Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Services for Brandon */}
      <div className="w-full py-14 px-[15px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Brandon Home Repairs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Reliable Home Maintenance for Brandon Families
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Drywall Patching & Repair</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Fix wall punctures, doorknob holes, settling cracks, and moisture spots with exact texture matching.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Pressure Washing & Surface Care</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clean Brandon driveways, sidewalks, and pool enclosures from stubborn Florida algae and grime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e1ded4]">
              <div className="w-10 h-10 rounded-xl bg-[#ffa326]/10 flex items-center justify-center text-[#cc7e14] mb-4">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Junk Removal & Hauling</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clean out garages, haul away yard debris, old appliances, and unwanted furniture with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="w-full py-14 px-[15px] bg-white border-t border-[#eae8e1]">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-3.5 py-1 rounded-full border border-[#ffa326]/20">
              Brandon Quotes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-3">
              Get Your Brandon Handyman Estimate
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              No project is too big or small. We deliver prompt, upfront quotes and guarantee complete customer satisfaction.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <img src={bbbBadge} alt="BBB Accredited" className="h-10 w-auto object-contain" />
              <img src={yelpBadge} alt="Yelp reviews" className="h-10 w-auto object-contain" />
              <img src={homeadvisorBadge} alt="HomeAdvisor approved" className="h-10 w-auto object-contain" />
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#fbfaf7] p-8 rounded-2xl border border-[#e1ded4] shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-8">
                <Check className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-neutral-900">Thank You!</h3>
                <p className="text-xs text-neutral-600 mt-1">Ronnie will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Name *</label>
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
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(813) 000-0000"
                      className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Service</label>
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
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your Brandon repair project..."
                    className="w-full px-4 py-2 text-sm rounded-xl border border-neutral-300 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#ffa326] hover:bg-[#cc7e14] text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Submit Estimate Request
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
            Brandon Handyman FAQs
          </h2>
          <div className="space-y-3">
            {BRANDON_FAQS.map((faq, idx) => (
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
