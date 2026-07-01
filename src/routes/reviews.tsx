import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { getReviews } from "@/lib/leads-store";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Award,
  ThumbsUp,
  MessageSquare,
  FileText,
  Share2,
  ExternalLink,
  Filter,
  Users
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import reviewsHero from "@/assets/wel-img.png";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Testimonials - Right Lane Handyman Services, LLC | Clearwater, FL" },
      { name: "description", content: "Read real client reviews and testimonials for Right Lane Handyman Services, LLC. 4.9 out of 5 stars based on 50+ reviews. Serving Clearwater & all Pinellas County." },
      { property: "og:title", content: "Client Reviews - Right Lane Handyman Services, LLC" },
      { property: "og:description", content: "What our clients say about their experience with Ronnie Lane and the Right Lane team. Licensed, insured, and bonded handyman services." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: ReviewsPage,
});

interface ReviewItem {
  id: number;
  author: string;
  role: string;
  city: string;
  title: string;
  quote: string;
  category: string;
  rating: number;
}

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: "Sandra K.",
    role: "Homeowner",
    city: "Safety Harbor",
    title: "Outstanding service from start to finish",
    quote: "The crew was courteous, efficient, and clearly knew what they were doing. Highly recommend.",
    category: "Handyman & Repairs",
    rating: 5
  },
  {
    id: 2,
    author: "Diana L.",
    role: "Homeowner",
    city: "Dunedin",
    title: "Best remodeling contractor in Clearwater",
    quote: "They wired, painted, and finished our entire office renovation — on time, on budget, and zero issues.",
    category: "Remodeling",
    rating: 5
  },
  {
    id: 3,
    author: "Priya S.",
    role: "Homeowner",
    city: "Largo",
    title: "Truly 24/7 service",
    quote: "Called them for emergency cleanup and debris removal after the storm — they arrived within 45 minutes and worked tirelessly.",
    category: "Storm & Emergency Cleanup",
    rating: 5
  },
  {
    id: 4,
    author: "Jared W.",
    role: "Homeowner",
    city: "St. Petersburg",
    title: "Flawless execution. I'll never use another handyman company again",
    quote: "They installed a gorgeous artificial turf and paved walkway in our courtyard.",
    category: "Remodeling",
    rating: 5
  },
  {
    id: 5,
    author: "Michael F.",
    role: "Homeowner",
    city: "Largo",
    title: "They hauled away our old hot tub and concrete blocks",
    quote: "Very heavy work but the Right Lane crew handled it with ease. Outstanding service!",
    category: "Junk Removal & Hauling",
    rating: 5
  },
  {
    id: 6,
    author: "Rachel S.",
    role: "Homeowner",
    city: "Tarpon Springs",
    title: "Excellent deck pressure washing and sealing",
    quote: "Ronnie was professional, on time, and left our backyard spotless. 5 stars!",
    category: "Pressure Washing",
    rating: 5
  },
  {
    id: 7,
    author: "Robert T.",
    role: "Homeowner",
    city: "Tampa",
    title: "Cleaned up our commercial property after storm damage",
    quote: "Cleared fallen branches, loose gravel, and trash. Excellent communication throughout.",
    category: "Storm & Emergency Cleanup",
    rating: 5
  },
  {
    id: 8,
    author: "Jason B.",
    role: "Homeowner",
    city: "Clearwater",
    title: "Super responsive handyman service",
    quote: "They fixed our sticky doors, hung some heavy shelving, and replaced three light fixtures in one afternoon.",
    category: "Handyman & Repairs",
    rating: 5
  },
  {
    id: 9,
    author: "Nancy P.",
    role: "Homeowner",
    city: "Pinellas Park",
    title: "Repaired our wooden fence gates and replaced three rotting posts",
    quote: "Very sturdy work and fair pricing. Will definitely hire Ronnie again.",
    category: "Handyman & Repairs",
    rating: 5
  },
  {
    id: 10,
    author: "Thomas H.",
    role: "Homeowner",
    city: "Safety Harbor",
    title: "Had our front yard mulched and garden beds bordered",
    quote: "Right Lane did a beautiful job. Our curb appeal has never looked better!",
    category: "Landscaping & Property Maintenance",
    rating: 5
  },
  {
    id: 11,
    author: "Sarah W.",
    role: "Homeowner",
    city: "Dunedin",
    title: "Fast debris removal after clearing out our garage",
    quote: "They took care of everything from old furniture to broken appliances. Excellent service.",
    category: "Junk Removal & Hauling",
    rating: 5
  },
  {
    id: 12,
    author: "Mark A.",
    role: "Homeowner",
    city: "St. Petersburg",
    title: "Right Lane repaired our drywall after a plumbing leak",
    quote: "They did the patching, texturing, and painting flawlessly. You can't even see where the hole was.",
    category: "Drywall & Painting",
    rating: 5
  },
  {
    id: 13,
    author: "Linda K.",
    role: "Homeowner",
    city: "Clearwater Beach",
    title: "Professional pressure washing for our entire driveway and pool deck",
    quote: "It looks brand new again. Highly recommend Right Lane!",
    category: "Pressure Washing",
    rating: 5
  },
  {
    id: 14,
    author: "Gary D.",
    role: "Homeowner",
    city: "Largo",
    title: "Ronnie hauled away two truckloads of old deck lumber and yard waste in less than an hour",
    quote: "Great prices and prompt service in Largo.",
    category: "Junk Removal & Hauling",
    rating: 5
  },
  {
    id: 15,
    author: "Tony B.",
    role: "Homeowner",
    city: "Tarpon Springs",
    title: "Pressure washing and concrete demolition was smooth",
    quote: "The team was incredibly knowledgeable. They left the site spotless.",
    category: "Pressure Washing",
    rating: 5
  },
  {
    id: 16,
    author: "Rosa F.",
    role: "Homeowner",
    city: "Pinellas Park",
    title: "Hired them for a complete drywall repair and painting of a 1970s bungalow",
    quote: "They passed every inspection. Excellent team.",
    category: "Drywall & Painting",
    rating: 5
  },
  {
    id: 17,
    author: "Kenji M.",
    role: "Homeowner",
    city: "Clearwater Beach",
    title: "Mulching, landscaping, and property maintenance was seamless",
    quote: "They set up Lutron outdoor lighting and fixed all our deck issues.",
    category: "Landscaping & Property Maintenance",
    rating: 5
  },
  {
    id: 18,
    author: "Marcus T.",
    role: "Homeowner",
    city: "Clearwater",
    title: "The backyard fencing and covered patio upgrade they did for our home was outstanding",
    quote: "Professional, clean, and finished ahead of schedule.",
    category: "Remodeling",
    rating: 5
  }
];

