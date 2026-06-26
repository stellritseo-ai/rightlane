import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";
import { getReviews } from "@/lib/leads-store";

interface TestimonialType {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

const FALLBACK_REVIEWS: TestimonialType[] = [
  {
    text: "The backyard fencing and covered patio upgrade they did for our home was outstanding. Professional, clean, and finished ahead of schedule.",
    name: "Marcus T.",
    role: "Homeowner, Clearwater",
    rating: 5,
    initials: "MT",
    avatarColor: "#1D4ED8",
  },
  {
    text: "Called them for emergency cleanup and debris removal after the storm — they arrived within 45 minutes and worked tirelessly. Truly 24/7 service.",
    name: "Priya S.",
    role: "Property Manager, Largo",
    rating: 5,
    initials: "PS",
    avatarColor: "#7C3AED",
  },
  {
    text: "They installed a gorgeous artificial turf and paved walkway in our courtyard. Flawless execution. I'll never use another handyman company again.",
    name: "Jared W.",
    role: "Homeowner, St. Petersburg",
    rating: 5,
    initials: "JW",
    avatarColor: "#065F46",
  },
  {
    text: "Best remodeling contractor in Clearwater. They wired, painted, and finished our entire office renovation — on time, on budget, and zero issues.",
    name: "Diana L.",
    role: "Business Owner, Dunedin",
    rating: 5,
    initials: "DL",
    avatarColor: "#B45309",
  },
  {
    text: "Mulching, landscaping, and property maintenance was seamless. They set up Lutron outdoor lighting and fixed all our deck issues.",
    name: "Kenji M.",
    role: "Homeowner, Clearwater Beach",
    rating: 5,
    initials: "KM",
    avatarColor: "#BE185D",
  },
  {
    text: "Hired them for a complete drywall repair and painting of a 1970s bungalow. They passed every inspection. Excellent team.",
    name: "Rosa F.",
    role: "Real Estate Investor, Pinellas Park",
    rating: 5,
    initials: "RF",
    avatarColor: "#0F766E",
  },
  {
    text: "Pressure washing and concrete demolition was smooth and the team was incredibly knowledgeable. They left the site spotless.",
    name: "Tony B.",
    role: "Restaurant Owner, Tarpon Springs",
    rating: 5,
    initials: "TB",
    avatarColor: "#9333EA",
  },
  {
    text: "Outstanding service from start to finish. The crew was courteous, efficient, and clearly knew what they were doing. Highly recommend.",
    name: "Sandra K.",
    role: "Property Manager, Safety Harbor",
    rating: 5,
    initials: "SK",
    avatarColor: "#DC2626",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ review }: { review: any }) {
  const getInitials = (authorName: string) => {
    const parts = authorName.trim().split(/\s+/);
    let initials = "";
    if (parts.length > 0 && parts[0]) initials += parts[0][0].toUpperCase();
    if (parts.length > 1 && parts[parts.length - 1]) initials += parts[parts.length - 1][0].toUpperCase();
    return initials || "U";
  };

  const palette = ["#1D4ED8", "#7C3AED", "#065F46", "#B45309", "#BE185D", "#0F766E", "#9333EA", "#DC2626"];
  const getAvatarColor = (authorName: string) => {
    let hash = 0;
    for (let i = 0; i < authorName.length; i++) {
      hash = authorName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return palette[Math.abs(hash) % palette.length];
  };

  const name = review.author || review.name || "Anonymous";
  const initials = review.initials || getInitials(name);
  const avatarColor = review.avatarColor || getAvatarColor(name);
  const role = review.role || `Homeowner, ${review.location || "Clearwater"}`;
  const rating = review.rating || 5;
  const text = review.text || "";

  return (
    <div className="relative flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] mx-3 bg-white border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-2xl p-5 sm:p-6 flex flex-col gap-4 group hover:shadow-[0_6px_30px_rgba(0,0,0,0.10)] hover:border-slate-300 transition-all duration-300">
      {/* Rating */}
      <StarRating count={rating} />

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed font-medium flex-1">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>
        <div>
          <p className="text-slate-900 font-semibold text-sm leading-tight">
            {name}
          </p>
          <p className="text-slate-400 text-xs mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: any[];
  direction?: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items, ...items];

  const animClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div
      className="overflow-hidden relative group/row"
      onMouseEnter={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "paused";
        }
      }}
      onMouseLeave={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "running";
        }
      }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#fbfaf7] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#fbfaf7] to-transparent" />

      <div ref={trackRef} className={`flex ${animClass}`}>
        {duplicated.map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const [dbReviews, setDbReviews] = useState<any[]>([]);

  useEffect(() => {
    let active = true;
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        if (active) {
          const featured = data.filter((r) => r.featured);
          setDbReviews(featured);
        }
      } catch (error) {
        console.error("Error loading reviews for landing page:", error);
      }
    };
    fetchReviews();
    return () => {
      active = false;
    };
  }, []);

  const reviewsToUse = dbReviews.length > 0 ? dbReviews : FALLBACK_REVIEWS;
  const half = Math.ceil(reviewsToUse.length / 2);
  const row1 = reviewsToUse.slice(0, half);
  const row2 = reviewsToUse.slice(half);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        id="reviews"
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative py-[60px] overflow-hidden"
      >
        {/* Background glow accents */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-amber-200/40 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-orange-200/30 blur-[100px]" />

        {/* Section Header */}
        <div className="mx-auto w-[90%] max-w-7xl text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Client Reviews
          </div>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight capitalize -mt-[5px] mb-[10px]">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
              hundreds
            </span>{" "}
            of customers
          </h2>

          <p className="mx-auto max-w-xl text-[#000] text-sm sm:text-base leading-relaxed -mb-[35px]">
            Real experiences from real clients across Clearwater & Pinellas County. See
            why homeowners and businesses choose us every time.
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="relative z-10 flex flex-col gap-5">
          {row1.length > 0 && <MarqueeRow items={row1} direction="left" />}
          {row2.length > 0 && <MarqueeRow items={row2} direction="right" />}
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes marquee-left {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          @keyframes marquee-right {
            0%   { transform: translateX(-33.3333%); }
            100% { transform: translateX(0); }
          }
          .marquee-track-left {
            animation: marquee-left 30s linear infinite;
            width: max-content;
          }
          .marquee-track-right {
            animation: marquee-right 30s linear infinite;
            width: max-content;
          }
        `}</style>
      </section>
    </div>
  );
}