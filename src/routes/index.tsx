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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Right Lane Handyman Services, LLC | Clearwater's Trusted Handyman & Remodeling Experts" },
      { name: "description", content: "Clearwater's premier licensed, insured & bonded handyman and remodeling company. 25+ years of experience in home repairs, fencing, covered patios, hardscapes & artificial turf. Free consultations. Call (727) 642-0201." },
      { property: "og:title", content: "Right Lane Handyman Services, LLC | Clearwater's Trusted Handyman & Remodeling Experts" },
      { property: "og:description", content: "Clearwater's premier licensed, insured & bonded handyman and remodeling company. 25+ years of experience in home repairs, fencing, covered patios, hardscapes & artificial turf. Free consultations. Call (727) 642-0201." },
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
