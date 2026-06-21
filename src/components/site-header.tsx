import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, ChevronDown, X, Menu, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/jrm-logo.png";
import headerBg from "@/assets/header-bg.webp";
import { TopBar } from "./top-bar";
import { useTranslation } from "@/context/translation-context";

const navItems = [
  { key: "nav.home",     to: "/",        label: "Home" },
  { key: "nav.about",    to: "/about",   label: "About" },
  { key: "nav.services", to: "/services",label: "Services" },
  { key: "nav.work",     to: "/work",    label: "Our Work" },
  { key: "nav.reviews",  to: "/reviews", label: "Reviews" },
  { key: "nav.contact",  to: "/contact", label: "Contact" },
] as const;

const servicesSubMenu = [
  { label: "Palm Trees",        to: "/palm-trees", hash: undefined },
  { label: "House Remodeling",  to: "/house-remodeling", hash: undefined },
  { label: "New Construction",  to: "/new-construction", hash: undefined },
  { label: "Fireplace",         to: "/custom-fireplaces", hash: undefined },
  { label: "Fencing",           to: "/fencing", hash: undefined },
  { label: "Hardscapes",        to: "/hardscapes", hash: undefined },
  { label: "Covered Patios",    to: "/covered-patios", hash: undefined },
  { label: "Artificial Turf",   to: "/artificial-turf", hash: undefined },
  { label: "Softscapes",        to: "/softscapes", hash: undefined },
  { label: "Outdoor Kitchens",  to: "/outdoor-kitchens", hash: undefined },
  { label: "Custom Fireplaces", to: "/custom-fireplaces", hash: undefined },
  { label: "Irrigation",        to: "/irrigation", hash: undefined },
  { label: "Landscape Lighting",to: "/landscape-lighting", hash: undefined },
] as const;

