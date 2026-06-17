import { Phone } from "lucide-react";
import welBg from "@/assets/wel-bg.png";
import welImg from "@/assets/wel-img.webp";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";

export function WelcomeSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] bg-cover bg-center px-8 py-16 md:px-12 lg:px-16 lg:py-20 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)]"
        style={{ backgroundImage: `url(${welBg})` }}
      >
        <div className="grid gap-12 lg:grid-cols-[1.85fr_1fr] lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-900/10 bg-white/80 backdrop-blur-md text-neutral-800 text-[11px] font-semibold uppercase tracking-wider shadow-sm select-none animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>{t("welcome.badge")}</span>
            </div>

            <h2 className="mt-[20px] text-[22px] md:text-[26px] leading-[36px] md:leading-[1.2] capitalize font-extrabold text-neutral-900 tracking-tight">
              {t("welcome.title")}
            </h2>

            <p className="mt-[16px] text-[17px] font-bold text-[#4a6e28] border-l-4 border-[#577a4c] pl-4">
              {t("welcome.credentials")}
            </p>

            <p className="mt-[12px] -mb-[28px] text-base leading-[40px] text-black">
              {t("welcome.desc")}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ContactCard label={t("welcome.contact.title")} name="Robert" phone="(210) 429-5526" />
              <ContactCard label={t("welcome.contact.title")} name="Arturo" phone="210-379-3505" />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:2104295526"
                className="rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] px-7 py-3 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
              >
                {t("welcome.btn.call")}
              </a>
              <a
                href="#consultation"
                className="rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] px-7 py-3 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
              >
                {t("welcome.btn.consultation")}
              </a>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group w-full max-w-[540px] mx-auto flex items-center justify-center"
          >
            <img
              src={welImg}
              alt="Outdoor living transformation"
              className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Design Consultant Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-6 group-hover:bg-white/95 group-hover:shadow-xl">
              <div>
                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Design Consultant</p>
                <p className="text-sm font-bold text-neutral-900 mt-0.5">Robert Thompson</p>
              </div>
              <span className="text-[10px] font-bold text-[#3d5636] bg-[#577a4c]/10 border border-[#577a4c]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                35+ Yrs Exp
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ label, name, phone }: { label: string; name: string; phone: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-neutral-900/5 px-5 py-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636]">
        <Phone className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-sm text-neutral-600 font-medium">{label}</div>
        <div className="font-bold text-neutral-950">
          {name}: {phone}
        </div>
      </div>
    </div>
  );
}