import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  ThumbsUp,
  Briefcase
} from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import welBg from "@/assets/wel-bg.png";
import workHero from "@/assets/welcome-pool.jpg";

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
      { title: "Our Work & Portfolio — JRM Construction, San Antonio" },
      { name: "description", content: "Explore the JRM Construction portfolio of completed home remodels, masonry hardscapes, covered patios, outdoor kitchens, and landscape designs." },
      { property: "og:title", content: "Our Work & Portfolio — JRM Construction" },
      { property: "og:description", content: "Browse featured design-build projects and landscape masterpieces in San Antonio and surrounding Texas communities." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Complete Home Remodel & Backyard Transformation",
      location: "San Antonio, TX",
      image: houseRemodeling,
      desc: "This project involved a full interior remodel, including kitchen and bathroom renovations, combined with a complete backyard transformation featuring a covered patio, outdoor kitchen, and custom landscaping. The result is a seamless indoor-outdoor living experience perfect for entertaining.",
      services: ["House Remodeling", "Covered Patio", "Outdoor Kitchen", "Hardscapes", "Softscapes"],
    },
    {
      title: "Custom Indoor Stone Fireplace & Mantel",
      location: "Boerne, TX",
      image: fireplace,
      desc: "We designed and built a floor-to-ceiling custom stone fireplace as the focal point of this living room. Each piece of natural stone was carefully selected and placed by our master masons. The project also included a custom handcrafted wooden mantel and gas insert installation.",
      services: ["Custom Fireplace", "Interior Finishing"],
    },
    {
      title: "Resort-Style Backyard & Artificial Turf Installation",
      location: "San Antonio, TX",
      image: artificialTurf,
      desc: "This family wanted a low-maintenance, beautiful backyard for their kids and pets. We installed premium artificial turf, a custom fire pit area, and integrated softscape planting beds for color and texture. The result is a lush, evergreen space that stays beautiful year-round.",
      services: ["Artificial Turf", "Hardscapes", "Softscapes", "Fire Pit Installation"],
    },
    {
      title: "Commercial New Construction & Landscaping",
      location: "San Antonio Medical Center",
      image: newConstruction,
      desc: "We managed the complete construction and landscape design for this new commercial office complex. Services included site preparation, structural construction, parking lot installation, and commercial-grade landscaping for excellent curb appeal.",
      services: ["New Construction", "Commercial Landscaping", "Hardscapes", "Softscapes"],
    },
    {
      title: "Custom Outdoor Kitchen & Covered Patio",
      location: "New Braunfels, TX",
      image: outdoorKitchens,
      desc: "This project created the ultimate outdoor entertainment space. We built a covered patio with a custom outdoor kitchen featuring a built-in grill, granite countertops, and a bar seating area. The surrounding hardscape and softscape design completed the resort-like atmosphere.",
      services: ["Outdoor Kitchen", "Covered Patio", "Hardscapes", "Softscapes"],
    },
    {
      title: "Full Landscape Design & Palm Tree Installation",
      location: "Canyon Lake, TX",
      image: softscapes,
      desc: "We designed and installed a complete tropical-themed landscape for this lakefront property. Featured elements include mature palm trees, flagstone walkways, a retaining wall, and vibrant softscape beds. The design complements the natural beauty of the canyon lake setting.",
      services: ["Softscapes", "Palm Tree Installation", "Hardscapes", "Retaining Wall"],
    },
    {
      title: "Custom Fencing & Privacy Screen",
      location: "San Antonio, TX",
      image: fencing,
      desc: "We designed and installed a custom cedar fence with decorative gates to provide privacy and security for this residential property. The fence was integrated with stone pillars and landscaping to create a cohesive, high-end look.",
      services: ["Fencing", "Hardscapes", "Softscapes"],
    },
    {
      title: "New Custom Home Construction",
      location: "Schertz, TX",
      image: statsJobsite,
      desc: "We managed the complete design and construction of this custom single-family home, from foundation to final landscaping. Every detail was thoughtfully planned and executed, resulting in a beautiful, energy-efficient home that our clients love.",
      services: ["New Construction", "Hardscapes", "Softscapes", "Interior Finishing"],
    },
  ];

  const highlights = [
    {
      category: "Remodeling & Construction",
      items: [
        "Kitchen & Bathroom Remodels",
        "Whole-Home Renovations",
        "Room Additions",
        "New Custom Home Construction",
        "Commercial Construction",
      ],
    },
    {
      category: "Outdoor Living",
      items: [
        "Custom Outdoor Kitchens",
        "Covered Patios & Pergolas",
        "Custom Indoor & Outdoor Fireplaces",
        "Fire Pits & Gathering Areas",
      ],
    },
    {
      category: "Landscape Design",
      items: [
        "Hardscape Installation (Patios, Walkways, Retaining Walls)",
        "Softscape Design & Planting",
        "Artificial Turf Installation",
        "Palm Tree & Specimen Tree Installation",
        "Custom Fencing & Privacy Screens",
      ],
    },
  ];

  const testimonials = [
    {
      text: "Robert and his team just finished a complete remodel and backyard overhaul for us. From the new kitchen to the covered patio and outdoor kitchen, the entire process was professional and seamless. His 35 years of experience showed at every turn.",
      author: "The Carter Family",
      location: "San Antonio",
    },
    {
      text: "Our backyard was just empty grass. Now, it's our favorite 'room' in the house! JRM built a stunning flagstone patio, a custom pergola, and a softscape garden that looks like it's always been there. We recommend them to everyone.",
      author: "Melissa & Ben R.",
      location: "Boerne",
    },
    {
      text: "We hired JRM Construction to handle the landscaping and hardscaping for our new office complex. They delivered a professional, durable, and aesthetically beautiful result. A reliable commercial partner.",
      author: "Ascend Properties",
      location: "San Antonio",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center px-6 py-16">
          {/* Animated Background Image */}
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${workHero})`, backgroundSize: "100% 100%" }}
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
              Our Portfolio
            </span>

            {/* Title */}
            <h1 className="text-[26px] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Transforming San Antonio Properties,<br className="hidden sm:inline" /> One Project at a Time
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              For over 35 years, JRM Construction Landscaping Design has stood as a hallmark of quality, integrity, and craftsmanship. Explore our featured projects below, each showing a unique story of collaboration, creativity, and structural excellence.
            </p>
          </motion.div>

          {/* Scroll indicators */}
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

      {/* ── FEATURED PROJECTS GRID SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16 bg-no-repeat"
          style={{
            backgroundImage: `url(${welBg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundPosition: "center"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Featured Gallery
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Completed Masterpieces
            </h2>
          </motion.div>

          {/* Symmetrical Projects Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: Math.min(idx * 0.1, 0.35), ease: "easeOut" }}
                className="group bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-xl hover:border-[#577a4c]/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
              >
                {/* Image Container with zoom scale */}
                <div className="relative overflow-hidden aspect-[16/10] bg-neutral-100 border-b border-neutral-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 z-15 inline-flex items-center gap-1 bg-white/90 backdrop-blur-md text-[#3d5636] text-[10px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm select-none">
                    <MapPin className="w-3.5 h-3.5" />
                    {p.location}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-md md:text-lg font-bold text-neutral-900 leading-snug tracking-wide group-hover:text-[#4a6e28] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Services Provided Badges */}
                  <div className="pt-4 border-t border-neutral-100">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2 select-none">
                      Services Provided
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.services.map((s) => (
                        <span
                          key={s}
                          className="bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-bold px-3 py-1 rounded-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── PORTFOLIO HIGHLIGHTS BY CATEGORY ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Service Spectrum
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Portfolio Highlights By Category
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {highlights.map((h, idx) => (
              <motion.div
                key={h.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
                className="bg-white/95 rounded-2xl border border-neutral-200/50 p-6 md:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center mb-5 select-none">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-md font-bold text-neutral-900 tracking-wide border-b border-neutral-100 pb-3 mb-4 capitalize">
                    {h.category}
                  </h3>
                  <ul className="space-y-3.5">
                    {h.items.map((item) => (
                      <li key={item} className="flex gap-2.5 items-start text-xs md:text-sm text-neutral-600 leading-normal font-light">
                        <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636] mt-0.5 select-none font-bold text-[9px]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── TESTIMONIALS SLIDER SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Feedback
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
              >
                <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed italic" style={{ fontFamily: "Georgia, serif" }}>
                  "{t.text}"
                </p>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-neutral-800">{t.author}</span>
                  <span className="text-neutral-500 font-light">{t.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── READY TO START PROJECT CTA ── */}
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
                  <span>Proudly Serving San Antonio & 80-Mile Surrounding Area</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <ThumbsUp className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Licensed · Insured · Bonded Since 1989</span>
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
                Book Free Consultation
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
