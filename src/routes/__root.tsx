import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslationProvider } from "@/context/translation-context";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Phone, ArrowRight, Home, Wrench, MapPin } from "lucide-react";

import appCss from "../styles.css?url";
import favIcon from "@/assets/fav.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { getLocalBusinessSchema, getWebSiteSchema } from "../lib/seo-schema";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f3ef] px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-[#e1ded4] p-8 md:p-10 text-center">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 border border-[#ffa326]/20 rounded-full mb-4">
          Error 404
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has moved. Let's get you back in the right lane!
        </p>

        {/* Helpful Navigation Links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            to="/"
            className="flex items-center gap-2.5 p-3 rounded-xl border border-neutral-200 hover:border-[#ffa326] hover:bg-[#ffa326]/5 transition-all text-sm font-medium text-neutral-800"
          >
            <Home className="w-4 h-4 text-[#ffa326] shrink-0" />
            <span>Homepage</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2.5 p-3 rounded-xl border border-neutral-200 hover:border-[#ffa326] hover:bg-[#ffa326]/5 transition-all text-sm font-medium text-neutral-800"
          >
            <Wrench className="w-4 h-4 text-[#ffa326] shrink-0" />
            <span>All Services</span>
          </Link>
          <Link
            to="/service-areas"
            className="flex items-center gap-2.5 p-3 rounded-xl border border-neutral-200 hover:border-[#ffa326] hover:bg-[#ffa326]/5 transition-all text-sm font-medium text-neutral-800"
          >
            <MapPin className="w-4 h-4 text-[#ffa326] shrink-0" />
            <span>Tampa Bay Areas</span>
          </Link>
          <Link
            to="/contact-us"
            className="flex items-center gap-2.5 p-3 rounded-xl border border-neutral-200 hover:border-[#ffa326] hover:bg-[#ffa326]/5 transition-all text-sm font-medium text-neutral-800"
          >
            <ArrowRight className="w-4 h-4 text-[#ffa326] shrink-0" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Direct Call CTA */}
        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-500 font-medium">Need immediate assistance?</span>
          <a
            href="tel:7273310238"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffa326] hover:bg-[#cc7e14] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call (727) 331-0238</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "i8ZhaCS21R9Qi6xirV560hMXtBSHj3nQG7uquvZ8DdA",
      },
      { title: "Handyman in Tampa, FL | Right Lane Handyman Services" },
      {
        name: "description",
        content:
          "Professional handyman, home repair & property maintenance in Tampa, FL & Tampa Bay Area. 25+ years experience. Licensed, insured & bonded. Call (727) 331-0238.",
      },
      { name: "author", content: "Right Lane Handyman Services LLC" },
      { name: "geo.region", content: "US-FL" },
      { name: "geo.placename", content: "Tampa, Clearwater, St. Petersburg" },
      { name: "geo.position", content: "27.9659;-82.8001" },
      { name: "ICBM", content: "27.9659, -82.8001" },
      { property: "og:title", content: "Right Lane Handyman Services LLC | Handyman Services Tampa, FL" },
      {
        property: "og:description",
        content:
          "Clearwater & Tampa's premier licensed, insured & bonded handyman and property maintenance company. 25+ years experience. Call (727) 331-0238.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.rightlanehandymanservicellc.com/" },
      { property: "og:site_name", content: "Right Lane Handyman Services LLC" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Right Lane Handyman Services LLC | Tampa, FL" },
      {
        name: "twitter:description",
        content: "25+ years of trusted handyman services & home repairs in Tampa Bay. Licensed, insured & bonded. Call (727) 331-0238.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: favIcon,
      },
      {
        rel: "canonical",
        href: "https://www.rightlanehandymanservicellc.com/",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const localBusinessSchema = getLocalBusinessSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </TranslationProvider>
    </QueryClientProvider>
  );
}
