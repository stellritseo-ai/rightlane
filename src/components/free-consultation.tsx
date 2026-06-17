import { useTranslation } from "@/context/translation-context";
import c1 from "@/assets/c1.webp";
import c2 from "@/assets/c2.webp";
import c3 from "@/assets/c3.webp";
import c4 from "@/assets/c4.webp";
import { motion } from "framer-motion";

export function FreeConsultationSection() {
  const { t } = useTranslation();

  const cards = [
    {
      titleKey: "freeconsult.card1.title",
      descKey: "freeconsult.card1.desc",
      icon: c1,
    },
    {
      titleKey: "freeconsult.card2.title",
      descKey: "freeconsult.card2.desc",
      icon: c2,
    },
    {
      titleKey: "freeconsult.card3.title",
      descKey: "freeconsult.card3.desc",
      icon: c3,
    },
    {
      titleKey: "freeconsult.card4.title",
      descKey: "freeconsult.card4.desc",
      icon: c4,
    },
  ] as const;

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] py-16 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://res.cloudinary.com/dgpdydebp/video/upload/v1781720948/JRM_Construction_Landscaping_Design_vuaim3.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-black/65 z-10" />

        {/* Content wrapper */}
        <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col items-center">
          {/* Header Title */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white text-[22px] sm:text-[26px] md:text-3xl lg:text-[31px] leading-snug font-bold tracking-tight mb-[15px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            {t("freeconsult.title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-white/90 text-sm md:text-[15px] leading-relaxed max-w-5xl mx-auto mb-12 font-light tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
          >
            {t("freeconsult.desc")}
          </motion.p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-2">
            {cards.map((c, idx) => {
              return (
                <motion.div
                  key={c.titleKey}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/35 hover:bg-white/15 rounded-[10px] p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 min-h-[300px] cursor-default"
                >
                  {/* Circle Badge Icon */}
                  <div className="w-16 h-16 rounded-full border border-white/30 group-hover:border-white/50 flex items-center justify-center mb-6 select-none bg-white/5 shadow-inner transition-colors duration-300 overflow-hidden">
                    <img
                      src={c.icon}
                      alt={t(c.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-[17px] font-bold tracking-wide capitalize mb-3 drop-shadow-sm">
                    {t(c.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-[13px] md:text-sm leading-relaxed font-light">
                    {t(c.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
