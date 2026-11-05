import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { WelcomeSection } from "@/components/welcome-section";
import { ServicesSection } from "@/components/services-section";
import { EmergencyCTA } from "@/components/emergency-cta";
import { Process } from "@/components/process";
import { WhyChooseSection } from "@/components/why-choose";
import { GallerySection } from "@/components/gallery-section";
import { QuoteSection } from "@/components/quote-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FAQSection } from "@/components/faq-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { getFAQSchema } from "@/lib/seo-schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Handyman in Tampa, FL | Right Lane Handyman Services" },
      {
        name: "description",
        content:
          "Trusted handyman, home repair & property maintenance in Tampa, FL & Tampa Bay. 25+ years experience. Licensed, insured & bonded. Call Ronnie: (727) 331-0238.",
      },
      { property: "og:title", content: "Handyman in Tampa, FL | Right Lane Handyman Services" },
      {
        property: "og:description",
        content:
          "Professional handyman services for Tampa, Hillsborough County, and Pinellas County. 25+ years of master trade craftsmanship.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.rightlanehandymanservicellc.com/" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.rightlanehandymanservicellc.com/",
      },
    ],
  }),
  component: Index,
});

const HOMEPAGE_FAQS = [
  {
    question: "What handyman services do you provide in Tampa and Pinellas County?",
    answer:
      "We provide full-service property maintenance, drywall patching, painting, carpentry, door adjustments, pressure washing, light demolition, junk removal, and post-construction cleanup across the Tampa Bay Area.",
  },
  {
    question: "Are you licensed, insured, and bonded in Florida?",
    answer:
      "Yes. Right Lane Handyman Services LLC is fully licensed, insured, and bonded in the state of Florida with 25+ years of verified hands-on trade experience.",
  },
  {
    question: "Do you serve both residential and commercial clients across Tampa Bay?",
    answer:
      "Yes, we serve single-family homeowners, rental properties, condominiums, commercial offices, and retail businesses throughout Hillsborough and Pinellas Counties.",
  },
  {
    question: "How do I get an estimate for my repair or maintenance project?",
    answer:
      "Call Ronnie Lane directly at (727) 331-0238 or fill out our online estimate request form. We provide prompt, upfront, and transparent pricing.",
  },
];

function Index() {
  const faqSchema = getFAQSchema(HOMEPAGE_FAQS);

  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <EmergencyCTA />
      <Process />
      <WhyChooseSection />
      <GallerySection />
      <ReviewsSection />
      <QuoteSection />
      <FAQSection />
      <StatsSection />
      <CTASection />
      <SiteFooter />
      <FloatingChat />
    </div>
  );
}

