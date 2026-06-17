import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/context/translation-context";

export function TopBar() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="w-full bg-gradient-to-r from-[#4d4d2b] to-[#404023] text-white text-xs py-[4px] px-6 md:px-8 border-b border-[#3e3e22] font-sans rounded-t-[10px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
        {/* Contact info list */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:robertsa210@icloud.com"
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
            href="https://maps.google.com/?q=San+Antonio,+TX"
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

        {/* Live indicator / Emergency services */}
        <div className="hidden lg:flex items-center gap-2.5 flex-1 justify-center">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[13px] font-medium text-white/90">
            {t("topbar.emergency")}
          </span>
        </div>

        {/* Language selector */}
        <div className="flex items-center gap-2 text-[12px] font-medium select-none text-white/50">
          <button
            onClick={() => setLanguage("en")}
            className={`flex items-center gap-1.5 cursor-pointer transition-colors ${language === "en" ? "text-white font-semibold" : "hover:text-white text-white/50"
              }`}
          >
            <span className="text-sm">🇺🇸</span> EN
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => setLanguage("es")}
            className={`flex items-center gap-1.5 cursor-pointer transition-colors ${language === "es" ? "text-white font-semibold" : "hover:text-white text-white/50"
              }`}
          >
            <span className="text-sm">🇪🇸</span> ES
          </button>
        </div>
      </div>
    </div>
  );
}
