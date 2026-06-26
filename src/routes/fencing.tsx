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
  Lock,
  Eye,
  Hammer,
  Sparkles,
  Compass,
  FileText,
  Trash2,
  Shield
} from "lucide-react";

import imgFencing from "@/assets/svc-fencing.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/fencing")({
  head: () => ({
    meta: [
      { title: "Custom Fencing Services Clearwater — Right Lane Handyman Services, LLC" },
      { name: "description", content: "Secure and beautify your property with custom wood, wrought iron, composite, or vinyl fencing in Clearwater, FL. 25+ Years experience. Call (727) 642-0201." },
      { property: "og:title", content: "Custom Fencing Services in Clearwater | Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "Privacy fences, security wrought iron, modern composite solutions, and stone column gate integration." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: FencingPage,
});

function FencingPage() {
  const { t } = useTranslation();

  const fencingMaterials = [
    {
      title: "Privacy & Traditional Fencing",
      icon: Shield,
      items: [
        "Wood Fences: Classic Western Red Cedar, treated pine, or redwood. Constructed in durable board-on-board, shadowbox, or traditional pickets.",
        "Vinyl & Composite Fencing: Elegant, uniform finishes with zero painting or staining needed. Resistant to termites, splitting, and rot."
      ]
    },
    {
      title: "Security & Ornamental Fencing",
      icon: Lock,
      items: [
        "Wrought Iron & Aluminum: Premium security fences featuring powder-coated finishes, custom finials, scrollwork, and automated gate options.",
        "Chain Link (Coated & Commercial): Practical, durable layouts for commercial borders or residential containment, with optional color vinyl coatings."
      ]
    },
    {
      title: "Specialty & Hardscape Integration",
      icon: Compass,
      items: [
        "Accent & Pool Enclosures: Custom pool perimeter fencing meeting strict local code setbacks and latch heights.",
        "Masonry Columns: Integrating wood or metal fences with hand-carved stone columns, flagstone gate pillars, and retaining walls."
      ]
    }
  ];

  const fencingProcess = [
    {
      number: "01",
      title: "Site Assessment & Consultation",
      desc: "We meet on-site to review property lines, soil slope, utilities, and define your needs—privacy, security, pet safety, or pool codes—for a free consult."
    },
    {
      number: "02",
      title: "Design & Materials Selection",
      desc: "Right Lane Handyman guides you through cedar grades, iron shapes, heights, and gate locks, ensuring alignment with your home's architecture."
    },
    {
      number: "03",
      title: "Proposal & Utility Locates",
      desc: "You'll receive a detailed, fixed-price quote and timeline. We handle all permits and mark lines with Call Before You Dig (811)."
    },
    {
      number: "04",
      title: "Professional Installation",
      desc: "Our crew digs deep-set posts, pours concrete anchors, aligns lines, and secures pickets or metal rails to withstand strong Texas winds."
    },
    {
      number: "05",
      title: "Walk-Through & Cleanup",
      desc: "We test all latch mechanisms, perform a visual cleanup of soil and debris, and review the project with you to ensure absolute satisfaction."
    }
  ];

  const whyChooseUs = [
    {
      title: "Built for the Texas Climate",
      desc: "We set posts deep in concrete to withstand soil shifting and use weather-treated fasteners to prevent rust streaks and rotting."
    },
    {
      title: "Unmatched Structural Integrity",
      desc: "Deep-set concrete footings and double-reinforced gate frames prevent sagging, leaning, and alignment issues over time."
    },
    {
      title: "Holistic Property Approach",
      desc: "Unlike single-service fence crews, we integrate your fencing, custom stone columns, landscaping, and irrigation layout as one unified project."
    },
    {
      title: "Licensed & Insured Protection",
      desc: "Full general liability and worker safety coverage protects you, your neighbors, and ensures code compliance on permits."
    },
    {
      title: "25+ Years of Local Trust",
      desc: "A solid reputation for clean work sites, honest property boundary coordination, and owner-direct accountability."
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
            style={{ backgroundImage: `url(${imgFencing})` }}
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
              Custom Borders & Security
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Custom Fencing Services in Clearwater
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Define Your Space with Strength, Style & 25+ Years of Craftsmanship
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
                Boundary Artistry
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Define Your Space with Strength & Elegance
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#cc7e14] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Your property's perimeter is its first line of defense, a statement of privacy, and a frame for its beauty. At Right Lane Handyman Services, LLC, we build custom fencing solutions that do more than mark a boundary—they enhance security, increase privacy, and elevate your property's curb appeal with enduring quality.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                With over 25+ Years of experience in Clearwater, the Right Lane team understands that a great fence requires the perfect balance of aesthetic design, structural integrity, and practical function.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                From classic wood privacy fences to elegant ornamental iron and low-maintenance modern composites, we provide tailored solutions for both residential and commercial properties. As a fully licensed, insured, and bonded contractor, we stand behind every post we set, ensuring your fence is built to last and installed with professional precision.
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
                src={imgFencing}
                alt="Premium vertical cedar board fence installed by Right Lane"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/3]"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#cc7e14]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years Fencing</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── MATERIAL OPTIONS & STYLES GRID ── */}
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
              Materials & Styles
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Custom Fencing Capabilities
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Selecting raw materials designed to withstand local elements and match your home's aesthetics.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {fencingMaterials.map((pillar, idx) => {
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
              Structural Foundation
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Right Lane Fencing Process
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Building straight, strong fences starts with setting solid concrete anchors.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {fencingProcess.map((step, idx) => (
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
                Built to Last
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose Right Lane for Your Clearwater Fence?
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                A well-built fence is a long-term investment in your property's value, security, and enjoyment. Partner with a company that builds with the same care you would.
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
              Secure Your Perimeter with Confidence
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Contact us for a free, on-site estimate and design consultation for your new fence.
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
                  <span>Serving Clearwater, St. Petersburg, Largo, Pinellas Park & surrounding areas</span>
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
