import { Phone, Mail } from "lucide-react";
import welBg from "@/assets/wel-bg.png";
import welImg from "@/assets/wel-img.png";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function WelcomeSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] bg-cover bg-center px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)]"
        style={{ backgroundImage: `url(${welBg})` }}
      >
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.85fr_1fr] lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-900/10 bg-white/80 backdrop-blur-md text-neutral-800 text-[11px] font-semibold uppercase tracking-wider shadow-sm select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>{t("welcome.badge")}</span>
            </div>

            <h2 className="mt-4 sm:mt-5 text-[22px] sm:text-[26px] lg:text-[30px] leading-tight font-extrabold text-black tracking-tight">
              25 Years of{" "}
              <span className="bg-gradient-to-r from-[#ffa326] to-[#cc7e14] bg-clip-text text-transparent inline-block">
                Handyman Expertise
              </span>
              {" "}– For Every Home, Business, and Job Site.
            </h2>

            <p className="mt-4 mb-2 text-sm sm:text-base leading-relaxed text-black">
              {t("welcome.desc")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <ContactCard label={t("welcome.contact.title")} value="(727) 642-0201" />
              <ContactCard label="Email Us" value="rightlanehandymanservice@yahoo.com" isEmail={true} />
            </div>

            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="tel:7276420201"
                className="rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] px-6 sm:px-7 py-3 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
              >
                {t("welcome.btn.call")}
              </a>
              <Link
                to="#"
                className="rounded-full bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] px-6 sm:px-7 py-3 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
              >
                {t("welcome.btn.consultation")}
              </Link>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto flex items-center justify-center"
          >
            <motion.div
              className="relative group w-full flex items-center justify-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={welImg}
                alt="Outdoor living transformation"
                className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Design Consultant Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 shadow-lg flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-6 group-hover:bg-white/95 group-hover:shadow-xl">
                <div>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Owner / Lead Handyman</p>
                  <p className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5">Right Lane Handyman</p>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#cc7e14] bg-[#ffa326]/10 border border-[#ffa326]/20 px-2 sm:px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  25+ Yrs Exp
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ label, value, isEmail }: { label: string; value: string; isEmail?: boolean }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-neutral-900/5 px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <span className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14]">
        {isEmail ? <Mail className="h-4 w-4 sm:h-5 sm:w-5" /> : <Phone className="h-4 w-4 sm:h-5 sm:w-5" />}
      </span>
      <div className="min-w-0">
        <div className="text-xs sm:text-sm text-neutral-600 font-medium">{label}</div>
        <div className="font-bold text-neutral-950 text-[11px] sm:text-[13px] md:text-[14px] break-all">
          {isEmail ? <a href={`mailto:${value}`} className="hover:underline">{value}</a> : <a href={`tel:${value.replace(/[^0-9]/g, "")}`} className="hover:underline">{value}</a>}
        </div>
      </div>
    </div>
  );
}