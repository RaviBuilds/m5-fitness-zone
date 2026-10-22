/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * M5 FITNESS ZONE Instagram configuration.
 *
 * docs/Gym-research.md INSTAGRAM.profile_url is VERIFIED_OFFICIAL (reported
 * as linked from the Google Business Profile). The handle appears in two
 * forms in the research (@m5_fitness_zone and @m.5_fitness_zone, status
 * CONFLICTING_SOURCES). The handle shown here matches the verified profile
 * URL exactly. OWNER QUESTION: confirm the canonical username.
 *
 * INSTAGRAM.items supplies 3 Reel URLs, each `status: VERIFIED_OFFICIAL`
 * (source "Official Instagram"), wired below exactly as supplied. (The
 * research note that says "no Reel URLs were supplied" is a stale template
 * line that contradicts the items.)
 *   1. Strength training session inside the gym
 *   2. Gym interior and equipment walkthrough
 *   3. Gym interior and equipment walkthrough
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: "https://instagram.com/m.5_fitness_zone",
  handle: "@m.5_fitness_zone",
  items: [
    {
      id: "reel-01",
      type: "reel",
      url: "https://www.instagram.com/reel/DBenRS3su1s/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-02",
      type: "reel",
      url: "https://www.instagram.com/reel/C_lW5jby7-N/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-03",
      type: "reel",
      url: "https://www.instagram.com/reel/Cu6qjJKrSbD/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
  ],
};
