import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Phone, ChevronDown, X, Menu, ExternalLink, Sparkles, Droplets, Hammer, Truck, Wrench, Trash2, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { TopBar } from "./top-bar";
import { useTranslation } from "@/context/translation-context";

const navItems = [
  { key: "nav.home", to: "/", label: "Home" },
  { key: "nav.about", to: "/about-us", label: "About" },
  { key: "nav.services", to: "#", label: "Services" },
  { key: "nav.work", to: "/our-work", label: "Our Work" },
  { key: "nav.reviews", to: "/reviews", label: "Reviews" },
  { key: "nav.contact", to: "/contact-us", label: "Contact" },
] as const;

const servicesSubMenu = [
  { label: "Post Construction Cleaning", to: "/post-construction-cleaning", hash: undefined, icon: Sparkles, desc: "Detailed move-in ready cleaning" },
  { label: "Pressure Washing",           to: "/pressure-washing",           hash: undefined, icon: Droplets, desc: "Restore driveways, decks & siding" },
  { label: "Demolition",                 to: "/demolition",                 hash: undefined, icon: Hammer, desc: "Safe structural dismantling" },
  { label: "Junk Removal & Hauling",     to: "/junk-removal",               hash: undefined, icon: Truck, desc: "Full-service waste hauling" },
  { label: "Property Maintenance",       to: "/property-maintenance",       hash: undefined, icon: Wrench, desc: "General handyman & home repairs" },
  { label: "Waste & Debris Removal",     to: "/waste-debris-removal",       hash: undefined, icon: Trash2, desc: "Drywall, metal & concrete clearing" },
  { label: "Landscaping",                to: "/landscaping",                hash: undefined, icon: Leaf, desc: "Garden upkeep, sod & mulching" },
] as const;

