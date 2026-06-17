import { Facebook, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import { useTranslation } from "@/context/translation-context";

export function SiteFooter() {
  const { t, language } = useTranslation();

  const quickLinks = [
    "/",
    "/about",
    "/#services",
    "/#gallery",
    "/reviews",
    "/#consultation",
    "/contact",
  ];

  return (
    <div className="w-full bg-[#f4f3ef] pt-0 pb-[15px] px-[15px]">
      <footer
        className="mx-auto max-w-[1400px] w-full bg-[#1c140d] text-white px-8 md:px-12 py-16 rounded-t-none rounded-b-[10px] mt-0 border border-neutral-800/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(28,20,13,0.97), rgba(28,20,13,0.98)), url(/src/assets/wel-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main 4-Column Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 relative z-10">
          {/* Column 1: Business Logo & Description (Width: 5/12) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="JRM Construction Landscape Design" className="h-14 md:h-16 w-auto object-contain" />
            </div>
            <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-light pr-0 lg:pr-8">
              {t("footer.desc")}
            </p>
          </div>

          {/* Column 2: Services (Width: 2/12) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              {t("footer.title.services")}
            </h4>
            <ul className="mt-4 space-y-3.5 text-[15px] text-neutral-300 font-light">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <li key={num}>
                  <a href="/#services" className="hover:text-white hover:translate-x-0.5 transition-all duration-200 block">
                    {t(`footer.service.${num}` as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (Width: 2/12) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              {t("footer.title.links")}
            </h4>
            <ul className="mt-4 space-y-3.5 text-[15px] text-neutral-300 font-light">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <li key={num}>
                  <a href={quickLinks[num - 1]} className="hover:text-white hover:translate-x-0.5 transition-all duration-200 block">
                    {t(`footer.link.${num}` as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Width: 3/12) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-white mb-5 tracking-wide">
              {t("footer.title.contact")}
            </h4>
            <ul className="mt-4 space-y-3.5 text-[15px] text-neutral-300 font-light">
              <li className="leading-normal">{t("footer.contact.consultant")}</li>
              <li className="hover:text-white transition-colors duration-200">
                <a href="tel:2104295526">{t("footer.contact.robert")}</a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a href="tel:2103793505">{t("footer.contact.arturo")}</a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a href="mailto:robertsa210@icloud.com">{t("footer.contact.email")}</a>
              </li>
              <li>{t("footer.contact.address")}</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3.5">
              {/* Facebook */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3b5998] hover:bg-[#3b5998]/80 text-white transition-all duration-300 shadow-sm"
              >
                <Facebook className="h-4.5 w-4.5 fill-current" />
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1da1f2] hover:bg-[#1da1f2]/80 text-white transition-all duration-300 shadow-sm"
              >
                <Twitter className="h-4.5 w-4.5 fill-current" />
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff0000] hover:bg-[#ff0000]/80 text-white transition-all duration-300 shadow-sm"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
              {/* X */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black hover:bg-neutral-800 text-white transition-all duration-300 shadow-sm"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Underlined SEO Links Block */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col gap-5 text-[13px] md:text-sm text-neutral-300 font-light text-center relative z-10 w-full">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-3">
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              San Antonio Landscape Design Contractor
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Licensed Remodeler San Antonio
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Custom Outdoor Kitchen San Antonio
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Hardscaping Contractor Near Me
            </a>
          </div>
          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-3">
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Landscaping and construction company
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Kitchen remodel San Antonio
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Whole house remodeling San Antonio
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Custom home builder San Antonio
            </a>
          </div>
          {/* Row 3 */}
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-3">
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              New home construction contractor
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Fireplace installation San Antonio
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Fence installation San Antonio
            </a>
            <a href="#" className="underline hover:text-white transition-colors duration-200">
              Artificial grass installation San Antonio
            </a>
          </div>
        </div>

        {/* Copyright & Branding */}
        <div className="mt-12 mb-[-32px] rounded-2xl sm:rounded-full bg-white/[0.02] border border-white/5 py-3 sm:py-3.5 text-xs text-neutral-400 tracking-wide relative z-10 w-full backdrop-blur-md px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
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