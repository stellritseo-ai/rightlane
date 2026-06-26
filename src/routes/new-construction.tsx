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
  Building,
  Hammer,
  Sparkles,
  Home,
  FileText,
  Eye,
  Compass,
  Briefcase,
  Users
} from "lucide-react";

import imgConstruction from "@/assets/svc-new-construction.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/new-construction")({
  head: () => ({
    meta: [
      { title: "New Construction Clearwater | Custom Home Builder | Right Lane Handyman Services, LLC" },
      { name: "description", content: "Build your dream home or commercial property with Clearwater's trusted new construction experts. 25+ Years of experience. Licensed, insured & bonded. Free consultation. Call (727) 642-0201." },
      { property: "og:title", content: "New Construction Clearwater | Custom Home Builder | Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "Build your dream home or commercial property with Clearwater's trusted new construction experts. 25+ Years of experience. Licensed, insured & bonded. Free consultation. Call (727) 642-0201." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: NewConstructionPage,
});

function NewConstructionPage() {
  const { t } = useTranslation();

  const constructionProcess = [
    {
      number: "01",
      title: "Discovery & Feasibility",
      subtitle: "Initial Consultation",
      icon: Eye,
      desc: "We begin with a detailed, free consultation to understand your goals, budget, and site potential. Ronnie's decades of local experience are invaluable in assessing practical considerations and envisioning possibilities."
    },
    {
      number: "02",
      title: "Design & Planning",
      subtitle: "Coordination & Logistics",
      icon: Compass,
      desc: "We work with you and your architect (or can recommend trusted partners) to refine plans, select materials, and ensure the design is both beautiful and buildable. We handle all permitting and pre-construction logistics."
    },
    {
      number: "03",
      title: "Proposal & Timeline",
      subtitle: "Transparent Contracting",
      icon: FileText,
      desc: "You will receive a clear, itemized proposal and a realistic timeline. We believe in upfront honesty, with no hidden costs or surprise fees."
    },
    {
      number: "04",
      title: "Meticulous Construction",
      subtitle: "Active Project Management",
      icon: Hammer,
      desc: "Our skilled crew executes every phase with care—from foundation and framing to interior finishes and exterior landscaping. Ronnie provides direct, on-site supervision to ensure impeccable quality control and adherence to schedule."
    },
    {
      number: "05",
      title: "Inspection & Handover",
      subtitle: "Final Delivery",
      icon: Sparkles,
      desc: "We complete a thorough final walk-through with you, ensuring every detail is perfect. We provide all warranties and documentation, giving you complete confidence in your new property."
    }
  ];

  const capabilities = [
    {
      title: "Custom Single-Family Homes",
      icon: Home,
      desc: "Designed and built for your unique lifestyle. We guide you from empty lot to custom home masterpiece."
    },
    {
      title: "Residential Additions & Guest Houses",
      icon: PlusSquareComponent,
      desc: "Thoughtfully integrated new structures, in-law suites, pool houses, and guest quarters."
    },
    {
      title: "Commercial & Retail Build-Outs",
      icon: Building,
      desc: "Functional, premium commercial spaces designed to promote business flow and long-term success."
    },
    {
      title: "Foundation & Framing",
      icon: Hammer,
      desc: "The critical, unseen structural backbone. We engineer and build for permanent durability."
    },
    {
      title: "Integrated Design-Build",
      icon: Compass,
      desc: "Creating absolute harmony between indoor floorplans and outdoor elements like custom patios and landscapes from day one."
    },
    {
      title: "Full Turnkey Service",
      icon: Sparkles,
      desc: "We deliver full project management including final hardscape, softscape, driveways, and detail cleanup."
    }
  ];

  const advantages = [
    {
      title: "End-to-End Expertise",
      desc: "25+ Years of managing all phases of construction, preventing costly errors, ordering lags, and timeline delays."
    },
    {
      title: "Local Knowledge, Global Standards",
      desc: "Deep understanding of Clearwater soil conditions, shifting foundations, climate codes, and local suppliers."
    },
    {
      title: "Seamless Indoor/Outdoor Integration",
      desc: "Unlike standard builders, we construct your home structure and its surrounding custom yards, patios, and kitchens as one unified project."
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Your ultimate financial protection. We guarantee safety protocols, insurance coverage, and code compliance."
    },
    {
      title: "Personalized Partnership",
      desc: "You collaborate directly with the Right Lane team. This guarantees accountability, clear lines of communication, and custom results."
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
            style={{ backgroundImage: `url(${imgConstruction})` }}
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
              Premium New Construction
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              New Construction Services in Clearwater
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Build Your Vision from the Ground Up with 25+ Years of Master Craftsmanship
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
                Ground Up Development
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Building Masterpieces with Absolute Structural Integrity
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#cc7e14] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                The opportunity to build a new home or commercial space is a milestone moment—a chance to create an environment perfectly tailored to your vision, needs, and dreams. At Right Lane Handyman Services, LLC, we partner with you to turn that vision into a enduring reality.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                With over 25+ Years of experience as a licensed, insured, and bonded contractor, the Right Lane team provides the foundational expertise, integrity, and personalized attention required to guide your new construction project from an empty lot to your dream property.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We specialize in constructing high-quality, custom spaces that are built to last, blending structural excellence with the creative design sensibility that defines our work. Whether you're planning a custom family home, a multi-unit residential property, or a commercial building, we manage the entire process with precision and transparency.
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
                src={imgConstruction}
                alt="New construction framing and concrete build site by Right Lane"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/3]"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#cc7e14]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years of Quality</span>
              </div>
            </motion.div>
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
              Single Source Responsibility
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Comprehensive New Construction Process
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              From the first sketch to the final key, we manage every detail.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {constructionProcess.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-white rounded-xl border border-neutral-200/50 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#ffa326]/20">
                        {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#ffa326]/10 text-[#cc7e14] flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-[14px] font-bold text-neutral-900 tracking-wide">
                      {step.title}
                    </h3>
                    <h4 className="text-[9px] font-bold text-[#ffa326] uppercase tracking-wider mb-2">
                      {step.subtitle}
                    </h4>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── NEW CONSTRUCTION CAPABILITIES SECTION ── */}
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
              Capabilities
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our New Construction Scope
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Providing turnkey design-build excellence for residential and commercial sites.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {capabilities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-xl hover:scale-[1.01] hover:border-[#ffa326]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#ffa326]/10 text-[#cc7e14] border border-[#ffa326]/20 flex items-center justify-center mb-5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-md font-bold text-neutral-900 mb-2 tracking-wide capitalize">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── THE Right Lane ADVANTAGE SECTION ── */}
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
                Build With Confidence
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                The Right Lane Handyman Services, LLC Advantage
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Building new is a significant journey. With Right Lane Handyman Services, LLC, you gain a seasoned guide dedicated to building your trust as meticulously as we build your property.
              </p>
            </motion.div>

            {/* Right Column Grid */}
            <div className="grid gap-6">
              {advantages.map((item, idx) => (
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
              Let's Lay the Foundation for Your Future
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              Start your building journey with a clear plan. Contact us for a free, in-depth consultation.
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
                  <span>Serving Clearwater, Largo, St. Petersburg, Pinellas Park & surrounding Clearwater area</span>
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

// Inline fallback for layout rendering
function PlusSquareComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}
