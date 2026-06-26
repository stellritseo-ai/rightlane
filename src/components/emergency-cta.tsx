import { motion } from "framer-motion";
import { Phone, Clock, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import heroVideo from "@/assets/rightlane.mp4";
import { useTranslation } from "@/context/translation-context";

export function EmergencyCTA() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden py-[50px] text-white bg-[#1c140d] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden translate-z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover [will-change:transform] translate-z-0 opacity-40"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Modern dark gradient overlay for visual depth and contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c140d]/95 via-[#1c140d]/85 to-[#1c140d]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c140d]/85 via-transparent to-[#1c140d]/50" />
        </div>

        <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#ffa326]/10 border border-[#ffa326]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white shadow-sm animate-pulse"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffa326] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffa326]"></span>
                </span>
                {t("cta.prompt.badge")}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold capitalize tracking-tight leading-tight text-white font-sans"
              >
                {t("cta.prompt.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base text-white/80 max-w-xl leading-relaxed font-sans"
              >
                {t("cta.prompt.desc")}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 w-full max-w-md"
              >
                <li className="flex items-center gap-3 text-white/90">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffa326]/20 text-[#ffa326] shrink-0">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-medium">
                    {t("cta.prompt.f1")}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffa326]/20 text-[#ffa326] shrink-0">
                    <Zap className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-medium">
                    {t("cta.prompt.f2")}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffa326]/20 text-[#ffa326] shrink-0">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-medium">
                    {t("cta.prompt.f3")}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffa326]/20 text-[#ffa326] shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-medium">
                    {t("cta.prompt.f4")}
                  </span>
                </li>
              </motion.ul>
            </div>

            {/* Right Action Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2,
              }}
              className="lg:col-span-5 flex flex-col items-center gap-4 w-full"
            >
              <div className="relative group w-full max-w-full sm:max-w-sm">
                {/* Outer pulsing ring background effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

                <a
                  href="tel:7276420201"
                  className="relative flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#ffa326] to-[#cc7e14] p-5 sm:p-6 font-semibold text-white shadow-2xl hover:brightness-110 transition-all duration-300 w-full"
                >
                  <div className="flex items-center gap-4">
                    <span className="relative grid place-items-center h-12 w-12 rounded-full bg-white/10 ring-4 ring-white/5 pulse-ring shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </span>
                    <div className="text-left">
                      <span className="block text-[10px] uppercase tracking-widest text-white/80 font-bold">
                        {t("cta.prompt.btn.sub")}
                      </span>
                      <span className="block text-xl sm:text-2xl font-sans font-black leading-tight tracking-tight mt-0.5">
                        (727) 642-0201
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Micro-trust glass badge */}
              <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white/70 w-full max-w-sm justify-center lg:justify-start">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t("cta.prompt.badge.loc")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
