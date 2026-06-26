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
  ChevronRight,
  CheckCircle2,
  Layers,
  Compass,
  Sparkles,
  Zap,
  Hammer,
  Droplets,
  Activity
} from "lucide-react";

import imgHardscapes from "@/assets/svc-hardscapes.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/hardscapes")({
  head: () => ({
    meta: [
      { title: "Custom Hardscape Design & Installation Clearwater — Right Lane Handyman Services, LLC" },
      { name: "description", content: "Lay the foundation for outdoor living. Flagstone patios, retaining walls, pavers, and custom outdoor kitchen bases in Clearwater, FL. 25+ Years experience. Call (727) 642-0201." },
      { property: "og:title", content: "Custom Hardscape Design & Installation in Clearwater" },
      { property: "og:description", content: "Flagstone patios, interlocking pavers, retaining walls, steps, and drainage solutions designed and built to last." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: HardscapesPage,
});

function HardscapesPage() {
  const { t } = useTranslation();

  const hardscapeServices = [
    {
      title: "Patios & Entertaining Spaces",
      icon: Layers,
      items: [
        "Flagstone & Natural Stone Patios: Hand-selected flagstones laid in organic, timeless mortar configurations that grow more beautiful with age.",
        "Paver Patios & Walkways: Interlocking concrete, brick, or premium travertine pavers for clean-lined, modern, and versatile designs.",
        "Covered Patio Foundations: Engineered, load-bearing concrete slabs and structural footings for pergolas, pavilions, and outdoor rooms."
      ]
    },
    {
      title: "Pathways & Structural Features",
      icon: Compass,
      items: [
        "Custom Garden Paths: Stepping stone walkways, slate steps, and crushed granite pathways designed to direct foot traffic elegantly.",
        "Retaining Walls & Terraces: Block, limestone, or concrete retaining walls designed to grade sloped yards, maximize flat yard spaces, and prevent soil erosion.",
        "Safe Transition Steps: Hand-carved stone steps or masonry staircases ensuring safe, beautiful access across different elevations."
      ]
    },
    {
      title: "Specialty & Drainage Installations",
      icon: Droplets,
      items: [
        "Kitchen & Fireplace Bases: Reinforced concrete pads to support heavy outdoor kitchens, fire pits, and stone chimneys.",
        "Premium Driveways: Interlocking paver driveways and elegant front courtyards designed to boost curb appeal and support heavy loads.",
        "Drainage Solutions: Integrated French drains, channel drains, and dry creek beds designed to carry water away from your structures."
      ]
    }
  ];

  const hardscapeProcess = [
    {
      number: "01",
      title: "Vision & Site Analysis",
      desc: "We start with a free, on-site consultation to analyze soil conditions, slope angles, drainage flow, and plan the layout."
    },
    {
      number: "02",
      title: "Design & Sourcing",
      desc: "Right Lane Handyman helps you select materials—from local Texas limestone to premium Belgard pavers—and provides a detailed design."
    },
    {
      number: "03",
      title: "Proposal & Permitting",
      desc: "You'll receive a detailed quote and timeline. We coordinate all permitting, HOA paperwork, and utility locates."
    },
    {
      number: "04",
      title: "Site Prep & Excavation",
      desc: "Our crew digs the site, grades for runoff, places, and compacts the gravel and sand base to ensure stability."
    },
    {
      number: "05",
      title: "Sealing & Inspection",
      desc: "After precision laying and leveling, we add polymeric sand, seal the stones (if requested), and perform a final inspection."
    }
  ];

  const whyChooseUs = [
    {
      title: "Artisan Meets Engineer",
      desc: "We combine creative, organic layout design with high construction standards. Beauty built on a foundation of structural stability."
    },
    {
      title: "Mastery of Masonry Materials",
      desc: "Over 25+ Years of experience working with concrete, flagstone, and brick in Clearwater's unique shifting clay soils."
    },
    {
      title: "Drainage-First Engineering",
      desc: "Water management is crucial. We grade every patio and walkway to shed water away from your home's foundation."
    },
    {
      title: "Seamless Softscape Harmony",
      desc: "As design-build experts, we construct hardscapes that frame softscapes, trees, lawns, and outdoor lighting beautifully."
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Contractor accountability, safety compliance, and financial protection for your major home improvement project."
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
            style={{ backgroundImage: `url(${imgHardscapes})` }}
          />

          {/* Forest Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/92 via-[#1c140d]/78 to-[#1c140d]/92 z-10" />

          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Structural Masonry & Paving
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Custom Hardscape Design & Installation
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Build the Foundation for Outdoor Living with 25+ Years of Master Craftsmanship
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
                className="absolute top-0 left-0 w-full h-1/3 bg-[#ffa326] rounded-full"
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
              <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                Architectural Backbone
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Lay the Groundwork for Your Outdoor Lifestyle
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#cc7e14] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Transform your outdoor space from ordinary to extraordinary with custom hardscapes designed for entertainment, relaxation, and lasting beauty. At Right Lane Handyman Services, LLC, we specialize in designing and building premium hardscape features that extend your living area and create seamless flow between your home and nature.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                With over 25+ Years of hands-on experience, the Right Lane team combines artistic vision with structural expertise to create patios, walkways, and outdoor rooms that are as durable as they are stunning.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                A well-executed hardscape is more than just pavement—it's the architectural backbone of your landscape. As a fully licensed, insured, and bonded contractor, we engineer every project for stability, drainage, and longevity, ensuring your investment withstands the Texas climate and enhances your property value for decades.
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
              <div className="absolute top-2 left-2 right-[-4px] bottom-[-4px] sm:right-[-8px] sm:bottom-[-8px] border-2 border-[#ffa326]/20 rounded-2xl z-0 select-none pointer-events-none" />

              <img
                src={imgHardscapes}
                alt="Premium flagstone outdoor patio hardscape by Right Lane"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/3]"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#cc7e14]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years Hardscape</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── CORE HARDSCAPE SERVICES GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Structural Specialties
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Hardscape Services
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Designing paths, entertaining zones, and base retaining structures using quality stonework.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hardscapeServices.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-8 shadow-sm hover:shadow-xl hover:border-[#ffa326]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#ffa326]/10 text-[#cc7e14] border border-[#ffa326]/20 flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-4">
                      {pillar.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3.5 items-start text-xs text-neutral-700 font-light leading-relaxed">
                          <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#ffa326]/15 text-[#cc7e14] select-none font-bold text-[9px]">✓</span>
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

      {/* ── THE PROCESS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Structural Excavation
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Right Lane Hardscape Process
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Proper excavation and base compaction are the invisible anchors of high-quality stone.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {hardscapeProcess.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-white rounded-xl border border-neutral-200/50 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#ffa326]/20 block mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-[14px] font-bold text-neutral-900 tracking-wide mb-2">
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
              <span className="inline-flex items-center bg-[#2b1a05] border border-[#593203]/30 text-white rounded-full px-5 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm">
                Engineered Strength
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose Right Lane for Your Clearwater Hardscape?
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Your outdoor living space should be a personal retreat and a hub for connection. Let us build a hardscape that forms the perfect stage for your life’s moments.
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
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14] border border-[#ffa326]/20 select-none">
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
            <img src={logo} alt="Right Lane" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Lay the Groundwork for Your Dream Yard
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Contact us today to schedule your free hardscape design consultation.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-md font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                Right Lane Handyman Services, LLC
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-5 text-[15px] font-light">
                <a href="tel:7276420201" className="flex items-center gap-3.5 hover:text-[#ffa326] transition-colors">
                  <Phone className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>(727) 642-0201</span>
                </a>
                <a href="mailto:rightlanehandymanservice@yahoo.com" className="flex items-center gap-3.5 hover:text-[#ffa326] transition-colors">
                  <Mail className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>rightlanehandymanservice@yahoo.com</span>
                </a>
                <div className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Serving Clearwater, Largo, St. Petersburg, Tarpon Springs & surrounding areas</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Licensed · Insured · Bonded | Building Trust with 25 years of experience</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:7276420201"
                className="rounded-full bg-[#ffa326] hover:bg-[#ffa326] px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call Ronnie Now
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
