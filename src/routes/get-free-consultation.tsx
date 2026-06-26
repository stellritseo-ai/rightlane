import { createFileRoute } from "@tanstack/react-router";
import { LetUsTalkPage } from "./lets-talk";

export const Route = createFileRoute("/get-free-consultation")({
  head: () => ({
    meta: [
      { title: "Free Consultation Clearwater | Remodeling & Landscaping Experts" },
      { name: "description", content: "Schedule your free, no-obligation consultation with Clearwater's trusted construction experts. 25+ Years of experience. Licensed & insured. Call (727) 642-0201." },
      { property: "og:title", content: "Free Consultation Clearwater | Remodeling & Landscaping Experts" },
      { property: "og:description", content: "Schedule your free, no-obligation consultation with Clearwater's trusted construction experts. 25+ Years of experience. Licensed & insured. Call (727) 642-0201." },
      { property: "og:type", content: "website" }
    ],
  }),
  component: LetUsTalkPage,
});
