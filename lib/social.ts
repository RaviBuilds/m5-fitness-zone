import type { SocialConfiguration } from "./types";

/**
 * Master social/Instagram data. Curated content only — no live authenticated
 * Instagram API dependency in Factory v1. An empty posts array is valid and
 * renders a "Follow us on Instagram" fallback CTA, never a broken widget.
 *
 * NOTE: `social` below is not currently imported by any component — the live
 * Instagram section (components/sections/Instagram.tsx) reads from
 * lib/instagram.ts. See docs/gym-customization-manifest.md §9.1
 * ("lib/social.ts is orphaned"). Left in sync with lib/instagram.ts for data
 * consistency in case a future section consumes this module; not a live
 * rendering path. `socialLinks` further down IS live (footer icons).
 *
 * M5 FITNESS ZONE — values mirror lib/instagram.ts (INSTAGRAM.profile_url,
 * VERIFIED_OFFICIAL; handle spelling follows the profile URL).
 */
export const social: SocialConfiguration = {
  instagramHandle: "@m.5_fitness_zone",
  instagramUrl: "https://instagram.com/m.5_fitness_zone",
  posts: [],
};

/**
 * Footer social icons (Facebook, Justdial, X) shown next to Instagram.
 *
 * SOURCE-FIRST: no handle or username is invented.
 *  - Justdial: docs/Gym-research.md SOURCE_LOG (S3) documents this gym's
 *    Toli Chowki Justdial listing, so that exact URL is used. The separate
 *    Salarjung Colony listing (S4) has unresolved status and is not used.
 *  - Facebook: CONTACT.facebook_url is NOT_FOUND. The icon keeps the network
 *    homepage until the owner supplies an official page.
 *  - X: no profile supplied; network homepage.
 *
 * Instagram is configured separately in lib/instagram.ts (it also drives the
 * Reel embeds) and is not repeated here.
 */
export interface SocialLink {
  id: "facebook" | "justdial" | "x";
  /** Accessible name for the icon, e.g. "Facebook". */
  label: string;
  /** Profile URL. Defaults to the network homepage until the gym's own is set. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  {
    id: "justdial",
    label: "Justdial",
    href: "https://www.justdial.com/Hyderabad/M5-Fitness-Zone-Toli-Chowki/040PXX40-XX40-220622190502-J1C2_BZDET",
  },
  { id: "x", label: "X", href: "https://x.com" },
];
