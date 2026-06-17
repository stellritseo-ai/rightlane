import { Star, User } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import reviewComp from "@/assets/review-comp.webp";

const reviewsList = [
  { textKey: "reviews.1.text", nameKey: "reviews.1.name", dateKey: "reviews.1.date" },
  { textKey: "reviews.2.text", nameKey: "reviews.2.name", dateKey: "reviews.2.date" },
  { textKey: "reviews.3.text", nameKey: "reviews.3.name", dateKey: "reviews.3.date" },
] as const;

export function ReviewsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-6 py-12 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] grid gap-10 lg:grid-cols-[0.8fr_2fr] items-center overflow-hidden">

        {/* Left Column: Rating & Trust */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[420px] mx-auto lg:mx-0 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#23321e]/30 bg-[#2d3f26]/90 backdrop-blur-md text-white text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-sm select-none">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("reviews.badge")}</span>
          </div>

          {/* Title */}
          <h2 className="text-[22px] sm:text-[25px] md:text-[27px] font-extrabold text-neutral-900 leading-tight mb-5 tracking-tight">
            {t("reviews.title")}
          </h2>

          {/* Google Rating Widget Image */}
          <img
            src={reviewComp}
            alt="Google Reviews Rating"
            className="w-full max-w-[340px] mb-6 object-contain rounded-xl"
          />

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#2c241d] to-[#1a1511] hover:from-[#3d3228] hover:to-[#221c16] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 shadow-[0_4px_14px_rgba(34,28,22,0.25)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            {t("reviews.readall")}
          </a>
        </div>

        {/* Right Column: Infinite Review Marquee */}
        <div className="relative min-w-0 w-full overflow-hidden">
          {/* Premium Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-[40px] lg:w-[80px] bg-gradient-to-r from-[#fbfaf7] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[40px] lg:w-[80px] bg-gradient-to-l from-[#fbfaf7] to-transparent z-10 pointer-events-none" />

          <div className="w-full overflow-hidden">
            <div className="flex gap-6 w-fit animate-marquee">
              {[...reviewsList, ...reviewsList].map((r, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[300px] md:w-[360px] bg-white rounded-2xl p-6 border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between select-none"
                >
                  <div>
                    {/* User Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white shrink-0">
                        <User className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-neutral-900 text-[14px] leading-tight truncate">
                          {t(r.nameKey)}
                        </span>
                        <span className="text-[12px] text-neutral-500 leading-tight mt-0.5 truncate">
                          {t(r.dateKey)}
                        </span>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-[13px] md:text-sm text-neutral-700 leading-relaxed italic">
                      "{t(r.textKey)}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}