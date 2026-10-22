import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * M5 FITNESS ZONE (Toli Chowki, Hyderabad) — populated from
 * docs/Gym-research.md. VERIFIED_OFFICIAL: name, address line, locality,
 * city, state, postal code, Monday–Saturday hours. PUBLICLY_REPORTED (owner
 * verification required before final-client production): description,
 * landmark.
 *
 * PHONE / WHATSAPP: both NOT_FOUND in the research ("contact on-site"). They
 * are intentionally left empty rather than invented. Header, final CTA and
 * contact directory omit the call action when `phone` is empty. WhatsApp
 * links resolve to a plain wa.me link carrying the prefilled message until
 * the owner supplies the business number. OWNER QUESTION: front-desk phone
 * and WhatsApp Business number.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted.
 *
 * TAGLINE: no official tagline exists (NOT_FOUND). The slot carries a plain
 * factual descriptor of what the business is and where, not a slogan.
 *
 * HOURS: Monday–Saturday 06:00 AM – 12:00 AM (midnight) is VERIFIED_OFFICIAL.
 * SUNDAY IS A DOCUMENTED SOURCE CONFLICT (not silently resolved): the
 * detailed timetable reports 07:00 AM – 10:00 PM, while a generic aggregator
 * reports 06:00 AM – 12:00 AM. The research's own recommended value
 * (07:00 AM – 10:00 PM) is applied PROVISIONALLY; management must confirm.
 * Reported ladies-only window (daily 11:00 AM – 4:45 PM) is described in
 * lib/services.ts and lib/faq.ts, not encoded as an opening-hours row.
 *
 * BRANCHES: a second Justdial listing (Alkareem Mansion, Miraj Colony) has
 * unresolved status; only the Al Noor Complex address is used.
 *
 * mapUrl: no verified Google Maps / Place URL was supplied. This is a
 * standard Google Maps search-by-name-and-address URL built from the
 * VERIFIED_OFFICIAL address text. No latitude, longitude or Place ID has been
 * invented.
 */
export const business: Business = {
  name: "M5 Fitness Zone",
  tagline: "Gym in Toli Chowki, Hyderabad",
  description:
    "M5 Fitness Zone is a gym on the 5th floor of Al Noor Complex in Toli Chowki, Hyderabad, with strength and cardio equipment, personal training, HIIT, group aerobics, functional training and daily ladies-only hours.",
  phone: "",
  whatsapp: {
    number: "",
    message: "Hi, I'd like to know more about membership and training at M5 Fitness Zone, Toli Chowki.",
  },
  email: undefined,
  address: {
    addressLine: "8-1-399/A/1/B/C/D, 5th Floor, Al Noor Complex, Janaki Nagar Colony",
    locality: "Toli Chowki",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500008",
    landmark: "Al Noor Complex",
  },
  hours: [
    { day: "Monday", open: "06:00 AM", close: "12:00 AM" },
    { day: "Tuesday", open: "06:00 AM", close: "12:00 AM" },
    { day: "Wednesday", open: "06:00 AM", close: "12:00 AM" },
    { day: "Thursday", open: "06:00 AM", close: "12:00 AM" },
    { day: "Friday", open: "06:00 AM", close: "12:00 AM" },
    { day: "Saturday", open: "06:00 AM", close: "12:00 AM" },
    { day: "Sunday", open: "07:00 AM", close: "10:00 PM" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=M5+Fitness+Zone+Al+Noor+Complex+Janaki+Nagar+Colony+Toli+Chowki+Hyderabad+500008",
  // Prompt A — PRIMARY brand colour "Athletic Red" #F21D24 (action / energy /
  // major brand signal). The authentic hex is entered here exactly once;
  // app/globals.css derives a slightly deeper UI fill (--brand-primary-ui)
  // for filled buttons.
  accentColor: "#F21D24",
  // Prompt A — SECONDARY brand colour "Electric Blue" #2457D6 (structure /
  // support / depth: eyebrows, metadata, technical marks, focus). Entered
  // exactly as approved; all derived secondary variants are computed in
  // app/globals.css.
  secondaryColor: "#2457D6",
};
