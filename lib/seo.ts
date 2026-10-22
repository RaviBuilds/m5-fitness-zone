import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * M5 FITNESS ZONE SEO configuration, from docs/Gym-research.md (SEO.*). The
 * title follows the research title candidate; the description restates the
 * reported programs in factual terms without ranking or price claims.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found no standalone website for the business.
 */
export const seo: SEOConfiguration = {
  title: "M5 Fitness Zone | Gym in Toli Chowki, Hyderabad",
  description:
    "M5 Fitness Zone in Toli Chowki, Hyderabad: strength training, cardio, personal training, HIIT, group aerobics, functional training and daily ladies-only hours. Open until midnight Monday to Saturday.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
