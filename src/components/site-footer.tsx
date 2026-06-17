import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import { useTranslation } from "@/context/translation-context";

export function SiteFooter() {
  const { t, language } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] pt-0 pb-[15px] px-[15px]">
      <footer
        className="mx-auto max-w-[1400px] w-full bg-[#1a1108] text-white px-8 md:px-12 py-16 rounded-t-none rounded-b-[10px] mt-0 border border-neutral-800/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(26,17,8,0.97), rgba(26,17,8,0.98)), url(/src/assets/wel-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 relative z-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="JRM Construction Landscape Design" className="h-14 md:h-16 w-auto object-contain" />
            </div>
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-md">
              {t("footer.desc")}
            </p>
          </div>

          <FooterCol
            title={t("footer.services.title")}
            links={[
              t("services.remodeling"),
              t("services.construction"),
              t("services.turf"),
              t("services.softscapes"),
              t("services.fencing"),
              t("services.hardscapes"),
              t("services.kitchens"),
            ]}
          />
          <FooterCol
            title={t("footer.links.title")}
            links={[
              t("nav.home"),
              t("nav.about"),
              t("nav.services"),
              t("nav.work"),
              t("nav.reviews"),
              t("nav.contact"),
            ]}
          />
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#a5b89d]">
              {t("footer.contact.title")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/50">
              <li className="hover:text-white transition-colors duration-200">{t("footer.contact.address")}</li>
              <li className="hover:text-white transition-colors duration-200">{t("footer.contact.street")}</li>
              <li className="hover:text-white transition-colors duration-200">
                <a href="tel:2104295526" className="hover:text-white transition-colors duration-200">(210) 429-5526</a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a href="mailto:info@jrmconstruction.com" className="hover:text-white transition-colors duration-200">info@jrmconstruction.com</a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-[#4a6741] hover:text-white hover:border-[#4a6741] transition-all duration-300 shadow-sm"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="mt-[30px] border-t border-white/10 pt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-semibold text-white/30 uppercase tracking-wider relative z-10">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <a key={idx} href="#" className="hover:text-white transition-colors duration-200">
              {t(`footer.seo.${idx}` as any)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-[20px] mb-[-32px] rounded-2xl sm:rounded-full bg-white/[0.03] border border-white/10 py-3 sm:py-3.5 text-xs text-white/70 tracking-wide relative z-10 w-full backdrop-blur-md px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
          <span>{t("footer.copyright")}</span>
          <span className="md:text-right shrink-0">
            {language === "es" ? "Diseño por" : "Design By"}{" "}
            <a
              href="https://stellrit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a5b89d] hover:text-white font-bold transition-colors duration-200 hover:underline"
            >
              StellR IT LLC
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#a5b89d]">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm text-white/50">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-white hover:translate-x-0.5 transition-all duration-200 block">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}