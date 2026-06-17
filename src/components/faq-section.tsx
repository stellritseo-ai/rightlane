import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import welBg from "@/assets/wel-bg.png";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useTranslation();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
      <section 
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] bg-cover bg-center px-5 sm:px-8 py-12 md:px-12 lg:px-14 md:py-16 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative"
        style={{ backgroundImage: `url(${welBg})` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full relative z-10">
          
          {/* Left Column: Badge, Title, Description, Video & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start w-full lg:sticky lg:top-24">
            {/* Badge */}
            <div className="inline-block bg-[#2c241d] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-6 select-none">
              {t("faq.badge")}
            </div>

            {/* Title */}
            <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-extrabold text-neutral-900 leading-tight mb-4 tracking-tight">
              {t("faq.title")}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-[15px] text-neutral-700 leading-relaxed mb-6 font-medium">
              {t("faq.desc")}
            </p>

            {/* Video Player Container */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-neutral-200/50 bg-black">
              <video
                src="https://res.cloudinary.com/dgpdydebp/video/upload/v1781726798/IMG_0023_jcfal6.mov"
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Consultation CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#2c241d] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full px-8 py-4.5 transition-all duration-300 shadow-md hover:bg-[#1a1511] hover:shadow-[0_12px_24px_rgba(44,36,29,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer mt-6 select-none"
            >
              {t("faq.btn.consultation")}
            </a>
          </div>

          {/* Right Column: Accordion Card Wrapper */}
          <div className="lg:col-span-6 w-full lg:sticky lg:top-24">
            <div className="w-full bg-white rounded-[32px] p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.025)] border border-neutral-100/80 space-y-4">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="w-full">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-[#f4f6f8] hover:bg-[#ebedf0] transition-colors duration-200 rounded-2xl text-left"
                    >
                      <span className="font-bold text-neutral-900 text-sm md:text-[15px] leading-snug">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-neutral-800 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 py-4 text-xs md:text-sm text-neutral-600 leading-relaxed">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}