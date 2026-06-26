import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import { motion, AnimatePresence } from "framer-motion";
import svcPressureWash from "@/assets/svc-pressure-wash.png";

const faqVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const answerVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-6 py-16 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden"
        id="faq"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full text-left flex flex-col items-start"
          >
            {/* Badge */}
            <span className="inline-flex items-center bg-gradient-to-r from-[#ffa326] to-[#111111] text-white rounded-full px-5 py-[7px] text-[11px] font-bold uppercase tracking-[0.08em] mb-6 select-none leading-none">
              {t("faq.badge")}
            </span>

            {/* Heading */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[35px] font-bold text-neutral-900 leading-tight tracking-tight mt-[-6px] sm:mt-[-12px] mb-[10px]">
              {t("faq.title")}
            </h2>

            {/* Description */}
            <p className="text-[14px] text-neutral-600 leading-[1.7] max-w-[460px] mb-7">
              {t("faq.desc")}
            </p>

            {/* Image */}
            <div className="w-full aspect-[16/7] rounded-xl overflow-hidden border border-neutral-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.06)] group">
              <img
                src={svcPressureWash}
                alt="Pressure washing service"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Accordion Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#f5f4f1] rounded-2xl p-5 lg:p-7 border border-[#e8e6e0] shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          >
            <div className="flex flex-col gap-2.5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={faqVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`w-full rounded-xl overflow-hidden transition-shadow duration-300 ${isOpen
                        ? "border border-[#e2dfd8] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                        : "border border-[#ebebeb] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:border-neutral-300/70 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`w-full text-left flex items-center justify-between px-5 py-[18px] transition-all duration-300 cursor-pointer select-none ${isOpen
                          ? "bg-[#ffa326] text-[#111111] font-extrabold"
                          : "bg-white text-neutral-900 font-semibold hover:text-[#cc7e14] active:bg-neutral-50"
                        }`}
                      aria-expanded={isOpen}
                    >
                      <span className={`text-[13.5px] sm:text-[14.5px] leading-snug pr-4 ${isOpen ? "text-[#111111]" : "text-neutral-800"}`}>
                        Q: {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-[17px] h-[17px] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#111111]" : "text-neutral-400"
                          }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          variants={answerVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          className="overflow-hidden bg-white"
                        >
                          {/* Thin separator between question header and answer */}
                          <div className="h-px bg-[#f0ede6] mx-5" />
                          <div className="px-5 py-4">
                            <p className="text-[13px] text-neutral-700 leading-[1.75] font-normal">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}