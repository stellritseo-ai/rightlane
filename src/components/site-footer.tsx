import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Youtube, Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#f4f3ef] pt-0 pb-[15px] px-[15px]">
      <footer
        className="mx-auto max-w-[1400px] w-full bg-gradient-to-b from-[#120b08] to-[#0a0604] text-white px-5 sm:px-8 md:px-12 py-12 sm:py-16 rounded-t-none rounded-b-[10px] mt-0 border border-neutral-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative overflow-hidden"
      >
        {/* Subtle decorative top line highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffa326]/40 to-transparent" />

        {/* Main 4-Column Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 relative z-10">

          {/* Column 1: Business Details & Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/5 pb-2.5 w-full">
                Right Lane Handyman Services, LLC
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light pr-0 lg:pr-8 mb-6">
                We pride ourselves on the quality of our work as well as our commitment to outstanding results. We look forward to building lasting relationships with our clients and guarantee your satisfaction.
              </p>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#ffa326] mt-4 mb-6 flex flex-wrap gap-x-2.5 gap-y-1.5 items-center select-none">
                <span>Licensed</span>
                <span className="text-neutral-700 font-bold">·</span>
                <span>Insured</span>
                <span className="text-neutral-700 font-bold">·</span>
                <span>Bonded</span>
                <span className="text-neutral-700 font-bold">·</span>
                <span className="text-neutral-200">25 Years Of Experience</span>
              </div>
              <div className="flex flex-wrap gap-3.5 mt-5">
                <img
                  src={bbbBadge}
                  alt="BBB Accredited"
                  className="h-[42px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
                <img
                  src={yelpBadge}
                  alt="Yelp reviews"
                  className="h-[42px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
                <img
                  src={homeAdvisorBadge}
                  alt="HomeAdvisor approved"
                  className="h-[42px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/5 pb-2.5 w-full">
              Services
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-neutral-400 font-light">
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Post Construction Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Pressure Washing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Demolition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Junk Removal & Hauling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Landscaping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Property maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/5 pb-2.5 w-full">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-neutral-400 font-light">
              <li>
                <a href="/" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Free Estimate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-300 block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/5 pb-2.5 w-full">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-neutral-400 font-light leading-relaxed">
              <p className="text-white font-medium">Right Lane Handyman Services, LLC</p>

              <div className="flex items-center gap-3 hover:text-[#ffa326] transition-colors duration-200">
                <Phone className="h-4.5 w-4.5 text-[#ffa326] fill-[#ffa326]/10" />
                <a href="tel:7276420201">(727) 642-0201</a>
              </div>

              <div className="flex items-center gap-3 hover:text-[#ffa326] transition-colors duration-200">
                <Mail className="h-4.5 w-4.5 text-[#ffa326]" />
                <a href="mailto:rightlanehandymanservice@yahoo.com" className="break-all">rightlanehandymanservice@yahoo.com</a>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin className="h-4.5 w-4.5 text-[#ffa326] fill-[#ffa326]/10" />
                <span>Clearwater, FL 33756</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#3b5998] hover:border-[#3b5998] text-white hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-[15px] w-[15px] fill-current" />
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#1da1f2] hover:border-[#1da1f2] text-white hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-[15px] w-[15px] fill-current" />
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#ff0000] hover:border-[#ff0000] text-white hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="h-[15px] w-[15px]" />
              </a>
              {/* X */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:border-white hover:text-black hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="X"
              >
                <svg className="h-[14px] w-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Underlined SEO Links Block */}
        <div className="mt-14 border-t border-white/5 pt-8 flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-3 text-xs text-neutral-500 font-light text-center relative z-10 w-full">
          <Link to="/junk-removal-clearwater-fl" className="underline hover:text-[#ffa326] transition-colors duration-200">
            Junk Removal Clearwater FL
          </Link>
          <Link to="/demolition-services-pinellas-county" className="underline hover:text-[#ffa326] transition-colors duration-200">
            Demolition Services Pinellas County
          </Link>
          <Link to="/hauling-services-palm-harbor" className="underline hover:text-[#ffa326] transition-colors duration-200">
            Hauling Services Palm Harbor
          </Link>
          <Link to="/debris-removal-tarpon-springs" className="underline hover:text-[#ffa326] transition-colors duration-200">
            Debris Removal Tarpon Springs
          </Link>
        </div>

        {/* Copyright & Branding Banner */}
        <div className="mt-10 rounded-xl bg-gradient-to-r from-[#ffa326]/10 to-[#cc7e14]/10 border border-[#ffa326]/20 py-3.5 text-center text-[11px] sm:text-xs font-medium text-neutral-300 px-6 select-none relative z-10 backdrop-blur-md">
          Copyright © 2026 Right Lane Handyman Services | All Rights Reserved. Design By : STELLR IT.
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 right-6 bg-[#ffa326] hover:bg-[#cc7e14] text-neutral-950 p-2.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(255,163,38,0.25)] hover:shadow-[0_6px_20px_rgba(255,163,38,0.4)] cursor-pointer flex items-center justify-center group active:scale-95 z-20 border border-[#ffa326]/20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 stroke-[3] group-hover:-translate-y-0.5 transition-transform" strokeWidth={3} />
        </button>

      </footer>
    </div>
  );
}