function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [reviews, setReviews] = useState<ReviewItem[]>(DEFAULT_REVIEWS);

  useEffect(() => {
    let active = true;
    const fetchDbReviews = async () => {
      try {
        const data = await getReviews();
        if (active && data && data.length > 0) {
          const getCategoryFromText = (title: string, text: string): string => {
            const content = `${title} ${text}`.toLowerCase();
            if (content.includes("junk") || content.includes("haul") || content.includes("debris") || content.includes("waste")) {
              return "Junk Removal & Hauling";
            }
            if (content.includes("pressure") || content.includes("wash") || content.includes("power")) {
              return "Pressure Washing";
            }
            if (content.includes("storm") || content.includes("emergency") || content.includes("flood") || content.includes("hurricane")) {
              return "Storm & Emergency Cleanup";
            }
            if (content.includes("paint") || content.includes("drywall") || content.includes("wall") || content.includes("texture")) {
              return "Drywall & Painting";
            }
            if (content.includes("landscap") || content.includes("mulch") || content.includes("garden") || content.includes("lawn") || content.includes("mow")) {
              return "Landscaping & Property Maintenance";
            }
            if (content.includes("remodel") || content.includes("renovat") || content.includes("construction") || content.includes("build")) {
              return "Remodeling";
            }
            return "Handyman & Repairs";
          };

          const mapped = data.map((r: any) => ({
            id: r.id || r._id,
            author: r.author || "Anonymous",
            role: r.role || "Verified Client",
            city: r.location || "Clearwater",
            title: r.title || "Excellent Service",
            quote: r.text || "",
            category: r.category || getCategoryFromText(r.title || "", r.text || ""),
            rating: r.rating || 5
          }));
          setReviews(mapped);
        }
      } catch (err) {
        console.error("Error loading db reviews:", err);
      }
    };
    fetchDbReviews();
    return () => {
      active = false;
    };
  }, []);

  const categories = [
    "All",
    "Junk Removal & Hauling",
    "Pressure Washing",
    "Storm & Emergency Cleanup",
    "Handyman & Repairs",
    "Drywall & Painting",
    "Landscaping & Property Maintenance",
    "Remodeling"
  ];

  const recentReviewsGlance = [
    { name: "Michael F.", location: "Largo", service: "Junk Removal & Hauling", rating: "★★★★★" },
    { name: "Rachel S.", location: "Tarpon Springs", service: "Pressure Washing", rating: "★★★★★" },
    { name: "Robert T.", location: "Tampa", service: "Storm Cleanup", rating: "★★★★★" },
    { name: "Jason B.", location: "Clearwater", service: "Handyman Services", rating: "★★★★★" },
    { name: "Nancy P.", location: "Pinellas Park", service: "Fence Repair", rating: "★★★★★" },
    { name: "Thomas H.", location: "Safety Harbor", service: "Landscaping", rating: "★★★★★" },
    { name: "Sarah W.", location: "Dunedin", service: "Debris Removal", rating: "★★★★★" },
    { name: "Mark A.", location: "St. Petersburg", service: "Drywall Repair", rating: "★★★★★" },
    { name: "Linda K.", location: "Clearwater Beach", service: "Pressure Washing", rating: "★★★★★" },
    { name: "Gary D.", location: "Largo", service: "Hauling", rating: "★★★★★" },
    { name: "Sandra K.", location: "Safety Harbor", service: "General Service", rating: "★★★★★" },
    { name: "Tony B.", location: "Tarpon Springs", service: "Pressure Washing / Demolition", rating: "★★★★★" },
    { name: "Rosa F.", location: "Pinellas Park", service: "Drywall & Painting", rating: "★★★★★" },
    { name: "Kenji M.", location: "Clearwater Beach", service: "Landscaping", rating: "★★★★★" },
    { name: "Diana L.", location: "Dunedin", service: "Remodeling", rating: "★★★★★" },
    { name: "Jared W.", location: "St. Petersburg", service: "Turf & Paving", rating: "★★★★★" },
    { name: "Priya S.", location: "Largo", service: "Emergency Cleanup", rating: "★★★★★" },
    { name: "Marcus T.", location: "Clearwater", service: "Fencing & Patio", rating: "★★★★★" }
  ];

  const whatClientsLove = [
    { reason: "Professionalism", text: "Courteous, efficient, and clearly knew what they were doing." },
    { reason: "Speed & Reliability", text: "Arrived within 45 minutes and worked tirelessly." },
    { reason: "Quality Workmanship", text: "Flawless execution. You can't even see where the hole was." },
    { reason: "Fair Pricing", text: "Great prices and prompt service." },
    { reason: "Communication", text: "Excellent communication throughout." },
    { reason: "Cleanliness", text: "Left the site spotless." }
  ];

  const whyChooseItems = [
    "25+ Years of Experience – Every job is handled with skill and speed.",
    "Licensed, Insured & Bonded – Complete peace of mind for your property.",
    "Residential, Commercial & Industrial – We do it all.",
    "24/7 Emergency Service – Nights, weekends, and Sundays (emergency only).",
    "Upfront Pricing – No surprises, no hidden fees.",
    "Guaranteed Work – 100% satisfaction.",
    "We Haul What Others Won't – Heavy debris, mixed materials, and full-site cleanouts.",
    "Locally Owned – Clearwater, FL – We know these communities."
  ];

  const filteredReviews = activeCategory === "All"
    ? reviews
    : reviews.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── HERO SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.05, opacity: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${reviewsHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/92 via-[#1c140d]/78 to-[#1c140d]/92 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              Client Reviews
            </span>
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight capitalize tracking-tight drop-shadow-md">
              What Our Customers Say About <br />Right Lane Handyman Services, LLC
            </h1>
            <p className="mt-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
              Trust is earned one job at a time. For over 25 years, we've been serving the Clearwater and Pinellas County community with honesty, reliability, and exceptional workmanship. Read what our clients have to say about Ronnie and the Right Lane team.
            </p>
          </motion.div>
        </section>
      </div>

      {/* ── RATINGS OVERVIEW CARD ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm py-12 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto flex flex-col items-center"
          >
            <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Overall Rating</span>
            <div className="flex gap-1.5 mt-3 text-[#ffa326]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-current" />
              ))}
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-neutral-900">
              4.9 out of 5 Stars
            </h2>
            <p className="text-sm text-neutral-600 font-light mt-1.5">
              Based on 50+ Verified Reviews from Homeowners & Commercial Clients
            </p>
          </motion.div>
        </section>
      </div>

      {/* ── BY SERVICE TYPE & REVIEWS GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-4 py-16 sm:px-8 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Filter by Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Explore Reviews By Project Category
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#cc7e14] border-[#cc7e14] text-white shadow-md scale-[1.02]"
                    : "bg-white border-neutral-200 hover:border-[#ffa326] text-neutral-800 hover:bg-neutral-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="relative min-h-[300px]">
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            >
              <AnimatePresence mode="popLayout">
                {filteredReviews.map((test) => (
                  <motion.div
                    layout
                    key={test.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md hover:border-[#ffa326]/20 transition-all duration-300 flex flex-col justify-between text-left group"
                  >
                    <div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#ffa326] text-[#ffa326]" />
                        ))}
                      </div>
                      <h3 className="text-sm font-bold text-neutral-900 mb-2 font-sans line-clamp-2">
                        "{test.title}"
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed font-light mb-6">
                        "{test.quote}"
                      </p>
                    </div>
                    <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-neutral-900">{test.author}</span>
                        <span className="text-[10px] text-neutral-500 font-semibold">{test.role}</span>
                      </div>
                      <span className="text-[9px] font-bold text-[#cc7e14] bg-[#ffa326]/10 border border-[#ffa326]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {test.city}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-16 text-neutral-500 font-light text-sm">
                No reviews found in this category.
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── WHAT CLIENTS LOVE MOST (COMPARATIVE GRID) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-14"
          >
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Standouts
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              What Our Clients Love Most
            </h2>
            <p className="mt-4 text-neutral-700 text-sm md:text-base leading-relaxed">
              We focus on the small details that make a massive difference. Here is what our Pinellas County customers consistently highlight in their reviews.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatClientsLove.map((love, idx) => (
              <motion.div
                key={love.reason}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl border border-neutral-200/50 p-6 shadow-sm flex flex-col justify-start text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14]">
                    <ThumbsUp className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-extrabold text-neutral-900 tracking-wide">{love.reason}</h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {love.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── VERIFIED PLATFORMS & LEAVE A REVIEW SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16 text-center">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-6xl mx-auto">
            
            {/* Left: Verified platforms with badges */}
            <div className="text-left space-y-6">
              <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider">
                Trusted & Verified
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Verified on Leading Platforms
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                We're proud to be recognized and reviewed on leading industry platforms. Our credentials and ratings are audited, giving you full confidence in our operations.
              </p>

              {/* Grid of Badges */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 max-w-md">
                <div className="flex flex-col items-center justify-center p-4 bg-[#f4f3ef]/55 border border-neutral-200/50 rounded-2xl shadow-xs">
                  <img src={bbbBadge} alt="BBB Accredited" className="h-10 w-auto object-contain select-none" />
                  <span className="text-[10px] font-bold text-neutral-500 mt-2">BBB Accredited</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-[#f4f3ef]/55 border border-neutral-200/50 rounded-2xl shadow-xs">
                  <img src={yelpBadge} alt="Yelp Verified" className="h-10 w-auto object-contain select-none" />
                  <span className="text-[10px] font-bold text-neutral-500 mt-2">Yelp Rated 5 Stars</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-[#f4f3ef]/55 border border-neutral-200/50 rounded-2xl shadow-xs">
                  <img src={homeAdvisorBadge} alt="HomeAdvisor Approved" className="h-10 w-auto object-contain select-none" />
                  <span className="text-[10px] font-bold text-neutral-500 mt-2">HomeAdvisor Approved</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-[#f4f3ef]/55 border border-neutral-200/50 rounded-2xl shadow-xs">
                  <div className="flex text-[#ffa326] gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-[10px] font-bold text-neutral-500 mt-2.5">Google Verified</span>
                </div>
              </div>
            </div>

            {/* Right: Leave Us a Review Card */}
            <div className="bg-gradient-to-br from-[#1c140d] to-[#2b2015] text-white rounded-2xl p-8 text-left shadow-xl border border-neutral-800">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#ffa326] mb-5">
                <Share2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold tracking-wide mb-2 capitalize">Share Your Experience</h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                Have you worked with Right Lane Handyman Services, LLC? We'd love to hear about your experience. Your feedback helps us improve and helps other homeowners make informed decisions.
              </p>

              <div className="grid grid-cols-2 gap-3.5">
                <a
                  href="#"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white hover:text-neutral-900 transition-all duration-200 text-xs font-semibold"
                >
                  <span>Google Review</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white hover:text-neutral-900 transition-all duration-200 text-xs font-semibold"
                >
                  <span>Yelp Review</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white hover:text-neutral-900 transition-all duration-200 text-xs font-semibold"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white hover:text-neutral-900 transition-all duration-200 text-xs font-semibold"
                >
                  <span>HomeAdvisor</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* ── RECENT REVIEWS AT A GLANCE (COMPARATIVE TABLE) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              At A Glance
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Recent Reviews at a Glance
            </h2>
            <p className="mt-3 text-neutral-600 text-sm font-light">
              An overview of our most recent customer ratings and project categories across Pinellas County.
            </p>
          </div>

          {/* Table Container */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#f4f3ef] border-b border-neutral-200 text-neutral-900 font-bold">
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4 text-center">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {recentReviewsGlance.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-3.5 font-bold text-neutral-950">{row.name}</td>
                      <td className="px-6 py-3.5 text-neutral-600 font-light">{row.location}</td>
                      <td className="px-6 py-3.5 font-medium text-neutral-700">{row.service}</td>
                      <td className="px-6 py-3.5 text-center text-amber-500 font-black tracking-wider text-base select-none">{row.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE RIGHT LANE ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-6xl mx-auto">
            
            {/* Left */}
            <div className="text-left space-y-6">
              <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-2 shadow-sm">
                Our Guarantee
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Why Choose Right Lane Handyman Services?
              </h2>
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-light">
                Over a quarter-century of working in Pinellas County has shaped how we approach customer service. From clear, upfront pricing to guaranteed quality work, we make the process smooth and stress-free.
              </p>
            </div>

            {/* Right List */}
            <div className="grid gap-4 text-left">
              {whyChooseItems.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white/70 backdrop-blur-xs p-4 rounded-xl border border-neutral-200/50">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14] border border-[#ffa326]/20 select-none">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-neutral-800 text-xs sm:text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* ── PREMIUM CALL TO ACTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(28,20,13,0.96), rgba(28,20,13,0.98)), url(/src/assets/wel-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img src={logo} alt="Right Lane Logo" className="h-14 w-auto object-contain mb-8 filter brightness-110" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Experience the Right Lane Difference?
            </h2>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light mb-10 max-w-3xl">
              Join our growing list of satisfied customers. Contact us today for a free, no-obligation estimate and find out why we're Clearwater's top rated handyman service.
            </p>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-3xl mb-10 text-left">
              <h3 className="text-lg font-bold text-white mb-5 text-center sm:text-left tracking-wide">
                Right Lane Handyman Services, LLC
              </h3>

              <div className="grid sm:grid-cols-2 gap-5 text-[15px] font-light">
                <a href="tel:7276420201" className="flex items-center gap-3.5 hover:text-[#ffa326] transition-colors">
                  <Phone className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Phone: (727) 642-0201</span>
                </a>
                <a href="mailto:rightlanehandymanservice@yahoo.com" className="flex items-center gap-3.5 hover:text-[#ffa326] transition-colors">
                  <Mail className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Email: rightlanehandymanservice@yahoo.com</span>
                </a>
                <div className="flex flex-row items-center gap-3.5 col-span-1 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-[#ffa326] shrink-0" />
                  <span>Serving Clearwater, FL, and all of Pinellas County</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:7276420201"
                className="rounded-full bg-[#ffa326] hover:bg-[#ffa326]/90 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call Ronnie Now
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-[14px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Request Your Free Estimate Today!
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
