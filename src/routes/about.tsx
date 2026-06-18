import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  Construction,
  Layers,
  Utensils,
  Trees,
  Flame,
  Wrench,
  ChevronRight
} from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import welBg from "@/assets/wel-bg.png";
import welImg from "@/assets/wel-img.webp";
import heroImage from "@/assets/hero-patio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JRM Construction Landscape Design — San Antonio, TX" },
      { name: "description", content: "Learn about JRM Construction Landscape Design, our 35 years of experience in San Antonio, TX, and our commitment to quality." },
      { property: "og:title", content: "About JRM Construction Landscape Design" },
      { property: "og:description", content: "Premier landscaping and construction services in San Antonio, TX with 35 years of experience." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();

  const expertiseItems = [
    {
      title: "House Remodeling & New Construction",
      desc: "Complete home renovations, kitchen updates, custom builds, and extensions executed to perfection.",
      icon: Construction,
    },
    {
      title: "Custom Hardscapes & Flagstone Patios",
      desc: "Exquisite stone pathways, brick retaining walls, custom flagstone work, and premium concrete solutions.",
      icon: Layers,
    },
    {
      title: "Outdoor Kitchens & Covered Patios",
      desc: "Gourmet outdoor entertainment areas, built-in BBQ grills, pavilions, and robust patio covers.",
      icon: Utensils,
    },
    {
      title: "Creative Landscape Design & Softscapes",
      desc: "Lush garden layouts, strategic sod installation, palm tree styling, and native plant selections.",
      icon: Trees,
    },
    {
      title: "Artificial Turf Solutions & Fencing",
      desc: "Low-maintenance putting greens, pristine artificial turf, and secure wood or iron perimeter fencing.",
      icon: Wrench,
    },
    {
      title: "Custom Indoor & Outdoor Fireplaces",
      desc: "Elegant and safe stone fireplaces, custom mantels, and cozy outdoor fire pit structures.",
      icon: Flame,
    },
  ];

  const benefits = [
    {
      title: "35 Years of Local Experience",
      desc: "Deep-rooted knowledge of San Antonio architectural styles, local building codes, soil requirements, and climate conditions.",
    },
    {
      title: "Owner-Led Oversight",
      desc: "Robert Thompson is directly involved in the planning and execution of every project, ensuring superior quality control and attention to detail.",
    },
    {
      title: "Full-Service Design & Build",
      desc: "We manage your entire project from initial creative blueprint concepts, permits, and construction, to the final site cleanup.",
    },
    {
      title: "Commitment to Lasting Quality",
      desc: "We source premium commercial-grade materials and employ time-tested construction methods to ensure your investment stands the test of time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── CINEMATIC HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center px-6 py-16">
          {/* Animated Zooming Background Image */}
          <motion.div
            initial={{ scale: 1.08, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          {/* Dark Forest overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111a0a]/92 via-[#111a0a]/78 to-[#111a0a]/92 z-10" />

          {/* Cinematic Content container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              About JRM Construction
            </span>

            {/* Title */}
            <h1 className="text-[26px] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Building San Antonio's Trust,<br className="hidden sm:inline" /> One Project at a Time
            </h1>
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
                Our Heritage
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                About JRM Construction Landscaping Design
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#3d5636] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                For over 35 years, JRM Construction Landscaping Design has stood as a pillar of quality, integrity, and craftsmanship in the San Antonio community. Founded and led by Robert Thompson, our family-owned and operated business was built on a simple, unwavering principle: to transform our clients' visions into enduring realities with unmatched reliability and skill.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                What began as a dedicated landscaping operation has, through three decades of trusted service, grown into a full-service design and construction firm. We specialize in seamlessly blending indoor remodeling with outdoor living spaces, creating cohesive environments that enhance both the beauty and functionality of your property.
              </p>
            </motion.div>

            {/* Right Visual Image with double frame offset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[440px] mx-auto flex items-center justify-center py-6"
            >
              {/* Offset border frame behind image */}
              <div className="absolute top-2 left-2 right-[-4px] bottom-[-4px] sm:right-[-8px] sm:bottom-[-8px] border-2 border-[#577a4c]/20 rounded-2xl z-0 select-none pointer-events-none" />

              <img
                src={welImg}
                alt="Beautiful JRM outdoor transformation project"
                className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-xl border border-neutral-200/50"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#3d5636]">35+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years of Trust</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── PILLARS OF INTEGRITY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Foundation
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Integrity in Every Detail
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Licensed, Insured & Bonded */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="group relative bg-white/85 backdrop-blur-md border border-neutral-200/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-2xl hover:border-[#577a4c]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#577a4c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-14 h-14 rounded-full bg-[#577a4c]/10 border border-[#577a4c]/20 flex items-center justify-center mb-6 text-[#3d5636] group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3 capitalize tracking-wide">
                Licensed, Insured & Bonded
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                Your peace of mind is the cornerstone of our business. That is why we are a fully licensed, insured, and bonded Texas contractor. This commitment protects you and your investment, ensuring every project meets the highest standards of safety and professionalism.
              </p>
            </motion.div>

            {/* Card 2: Consultation & Honesty */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="group relative bg-white/85 backdrop-blur-md border border-neutral-200/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-2xl hover:border-[#577a4c]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#577a4c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 rounded-full bg-[#577a4c]/10 border border-[#577a4c]/20 flex items-center justify-center mb-6 text-[#3d5636] group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3 capitalize tracking-wide">
                Transparency & Clear Communication
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                We believe in clear communication and transparency from the very first conversation. That’s why every project begins with a comprehensive, free consultation. We take the time to listen, understand your goals, and provide honest, upfront assessments.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── EXPERTISE grid SECTION ── */}
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
              Our Expertise
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Where Vision Meets Craftsmanship
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base">
              Our extensive experience encompasses both residential and commercial projects across an 80-mile radius around San Antonio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseItems.map((item, idx) => {
              const IconComp = item.icon;
              const doubleDigit = String(idx + 1).padStart(2, "0");
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="group relative bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-[#577a4c]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Floating Giant Numerals background */}
                  <span className="absolute right-4 top-2 text-6xl font-black text-neutral-100/60 group-hover:text-[#577a4c]/5 select-none pointer-events-none transition-colors duration-300">
                    {doubleDigit}
                  </span>

                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 flex items-center justify-center mb-5 group-hover:bg-[#577a4c]/20 transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-md font-bold text-neutral-900 mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-bold text-[#4a6e28] gap-1 group/btn cursor-pointer hover:opacity-85 select-none w-fit relative z-10">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── MILESTONES TIMELINE SECTION ── */}
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
              Our Journey
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our History & Evolution
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed">
              For over three decades, JRM has grown through excellence, building our legacy one backyard and home at a time in San Antonio.
            </p>
          </motion.div>

          {/* Timeline component */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-[29px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-200/80 -translate-x-[50%]" />

            {/* Timeline Item 1 */}
            <div className="relative flex flex-col sm:flex-row items-stretch gap-8 sm:gap-0 mb-12 sm:mb-16">
              <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:pr-12 text-left sm:text-right flex flex-col justify-center items-start sm:items-end">
                <span className="text-sm font-black text-[#3d5636] bg-[#577a4c]/10 border border-[#577a4c]/20 px-3 py-1 rounded-full mb-2">1990</span>
                <h3 className="text-lg font-bold text-neutral-900">Founding Roots</h3>
                <p className="mt-2 text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                  Robert Thompson establishes a small, dedicated landscaping team in San Antonio, focusing on premium garden care and customized residential design.
                </p>
              </div>
              <div className="absolute left-[29px] sm:left-1/2 h-8 w-8 rounded-full border-4 border-white bg-[#577a4c] shadow-md -translate-x-[50%] flex items-center justify-center top-1 sm:top-1/2 sm:-translate-y-1/2 z-10" />
              <div className="hidden sm:block w-full sm:w-1/2" />
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex flex-col sm:flex-row items-stretch gap-8 sm:gap-0 mb-12 sm:mb-16">
              <div className="hidden sm:block w-full sm:w-1/2" />
              <div className="absolute left-[29px] sm:left-1/2 h-8 w-8 rounded-full border-4 border-white bg-[#577a4c] shadow-md -translate-x-[50%] flex items-center justify-center top-1 sm:top-1/2 sm:-translate-y-1/2 z-10" />
              <div className="w-full sm:w-1/2 pl-16 sm:pl-12 text-left flex flex-col justify-center items-start">
                <span className="text-sm font-black text-[#3d5636] bg-[#577a4c]/10 border border-[#577a4c]/20 px-3 py-1 rounded-full mb-2">2005</span>
                <h3 className="text-lg font-bold text-neutral-900">Expanding to Hardscapes</h3>
                <p className="mt-2 text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                  Through three decades of trusted service, the team transitions into custom masonry, brickwork, paving, covered patios, and complex flagstone installation.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex flex-col sm:flex-row items-stretch gap-8 sm:gap-0 mb-12 sm:mb-16">
              <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:pr-12 text-left sm:text-right flex flex-col justify-center items-start sm:items-end">
                <span className="text-sm font-black text-[#3d5636] bg-[#577a4c]/10 border border-[#577a4c]/20 px-3 py-1 rounded-full mb-2">2015</span>
                <h3 className="text-lg font-bold text-neutral-900">Full Design-Build Renovation</h3>
                <p className="mt-2 text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                  JRM integrates full-scale interior home remodeling and custom outdoor living creations under one roof, establishing full design-build capability.
                </p>
              </div>
              <div className="absolute left-[29px] sm:left-1/2 h-8 w-8 rounded-full border-4 border-white bg-[#577a4c] shadow-md -translate-x-[50%] flex items-center justify-center top-1 sm:top-1/2 sm:-translate-y-1/2 z-10" />
              <div className="hidden sm:block w-full sm:w-1/2" />
            </div>

            {/* Timeline Item 4 */}
            <div className="relative flex flex-col sm:flex-row items-stretch gap-8 sm:gap-0">
              <div className="hidden sm:block w-full sm:w-1/2" />
              <div className="absolute left-[29px] sm:left-1/2 h-8 w-8 rounded-full border-4 border-white bg-[#577a4c] shadow-md -translate-x-[50%] flex items-center justify-center top-1 sm:top-1/2 sm:-translate-y-1/2 z-10" />
              <div className="w-full sm:w-1/2 pl-16 sm:pl-12 text-left flex flex-col justify-center items-start">
                <span className="text-sm font-black text-[#3d5636] bg-[#577a4c]/10 border border-[#577a4c]/20 px-3 py-1 rounded-full mb-2">Present</span>
                <h3 className="text-lg font-bold text-neutral-900">San Antonio's Trusted Team</h3>
                <p className="mt-2 text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                  Now celebrating over 35 years of trusted craftsmanship, owner Robert Thompson maintains active oversight on every single premium project we start.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── FOUNDERS & PROFILE SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-[#2d3f26] border border-[#23321e]/30 text-white rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Leadership
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-neutral-700 text-sm md:text-base leading-relaxed">
              The direct, owner-led attention that guarantees the success and lasting value of your property.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center max-w-5xl mx-auto">
            {/* Symmetrical Profiles Grid */}
            <div className="grid sm:grid-cols-2 gap-6 w-full">
              {/* Profile Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/50 p-6 shadow-sm flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Profile avatar with initials */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#577a4c] to-[#3d5636] border-4 border-white flex items-center justify-center mb-5 text-white text-xl font-bold shadow-md select-none group-hover:scale-105 transition-transform duration-300">
                  RT
                </div>
                <h3 className="text-md font-bold text-neutral-900 tracking-wide">Robert Thompson</h3>
                <span className="text-[11px] font-extrabold text-neutral-500 uppercase tracking-widest leading-none mt-1">Principal & Consultant</span>
                <p className="mt-4 text-xs text-neutral-600 font-light leading-relaxed">
                  Founder with 35+ years of active field oversight, ensuring every project holds a lasting lifetime value.
                </p>
              </motion.div>

              {/* Profile Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/50 p-6 shadow-sm flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Profile avatar with initials */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3d5636] to-[#1c140d] border-4 border-white flex items-center justify-center mb-5 text-white text-xl font-bold shadow-md select-none group-hover:scale-105 transition-transform duration-300">
                  A
                </div>
                <h3 className="text-md font-bold text-neutral-900 tracking-wide">Arturo</h3>
                <span className="text-[11px] font-extrabold text-neutral-500 uppercase tracking-widest leading-none mt-1">Lead Construction Supervisor</span>
                <p className="mt-4 text-xs text-neutral-600 font-light leading-relaxed">
                  Coordinates layout designs, scheduling, material execution, and safe on-site project supervisors.
                </p>
              </motion.div>
            </div>

            {/* Cursive Quote and Founder Statement Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#1c140d] to-[#2b2015] text-white rounded-2xl p-8 shadow-xl border border-neutral-800 flex flex-col justify-between min-h-[300px]"
            >
              <div className="space-y-4">
                <span className="text-emerald-500 text-4xl font-serif">“</span>
                <p className="text-sm font-light leading-relaxed text-neutral-200 italic" style={{ fontFamily: "Georgia, serif" }}>
                  Every brick we lay, wall we frame, or garden we style represents our name in the San Antonio community. We stand behind our work with a simple family promise: absolute honesty, transparent billing, and craftsmanship built to last.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold tracking-wide">Robert Thompson</h4>
                  <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Owner, JRM Construction</span>
                </div>
                {/* Simulated signature using Georgia italic styling */}
                <span className="text-2xl text-[#a5b89d] font-normal italic select-none" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  R. Thompson
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── WHY JRM COMPONENT ── */}
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
                Why Choose Us
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Why Property Owners Choose JRM
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Whether you need 24/7 emergency service or are planning a dream renovation, our skilled team brings the same level of dedication, precision, and hands-on expertise that owner Robert Thompson has personally guaranteed since day one.
              </p>
            </motion.div>

            {/* Right Column Grid */}
            <div className="grid gap-6">
              {benefits.map((b, idx) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                  className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 select-none">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-neutral-900 tracking-wide">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            {/* Logo */}
            <img src={logo} alt="JRM" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Let's Build Something Remarkable Together
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              At JRM Construction, we don't just build patios and remodel kitchens—we build relationships and trust that last for generations. We are proud to be a part of the San Antonio community and are dedicated to contributing to its beauty and growth, one exceptional project at a time.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-lg font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                Ready to discuss your vision?
              </h3>
              <p className="text-sm text-neutral-300 font-light mb-6 text-center sm:text-left">
                Contact us today to schedule your free, no-obligation consultation with Robert.
              </p>

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
                  <Clock className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>Mon-Sat: 8am-5pm | 24/7 Support</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-[#a5b89d] shrink-0" />
                  <span>San Antonio & 80-Mile Surrounding Area</span>
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
              <a
                href="/#consultation"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Request Free Consultation
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
