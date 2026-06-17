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
      { title: "JRM Construction Landscape Design — San Antonio, TX" },
      { name: "description", content: "JRM Construction Landscape Design offers premier landscaping and construction services in San Antonio, TX with 24/7 emergency assistance." },
      { property: "og:title", content: "JRM Construction Landscape Design" },
      { property: "og:description", content: "Premier landscaping and construction services in San Antonio, TX." },
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
