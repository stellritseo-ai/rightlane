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

import imgCleaning from "@/assets/svc-cleaning.png";
import imgPressureWash from "@/assets/svc-pressure-wash.png";
import imgDemolition from "@/assets/svc-demolition.png";
import imgJunkRemoval from "@/assets/svc-junk-removal.png";
import imgMaintenance from "@/assets/svc-maintenance.png";
import imgDebrisRemoval from "@/assets/svc-debris-removal.png";
import imgLandscaping from "@/assets/svc-landscaping.png";
import imgCommercial from "@/assets/stats-jobsite.jpg";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import heroBg from "@/assets/hero-patio.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Right Lane Handyman Services, LLC, Clearwater" },
      { name: "description", content: "Explore our comprehensive range of residential and commercial design-build solutions, home remodeling, outdoor living spaces, fireplaces, landscaping, and construction services in Clearwater, FL." },
      { property: "og:title", content: "Our Services — Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "Over 25+ Years of trusted craftsmanship, license, and owner-led oversight in Clearwater, Texas." },
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
    { key: "maintenance", label: "Property Maintenance" },
    { key: "hauling", label: "Hauling & Demolition" },
    { key: "cleaning", label: "Cleaning & Washing" }
  ];

  const servicesData = [
    {
      id: "cleaning",
      category: "cleaning",
      title: "Post Construction Cleaning",
      icon: Sparkles,
      image: imgCleaning,
      badge: "🧼",
      desc: "Spotless and detailed cleaning services to make your newly built or renovated property move-in ready. We remove dust, paint overspray, adhesive residue, and fine construction particles from every corner.",
      items: [
        "Dust & Debris Removal",
        "Window & Glass Detailing",
        "Floor Scraping & Polishing",
        "Cabinet & Drawer Cleaning",
        "Paint & Caulking Cleanup",
        "Final Move-In Inspection Polish"
      ],
      link: "/lets-talk",
      linkText: "Request a Quote for Cleaning →"
    },
    {
      id: "pressurewash",
      category: "cleaning",
      title: "Pressure Washing",
      icon: Sun,
      image: imgPressureWash,
      badge: "💦",
      desc: "High-powered deep cleaning for driveways, decks, siding, and exterior surfaces to restore pristine curb appeal. We safely remove mold, mildew, dirt, oil, and grime.",
      items: [
        "Driveway & Sidewalk Cleaning",
        "Exterior Siding Washing",
        "Deck & Patio Restoration",
        "Fence Washing & Brightening",
        "Commercial Exterior Cleaning",
        "Eco-Friendly Cleaning Solutions"
      ],
      link: "/lets-talk",
      linkText: "Request a Quote for Pressure Washing →"
    },
    {
      id: "demolition",
      category: "hauling",
      title: "Demolition",
      icon: Hammer,
      image: imgDemolition,
      badge: "🏗️",
      desc: "Safe, efficient structural dismantling and site preparation for residential and commercial projects. We handle selective interior demo and complete small building tear-downs.",
      items: [
        "Interior Strip-Outs & Remodel Prep",
        "Shed & Outbuilding Demolition",
        "Concrete & Asphalt Breaking",
        "Deck & Fence Tear-Downs",
        "Safety Inspections & Permits",
        "Post-Demo Cleanup & Disposal"
      ],
      link: "/lets-talk",
      linkText: "Request a Quote for Demolition →"
    },
    {
      id: "junkremoval",
      category: "hauling",
      title: "Junk Removal & Hauling",
      icon: Layers,
      image: imgJunkRemoval,
      badge: "🚛",
      desc: "Full-service hauling and disposal of unwanted furniture, appliances, and general household items. We clear out garages, basements, estates, and offices.",
      items: [
        "Whole-House & Estate Cleanouts",
        "Furniture & Appliance Removal",
        "Garage, Attic & Basement Clearing",
        "Foreclosure & Eviction Cleanouts",
        "Donation Pickups & Sorting",
        "Eco-Friendly Recycling & Disposal"
      ],
      link: "/lets-talk",
      linkText: "Request a Quote for Junk Removal →"
    },
    {
      id: "maintenance",
      category: "maintenance",
      title: "Property Maintenance",
      icon: Hammer,
      image: imgMaintenance,
      badge: "🔧",
      desc: "General handyman repairs, preventative upkeep, and custom improvements for home and business owners. We help you stay on top of repairs to protect your investment.",
      items: [
        "General Handyman Repairs",
        "Drywall Repair & Texture",
        "Carpentry & Trim Work",
        "Hardware & Fixture Replacement",
        "Rental Property Turnovers",
        "Commercial Property Repairs"
      ],
      link: "/lets-talk",
      linkText: "Request a Quote for Maintenance →"
    },
    {
      id: "debrisremoval",
      category: "hauling",
      title: "Waste, Building Materials & Debris Removal",
      icon: Building,
      image: imgDebrisRemoval,
      badge: "🧱",
      desc: "Fast cleanup and removal of construction waste, metal, concrete, drywall, and leftover building materials. We keep your jobsite clean and compliant.",
      items: [
        "Construction Waste Removal",
        "Metal Scrap & Rebar Disposal",
        "Concrete, Brick & Stone Hauling",
        "Drywall & Wood Scrap Cleanup",
        "Jobsite Debris Containment",
        "Emergency Storm Debris Cleanup"
      ],
      link: "/lets-talk",
      linkText: "Request Debris Removal Services →"
    },
    {
      id: "landscaping",
      category: "maintenance",
      title: "Landscaping",
      icon: Leaf,
      image: imgLandscaping,
      badge: "🌱",
      desc: "Complete garden setup, cleanups, sod installation, mulching, and custom landscape maintenance. We help you create and maintain a beautiful, green outdoor space.",
      items: [
        "Seasonal Garden Cleanups",
        "Sod Installation & Seeding",
        "Mulch, Soil & Stone Placement",
        "Shrub & Tree Pruning",
        "Flower Bed Design & Maintenance",
        "Drainage & Erosion Solutions"
      ],
      link: "/lets-talk",
      linkText: "Request Landscaping Services →"
    }
  ];

  const trustValues = [
    {
      title: "25+ Years of Proven Expertise",
      desc: "Deep-rooted knowledge of Clearwater styles, materials, and climate.",
      icon: Hammer,
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Your complete protection and peace of mind.",
      icon: ShieldCheck,
    },
    {
      title: "Owner-Led Oversight",
      desc: "Right Lane Handyman is personally involved in every project.",
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/92 via-[#1c140d]/78 to-[#1c140d]/92 z-10" />

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
              At Right Lane Handyman Services, LLC, we offer a full spectrum of residential and commercial services designed to transform your property into a space of beauty, function, and lasting value. With over 25+ Years of experience, the Right Lane team and our skilled team bring unmatched craftsmanship, integrity, and attention to detail to every project—from the smallest repair to the most ambitious new construction.
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
                className="absolute top-0 left-0 w-full h-1/3 bg-[#ffa326] rounded-full"
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
                    ? "bg-[#cc7e14] border-[#cc7e14] text-white shadow-md scale-[1.02]"
                    : "bg-white/90 border-neutral-200 text-neutral-800 hover:border-[#cc7e14]/40 hover:bg-white"
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
                                <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14] mt-0.5 select-none font-bold text-[9px]">✓</span>
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
                        className="w-full flex items-center justify-between text-xs md:text-sm font-bold text-[#cc7e14] hover:text-[#ffa326] transition-colors group pt-4 select-none"
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

      {/* ── WHY CHOOSE Right Lane CONSTRUCTION SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Our Standard
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Why Choose Right Lane Handyman Services, LLC?
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
                  className="bg-white rounded-xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md hover:scale-[1.02] hover:border-[#ffa326]/30 transition-all duration-300 flex flex-col items-start text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ffa326]/10 text-[#cc7e14] flex items-center justify-center mb-4">
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
            <img src={logo} alt="Right Lane" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Transform Your Property?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Whether you're planning a complete home remodel, a custom outdoor living space, or a commercial project, Right Lane Handyman Services, LLC is here to bring your vision to life with craftsmanship, integrity, and 25+ Years of trusted experience.
            </p>

            <p className="text-md font-bold text-[#ffa326] mb-10 tracking-wide uppercase">
              Contact us today to schedule your free, no-obligation consultation.
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
                  <span>Proudly Serving Clearwater & the Surrounding Clearwater area</span>
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
