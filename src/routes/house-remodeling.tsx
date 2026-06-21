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
  Hammer,
  Utensils,
  Droplet,
  PlusSquare,
  Sparkles,
  Home,
  MessageSquare,
  ClipboardList,
  Layers,
  Wrench
} from "lucide-react";

import imgRemodeling from "@/assets/svc-house-remodeling.jpg";
import welBg from "@/assets/wel-bg.png";
import logo from "@/assets/jrm-logo.png";

export const Route = createFileRoute("/house-remodeling")({
  head: () => ({
    meta: [
      { title: "House Remodeling San Antonio | Kitchen & Bathroom Renovations | JRM Construction" },
      { name: "description", content: "Transform your home with expert remodeling services in San Antonio. 35 years of experience in kitchen remodels, bathroom renovations & whole-home renovations. Licensed & insured. Free consultation. Call (210) 429-5526." },
      { property: "og:title", content: "House Remodeling San Antonio | Kitchen & Bathroom Renovations | JRM Construction" },
      { property: "og:description", content: "Transform your home with expert remodeling services in San Antonio. 35 years of experience in kitchen remodels, bathroom renovations & whole-home renovations. Licensed & insured. Free consultation. Call (210) 429-5526." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: HouseRemodelingPage,
});

function HouseRemodelingPage() {
  const { t } = useTranslation();

  const remodelingProcess = [
    {
      number: "01",
      title: "Vision & Planning",
      subtitle: "Your Free Consultation",
      icon: MessageSquare,
      desc: "We start by listening. During our detailed, no-obligation consultation, we discuss your goals, budget, and vision. Robert's 35 years of experience allow him to provide insightful, practical ideas that align with your lifestyle."
    },
    {
      number: "02",
      title: "Proposal & Design",
      subtitle: "Transparency First",
      icon: ClipboardList,
      desc: "You'll receive a clear, detailed estimate and timeline. We handle all design coordination, material selection, and permitting, keeping you informed every step of the way."
    },
    {
      number: "03",
      title: "Meticulous Construction",
      subtitle: "Craftsmanship & Quality",
      icon: Hammer,
      desc: "Our skilled craftsmen treat your home with respect, maintaining a clean and safe worksite. We use quality materials and proven techniques to ensure structural integrity and aesthetic excellence."
    },
    {
      number: "04",
      title: "Final Review",
      subtitle: "Your Complete Satisfaction",
      icon: Sparkles,
      desc: "We aren't finished until you are thrilled. We conduct a thorough final walk-through to ensure every detail meets our high standards and your complete satisfaction."
    }
  ];

  const expertiseList = [
    {
      title: "Kitchen Remodels",
      icon: Utensils,
      desc: "Create a functional, beautiful heart for your home. We custom build cabinets, install premium countertops, custom backsplashes, and high-end lighting."
    },
    {
      title: "Bathroom Renovations",
      icon: Droplet,
      desc: "Design a spa-like retreat with modern fixtures, custom stone showers, glass enclosures, and premium vanity installations."
    },
    {
      title: "Room Additions & Expansions",
      icon: PlusSquare,
      desc: "Gain the extra space your family needs. We design and construct structurally sound, seamless additions that look like part of the original home."
    },
    {
      title: "Whole-Home Renovations",
      icon: Home,
      desc: "Update the flow, style, and utility of your entire house. We coordinates layout updates, flooring, custom framing, and drywall."
    },
    {
      title: "Interior & Exterior Repairs",
      icon: Wrench,
      desc: "Restore and protect your home's structural integrity, siding, trim, custom masonry, and drywall surfaces from deterioration."
    },
    {
      title: "Custom Interiors",
      icon: Sparkles,
      desc: "Add bespoke character to your living areas with custom fireplaces, mantels, built-in shelving, crown molding, and specialty trim."
    }
  ];

  const whyChooseUs = [
    {
      title: "Proven Local Experience",
      desc: "35 years of successfully navigating San Antonio's unique soil, building codes, and climate considerations."
    },
    {
      title: "Licensed & Insured Protection",
      desc: "Total financial security, liability coverage, and workers' compensation for your absolute peace of mind."
    },
    {
      title: "Owner-Direct Communication",
      desc: "Robert Thompson maintains active day-to-day project involvement, providing you with direct updates and clear answers."
    },
    {
      title: "Seamless Indoor/Outdoor Flow",
      desc: "Our combined design expertise connects your remodeled interior rooms beautifully with new covered patios, kitchens, and yards."
    },
    {
      title: "Built to Last",
      desc: "We prioritize structural integrity and commercial-grade materials to ensure your remodel looks beautiful for decades to come."
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
            style={{ backgroundImage: `url(${imgRemodeling})` }}
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
              Custom Home Craftsmanship
            </span>

            {/* Title */}
            <h1 
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              House Remodeling Services in San Antonio
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              Transform Your Home with 35 Years of Expert Craftsmanship
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
                Home Transformation
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Is Your San Antonio Home Ready for a New Chapter?
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#3d5636] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                At JRM Construction Landscaping Design, we specialize in full-service house remodeling that seamlessly blends innovative design with time-tested construction integrity. For over three decades, owner Robert Thompson has led our team in transforming outdated, inefficient, or damaged spaces into beautiful, functional areas that enhance your daily life and increase your property's value.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                We understand that remodeling your home is a significant investment of trust and resources. As a fully licensed, insured, and bonded contractor, we protect that investment at every stage. From the initial free consultation to the final walk-through, you benefit from Robert's direct oversight and our team's hands-on experience with every aspect of residential construction.
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
                src={imgRemodeling}
                alt="Beautiful home kitchen interior renovation by JRM"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/3]"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#3d5636]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years of Trust</span>
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
            <span className="inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Our Method
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Comprehensive Remodeling Approach
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              We handle your project from concept to completion, ensuring a seamless, stress-free experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {remodelingProcess.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-[#577a4c]/20">
                        {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#577a4c]/10 text-[#3d5636] flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-[15px] font-bold text-neutral-900 tracking-wide">
                      {step.title}
                    </h3>
                    <h4 className="text-[10px] font-bold text-[#577a4c] uppercase tracking-wider mb-2">
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

      {/* ── REMODELING EXPERTISE AREAS SECTION ── */}
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
              Specialties
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our House Remodeling Expertise
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed font-light">
              Crafting premium solutions for your interior living spaces and home structural layout.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {expertiseList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-xl hover:scale-[1.01] hover:border-[#577a4c]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 flex items-center justify-center mb-5">
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
                The JRM Standard
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Choose JRM for Your San Antonio Remodel?
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                A home remodel is a major journey. We stand by you as a trusted local contractor, ensuring every single layout addition, wall refacing, or custom cabinet installation holds a lifetime value.
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
              Ready to Reimagine Your Home?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl">
              A successful remodel begins with the right partner. Let's discuss how we can bring new life, function, and value to your San Antonio home.
            </p>

            <p className="text-md font-bold text-[#a5b89d] mb-10 tracking-wide uppercase">
              Contact us today to schedule your free, on-site consultation.
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
                  <span>Serving San Antonio, Boerne, New Braunfels & surrounding 80-mile area</span>
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
