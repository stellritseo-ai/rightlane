import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { WelcomeSection } from "@/components/welcome-section";
import { ServicesSection } from "@/components/services-section";
import { GetStartedSection } from "@/components/get-started";
import { WhyChooseSection } from "@/components/why-choose";
import { FreeConsultationSection } from "@/components/free-consultation";
import { GallerySection } from "@/components/gallery-section";
import { QuoteSection } from "@/components/quote-section";
import { ReviewsSection } from "@/components/reviews-section";
import { StatsSection } from "@/components/stats-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JRM Construction Landscaping Design | San Antonio's Trusted Remodeling & Outdoor Living Experts Since 1989" },
      { name: "description", content: "San Antonio's premier licensed, insured & bonded construction company. 35+ years of experience in house remodeling, outdoor kitchens, custom fireplaces, hardscapes & artificial turf. Free consultations. Call (210) 429-5526." },
      { property: "og:title", content: "JRM Construction Landscaping Design | San Antonio's Trusted Remodeling & Outdoor Living Experts Since 1989" },
      { property: "og:description", content: "San Antonio's premier licensed, insured & bonded construction company. 35+ years of experience in house remodeling, outdoor kitchens, custom fireplaces, hardscapes & artificial turf. Free consultations. Call (210) 429-5526." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <SiteHeader />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <GetStartedSection />
      <WhyChooseSection />
      <FreeConsultationSection />
      <GallerySection />
      <QuoteSection />
      <ReviewsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
