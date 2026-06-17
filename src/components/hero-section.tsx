import heroImage from "@/assets/hero-patio.jpg";
import heroVideo from "@/assets/jrmvideo.mp4";
import { useTranslation } from "@/context/translation-context";
import { ClipboardList, Calendar } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
      <section
        className="relative mx-auto max-w-[1400px] w-full bg-cover bg-center rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
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

        {/* Premium Dark Forest & Shadow Overlay for High Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#111a0a]/95 via-[#1c2b11]/80 md:via-[#1c2b11]/50 to-transparent z-10"
        />

        <div className="relative z-20 w-full px-6 py-16 md:px-12 md:py-24 lg:px-16 flex items-center">
          <div className="max-w-4xl text-white">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-semibold uppercase tracking-wider mt-[60px] sm:mt-[80px] md:mt-[100px] mb-5 md:mb-8 animate-fade-in shadow-sm select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t("welcome.badge")}</span>
            </div>

            <h1 className="text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] sm:whitespace-nowrap leading-[1.3] md:leading-[1.5] capitalize font-bold tracking-tight -mt-[10px] md:-mt-[20px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              {t("hero.title").split("\n").map((line, i) => (
                <span key={i} className="block sm:inline">
                  {line}
                  {i === 0 && <br className="sm:hidden" />}
                  {i === 0 && <span className="hidden sm:inline"> </span>}
                </span>
              ))}
            </h1>

            <p className="mt-[14px] md:mt-[20px] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/95 max-w-4xl whitespace-pre-line drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              {t("hero.description")}
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] px-6 py-3 text-white text-sm font-semibold hover:from-[#4d6c43] hover:to-[#33472c] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_14px_rgba(87,122,76,0.35)]"
              >
                <ClipboardList className="w-4 h-4" />
                <span>{t("hero.btn.consultation")}</span>
              </a>
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-white text-sm font-semibold hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{t("hero.btn.book")}</span>
              </a>
            </div>

            {/* Star Rating Trust Widget */}
            <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-3 text-white/90 text-xs sm:text-sm drop-shadow-sm select-none border-t border-white/10 pt-4 md:pt-6 max-w-md">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium tracking-wide">{t("reviews.basedon")}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}