export function SiteHeader() {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const getActiveItem = () => {
    if (currentPath === "/") return "nav.home";
    if (currentPath.startsWith("/about-us")) return "nav.about";
    if (
      currentPath.startsWith("/services") ||
      currentPath.startsWith("/post-construction-cleaning") ||
      currentPath.startsWith("/pressure-washing") ||
      currentPath.startsWith("/demolition") ||
      currentPath.startsWith("/junk-removal") ||
      currentPath.startsWith("/property-maintenance") ||
      currentPath.startsWith("/waste-debris-removal") ||
      currentPath.startsWith("/landscaping")
    )
      return "nav.services";
    if (currentPath.startsWith("/our-work")) return "nav.work";
    if (currentPath.startsWith("/reviews")) return "nav.reviews";
    if (currentPath.startsWith("/contact-us")) return "nav.contact";
    if (currentPath.startsWith("/free-estimate")) return "nav.estimate";
    return "";
  };
  const activeItem = getActiveItem();

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
        <div className="mx-auto max-w-[1400px] w-full rounded-t-[10px] overflow-hidden border-x border-t border-[#e1ded4] shadow-[0_-2px_8px_rgba(0,0,0,0.04)] bg-white">
          <TopBar />
        </div>
      </div>

      {/* ── STICKY NAV ── */}
      <div
        className={`
          sticky top-0 z-50 w-full
          transition-all duration-300 ease-in-out
          ${scrolled
            ? "bg-white/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border-b border-[#e1ded4]"
            : "bg-[#f4f3ef] px-[15px] pb-[5px]"
          }
        `}
      >
        <div
          className={`
            w-full transition-all duration-300 ease-in-out
            ${scrolled
              ? "max-w-full mx-auto"
              : "max-w-[1400px] mx-auto rounded-b-[20px] border-x border-b border-[#e1ded4] shadow-[0_12px_30px_rgba(0,0,0,0.08)] bg-white"
            }
          `}
        >
          <div
            className={`relative flex items-center w-full transition-all duration-300 ${scrolled
              ? "px-4 sm:px-6 lg:px-10 xl:px-16 py-2.5 justify-between"
              : "px-6 md:px-8 py-[10px] justify-between rounded-b-[19px]"
              }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0">
              <img
                src={logo}
                alt="Right Lane Handyman Services, LLC"
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-9 sm:h-11 md:h-[52px]" : "h-12 sm:h-14 md:h-16 lg:h-20"
                  }`}
              />
            </Link>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2.5">
              <a
                href="tel:7276420201"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#ffa326] to-[#cc7e14] text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Phone className="h-3.5 w-3.5 fill-white text-white" />
              </a>

              {/* Premium Hamburger Button */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-[#e1ded4] bg-white shadow-sm hover:shadow-md hover:border-[#ffa326]/40 active:scale-95 transition-all duration-200 cursor-pointer group"
              >
                <span className="block w-5 h-[1.5px] bg-neutral-700 rounded-full transition-all duration-300 group-hover:bg-[#ffa326]" />
                <span className="block w-4 h-[1.5px] bg-neutral-700 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-[#ffa326]" />
                <span className="block w-3 h-[1.5px] bg-neutral-700 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-[#ffa326]" />
              </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 ml-auto mr-8">
              {navItems.map((item) => {
                const isActive = item.key === activeItem;
                if (item.key === "nav.services") {
                  return (
                    <div key={item.key} className="relative group py-2">
                      <Link
                        to={item.to}
                        className={
                          isActive
                            ? "border border-[#cc7e14] px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-[15px] font-medium text-[#cc7e14] transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center gap-1.5"
                            : "border border-transparent px-4 py-1.5 rounded-full flex items-center gap-1.5 text-[15px] font-medium text-neutral-800 hover:text-[#b26b0d] hover:bg-black/5 transition-all duration-200"
                        }
                      >
                        {t(item.key)}
                        <ChevronDown className="h-3.5 w-3.5 text-neutral-500 group-hover:rotate-180 transition-transform duration-250" />
                      </Link>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-white/95 backdrop-blur-xl border border-neutral-200/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-5 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 origin-top z-50">
                        <div className="grid grid-cols-2 gap-3">
                          {servicesSubMenu.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              hash={sub.hash}
                              className="group/item flex items-start gap-3.5 p-3 rounded-2xl hover:bg-copper/5 transition-all duration-200 text-left"
                            >
                              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-copper/5 text-copper group-hover/item:bg-copper group-hover/item:text-white transition-all duration-300 shrink-0 shadow-xs">
                                <sub.icon className="h-4.5 w-4.5" />
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span className="text-[13px] font-bold text-neutral-900 group-hover/item:text-copper transition-colors duration-200 leading-snug">
                                  {sub.label}
                                </span>
                                <span className="text-[11px] text-neutral-500 font-medium leading-normal mt-0.5">
                                  {sub.desc}
                                </span>
                              </div>
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
                    className={
                      isActive
                        ? "border border-[#cc7e14] px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-[15px] font-medium text-[#cc7e14] transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                        : "border border-transparent px-4 py-1.5 rounded-full flex items-center gap-1 text-[15px] font-medium text-neutral-800 hover:text-[#b26b0d] hover:bg-black/5 transition-all duration-200"
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
                to="/free-estimate"
                className={`rounded-full px-6 py-2 text-sm transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                  activeItem === "nav.estimate"
                    ? "bg-[#cc7e14] text-white ring-2 ring-[#ffa326] ring-offset-2 font-bold"
                    : "bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] text-white font-normal"
                }`}
              >
                Free Estimate
              </Link>
              <a
                href="tel:7276420201"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] px-6 py-2 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <Phone className="h-3.5 w-3.5 fill-white text-white" />
                <span className="font-normal text-sm">(727) 642-0201</span>
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
                <img src={logo} alt="Right Lane Handyman Services" className="h-14 w-auto object-contain" />
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
                          className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left font-semibold text-[15px] text-neutral-800 hover:bg-[#ffa326]/8 hover:text-[#cc7e14] transition-all duration-200 cursor-pointer group"
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffa326] shrink-0" />
                            Services
                          </span>
                          <motion.div
                            animate={{ rotate: servicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown className="h-4 w-4 text-neutral-400 group-hover:text-[#ffa326]" />
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
                              <div className="ml-4 mt-1 mb-2 pl-4 border-l-2 border-[#ffa326]/20 grid grid-cols-2 gap-x-2 gap-y-0.5">
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
                                      className="flex items-center gap-2 px-2.5 py-1.5 text-[12px] font-semibold text-neutral-600 hover:text-copper hover:bg-copper/5 rounded-lg transition-all duration-150 text-left"
                                    >
                                      <sub.icon className="h-3.5 w-3.5 text-copper shrink-0" />
                                      <span>{sub.label}</span>
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

                  const isActive = item.to === currentPath;

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
                        className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 ${
                          isActive
                            ? "bg-[#ffa326]/10 text-[#cc7e14]"
                            : "text-neutral-800 hover:bg-[#ffa326]/8 hover:text-[#cc7e14]"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                          isActive ? "bg-[#cc7e14]" : "bg-neutral-300"
                        }`} />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* ── Divider + Info strip ── */}
              <div className="px-6 py-3 bg-[#f7f6f2] border-t border-[#eae8e1]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Serving Clearwater & Surrounding Areas</p>
                <p className="text-[10px] text-neutral-500">Licensed · Insured · Bonded · 25 Years of Experience</p>
              </div>

              {/* ── Bottom CTA Bar ── */}
              <div className="p-4 border-t border-[#eae8e1] bg-white space-y-3">
                <Link
                  to="/free-estimate"
                  onClick={closeMenu}
                  className={`flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-[13px] font-bold tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] ${
                    currentPath === "/free-estimate"
                      ? "bg-[#cc7e14] text-white ring-2 ring-[#ffa326] ring-offset-2"
                      : "bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffa326] hover:to-[#995906] text-white"
                  }`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Free Estimate
                </Link>
                <a
                  href="tel:7276420201"
                  className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] py-3.5 text-white text-[13px] font-bold tracking-wide shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                >
                  <Phone className="h-3.5 w-3.5 fill-white text-white" />
                  (727) 642-0201
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}