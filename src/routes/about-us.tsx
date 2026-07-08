import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
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
  Trash2,
  Trees,
  Award,
  Zap,
  Star,
  Quote
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import welImg from "@/assets/wel-img.png";
import heroImage from "@/assets/wel-img.png";
import statsJobsite from "@/assets/stats-cleanup.png";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us - Right Lane Handyman Services, LLC | Clearwater, FL" },
      { name: "description", content: "Learn about Right Lane Handyman Services, LLC - Clearwater's trusted handyman, remodeling & hauling experts with over 25 years of experience. Fully licensed, insured, and bonded." },
      { property: "og:title", content: "About Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "Pinellas County's premier handyman, remodeling, and hauling team led by Ronnie Lane. Over 25 years of professional service." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  const coreValues = [
    {
      title: "Licensed, Insured & Bonded",
      desc: "Your property and peace of mind are protected. We carry full insurance, including liability and workers' compensation, so you're never liable for accidents on your premises. We are also bonded for your financial security.",
      icon: ShieldCheck,
    },
    {
      title: "25+ Years of Hands-On Expertise",
      desc: "There's no substitute for experience. Ronnie and his crew have seen it all – from complex remodels to challenging demolition projects – and have the skills to handle any situation with efficiency and precision.",
      icon: Award,
    },
    {
      title: "24/7 Emergency Response",
      desc: "Storms and unexpected disasters don't wait for business hours. That's why we offer 24/7 emergency service for debris removal, storm cleanup, and urgent property maintenance.",
      icon: Zap,
    },
    {
      title: "Comprehensive Services – We Do It All",
      desc: "Whether you need post-construction cleaning, pressure washing, heavy junk removal, demolition, landscaping, or property maintenance, we are your one-stop shop. We eliminate the hassle of hiring multiple contractors.",
      icon: Construction,
    },
    {
      title: "100% Satisfaction Guarantee",
      desc: "We aren't satisfied until you are. Every job is backed by our guarantee of quality workmanship and excellent service. We stand behind our work and strive to exceed your expectations.",
      icon: CheckCircle2,
    },
  ];

  const services = [
    {
      category: "Post Construction Cleaning",
      desc: "Thorough cleanup of job sites, removing dust, debris, and construction materials to leave your space move-in ready.",
      icon: Construction,
    },
    {
      category: "Pressure Washing",
      desc: "Restore the beauty of your driveways, decks, siding, and pool areas with professional pressure washing that removes years of grime.",
      icon: Layers,
    },
    {
      category: "Demolition",
      desc: "Safe and efficient demolition of structures, concrete, and interiors, with complete debris removal.",
      icon: Trash2,
    },
    {
      category: "Junk Removal & Hauling",
      desc: "We haul what others won't – heavy debris, mixed materials, old appliances, furniture, and full-site cleanouts.",
      icon: Trash2,
    },
    {
      category: "Landscaping & Property Maintenance",
      desc: "From mulching and lawn mowing to garden bed installation and outdoor lighting, we enhance your curb appeal.",
      icon: Trees,
    },
    {
      category: "Waste, Building Materials & Debris Removal",
      desc: "Reliable removal of construction waste, building materials, and general debris from your property.",
      icon: Layers,
    },
  ];

  const serviceAreas = [
    "Tampa Bay Area",
    "Hillsborough County",
    "Pinellas County",
    "Clearwater",
    "Largo",
    "St. Petersburg",
    "Dunedin",
    "Tarpon Springs",
    "Safety Harbor"
  ];

  const testimonials = [
    {
      quote: "They hauled away our old hot tub and concrete blocks. Very heavy work but the Right Lane crew handled it with ease. Outstanding service!",
      author: "Michael F.",
      city: "Largo",
    },
    {
      quote: "Excellent deck pressure washing and sealing. Ronnie was professional, on time, and left our backyard spotless. 5 stars!",
      author: "Rachel S.",
      city: "Tarpon Springs",
    },
    {
      quote: "Cleaned up our commercial property after storm damage. Cleared fallen branches, loose gravel, and trash. Excellent communication throughout.",
      author: "Robert T.",
      city: "Tampa",
    },
    {
      quote: "Super responsive handyman service. They fixed our sticky doors, hung some heavy shelving, and replaced three light fixtures in one afternoon.",
      author: "Jason B.",
      city: "Clearwater",
    },
    {
      quote: "Repaired our wooden fence gates and replaced three rotting posts. Very sturdy work and fair pricing. Will definitely hire Ronnie again.",
      author: "Nancy P.",
      city: "Pinellas Park",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── HERO BANNER ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[480px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.05, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/90 via-[#1c140d]/75 to-[#1c140d]/90 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              About Right Lane Handyman Services, LLC
            </span>
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-md">
              Clearwater's Trusted Handyman<br /> & Hauling Experts
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 font-light max-w-2xl">
              Bringing over a quarter-century of hands-on experience, premium craftsmanship, and professional care to Pinellas County.
            </p>
          </motion.div>
        </section>
      </div>

      {/* ── EDITORIAL STORY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-16 md:py-24 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-left"
            >
              <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                Our Story
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Over 25 Years of Dedication & Service
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#cc7e14] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Welcome to Right Lane Handyman Services, LLC – your premier choice for professional handyman, remodeling, and hauling solutions throughout Pinellas County. Led by Ronnie Lane, our team brings over a quarter-century of hands-on experience to every project, big or small. We're not just another service provider; we're your neighbors, committed to keeping Clearwater and the surrounding communities beautiful, functional, and safe.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Since building our foundation in Clearwater, we have stood beside local homeowners, business operators, and property managers to offer honest assessments, reliable service, and top-tier craftsmanship. From interior upgrades to storm cleanup, we treat your property with the ultimate level of respect.
              </p>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[440px] mx-auto flex items-center justify-center py-6"
            >
              <div className="absolute top-2 left-2 right-[-4px] bottom-[-4px] sm:right-[-8px] sm:bottom-[-8px] border-2 border-[#ffa326]/20 rounded-2xl z-0 select-none pointer-events-none" />
              <img
                src={welImg}
                alt="Right Lane home project"
                className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-xl border border-neutral-200/50"
              />
              <div className="absolute -bottom-1 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-xl flex flex-col select-none z-20">
                <span className="text-3xl font-black text-[#cc7e14]">25+</span>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none mt-0.5">Years of Trust</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── THE RIGHT LANE DIFFERENCE ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Core Values
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Right Lane Difference: Experience You Can Trust
            </h2>
            <p className="mt-4 text-neutral-700 text-sm md:text-base leading-relaxed">
              What sets Right Lane Handyman Services apart? It's our unwavering commitment to quality, safety, and customer satisfaction. For 25 years, we've built our reputation one job at a time, earning the trust of homeowners, property managers, and commercial contractors across the Tampa Bay area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, idx) => {
              const IconComp = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                  className="group relative bg-white/85 backdrop-blur-md border border-neutral-200/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-2xl hover:border-[#ffa326]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffa326]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-14 h-14 rounded-full bg-[#ffa326]/10 border border-[#ffa326]/20 flex items-center justify-center mb-6 text-[#cc7e14] group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed font-light">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── MEET RONNIE LANE SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-left"
            >
              <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                Our Founder
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Meet Ronnie Lane: The Man Behind the Company
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Ronnie Lane is more than just the owner of Right Lane Handyman Services – he's a Clearwater native who takes immense pride in his community. Starting his career over 25 years ago, Ronnie learned the trades from the ground up, developing a deep understanding of construction, demolition, and property maintenance. His hands-on approach means he personally oversees every project, ensuring that his high standards are met on every job site.
              </p>

              {/* Styled Quote Box */}
              <div className="relative bg-[#f4f3ef]/80 border-l-4 border-[#ffa326] rounded-r-2xl p-6 shadow-sm my-6">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-[#ffa326]/20 rotate-180" />
                <p className="text-base font-medium italic text-neutral-800 leading-relaxed pr-6" style={{ fontFamily: "Georgia, serif" }}>
                  "I built this company on a simple principle: treat every customer's property as if it were my own. Whether we're pressure washing a driveway, demolishing a concrete slab, or hauling away heavy debris, we approach each job with care, respect, and a commitment to doing it right the first time."
                </p>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-neutral-500">
                  — Ronnie Lane, Owner
                </div>
              </div>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[440px] mx-auto flex items-center justify-center py-6"
            >
              <div className="absolute top-2 left-2 right-[-4px] bottom-[-4px] sm:right-[-8px] sm:bottom-[-8px] border-2 border-[#ffa326]/20 rounded-2xl z-0 select-none pointer-events-none" />
              <img
                src={statsJobsite}
                alt="Ronnie Lane supervising project"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border border-neutral-200/50 aspect-[4/3]"
              />
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── SERVICES TABLE GRID SECTION ── */}
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
              Our Services
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Comprehensive Services for Every Need
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed">
              No job is too big or too small for the Right Lane team. Our diverse service offerings are designed to meet the needs of residential, commercial, and industrial clients alike.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="group relative bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-lg hover:border-[#ffa326]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative z-10 text-left">
                    <div className="w-11 h-11 rounded-xl bg-[#ffa326]/10 text-[#cc7e14] border border-[#ffa326]/20 flex items-center justify-center mb-5 group-hover:bg-[#ffa326]/20 transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-md font-bold text-neutral-900 mb-2 tracking-wide">
                      {item.category}
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

      {/* ── PROUDLY SERVING ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Locations
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-955 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Proudly Serving Clearwater & Pinellas County
            </h2>
            <p className="mt-4 text-neutral-700 text-sm md:text-base leading-relaxed">
              As a locally owned and operated business, we are deeply invested in our community. We provide fast, dependable service to clients across all of Pinellas County. When you choose Right Lane, you're supporting a local business that cares about the community it serves.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, idx) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                className="flex items-center gap-2.5 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-neutral-200/50 shadow-sm text-neutral-900 font-semibold text-sm hover:border-[#ffa326]/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-[#cc7e14]" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            & all surrounding areas in Pinellas County
          </p>
        </section>
      </div>

      {/* ── CLIENT TESTIMONIALS ── */}
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
              Testimonials
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What Our Clients Say
            </h2>
            <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed">
              The best testament to our work is the feedback from our satisfied customers. Here's what some of them have to say:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((test, idx) => (
              <motion.div
                key={test.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffa326] text-[#ffa326]" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-700 italic leading-relaxed font-light mb-6">
                    "{test.quote}"
                  </p>
                </div>
                <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-900">{test.author}</span>
                  <span className="text-[10px] font-bold text-[#cc7e14] bg-[#ffa326]/10 border border-[#ffa326]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {test.city}
                  </span>
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
              Let's Get Your Property Back in the Right Lane
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              Ready to tackle your next project? Whether you need a small repair, a major demolition, or a complete property cleanout, Right Lane Handyman Services is here to help. Contact us today for a free, no-obligation estimate and experience the difference that 25+ years of expertise makes.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-lg font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                Right Lane Handyman Services, LLC
              </h3>

              <div className="grid sm:grid-cols-2 gap-5 text-[15px] font-light">
                <a href="tel:7276420201" className="flex items-center gap-3.5 hover:text-[#ffa326] transition-colors">
                  <Phone className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Phone: (727) 642-0201</span>
                </a>
                <a href="mailto:rightlanehandymanservice@yahoo.com" className="flex items-center gap-3.5 hover:text-[#ffa326] transition-colors">
                  <Mail className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Email: rightlanehandymanservice@yahoo.com</span>
                </a>
                <div className="flex flex-row items-center gap-3.5 col-span-1 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Serving Clearwater, FL, and all of Pinellas County</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:7276420201"
                className="rounded-full bg-[#ffa326] hover:bg-[#ffa326]/90 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call Ronnie Now
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Get Your Free Estimate Today!
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
