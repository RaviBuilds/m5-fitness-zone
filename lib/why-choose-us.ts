import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS. It never repeats facility metrics,
 * amenities, opening hours or program names that have an owner elsewhere:
 *   - Section 01 (lib/about.ts) owns zones, amenities and hours;
 *   - Section 02 (lib/services.ts) owns individual programs.
 *
 * M5 FITNESS ZONE — from docs/Gym-research.md (WHY_CHOOSE_US.*). All items
 * are PUBLICLY_REPORTED except the spacious-floor reason, which the research
 * marks INFERRED from review themes; it is therefore worded as a reported
 * review theme rather than a measured fact. Owner approval of all reasons is
 * required before final-client production.
 *
 * Used: ladies-only window, late closing Monday–Saturday, reported range of
 * strength and cardio equipment. Not used: UPI payments (owned by
 * lib/about.ts attributes); the spacious-floor reason (INFERRED, review
 * theme only) is left out of the poster to avoid asserting it as fact.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Ladies-only hours",
    description: "A daily ladies-only window is reported from 11:00 AM to 4:45 PM.",
  },
  {
    title: "Open late",
    description: "Opening hours run from 6:00 AM until midnight, Monday to Saturday.",
  },
  {
    title: "Strength and cardio equipment",
    description:
      "Free weights, resistance machines, treadmills, bikes and ellipticals are reported on the floor.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the verified
 * reasons; it is never a superlative. A clone edits this object and the
 * array, never the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Open late. Ladies-only hours. Strength and cardio equipment.",
};
