import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * M5 FITNESS ZONE — all 8 programs from docs/Gym-research.md (PROGRAMS.*).
 * Every entry is PUBLICLY_REPORTED; owner verification of current
 * availability is required before final-client production. Descriptions
 * follow the research descriptions, shortened; no schedule, trainer, outcome
 * or health claim is added. The research notes that class schedules, package
 * details and trainer assignments are not supplied, so none are stated.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed. Here `conditioning` is carried by "Functional Training" (the
 * research's conditioning-category bodyweight / agility / mobility program).
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files
 * in place with real M5 Fitness Zone photography — no code change.
 */
const ASSET = "/assets/programs/m5-fitness-zone-toli-chowki-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description: "Free-weight and plate-loaded resistance workouts.",
    icon: "strength",
    image: `${ASSET}-strength-training.jpg`,
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-to-one trainer guidance and customized workout instruction.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "cardio",
    name: "Cardiovascular Conditioning",
    description: "Cardio routines on treadmills, exercise bikes and elliptical machines.",
    icon: "cardio",
    image: `${ASSET}-cardio.jpg`,
    verified: true,
    ctaLabel: "Ask about cardio training",
    ctaHref: undefined,
  },
  {
    id: "hiit",
    name: "HIIT",
    description: "High-intensity interval workouts using the functional turf area.",
    icon: "equipment",
    image: `${ASSET}-hiit.jpg`,
    verified: true,
    ctaLabel: "Ask about HIIT",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "Functional Training",
    description: "Bodyweight, agility and mobility movements.",
    icon: "equipment",
    image: `${ASSET}-functional-training.jpg`,
    verified: true,
    ctaLabel: "Ask about functional training",
    ctaHref: undefined,
  },
  {
    id: "group-aerobics",
    name: "Group Aerobics",
    description: "Structured group cardio and endurance sessions.",
    icon: "cardio",
    image: `${ASSET}-group-aerobics.jpg`,
    verified: true,
    ctaLabel: "Ask about group aerobics",
    ctaHref: undefined,
  },
  {
    id: "ladies-only-hours",
    name: "Ladies-only training hours",
    description: "A daily ladies-only window, reported as 11:00 AM to 4:45 PM.",
    icon: "floor",
    image: `${ASSET}-ladies-only-hours.jpg`,
    verified: true,
    ctaLabel: "Ask about ladies-only hours",
    ctaHref: undefined,
  },
  {
    id: "diet-nutrition-guidance",
    name: "Diet and Nutrition Guidance",
    description: "Guidance from on-site trainers, available on enquiry.",
    icon: "coaching",
    image: `${ASSET}-diet-nutrition-guidance.jpg`,
    verified: true,
    ctaLabel: "Ask about nutrition guidance",
    ctaHref: undefined,
  },
];
