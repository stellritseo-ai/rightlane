import { MapPin, Mail } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import map from "@/assets/map.webp";

const areas = [
  "San Marcos", "Canyon Lake", "Seguin",
  "Boerne", "Bulverde", "Castroville",
  "Kerrville", "Bandera", "Hondo",
  "Pleasanton", "Floresville", "Pearsall",
  "Luling", "Lockhart", "Gonzales",
];

export function QuoteSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-6 py-12 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] grid gap-10 lg:grid-cols-[1fr_1.3fr] items-stretch">

        {/* Service Area Card */}
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-center p-8 text-white flex flex-col justify-between shadow-lg"
          style={{ backgroundImage: `linear-gradient(to bottom right, rgba(77, 60, 51, 0.85), rgba(44, 32, 24, 0.9)), url(${map})` }}
        >

          <div className="relative z-10 w-full">
            {/* Badge */}
            <div className="inline-block rounded-full bg-[#221c16]/50 border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider mb-6 select-none self-start shadow-sm">
              {t("quote.area.badge")}
            </div>

            {/* Title */}
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight tracking-tight mb-6">
              {t("quote.area.title")}
            </h3>

            {/* Grid of Locations */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 w-full">
              {areas.map((a) => (
                <div
                  key={a}
                  className="group flex items-center justify-between rounded-full bg-[#3f4a1f] border border-[#2d3715] px-3.5 py-2.5 text-xs md:text-sm font-semibold text-white hover:text-[#3f4a1f] hover:bg-white hover:border-white shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-default"
                >
                  <span className="truncate pr-1">{a}</span>
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-white group-hover:text-[#3f4a1f] opacity-90 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="flex flex-col justify-start w-full lg:pl-6">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black text-[#08152e] mb-2">
            {t("quote.form.title")}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-neutral-600 mb-6 max-w-2xl">
            {t("quote.form.desc")}
          </p>

          {/* Form */}
          <form className="space-y-4 w-full" onSubmit={(e) => e.preventDefault()}>

            {/* Row 1: Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#08152e] mb-1.5">
                  {t("quote.form.first")}
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-300"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#08152e] mb-1.5">
                  {t("quote.form.last")}
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-300"
                />
              </div>
            </div>

            {/* Row 2: Email and Service select */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#08152e] mb-1.5">
                  {t("quote.form.email")}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Example@email.com"
                    className="w-full rounded-lg border border-neutral-200 pl-4 pr-10 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-300"
                  />
                  <Mail className="absolute right-3.5 h-4 w-4 text-emerald-600/80 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#08152e] mb-1.5">
                  {t("quote.form.service")}
                </label>
                <div className="relative flex items-center">
                  <select className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all appearance-none cursor-pointer text-neutral-800 pr-10">
                    <option value="remodeling">House Remodeling</option>
                    <option value="construction">New Construction</option>
                    <option value="patios">Covered Patios</option>
                    <option value="kitchens">Outdoor Kitchens</option>
                    <option value="hardscapes">Hardscapes & Concrete</option>
                    <option value="landscaping">Landscaping & Turf</option>
                    <option value="other">Other Services</option>
                  </select>
                  <div className="absolute right-3.5 pointer-events-none text-neutral-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Message textarea */}
            <div>
              <label className="block text-xs font-semibold text-[#08152e] mb-1.5">
                {t("quote.form.message.label")}
              </label>
              <textarea
                rows={4}
                placeholder={t("quote.form.message.placeholder")}
                className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="rounded-full bg-[#3f4a1f] hover:bg-[#2d3715] text-white text-xs font-bold uppercase tracking-widest px-12 py-3.5 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {t("quote.form.send")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}