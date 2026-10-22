import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * M5 FITNESS ZONE — populated from docs/Gym-research.md (ABOUT.zones,
 * ABOUT.attributes). Everything below is PUBLICLY_REPORTED (public listings /
 * research report); the research supplies no VERIFIED_OFFICIAL facility
 * detail beyond the address. Owner verification of current equipment and
 * amenities is required before final-client production.
 *
 * No equipment counts, station numbers or area figures exist in the research,
 * so none are shown (no `metric` entries).
 *
 * Not rendered (checked, not found): business history / years operating is
 * NOT_FOUND and is kept below with `verified: false`. Showers, steam/sauna,
 * Wi-Fi and BMI checks are marked not verified in the research and are
 * deliberately absent. Spacious-floor wording is INFERRED from review themes
 * and is not asserted as a facility fact here.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/m5-fitness-zone-toli-chowki-about-gym-interior.jpg",
    alt: "M5 Fitness Zone training floor in Al Noor Complex, Toli Chowki, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength-floor",
      label: "Strength floor",
      detail: "Free weights, racks, benches and resistance machines.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio-deck",
      label: "Cardio area",
      detail: "Treadmills, exercise bikes and elliptical machines.",
      icon: "cardio",
      verified: true,
    },
    {
      id: "functional-turf",
      label: "Functional / turf area",
      detail: "Artificial turf area for functional movement and HIIT.",
      icon: "equipment",
      verified: true,
    },
    {
      id: "reception",
      label: "Reception",
      detail: "Front desk for member check-in, fee payments and enquiries.",
      icon: "coaching",
      verified: true,
    },
    {
      id: "changing-lockers",
      label: "Changing & lockers",
      detail: "Changing spaces and locker storage.",
      icon: "floor",
      verified: true,
    },
  ],
  attributes: [
    { id: "ladies-only-hours", label: "Ladies-only hours daily, 11:00 AM – 4:45 PM", verified: true },
    { id: "late-closing", label: "Open until midnight, Monday to Saturday", verified: true },
    { id: "air-conditioning", label: "Air conditioning and wall-mounted fans", verified: true },
    { id: "elevator-access", label: "Elevator access to the 5th floor", verified: true },
    { id: "parking", label: "Parking around Al Noor Complex", verified: true },
    { id: "digital-payments", label: "Google Pay and UPI payments", verified: true },
    // NOT_FOUND in the research (founder, years operating) — kept as the
    // record of what was checked, never rendered.
    { id: "business-history", label: "Years in operation", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
