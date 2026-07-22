import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Building2,
  Clock,
  CircleDollarSign,
  ThumbsUp,
  Truck,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Star,
  Upload,
  Send,
  ExternalLink,
  User,
  Smartphone,
  Phone,
  Mail as MailIcon,
  MapPin as MapIcon,
  Check,
  X,
  Sparkles,
  Leaf,
  Layers,
  Wrench,
  Trash2,
  HeartPulse,
  Timer,
  Info
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import imgCleaning from "@/assets/svc-cleaning.png";
import imgCommercial from "@/assets/stats-cleanup.png";
import imgHauling from "@/assets/why-choose-1.png";
import yelpBadge from "@/assets/yelp-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/junk-removal-clearwater-fl")({
  head: () => ({
    meta: [
      { title: "Junk Removal Clearwater FL - Right Lane Handyman Services, LLC" },
      {
        name: "description",
        content:
          "Top-rated Junk Removal in Clearwater, FL. Professional residential and commercial hauling, debris removal, and cleanouts. Call (727) 642-0201 today.",
      },
      { property: "og:title", content: "Junk Removal Clearwater FL - Right Lane Handyman" },
      { property: "og:description", content: "Top-rated Junk Removal in Clearwater, FL. Professional residential and commercial hauling." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: JunkRemovalClearwaterFLPage,
});

const BENEFITS = [
  { icon: Award, title: "25+ Years of Experience", text: "Decades of expertise in hauling and debris removal." },
  { icon: ShieldCheck, title: "Licensed, Insured & Bonded", text: "Complete peace of mind for your property." },
  { icon: Building2, title: "Residential, Commercial & Industrial", text: "We handle projects of any size and scope." },
  { icon: Clock, title: "24/7 Emergency Service", text: "Available for urgent hauling needs." },
  { icon: CircleDollarSign, title: "Upfront Pricing", text: "No surprises, no hidden fees." },
  { icon: ThumbsUp, title: "Guaranteed Work", text: "100% satisfaction, guaranteed." },
  { icon: Truck, title: "We Haul What Others Won't", text: "Heavy debris, mixed materials, and full-site cleanouts." },
  { icon: MapPin, title: "Locally Owned", text: "Clearwater, FL – We know these communities." },
];

const CORE_SERVICES = [
  {
    icon: Trash2,
    title: "🏠 Residential Junk Removal",
    desc: "From garage cleanouts to yard waste removal, we help homeowners reclaim their space and restore order to their property.",
    bullets: [
      "Garage and attic cleanouts",
      "Yard waste and brush removal",
      "Old furniture and appliance removal",
      "Hot tub and pool removal",
      "Mattress and box spring disposal",
      "Electronic waste recycling",
      "Estate cleanouts",
      "Hoarding cleanup",
    ],
  },
  {
    icon: Building2,
    title: "🏢 Commercial Junk Removal",
    desc: "We help businesses maintain clean, professional environments by removing unwanted items and debris efficiently.",
    bullets: [
      "Office furniture removal",
      "Retail display and fixture removal",
      "Warehouse cleanouts",
      "Restaurant equipment removal",
      "Construction and renovation debris",
      "Parking lot debris removal",
      "Storage unit cleanouts",
    ],
  },
  {
    icon: Layers,
    title: "🏭 Industrial Hauling",
    desc: "Our heavy equipment and experienced team handle the toughest industrial hauling challenges.",
    bullets: [
      "Manufacturing waste removal",
      "Heavy equipment hauling",
      "Industrial scrap metal removal",
      "Large machinery disposal",
      "Factory cleanouts",
      "Bulk material hauling",
    ],
  },
];

const HEAVY_DEBRIS_DETAILS = [
  {
    icon: Truck,
    title: "🚛 Heavy Debris Removal",
    desc: "We haul what others won't. We specialize in removing heavy, bulky, and difficult-to-handle materials.",
    bullets: [
      "Concrete, brick, and stone removal",
      "Metal and scrap removal",
      "Mixed construction debris",
      "Roofing and shingle waste",
      "Dirt, gravel, and soil removal",
      "Large tree trunks and stumps",
      "Heavy furniture and equipment",
    ],
  },
  {
    icon: Sparkles,
    title: "🏡 Full-Site Cleanouts",
    desc: "From complete property cleanouts to post-construction site clearing, we handle every aspect of site cleanup.",
    bullets: [
      "Foreclosure cleanouts",
      "Eviction cleanouts",
      "Real estate property preparation",
      "Post-construction site clearing",
      "Storm debris removal",
      "Demolition debris removal",
    ],
  },
];

const WHY_WE_HAUL = [
  {
    title: "Heavy Lifting Capability",
    desc: "Our team has the physical strength and specialized lifting equipment to move heavy, bulky items safely.",
  },
  {
    title: "Proper Equipment",
    desc: "We operate flatbeds, heavy trailers, and loading machinery to handle large-volume cleanouts.",
  },
  {
    title: "Knowledge and Experience",
    desc: "Over 25 years of experience means we know how to secure loads and handle hazardous materials safely.",
  },
  {
    title: "Responsible Disposal",
    desc: "We sort and recycle materials wherever possible to minimize what goes into our local landfills.",
  },
  {
    title: "No Job Too Big or Small",
    desc: "From single appliance removal to entire commercial property clearings, we treat every job with equal care.",
  },
];

const PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "Consultation",
    desc: "We visit your property to assess the scope of work and provide a free, no-obligation estimate with upfront pricing.",
  },
  {
    step: "Step 2",
    title: "Scheduling",
    desc: "We schedule your junk removal at a time that works for you. Same-day and emergency hauling are available.",
  },
  {
    step: "Step 3",
    title: "Removal",
    desc: "Our skilled team arrives on schedule and handles all the loading and heavy lifting efficiently.",
  },
  {
    step: "Step 4",
    title: "Cleanup",
    desc: "We sweep and clear the work area after removing the junk, leaving your property tidy and ready for use.",
  },
  {
    step: "Step 5",
    title: "Disposal",
    desc: "We haul the load away, sorting items for donation and recycling first to protect the environment.",
  },
  {
    step: "Step 6",
    title: "Final Walkthrough",
    desc: "We walk through the space with you to ensure your complete satisfaction. We don't leave until you're happy.",
  },
];

const WHAT_WE_HAUL_TABLE = [
  { item: "Furniture", desc: "Couches, tables, chairs, beds, mattresses, dressers" },
  { item: "Appliances", desc: "Refrigerators, washers, dryers, stoves, dishwashers" },
  { item: "Electronics", desc: "TVs, computers, monitors, printers, e-waste" },
  { item: "Construction Debris", desc: "Drywall, lumber, tiles, roofing, insulation" },
  { item: "Heavy Materials", desc: "Concrete, brick, stone, metal, scrap, dirt, gravel" },
  { item: "Yard Waste", desc: "Tree branches, leaves, stumps, brush, sod" },
  { item: "Large Items", desc: "Hot tubs, pools, sheds, playground equipment" },
  { item: "Mixed Debris", desc: "Any combination of household, construction, and yard waste" },
  { item: "Hazardous Materials", desc: "(Call for specific disposal requirements)" },
];

const INDUSTRIES = [
  { ind: "Residential", srv: "Home cleanouts, garage cleanouts, yard waste removal" },
  { ind: "Commercial", srv: "Office cleanouts, retail fixture removal, renovation debris" },
  { ind: "Industrial", srv: "Manufacturing waste, heavy equipment removal, scrap metal" },
  { ind: "Property Management", srv: "Eviction cleanouts, foreclosure cleanouts, property prep" },
  { ind: "Construction", srv: "Post-construction debris, demolition waste" },
  { ind: "Insurance", srv: "Storm damage cleanup, emergency debris removal" },
];

const SERVICE_CITIES = [
  "Clearwater", "Largo", "St. Petersburg",
  "Dunedin", "Tarpon Springs", "Safety Harbor",
  "Palm Harbor", "Pinellas Park", "Seminole",
  "Belleair", "Belleair Beach", "Bay Pines",
  "Oldsmar", "Ozona", "Crystal Beach",
  "Indian Rocks Beach",
];

const FAQS = [
  {
    question: "What types of junk do you remove?",
    answer:
      "We remove almost anything! Furniture, appliances, electronics, construction debris, heavy materials, yard waste, large items, and mixed debris. If you're not sure, just call us and ask.",
  },
  {
    question: "What do you mean by 'we haul what others won't'?",
    answer:
      "We take on heavy, bulky, and difficult-to-handle materials that many other junk removal companies refuse. If it's heavy, awkward, or tough to move, we're the ones to call.",
  },
  {
    question: "How much does junk removal cost?",
    answer:
      "We provide upfront pricing based on the volume and type of materials being removed. We offer free, no-obligation estimates so you know the cost before we start.",
  },
  {
    question: "Do you do same-day junk removal?",
    answer:
      "Yes! We offer same-day service when available. For emergency and urgent needs, call us and we'll do our best to accommodate your schedule.",
  },
  {
    question: "What happens to the junk after you remove it?",
    answer:
      "We sort materials for recycling whenever possible. Usable items are donated, recyclable materials are sent to recycling facilities, and remaining waste is disposed of responsibly at approved facilities.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes! Right Lane Handyman Services, LLC is fully licensed, insured, and bonded for your protection and peace of mind.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we provide free, no-obligation estimates for all junk removal and hauling projects. Contact us today to schedule yours.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, checks, and all major credit cards. Payment is due upon completion of the job unless otherwise arranged.",
  },
];

const REVIEWS = [
  { quote: "They hauled away our old hot tub and concrete blocks. Very heavy work but the Right Lane crew handled it with ease. Outstanding service!", author: "Michael F.", city: "Largo" },
  { quote: "Ronnie hauled away two truckloads of old deck lumber and yard waste in less than an hour. Great prices and prompt service in Largo.", author: "Gary D.", city: "Largo" },
  { quote: "Fast debris removal after clearing out our garage. They took care of everything from old furniture to broken appliances. Excellent service.", author: "Sarah W.", city: "Dunedin" },
  {
    quote: "Called them for emergency cleanup and debris removal after the storm — they arrived within 45 minutes and worked tirelessly. Truly 24/7 service.",
    author: "Priya S.",
    city: "Largo",
  },
  {
    quote: "Outstanding service from start to finish. The crew was courteous, efficient, and clearly knew what they were doing. Highly recommend.",
    author: "Sandra K.",
    city: "Safety Harbor",
  },
];

const QUICK_LINKS = [
  { label: "Post Construction Cleaning", to: "/post-construction-cleaning" },
  { label: "Pressure Washing", to: "/pressure-washing" },
  { label: "Demolition", to: "/demolition" },
  { label: "Junk Removal & Hauling", to: "/junk-removal", active: true },
  { label: "Landscaping", to: "/services", hash: "landscaping" },
  { label: "Property Maintenance", to: "/services", hash: "maintenance" },
  { label: "Free Estimate", to: "/free-estimate" },
  { label: "Contact Us", to: "/contact-us" },
];

function JunkRemovalClearwaterFLPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedJunkTypes, setSelectedJunkTypes] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "FL",
    zip: "",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (type: string) => {
    setSelectedJunkTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setUploadedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullAddress = `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`;
    const projectDescription = `Junk Types: ${selectedJunkTypes.join(", ") || "None selected"}\n\nDetails: ${formData.details}`;
    try {
      await addLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: fullAddress,
        projectType: "Junk Removal Clearwater FL & Hauling",
        description: projectDescription,
        contactTime: "Anytime",
      });
      await addWebEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: "Junk Removal Clearwater FL & Hauling",
        message: `${projectDescription}\n\nAddress: ${fullAddress}`,
        source: "junk_removal_clearwater_fl_page",
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting junk removal request:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans">
      <SiteHeader />

      {/* ── HERO ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[460px] md:min-h-[520px] flex items-center justify-center text-center px-6 py-16">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgHauling})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/94 via-[#1c140d]/82 to-[#1c140d]/94 z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              🚛 Heavy Hauling & Cleanouts
            </span>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
              Junk Removal & Hauling
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium uppercase tracking-widest text-copper">
              We Haul What Others Won't – Fast, Reliable, and Professional
            </p>
            <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-3xl">
              Right Lane Handyman Services provides top-rated junk removal in Clearwater, FL. Whether you're clearing out a garage, managing construction debris, or handling an estate cleanout, our experienced team ensures fast, reliable, and eco-friendly hauling.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 items-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img src={bbbBadge} alt="BBB Accredited Business" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={homeadvisorBadge} alt="HomeAdvisor Screened & Approved" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md" />
              <img src={yelpBadge} alt="Find us on Yelp" className="h-9 sm:h-10 w-auto object-contain filter drop-shadow-md" />
            </div>

            <a
              href="#estimate-form"
              className="mt-8 rounded-full bg-copper hover:bg-copper-deep px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]"
            >
              Get Free Estimate
            </a>
          </motion.div>
        </section>
      </div>

      {/* ── WHY CHOOSE RIGHT LANE ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Our Capability
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Why Choose Right Lane for Junk Removal?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="bg-white hover:bg-neutral-50/50 rounded-2xl border border-[#eae8e1] p-6 text-left shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper/5 text-copper mb-4 border border-copper/10 group-hover:bg-copper group-hover:text-white transition-all duration-300 shadow-xs">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 mb-1.5">{b.title}</h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── CORE HAULING SERVICES ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Overview
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Junk Removal Clearwater FL
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {CORE_SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#fcfbf8] border border-neutral-200/50 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper/5 text-copper border border-copper/10 mb-5 shadow-xs">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-neutral-900 mb-3">{s.title}</h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-5">{s.desc}</p>
                </div>
                <div className="border-t border-neutral-100 pt-4">
                  <span className="text-[10px] font-bold text-copper uppercase tracking-wider block mb-2">Services Include:</span>
                  <ul className="space-y-1.5">
                    {s.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-xs text-neutral-700 font-light">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── HEAVY DEBRIS & SITE CLEANOUTS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {HEAVY_DEBRIS_DETAILS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper/5 text-copper border border-copper/10 mb-5 shadow-xs">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-neutral-900 mb-3">{s.title}</h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">{s.desc}</p>
                </div>
                <div className="border-t border-neutral-100 pt-4">
                  <ul className="space-y-1.5 text-xs text-neutral-700 font-light">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-copper shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── WHY WE HAUL WHAT OTHERS WON'T ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Commitment
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Why "We Haul What Others Won't"
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-light max-w-xl mx-auto">
              At Right Lane Handyman Services, LLC, we pride ourselves on taking on jobs that other junk removal companies turn away:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto text-left">
            {WHY_WE_HAUL.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#fcfbf8] rounded-2xl border border-neutral-200/50 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-copper/5 text-copper border border-copper/10 mb-4 text-xs font-bold font-mono">
                    0{i + 1}
                  </div>
                  <h3 className="text-xs font-bold text-neutral-900 mb-2">{w.title}</h3>
                  <p className="text-[11px] text-neutral-600 font-light leading-relaxed">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── OUR PROCESS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Standard Steps
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Our Hauling Process
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto mt-12">
            <div className="hidden lg:block absolute top-[20px] left-[8%] right-[8%] h-[2px] bg-neutral-300/60 z-0" />
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {PROCESS_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-neutral-200/50 p-5 shadow-xs hover:shadow-md transition-shadow relative text-left"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-copper text-white text-xs font-bold mb-4 shadow-sm border border-copper/20">
                    {i + 1}
                  </div>
                  <span className="text-[9px] font-bold text-copper uppercase tracking-wider block mb-1">{s.step}</span>
                  <h3 className="text-xs font-extrabold text-neutral-900 mb-2">{s.title}</h3>
                  <p className="text-[11px] text-neutral-600 font-light leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── WHAT WE HAUL & INDUSTRIES TABLES ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* What We Haul */}
            <div className="space-y-6">
              <div className="border-l-4 border-copper pl-4">
                <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                  What We Haul
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1">Items we transport and clean from properties</p>
              </div>
              <div className="bg-white rounded-2xl border border-neutral-200/60 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#f1e8db] border-b border-neutral-200/60 font-extrabold text-neutral-900">
                      <th className="p-4 w-[40%] font-bold uppercase tracking-wider text-[10px]">Item</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 font-light text-neutral-700">
                    {WHAT_WE_HAUL_TABLE.map((row) => (
                      <tr key={row.item} className="hover:bg-neutral-50/50 transition-colors">
                        <td className="p-4 font-semibold text-neutral-900">{row.item}</td>
                        <td className="p-4 leading-relaxed">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <div className="border-l-4 border-copper pl-4 mb-6">
                  <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                    Industries We Serve
                  </h3>
                  <p className="text-xs text-neutral-500 font-light mt-1">Serving contractors, landlords, and homeowners</p>
                </div>
                <div className="bg-white rounded-2xl border border-neutral-200/60 overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#f1e8db] border-b border-neutral-200/60 font-extrabold text-neutral-900">
                        <th className="p-4 w-[40%] font-bold uppercase tracking-wider text-[10px]">Industry</th>
                        <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Applications</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100 font-light text-neutral-700">
                      {INDUSTRIES.map((row) => (
                        <tr key={row.ind} className="hover:bg-neutral-50/50 transition-colors">
                          <td className="p-4 font-semibold text-neutral-900">{row.ind}</td>
                          <td className="p-4 leading-relaxed">{row.srv}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Environmental Commitment Card */}
              <div className="bg-[#fcfbf8] rounded-2xl p-6 border border-neutral-200/50 shadow-xs mt-6">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-widest flex items-center gap-2 mb-3">
                  <Leaf className="w-4.5 h-4.5 text-emerald-600" /> Environmental Commitment
                </h4>
                <div className="space-y-2 text-xs text-neutral-700 font-light leading-relaxed">
                  <p>
                    <strong>♻️ Recycling & Donations:</strong> We sort metal, electronics, lumber, and concrete for recycling. Good-quality furniture and appliance items are donated to local Pinellas organizations.
                  </p>
                  <p>
                    <strong>🌱 Serving Our Community:</strong> We respect your neighborhood and property, guaranteeing clean sweep-downs after every hauling run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── ESTIMATE FORM ── */}
      <div id="estimate-form" className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-4 py-16 sm:px-8 md:px-12 lg:px-16"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
                Quote Request
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Request Your Free Estimate
              </h2>
              <p className="mt-3 text-sm text-neutral-600 font-light">
                Fill out the form below or call us directly to schedule your free, no-obligation estimate.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-copper/60 to-transparent" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">Thank You, {formData.name}!</h3>
                  <p className="text-sm text-neutral-600 font-light max-w-sm leading-relaxed">
                    Your hauling estimate request has been received. Ronnie or a team member will review details and reach out within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4 justify-center">
                    <a
                      href="tel:7276420201"
                      className="rounded-full bg-copper hover:bg-copper-deep px-6 py-2.5 text-white text-sm font-bold uppercase tracking-wide transition-all shadow-md"
                    >
                      Call Us Now
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setUploadedFile(null);
                        setSelectedJunkTypes([]);
                        setFormData({
                          name: "", phone: "", email: "", address: "",
                          city: "", state: "FL", zip: "", details: "",
                        });
                      }}
                      className="text-xs text-copper font-bold uppercase tracking-wider hover:underline cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7 text-sm">

                  {/* Contact Fields */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { id: "name", label: "Full Name", required: true, type: "text", placeholder: "John Doe", icon: User },
                      { id: "phone", label: "Phone Number", required: true, type: "tel", placeholder: "(727) 642-0201", icon: Smartphone },
                      { id: "email", label: "Email Address", required: false, type: "email", placeholder: "john@example.com", icon: MailIcon },
                    ].map((field) => (
                      <div key={field.id} className="flex flex-col gap-1.5">
                        <label htmlFor={field.id} className="font-semibold text-neutral-800 text-xs">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                            <field.icon className="h-4 w-4" />
                          </div>
                          <input
                            required={field.required}
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={(formData as any)[field.id]}
                            onChange={handleInputChange}
                            placeholder={field.placeholder}
                            className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all bg-[#fbfaf7]/60 text-sm focus:bg-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Address Section */}
                  <div className="space-y-3">
                    <label className="font-semibold text-neutral-800 text-xs block">
                      Property Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <MapIcon className="h-4 w-4" />
                      </div>
                      <input
                        required type="text" name="address" value={formData.address} onChange={handleInputChange}
                        placeholder="Street Address, Apt, Suite, etc."
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all bg-[#fbfaf7]/60 text-sm focus:bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-3">
                      {[
                        { name: "city", placeholder: "City", required: true },
                        { name: "state", placeholder: "State", required: true },
                        { name: "zip", placeholder: "ZIP", required: true },
                      ].map((f) => (
                        <input
                          key={f.name} required={f.required} type="text" name={f.name}
                          value={(formData as any)[f.name]} onChange={handleInputChange}
                          placeholder={f.placeholder}
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all bg-[#fbfaf7]/60 text-sm focus:bg-white"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Junk Type Selection Checklist */}
                  <div className="space-y-2.5">
                    <span className="font-semibold text-neutral-800 text-xs block">
                      Type of Junk Removal <span className="text-neutral-400 font-light">(Select all that apply)</span>
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        "Residential Cleanout",
                        "Commercial Cleanout",
                        "Heavy Debris Removal",
                        "Furniture / Appliance Removal",
                        "Yard Waste Removal",
                        "Full-Site Cleanout",
                        "Emergency Cleanup"
                      ].map((junkType) => {
                        const isChecked = selectedJunkTypes.includes(junkType);
                        return (
                          <button
                            type="button"
                            key={junkType}
                            onClick={() => handleCheckboxToggle(junkType)}
                            className={`px-3 py-2.5 text-xs font-semibold rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                              isChecked
                                ? "bg-copper border-copper text-white shadow-xs"
                                : "bg-[#fbfaf7] border-neutral-200 text-neutral-700 hover:border-copper/45"
                            }`}
                          >
                            {junkType}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="details" className="font-semibold text-neutral-800 text-xs">
                      Items to be Removed
                    </label>
                    <textarea
                      id="details" name="details" rows={5} value={formData.details} onChange={handleInputChange}
                      placeholder="Please describe the items you need removed in as much detail as possible..."
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-colors bg-[#fbfaf7]/60 resize-none text-sm focus:bg-white"
                    />
                  </div>

                  {/* Photo Upload */}
                  <div className="space-y-2">
                    <span className="font-semibold text-neutral-800 text-xs block">Upload Photos (Optional)</span>
                    <label
                      htmlFor="photo-upload"
                      className="flex flex-col items-center justify-center gap-2 w-full h-28 rounded-xl border-2 border-dashed border-neutral-200 bg-[#fbfaf7]/60 cursor-pointer hover:border-copper/50 hover:bg-copper/5 transition-all duration-200"
                    >
                      <Upload className="w-6 h-6 text-neutral-400" />
                      {uploadedFile ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-copper">{uploadedFile.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setUploadedFile(null);
                            }}
                            className="p-1 rounded-full hover:bg-neutral-100 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <span className="text-xs font-semibold text-neutral-700">Click to Upload Photos</span>
                          <span className="text-[10px] text-neutral-400">Accepted: JPG, PNG, PDF · Max 10MB</span>
                        </>
                      )}
                    </label>
                    <input
                      id="photo-upload" type="file" accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange} className="hidden"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-copper hover:bg-copper-deep py-4 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request for Free Estimate
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* ── CALL US DIRECTLY ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-16 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-5">
              <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                Direct Line
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Or Call Us Directly
              </h2>
              <p className="text-sm text-neutral-700 font-light leading-relaxed">
                Prefer to speak with someone right away? Call Ronnie Lane directly at:
              </p>
              <a
                href="tel:7276420201"
                className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-extrabold text-copper hover:text-copper-deep transition-colors bg-white/80 px-6 py-3.5 rounded-2xl border border-neutral-200/40 shadow-xs hover:shadow-sm"
              >
                <Phone className="w-6 h-6 shrink-0 fill-current" />
                (727) 642-0201
              </a>
              <p className="text-xs text-neutral-600 font-light pt-4 border-t border-neutral-300/40 leading-relaxed">
                We offer 24/7 Emergency Service for storm damage, debris removal, and urgent hauling needs. Call anytime – nights, weekends, and holidays included.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/50 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-neutral-900 uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" /> Hours of Operation
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "Emergency Service Only (Call for availability)" },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                    <span className="font-semibold text-neutral-800 text-xs">{row.day}</span>
                    <span className={`text-xs font-light ${row.day.includes("Sunday") ? "text-red-600 font-semibold" : "text-neutral-600"}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── SERVICE AREAS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16 text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Coverage
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Service Areas
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-light">
              We proudly serve residential, commercial, and industrial clients across all of Pinellas County.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {SERVICE_CITIES.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f4f3ef]/80 rounded-full border border-neutral-200/50 text-neutral-800 text-xs font-semibold hover:border-copper/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                {city}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* ── FAQ ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = expandedFAQ === idx;
              return (
                <div key={idx} className="bg-white border border-neutral-200/60 rounded-2xl overflow-hidden shadow-xs hover:border-copper/20 transition-all duration-200">
                  <button
                    onClick={() => setExpandedFAQ(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-neutral-900 text-sm cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180 text-copper" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-neutral-100 bg-white"
                      >
                        <div className="p-5 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── CLIENT REVIEWS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Client Reviews
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto text-left">
            {REVIEWS.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl border border-neutral-200/50 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-0.5 mb-4 text-[#ffa326]">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-xs text-neutral-700 italic leading-relaxed font-light mb-5">"{rev.quote}"</p>
                </div>
                <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-900">{rev.author}</span>
                  <span className="text-[9px] font-bold text-copper bg-copper/5 border border-copper/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {rev.city}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── QUICK LINKS BUTTONS GRID ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-xs px-6 py-12 md:px-12 text-center">
          <h3 className="text-sm font-bold text-neutral-800 mb-6 uppercase tracking-wider">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  link.active
                    ? "bg-copper border-copper text-white shadow-xs"
                    : "bg-[#fbfaf7] border-neutral-200 text-neutral-700 hover:border-copper hover:bg-copper/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#1c140d] text-white px-6 py-20 md:px-12 lg:px-16 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img src={logo} alt="Right Lane Handyman Services" className="h-14 w-auto object-contain mb-8 filter brightness-110" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
              Ready to Clear Your Property?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-10 max-w-3xl">
              Don't let junk, debris, and unwanted items take over your property. Contact Ronnie and the Right Lane team today for a free, no-obligation estimate. We'll haul what others won't and leave your space clean and clutter-free.
            </p>

            <span className="text-xs font-semibold text-copper uppercase tracking-wider mb-2 block">
              Right Lane Handyman Services, LLC
            </span>
            <p className="text-xs text-neutral-400 font-light mb-8">
              Clearwater, FL 33756 · Proudly Serving Clearwater, Largo, St. Petersburg, and All of Pinellas County
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#estimate-form"
                className="rounded-full bg-copper hover:bg-copper-deep px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Request Free Estimate
              </a>
              <a
                href="tel:7276420201"
                className="rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-3.5 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03]"
              >
                Call (727) 642-0201
              </a>
            </div>

            <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-copper select-none italic font-serif">
              "Let us get your property back in the right lane."
            </p>
            <p className="mt-2 text-[10px] text-neutral-500 font-light">
              We look forward to serving you!
            </p>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
