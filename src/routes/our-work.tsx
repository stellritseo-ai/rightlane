import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ZoomIn,
  X,
  Compass,
  Star,
  Quote,
  Flame,
  Award
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import workHero from "@/assets/wel-img.png";

// Project local images from assets folder
import imgOutdoorLiving from "@/assets/wel-img.png";
import imgPressureWash from "@/assets/svc-pressure-wash.png";
import imgDemolition from "@/assets/svc-demolition.png";
import imgJunkRemoval from "@/assets/svc-junk-removal.png";
import imgLandscaping from "@/assets/svc-landscaping.png";
import imgHandyman from "@/assets/svc-maintenance.png";
import imgCleaning from "@/assets/svc-cleaning.png";
import imgFencing from "@/assets/svc-fencing.jpg";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work & Portfolio - Right Lane Handyman Services, LLC | Clearwater, FL" },
      { name: "description", content: "Explore the Right Lane Handyman Services, LLC portfolio. View completed projects in home remodeling, pressure washing, demolition, junk removal, and landscaping in Pinellas County." },
      { property: "og:title", content: "Our Work & Portfolio - Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "Browse our featured design-build projects and property maintenance transformations in Clearwater and surrounding areas." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: OurWorkPage,
});

interface GalleryItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  category: string;
}

function OurWorkPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Remodeling", "Outdoor Living", "Landscaping", "Construction", "Fencing"];

  const featuredProjects = [
    {
      title: "Post Construction Cleaning",
      subtitle: "Before & After: Complete cleanout after major renovation",
      desc: "We specialize in thorough post-construction cleaning, removing dust, debris, and construction materials to leave your space move-in ready. From single rooms to entire commercial buildings, we handle it all.",
      bullets: [
        "Full-site debris removal",
        "Dust and particle elimination",
        "Surface cleaning and sanitization",
        "Ready for occupancy"
      ],
      icon: "🔨"
    },
    {
      title: "Pressure Washing",
      subtitle: "Before & After: Driveway and pool deck restoration",
      desc: "Restore the beauty of your property with our professional pressure washing services. We remove years of grime, mold, and stains from driveways, decks, siding, and pool areas.",
      bullets: [
        "Driveway and walkway cleaning",
        "Deck and patio restoration",
        "Pool deck and surrounding areas",
        "Commercial building exteriors"
      ],
      icon: "💦"
    },
    {
      title: "Demolition",
      subtitle: "Before & After: Concrete and structure removal",
      desc: "Safe and efficient demolition is our specialty. Whether you need a small concrete slab removed or an entire structure demolished, our team has the equipment and expertise to get the job done right.",
      bullets: [
        "Concrete slab removal",
        "Interior demolition",
        "Structural dismantling",
        "Complete debris hauling"
      ],
      icon: "🏗️"
    },
    {
      title: "Junk Removal & Hauling",
      subtitle: "Before & After: Garage and property cleanout",
      desc: "We haul what others won't. From old furniture and appliances to heavy debris and mixed materials, our team handles full-site cleanouts with ease.",
      bullets: [
        "Residential junk removal",
        "Commercial cleanouts",
        "Heavy debris hauling",
        "Construction waste removal"
      ],
      icon: "🚛"
    },
    {
      title: "Landscaping & Property Maintenance",
      subtitle: "Before & After: Mulching, garden beds, and outdoor lighting",
      desc: "Enhance your curb appeal with our professional landscaping and property maintenance services. We design, install, and maintain beautiful outdoor spaces.",
      bullets: [
        "Mulching and garden bed installation",
        "Lawn maintenance and mowing",
        "Outdoor lighting installation",
        "Fence and gate repair"
      ],
      icon: "🌿"
    },
    {
      title: "Handyman & Remodeling",
      subtitle: "Before & After: Fence repair, drywall, and carpentry",
      desc: "From sticky doors to complete room renovations, our handyman services cover it all. Our skilled team delivers precision and quality on every project.",
      bullets: [
        "Drywall repair and painting",
        "Custom carpentry",
        "Fence and gate repair",
        "Fixture installation",
        "Full room renovations"
      ],
      icon: "🏠"
    }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      title: "Outdoor Living Transformation",
      desc: "Before & After – Complete outdoor space renovation",
      img: imgOutdoorLiving,
      category: "Outdoor Living"
    },
    {
      id: 1,
      title: "Pressure Washing Project",
      desc: "Driveway and pool deck restoration",
      img: imgPressureWash,
      category: "Landscaping"
    },
    {
      id: 2,
      title: "Demolition Project",
      desc: "Concrete slab and structure removal",
      img: imgDemolition,
      category: "Construction"
    },
    {
      id: 3,
      title: "Junk Removal Project",
      desc: "Full garage and property cleanout",
      img: imgJunkRemoval,
      category: "Construction"
    },
    {
      id: 4,
      title: "Landscaping Project",
      desc: "Mulching, garden beds, and outdoor lighting",
      img: imgLandscaping,
      category: "Landscaping"
    },
    {
      id: 5,
      title: "Handyman Project",
      desc: "Drywall repair and custom carpentry",
      img: imgHandyman,
      category: "Remodeling"
    },
    {
      id: 6,
      title: "Post Construction Cleaning",
      desc: "Complete cleanout after renovation",
      img: imgCleaning,
      category: "Remodeling"
    },
    {
      id: 7,
      title: "Fence Repair Project",
      desc: "Wooden fence gate and post replacement",
      img: imgFencing,
      category: "Fencing"
    }
  ];

  const highlightsList = [
    { type: "Post Construction Cleaning", desc: "Full-site cleanup after major renovation", loc: "Clearwater, FL" },
    { type: "Pressure Washing", desc: "Driveway and pool deck restoration", loc: "Clearwater Beach, FL" },
    { type: "Demolition", desc: "Concrete slab and structure removal", loc: "Largo, FL" },
    { type: "Junk Removal & Hauling", desc: "Garage and property cleanout", loc: "Dunedin, FL" },
    { type: "Landscaping", desc: "Mulching, garden beds, and outdoor lighting", loc: "Safety Harbor, FL" },
    { type: "Handyman Services", desc: "Drywall repair and custom carpentry", loc: "St. Petersburg, FL" },
    { type: "Fence Repair", desc: "Wooden fence gate and post replacement", loc: "Pinellas Park, FL" },
    { type: "Remodeling", desc: "Complete office renovation", loc: "Clearwater, FL" },
    { type: "Storm Cleanup", desc: "Emergency debris removal after storm", loc: "Tampa, FL" },
    { type: "Property Maintenance", desc: "Lawn mowing and general upkeep", loc: "Tarpon Springs, FL" }
  ];

  const processSteps = [
    {
      step: "Step 1",
      title: "Free Consultation",
      desc: "Contact us to discuss your project. We'll listen to your needs, assess the scope of work, and provide a free, no-obligation estimate."
    },
    {
      step: "Step 2",
      title: "Project Planning",
      desc: "We develop a detailed plan, including timeline, materials, and cost. We ensure you're informed every step of the way."
    },
    {
      step: "Step 3",
      title: "Execution",
      desc: "Our skilled team gets to work with precision and efficiency. We maintain clean job sites and clear communication throughout."
    },
    {
      step: "Step 4",
      title: "Final Walkthrough",
      desc: "We walk through the completed project with you to ensure your complete satisfaction. We don't leave until you're happy."
    }
  ];

  const clientReviews = [
    {
      quote: "They hauled away our old hot tub and concrete blocks. Very heavy work but the Right Lane crew handled it with ease. Outstanding service!",
      author: "Michael F.",
      city: "Largo"
    },
    {
      quote: "Excellent deck pressure washing and sealing. Ronnie was professional, on time, and left our backyard spotless. 5 stars!",
      author: "Rachel S.",
      city: "Tarpon Springs"
    },
    {
      quote: "Repaired our wooden fence gates and replaced three rotting posts. Very sturdy work and fair pricing. Will definitely hire Ronnie again.",
      author: "Nancy P.",
      city: "Pinellas Park"
    },
    {
      quote: "They installed a gorgeous artificial turf and paved walkway in our courtyard. Flawless execution. I'll never use another handyman company again.",
      author: "Jared W.",
      city: "St. Petersburg"
    },
    {
      quote: "The backyard fencing and covered patio upgrade they did for our home was outstanding. Professional, clean, and finished ahead of schedule.",
      author: "Marcus T.",
      city: "Clearwater"
    }
  ];

  const serviceCities = [
    "Clearwater", "Largo", "St. Petersburg",
    "Dunedin", "Tarpon Springs", "Safety Harbor",
    "Palm Harbor", "Pinellas Park", "Seminole",
    "Belleair", "Belleair Beach", "Bay Pines",
    "Oldsmar", "Ozona", "Crystal Beach",
    "Indian Rocks Beach"
  ];

  const benefitsList = [
    { title: "25+ Years of Experience", text: "Every job is handled with skill and speed." },
    { title: "Licensed, Insured & Bonded", text: "Complete peace of mind for your property." },
    { title: "Residential, Commercial & Industrial", text: "We do it all." },
    { title: "24/7 Emergency Service", text: "Nights, weekends, and Sundays (emergency only)." },
    { title: "Upfront Pricing", text: "No surprises, no hidden fees." },
    { title: "Guaranteed Work", text: "100% satisfaction." },
    { title: "We Haul What Others Won't", text: "Heavy debris, mixed materials, and full-site cleanouts." },
    { title: "Locally Owned", text: "Clearwater, FL – We know these communities." }
  ];

  const filteredGallery = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── HERO BANNER ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.05, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${workHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/92 via-[#1c140d]/78 to-[#1c140d]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Our Work
            </span>
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-md">
              See What We Can Do For You
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
              At Right Lane Handyman Services, LLC, we take pride in delivering exceptional results for every client. Browse through our portfolio to see the quality and craftsmanship we bring to every job site across Clearwater and Pinellas County.
            </p>
          </motion.div>
        </section>
      </div>

      {/* ── FEATURED PROJECTS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-4 py-16 sm:px-8 md:px-12 lg:px-16 text-left"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Our Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white border border-neutral-200/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#ffa326]/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl select-none">{project.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                  
                  <span className="text-xs font-bold text-[#cc7e14] block">
                    {project.subtitle}
                  </span>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="border-t border-neutral-100 pt-4 space-y-2">
                    <span className="text-xs font-extrabold text-neutral-800 uppercase tracking-widest block">Project Highlights:</span>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs text-neutral-600 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#cc7e14] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── PROJECT GALLERY SECTION (WITH LIGHTBOX) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-sm px-4 py-20 sm:px-8 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Gallery
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Project Gallery
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#cc7e14] border-[#cc7e14] text-white shadow-md scale-[1.02]"
                    : "bg-white border-neutral-200 hover:border-[#ffa326] text-neutral-800 hover:bg-neutral-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-left">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(item.id)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center text-neutral-900 shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[9px] font-bold text-[#cc7e14] bg-[#ffa326]/10 border border-[#ffa326]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-neutral-900 mt-3 group-hover:text-[#cc7e14] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light mt-1 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Lightbox Modal */}
          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
              >
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="max-w-4xl w-full flex flex-col items-center">
                  <motion.img
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    src={galleryItems[lightboxIndex].img}
                    alt={galleryItems[lightboxIndex].title}
                    className="max-h-[70vh] w-auto object-contain rounded-xl border border-white/10 shadow-2xl"
                  />
                  <div className="mt-6 text-center text-white space-y-1">
                    <span className="text-xs font-bold text-[#ffa326] uppercase tracking-wider bg-[#ffa326]/10 border border-[#ffa326]/20 px-3 py-1 rounded-full">
                      {galleryItems[lightboxIndex].category}
                    </span>
                    <h3 className="text-lg font-bold pt-2">{galleryItems[lightboxIndex].title}</h3>
                    <p className="text-sm text-neutral-400 font-light">{galleryItems[lightboxIndex].desc}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      {/* ── PROJECT HIGHLIGHTS COMPARATIVE TABLE ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Highlights
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Project Highlights by Category
            </h2>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#f4f3ef] border-b border-neutral-200 text-neutral-900 font-bold">
                    <th className="px-6 py-4">Project Type</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {highlightsList.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-neutral-950">{row.type}</td>
                      <td className="px-6 py-4 text-neutral-600 font-light">{row.desc}</td>
                      <td className="px-6 py-4 font-semibold text-neutral-700">{row.loc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* ── OUR PROCESS (TIMELINE) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Process
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              How We Work With You
            </h2>
            <p className="mt-4 text-neutral-700 text-sm md:text-base leading-relaxed">
              We complete every project with care, precision, and complete transparency.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto relative">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200/50 p-6 flex flex-col justify-start text-left shadow-xs hover:shadow-md transition-shadow relative"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffa326]/10 text-[#cc7e14] mb-4 border border-[#ffa326]/20 text-xs font-bold font-mono">
                  {idx + 1}
                </div>
                <span className="text-[10px] font-bold text-[#cc7e14] uppercase tracking-wider block mb-1">
                  {step.step}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── CLIENT REVIEWS ABOUT WORK ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Customer Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              What Our Clients Say About Our Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {clientReviews.map((rev, idx) => (
              <motion.div
                key={rev.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-[#ffa326]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed font-light mb-6">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-900">{rev.author}</span>
                  <span className="text-[10px] font-bold text-[#cc7e14] bg-[#ffa326]/10 border border-[#ffa326]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {rev.city}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── SERVICE AREAS GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Coverage
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-955 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Service Areas
            </h2>
            <p className="mt-3 text-neutral-750 text-xs sm:text-sm font-light">
              We proudly serve residential, commercial, and industrial clients across all of Pinellas County.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceCities.map((city) => (
              <div
                key={city}
                className="bg-white/80 backdrop-blur-xs rounded-full border border-neutral-200/50 py-3 px-5 text-neutral-900 text-xs sm:text-sm font-semibold shadow-xs"
              >
                {city}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── BENEFITS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Why Us
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Why Choose Right Lane Handyman Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefitsList.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-[#fcfbf8] border border-neutral-200/50 rounded-2xl p-6 flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffa326]/10 text-[#cc7e14] mb-4 border border-[#ffa326]/20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-wide mb-2">{benefit.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── PREMIUM CALL TO ACTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(28,20,13,0.96), rgba(28,20,13,0.98)), url(/src/assets/wel-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img src={logo} alt="Right Lane Logo" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Start Your Project?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              Don't let home repairs or project cleanups pile up. From drywall patching and custom carpentry to property maintenance and heavy debris hauling, our licensed, insured, and bonded crew is here to help get your property back in the right lane.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-lg font-bold text-white mb-5 text-center sm:text-left tracking-wide font-sans">
                Right Lane Handyman Services, LLC
              </h3>

              <div className="grid sm:grid-cols-3 gap-5 text-[14px] font-light">
                <a href="tel:7276420201" className="flex items-center gap-2.5 hover:text-[#ffa326] transition-colors">
                  <Phone className="w-4 h-4 text-[#ffa326] shrink-0" />
                  <span>(727) 642-0201</span>
                </a>
                <a href="mailto:rightlanehandymanservice@yahoo.com" className="flex items-center gap-2.5 hover:text-[#ffa326] transition-colors">
                  <Mail className="w-4 h-4 text-[#ffa326] shrink-0" />
                  <span className="truncate">rightlanehandymanservice@yahoo.com</span>
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#ffa326] shrink-0" />
                  <span>Clearwater, FL 33756</span>
                </div>
              </div>
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-[#ffa326] mt-4 select-none italic font-serif">
              "Let us get your property back in the right lane."
            </p>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
