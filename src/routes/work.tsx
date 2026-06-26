import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ThumbsUp,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import workHero from "@/assets/welcome-pool.jpg";
import { getGalleryPhotos } from "@/lib/leads-store";

// Project local images from assets folder
import houseRemodeling from "@/assets/svc-house-remodeling.jpg";
import fireplace from "@/assets/svc-fireplace.jpg";
import artificialTurf from "@/assets/svc-artificial-turf.jpg";
import newConstruction from "@/assets/svc-new-construction.jpg";
import outdoorKitchens from "@/assets/svc-outdoor-kitchens.jpg";
import softscapes from "@/assets/svc-softscapes.jpg";
import fencing from "@/assets/svc-fencing.jpg";
import statsJobsite from "@/assets/stats-jobsite.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work & Portfolio — Right Lane Handyman Services, LLC, Clearwater" },
      { name: "description", content: "Explore the Right Lane Handyman Services, LLC portfolio of completed home remodels, masonry hardscapes, covered patios, outdoor kitchens, and landscape designs." },
      { property: "og:title", content: "Our Work & Portfolio — Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "Browse featured design-build projects and landscape masterpieces in Clearwater and surrounding Texas communities." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: OurWorkPage,
});

const CATEGORIES = ["All", "Remodeling", "Outdoor Living", "Landscaping", "Construction", "Fencing"];

const STATIC_PROJECTS = [
  {
    title: "Complete Home Remodel & Backyard Transformation",
    location: "Clearwater, FL",
    image: houseRemodeling,
    category: "Remodeling",
    services: ["House Remodeling", "Covered Patio", "Outdoor Kitchen", "Hardscapes", "Softscapes"],
  },
  {
    title: "Custom Indoor Stone Fireplace & Mantel",
    location: "Largo, TX",
    image: fireplace,
    category: "Outdoor Living",
    services: ["Custom Fireplace", "Interior Finishing"],
  },
  {
    title: "Resort-Style Backyard & Artificial Turf",
    location: "Clearwater, FL",
    image: artificialTurf,
    category: "Landscaping",
    services: ["Artificial Turf", "Hardscapes", "Softscapes", "Fire Pit Installation"],
  },
  {
    title: "Commercial New Construction & Landscaping",
    location: "Clearwater Medical Center",
    image: newConstruction,
    category: "Construction",
    services: ["New Construction", "Commercial Landscaping", "Hardscapes", "Softscapes"],
  },
  {
    title: "Custom Outdoor Kitchen & Covered Patio",
    location: "St. Petersburg, TX",
    image: outdoorKitchens,
    category: "Outdoor Living",
    services: ["Outdoor Kitchen", "Covered Patio", "Hardscapes", "Softscapes"],
  },
  {
    title: "Full Landscape Design & Palm Tree Installation",
    location: "Tarpon Springs, TX",
    image: softscapes,
    category: "Landscaping",
    services: ["Softscapes", "Palm Tree Installation", "Hardscapes", "Retaining Wall"],
  },
  {
    title: "Custom Fencing & Privacy Screen",
    location: "Clearwater, FL",
    image: fencing,
    category: "Fencing",
    services: ["Fencing", "Hardscapes", "Softscapes"],
  },
  {
    title: "New Custom Home Construction",
    location: "Schertz, TX",
    image: statsJobsite,
    category: "Construction",
    services: ["New Construction", "Hardscapes", "Softscapes", "Interior Finishing"],
  },
];

