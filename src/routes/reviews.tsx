import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { useTranslation } from "@/context/translation-context";
import { motion, AnimatePresence } from "framer-motion";
import { getReviews, Review } from "@/lib/leads-store";
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
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import reviewsHero from "@/assets/welcome-pavilion.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Testimonials — Right Lane Handyman Services, LLC, Clearwater" },
      { name: "description", content: "Read real client reviews and testimonials for Right Lane Handyman Services, LLC. Serving Clearwater, Largo, St. Petersburg, and surrounding areas." },
      { property: "og:title", content: "Client Reviews & Testimonials — Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "What Clearwater homeowners & businesses say about Right Lane Handyman Services, LLC. 25+ Years of trusted contracting legacy." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data.filter((r) => r.featured));
      } catch (error) {
        console.error("Error loading reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const reviewsList = [
    {
      title: "A Complete Home Transformation",
      text: "Ronnie and his team just finished a complete remodel and backyard overhaul for us. From the new kitchen to the covered patio and outdoor kitchen, the entire process was professional and seamless. His 25+ Years of experience showed at every turn—he anticipated issues we never would have thought of. The crew was respectful, the site was kept clean, and the quality is outstanding. Right Lane is a true design-build contractor.",
      author: "The Carter Family",
      location: "Clearwater",
    },
    {
      title: "An Outdoor Oasis Created",
      text: "Our backyard was just empty grass. Now, it's our favorite 'room' in the house! Right Lane built a stunning flagstone patio, a custom pergola, and a softscape garden that looks like it's always been there. Ronnie's design eye is incredible. We especially appreciated that they were licensed and insured; it gave us so much peace of mind. We recommend them to everyone.",
      author: "Melissa & Ben R.",
      location: "Largo",
    },
    {
      title: "Trustworthy & Honest Repair",
      text: "After a storm damaged our fence and part of our roof eaves, we needed emergency help. Ronnie answered his phone and had a crew out within hours for temporary protection. They scheduled the full repair promptly, provided a clear, fair quote, and did impeccable work. In a world of contractors who don't call back, Right Lane's 24/7 reliability and old-school integrity are priceless.",
      author: "David H.",
      location: "St. Petersburg",
    },
    {
      title: "Kitchen Remodel Perfection",
      text: "We interviewed several contractors for our kitchen remodel. Ronnie from Right Lane stood out immediately. He was knowledgeable, listened to our ideas, and his quote was detailed and transparent—no hidden fees. The craftsmanship on the custom cabinets and tilework is beautiful. They finished on time and on budget. A stress-free, fantastic experience.",
      author: "Sofia & Mark T.",
      location: "Clearwater",
    },
    {
      title: "Commercial Landscaping Excellence",
      text: "We hired Right Lane Handyman Services, LLC to handle the landscaping and hardscaping for our new office complex in the medical center. They delivered a professional, durable, and aesthetically beautiful result that makes a great first impression. Ronnie managed the project efficiently with minimal disruption to our operations. A reliable commercial partner.",
      author: "Ascend Properties",
      location: "Clearwater",
    },
    {
      title: "A Fireplace That Wows",
      text: "We wanted a floor-to-ceiling stone fireplace but were worried it would feel kitschy. Ronnie designed and built a masterpiece. The scale is perfect, the stonework is artisanal, and it completely transformed our living room. His team handled everything from the gas line to the final mantle. The level of skill is what you get with 25+ Years in the business. Absolutely in love with it.",
      author: "James & Linda K.",
      location: "Tarpon Springs",
    },
    {
      title: "Stress-Free New Construction",
      text: "Building a new home is overwhelming, but Ronnie made it manageable. He was involved in every detail, from foundation to landscaping. His communication was excellent, and he kept us informed throughout the entire process. The quality of construction is top-notch. We're thrilled with our forever home.",
      author: "The Martinez Family",
      location: "St. Petersburg",
    },
    {
      title: "Beautiful Artificial Turf Installation",
      text: "We wanted a low-maintenance yard that still looks lush and green. Right Lane installed artificial turf in our backyard, and it looks incredible. The base work was done properly, and the drainage is perfect—no puddles after rain. Our kids and dogs love it, and we love not mowing. Highly recommend!",
      author: "Rachel P.",
      location: "Clearwater",
    },
    {
      title: "Custom Fencing & Privacy",
      text: "Our old fence was falling apart, and we needed privacy for our pool area. Ronnie designed and installed a beautiful cedar fence with custom gates. The craftsmanship is excellent, and the installation was quick and clean. Our yard now feels like a private retreat. Thank you, Right Lane!",
      author: "Greg & Diane W.",
      location: "Bulverde",
    },
    {
      title: "Stunning Outdoor Kitchen",
      text: "We wanted to create the ultimate entertaining space, and Right Lane delivered beyond our expectations. The outdoor kitchen is beautiful—built-in grill, granite countertops, and a bar area. Ronnie's design incorporated everything we wanted. Our backyard is now the neighborhood gathering spot. We couldn't be happier.",
      author: "Tom & Lisa S.",
      location: "Clearwater",
    },
    {
      title: "Reliable & Professional Service",
      text: "I've worked with many contractors over the years, and Right Lane Handyman Services, LLC is among the best. Ronnie is honest, knowledgeable, and genuinely cares about his clients. His crew is skilled and respectful. They completed our bathroom remodel on time and to perfection. I will definitely call them for future projects.",
      author: "John M.",
      location: "Schertz",
    },
    {
      title: "Hardscape & Landscape Harmony",
      text: "We needed a complete overhaul of our front and backyards. Right Lane designed a cohesive plan that included a flagstone walkway, retaining wall, and beautiful softscape planting beds. The transition between hardscape and softscape is seamless. Our neighbors have been complimenting the transformation ever since.",
      author: "Emily & Chris D.",
      location: "Largo",
    },
    {
      title: "Excellent Attention to Detail",
      text: "We had Right Lane install a custom fireplace and mantel in our living room. Ronnie's attention to detail is unmatched. He personally selected the stone and ensured every piece was placed perfectly. The final result is a stunning focal point that our family and guests admire constantly. This is the quality you get with a master craftsman.",
      author: "Brian K.",
      location: "Pinellas Park",
    },
  ];

  const trustPillars = [
    {
      title: "25+ Years of Proven Expertise",
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
            style={{
              backgroundImage: `url(${reviewsHero})`
            }}
          />

          {/* Dark Forest overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/92 via-[#1c140d]/78 to-[#1c140d]/92 z-10" />

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
              What Clearwater Homeowners & Businesses Are Saying
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
              For over 25+ Years, Right Lane Handyman Services, LLC has been built on a foundation of trust, quality craftsmanship, and satisfied clients. We're honored to share the words of those who have entrusted their vision to the Right Lane team and our dedicated team.
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
                className="absolute top-0 left-0 w-full h-1/3 bg-[#ffa326] rounded-full"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── EDITORIAL SPLIT LAYOUT GRID ── */}
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
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20 items-start">
            
            {/* Left Column: Aggregator Stats & Share Card */}
            <div className="space-y-8 lg:sticky lg:top-28">
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
                    Have you worked with Right Lane Handyman Services, LLC? Your feedback helps us continue to improve and guides others.
                  </p>
                </div>

                <div className="space-y-3.5 pt-2 text-xs font-light">
                  <a href="tel:7276420201" className="flex items-center gap-3 hover:text-[#ffa326] transition-colors">
                    <Phone className="w-4 h-4 text-[#ffa326]" />
                    <span>Call Ronnie at (727) 642-0201</span>
                  </a>
                  <a href="mailto:rightlanehandymanservice@yahoo.com" className="flex items-center gap-3 hover:text-[#ffa326] transition-colors font-light">
                    <Mail className="w-4 h-4 text-[#ffa326]" />
                    <span className="truncate">Email: rightlanehandymanservice@yahoo.com</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-[#ffa326] fill-current" />
                    <span>Review on Google or Facebook</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Dynamic Reviews Cards List */}
            <div className="grid gap-6">
              {reviews.map((r, idx) => (
                <motion.div
                  key={r.id || r.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: Math.min(idx * 0.08, 0.4), ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-[#ffa326]/20 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
                >
                  <div className="absolute inset-y-0 left-0 w-[4px] bg-[#ffa326]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="space-y-4">
                    {/* Stars and Location Badge */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }).map((_, sIdx) => {
                          const ratingValue = sIdx + 1;
                          return (
                            <Star 
                              key={sIdx} 
                              className={`w-4 h-4 ${ratingValue <= (r.rating || 5) ? 'fill-current text-amber-500' : 'text-neutral-200'}`} 
                            />
                          );
                        })}
                      </div>
                      <span className="inline-flex items-center gap-1 bg-[#ffa326]/10 text-[#cc7e14] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
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

                    {/* Completion Photos */}
                    {r.photos && r.photos.length > 0 && (
                      <div className="flex gap-2.5 mt-4 flex-wrap">
                        {r.photos.map((photo, pIdx) => (
                          <div 
                            key={pIdx} 
                            className="relative h-20 w-28 rounded-lg overflow-hidden border border-neutral-200/60 shadow-xs cursor-pointer hover:opacity-90 active:scale-98 transition-all"
                            onClick={() => setLightboxPhoto(photo)}
                          >
                            <img
                              src={photo}
                              alt="Project completion"
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors flex items-center justify-center">
                              <ImageIcon className="w-4 h-4 text-white drop-shadow-md" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Owner Reply */}
                    {r.replyText && (
                      <div className="mt-4 p-4 rounded-xl bg-[#ffa326]/5 border-l-2 border-[#ffa326] text-left">
                        <div className="flex items-center gap-1.5 text-[#cc7e14] font-bold text-[10px] uppercase tracking-wider mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Response from Right Lane Handyman (Owner)</span>
                        </div>
                        <p className="text-xs text-neutral-700 font-light leading-relaxed">
                          "{r.replyText}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Author Name */}
                  {(() => {
                    const getInitials = (authorName: string) => {
                      const parts = authorName.trim().split(/\s+/);
                      let initials = "";
                      if (parts.length > 0 && parts[0]) initials += parts[0][0].toUpperCase();
                      if (parts.length > 1 && parts[parts.length - 1]) initials += parts[parts.length - 1][0].toUpperCase();
                      return initials || "U";
                    };
                    const palette = ["#1D4ED8", "#7C3AED", "#065F46", "#B45309", "#BE185D", "#0F766E", "#9333EA", "#DC2626"];
                    const getAvatarColor = (authorName: string) => {
                      let hash = 0;
                      for (let i = 0; i < authorName.length; i++) {
                        hash = authorName.charCodeAt(i) + ((hash << 5) - hash);
                      }
                      return palette[Math.abs(hash) % palette.length];
                    };
                    const initials = r.initials || getInitials(r.author);
                    const avatarColor = r.avatarColor || getAvatarColor(r.author);
                    return (
                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2">
                        <div 
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: avatarColor }}
                        >
                          {initials}
                        </div>
                        <span className="text-xs font-bold text-neutral-800">{r.author}</span>
                      </div>
                    );
                  })()}
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
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14] border border-[#ffa326]/20 select-none">
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
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#cc7e14] uppercase tracking-wider">
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
            className="rounded-full bg-[#cc7e14] hover:bg-[#2b1a05] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 flex items-center gap-2 shrink-0 shadow-md hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" />
            <span>View Our Gallery</span>
          </a>
        </section>
      </div>

      {/* ── READY FOR Right Lane DIFFERENCE CTA ── */}
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
              Ready to Experience the Right Lane Difference?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              Contact us today to schedule your free, no-obligation consultation with the Right Lane team. Discover why homeowners and businesses across Clearwater trust us to bring their visions to life.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
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
                Book Design Consult
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxPhoto && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs select-none cursor-pointer"
            onClick={() => setLightboxPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxPhoto}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/85 text-white rounded-full p-2.5 transition-all text-xs font-bold shadow-md cursor-pointer border border-white/20"
              >
                ✕ Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
