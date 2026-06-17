import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Award,
  ThumbsUp,
  Image as ImageIcon
} from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import welBg from "@/assets/wel-bg.png";
import reviewsHero from "@/assets/welcome-pavilion.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Testimonials — JRM Construction, San Antonio" },
      { name: "description", content: "Read real client reviews and testimonials for JRM Construction Landscape Design. Serving San Antonio, Boerne, New Braunfels, and surrounding areas." },
      { property: "og:title", content: "Client Reviews & Testimonials — JRM Construction" },
      { property: "og:description", content: "What San Antonio homeowners & businesses say about JRM Construction. 35+ years of trusted contracting legacy." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const { t } = useTranslation();

  const reviewsList = [
    {
      title: "A Complete Home Transformation",
      text: "Robert and his team just finished a complete remodel and backyard overhaul for us. From the new kitchen to the covered patio and outdoor kitchen, the entire process was professional and seamless. His 35 years of experience showed at every turn—he anticipated issues we never would have thought of. The crew was respectful, the site was kept clean, and the quality is outstanding. JRM is a true design-build contractor.",
      author: "The Carter Family",
      location: "San Antonio",
    },
    {
      title: "An Outdoor Oasis Created",
      text: "Our backyard was just empty grass. Now, it's our favorite 'room' in the house! JRM built a stunning flagstone patio, a custom pergola, and a softscape garden that looks like it's always been there. Robert's design eye is incredible. We especially appreciated that they were licensed and insured; it gave us so much peace of mind. We recommend them to everyone.",
      author: "Melissa & Ben R.",
      location: "Boerne",
    },
    {
      title: "Trustworthy & Honest Repair",
      text: "After a storm damaged our fence and part of our roof eaves, we needed emergency help. Robert answered his phone and had a crew out within hours for temporary protection. They scheduled the full repair promptly, provided a clear, fair quote, and did impeccable work. In a world of contractors who don't call back, JRM's 24/7 reliability and old-school integrity are priceless.",
      author: "David H.",
      location: "New Braunfels",
    },
    {
      title: "Kitchen Remodel Perfection",
      text: "We interviewed several contractors for our kitchen remodel. Robert from JRM stood out immediately. He was knowledgeable, listened to our ideas, and his quote was detailed and transparent—no hidden fees. The craftsmanship on the custom cabinets and tilework is beautiful. They finished on time and on budget. A stress-free, fantastic experience.",
      author: "Sofia & Mark T.",
      location: "San Antonio",
    },
    {
      title: "Commercial Landscaping Excellence",
      text: "We hired JRM Construction to handle the landscaping and hardscaping for our new office complex in the medical center. They delivered a professional, durable, and aesthetically beautiful result that makes a great first impression. Robert managed the project efficiently with minimal disruption to our operations. A reliable commercial partner.",
      author: "Ascend Properties",
      location: "San Antonio",
    },
    {
      title: "A Fireplace That Wows",
      text: "We wanted a floor-to-ceiling stone fireplace but were worried it would feel kitschy. Robert designed and built a masterpiece. The scale is perfect, the stonework is artisanal, and it completely transformed our living room. His team handled everything from the gas line to the final mantle. The level of skill is what you get with 35 years in the business. Absolutely in love with it.",
      author: "James & Linda K.",
      location: "Canyon Lake",
    },
    {
      title: "Stress-Free New Construction",
      text: "Building a new home is overwhelming, but Robert made it manageable. He was involved in every detail, from foundation to landscaping. His communication was excellent, and he kept us informed throughout the entire process. The quality of construction is top-notch. We're thrilled with our forever home.",
      author: "The Martinez Family",
      location: "New Braunfels",
    },
    {
      title: "Beautiful Artificial Turf Installation",
      text: "We wanted a low-maintenance yard that still looks lush and green. JRM installed artificial turf in our backyard, and it looks incredible. The base work was done properly, and the drainage is perfect—no puddles after rain. Our kids and dogs love it, and we love not mowing. Highly recommend!",
      author: "Rachel P.",
      location: "San Antonio",
    },
    {
      title: "Custom Fencing & Privacy",
      text: "Our old fence was falling apart, and we needed privacy for our pool area. Robert designed and installed a beautiful cedar fence with custom gates. The craftsmanship is excellent, and the installation was quick and clean. Our yard now feels like a private retreat. Thank you, JRM!",
      author: "Greg & Diane W.",
      location: "Bulverde",
    },
    {
      title: "Stunning Outdoor Kitchen",
      text: "We wanted to create the ultimate entertaining space, and JRM delivered beyond our expectations. The outdoor kitchen is beautiful—built-in grill, granite countertops, and a bar area. Robert's design incorporated everything we wanted. Our backyard is now the neighborhood gathering spot. We couldn't be happier.",
      author: "Tom & Lisa S.",
      location: "San Antonio",
    },
    {
      title: "Reliable & Professional Service",
      text: "I've worked with many contractors over the years, and JRM Construction is among the best. Robert is honest, knowledgeable, and genuinely cares about his clients. His crew is skilled and respectful. They completed our bathroom remodel on time and to perfection. I will definitely call them for future projects.",
      author: "John M.",
      location: "Schertz",
    },
    {
      title: "Hardscape & Landscape Harmony",
      text: "We needed a complete overhaul of our front and backyards. JRM designed a cohesive plan that included a flagstone walkway, retaining wall, and beautiful softscape planting beds. The transition between hardscape and softscape is seamless. Our neighbors have been complimenting the transformation ever since.",
      author: "Emily & Chris D.",
      location: "Boerne",
    },
    {
      title: "Excellent Attention to Detail",
      text: "We had JRM install a custom fireplace and mantel in our living room. Robert's attention to detail is unmatched. He personally selected the stone and ensured every piece was placed perfectly. The final result is a stunning focal point that our family and guests admire constantly. This is the quality you get with a master craftsman.",
      author: "Brian K.",
      location: "Seguin",
    },
  ];

  const trustPillars = [
    {
      title: "35 Years of Proven Expertise",
      desc: "Decades of local experience in remodeling, construction, and landscape design.",
    },
    {
      title: "Honest & Transparent Communication",
      desc: "Clear quotes, no hidden fees, and open dialogue from start to finish.",
    },
    {
      title: "Superior Craftsmanship",
      desc: "Attention to detail and quality materials that stand the test of time.",
    },
    {
      title: "Licensed, Insured & Bonded",
      desc: "Your complete protection and peace of mind on every single contract.",
    },
    {
      title: "Respectful & Clean Job Sites",
      desc: "Our team treats your property with care and cleans up thoroughly.",
    },
    {
      title: "On-Time & On-Budget",
      desc: "We respect your timeline and financial commitments without shortcuts.",
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
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${reviewsHero})` }}
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
              Client Reviews & Testimonials
            </span>

            {/* Title */}
            <h1 className="text-[26px] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              What San Antonio Homeowners & Businesses Are Saying
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              For over 35 years, JRM Construction Landscaping Design has been built on a foundation of trust, quality craftsmanship, and satisfied clients. We're honored to share the words of those who have entrusted their vision to owner Robert Thompson and our dedicated team.
            </p>
          </motion.div>

          {/* Scroll Down Vertical Indicator */}
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

      {/* ── EDITORIAL SPLIT LAYOUT GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20 items-start">
            
            {/* Left Column: Aggregator Stats & Share Card */}
            <div className="space-y-8 sticky top-28">
              {/* Score Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm flex flex-col items-center text-center"
              >
                <span className="text-5xl font-black text-neutral-900 leading-none">5.0</span>
                <div className="flex items-center gap-1 mt-3 text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest leading-none mt-4">
                  Based on 100+ Google Reviews
                </span>
              </motion.div>

              {/* Share Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="bg-gradient-to-br from-[#1c140d] to-[#2b2015] text-white rounded-2xl p-6 shadow-md border border-neutral-800 space-y-5 text-left"
              >
                <div className="space-y-1">
                  <h3 className="text-md font-bold tracking-wide capitalize">Share Your Experience</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Have you worked with JRM Construction? Your feedback helps us continue to improve and guides others.
                  </p>
                </div>

                <div className="space-y-3.5 pt-2 text-xs font-light">
                  <a href="tel:2104295526" className="flex items-center gap-3 hover:text-[#a5b89d] transition-colors">
                    <Phone className="w-4 h-4 text-[#a5b89d]" />
                    <span>Call Robert at (210) 429-5526</span>
                  </a>
                  <a href="mailto:robertsa210@icloud.com" className="flex items-center gap-3 hover:text-[#a5b89d] transition-colors font-light">
                    <Mail className="w-4 h-4 text-[#a5b89d]" />
                    <span className="truncate">Email: robertsa210@icloud.com</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-[#a5b89d] fill-current" />
                    <span>Review on Google or Facebook</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: 13 Reviews Cards List */}
            <div className="grid gap-6">
              {reviewsList.map((r, idx) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: Math.min(idx * 0.08, 0.4), ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-[#577a4c]/20 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
                >
                  <div className="absolute inset-y-0 left-0 w-[4px] bg-[#577a4c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="space-y-4">
                    {/* Stars and Location Badge */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 bg-[#577a4c]/10 text-[#3d5636] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        <MapPin className="w-3 h-3" />
                        {r.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-md md:text-lg font-bold text-neutral-900 tracking-wide">
                      {r.title}
                    </h3>

                    {/* Text */}
                    <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed italic" style={{ fontFamily: "Georgia, serif" }}>
                      "{r.text}"
                    </p>
                  </div>

                  {/* Author Name */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-[#3d5636]">
                      {r.author.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-neutral-800">{r.author}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── WHY OUR CLIENTS TRUST US SECTION ── */}
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
              Our Trust Pillars
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Why Our Clients Trust Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustPillars.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-sm border border-neutral-200/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 text-left"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636] border border-[#577a4c]/20 select-none">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h3 className="text-[14px] font-bold text-neutral-900 tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-600 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── SEE OUR WORK CTA BLOCK ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4a6e28] uppercase tracking-wider">
              <Award className="w-4 h-4" />
              Quality You Can See
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
              See Our Work in Action
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Words are one thing—seeing is believing. Browse our interactive project gallery to view examples of our custom outdoor kitchens, flagstone patios, pool surrounds, and complete home remodels.
            </p>
          </div>
          <a
            href="/#gallery"
            className="rounded-full bg-[#3d5636] hover:bg-[#2d3f26] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 flex items-center gap-2 shrink-0 shadow-md hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" />
            <span>View Our Gallery</span>
          </a>
        </section>
      </div>

      {/* ── READY FOR JRM DIFFERENCE CTA ── */}
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
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Logo */}
            <img src={logo} alt="JRM" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Experience the JRM Difference?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              Contact us today to schedule your free, no-obligation consultation with owner Robert Thompson. Discover why homeowners and businesses across San Antonio trust us to bring their visions to life.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
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
              <a
                href="/contact"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Book Design Consult
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
