import { useEffect, useState, useRef } from "react";
import hit1 from "@/assets/hit1.png";
import hit2 from "@/assets/hit2.png";
import hit3 from "@/assets/hit3.png";
import exp from "@/assets/hit4.png";
import { useTranslation } from "@/context/translation-context";
import statsCleanup from "@/assets/stats-cleanup.png";

function AnimatedCounter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.includes("+") ? "+" : "";
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const end = numericValue;
          const duration = 2000; // 2 seconds animation
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function: easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeProgress * end);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [numericValue]);

  const formattedCount = count.toLocaleString();

  return (
    <span ref={elementRef}>
      {formattedCount}{suffix}
    </span>
  );
}

const stats = [
  { icon: hit1, value: "5,000+", labelKey: "stats.label.complete_project" },
  { icon: hit2, value: "4,900+", labelKey: "stats.label.happy_clients" },
  { icon: hit3, value: "15+", labelKey: "stats.label.expert_member" },
  { icon: exp, value: "25+", labelKey: "stats.label.years_experience" },
] as const;

export function StatsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-6 py-12 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Title, Description, Button, and Cards */}
          <div className="w-full lg:col-span-8 flex flex-col justify-between z-10">
            <div>
              {/* Title */}
              <h2 className="text-[26px] sm:text-[32px] font-bold text-neutral-900 leading-tight mb-4 tracking-tight">
                {t("stats.title")}
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-neutral-700 leading-relaxed mb-6 max-w-[760px] font-medium">
                {t("stats.desc")}
              </p>

              {/* Gradient Pill Button */}
              <div className="mb-8 select-none">
                <a
                  href="tel:7276420201"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#0d0d0d] to-[#ffa326] text-white text-[12px] sm:text-xs font-bold rounded-full px-6 py-3.5 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 cursor-pointer"
                >
                  Call Emergency Line: (727) 642-0201
                </a>
              </div>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map(({ icon, value, labelKey }, i) => (
                  <div
                    key={i}
                    className={`group bg-white border rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center text-center select-none transition-all duration-300 hover:-translate-y-1.5 ${
                      i === 0 
                        ? "border-[#ffa326] border-2 shadow-[0_8px_24px_rgba(255,163,38,0.12)] hover:shadow-[0_20px_35px_rgba(255,163,38,0.22)]" 
                        : "border-neutral-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[#ffa326]/40 hover:shadow-[0_15px_30px_rgba(255,163,38,0.12)]"
                    }`}
                  >
                    {/* Icon Wrapper for uniform alignment */}
                    <div className="h-12 flex items-center justify-center mb-3">
                      <img
                        src={icon}
                        alt={value}
                        className="h-9 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Value */}
                    <div className="text-xl md:text-2xl font-black text-neutral-900 leading-none tracking-tight transition-colors duration-300 group-hover:text-[#cc7e14]">
                      <AnimatedCounter value={value} />
                    </div>

                    {/* Label */}
                    <div className="text-[9px] md:text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest mt-2 leading-none transition-colors duration-300 group-hover:text-neutral-500">
                      {t(labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image Container */}
          <div className="w-full lg:col-span-4 h-[220px] sm:h-[280px] lg:h-[430px] relative rounded-3xl overflow-hidden border border-neutral-200/20 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
            <img
              src={statsCleanup}
              alt="Post-construction cleanup"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </section>
    </div>
  );
}