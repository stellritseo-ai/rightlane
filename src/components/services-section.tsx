import cleaning from "@/assets/svc-cleaning.png";
import pressureWash from "@/assets/svc-pressure-wash.png";
import demolition from "@/assets/svc-demolition.png";
import junkRemoval from "@/assets/svc-junk-removal.png";
import maintenance from "@/assets/svc-maintenance.png";
import debrisRemoval from "@/assets/svc-debris-removal.png";
import landscaping from "@/assets/svc-landscaping.png";
import { useTranslation } from "@/context/translation-context";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const services = [
  { key: "services.cleaning", image: cleaning },
  { key: "services.pressurewash", image: pressureWash },
  { key: "services.demolition", image: demolition },
  { key: "services.junkremoval", image: junkRemoval },
  { key: "services.maintenance", image: maintenance },
  { key: "services.debrisremoval", image: debrisRemoval },
  { key: "services.landscaping", image: landscaping },
] as const;

export function ServicesSection() {
  const { t } = useTranslation();

  // First 3 items for the top row grid
  const topItems = services.slice(0, 3);
  // Remaining 7 items for the second row carousel slider (duplicated to ensure seamless infinite looping)
  const slideItems = [...services.slice(3), ...services.slice(3)];

  return (
    <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
      <section id="services" className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] overflow-hidden">

        {/* Top Row Grid: Left Text Column + 3 Right Image Cards */}
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full"
          >
            <div className="pr-2 mb-6 lg:mb-0">
              <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-5">
                {t("services.badge")}
              </span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] -mt-[5px] -mb-[10px] leading-tight font-bold text-neutral-900 tracking-tight">
                {t("services.title")}
              </h2>
              <p className="mt-5 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                {t("services.description")}
              </p>
              <div className="mt-7">
                <Link
                  to="#"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] text-white rounded-full px-7 py-3 text-[14px] font-bold shadow-[0_4px_14px_rgba(204,126,20,0.3)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                >
                  {t("services.btn.more")}
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Top 3 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {topItems.map((s, idx) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                className="group relative rounded-2xl overflow-hidden shadow-md bg-neutral-950 h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[380px] border border-neutral-900/5 cursor-pointer"
              >
                {/* Background image */}
                <img
                  src={s.image}
                  alt={t(s.key)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                {/* Card Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                  <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-[15px] sm:text-base font-bold text-white leading-tight uppercase">
                      {t(s.key)}
                    </h3>

                    {/* Hover detail drawer */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                      <p className="text-[12px] text-white/85 leading-snug mt-1.5 line-clamp-3 max-w-[95%]">
                        {t((s.key + ".desc") as any)}
                      </p>

                      <div className="pt-2">
                        <Link
                          to="#"
                          className="relative inline-flex items-center gap-1 text-[#cc7e14] hover:text-[#ffa326] font-bold text-[10px] uppercase tracking-widest pb-0.5 transition-colors duration-300"
                        >
                          <span>View More</span>
                          <ArrowRight className="w-3 h-3" />
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cc7e14] hover:bg-[#ffa326] transition-colors duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row Grid: Slider / Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 relative px-2 md:px-0"
        >
          <Carousel
            plugins={[
              AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-5">
              {slideItems.map((s, idx) => (
                <CarouselItem key={`${s.key}-${idx}`} className="pl-5 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="group relative rounded-2xl overflow-hidden shadow-md bg-neutral-950 h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[380px] border border-neutral-900/5 cursor-pointer">
                    {/* Background image */}
                    <img
                      src={s.image}
                      alt={t(s.key)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center">
                      <div className="flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2">
                        <h3 className="text-[15px] sm:text-base font-bold text-white leading-tight uppercase">
                          {t(s.key)}
                        </h3>

                        {/* Hover detail drawer */}
                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center">
                          <p className="text-[12px] text-white/85 leading-snug mt-1.5 line-clamp-3 max-w-[95%]">
                            {t((s.key + ".desc") as any)}
                          </p>

                          <div className="pt-2">
                            <Link
                              to="#"
                              className="relative inline-flex items-center gap-1 text-[#cc7e14] hover:text-[#ffa326] font-bold text-[10px] uppercase tracking-widest pb-0.5 transition-colors duration-300"
                            >
                              <span>View More</span>
                              <ArrowRight className="w-3 h-3" />
                              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cc7e14] hover:bg-[#ffa326] transition-colors duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </section>
    </div>
  );
}