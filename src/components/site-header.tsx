import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, ChevronDown, Menu } from "lucide-react";
import logo from "@/assets/jrm-logo.png";
import headerBg from "@/assets/header-bg.webp";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { TopBar } from "./top-bar";
import { useTranslation } from "@/context/translation-context";

const navItems = [
  { key: "nav.home", to: "/" },
  { key: "nav.about", to: "/" },
  { key: "nav.services", to: "/", hasDropdown: true },
  { key: "nav.work", to: "/" },
  { key: "nav.reviews", to: "/" },
  { key: "nav.contact", to: "/" },
] as const;

export function SiteHeader() {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("nav.home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── TOP BAR — scrolls away with the page (NOT sticky) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-0 px-[15px]">
        <div className="mx-auto max-w-[1400px] w-full rounded-t-[10px] overflow-hidden border-x border-t border-[#e1ded4] shadow-[0_-2px_8px_rgba(0,0,0,0.04)] bg-[#fcfbf8]">
          <TopBar />
        </div>
      </div>

      {/* ── STICKY NAV — sibling of page sections so it sticks within full page height ── */}
      <div
        className={`
          sticky top-0 z-50 w-full
          transition-all duration-300 ease-in-out
          ${scrolled
            ? "bg-[#fcfbf8]/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border-b border-[#e1ded4]"
            : "bg-[#f4f3ef] px-[15px] pb-[5px]"
          }
        `}
      >
        <div
          className={`
            w-full transition-all duration-300 ease-in-out
            ${scrolled
              ? "max-w-full mx-auto"
              : "max-w-[1400px] mx-auto rounded-b-[20px] overflow-hidden border-x border-b border-[#e1ded4] shadow-[0_12px_30px_rgba(0,0,0,0.08)] bg-[#fcfbf8]"
            }
          `}
        >
          {/* Nav content row */}
          <div
            className={`flex items-center justify-between w-full transition-all duration-300 ${
              scrolled ? "px-4 sm:px-6 lg:px-10 xl:px-16 py-2.5" : "px-6 md:px-8 py-[10px]"
            }`}
            style={
              !scrolled
                ? {
                    backgroundImage: `url(${headerBg})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#fcfbf8",
                  }
                : undefined
            }
          >
            {/* Logo — shrinks slightly when scrolled */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0">
              <img
                src={logo}
                alt="JRM Construction Landscape Design"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-11 md:h-[52px]" : "h-16 md:h-20"
                }`}
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = item.key === activeItem;
                return (
                  <Link
                    key={item.key}
                    to={item.to}
                    onClick={() => setActiveItem(item.key)}
                    className={
                      isActive
                        ? "border border-[#555635] px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-[15px] font-medium text-[#555635] transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                        : "border border-transparent px-4 py-1.5 rounded-full flex items-center gap-1 text-[15px] font-medium text-neutral-800 hover:text-[#4d4d2b] hover:bg-black/5 transition-all duration-200"
                    }
                  >
                    {t(item.key)}
                    {"hasDropdown" in item && item.hasDropdown && !isActive && (
                      <ChevronDown className="h-3.5 w-3.5 text-neutral-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] px-6 py-2 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                {t("nav.talk")}
              </a>
              <a
                href="tel:2104295526"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] px-6 py-2 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <Phone className="h-3.5 w-3.5 fill-white text-white" />
                <span className="font-normal text-sm">(210) 429-5526</span>
              </a>
            </div>

            {/* Mobile: phone icon + hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="tel:2104295526"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] text-white transition-all duration-200"
              >
                <Phone className="h-3.5 w-3.5 fill-white text-white" />
              </a>

              <Sheet>
                <SheetTrigger asChild>
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 bg-white/80 hover:bg-neutral-50 active:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] text-neutral-700 transition-all duration-200 cursor-pointer">
                    <Menu className="h-4 w-4" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#fcfbf8] border-l border-[#e1ded4] p-6 font-sans">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
                      <img src={logo} alt="JRM" className="h-10 w-10 object-contain" />
                      <div className="leading-none text-[#565737]">
                        <div className="text-md font-bold tracking-wider">JRM</div>
                        <div className="text-xs font-semibold tracking-wider text-[#6c6d4d]">CONSTRUCTION</div>
                      </div>
                    </div>

                    <nav className="flex flex-col gap-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.key}
                          to={item.to}
                          className="text-lg font-medium text-neutral-800 hover:text-[#4d4d2b] transition-colors py-1.5 border-b border-neutral-100"
                        >
                          {t(item.key)}
                        </Link>
                      ))}
                    </nav>

                    <a
                      href="tel:2104295526"
                      className="flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] py-4 text-white transition-all duration-200 shadow-sm w-full mt-4"
                    >
                      <Phone className="h-4 w-4 fill-white text-white" />
                      <span className="font-normal">(210) 429-5526</span>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}