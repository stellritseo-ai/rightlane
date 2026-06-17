import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { X, Mail, MapPin, ChevronDown, Phone, Menu, ClipboardList, Calendar, ArrowLeft, ArrowRight, Images, User, Star, Facebook, Twitter, Youtube, Instagram, Send, MessageCircle } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { u as useTranslation, f as favIcon } from "./router-7UszhZqY.js";
import useEmblaCarousel from "embla-carousel-react";
import { Slot } from "@radix-ui/react-slot";
import AutoScroll from "embla-carousel-auto-scroll";
import "@tanstack/react-query";
const logo = "/assets/jrm-logo-BUZWGreY.png";
const headerBg = "/assets/header-bg-B3BM_hOv.webp";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function TopBar() {
  const { language, setLanguage, t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-gradient-to-r from-[#4d4d2b] to-[#404023] text-white text-xs py-[4px] px-6 md:px-8 border-b border-[#3e3e22] font-sans rounded-t-[10px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-3 w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "mailto:robertsa210@icloud.com",
          className: "flex items-center gap-2 group transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 border border-white/10 text-white p-1.5 transition-all duration-200", children: /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-normal text-white/80 group-hover:text-white text-[13px] transition-colors", children: t("topbar.email") })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://maps.google.com/?q=San+Antonio,+TX",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 group transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 border border-white/10 text-white p-1.5 transition-all duration-200", children: /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-normal text-white/80 group-hover:text-white text-[13px] transition-colors", children: t("topbar.location") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2.5 flex-1 justify-center", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex h-2 w-2 relative", children: [
        /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
        /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-500" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[13px] font-medium text-white/90", children: t("topbar.emergency") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[12px] font-medium select-none text-white/50", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setLanguage("en"),
          className: `flex items-center gap-1.5 cursor-pointer transition-colors ${language === "en" ? "text-white font-semibold" : "hover:text-white text-white/50"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "🇺🇸" }),
            " EN"
          ]
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-white/20", children: "|" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setLanguage("es"),
          className: `flex items-center gap-1.5 cursor-pointer transition-colors ${language === "es" ? "text-white font-semibold" : "hover:text-white text-white/50"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "🇪🇸" }),
            " ES"
          ]
        }
      )
    ] })
  ] }) });
}
const navItems = [
  { key: "nav.home", to: "/" },
  { key: "nav.about", to: "/" },
  { key: "nav.services", to: "/", hasDropdown: true },
  { key: "nav.work", to: "/" },
  { key: "nav.reviews", to: "/" },
  { key: "nav.contact", to: "/" }
];
function SiteHeader() {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("nav.home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] pt-[15px] pb-0 px-[15px]", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] w-full rounded-t-[10px] overflow-hidden border-x border-t border-[#e1ded4] shadow-[0_-2px_8px_rgba(0,0,0,0.04)] bg-[#fcfbf8]", children: /* @__PURE__ */ jsx(TopBar, {}) }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `
          sticky top-0 z-50 w-full
          transition-all duration-300 ease-in-out
          ${scrolled ? "bg-[#fcfbf8]/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border-b border-[#e1ded4]" : "bg-[#f4f3ef] px-[15px] pb-[5px]"}
        `,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `
            w-full transition-all duration-300 ease-in-out
            ${scrolled ? "max-w-full mx-auto" : "max-w-[1400px] mx-auto rounded-b-[20px] overflow-hidden border-x border-b border-[#e1ded4] shadow-[0_12px_30px_rgba(0,0,0,0.08)] bg-[#fcfbf8]"}
          `,
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `flex items-center justify-between w-full transition-all duration-300 ${scrolled ? "px-4 sm:px-6 lg:px-10 xl:px-16 py-2.5" : "px-6 md:px-8 py-[10px]"}`,
                style: !scrolled ? {
                  backgroundImage: `url(${headerBg})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#fcfbf8"
                } : void 0,
                children: [
                  /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: logo,
                      alt: "JRM Construction Landscape Design",
                      className: `w-auto object-contain transition-all duration-300 ${scrolled ? "h-11 md:h-[52px]" : "h-16 md:h-20"}`
                    }
                  ) }),
                  /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1 xl:gap-2", children: navItems.map((item) => {
                    const isActive = item.key === activeItem;
                    return /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: item.to,
                        onClick: () => setActiveItem(item.key),
                        className: isActive ? "border border-[#555635] px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-[15px] font-medium text-[#555635] transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]" : "border border-transparent px-4 py-1.5 rounded-full flex items-center gap-1 text-[15px] font-medium text-neutral-800 hover:text-[#4d4d2b] hover:bg-black/5 transition-all duration-200",
                        children: [
                          t(item.key),
                          "hasDropdown" in item && item.hasDropdown && !isActive && /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 text-neutral-500" })
                        ]
                      },
                      item.key
                    );
                  }) }),
                  /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "#contact",
                        className: "rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] px-6 py-2 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm",
                        children: t("nav.talk")
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "tel:2104295526",
                        className: "flex items-center gap-2 rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] px-6 py-2 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm",
                        children: [
                          /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 fill-white text-white" }),
                          /* @__PURE__ */ jsx("span", { className: "font-normal text-sm", children: "(210) 429-5526" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "tel:2104295526",
                        className: "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] text-white transition-all duration-200",
                        children: /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 fill-white text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsxs(Sheet, { children: [
                      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 bg-white/80 hover:bg-neutral-50 active:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] text-neutral-700 transition-all duration-200 cursor-pointer", children: /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" }) }) }),
                      /* @__PURE__ */ jsxs(SheetContent, { side: "right", className: "bg-[#fcfbf8] border-l border-[#e1ded4] p-6 font-sans", children: [
                        /* @__PURE__ */ jsx(SheetTitle, { className: "sr-only", children: "Navigation Menu" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 mt-8", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-neutral-200 pb-4", children: [
                            /* @__PURE__ */ jsx("img", { src: logo, alt: "JRM", className: "h-10 w-10 object-contain" }),
                            /* @__PURE__ */ jsxs("div", { className: "leading-none text-[#565737]", children: [
                              /* @__PURE__ */ jsx("div", { className: "text-md font-bold tracking-wider", children: "JRM" }),
                              /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold tracking-wider text-[#6c6d4d]", children: "CONSTRUCTION" })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-4", children: navItems.map((item) => /* @__PURE__ */ jsx(
                            Link,
                            {
                              to: item.to,
                              className: "text-lg font-medium text-neutral-800 hover:text-[#4d4d2b] transition-colors py-1.5 border-b border-neutral-100",
                              children: t(item.key)
                            },
                            item.key
                          )) }),
                          /* @__PURE__ */ jsxs(
                            "a",
                            {
                              href: "tel:2104295526",
                              className: "flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] py-4 text-white transition-all duration-200 shadow-sm w-full mt-4",
                              children: [
                                /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 fill-white text-white" }),
                                /* @__PURE__ */ jsx("span", { className: "font-normal", children: "(210) 429-5526" })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ] })
                ]
              }
            )
          }
        )
      }
    )
  ] });
}
const heroPatio = "/assets/hero-patio-acwxHtrE.jpg";
const heroVideo = "/assets/jrmvideo-BTK7nZc-.mp4";
function HeroSection() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative mx-auto max-w-[1400px] w-full bg-cover bg-center rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center",
      style: { backgroundImage: `url(${heroPatio})` },
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            className: "absolute inset-0 w-full h-full object-cover",
            src: heroVideo,
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#111a0a]/95 via-[#1c2b11]/80 md:via-[#1c2b11]/50 to-transparent z-10"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-20 w-full px-6 py-16 md:px-12 md:py-24 lg:px-16 flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl text-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-semibold uppercase tracking-wider mt-[60px] sm:mt-[80px] md:mt-[100px] mb-5 md:mb-8 animate-fade-in shadow-sm select-none", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex h-2 w-2 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: t("welcome.badge") })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "whitespace-nowrap text-[10px] min-[375px]:text-[12px] min-[425px]:text-[13px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] leading-[1.3] md:leading-[1.5] capitalize font-bold tracking-tight -mt-[10px] md:-mt-[20px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]", children: t("hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "mt-[14px] md:mt-[20px] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/95 max-w-4xl whitespace-pre-line drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]", children: t("hero.description") }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 md:mt-10 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#consultation",
                className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] px-6 py-3 text-white text-sm font-semibold hover:from-[#4d6c43] hover:to-[#33472c] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_14px_rgba(87,122,76,0.35)]",
                children: [
                  /* @__PURE__ */ jsx(ClipboardList, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { children: t("hero.btn.consultation") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#book",
                className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-white text-sm font-semibold hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm",
                children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { children: t("hero.btn.book") })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 md:mt-10 flex flex-wrap items-center gap-3 text-white/90 text-xs sm:text-sm drop-shadow-sm select-none border-t border-white/10 pt-4 md:pt-6 max-w-md", children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-amber-400", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-4 h-4 fill-current filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
              },
              i
            )) }),
            /* @__PURE__ */ jsx("span", { className: "font-medium tracking-wide", children: t("reviews.basedon") })
          ] })
        ] }) })
      ]
    }
  ) });
}
const welBg = "/assets/wel-bg-5Jo16am8.png";
const welImg = "/assets/wel-img-C7MhRbyD.webp";
function WelcomeSection() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsx(
    "section",
    {
      className: "mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] bg-cover bg-center px-8 py-16 md:px-12 lg:px-16 lg:py-20 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)]",
      style: { backgroundImage: `url(${welBg})` },
      children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[1.85fr_1fr] lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-900/10 bg-white/80 backdrop-blur-md text-neutral-800 text-xs md:text-sm font-semibold uppercase tracking-wider shadow-sm select-none animate-fade-in", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex h-2 w-2 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-600" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: t("welcome.badge") })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "mt-[20px] text-[26px] capitalize font-extrabold text-neutral-900 leading-[1.2] tracking-tight", children: t("welcome.title") }),
          /* @__PURE__ */ jsx("p", { className: "mt-[16px] text-[17px] font-bold text-[#4a6e28] border-l-4 border-[#577a4c] pl-4", children: t("welcome.credentials") }),
          /* @__PURE__ */ jsx("p", { className: "mt-[12px] -mb-[28px] text-base leading-[40px] text-black", children: t("welcome.desc") }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsx(ContactCard, { label: t("welcome.contact.title"), name: "Robert", phone: "(210) 429-5526" }),
            /* @__PURE__ */ jsx(ContactCard, { label: t("welcome.contact.title"), name: "Arturo", phone: "210-379-3505" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:2104295526",
                className: "rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] px-7 py-3 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md",
                children: t("welcome.btn.call")
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#consultation",
                className: "rounded-full bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] px-7 py-3 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md",
                children: t("welcome.btn.consultation")
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative group w-full max-w-[540px] mx-auto flex items-center justify-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: welImg,
              alt: "Outdoor living transformation",
              className: "w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-6 group-hover:bg-white/95 group-hover:shadow-xl", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-neutral-500 font-bold uppercase tracking-wider", children: "Design Consultant" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-neutral-900 mt-0.5", children: "Robert Thompson" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-[#3d5636] bg-[#577a4c]/10 border border-[#577a4c]/20 px-2.5 py-1 rounded-full uppercase tracking-wider", children: "35+ Yrs Exp" })
          ] })
        ] })
      ] })
    }
  ) });
}
function ContactCard({ label, name, phone }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-neutral-900/5 px-5 py-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300", children: [
    /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#577a4c]/10 text-[#3d5636]", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-600 font-medium", children: label }),
      /* @__PURE__ */ jsxs("div", { className: "font-bold text-neutral-950", children: [
        name,
        ": ",
        phone
      ] })
    ] })
  ] });
}
const svcHouseRemodeling = "/assets/svc-house-remodeling-C3yqdmgN.jpg";
const svcNewConstruction = "/assets/svc-new-construction-keRtx_u1.jpg";
const svcFireplace = "/assets/svc-fireplace-CJgsTEef.jpg";
const svcFencing = "/assets/svc-fencing-CRDbGKy1.jpg";
const coveredPatios = "/assets/svc-covered-patios-B85swCum.jpg";
const svcArtificialTurf = "/assets/svc-artificial-turf-8eZDbtSV.jpg";
const svcSoftscapes = "/assets/svc-softscapes-CQkfFk1p.jpg";
const svcOutdoorKitchens = "/assets/svc-outdoor-kitchens-xhuR4sGz.jpg";
const palmTrees = "/assets/svc-palm-trees-Cof46x7e.jpg";
const svcHardscapes = "/assets/svc-hardscapes-DDWIeZS6.jpg";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const services = [
  { key: "services.remodeling", image: svcHouseRemodeling },
  { key: "services.construction", image: svcNewConstruction },
  { key: "services.fireplace", image: svcFireplace },
  { key: "services.fencing", image: svcFencing },
  { key: "services.coveredpatios", image: coveredPatios },
  { key: "services.turf", image: svcArtificialTurf },
  { key: "services.softscapes", image: svcSoftscapes },
  { key: "services.kitchens", image: svcOutdoorKitchens },
  { key: "services.palmtrees", image: palmTrees },
  { key: "services.hardscapes", image: svcHardscapes }
];
function ServicesSection() {
  const { t } = useTranslation();
  const topItems = services.slice(0, 3);
  const slideItems = [...services.slice(3), ...services.slice(3)];
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f8f8] px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center h-full", children: /* @__PURE__ */ jsxs("div", { className: "pr-2 mb-6 lg:mb-0", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center bg-[#577a4c]/10 border border-[#577a4c]/20 text-[#3d5636] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-5", children: t("services.badge") }),
        /* @__PURE__ */ jsx("h2", { className: "text-[35px] -mt-[5px] -mb-[10px] leading-tight font-black text-neutral-900 tracking-tight", children: t("services.title") }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-neutral-600 text-sm md:text-base leading-relaxed font-normal", children: t("services.description") }),
        /* @__PURE__ */ jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#work",
            className: "inline-flex items-center gap-2.5 bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] text-white rounded-full px-7 py-3 text-[14px] font-bold shadow-[0_4px_14px_rgba(87,122,76,0.3)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300",
            children: t("services.btn.more")
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-5", children: topItems.map((s) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group relative rounded-2xl overflow-hidden shadow-md bg-neutral-950 h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[380px] border border-neutral-900/5 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: s.image,
                alt: t(s.key),
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[15px] sm:text-base font-bold text-white leading-tight uppercase", children: t(s.key) }),
              /* @__PURE__ */ jsxs("div", { className: "max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[12px] text-white/85 leading-snug mt-1.5 line-clamp-3 max-w-[95%]", children: t(s.key + ".desc") }),
                /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("span", { className: "relative inline-flex items-center gap-1 text-[#84a377] font-bold text-[10px] uppercase tracking-widest pb-0.5", children: [
                  /* @__PURE__ */ jsx("span", { children: "View More" }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-full h-[1px] bg-[#84a377]" })
                ] }) })
              ] })
            ] }) })
          ]
        },
        s.key
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 relative px-2 md:px-0", children: /* @__PURE__ */ jsx(
      Carousel,
      {
        plugins: [
          AutoScroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            stopOnFocusIn: true
          })
        ],
        opts: {
          align: "start",
          loop: true
        },
        className: "w-full relative",
        children: /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-5", children: slideItems.map((s, idx) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-5 sm:basis-1/2 md:basis-1/3 lg:basis-1/5", children: /* @__PURE__ */ jsxs("div", { className: "group relative rounded-2xl overflow-hidden shadow-md bg-neutral-950 h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[380px] border border-neutral-900/5 cursor-pointer", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: s.image,
              alt: t(s.key),
              className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 p-5 flex flex-col justify-end z-10 h-full text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-[15px] sm:text-base font-bold text-white leading-tight uppercase", children: t(s.key) }),
            /* @__PURE__ */ jsxs("div", { className: "max-h-0 opacity-0 overflow-hidden group-hover:max-h-[160px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2 text-center flex flex-col items-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[12px] text-white/85 leading-snug mt-1.5 line-clamp-3 max-w-[95%]", children: t(s.key + ".desc") }),
              /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("span", { className: "relative inline-flex items-center gap-1 text-[#84a377] font-bold text-[10px] uppercase tracking-widest pb-0.5", children: [
                /* @__PURE__ */ jsx("span", { children: "View More" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-full h-[1px] bg-[#84a377]" })
              ] }) })
            ] })
          ] }) })
        ] }) }, `${s.key}-${idx}`)) })
      }
    ) })
  ] }) });
}
function GetStartedSection() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] flex items-center justify-center text-center px-6 py-[40px] md:px-12 lg:px-16", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        className: "absolute inset-0 w-full h-full object-cover z-0 opacity-85",
        src: "https://res.cloudinary.com/dgpdydebp/video/upload/v1781720948/JRM_Construction_Landscaping_Design_vuaim3.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/80 z-10" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-20 max-w-5xl mx-auto flex flex-col items-center justify-center text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 text-xs font-semibold uppercase tracking-wider mb-5 select-none shadow-sm", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex h-2 w-2 relative", children: [
          /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: t("welcome.badge") })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "whitespace-nowrap text-[9px] min-[375px]:text-[10.5px] min-[425px]:text-[12px] sm:text-[18px] md:text-[20px] lg:text-[28px] xl:text-[32px] leading-snug font-semibold tracking-tight mb-[15px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]", children: t("getstarted.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-[15px] leading-relaxed md:leading-[40px] text-white/90 w-full max-w-4xl mb-8 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]", children: t("getstarted.description") }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#consultation",
            className: "inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] text-white text-[13px] md:text-[14px] font-medium rounded-full px-8 py-3 transition-all duration-300 min-w-[220px]",
            children: [
              /* @__PURE__ */ jsx(ClipboardList, { className: "w-4 h-4 text-white/90" }),
              /* @__PURE__ */ jsx("span", { children: t("getstarted.btn.consultation") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#work",
            className: "inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] text-white text-[13px] md:text-[14px] font-medium rounded-full px-8 py-3 transition-all duration-300 min-w-[220px]",
            children: [
              /* @__PURE__ */ jsx(Images, { className: "w-4 h-4 text-white/90" }),
              /* @__PURE__ */ jsx("span", { children: t("getstarted.btn.gallery") })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function WhyChooseSection() {
  const { t } = useTranslation();
  const features = [
    { title: "whychoose.f1.title", desc: "whychoose.f1.desc" },
    { title: "whychoose.f2.title", desc: "whychoose.f2.desc" },
    { title: "whychoose.f3.title", desc: "whychoose.f3.desc" },
    { title: "whychoose.f4.title", desc: "whychoose.f4.desc" },
    { title: "whychoose.f5.title", desc: "whychoose.f5.desc" },
    { title: "whychoose.f6.title", desc: "whychoose.f6.desc" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsx(
    "section",
    {
      className: "mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] bg-cover bg-center px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)]",
      style: { backgroundImage: `url(${welBg})` },
      children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-16 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center h-full", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#23321e]/30 bg-[#2d3f26]/90 backdrop-blur-md text-white text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-sm select-none", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex h-2 w-2 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: t("whychoose.badge") })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-[26px] sm:text-[30px] md:text-4xl lg:text-[38px] leading-[1.2] font-extrabold text-neutral-900 tracking-tight mb-[15px]", children: t("whychoose.title") }),
          /* @__PURE__ */ jsxs("p", { className: "text-neutral-700 text-[15px] md:text-base leading-[36px] mb-6 font-normal", children: [
            t("whychoose.desc1"),
            " ",
            t("whychoose.desc2")
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1 mb-8", children: features.map((f, idx) => /* @__PURE__ */ jsxs("div", { className: `group flex items-start gap-3 hover:bg-[#2d3f26]/5 p-2 rounded-xl -ml-2 transition-all duration-300 ${idx === 0 ? "-mt-[15px]" : ""}`, children: [
            /* @__PURE__ */ jsx("span", { className: "text-[17px] mt-[1.5px] select-none shrink-0 group-hover:translate-x-1.5 transition-transform duration-300 ease-out", children: "👉" }),
            /* @__PURE__ */ jsxs("p", { className: "text-neutral-800 text-sm md:text-[15px] leading-relaxed", children: [
              /* @__PURE__ */ jsxs("strong", { className: "font-bold text-neutral-950", children: [
                t(f.title),
                ":"
              ] }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-neutral-700 font-normal", children: t(f.desc) })
            ] })
          ] }, f.title)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#consultation",
                className: "inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2c241d] to-[#1a1511] hover:from-[#3d3228] hover:to-[#221c16] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 shadow-[0_4px_14px_rgba(34,28,22,0.25)] hover:scale-[1.03] active:scale-[0.97]",
                children: [
                  /* @__PURE__ */ jsx(ClipboardList, { className: "w-4 h-4 text-white/90" }),
                  /* @__PURE__ */ jsx("span", { children: t("whychoose.btn.consultation") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:2104295526",
                className: "inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#577a4c] to-[#3d5636] hover:from-[#4d6c43] hover:to-[#33472c] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 shadow-[0_4px_14px_rgba(58,84,51,0.25)] hover:scale-[1.03] active:scale-[0.97]",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-white/90" }),
                  /* @__PURE__ */ jsx("span", { children: t("whychoose.btn.call") })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative group rounded-2xl overflow-hidden shadow-lg border border-neutral-900/5 h-[360px] lg:h-[480px] lg:sticky lg:top-[40px] self-start", children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              src: "https://res.cloudinary.com/dgpdydebp/video/upload/v1781722131/IMG_5476_n4xtt7.mp4",
              className: "w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500 ease-out",
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-6 group-hover:bg-white/95 group-hover:shadow-xl", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-neutral-500 font-bold uppercase tracking-wider", children: t("services.coveredpatios") }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-neutral-900 mt-0.5", children: "Custom Outdoor Pavilion" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-[#3d5636] bg-[#577a4c]/10 border border-[#577a4c]/20 px-2.5 py-1 rounded-full uppercase tracking-wider", children: "Featured Work" })
          ] })
        ] })
      ] })
    }
  ) });
}
const c1 = "data:image/webp;base64,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";
const c2 = "data:image/webp;base64,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";
const c3 = "data:image/webp;base64,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";
const c4 = "data:image/webp;base64,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";
function FreeConsultationSection() {
  const { t } = useTranslation();
  const cards = [
    {
      titleKey: "freeconsult.card1.title",
      descKey: "freeconsult.card1.desc",
      icon: c1
    },
    {
      titleKey: "freeconsult.card2.title",
      descKey: "freeconsult.card2.desc",
      icon: c2
    },
    {
      titleKey: "freeconsult.card3.title",
      descKey: "freeconsult.card3.desc",
      icon: c3
    },
    {
      titleKey: "freeconsult.card4.title",
      descKey: "freeconsult.card4.desc",
      icon: c4
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] py-16 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        className: "absolute inset-0 w-full h-full object-cover z-0",
        src: "https://res.cloudinary.com/dgpdydebp/video/upload/v1781720948/JRM_Construction_Landscaping_Design_vuaim3.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/65 z-10" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-20 max-w-7xl w-full mx-auto flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-white text-[22px] sm:text-[26px] md:text-3xl lg:text-[31px] leading-snug font-bold tracking-tight mb-[15px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]", children: t("freeconsult.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-white/90 text-sm md:text-[15px] leading-relaxed max-w-5xl mx-auto mb-12 font-light tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]", children: t("freeconsult.desc") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-2", children: cards.map((c) => {
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/35 hover:bg-white/15 rounded-[10px] p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 min-h-[300px] cursor-default",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full border border-white/30 group-hover:border-white/50 flex items-center justify-center mb-6 select-none bg-white/5 shadow-inner transition-colors duration-300 overflow-hidden", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: c.icon,
                  alt: t(c.titleKey),
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                }
              ) }),
              /* @__PURE__ */ jsx("h3", { className: "text-white text-[17px] font-bold tracking-wide capitalize mb-3 drop-shadow-sm", children: t(c.titleKey) }),
              /* @__PURE__ */ jsx("p", { className: "text-white/80 text-[13px] md:text-sm leading-relaxed font-light", children: t(c.descKey) })
            ]
          },
          c.titleKey
        );
      }) })
    ] })
  ] }) });
}
const faqPavilion = "/assets/faq-pavilion-Cz-WdRYT.jpg";
const statsJobsite = "/assets/stats-jobsite-Dz_Ro8_J.jpg";
const welcomePavilion = "/assets/welcome-pavilion-CA8CrHPw.jpg";
const welcomePool = "/assets/welcome-pool-DZP6cFr9.jpg";
function GallerySection() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const row1 = [
    svcOutdoorKitchens,
    welcomePavilion,
    svcOutdoorKitchens,
    faqPavilion,
    welcomePavilion,
    welcomePool
  ];
  const row2 = [
    welcomePool,
    heroPatio,
    statsJobsite,
    svcSoftscapes,
    svcArtificialTurf,
    svcSoftscapes,
    svcHardscapes
  ];
  const row3 = [
    svcFireplace,
    svcSoftscapes,
    svcFencing,
    svcNewConstruction,
    svcOutdoorKitchens,
    svcHouseRemodeling
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]", children: [
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-[30px] py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center bg-[#2d3f26] border border-[#23321e] text-white text-[10px] md:text-[11px] font-extrabold px-5 py-2 rounded-full uppercase tracking-widest mb-4 shadow-sm select-none", children: t("gallery.badge") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-[34px] font-black text-neutral-900 tracking-tight mb-8", children: t("gallery.title") }),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full", children: row1.map((img, idx) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "overflow-hidden rounded-[4px] shadow-sm border border-neutral-900/5 aspect-[4/3] sm:aspect-auto sm:h-[180px] lg:h-[200px]",
            onClick: () => setSelectedImage(img),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: img,
                alt: "JRM Construction Project Detail",
                className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out cursor-pointer",
                loading: "lazy"
              }
            )
          },
          `row1-${idx}`
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 w-full", children: row2.map((img, idx) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "overflow-hidden rounded-[4px] shadow-sm border border-neutral-900/5 aspect-[4/3] sm:aspect-auto sm:h-[180px] lg:h-[200px]",
            onClick: () => setSelectedImage(img),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: img,
                alt: "JRM Construction Project Detail",
                className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out cursor-pointer",
                loading: "lazy"
              }
            )
          },
          `row2-${idx}`
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full", children: row3.map((img, idx) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "overflow-hidden rounded-[4px] shadow-sm border border-neutral-900/5 aspect-[4/3] sm:aspect-auto sm:h-[180px] lg:h-[200px]",
            onClick: () => setSelectedImage(img),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: img,
                alt: "JRM Construction Project Detail",
                className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out cursor-pointer",
                loading: "lazy"
              }
            )
          },
          `row3-${idx}`
        )) })
      ] })
    ] }),
    selectedImage && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "fixed inset-0 bg-black/90 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out select-none animate-fade-in",
        onClick: () => setSelectedImage(null),
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer z-10",
              onClick: () => setSelectedImage(null),
              "aria-label": "Close image zoom",
              children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative max-w-[90vw] max-h-[85vh] md:max-h-[90vh] flex items-center justify-center animate-zoom-in",
              onClick: (e) => e.stopPropagation(),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: selectedImage,
                  alt: "JRM Construction Project Detail Large View",
                  className: "max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      ` })
  ] });
}
const map = "/assets/map-BrI_SayJ.webp";
const areas = [
  "San Marcos",
  "Canyon Lake",
  "Seguin",
  "Boerne",
  "Bulverde",
  "Castroville",
  "Kerrville",
  "Bandera",
  "Hondo",
  "Pleasanton",
  "Floresville",
  "Pearsall",
  "Luling",
  "Lockhart",
  "Gonzales"
];
function QuoteSection() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] w-full rounded-[10px] bg-white px-6 py-12 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] grid gap-10 lg:grid-cols-[1fr_1.3fr] items-stretch", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative overflow-hidden rounded-2xl bg-cover bg-center p-8 text-white flex flex-col justify-between shadow-lg",
        style: { backgroundImage: `linear-gradient(to bottom right, rgba(77, 60, 51, 0.85), rgba(44, 32, 24, 0.9)), url(${map})` },
        children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block rounded-full bg-[#221c16]/50 border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider mb-6 select-none self-start shadow-sm", children: t("quote.area.badge") }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 text-2xl md:text-3xl font-extrabold leading-tight tracking-tight mb-6", children: t("quote.area.title") }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2.5 w-full", children: areas.map((a) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "group flex items-center justify-between rounded-full bg-[#3f4a1f] border border-[#2d3715] px-3.5 py-2.5 text-xs md:text-sm font-semibold text-white hover:text-[#3f4a1f] hover:bg-white hover:border-white shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-default",
              children: [
                /* @__PURE__ */ jsx("span", { className: "truncate pr-1", children: a }),
                /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-white group-hover:text-[#3f4a1f] opacity-90 transition-colors duration-300" })
              ]
            },
            a
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-start w-full lg:pl-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-black text-[#08152e] mb-2", children: t("quote.form.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-neutral-600 mb-6 max-w-2xl", children: t("quote.form.desc") }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-4 w-full", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-[#08152e] mb-1.5", children: t("quote.form.first") }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "John",
                className: "w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-300"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-[#08152e] mb-1.5", children: t("quote.form.last") }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Smith",
                className: "w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-300"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-[#08152e] mb-1.5", children: t("quote.form.email") }),
            /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Example@email.com",
                  className: "w-full rounded-lg border border-neutral-200 pl-4 pr-10 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-300"
                }
              ),
              /* @__PURE__ */ jsx(Mail, { className: "absolute right-3.5 h-4 w-4 text-emerald-600/80 pointer-events-none" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-[#08152e] mb-1.5", children: t("quote.form.service") }),
            /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ jsxs("select", { className: "w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all appearance-none cursor-pointer text-neutral-800 pr-10", children: [
                /* @__PURE__ */ jsx("option", { value: "remodeling", children: "House Remodeling" }),
                /* @__PURE__ */ jsx("option", { value: "construction", children: "New Construction" }),
                /* @__PURE__ */ jsx("option", { value: "patios", children: "Covered Patios" }),
                /* @__PURE__ */ jsx("option", { value: "kitchens", children: "Outdoor Kitchens" }),
                /* @__PURE__ */ jsx("option", { value: "hardscapes", children: "Hardscapes & Concrete" }),
                /* @__PURE__ */ jsx("option", { value: "landscaping", children: "Landscaping & Turf" }),
                /* @__PURE__ */ jsx("option", { value: "other", children: "Other Services" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute right-3.5 pointer-events-none text-neutral-500", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" }) }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-[#08152e] mb-1.5", children: t("quote.form.message.label") }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              rows: 4,
              placeholder: t("quote.form.message.placeholder"),
              className: "w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#3f4a1f] focus:outline-none focus:ring-1 focus:ring-[#3f4a1f] bg-white transition-all placeholder-neutral-300 resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "rounded-full bg-[#3f4a1f] hover:bg-[#2d3715] text-white text-xs font-bold uppercase tracking-widest px-12 py-3.5 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
            children: t("quote.form.send")
          }
        ) })
      ] })
    ] })
  ] }) });
}
const reviewComp = "data:image/webp;base64,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";
const reviewsList = [
  { textKey: "reviews.1.text", nameKey: "reviews.1.name", dateKey: "reviews.1.date" },
  { textKey: "reviews.2.text", nameKey: "reviews.2.name", dateKey: "reviews.2.date" },
  { textKey: "reviews.3.text", nameKey: "reviews.3.name", dateKey: "reviews.3.date" }
];
function ReviewsSection() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]", children: [
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-6 py-12 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] grid gap-10 lg:grid-cols-[0.8fr_2fr] items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center lg:items-start text-center lg:text-left max-w-[420px] mx-auto lg:mx-0 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#23321e]/30 bg-[#2d3f26]/90 backdrop-blur-md text-white text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-sm select-none", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex h-2 w-2 relative", children: [
            /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
          ] }),
          /* @__PURE__ */ jsx("span", { children: t("reviews.badge") })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-[22px] sm:text-[25px] md:text-[27px] font-extrabold text-neutral-900 leading-tight mb-5 tracking-tight", children: t("reviews.title") }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: reviewComp,
            alt: "Google Reviews Rating",
            className: "w-full max-w-[340px] mb-6 object-contain rounded-xl"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center justify-center bg-gradient-to-r from-[#2c241d] to-[#1a1511] hover:from-[#3d3228] hover:to-[#221c16] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 shadow-[0_4px_14px_rgba(34,28,22,0.25)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
            children: t("reviews.readall")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative min-w-0 w-full overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-[40px] lg:w-[80px] bg-gradient-to-r from-[#fbfaf7] to-transparent z-10 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-[40px] lg:w-[80px] bg-gradient-to-l from-[#fbfaf7] to-transparent z-10 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex gap-6 w-fit animate-marquee", children: [...reviewsList, ...reviewsList].map((r, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "shrink-0 w-[300px] md:w-[360px] bg-white rounded-2xl p-6 border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between select-none",
            children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white shrink-0", children: /* @__PURE__ */ jsx(User, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-neutral-900 text-[14px] leading-tight truncate", children: t(r.nameKey) }),
                  /* @__PURE__ */ jsx("span", { className: "text-[12px] text-neutral-500 leading-tight mt-0.5 truncate", children: t(r.dateKey) })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 mb-3", children: [...Array(5)].map((_, idx) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-current" }, idx)) }),
              /* @__PURE__ */ jsxs("p", { className: "text-[13px] md:text-sm text-neutral-700 leading-relaxed italic", children: [
                '"',
                t(r.textKey),
                '"'
              ] })
            ] })
          },
          i
        )) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      ` })
  ] });
}
const hit1 = "data:image/webp;base64,UklGRjQCAABXRUJQVlA4TCcCAAAvJUAJEIegoG0bNuTuYZ2CtA1YlB0DadukzL+b+7vatm3YkGen1wDe8TL1PESi1dDDQskXHR4nLAgIiJEkx20GAAHix+SfLmnKIUT0fwL4HK461j5nr1Fz4LVGfox1+XnVCFTTt3Aff90Jqj9cy+dZs7fWxzqeBFW9vhSfuyX+TG3ArVpSjPHlVj018Ot5PPujqK7Iewi/dYBLdfAMua9z1sjhUwcISx082/HPkyH62nlWdQGk48cK0dfOMx7dAchHddWc66yQjl4hBIgRqlqBdNQR+TMdvXjG1QhLF8BWC3+n7bl4tu0OWW1AUwtAzBGu7clwAVXNVU+CcHQAcZwGaXsylBMhHW1DF5DVCHHZ4FqeDOVYgKlz6QCGTmA4A9d2Z2DqAIburR1YWiEeC2l7MkDRHaDpOdogHM2Q9aJ4MkS41ABV/S2T6gV3+WFrB5beEI+d530SFN0Bmp6lAxg6gaH9Srk7gakT6LqHLiCrEdLydScIagGmzqonQVA7kObRMxPQ1AjxaMtqA7qaAVIpCeBSB3CrJWxdAFvNfLzUE4CpO1LVG7hUW3gLTTUDRW2Q1B2A4nOW6yrD5w2w1QRUdQJcx88nAwy1AYStdoDQv4wA0NQdH2TVzjOWuXXPEnk21cz7rToDryGEwPtQrfxdVXd5+ViWauPr7XPV+Fe8p8/K97x9ntnbfdc+j8+d+TW24+898o+p7W+7X/xzKG3uo2fPXiKfAQA=";
const hit2 = "data:image/webp;base64,UklGRhwCAABXRUJQVlA4TBACAAAvH0AJEAehGJIkKfu7/iCLsFxna6Bt2zZMt6L/f1tEChpJauYLSEExcpviSJISLFICJgeK1ykuPwJmtr48LHRAQGUxxEpBIvLd03LE9fYtVb+V3YX+Hdu7404xQvClygFBUKWaf2QRUyLBtq22rZz6q3uvyfyHGYGQZ8ATFx48BET0X2Hbto3cPZO0V8wM+veBNHtG/+evL7+f4u87M/knSL+EWfKwoSkl/6cRM/NbG31Kkyn79vlBwoqEENs4GWiVDaotmYoo/Ugcjd3xQ3ozuvxM0vPgNbUNycCcemgYRm8BDO6IMLPkaeCjSv3IDVUkJgO7LQNTpjhPQGqRclKM0Vrr70dbMfyoWZtG32MMgHTZHyUv2eBJuOrG8P1ARHLbaHsVrBciKqMDXCYiKjkpLi5cYQClUqdsf1BNqAXgRT3H6rjjoMPt9AO+tjOkXDQPXIudMY1ngJ1yzJMFoFhImAzGgG0KyTKASUEe/cbwYqydRmcRzh0xYNtjzPYhpKjI5LirENk1IVUSz6QRm5u54H1w4EUspOokGj/ZrcPCORfS1i2iXkG7YLT2cRZF0VvrRSt8PGh1i1RUFzFpVYnetopClIMdhajHiZCJCmqzM15P+aRw0CnVpkySH+rH2qaYczJSc0wOmmwIthep1oVgDR8RpmEwwyReZNFydowh4nU8H5RYrhkDxWk8oYb+FgA=";
const hit3 = "data:image/webp;base64,UklGRugBAABXRUJQVlA4TNsBAAAvKEAJEIdAJm0bSs/5nIG0bbLt/i2fTNomveffxUQqbhtJTe2P6RgCcKdl2Wm1ilXaKDGx8THhcCE9FAyGkexUeQkB+STw+m9XRO0gov8TgHOx6nN6NcG/YoOP3X6RxuP6x+DL/l3j6/LZfLfkI+M9equ19bjRPqpkNBOoqkKsOVk+GlEEWsYk1ygKKbN9FAXaydVr7ZPsitY/KivWchMAEOtrBfNHaKuk6qOK1jEuvXjJVxcTdEYRvegKY8JezfSsDYP2CkBaF+SRN1onGZec1IyXl90kuO1ykFu+Sc6bPPTW+FgOpIUASGMIAJ0VAJTP4wDoGYCo3nLDPd2ik1xHpQNtuI8O9LyxW7M5ZxyJJ6iWogpzHImq6llzBXIG1Jsc4W2KxWUCiE0y9IdxXdNijjHDvF7jprXWml/oaJICYjmbwLP0kQB1dy8n1nx1gXjCNrlAfHlLOcj6pG2RLACyy6ZfAC6Sq2o/UOc9IVnycsueLCHx3rU/SHCrZTHSNEBXDq6CeWPXsmvc9yDJNlNadZGMHhtWbBMfW7qRc3Krjfulm/pkD89qD7w240BfrJO+WbuVNb1g0rx2fhbwWC8j1Hexmbspn86db/qOa364uO+b8vBr2Wis3102AA==";
const exp = "data:image/webp;base64,UklGRogFAABXRUJQVlA4THsFAAAvgUASEHdgpm3bmNtt5GembduU028IJhBI2l9uJMVtI6mp/TIeXwD+xzueqdSWiY8lOygGJhwlBFr7/yty07H9zkwE7qbu7dTbpBeTujdSwys4hKfe4k48uLt7cNsKrksGdzI41PZcQZLuzvzexDkje4jo/wRAO3nzY2/k2tZOFdC6t9+RdD0MdLZ/HFHdd7alKzHpKSa8zISXZLG8fM4jURJ5okhXW76bIiYOqtLVlK2+xJRdItXocjnfMm1Qlaq6XFujVJyTqqpc9aV098X5d6itdrnwbjppx9wH1UHZ60sk5b7WltcjHatSmPg1KS8aBrivxIwxrj7k+VC9oq4mzmk6Y5owAX89a2vwX5oDH0UMzrFMaJgJ/RdptHKpCRAxz+vGJqOsMCE+ZnQKLjPpLV1Vmh6T/tBIO42sMMcZ0PQgDceYsyHULI95ZtdrkWa5Md53VGUV4F7X0rJ7GJwBTbMZ21puP0LtfQJ6AXyludSM/xgrRyHp25puMwbimkWiF0w6ppMdFhI/r+kywi3pLrGhd23lBZK9e6YZ1XvOUN1XS5V3Ze96C2bWhzrKzgqlvnRgOIAP90yDOnlu0xnqmnlDRVYbohiySwD4mrzXxvZpAODueP1ooVCQpCwUCnsvnC8y2cKEchawISR54CwbqNvxWsjUn7atsTLI53+KdDxgOX+TDBYKeLf+FDHTZ+106qZDOlbVR2TvSLjbDzPj3kpkXF/ULXe+4bPTsemjiBn7M5D5H7pubNk/HFcfZdZyFrLfogsEhtW9GjFruR5l9EINbXgfRcz8RFEOt6jpq6g7yMzlxQLldI4pclHDd8z+EhsGLHMPMrnM53K5vO4+C+V1iyS75n7HWLnvrt0Lpg6B6szdvOvxpyqQ7ZVWjBeS/ohvqZftC6YKJHeGIFt3YGnMFpLLXqK2765pMPbGyB+h+5q89+pQke0LBIx1i2SXULwSuT4iyWARTH6IJDsXDB3S+B3Z+Q9J2TEcJrtFhX35/FFSvkaS5w6F0S8xcWdI9i2G4X8nCo6Q/iJh2kOJ+shgFIz3jiUh/UX4H94YJVoEo93Vqy0AzrcJ5IlQ3ddzT1nAQ7ncyFdz6kUCeCiXuwvAllwul9uzQADYdJjcPwOAdzDuPEuDvykrgX7KikGq3QD+IqUN3EA1WAJ4h0mydwQA75DuWQv6d8jRcEPeB91lAAZJVsUxsPECtcsBoO6xIyT9EYjdSs7BhojLMUj5888/nQw4IckxGv+niKzBAHnX7YflSAXO3J2HuATxXsjLcCNZjUH6U6dMGQrUk2StZvmUb8hmt0h/qLOxXWgA/HWJSIB+BuJdBhWKBfUGHhjgKZpabIh4qVdiDwALsfWfDkfSt8nKft4nkrzInn95WYwXstsrMbCR9KsaJN4ScXSJy5Hka3Z/Tj8uYrdbIi8ZmsBrt5J5JXZErFaCM884QwB/84IHKG3dFWQz+knuWydibhiJlP2U9G2FhULBBo5x5RaySjl59UGyFi+SZN/omDNEmndIdgsNSRtOyPH1EccqalAJ9xBJ+hW6YUi7JSJXIEk9ebwbcnncSQA2HiLJGl16t0hWa4KWlhYLD5Az5hbZHONbAOB9GJGXZoUBBpbGtwDgSzKfj9itdB2krFDgvkIeyKyfgUj0F7W+uIGsfZ6s0cAr0TdlQCdtZUPEZsARgFs0xi0yyOdLZLXiFulbuHEW4IU8UL6gpbVlvReyGXieHKfgT7LaGZSLprxMXlo+tWdjxOXAFnKl5gHy5C0R5c8RWWPIC2Qt4JGXaepD9tSVqMoKM+77kjwOcELed6PiDFJWbjtMMliMzBtXrwaAptXq/IbVq20ATavn161ePQxoXL3aRuNjufaFAgA=";
const stats = [
  { icon: hit1, value: "5,000+", labelKey: "stats.label.complete_project" },
  { icon: hit2, value: "4,900+", labelKey: "stats.label.happy_clients" },
  { icon: hit3, value: "15+", labelKey: "stats.label.expert_member" },
  { icon: exp, value: "35+", labelKey: "stats.label.years_experience" }
];
function StatsSection() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-8 py-16 md:px-12 lg:px-14 lg:py-16 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.035)] grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full flex flex-col justify-between z-10 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-[26px] sm:text-[30px] md:text-[35px] font-black text-neutral-900 leading-tight mb-6 tracking-tight", children: t("stats.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-[14px] md:text-[15px] lg:text-[16px] text-neutral-700 leading-relaxed md:leading-[40px] mb-8 max-w-[760px] font-medium", children: t("stats.desc") }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-8 lg:mb-0 select-none", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "tel:2104295526",
            className: "inline-flex items-center justify-center bg-[#0f6cbd] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full px-9 py-4 transition-all duration-300 shadow-md hover:bg-[#0c589c] hover:shadow-[0_12px_24px_rgba(15,108,189,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer",
            children: t("stats.btn.call")
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center justify-center bg-[#2c241d] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full px-9 py-4 transition-all duration-300 shadow-md hover:bg-[#1a1511] hover:shadow-[0_12px_24px_rgba(44,36,29,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer",
            children: t("stats.btn.consultation")
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-3 z-0 h-[320px] lg:h-[540px] relative rounded-3xl overflow-hidden border border-neutral-200/20 shadow-[0_15px_35px_rgba(0,0,0,0.04)]", children: /* @__PURE__ */ jsx(
      "video",
      {
        src: "https://res.cloudinary.com/dgpdydebp/video/upload/v1781725575/IMG_5680_inkpef.mov",
        playsInline: true,
        autoPlay: true,
        muted: true,
        loop: true,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "w-full lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-3 z-10 relative lg:-mt-[50px] mt-8 self-end", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: stats.map(({ icon, value, labelKey }, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "mt-[50px] bg-white border border-neutral-100/90 rounded-2xl p-4 md:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex flex-col items-center justify-center text-center select-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-neutral-200/80",
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: icon,
              alt: value,
              className: "h-9 w-auto object-contain"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "text-xl md:text-2xl font-black text-neutral-900 leading-none tracking-tight", children: value }),
          /* @__PURE__ */ jsx("div", { className: "text-[9px] md:text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest mt-2 leading-none", children: t(labelKey) })
        ]
      },
      i
    )) }) })
  ] }) });
}
function FAQSection() {
  const [open, setOpen] = useState(0);
  const { t } = useTranslation();
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") }
  ];
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]", children: /* @__PURE__ */ jsx(
    "section",
    {
      className: "mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] bg-cover bg-center px-5 sm:px-8 py-12 md:px-12 lg:px-14 md:py-16 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative",
      style: { backgroundImage: `url(${welBg})` },
      children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 flex flex-col items-start w-full lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block bg-[#2c241d] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-6 select-none", children: t("faq.badge") }),
          /* @__PURE__ */ jsx("h2", { className: "text-[22px] sm:text-[24px] md:text-[26px] font-extrabold text-neutral-900 leading-tight mb-4 tracking-tight", children: t("faq.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-[15px] text-neutral-700 leading-relaxed mb-6 font-medium", children: t("faq.desc") }),
          /* @__PURE__ */ jsx("div", { className: "w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-neutral-200/50 bg-black", children: /* @__PURE__ */ jsx(
            "video",
            {
              src: "https://res.cloudinary.com/dgpdydebp/video/upload/v1781726798/IMG_0023_jcfal6.mov",
              controls: true,
              playsInline: true,
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "inline-flex items-center justify-center bg-[#2c241d] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full px-8 py-4.5 transition-all duration-300 shadow-md hover:bg-[#1a1511] hover:shadow-[0_12px_24px_rgba(44,36,29,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer mt-6 select-none",
              children: t("faq.btn.consultation")
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-6 w-full lg:sticky lg:top-24", children: /* @__PURE__ */ jsx("div", { className: "w-full bg-white rounded-[32px] p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.025)] border border-neutral-100/80 space-y-4", children: faqs.map((f, i) => {
          const isOpen = open === i;
          return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpen(isOpen ? null : i),
                className: "w-full flex items-center justify-between gap-4 px-6 py-4 bg-[#f4f6f8] hover:bg-[#ebedf0] transition-colors duration-200 rounded-2xl text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-neutral-900 text-sm md:text-[15px] leading-snug", children: f.q }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: `h-4 w-4 shrink-0 text-neutral-800 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
                children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "px-6 py-4 text-xs md:text-sm text-neutral-600 leading-relaxed", children: f.a }) })
              }
            )
          ] }, i);
        }) }) })
      ] })
    }
  ) });
}
function CTASection() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] mt-[15px] mb-0 pt-[5px] pb-0 px-[15px]", children: /* @__PURE__ */ jsx("section", { id: "contact", className: "mx-auto max-w-[1400px] w-full rounded-t-[10px] rounded-b-none bg-[#2c241d] py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[150px] border border-neutral-800 shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative overflow-hidden text-center", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "w-full rounded-[8px] bg-cover bg-center border border-[#eae8e1]/70 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative z-10 p-5 sm:p-8 md:p-10 lg:p-[40px_50px]",
      style: { backgroundImage: "url(/src/assets/wel-bg.png)", backgroundColor: "#fbfaf7" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block bg-[#3f4a1f] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-2 rounded-full mb-6 select-none shadow-sm", children: t("cta.badge") }),
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "text-2xl md:text-[32px] text-neutral-900 leading-tight tracking-tight",
            style: {
              marginTop: "-15px",
              fontWeight: 700,
              marginBottom: "10px"
            },
            children: t("cta.title")
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-neutral-700 leading-relaxed max-w-2xl mx-auto",
            style: {
              fontSize: "14px",
              fontWeight: 400,
              marginBottom: "22px"
            },
            children: t("cta.desc")
          }
        ),
        /* @__PURE__ */ jsxs("form", { className: "w-full space-y-4.5 text-left", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4.5", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: t("cta.form.name"),
                className: "w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 px-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: t("cta.form.phone"),
                className: "w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 px-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  placeholder: t("cta.form.email"),
                  className: "w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all"
                }
              ),
              /* @__PURE__ */ jsx(Mail, { className: "absolute right-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#3f4a1f]/75" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: t("cta.form.address"),
                  className: "w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all"
                }
              ),
              /* @__PURE__ */ jsx(MapPin, { className: "absolute right-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#3f4a1f]/75" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                className: "w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 pl-4 pr-10 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all appearance-none cursor-pointer",
                defaultValue: "",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: t("cta.form.services") }),
                  /* @__PURE__ */ jsx("option", { value: "landscape-design", children: t("services.softscapes") }),
                  /* @__PURE__ */ jsx("option", { value: "new-construction", children: t("services.construction") }),
                  /* @__PURE__ */ jsx("option", { value: "covered-patios", children: t("services.coveredpatios") }),
                  /* @__PURE__ */ jsx("option", { value: "outdoor-kitchens", children: t("services.kitchens") }),
                  /* @__PURE__ */ jsx("option", { value: "fireplace", children: t("services.fireplace") }),
                  /* @__PURE__ */ jsx("option", { value: "hardscapes", children: t("services.hardscapes") }),
                  /* @__PURE__ */ jsx("option", { value: "fencing", children: t("services.fencing") }),
                  /* @__PURE__ */ jsx("option", { value: "artificial-turf", children: t("services.turf") }),
                  /* @__PURE__ */ jsx("option", { value: "palm-trees", children: t("services.palmtrees") }),
                  /* @__PURE__ */ jsx("option", { value: "house-remodeling", children: t("services.remodeling") })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center", children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4.5 w-4.5 text-[#3f4a1f]/75" }) })
          ] }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              rows: 4,
              placeholder: t("cta.form.message"),
              className: "w-full bg-white rounded-[5px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] border border-neutral-100/50 py-3 px-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3f4a1f]/20 transition-all resize-none"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full bg-[#2c241d] hover:bg-[#1a1511] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-[5px] py-3.5 transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none cursor-pointer text-center",
              children: t("cta.form.btn")
            }
          )
        ] })
      ]
    }
  ) }) });
}
function SiteFooter() {
  const { t, language } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-[#f4f3ef] pt-0 pb-[15px] px-[15px]", children: /* @__PURE__ */ jsxs(
    "footer",
    {
      className: "mx-auto max-w-[1400px] w-full bg-[#1a1108] text-white px-8 md:px-12 py-16 rounded-t-none rounded-b-[10px] mt-0 border border-neutral-800/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden",
      style: {
        backgroundImage: "linear-gradient(to bottom, rgba(26,17,8,0.97), rgba(26,17,8,0.98)), url(/src/assets/wel-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-2 lg:grid-cols-5 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "JRM Construction Landscape Design", className: "h-14 md:h-16 w-auto object-contain" }) }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-white/50 leading-relaxed max-w-md", children: t("footer.desc") })
          ] }),
          /* @__PURE__ */ jsx(
            FooterCol,
            {
              title: t("footer.services.title"),
              links: [
                t("services.remodeling"),
                t("services.construction"),
                t("services.turf"),
                t("services.softscapes"),
                t("services.fencing"),
                t("services.hardscapes"),
                t("services.kitchens")
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            FooterCol,
            {
              title: t("footer.links.title"),
              links: [
                t("nav.home"),
                t("nav.about"),
                t("nav.services"),
                t("nav.work"),
                t("nav.reviews"),
                t("nav.contact")
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-black uppercase tracking-[0.2em] text-[#a5b89d]", children: t("footer.contact.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm text-white/50", children: [
              /* @__PURE__ */ jsx("li", { className: "hover:text-white transition-colors duration-200", children: t("footer.contact.address") }),
              /* @__PURE__ */ jsx("li", { className: "hover:text-white transition-colors duration-200", children: t("footer.contact.street") }),
              /* @__PURE__ */ jsx("li", { className: "hover:text-white transition-colors duration-200", children: /* @__PURE__ */ jsx("a", { href: "tel:2104295526", className: "hover:text-white transition-colors duration-200", children: "(210) 429-5526" }) }),
              /* @__PURE__ */ jsx("li", { className: "hover:text-white transition-colors duration-200", children: /* @__PURE__ */ jsx("a", { href: "mailto:info@jrmconstruction.com", className: "hover:text-white transition-colors duration-200", children: "info@jrmconstruction.com" }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: [Facebook, Twitter, Youtube, Instagram].map((Icon, i) => /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-[#4a6741] hover:text-white hover:border-[#4a6741] transition-all duration-300 shadow-sm",
                children: /* @__PURE__ */ jsx(Icon, { className: "h-4.5 w-4.5" })
              },
              i
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-[30px] border-t border-white/10 pt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-semibold text-white/30 uppercase tracking-wider relative z-10", children: [1, 2, 3, 4, 5, 6].map((idx) => /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors duration-200", children: t(`footer.seo.${idx}`) }, idx)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-[20px] mb-[-32px] rounded-2xl sm:rounded-full bg-white/[0.03] border border-white/10 py-3 sm:py-3.5 text-xs text-white/70 tracking-wide relative z-10 w-full backdrop-blur-md px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left", children: [
          /* @__PURE__ */ jsx("span", { children: t("footer.copyright") }),
          /* @__PURE__ */ jsxs("span", { className: "md:text-right shrink-0", children: [
            language === "es" ? "Diseño por" : "Design By",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://stellrit.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-[#a5b89d] hover:text-white font-bold transition-colors duration-200 hover:underline",
                children: "StellR IT LLC"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h4", { className: "text-xs font-black uppercase tracking-[0.2em] text-[#a5b89d]", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3 text-sm text-white/50", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white hover:translate-x-0.5 transition-all duration-200 block", children: l }) }, l)) })
  ] });
}
function FloatingChat() {
  const { language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const getInitialMessages = () => [
    {
      id: "welcome",
      sender: "bot",
      text: language === "es" ? "¡Hola! Bienvenidos a JRM Construction Landscaping Design. ¿Cómo podemos ayudarte hoy con tu proyecto de remodelación o exteriores?" : "Hi there! Welcome to JRM Construction Landscaping Design. How can we help you with your remodeling or outdoor project today?",
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ];
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages(getInitialMessages());
  }, [language]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 4e3);
    return () => clearTimeout(timer);
  }, [isOpen]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (showNotification) {
      setShowNotification(false);
    }
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: inputValue,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: language === "es" ? "¡Gracias por contactarnos! Tu mensaje ha sido recibido. Robert Thompson o un miembro de nuestro equipo se comunicará contigo a la brevedad. Si deseas asistencia inmediata, puedes llamarnos directamente o usar el enlace a continuación para chatear por WhatsApp." : "Thank you for contacting us! Your message has been received. Robert Thompson or a member of our team will get back to you shortly. For immediate assistance, feel free to call us directly or use the link below to chat via WhatsApp.",
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actions: true
        // indicates that we should show action buttons below this message
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1500);
  };
  const whatsappNumber = "12104295526";
  const defaultMessage = language === "es" ? "Hola, estoy interesado en sus servicios de construcción y paisajismo." : "Hi, I'm interested in your construction and landscaping services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  const t = {
    title: language === "es" ? "Asistente JRM" : "JRM Assistant",
    subtitle: language === "es" ? "En línea · Soporte JRM" : "Online · JRM Support",
    inputPlaceholder: language === "es" ? "Escribe un mensaje..." : "Type a message...",
    tooltip: language === "es" ? "¿Tiene preguntas? ¡Chatee con nosotros!" : "Have questions? Chat with us!",
    whatsappBtn: language === "es" ? "Chatear por WhatsApp" : "Chat on WhatsApp",
    callBtn: language === "es" ? "Llamar Ahora" : "Call Us Now",
    emailBtn: language === "es" ? "Enviar Correo" : "Send Email"
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none font-sans", children: [
    showNotification && !isOpen && /* @__PURE__ */ jsxs("div", { className: "mb-3 mr-1 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-800 text-xs py-2.5 px-4 rounded-xl shadow-xl animate-bounce flex items-center gap-2 max-w-xs relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute right-5 -bottom-1.5 w-3 h-3 bg-white dark:bg-neutral-900 border-r border-b border-neutral-200/80 dark:border-neutral-800 transform rotate-45" }),
      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" }),
      /* @__PURE__ */ jsx("p", { className: "font-semibold", children: t.tooltip }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            setShowNotification(false);
          },
          className: "hover:text-red-500 ml-1 text-neutral-400",
          children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "mb-4 w-[calc(100vw-48px)] max-w-[340px] sm:w-[360px] h-[480px] bg-white rounded-3xl border border-neutral-200/70 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#2c241d] p-4 text-white relative flex items-center gap-3 shrink-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: favIcon,
              alt: "JRM Construction Landscaping Design",
              className: "h-10 w-10 rounded-full object-cover bg-white border-2 border-white/20"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#2c241d]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-sm tracking-wide", children: t.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-neutral-300 font-medium flex items-center gap-1", children: t.subtitle })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleToggle,
            className: "absolute right-4 top-4 text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors",
            children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4 bg-[#fbfaf7] space-y-4", children: [
        messages.map((msg) => /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`, children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `max-w-[85%] rounded-2xl px-4 py-2.5 text-xs md:text-sm leading-relaxed shadow-[0_2px_8px_rgba(0,0,0,0.02)] ${msg.sender === "user" ? "bg-[#4a6741] text-white rounded-tr-none" : "bg-white text-neutral-800 border border-neutral-100/90 rounded-tl-none"}`,
              children: msg.text
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] text-neutral-400 mt-1 px-1", children: msg.timestamp }),
          msg.sender === "bot" && msg.actions && /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-2 w-[85%]", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2 px-3 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all shadow-sm active:scale-98",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "h-4 w-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.33 4.99L2 22l5.163-1.355a9.92 9.92 0 004.846 1.258h.004c5.506 0 9.99-4.482 9.99-9.988 0-2.668-1.039-5.176-2.927-7.065A9.91 9.91 0 0012.012 2zm5.72 14.195c-.247.694-1.22 1.267-1.684 1.34-.407.065-.94.12-2.738-.624-2.298-.952-3.766-3.29-3.882-3.447-.115-.156-.939-1.248-.939-2.38 0-1.132.592-1.687.804-1.912.213-.225.467-.282.624-.282.156 0 .311.002.447.008.143.006.335-.054.524.398.195.467.669 1.63.729 1.75.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.253.31-.36.42-.12.12-.246.25-.106.49.14.24.62 1.024 1.33 1.657.914.814 1.683 1.065 1.922 1.184.24.12.38.1.522-.06.142-.16.612-.712.776-.956.164-.244.328-.2.553-.117.225.084 1.427.674 1.673.797.246.124.41.185.47.288.06.103.06.602-.187 1.296z" }) }),
                  t.whatsappBtn
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:2104295526",
                className: "flex items-center justify-center gap-2 w-full bg-[#3f4a1f] hover:bg-[#323b18] text-white py-2 px-3 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all shadow-sm active:scale-98",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
                  t.callBtn
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:info@jrmconstruction.com",
                className: "flex items-center justify-center gap-2 w-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 py-2 px-3 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all shadow-xs active:scale-98",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-neutral-500" }),
                  t.emailBtn
                ]
              }
            )
          ] })
        ] }, msg.id)),
        isTyping && /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-100 text-neutral-800 rounded-2xl rounded-tl-none px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
        ] }) }),
        /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSend, className: "p-3 bg-white border-t border-neutral-150 flex items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: inputValue,
            onChange: (e) => setInputValue(e.target.value),
            placeholder: t.inputPlaceholder,
            className: "flex-1 bg-[#f4f6f8] hover:bg-[#ebedf0] focus:bg-white border-none rounded-xl py-2.5 px-4 text-xs md:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#4a6741]/20 transition-all"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: !inputValue.trim(),
            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#4a6741] text-white hover:bg-[#3d5535] disabled:bg-neutral-100 disabled:text-neutral-300 transition-all cursor-pointer shrink-0",
            children: /* @__PURE__ */ jsx(Send, { className: "h-4.5 w-4.5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: handleToggle,
        className: `flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300 shadow-2xl relative group active:scale-95 cursor-pointer ${isOpen ? "bg-[#2c241d] hover:bg-[#1a1511] rotate-90" : "bg-[#4a6741] hover:bg-[#3d5535] hover:scale-105"}`,
        children: [
          !isOpen && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[#4a6741]/40 animate-ping opacity-75" }),
          isOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6 transition-transform duration-300" }) : /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6 transition-transform duration-300" })
        ]
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#f4f3ef]", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(WelcomeSection, {}),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(GetStartedSection, {}),
    /* @__PURE__ */ jsx(WhyChooseSection, {}),
    /* @__PURE__ */ jsx(FreeConsultationSection, {}),
    /* @__PURE__ */ jsx(GallerySection, {}),
    /* @__PURE__ */ jsx(QuoteSection, {}),
    /* @__PURE__ */ jsx(ReviewsSection, {}),
    /* @__PURE__ */ jsx(StatsSection, {}),
    /* @__PURE__ */ jsx(FAQSection, {}),
    /* @__PURE__ */ jsx(CTASection, {}),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingChat, {})
  ] });
}
export {
  Index as component
};
