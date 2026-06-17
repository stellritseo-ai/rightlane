import { useTranslation } from "@/context/translation-context";
import { ClipboardList, Images } from "lucide-react";

export function GetStartedSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] flex items-center justify-center text-center px-6 py-[40px] md:px-12 lg:px-16">

        {/* Background MP4 Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-85"
          src="https://res.cloudinary.com/dgpdydebp/video/upload/v1781720948/JRM_Construction_Landscaping_Design_vuaim3.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Premium Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/80 z-10" />

        {/* Content container */}
        <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center justify-center text-white">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 text-xs font-semibold uppercase tracking-wider mb-5 select-none shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("welcome.badge")}</span>
          </div>

          <h2 className="whitespace-nowrap text-[9px] min-[375px]:text-[10.5px] min-[425px]:text-[12px] sm:text-[18px] md:text-[20px] lg:text-[28px] xl:text-[32px] leading-snug font-semibold tracking-tight mb-[15px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {t("getstarted.title")}
          </h2>

          <p className="text-sm md:text-[15px] leading-relaxed md:leading-[40px] text-white/90 w-full max-w-4xl mb-8 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            {t("getstarted.description")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] text-white text-[13px] md:text-[14px] font-medium rounded-full px-8 py-3 transition-all duration-300 min-w-[220px]"
            >
              <ClipboardList className="w-4 h-4 text-white/90" />
              <span>{t("getstarted.btn.consultation")}</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] text-white text-[13px] md:text-[14px] font-medium rounded-full px-8 py-3 transition-all duration-300 min-w-[220px]"
            >
              <Images className="w-4 h-4 text-white/90" />
              <span>{t("getstarted.btn.gallery")}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
