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
  Droplets,
  Lightbulb,
  TreePine,
  Timer,
  HeartPulse
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import imgCleaning from "@/assets/svc-cleaning.png";
import imgCommercial from "@/assets/stats-cleanup.png";
import imgLandscaping from "@/assets/why-choose-1.png";
import yelpBadge from "@/assets/yelp-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import homeadvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/landscaping")({
  head: () => ({
    meta: [
      { title: "Landscaping Services - Right Lane Handyman Services, LLC | Clearwater, FL" },
      {
        name: "description",
        content:
          "Professional lawn care, mulching, tree trimming, landscape lighting, and hardscaping in Clearwater, Largo, St. Petersburg & all Pinellas County. Call (727) 642-0201.",
      },
      { property: "og:title", content: "Landscaping Services - Right Lane Handyman" },
      { property: "og:description", content: "Transform your outdoor space. Sod installation, lawn care, tree pruning, pavers, Lutron lighting, and storm cleanups." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandscapingPage,
});

const BENEFITS = [
  { icon: Award, title: "25+ Years of Experience", text: "Decades of expertise in landscaping and grounds care." },
  { icon: ShieldCheck, title: "Licensed, Insured & Bonded", text: "Complete peace of mind for your property." },
  { icon: Building2, title: "Residential, Commercial & Industrial", text: "We handle projects of any size and scope." },
  { icon: Clock, title: "24/7 Emergency Service", text: "Available for urgent landscaping needs." },
  { icon: CircleDollarSign, title: "Upfront Pricing", text: "No surprises, no hidden fees." },
  { icon: ThumbsUp, title: "Guaranteed Work", text: "100% satisfaction, guaranteed." },
  { icon: Wrench, title: "Comprehensive Services", text: "From design to installation to maintenance – we do it all." },
  { icon: MapPin, title: "Locally Owned", text: "Clearwater, FL – We know these communities." },
];

const CORE_SERVICES = [
  {
    icon: Leaf,
    title: "🌿 Lawn Care and Maintenance",
    desc: "Keep your lawn healthy, green, and well-groomed with our professional lawn care services.",
    bullets: [
      "Lawn mowing and edging",
      "Weed control and prevention",
      "Fertilization and soil treatment",
      "Aeration and overseeding",
      "Pest and disease management",
      "Seasonal lawn preparation",
      "Sod installation and repair",
    ],
  },
  {
    icon: Sparkles,
    title: "🌸 Mulching and Garden Beds",
    desc: "Refresh your garden beds with professional mulching that enhances beauty, retains moisture, and suppresses weeds.",
    bullets: [
      "Mulch installation and replenishment",
      "Garden bed design and installation",
      "Flower and shrub planting",
      "Weed removal and prevention",
      "Soil preparation and amendment",
      "Edging and border installation",
      "Seasonal color rotation",
    ],
  },
  {
    icon: TreePine,
    title: "🌳 Tree and Shrub Care",
    desc: "Maintain the health and appearance of your trees and shrubs with our professional care services.",
    bullets: [
      "Tree and shrub trimming",
      "Pruning and shaping",
      "Tree removal and stump grinding",
      "Shrub and hedge maintenance",
      "Disease and pest treatment",
      "Storm damage cleanup",
    ],
  },
  {
    icon: Lightbulb,
    title: "💡 Outdoor Lighting",
    desc: "Enhance your property's beauty, safety, and security with professional outdoor lighting.",
    bullets: [
      "Landscape lighting design and installation",
      "Pathway and walkway lighting",
      "Accent and feature lighting",
      "Security lighting",
      "Deck and patio lighting",
      "Lighting maintenance and repair",
      "Lutron and smart lighting systems",
    ],
  },
  {
    icon: Layers,
    title: "🏡 Hardscaping",
    desc: "Add structure and functionality to your outdoor space with professional hardscaping services.",
    bullets: [
      "Paver walkway and patio installation",
      "Retaining wall construction",
      "Garden border and edging",
      "Artificial turf installation",
      "Paved driveways and pathways",
      "Stone and gravel installation",
      "Fire pit and outdoor living features",
    ],
  },
  {
    icon: Wrench,
    title: "🌴 Landscape Design & Install",
    desc: "Transform your entire outdoor space with our comprehensive landscape design and installation services.",
    bullets: [
      "Custom landscape design",
      "Plant selection and installation",
      "Garden bed creation",
      "Hardscape integration",
      "Outdoor living space design",
      "Irrigation system installation",
      "Complete property transformation",
    ],
  },
  {
    icon: Droplets,
    title: "🌊 Irrigation & Water Management",
    desc: "Keep your landscape healthy and hydrated with professional irrigation solutions.",
    bullets: [
      "Irrigation system design and installation",
      "Sprinkler system repair and maintenance",
      "Drip irrigation installation",
      "Water conservation solutions",
      "Rain sensor installation",
      "Seasonal system adjustment",
    ],
  },
  {
    icon: Truck,
    title: "🌪&zwj; Emergency Landscaping",
    desc: "Fast response for storm damage and urgent landscaping needs.",
    bullets: [
      "Storm debris removal",
      "Fallen tree and branch removal",
      "Emergency property cleanup",
      "Landscape restoration",
      "24/7 response for urgent needs",
    ],
  },
];

const SEASONAL_TASKS = [
  {
    season: "🌸 Spring Landscaping",
    tasks: [
      "Spring cleanup and debris removal",
      "Mulching and garden bed preparation",
      "Planting and seasonal color installation",
      "Lawn aeration and fertilization",
      "Irrigation system startup",
    ],
  },
  {
    season: "☀️ Summer Landscaping",
    tasks: [
      "Regular lawn mowing and care",
      "Weed control and prevention",
      "Irrigation system maintenance",
      "Heat stress management",
      "Pest and disease control",
    ],
  },
  {
    season: "🍂 Fall Landscaping",
    tasks: [
      "Leaf removal and debris cleanup",
      "Garden bed winterization",
      "Tree and shrub pruning",
      "Fall fertilization and aeration",
      "Landscape lighting installation",
    ],
  },
  {
    season: "❄️ Winter Landscaping",
    tasks: [
      "Winter property maintenance",
      "Storm preparation and response",
      "Tree trimming and hazard removal",
      "Landscape lighting maintenance",
      "Snowbird property management",
    ],
  },
];

const VALUE_PROPS = [
  {
    icon: Sparkles,
    title: "Enhance Curb Appeal",
    text: "A beautifully landscaped property makes a great first impression on visitors, customers, and neighbors. It also helps maintain property values in your community.",
  },
  {
    icon: CircleDollarSign,
    title: "Increase Property Value",
    text: "Professional landscaping can increase your property's value by 10-15%. It's one of the best investments you can make in your property.",
  },
  {
    icon: HeartPulse,
    title: "Improve Quality of Life",
    text: "Beautiful outdoor spaces provide a place to relax, entertain, and enjoy nature. They improve your mental and physical well-being.",
  },
  {
    icon: Leaf,
    title: "Environmental Benefits",
    text: "Proper landscaping improves air quality, reduces soil erosion, provides habitat for wildlife, and helps manage stormwater runoff.",
  },
  {
    icon: ShieldCheck,
    title: "Health and Safety",
    text: "Regular landscaping maintenance identifies and addresses safety hazards like overgrown branches and uneven walkways. It also keeps your property clean.",
  },
  {
    icon: Timer,
    title: "Cost-Effective",
    text: "Regular landscaping maintenance prevents small issues from becoming major problems. It's much less expensive than restoring a neglected landscape.",
  },
];

const PROPERTY_TYPES_TABLE = [
  { type: "Residential", srv: "Lawn care, mulching, garden beds, outdoor lighting, hardscaping, complete landscape design" },
  { type: "Commercial", srv: "Grounds maintenance, landscape design, hardscaping, seasonal preparation, property management" },
  { type: "Industrial", srv: "Grounds maintenance, site cleanup, landscape restoration, property management" },
  { type: "HOA Communities", srv: "Common area maintenance, landscape design, seasonal color, property-wide services" },
  { type: "Rental Properties", srv: "Property maintenance, landscape design, seasonal preparation, tenant-ready grounds" },
];

const PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "Consultation",
    desc: "We meet with you to discuss your vision, assess your property, and understand your goals. We listen to your ideas.",
  },
  {
    step: "Step 2",
    title: "Design and Planning",
    desc: "We develop a customized landscape plan tailored to your preferences, providing a detailed estimate and timeline.",
  },
  {
    step: "Step 3",
    title: "Site Preparation",
    desc: "We prepare your property for installation, including clearing old vegetation, grading, and preparing the soil.",
  },
  {
    step: "Step 4",
    title: "Professional Installation",
    desc: "Our skilled team installs your landscaping with precision, using high-quality materials and proven techniques.",
  },
  {
    step: "Step 5",
    title: "Final Walkthrough",
    desc: "We walk through the completed project with you to ensure satisfaction. We make sure every detail meets expectations.",
  },
  {
    step: "Step 6",
    title: "Ongoing Maintenance",
    desc: "We offer ongoing maintenance plans to keep your landscape looking its best year-round, built around your schedule.",
  },
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
    question: "What landscaping services do you offer?",
    answer:
      "We offer comprehensive landscaping services including lawn care, mulching, tree and shrub care, outdoor lighting, hardscaping, landscape design and installation, irrigation, and emergency services.",
  },
  {
    question: "Do you handle both residential and commercial landscaping?",
    answer:
      "Yes! We serve residential homeowners, commercial businesses, and industrial facilities across all of Pinellas County.",
  },
  {
    question: "Do you offer ongoing maintenance plans?",
    answer:
      "Yes! We offer flexible maintenance plans ranging from weekly to seasonal service. We'll work with you to create a plan that fits your property's needs and your budget.",
  },
  {
    question: "What is mulching and why is it important?",
    answer:
      "Mulching involves applying organic material to garden beds to retain moisture, suppress weeds, regulate soil temperature, and improve soil health. It also enhances the beauty of your landscape.",
  },
  {
    question: "Do you install outdoor lighting?",
    answer:
      "Yes! We design and install professional outdoor lighting systems, including landscape lighting, pathway lighting, accent lighting, and smart lighting systems like Lutron.",
  },
  {
    question: "Do you handle hardscaping?",
    answer:
      "Yes! We install paver walkways, patios, retaining walls, garden borders, artificial turf, and other hardscape features.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes! Right Lane Handyman Services, LLC is fully licensed, insured, and bonded for your protection and peace of mind.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we provide free, no-obligation estimates for all landscaping services. Contact us today to schedule yours.",
  },
];

const REVIEWS = [
  { quote: "Had our front yard mulched and garden beds bordered. Right Lane did a beautiful job. Our curb appeal has never looked better!", author: "Thomas H.", city: "Safety Harbor" },
  { quote: "Mulching, landscaping, and property maintenance was seamless. They set up Lutron outdoor lighting and fixed all our deck issues.", author: "Kenji M.", city: "Clearwater Beach" },
  { quote: "They installed a gorgeous artificial turf and paved walkway in our courtyard. Flawless execution. I'll never use another handyman company again.", author: "Jared W.", city: "St. Petersburg" },
  { quote: "The backyard fencing and covered patio upgrade they did for our home was outstanding. Professional, clean, and finished ahead of schedule.", author: "Marcus T.", city: "Clearwater" },
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
  { label: "Junk Removal & Hauling", to: "/junk-removal" },
  { label: "Landscaping", to: "/landscaping", active: true },
  { label: "Property Maintenance", to: "/property-maintenance" },
  { label: "Waste & Debris Removal", to: "/waste-debris-removal" },
  { label: "Free Estimate", to: "/free-estimate" },
  { label: "Contact Us", to: "/contact-us" },
];

function LandscapingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedServicesNeeded, setSelectedServicesNeeded] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "FL",
    zip: "",
    schedule: "One-Time Service",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (srv: string) => {
    setSelectedServicesNeeded((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setUploadedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullAddress = `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`;
    const projectDescription = `Schedule Preference: ${formData.schedule}\nServices Needed: ${selectedServicesNeeded.join(", ") || "None selected"}\n\nDetails: ${formData.details}`;
    try {
      await addLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: fullAddress,
        projectType: "Landscaping Services",
        description: projectDescription,
        contactTime: "Anytime",
      });
      await addWebEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: "Landscaping Services",
        message: `${projectDescription}\n\nAddress: ${fullAddress}`,
        source: "landscaping_page",
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting landscaping request:", err);
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
            style={{ backgroundImage: `url(${imgLandscaping})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c140d]/94 via-[#1c140d]/82 to-[#1c140d]/94 z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-20 max-w-4xl mx-auto flex flex-col items-center bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              🌿 Beautiful & Well-Maintained Grounds
            </span>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
              Landscaping Services
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium uppercase tracking-widest text-copper">
              Transform Your Outdoor Space – Beautiful, Functional, and Well-Maintained
            </p>
            <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-3xl">
              Your outdoor space is an extension of your home or business – a place to relax, entertain, and make a lasting impression. At Right Lane Handyman Services, LLC, we provide professional landscaping services that enhance your property's beauty, functionality, and value. From mulching and garden bed installation to outdoor lighting and complete landscape transformations, Ronnie and his team bring over 25 years of expertise to every project across Pinellas County.
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
              Curb Appeal
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Why Choose Right Lane for Landscaping?
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

      {/* ── CORE LANDSCAPING SERVICES ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Our Landscaping Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {CORE_SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[#fcfbf8] border border-neutral-200/50 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-copper/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-copper/5 text-copper border border-copper/10 mb-4 shadow-xs">
                    <s.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-xs font-extrabold text-neutral-900 mb-2.5">{s.title}</h3>
                  <p className="text-[11px] text-neutral-600 font-light leading-relaxed mb-4">{s.desc}</p>
                </div>
                <div className="border-t border-neutral-100 pt-3">
                  <ul className="space-y-1 text-[11px] text-neutral-700 font-light">
                    {s.bullets.slice(0, 5).map((bullet) => (
                      <li key={bullet} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-copper shrink-0" />
                        {bullet}
                      </li>
                    ))}
                    {s.bullets.length > 5 && (
                      <li className="text-[9px] font-bold text-copper/70 uppercase tracking-wide pt-1">
                        + {s.bullets.length - 5} More Sub-services
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── LANDSCAPING BY SEASON ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center bg-white/60 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              Year-Round Care
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Landscaping Services by Season
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-700 font-light max-w-xl mx-auto">
              Our recurring checkups keep lawns, beds, and smart accent lights functioning through Florida's seasons:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {SEASONAL_TASKS.map((item, i) => (
              <motion.div
                key={item.season}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-neutral-200/50 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <h3 className="text-xs font-extrabold text-neutral-900 border-b border-neutral-100 pb-3 mb-4">{item.season}</h3>
                  <ul className="space-y-2 text-xs text-neutral-700 font-light">
                    {item.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── OUR PROCESS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-sm px-6 py-20 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              Execution
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              Our Landscaping Process
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto mt-12">
            <div className="hidden lg:block absolute top-[20px] left-[8%] right-[8%] h-[2px] bg-neutral-200/70 z-0" />
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {PROCESS_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="bg-[#fcfbf8] rounded-2xl border border-neutral-200/50 p-5 shadow-xs hover:shadow-md transition-shadow relative text-left"
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

      {/* ── BENEFITS & PROPERTY TYPES TABLES ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] border border-[#eae8e1] shadow-sm px-6 py-16 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits of Landscaping */}
            <div className="space-y-6">
              <div className="border-l-4 border-copper pl-4">
                <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                  Benefits of Professional Landscaping
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1">Investing in premium curb appeal and environmental design</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {VALUE_PROPS.map((prop) => (
                  <div key={prop.title} className="bg-white rounded-2xl border border-neutral-200/60 p-5 shadow-xs hover:shadow-sm transition-shadow">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-copper/5 text-copper border border-copper/10 mb-3 shadow-xs">
                      <prop.icon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-xs font-bold text-neutral-900 mb-1">{prop.title}</h4>
                    <p className="text-[11px] text-neutral-500 font-light leading-relaxed">{prop.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Landscaping Services by Property Type */}
            <div className="space-y-6">
              <div className="border-l-4 border-copper pl-4">
                <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                  Landscaping by Property Type
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1">Tailored services for commercial properties and residential estates</p>
              </div>
              <div className="bg-white rounded-2xl border border-neutral-200/60 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#f1e8db] border-b border-neutral-200/60 font-extrabold text-neutral-900">
                      <th className="p-4 w-[35%] font-bold uppercase tracking-wider text-[10px]">Property Type</th>
                      <th className="p-4 font-bold uppercase tracking-wider text-[10px]">Recommended Services</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 font-light text-neutral-700">
                    {PROPERTY_TYPES_TABLE.map((row) => (
                      <tr key={row.type} className="hover:bg-neutral-50/50 transition-colors">
                        <td className="p-4 font-semibold text-neutral-900">{row.type}</td>
                        <td className="p-4 leading-relaxed">{row.srv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                    Your landscaping estimate request has been received. Ronnie or a team member will review details and reach out within 24 hours.
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
                        setSelectedServicesNeeded([]);
                        setFormData({
                          name: "", phone: "", email: "", address: "",
                          city: "", state: "FL", zip: "",
                          schedule: "One-Time Service",
                          details: "",
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

                  {/* Services Selection Checklist */}
                  <div className="space-y-2.5">
                    <span className="font-semibold text-neutral-800 text-xs block">
                      Services Needed <span className="text-neutral-400 font-light">(Select all that apply)</span>
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      {[
                        "Lawn Care / Mowing",
                        "Mulching / Garden Beds",
                        "Tree / Shrub Care",
                        "Outdoor Lighting",
                        "Hardscaping (Pavers, Walkways, etc.)",
                        "Full Landscape Design / Installation",
                        "Irrigation",
                        "Commercial Landscaping",
                        "Emergency Landscaping",
                        "Ongoing Maintenance Plan"
                      ].map((srv) => {
                        const isChecked = selectedServicesNeeded.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleCheckboxToggle(srv)}
                            className={`px-3 py-2.5 text-[11px] font-semibold rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                              isChecked
                                ? "bg-copper border-copper text-white shadow-xs"
                                : "bg-[#fbfaf7] border-neutral-200 text-neutral-700 hover:border-copper/45"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Preferred Maintenance Schedule Dropdown */}
                  <div className="flex flex-col gap-1.5 max-w-md">
                    <label htmlFor="schedule" className="font-semibold text-neutral-800 text-xs">
                      Preferred Maintenance Schedule
                    </label>
                    <select
                      id="schedule" name="schedule" value={formData.schedule} onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:border-copper focus:ring-1 focus:ring-copper outline-none bg-[#fbfaf7]/60 text-sm focus:bg-white"
                    >
                      {["One-Time Service", "Weekly", "Bi-Weekly", "Monthly", "Seasonal", "Custom Schedule"].map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="details" className="font-semibold text-neutral-800 text-xs">
                      Project Details
                    </label>
                    <textarea
                      id="details" name="details" rows={5} value={formData.details} onChange={handleInputChange}
                      placeholder="Please describe your lawn, garden layouts, or desired landscape installation details..."
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
                We offer 24/7 Emergency Service for storm damage, debris removal, and urgent landscaping needs. Call anytime – nights, weekends, and holidays included.
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
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-10 max-w-3xl">
              Don't let your landscape go unnoticed. Contact Ronnie and the Right Lane team today for a free, no-obligation estimate. We'll create an outdoor space you'll love – beautiful, functional, and professionally maintained.
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
