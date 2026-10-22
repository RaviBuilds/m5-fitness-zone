import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * M5 FITNESS ZONE — rating/reviewCount are VERIFIED_OFFICIAL (Google Business
 * Profile screenshot baseline described in docs/Gym-research.md REVIEWS:
 * 4.5 / 126 reviews, read October 2026; exact day not supplied).
 *
 * METRIC CONFLICT (preserved, not resolved): other platforms list different
 * figures (Nears.me 4.4 / 118, Justdial 4.0 / 121 and 4.6 / 90). Those are
 * different platforms and are never combined with the Google figures. The
 * live Google count should be re-read immediately before launch.
 *
 * The three reviews below are REVIEWS.selected_reviews, PUBLICLY_REPORTED
 * (public review sources), reproduced exactly as supplied by the research,
 * each with the 5.0 rating the research supplies. Reviewer names are those
 * supplied by the research. Owner approval for reuse, and confirmation of the
 * source-platform attribution, are required before final-client production.
 * Superlatives inside these reviews ("best") are the reviewers' own opinions,
 * not claims made by this site.
 *
 * `tagline` is a plain restatement of the research's sentiment themes (floor
 * space, equipment variety, helpful staff, extended hours) — not a
 * quotation. The research's reported friction points are INFERRED analysis
 * and are intentionally not reproduced on the site.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a directory URL
 * for the Google review CTA. googleBusinessProfileUrl uses a Google Maps
 * search-by-name-and-address query (the same safe fallback pattern as
 * lib/business.ts mapUrl). No Place ID or profile slug is invented.
 * `reviewUrl` / `reviewQrSrc` stay unset until the owner supplies the Google
 * "write a review" link.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.5,
  reviewCount: 126,
  tagline:
    "Members mention the floor space, equipment variety, helpful staff and extended hours.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=M5+Fitness+Zone+Al+Noor+Complex+Janaki+Nagar+Colony+Toli+Chowki+Hyderabad+500008",
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Juwariya Fatima",
      rating: 5,
      text: "Energetic environment for girls to workout with band new machines and equipments provided with a well experienced lady trainer.The gym has been well maintained and its always neat and hygienic. The lady tariner does her job excellently and trains amazingly.A safe and bright environment for girls to workout as this gym maintenance parda system provided with talented lady trainer.",
    },
    {
      name: "Abdiaziz Ak",
      rating: 5,
      text: "More than a gym best in hyderabad well equipped and very large space for everything I recomend every one to visit here am sure you will like!!!😘",
    },
    {
      name: "Hairstylebysameeras",
      rating: 5,
      text: "It is best gym... Afsha is our gym trainer.What I appreciate most is her ability to push you to your limits while still making each class enjoyable. Whether it’s weight training, cardio, or nutrition advice—she’s always on point.",
    },
    {
      name: "Shaheda Begum",
      rating: 5,
      text: "I've had the pleasure of training with Afsha who is our gym trainer..for the past few months, and I can honestly say she's one of the most dedicated and inspiring fitness professionals I've ever met.",
    },
  ],
};
