import hit1 from "@/assets/hit1.webp";
import hit2 from "@/assets/hit2.webp";
import hit3 from "@/assets/hit3.webp";
import exp from "@/assets/exp.webp";
import { useTranslation } from "@/context/translation-context";

const stats = [
  { icon: hit1, value: "5,000+", labelKey: "stats.label.complete_project" },
  { icon: hit2, value: "4,900+", labelKey: "stats.label.happy_clients" },
  { icon: hit3, value: "15+", labelKey: "stats.label.expert_member" },
  { icon: exp, value: "35+", labelKey: "stats.label.years_experience" },
] as const;

export function StatsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-8 py-16 md:px-12 lg:px-14 lg:py-16 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.035)] grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch relative overflow-hidden">

        {/* Left Column: Title, Description, and Buttons */}
        <div className="w-full flex flex-col justify-between z-10 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2">
          <div>
            {/* Title */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[35px] font-black text-neutral-900 leading-tight mb-6 tracking-tight">
              {t("stats.title")}
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-neutral-700 leading-relaxed md:leading-[40px] mb-8 max-w-[760px] font-medium">
              {t("stats.desc")}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 mb-8 lg:mb-0 select-none">
              {/* Call Us Now */}
              <a
                href="tel:2104295526"
                className="inline-flex items-center justify-center bg-[#0f6cbd] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full px-9 py-4 transition-all duration-300 shadow-md hover:bg-[#0c589c] hover:shadow-[0_12px_24px_rgba(15,108,189,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
              >
                {t("stats.btn.call")}
              </a>

              {/* Get a Free Consultation */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#2c241d] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full px-9 py-4 transition-all duration-300 shadow-md hover:bg-[#1a1511] hover:shadow-[0_12px_24px_rgba(44,36,29,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
              >
                {t("stats.btn.consultation")}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Jobsite Video Container with premium rounded styling */}
        <div className="w-full lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-3 z-0 h-[320px] lg:h-[540px] relative rounded-3xl overflow-hidden border border-neutral-200/20 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
          <video
            src="https://res.cloudinary.com/dgpdydebp/video/upload/v1781725575/IMG_5680_inkpef.mov"
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Row: 4 Stats Cards */}
        <div className="w-full lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-3 z-10 relative lg:-mt-[50px] mt-8 self-end">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ icon, value, labelKey }, i) => (
              <div
                key={i}
                className="mt-[50px] bg-white border border-neutral-100/90 rounded-2xl p-4 md:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col items-center justify-center text-center select-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-neutral-200/80"
              >
                {/* Icon Wrapper for uniform alignment */}
                <div className="h-12 flex items-center justify-center mb-3">
                  <img
                    src={icon}
                    alt={value}
                    className="h-9 w-auto object-contain"
                  />
                </div>

                {/* Value */}
                <div className="text-xl md:text-2xl font-black text-neutral-900 leading-none tracking-tight">
                  {value}
                </div>

                {/* Label */}
                <div className="text-[9px] md:text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest mt-2 leading-none">
                  {t(labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}