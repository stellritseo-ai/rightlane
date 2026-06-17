import { useTranslation } from "@/context/translation-context";
import { ClipboardList, Phone } from "lucide-react";
import welBg from "@/assets/wel-bg.png";

export function WhyChooseSection() {
  const { t } = useTranslation();

  const features = [
    { title: "whychoose.f1.title", desc: "whychoose.f1.desc" },
    { title: "whychoose.f2.title", desc: "whychoose.f2.desc" },
    { title: "whychoose.f3.title", desc: "whychoose.f3.desc" },
    { title: "whychoose.f4.title", desc: "whychoose.f4.desc" },
    { title: "whychoose.f5.title", desc: "whychoose.f5.desc" },
    { title: "whychoose.f6.title", desc: "whychoose.f6.desc" },
  ] as const;

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] bg-cover bg-center px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)]"
        style={{ backgroundImage: `url(${welBg})` }}
      >
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-16 items-start">
          {/* Left Text Block */}
          <div className="flex flex-col justify-center h-full">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#23321e]/30 bg-[#2d3f26]/90 backdrop-blur-md text-white text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-sm select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t("whychoose.badge")}</span>
              </div>

              {/* Title */}
              <h2 className="text-[26px] sm:text-[30px] md:text-4xl lg:text-[38px] leading-[1.2] font-extrabold text-neutral-900 tracking-tight mb-[15px]">
                {t("whychoose.title")}
              </h2>

              {/* Descriptions */}
              <p className="text-neutral-700 text-[15px] md:text-base leading-[36px] mb-6 font-normal">
                {t("whychoose.desc1")} {t("whychoose.desc2")}
              </p>

              {/* Feature items */}
              <div className="space-y-1 mb-8">
                {features.map((f, idx) => (
                  <div key={f.title} className={`group flex items-start gap-3 hover:bg-[#2d3f26]/5 p-2 rounded-xl -ml-2 transition-all duration-300 ${idx === 0 ? '-mt-[15px]' : ''}`}>
                    <span className="text-[17px] mt-[1.5px] select-none shrink-0 group-hover:translate-x-1.5 transition-transform duration-300 ease-out">👉</span>
                    <p className="text-neutral-800 text-sm md:text-[15px] leading-relaxed">
                      <strong className="font-bold text-neutral-950">{t(f.title)}:</strong>{" "}
                      <span className="text-neutral-700 font-normal">{t(f.desc)}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2c241d] to-[#1a1511] hover:from-[#3d3228] hover:to-[#221c16] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 shadow-[0_4px_14px_rgba(34,28,22,0.25)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  <ClipboardList className="w-4 h-4 text-white/90" />
                  <span>{t("whychoose.btn.consultation")}</span>
                </a>
                <a
                  href="tel:2104295526"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 shadow-[0_4px_14px_rgba(58,84,51,0.25)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  <Phone className="w-4 h-4 text-white/90" />
                  <span>{t("whychoose.btn.call")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Video Block */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-neutral-900/5 h-[360px] lg:h-[480px] lg:sticky lg:top-[40px] self-start">
            <video
              src="https://res.cloudinary.com/dgpdydebp/video/upload/v1781722131/IMG_5476_n4xtt7.mp4"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500 ease-out"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Premium Glassmorphic Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-6 group-hover:bg-white/95 group-hover:shadow-xl">
              <div>
                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">{t("services.coveredpatios")}</p>
                <p className="text-sm font-bold text-neutral-900 mt-0.5">Custom Outdoor Pavilion</p>
              </div>
              <span className="text-[10px] font-bold text-[#3d5636] bg-[#577a4c]/10 border border-[#577a4c]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Featured Work
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
