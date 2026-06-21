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
  Utensils,
  Sparkles,
  Compass,
  Hammer,
  Droplets,
  Layers,
  Activity,
  Flame,
  Sun
} from "lucide-react";

import imgKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/outdoor-kitchens")({
  head: () => ({
    meta: [
      { title: "Outdoor Kitchens San Antonio | Custom BBQ Islands & Grill Stations | JRM Construction" },
      { name: "description", content: "Transform your backyard with a custom outdoor kitchen in San Antonio. Built-in grills, granite countertops, bars & more. 35 years of craftsmanship. Free consultation. Call (210) 429-5526." },
      { property: "og:title", content: "Outdoor Kitchens San Antonio | Custom BBQ Islands & Grill Stations | JRM Construction" },
      { property: "og:description", content: "Transform your backyard with a custom outdoor kitchen in San Antonio. Built-in grills, granite countertops, bars & more. 35 years of craftsmanship. Free consultation. Call (210) 429-5526." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: OutdoorKitchensPage,
});

function OutdoorKitchensPage() {
  const { t } = useTranslation();

  const kitchenServices = [
    {
      title: "Complete Kitchen Construction & Layouts",
      icon: Utensils,
      items: [
        "Custom Masonry Islands: Built from scratch with hand-cut limestone, brick, or stucco matching your home's architecture.",
        "L-Shaped & U-Shaped Suites: Maximizing counter work areas, under-counter storage drawers, and guest bar counters.",
        "Integrated Bar Stations: Drop-in ice bins, prep sinks, beverage coolers, and bar counter seating for full hospitality."
      ]
    },
    {
      title: "Premium Appliance Integration",
      icon: Flame,
      items: [
        "Professional Grill Stations: Built-in premium gas grills, kamado charcoal stands, wood pellet smokers, and power side burners.",
        "Specialty Appliances: Integrated wood-fired pizza ovens, draft beer taps, outdoor fridges, and warming drawers.",
        "Safe Utility Lines: Expertly engineered lines for gas, water lines, drainage lines, and weatherproof electrical outlets."
      ]
    },
    {
      title: "Hardscape & Living Space Integration",
      icon: Compass,
      items: [
        "Patio & Cover Shelter: Constructing pergolas or solid roof covers directly over the kitchen to shield cooking and seating areas.",
        "Flooring Harmony: Installing matching flagstone, paver, or textured concrete decks that tie the kitchen to the pool or house.",
        "Hearth & Comfort: Placing custom outdoor fireplaces, fire pits, and infrared heaters adjacent to the kitchen bar."
      ]
    }
  ];

  const kitchenProcess = [
    {
      number: "01",
      title: "Lifestyle Consultation",
      desc: "Robert Thompson meets on-site to review cooking habits, entertainment guest volume, budget, and site limits for a free quote."
    },
    {
      number: "02",
      title: "Design & Sourcing",
      desc: "We lay out counter heights, select premium appliances, pick stone finishes and countertops (granite, stone, tile), and plan layouts."
    },
    {
      number: "03",
      title: "Proposal & Utility Permits",
      desc: "You'll receive a detailed quote and schedule. JRM handles permits and designs safety utility runs (gas, water, electric)."
    },
    {
      number: "04",
      title: "Construction & Masonry",
      desc: "Our craftsmen pour concrete pads, build structural frames, route utility runs, execute stone masonry, and set countertops."
    },
    {
      number: "05",
      title: "Hookup & Reveal",
      desc: "We install all appliances, connect gas and plumbing, run function and leak tests, clean the site, and Handover the keys."
    }
  ];

  const whyChooseUs = [
    {
      title: "Unified Construction Expertise",
      desc: "As remodeling and hardscape experts, we build outdoor kitchens with the longevity of an indoor room and the flow of a garden."
    },
    {
      title: "Master of Layout Integration",
      desc: "We coordinate and build the overhead cover, concrete floor, counter masonry, utility lines, and plantings as one cohesive project."
    },
    {
      title: "35 Years of Utility Mastery",
      desc: "Running gas hookups, electrical lines, and water runs safely for permanent outdoor use is a core part of our construction skill set."
    },
    {
      title: "Built for Texas Elements",
      desc: "We use only premium non-porous countertops, UV-stabilized stainless appliances, and stones that resist San Antonio sun and winter freezes."
    },
    {
      title: "Licensed & Insured Assurance",
      desc: "Non-negotiable for projects involving gas, electricity, and water lines. Our licenses ensure permits, safety code compliance, and protection."
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
            style={{ backgroundImage: `url(${imgKitchens})` }}
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
              Luxury Outdoor Culinary Spaces
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Custom Outdoor Kitchen Design & Construction
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Elevate Entertainment with a Master-Built Culinary Haven—35 Years in the Making
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
                Outdoor Culinary Suites
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Turn Your Backyard into the Ultimate Culinary Destination
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#3d5636] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Transform your backyard into the ultimate destination for dining, entertaining, and memory-making with a custom outdoor kitchen designed for both the serious chef and the gracious host. At JRM Construction Landscaping Design, we specialize in designing and building fully integrated outdoor kitchen and living spaces that combine expert masonry, luxury amenities, and seamless landscape design.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                With over 35 years of construction and hardscaping mastery, owner Robert Thompson approaches each project as a permanent extension of your home, built to withstand the Texas elements while providing a stunning centerpiece for your outdoor life.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                An outdoor kitchen is more than a grill island—it’s a functional, flowing entertainment hub. As a fully licensed, insured, and bonded contractor, we ensure every aspect, from gas and electrical lines to stonework and cabinetry, is executed to the highest standards of safety, durability, and craftsmanship.
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
                src={imgKitchens}
                alt="Luxury limestone built-in grill station by JRM"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/3]"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#3d5636]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years Masons</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── OUTDOOR KITCHEN SERVICES GRID ── */}
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
              Culinary Suites
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Outdoor Kitchen Services
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              We design and construct complete culinary spaces from foundations to final details.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {kitchenServices.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-8 shadow-sm hover:shadow-xl hover:border-[#577a4c]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-4">
                      {pillar.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3.5 items-start text-xs text-neutral-700 font-light leading-relaxed">
                          <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#577a4c]/15 text-[#3d5636] select-none font-bold text-[9px]">✓</span>
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
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Utility Engineering
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The JRM Outdoor Kitchen Process
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Safely running lines under structural foundations is what sets JRM apart.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {kitchenProcess.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-white rounded-xl border border-neutral-200/50 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#577a4c]/20 block mb-3">
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
              <span className="inline-flex items-center bg-[#2d3f26] border border-[#23321e]/30 text-white rounded-full px-5 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm">
                Professionalism
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose JRM for Your Outdoor Kitchen?
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Safely and reliably installing gas, water, and electrical lines for permanent outdoor use is a core part of our construction skill set, ensuring complete safety and durability.
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
              Turn Your Backyard into the Neighborhood’s Favorite Destination
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Stop just grilling outside and start cooking in a purpose-built outdoor room designed for celebration, connection, and effortless enjoyment. Contact us today to schedule your free design consultation.
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
                  <span>Serving San Antonio, Boerne, New Braunfels, Canyon Lake & surrounding areas</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Licensed · Insured · Bonded | Building Trust Since 1989</span>
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
