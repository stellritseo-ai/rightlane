import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Compass,
  Layers,
  Sparkles,
  Info,
  ChevronRight,
  CheckCircle2,
  Trees,
  Search,
  Wrench,
  Activity,
  ArrowRight
} from "lucide-react";

import imgPalms from "@/assets/svc-palm-trees.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/palm-trees")({
  head: () => ({
    meta: [
      { title: "Palm Tree Installation & Landscape Design San Antonio — JRM Construction" },
      { name: "description", content: "Transform your San Antonio property with cold-hardy palm trees and expert resort-style landscape design by Robert Thompson and JRM. Call (210) 429-5526." },
      { property: "og:title", content: "Palm Tree Installation & Landscape Design in San Antonio" },
      { property: "og:description", content: "Professional palm tree selection, strategic installation, and tropical-themed landscape design in Texas with 35+ years of expertise." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: PalmTreesPage,
});

function PalmTreesPage() {
  const { t } = useTranslation();

  const servicesPillars = [
    {
      title: "Expert Palm Selection & Sourcing",
      icon: Search,
      desc: "Selecting the right palm species is crucial for surviving South Texas microclimates.",
      items: [
        "Cold-Hardy Varieties: We source Windmill Palms, Mediterranean Fan Palms, Sago Palms, and Pindo Palms designed to withstand occasional Texas freezes.",
        "Specimen & Mature Palms: Hand-selected mature trees from trusted growers for immediate, grand visual impact.",
        "Container & Potting Solutions: Custom container plantings for patios, pools, and entryways where soil planting isn't viable."
      ]
    },
    {
      title: "Strategic Design & Installation",
      icon: Compass,
      desc: "Palms are structural, architectural assets. We ensure they are placed to elevate your overall property value.",
      items: [
        "Focal Point & Framing: Strategically planting palms to frame home entryways, highlight swimming pools, or anchor backyards.",
        "Resort-Style Themes: Creating layered softscapes with complementary lush tropical foliage, structural shrubs, and ornamental grasses.",
        "Hardscape Integration: Planting palms near patios, outdoor kitchens, and walkways to soften clean lines and add organic verticality."
      ]
    },
    {
      title: "Complete Care & Integration",
      icon: Wrench,
      desc: "Our involvement doesn't stop at planting. We design for long-term health and stability.",
      items: [
        "Site Prep & Soil Science: Excavating optimal holes and blending premium organic amendments for root development.",
        "Irrigation Coordination: Configuring dedicated drip lines and zones to supply precise watering without over-saturating roots.",
        "Establishment Guidance: Providing customized watering, fertilizing, and winterizing plans to ensure your palms thrive."
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "On-Site Consultation",
      desc: "Robert Thompson meets you on-site to evaluate sun exposure, wind patterns, drainage, and home architecture to recommend the perfect species."
    },
    {
      number: "02",
      title: "Custom Design & Sourcing",
      desc: "We design the positioning of each palm for optimal aesthetics and health, then source robust, acclimatized specimens from trusted growers."
    },
    {
      number: "03",
      title: "Precision Planting",
      desc: "Our experienced crew handles the excavation, soil preparation, alignment, backfilling, and temporary staking to ensure absolute stability."
    },
    {
      number: "04",
      title: "Irrigation & Finishing",
      desc: "We integrate the palms with your drip systems, add premium mulch beds, and ensure the surrounding landscaping looks mature and natural from day one."
    }
  ];

  const whyChooseUs = [
    {
      title: "Horticultural & Construction Expertise",
      desc: "With 35 years of experience, we understand how to structurally plant heavy trees without disrupting utilities, walkways, or foundation structures."
    },
    {
      title: "Honest, Climate-First Advice",
      desc: "We won't sell you a species that cannot survive Texas freezes. We recommend beautiful, cold-hardy varieties suited for San Antonio winters."
    },
    {
      title: "Holistic Landscape Integration",
      desc: "We view palms as critical architectural elements, designing surrounding softscapes, hardscapes, and night lighting to showcase them beautifully."
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Total protection for you and your property. We handle necessary permits, complex site access, and heavy equipment with absolute safety."
    },
    {
      title: "Focus on Root & Tree Longevity",
      desc: "Our precise planting depth, customized soil mixtures, and irrigation planning prevent common palm killers like root rot, settling, and wind instability."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center px-6 py-16">
          {/* Zooming Background Image */}
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgPalms})` }}
          />

          {/* Forest Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Landscape Masterpieces
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Palm Tree Installation & Landscape Design
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Bring Coastal Elegance & Tropical Ambiance to Your Texas Landscape
            </p>
          </motion.div>

          {/* Floating scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <span className="text-[9px] font-bold text-white uppercase tracking-widest select-none">Scroll Down</span>
            <div className="w-[1.5px] h-10 bg-white/20 relative rounded-full overflow-hidden">
              <motion.div
                animate={{
                  y: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-full h-1/3 bg-[#a5b89d] rounded-full"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── EDITORIAL STORY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                Resort Living at Home
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Create a Texas Oasis with Majestic Palms
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#3d5636] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Create an instant oasis of relaxation and resort-style elegance with professionally installed palm trees. At JRM Construction Landscaping Design, we specialize in integrating majestic palm tree installations into cohesive landscape designs that thrive in the San Antonio climate.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                With over 35 years of horticultural and construction expertise, owner Robert Thompson knows that successful palm cultivation in Texas is about more than just planting—it's about expert selection, strategic placement, and holistic design that complements your home's architecture and your outdoor living spaces.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                A palm tree is a statement of style and a long-term investment in your property's curb appeal. As a fully licensed, insured, and bonded contractor, we ensure every palm is selected for hardiness, installed with precision, and cared for as part of your complete landscape vision.
              </p>
            </motion.div>

            {/* Right Visual Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[440px] mx-auto flex items-center justify-center py-6"
            >
              {/* Offset frame behind image */}
              <div className="absolute top-2 left-2 right-[-4px] bottom-[-4px] sm:right-[-8px] sm:bottom-[-8px] border-2 border-[#577a4c]/20 rounded-2xl z-0 select-none pointer-events-none" />

              <img
                src={imgPalms}
                alt="Majestic installed palm tree landscape project"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/5]"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#3d5636]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years of Expertise</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── SERVICE PILLARS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Comprehensive Palm Tree & Design Services
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              From tropical focal points to complete thematic transformations, we provide full-service palm solutions for residential and commercial properties.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-8 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:border-[#577a4c]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-wide capitalize">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-500 font-light mb-6 leading-relaxed">
                      {pillar.desc}
                    </p>
                    <ul className="space-y-3.5">
                      {pillar.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3 items-start text-xs text-neutral-700 font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#3d5636] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── THE JRM PROCESS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Step By Step
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The JRM Palm Tree Process
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Crafting premium resort landscapes requires careful steps, precision tools, and horticulture oversight.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white rounded-xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#577a4c]/20 block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-[15px] font-bold text-neutral-900 tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE US SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-5"
            >
              <span className="inline-flex items-center bg-[#2d3f26] border border-[#23321e]/30 text-white rounded-full px-5 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm">
                The JRM Advantage
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose JRM for Your Palm Trees?
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Palm trees are a beautiful investment, but planting them in the South Texas climate requires specialized knowledge. We combine 35 years of construction strength and softscape wisdom to ensure they look beautiful and stand strong for years.
              </p>
            </motion.div>

            {/* Right Column Grid */}
            <div className="grid gap-6">
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
                  className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 select-none">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-neutral-900 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── READY TO TRANSFORM BOTTOM CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(28,20,13,0.96), rgba(28,20,13,0.98)), url(/src/assets/wel-bg.png)",
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Logo */}
            <img src={logo} alt="JRM" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Transform Your Yard into a Year-Round Retreat
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              A strategically placed palm tree adds height, texture, and a timeless sense of vacation to your own backyard. It’s an investment in creating a personal paradise for daily enjoyment and exceptional entertaining.
            </p>

            <p className="text-md font-bold text-[#a5b89d] mb-10 tracking-wide uppercase">
              Ready to explore the possibilities? Contact us for a free landscape design consultation.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-md font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                JRM Construction Landscaping Design
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-5 text-[15px] font-light">
                <a href="tel:2104295526" className="flex items-center gap-3.5 hover:text-[#a5b89d] transition-colors">
                  <Phone className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>(210) 429-5526</span>
                </a>
                <a href="mailto:robertsa210@icloud.com" className="flex items-center gap-3.5 hover:text-[#a5b89d] transition-colors">
                  <Mail className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>robertsa210@icloud.com</span>
                </a>
                <div className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Serving San Antonio, Boerne, New Braunfels, Canyon Lake & Surroundings</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Licensed · Insured · Bonded | 35+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:2104295526"
                className="rounded-full bg-[#577a4c] hover:bg-[#4d6c43] px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call Robert Now
              </a>
              <Link
                to="/lets-talk"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
