import heroImage from "@/assets/wel-img.png";
import heroVideo from "@/assets/rightlane.mp4";
import { useTranslation } from "@/context/translation-context";
import { Phone, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
      <section
        className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[520px] sm:min-h-[580px] md:min-h-[660px] flex items-center justify-start text-left px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-24"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Fallback Background Image (behind video) */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Premium Dark Forest overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#120b06]/65 to-[#120b06]/95 z-10"
        />

        {/* Dynamic content container */}
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-start space-y-4 sm:space-y-6 md:space-y-8">

          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 sm:mt-14 md:mt-[75px] inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider shadow-sm select-none"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("welcome.badge")}</span>
          </motion.div>

          {/* Headline */}
          <h1
            className="text-white leading-[1.2] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-serif text-[24px] sm:text-[30px] md:text-[37px] font-bold -mt-2 mb-2"
          >
            25+ Years of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#ffc570]">
              Trusted Handyman
            </span>{" "}
            &amp; Hauling Services
          </h1>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
          >
            {t("hero.description")}
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2"
          >
            <a
              href="tel:7276420201"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffa326] hover:bg-[#cc7e14] px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_14px_rgba(255,163,38,0.35)]"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <span>Call Ronnie: (727) 642-0201</span>
            </a>
            <Link
              to="#"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </motion.div>

          {/* Star Rating Trust Widget */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 text-neutral-400 text-xs select-none"
          >
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-neutral-300 uppercase tracking-wide">Based on 100+ Google Reviews</span>
          </motion.div>

          {/* Trust Indicators / Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-full border-t border-white/10 pt-5 sm:pt-6 mt-4 sm:mt-8 max-w-2xl text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffa326] shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">25+ Years Legacy</h4>
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 font-light">Clearwater's Trusted Handyman</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffa326] shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">Licensed &amp; Insured</h4>
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 font-light">Complete Peace of Mind</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffa326] shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">24/7 Response</h4>
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 font-light">Storm &amp; Debris Emergencies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}