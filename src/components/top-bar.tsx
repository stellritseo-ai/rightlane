import { Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "@/context/translation-context";

export function TopBar() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="w-full bg-gradient-to-r from-neutral-950 to-neutral-900 text-white text-xs py-[4px] px-6 md:px-8 border-b border-primary/30 font-sans rounded-t-[10px]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 w-full">
        {/* Contact info list - hidden on xs, shown on sm+ */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="mailto:rightlanehandymanservice@yahoo.com"
            className="flex items-center gap-2 group transition-colors"
          >
            <span className="flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 border border-white/10 text-white p-1.5 transition-all duration-200">
              <Mail className="h-3.5 w-3.5" />
            </span>
            <span className="font-normal text-white/80 group-hover:text-white text-[13px] transition-colors">
              {t("topbar.email")}
            </span>
          </a>
          <a
            href="https://maps.google.com/?q=Clearwater,+FL+33756"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group transition-colors"
          >
            <span className="flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 border border-white/10 text-white p-1.5 transition-all duration-200">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            <span className="font-normal text-white/80 group-hover:text-white text-[13px] transition-colors">
              {t("topbar.location")}
            </span>
          </a>
        </div>

        {/* Right Area: Social Media & Language Selector */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-1.5 md:py-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/40 hover:text-primary text-white p-1.5 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/40 hover:text-primary text-white p-1.5 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/40 hover:text-primary text-white p-1.5 transition-all duration-200"
              aria-label="YouTube"
            >
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/40 hover:text-primary text-white p-1.5 transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-white/20" />

          {/* Language Selector */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                language === "en"
                  ? "bg-primary/20 border-primary text-primary font-medium shadow-[0_0_8px_rgba(255,163,38,0.15)]"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
              title="English"
            >
              <span className="text-[13px] leading-none">🇺🇸</span>
              <span className="text-[10px] tracking-wider font-semibold uppercase">EN</span>
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                language === "es"
                  ? "bg-primary/20 border-primary text-primary font-medium shadow-[0_0_8px_rgba(255,163,38,0.15)]"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
              title="Español"
            >
              <span className="text-[13px] leading-none">🇪🇸</span>
              <span className="text-[10px] tracking-wider font-semibold uppercase">ES</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
