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
  Sparkles,
  Compass,
  Lightbulb,
  Moon,
  Layers,
  Wrench,
  Activity,
  Home
} from "lucide-react";

import imgHardscapes from "@/assets/svc-hardscapes.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/landscape-lighting")({
  head: () => ({
    meta: [
      { title: "Landscape Lighting Design & Installation Clearwater — Right Lane Handyman Services, LLC" },
      { name: "description", content: "Enhance security and beautify your backyard with custom low-voltage LED landscape lighting. 25+ Years experience in Clearwater, FL. Call (727) 642-0201." },
      { property: "og:title", content: "Landscape Lighting Design & Installation in Clearwater" },
      { property: "og:description", content: "Walkway lights, architectural uplighting, patio deck lights, smart timers, and energy-efficient systems designed and built by Right Lane." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: LandscapeLightingPage,
});

function LandscapeLightingPage() {
  const { t } = useTranslation();

  const lightingServices = [
    {
      title: "Design, Sourcing & Consultation",
      icon: Compass,
      badge: "Design",
      desc: "Creating tailored, blueprint illumination plans that balance visual beauty, pathway safety, and automation.",
      items: [
        "Focal Point Selection: Analyzing specimen trees, architectural columns, and water features to emphasize.",
        "Energy-Saving LED Fixtures: Recommending heavy-duty, marine-grade brass or copper fixtures with warm 2700K outputs.",
        "Smart Integration: Configuring app-driven smart controllers, astronomical timers, and zoning systems.",
        "Safety Audits: Planning safe walkways, changes in elevation, step treads, and door entry illumination."
      ]
    },
    {
      title: "Residential Lighting Specialties",
      icon: Lightbulb,
      badge: "Residential",
      desc: "Bringing your home's facade, gardens, and backyard living rooms to life after sunset.",
      items: [
        "Path & Walkway Lights: Symmetrical, low-glare downlighting to trace walkways and driveways safely.",
        "Uplighting & Silhouetting: Placing directional lights at tree trunks and house walls for dramatic depth.",
        "Deck, Patio & Bistro Lighting: Hanging dimmable string lights and installing hardscape column under-cap fixtures.",
        "Step & Safety Lighting: Recessed riser and deck stair lights preventing trips on transitions."
      ]
    },
    {
      title: "Commercial & Modernization Upgrades",
      icon: Moon,
      badge: "Commercial & Support",
      desc: "Enhancing business curb appeal, safety standards, and retrofitting older, power-hungry systems.",
      items: [
        "Building & Signage Lighting: Highlighting storefront facades, address plates, and security boundaries.",
        "LED Retrofits: Swapping out outdated halogen systems to low-voltage LEDs, slashing power needs by 80%.",
        "Smart Schedules & Zones: Integrating photo-sensors and motion triggers to coordinate with security systems.",
        "Repair & Tuning: Troubleshooting severed cables, replacing burnt bulbs, and adjusting fixtures as landscapes mature."
      ]
    }
  ];

  const lightingProcess = [
    {
      number: "01",
      title: "Nighttime Design Consultation",
      desc: "We begin with a free on-site evening consultation to evaluate your property's existing shadows, sun-faded areas, and map paths."
    },
    {
      number: "02",
      title: "Custom Lighting Plan",
      desc: "Ronnie designs a detailed layout map specifying wire runs, fixture styles, beam angles, wattages, and transformer sizes."
    },
    {
      number: "03",
      title: "Proposal & Selection",
      desc: "You receive a transparent quote detailing fixture brands (solid brass, copper), count, warranties, and project schedules."
    },
    {
      number: "04",
      title: "Professional Installation",
      desc: "Our technicians run low-voltage direct burial cabling, install fixtures, mount weatherproof transformers, and wire controls cleanly."
    },
    {
      number: "05",
      title: "Final Night Alignment",
      desc: "We return at twilight to make final adjustments to beam directions, eliminate glare points, and walk you through app operations."
    }
  ];

  const whyChooseUs = [
    {
      title: "Designer's Eye, Builder's Precision",
      desc: "With 25+ Years of masonry and landscaping experience, we know how to hide wiring and position fixtures for seamless structural integration."
    },
    {
      title: "Hardscape & Landscape Harmony",
      desc: "We design lighting that perfectly accents your covered patios, outdoor kitchens, flagstone retaining walls, and softscape planting beds."
    },
    {
      title: "Low-Voltage Energy Efficiency",
      desc: "We design low-voltage LED layouts that draw minimal power, ensuring your home stays beautifully lit for pennies a night."
    },
    {
      title: "Clearwater Element Protection",
      desc: "We use only premium, weatherproof, and sealed fixtures (solid brass and copper) that resist Texas heat, moisture, and lawn mower stress."
    },
    {
      title: "Licensed & Insured Protection",
      desc: "Non-negotiable for low-voltage systems and exterior wiring. Our credentials guarantee code-compliant, professional safety standards."
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
              Artistic Outdoor Illumination
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Landscape Lighting in Clearwater
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Illuminate Your Outdoor Living with Professional Landscape Lighting Design
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
                Nightscape Artistry
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Enjoy Your Landscape Long After the Sun Goes Down
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#cc7e14] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Your landscape deserves to be enjoyed long after the sun goes down. At Right Lane Handyman Services, LLC, we specialize in custom landscape lighting installation that transforms your outdoor spaces into stunning nighttime environments—enhancing beauty, improving security, and extending your usable living hours.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                With over 25+ Years of landscape and construction experience, the Right Lane team understands the art and science of proper illumination, creating lighting designs that highlight your property's best features while ensuring safety and efficiency.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                As a fully licensed, insured, and bonded contractor, we design and install professional-grade lighting systems that are durable, energy-efficient, and code-compliant. From subtle path lighting to dramatic uplighting and festive seasonal displays, we bring your outdoor spaces to life after dark.
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
                alt="Beautiful illuminated columns and stone retaining wall at night by Right Lane"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/3]"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#cc7e14]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years Masons</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── SERVICE AREAS (DESIGN VS RESIDENTIAL VS COMMERCIAL) ── */}
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
              Illumination Options
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Landscape Lighting Services
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              We design and construct custom low-voltage lighting systems from scratch to match your lifestyle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {lightingServices.map((pillar, idx) => {
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
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#ffa326]/10 text-[#cc7e14] border border-[#ffa326]/20 flex items-center justify-center">
                        <IconComp className="w-6 h-6 animate-pulse" />
                      </div>
                      <span className="text-[10px] font-bold bg-[#ffa326]/10 text-[#cc7e14] px-3 py-1 rounded-full uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-500 font-light mb-6 leading-relaxed">
                      {pillar.desc}
                    </p>
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
              Step-By-Step Flow
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Bring Your Nightscape to Life
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              How Right Lane designs and positions your custom outdoor lighting system.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {lightingProcess.map((step, idx) => (
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
                Builder's Standard
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose Right Lane for Your Landscape Lighting?
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Outdoor lighting must withstand Texas storms, freezing winters, and regular lawn maintenance. Right Lane pairs solid brass fixtures with code-compliant low-voltage cabling for permanent beauty.
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
              Illuminate Your Outdoor Living
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Your property deserves to be seen in its best light—at every hour. Professional landscape lighting enhances your home's beauty, provides security, and creates a welcoming atmosphere for family and guests. Contact us today to schedule your free, on-site evening consultation.
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
                  <span>Serving Clearwater, St. Petersburg, Largo, Tarpon Springs & surrounding Clearwater area</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Licensed · Insured · Bonded | Custom Landscape Lighting Artistry</span>
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
                Free Nighttime Assessment
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