export function SiteHeader() {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("nav.home");
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]      = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => { setMenuOpen(false); setServicesOpen(false); };

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-0 px-[15px]">
        <div className="mx-auto max-w-[1400px] w-full rounded-t-[10px] overflow-hidden border-x border-t border-[#e1ded4] shadow-[0_-2px_8px_rgba(0,0,0,0.04)] bg-[#fcfbf8]">
          <TopBar />
        </div>
      </div>

      {/* ── STICKY NAV ── */}
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
              : "max-w-[1400px] mx-auto rounded-b-[20px] border-x border-b border-[#e1ded4] shadow-[0_12px_30px_rgba(0,0,0,0.08)] bg-[#fcfbf8]"
            }
          `}
        >
          <div
            className={`relative flex items-center w-full transition-all duration-300 ${
              scrolled
                ? "px-4 sm:px-6 lg:px-10 xl:px-16 py-2.5 justify-between"
                : "px-6 md:px-8 py-[10px] justify-between rounded-b-[19px]"
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
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0">
              <img
                src={logo}
                alt="JRM Construction Landscape Design"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-11 md:h-[52px]" : "h-16 md:h-20"
                }`}
              />
            </Link>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2.5">
              <a
                href="tel:2104295526"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#577a4c] to-[#3d5636] text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Phone className="h-3.5 w-3.5 fill-white text-white" />
              </a>

              {/* Premium Hamburger Button */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-[#e1ded4] bg-white shadow-sm hover:shadow-md hover:border-[#577a4c]/40 active:scale-95 transition-all duration-200 cursor-pointer group"
              >
                <span className="block w-5 h-[1.5px] bg-neutral-700 rounded-full transition-all duration-300 group-hover:bg-[#577a4c]" />
                <span className="block w-4 h-[1.5px] bg-neutral-700 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-[#577a4c]" />
                <span className="block w-3 h-[1.5px] bg-neutral-700 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-[#577a4c]" />
              </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = item.key === activeItem;
                if (item.key === "nav.services") {
                  return (
                    <div key={item.key} className="relative group py-2">
                      <Link
                        to={item.to}
                        onClick={() => setActiveItem(item.key)}
                        className={
                          isActive
                            ? "border border-[#555635] px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-[15px] font-medium text-[#555635] transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center gap-1.5"
                            : "border border-transparent px-4 py-1.5 rounded-full flex items-center gap-1.5 text-[15px] font-medium text-neutral-800 hover:text-[#4d4d2b] hover:bg-black/5 transition-all duration-200"
                        }
                      >
                        {t(item.key)}
                        <ChevronDown className="h-3.5 w-3.5 text-neutral-500 group-hover:rotate-180 transition-transform duration-250" />
                      </Link>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white/95 backdrop-blur-xl border border-[#e1ded4] rounded-2xl shadow-[0_20px_50px_rgba(43,58,38,0.15)] p-4 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 origin-top z-50">
                        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                          {servicesSubMenu.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              hash={sub.hash}
                              className="group/item flex items-center gap-2 px-3 py-2 text-[13px] font-semibold text-neutral-700 hover:text-[#3d5636] hover:bg-[#577a4c]/5 rounded-xl transition-all duration-200 hover:translate-x-1 text-left"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#577a4c]/30 group-hover/item:bg-[#3d5636] group-hover/item:scale-125 transition-all duration-200 shrink-0" />
                              <span>{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
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
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/lets-talk"
                className="rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] px-6 py-2 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                {t("nav.talk")}
              </Link>
              <a
                href="tel:2104295526"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] px-6 py-2 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <Phone className="h-3.5 w-3.5 fill-white text-white" />
                <span className="font-normal text-sm">(210) 429-5526</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── PREMIUM MOBILE FULL-SCREEN MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />

            {/* Slide-in panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[88vw] max-w-[360px] lg:hidden flex flex-col bg-white border-l border-neutral-100 shadow-[-20px_0_80px_rgba(0,0,0,0.22)]"
            >
              {/* ── Panel Header ── */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#eae8e1] bg-white">
                <img src={logo} alt="JRM Construction Landscape Design" className="h-14 w-auto object-contain" />
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-600 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* ── Nav Links ── */}
              <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
                {navItems.map((item, idx) => {
                  if (item.key === "nav.services") {
                    return (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.06 + 0.1, duration: 0.35, ease: "easeOut" }}
                      >
                        {/* Services accordion trigger */}
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left font-semibold text-[15px] text-neutral-800 hover:bg-[#577a4c]/8 hover:text-[#3d5636] transition-all duration-200 cursor-pointer group"
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#577a4c] shrink-0" />
                            Services
                          </span>
                          <motion.div
                            animate={{ rotate: servicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown className="h-4 w-4 text-neutral-400 group-hover:text-[#577a4c]" />
                          </motion.div>
                        </button>

                        {/* Services submenu */}
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-1 mb-2 pl-4 border-l-2 border-[#577a4c]/20 grid grid-cols-2 gap-x-2 gap-y-0.5">
                                {servicesSubMenu.map((sub, subIdx) => (
                                  <motion.div
                                    key={sub.label}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: subIdx * 0.03 }}
                                  >
                                    <Link
                                      to={sub.to}
                                      hash={sub.hash}
                                      onClick={closeMenu}
                                      className="block px-3 py-2 text-[12px] font-semibold text-neutral-600 hover:text-[#3d5636] hover:bg-[#577a4c]/8 rounded-lg transition-all duration-150"
                                    >
                                      {sub.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 + 0.1, duration: 0.35, ease: "easeOut" }}
                    >
                      <Link
                        to={item.to}
                        onClick={closeMenu}
                        className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl font-semibold text-[15px] text-neutral-800 hover:bg-[#577a4c]/8 hover:text-[#3d5636] transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* ── Divider + Info strip ── */}
              <div className="px-6 py-3 bg-[#f7f6f2] border-t border-[#eae8e1]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Serving San Antonio & 80-Mile Area</p>
                <p className="text-[10px] text-neutral-500">Licensed · Insured · Bonded Since 1989</p>
              </div>

              {/* ── Bottom CTA Bar ── */}
              <div className="p-4 border-t border-[#eae8e1] bg-white space-y-3">
                <Link
                  to="/lets-talk"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] py-3.5 text-white text-[13px] font-bold tracking-wide uppercase shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Free Consultation
                </Link>
                <a
                  href="tel:2104295526"
                  className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] py-3.5 text-white text-[13px] font-bold tracking-wide shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                >
                  <Phone className="h-3.5 w-3.5 fill-white text-white" />
                  (210) 429-5526
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}