function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const photos = await getGalleryPhotos();
        if (photos && photos.length > 0) {
          const mapped = photos.map((photo, index) => {
            const url = photo.url.toLowerCase();
            let category = "Outdoor Living";
            let title = "Right Lane Custom Craftsmanship";
            let services = ["Design-Build", "Custom Masonry"];

            // Infer category and details based on file name patterns
            if (url.includes("kitchen")) {
              category = "Outdoor Living";
              title = "Custom Outdoor Kitchen & Grill Station";
              services = ["Outdoor Kitchen", "Granite Countertops", "Hardscapes"];
            } else if (url.includes("pavilion")) {
              category = "Outdoor Living";
              title = "Rustic Covered Pavilion & Pergola";
              services = ["Covered Patio", "Cedar Pergola", "Carpentry"];
            } else if (url.includes("pool")) {
              category = "Outdoor Living";
              title = "Resort-Style Pool Deck & Masonry";
              services = ["Pool Deck", "Flagstone Coping", "Hardscapes"];
            } else if (url.includes("patio")) {
              category = "Outdoor Living";
              title = "Premium Flagstone Patio Extension";
              services = ["Flagstone Patio", "Hardscapes", "Outdoor Living"];
            } else if (url.includes("fireplace")) {
              category = "Outdoor Living";
              title = "Custom Floor-to-Ceiling Stone Fireplace";
              services = ["Masonry Fireplace", "Stone Accent Wall", "Hardscapes"];
            } else if (url.includes("turf")) {
              category = "Landscaping";
              title = "Premium Artificial Turf Installation";
              services = ["Artificial Turf", "Soil Preparation", "Drainage System"];
            } else if (url.includes("softscapes")) {
              category = "Landscaping";
              title = "Native Texas Planting & Softscape Design";
              services = ["Softscapes", "Drip Irrigation", "Planting Beds"];
            } else if (url.includes("hardscapes")) {
              category = "Landscaping";
              title = "Limestone Retaining Wall & Steps";
              services = ["Retaining Wall", "Limestone Steps", "Hardscapes"];
            } else if (url.includes("fence") || url.includes("fencing")) {
              category = "Fencing";
              title = "Horizontal Cedar Privacy Fence";
              services = ["Cedar Fencing", "Steel Posts", "Privacy Screen"];
            } else if (url.includes("construction")) {
              category = "Construction";
              title = "New Custom Home Construction";
              services = ["New Construction", "Framing", "Foundation Work"];
            } else if (url.includes("jobsite")) {
              category = "Construction";
              title = "Custom Structural Framing Work";
              services = ["Structural Framing", "Framing Inspection", "Construction"];
            } else if (url.includes("remodeling")) {
              category = "Remodeling";
              title = "Complete Kitchen & Bath Home Renovation";
              services = ["House Remodeling", "Custom Cabinetry", "Tile Backsplash"];
            }

            // Distribute locations based on index
            const locations = [
              "Clearwater, FL",
              "Largo, TX",
              "St. Petersburg, TX",
              "Pinellas Park, TX",
              "Bulverde, TX",
              "Schertz, TX"
            ];
            const location = locations[index % locations.length];

            return {
              title,
              location,
              image: photo.url,
              category,
              services
            };
          });
          setProjects(mapped);
        } else {
          setProjects(STATIC_PROJECTS);
        }
      } catch (err) {
        console.error("Failed to fetch gallery for work page:", err);
        setProjects(STATIC_PROJECTS);
      }
    };
    loadGallery();
  }, []);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goNext, goPrev]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
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
              Our Portfolio
            </span>
            <h1 className="text-[26px] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Transforming Clearwater Properties,<br className="hidden sm:inline" /> One Project at a Time
            </h1>
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              For over 25+ Years, Right Lane Handyman Services, LLC has stood as a hallmark of quality, integrity, and craftsmanship. Click any project to explore it in full detail.
            </p>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <span className="text-[9px] font-bold text-white uppercase tracking-widest select-none">Scroll Down</span>
            <div className="w-[1.5px] h-10 bg-white/20 relative rounded-full overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/3 bg-[#ffa326] rounded-full"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── GALLERY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-16 md:px-12 lg:px-16"
          style={{
            backgroundImage: `url(${welBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Featured Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Our Completed Masterpieces
            </h2>
            <p className="mt-3 text-sm text-neutral-500 font-light leading-relaxed">
              Click any photo to view it full screen. Use arrow keys or swipe to navigate.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#ffa326] text-white border-[#ffa326] shadow-md"
                    : "bg-white/80 text-neutral-600 border-neutral-200 hover:border-[#ffa326] hover:text-[#ffa326]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 4-Column Photo Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, idx) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                  className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 bg-neutral-200 aspect-[4/3]"
                  onClick={() => openLightbox(idx)}
                >
                  {/* Image */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-[11px] font-bold leading-snug line-clamp-2 mb-1">{p.title}</p>
                        <div className="flex items-center gap-1 text-white/70 text-[10px]">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>{p.location}</span>
                        </div>
                      </div>
                      <div className="shrink-0 ml-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    {/* Category pill */}
                    <span className="absolute top-3 right-3 bg-[#ffa326]/90 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>

                  {/* Always visible location for mobile */}
                  <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 bg-white/90 backdrop-blur-md text-[#cc7e14] text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider shadow-sm select-none group-hover:opacity-0 transition-opacity duration-200">
                    <MapPin className="w-2.5 h-2.5" />
                    {p.location}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-neutral-400 text-sm">
              No projects in this category yet. Check back soon!
            </div>
          )}
        </section>
      </div>

      {/* ── CTA SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img src={logo} alt="Right Lane" className="h-14 w-auto object-contain mb-8 filter brightness-110" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Start Your Project?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              Every project in our portfolio began with a conversation. Let's discuss how we can bring your vision to life with the same craftsmanship, integrity, and attention to detail that defines our work.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-md font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                Contact us today to schedule your free consultation.
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
                  <span>Proudly Serving Clearwater & 80-Mile Surrounding Area</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ThumbsUp className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Licensed · Insured · Bonded with 25 years of experience</span>
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
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />

      {/* ── LIGHTBOX OVERLAY ── */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="relative z-10 flex flex-col items-center max-w-[92vw] max-h-[92vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] max-h-[75vh] w-full flex items-center justify-center bg-black">
                <img
                  src={filtered[lightboxIndex].image}
                  alt={filtered[lightboxIndex].title}
                  className="max-h-[75vh] max-w-full object-contain"
                />
                {/* Image counter */}
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-[#ffa326]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {filtered[lightboxIndex].category}
                </span>
              </div>

              {/* Info bar */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full px-1">
                <div>
                  <h3 className="text-white text-sm md:text-base font-bold leading-snug">
                    {filtered[lightboxIndex].title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-neutral-400 text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{filtered[lightboxIndex].location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {filtered[lightboxIndex].services.map((s) => (
                    <span key={s} className="bg-white/10 border border-white/15 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 md:left-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
