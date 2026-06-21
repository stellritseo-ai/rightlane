import { createFileRoute } from "@tanstack/react-router";
import { LetUsTalkPage } from "./lets-talk";

export const Route = createFileRoute("/get-free-consultation")({
  head: () => ({
    meta: [
      { title: "Free Consultation San Antonio | Remodeling & Landscaping Experts" },
      { name: "description", content: "Schedule your free, no-obligation consultation with San Antonio's trusted construction experts. 35 years of experience. Licensed & insured. Call (210) 429-5526." },
      { property: "og:title", content: "Free Consultation San Antonio | Remodeling & Landscaping Experts" },
      { property: "og:description", content: "Schedule your free, no-obligation consultation with San Antonio's trusted construction experts. 35 years of experience. Licensed & insured. Call (210) 429-5526." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: LetUsTalkPage,
});
