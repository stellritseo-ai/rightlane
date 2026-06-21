import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Building,
  UserCheck,
  Hammer,
  Sparkles,
  Info,
  Flame,
  Utensils,
  Sun,
  Layers,
  Leaf,
  Compass,
  Smile,
  Zap,
  ArrowRight,
  ChevronRight
} from "lucide-react";

import imgRemodeling from "@/assets/svc-house-remodeling.jpg";
import imgConstruction from "@/assets/svc-new-construction.jpg";
import imgFireplace from "@/assets/svc-fireplace.jpg";
import imgPatios from "@/assets/svc-covered-patios.jpg";
import imgKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import imgHardscapes from "@/assets/svc-hardscapes.jpg";
import imgSoftscapes from "@/assets/svc-softscapes.jpg";
import imgPalms from "@/assets/svc-palm-trees.jpg";
import imgTurf from "@/assets/svc-artificial-turf.jpg";
import imgFencing from "@/assets/svc-fencing.jpg";
import imgCommercial from "@/assets/stats-jobsite.jpg";
import logo from "@/assets/jrm-logo.png";
import welBg from "@/assets/wel-bg.png";
import heroBg from "@/assets/hero-patio.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — JRM Construction Landscape Design, San Antonio" },
      { name: "description", content: "Explore our comprehensive range of residential and commercial design-build solutions, home remodeling, outdoor living spaces, fireplaces, landscaping, and construction services in San Antonio, TX." },
      { property: "og:title", content: "Our Services — JRM Construction Landscape Design" },
      { property: "og:description", content: "Over 35 years of trusted craftsmanship, license, and owner-led oversight in San Antonio, Texas." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "Show All" },
    { key: "residential", label: "Residential Services" },
    { key: "outdoor", label: "Outdoor Living Services" },
    { key: "landscape", label: "Landscape & Hardscape" },
    { key: "commercial", label: "Commercial Services" }
  ];

  const servicesData = [
    // Residential
    {
      id: "remodeling",
      category: "residential",
      title: "House Remodeling",
      icon: Hammer,
      image: imgRemodeling,
      badge: "🏠",
      desc: "Transform your living space with the confidence that comes from 35 years of expert craftsmanship. We handle every phase of your remodel—from kitchens and bathrooms to full-home renovations—with meticulous attention to detail and integrity. Our team ensures your project is built to last, on time and within budget.",
      items: [
        "Kitchen Remodels",
        "Bathroom Renovations",
        "Whole-Home Renovations",
        "Room Additions & Expansions",
        "Interior & Exterior Repairs",
        "Custom Interiors & Built-Ins"
      ],
      link: "/house-remodeling",
      linkText: "Learn More About House Remodeling →"
    },
    {
      id: "new-construction",
      category: "residential",
      title: "New Construction",
      icon: Building,
      image: imgConstruction,
      badge: "🏗️",
      desc: "Build your vision from the ground up with our expert new construction services. Whether you're planning a custom family home, a multi-unit residential property, or a commercial building, we manage the entire process with precision and transparency. From foundation to final landscaping, we deliver high-quality, custom spaces built to last.",
      items: [
        "Custom Single-Family Homes",
        "Residential Additions & Guest Houses",
        "Commercial & Retail Build-Outs",
        "Foundation & Framing",
        "Full Turnkey Service"
      ],
      link: "/new-construction",
      linkText: "Learn More About New Construction →"
    },
    {
      id: "fireplace",
      category: "residential",
      title: "Custom Fireplaces",
      icon: Flame,
      image: imgFireplace,
      badge: "🔥",
      desc: "A fireplace is more than a source of warmth—it's the heart of a home. We specialize in designing and building custom indoor and outdoor fireplaces that become the centerpiece of your living space. From rustic stone hearths to sleek modern linear gas units, we create functional works of art.",
      items: [
        "Custom Indoor Fireplaces",
        "Outdoor Fireplaces & Fire Pits",
        "Fireplace Remodels & Refacing",
        "Gas & Wood-Burning Options",
        "Custom Mantels & Surrounds"
      ],
      link: "/custom-fireplaces",
      linkText: "Learn More About Custom Fireplaces →"
    },
    // Outdoor Living
    {
      id: "patios",
      category: "outdoor",
      title: "Covered Patios",
      icon: Sun,
      image: imgPatios,
      badge: "🌿",
      desc: "Expand your living space under the perfect roof. We design and build bespoke covered patio structures that provide shade, shelter, and style—turning your outdoor area into a protected oasis for year-round relaxation and entertainment.",
      items: [
        "Solid Roof Patios",
        "Pergolas & Lattices",
        "Hybrid Designs",
        "Screened Enclosures",
        "Custom Columns & Pillars"
      ],
      link: "/covered-patios",
      linkText: "Learn More About Covered Patios →"
    },
    {
      id: "kitchens",
      category: "outdoor",
      title: "Outdoor Kitchens",
      icon: Utensils,
      image: imgKitchens,
      badge: "🍳",
      desc: "Elevate your entertaining with a master-built culinary haven. We design and build fully integrated outdoor kitchens that combine expert masonry, luxury amenities, and seamless landscape design. Your backyard becomes the ultimate destination for dining and celebration.",
      items: [
        "Custom Masonry Islands",
        "L-Shaped & U-Shaped Layouts",
        "Professional Grilling Stations",
        "Premium Appliance Integration",
        "Bar & Beverage Stations"
      ],
      link: "/outdoor-kitchens",
      linkText: "Learn More About Outdoor Kitchens →"
    },
    {
      id: "outdoor-fireplace",
      category: "outdoor",
      title: "Custom Fireplaces (Outdoor)",
      icon: Flame,
      image: imgFireplace,
      badge: "🔥",
      desc: "Extend the warmth and ambiance of a fireplace to your outdoor living space. Our custom outdoor fireplaces and fire pits create stunning focal points for your patio, pool area, or gathering space, extending usability into cooler evenings.",
      items: [
        "Grand Outdoor Fireplaces",
        "Custom Fire Pits & Chimineas",
        "Fireplace & Outdoor Kitchen Integration",
        "Stone & Stucco Finishes"
      ],
      link: "/custom-fireplaces",
      linkText: "Learn More About Custom Fireplaces →"
    },
    // Landscape & Hardscape
    {
      id: "hardscapes",
      category: "landscape",
      title: "Hardscapes",
      icon: Layers,
      image: imgHardscapes,
      badge: "🪨",
      desc: "Build the foundation for outdoor living with custom hardscape features designed for entertainment, relaxation, and lasting beauty. We create patios, walkways, retaining walls, and outdoor rooms that form the architectural backbone of your landscape.",
      items: [
        "Flagstone & Natural Stone Patios",
        "Paver Patios & Walkways",
        "Retaining Walls & Terraces",
        "Outdoor Kitchen & Firepit Bases",
        "Driveways & Courtyards",
        "Drainage Solutions"
      ],
      link: "/hardscapes",
      linkText: "Learn More About Hardscapes →"
    },
    {
      id: "softscapes",
      category: "landscape",
      title: "Softscapes",
      icon: Leaf,
      image: imgSoftscapes,
      badge: "🌱",
      desc: "Bring your landscape to life with vibrant colors, textured foliage, and seasonal blooms. We design and install complete living environments tailored to your vision, using native and adapted plants that thrive in the San Antonio climate.",
      items: [
        "Foundation Planting",
        "Colorful Perennial & Annual Beds",
        "Native & Drought-Tolerant Xeriscaping",
        "Ornamental Trees & Shrubs",
        "Mulching & Soil Amendment",
        "Sod Installation & Seeding"
      ],
      link: "/softscapes",
      linkText: "Learn More About Softscapes →"
    },
    {
      id: "palms",
      category: "landscape",
      title: "Palm Trees",
      icon: Compass,
      image: imgPalms,
      badge: "🌴",
      desc: "Create an instant oasis of coastal elegance and tropical ambiance with professionally installed palm trees. We integrate majestic palms into cohesive landscape designs that thrive in the Texas climate.",
      items: [
        "Cold-Hardy Palm Varieties",
        "Specimen & Mature Tree Installation",
        "Container & Potting Solutions",
        "Tropical Theme Landscaping",
        "Complete Care & Integration"
      ],
      link: "/palm-trees",
      linkText: "Learn More About Palm Trees →"
    },
    {
      id: "turf",
      category: "landscape",
      title: "Artificial Turf",
      icon: Smile,
      image: imgTurf,
      badge: "🌿",
      desc: "Enjoy a flawless, green yard 365 days a year with no maintenance. Our premium artificial turf installation delivers timeless beauty with permanent practicality—perfect for families, pets, and those seeking a water-wise solution.",
      items: [
        "Full Lawn Replacement",
        "Pet-Friendly Turf Systems",
        "Putting Greens & Recreational Areas",
        "Poolside & Patio Surrounds",
        "Turf with Paver Inlays"
      ],
      link: "/artificial-turf",
      linkText: "Learn More About Artificial Turf →"
    },
    {
      id: "fencing",
      category: "landscape",
      title: "Fencing",
      icon: ShieldCheck,
      image: imgFencing,
      badge: "🔧",
      desc: "Define your space with strength, style, and enduring quality. We build custom fencing solutions that enhance security, increase privacy, and elevate your property's curb appeal with professional precision.",
      items: [
        "Wood Fences",
        "Vinyl & Composite Fencing",
        "Wrought Iron & Ornamental",
        "Chain Link (Coated & Commercial)",
        "Specialty & Decorative Fencing"
      ],
      link: "/fencing",
      linkText: "Learn More About Fencing →"
    },
    {
      id: "irrigation",
      category: "landscape",
      title: "Irrigation Systems",
      icon: Sparkles,
      image: imgSoftscapes,
      badge: "💦",
      desc: "Keep your property lush and healthy with custom, high-efficiency irrigation systems. We design, install, and service automatic sprinkler setups, drip systems, and smart controllers tailored to San Antonio's water conservation guidelines.",
      items: [
        "Custom Sprinkler System Design",
        "Drip Irrigation & Micro-Spray",
        "Smart WiFi Controller Setup",
        "System Inspections & Audits",
        "Backflow Testing & Repair",
        "Water-Saving System Upgrades"
      ],
      link: "/irrigation",
      linkText: "Learn More About Irrigation →"
    },
    {
      id: "lighting",
      category: "landscape",
      title: "Landscape Lighting",
      icon: Sparkles,
      image: imgHardscapes,
      badge: "💡",
      desc: "Illuminate your property's architectural features, walkways, and outdoor living spaces. We design and install low-voltage LED lighting systems that enhance beauty, extend usability, and improve nighttime security.",
      items: [
        "Architectural Up-Lighting",
        "Walkway & Path Lighting",
        "Patio & Deck Illuminations",
        "Low-Voltage LED System Install",
        "Smart Timer & Automation Controls",
        "System Maintenance & Upgrades"
      ],
      link: "/landscape-lighting",
      linkText: "Learn More About Lighting →"
    },
    // Commercial
    {
      id: "commercial",
      category: "commercial",
      title: "Commercial Services",
      icon: Building,
      image: imgCommercial,
      badge: "🏢",
      desc: "We bring the same dedication, quality, and professionalism to commercial projects. Whether you need commercial construction, landscaping, or hardscaping for your business, we deliver results that make a lasting impression.",
      items: [
        "Commercial New Construction",
        "Retail & Office Build-Outs",
        "Commercial Landscaping",
        "Commercial Hardscaping",
        "Parking Lot Installation",
        "Property Maintenance & Repairs"
      ],
      link: "/commercial",
      linkText: "Learn More About Commercial Services →"
    }
  ];

  const trustValues = [
    {
      title: "35 Years of Proven Expertise",
      desc: "Deep-rooted knowledge of San Antonio styles, materials, and climate.",
      icon: Hammer,
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Your complete protection and peace of mind.",
      icon: ShieldCheck,
    },
    {
      title: "Owner-Led Oversight",
      desc: "Robert Thompson is personally involved in every project.",
      icon: Building,
    },
    {
      title: "Full-Service Design & Build",
      desc: "We manage your project from creative concept to final cleanup.",
      icon: Compass,
    },
    {
      title: "Free Consultations",
      desc: "No-obligation meetings to discuss your vision and provide expert guidance.",
      icon: UserCheck,
    },
    {
      title: "24/7 Emergency Services",
      desc: "Available for urgent issues requiring immediate attention.",
      icon: Zap,
    },
    {
      title: "Commitment to Quality",
      desc: "We use premium materials and proven techniques.",
      icon: Sparkles,
    },
    {
      title: "Customer Satisfaction",
      desc: "Clear communication and personalized project management.",
      icon: Smile,
    },
  ];

  const filteredServices = servicesData.filter(
    (s) => activeFilter === "all" || s.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center px-6 py-16">
          {/* Animated Background Image */}
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Our Services
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Comprehensive Design & Construction Solutions for Your Property
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              At JRM Construction Landscaping Design, we offer a full spectrum of residential and commercial services designed to transform your property into a space of beauty, function, and lasting value. With over 35 years of experience, owner Robert Thompson and our skilled team bring unmatched craftsmanship, integrity, and attention to detail to every project—from the smallest repair to the most ambitious new construction.
            </p>
          </motion.div>

          {/* Scroll prompt */}
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

      {/* ── INTRODUCTORY COPY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-light">
              As a fully licensed, insured, and bonded contractor, we provide complete design-build solutions that seamlessly integrate indoor remodeling with outdoor living. Explore our comprehensive services below and discover how we can bring your vision to life.
            </p>
          </div>
        </section>
      </div>

      {/* ── CATEGORY FILTER SYSTEM & SERVICE CARDS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section 
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-16 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Filter Tab bar */}
          <div className="flex overflow-x-auto flex-nowrap justify-start gap-2 mb-12 max-w-4xl mx-auto pb-3 px-2 scrollbar-none lg:flex-wrap lg:justify-center lg:overflow-x-visible lg:pb-0">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm border shrink-0 ${
                  activeFilter === f.key
                    ? "bg-[#3d5636] border-[#3d5636] text-white shadow-md scale-[1.02]"
                    : "bg-white/90 border-neutral-200 text-neutral-800 hover:border-[#3d5636]/40 hover:bg-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.id}
                    id={s.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    className="scroll-mt-28 bg-white rounded-2xl border border-neutral-200/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Block with Zoom */}
                      <div className="relative h-56 w-full overflow-hidden border-b border-neutral-100">
                        <img 
                          src={s.image} 
                          alt={s.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        {/* Gradient Cover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Title Badges */}
                        <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2.5">
                          <span className="text-xl bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg leading-none shrink-0 shadow-sm">
                            {s.badge}
                          </span>
                          <h3 
                            className="text-lg font-bold text-white tracking-wide leading-tight drop-shadow-md"
                            style={{ fontFamily: "Georgia, serif" }}
                          >
                            {s.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-6 md:p-8 space-y-6">
                        <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                          {s.desc}
                        </p>

                        <div className="space-y-3.5">
                          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                            Key Offerings
                          </span>
                          <ul className="space-y-2.5 text-xs text-neutral-700 font-light">
                            {s.items.map((item) => (
                              <li key={item} className="flex gap-2.5 items-start">
                                <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636] mt-0.5 select-none font-bold text-[9px]">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Footer CTA Link */}
                    <div className="p-6 md:p-8 pt-0 border-t border-neutral-100/50 mt-auto">
                      <Link
                        to={s.link}
                        className="w-full flex items-center justify-between text-xs md:text-sm font-bold text-[#3d5636] hover:text-[#577a4c] transition-colors group pt-4 select-none"
                      >
                        <span>{s.linkText}</span>
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE JRM CONSTRUCTION SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Our Standard
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Why Choose JRM Construction?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {trustValues.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-white rounded-xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md hover:scale-[1.02] hover:border-[#577a4c]/30 transition-all duration-300 flex flex-col items-start text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 tracking-wide mb-2">{v.title}</h4>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
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
              Ready to Transform Your Property?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Whether you're planning a complete home remodel, a custom outdoor living space, or a commercial project, JRM Construction is here to bring your vision to life with craftsmanship, integrity, and 35 years of trusted experience.
            </p>

            <p className="text-md font-bold text-[#a5b89d] mb-10 tracking-wide uppercase">
              Contact us today to schedule your free, no-obligation consultation.
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
                  <span>Proudly Serving San Antonio & the Surrounding 80-Mile Area</span>
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
