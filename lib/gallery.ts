import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * M5 FITNESS ZONE — operator-supplied photographs in
 * public/assets/gallery/m5-fitness-zone-toli-chowki-gallery-<subject>.jpg.
 * Alt text describes only what is visible in each frame. Owner approval of
 * these photographs for website use should be confirmed before final-client
 * production (the research notes image rights are not established).
 *
 * ORDER is editorial: wide training-floor views first, then equipment areas,
 * then reception, entrance and building.
 *
 * No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery/m5-fitness-zone-toli-chowki-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-free-weights-plate-loaded.jpg`,
    alt: "Plate-loaded racks, benches and weight plates on the M5 Fitness Zone training floor",
  },
  {
    src: `${GALLERY}-turf-walkway-machines.jpg`,
    alt: "Turf walkway beside strength machines on the M5 Fitness Zone training floor",
  },
  {
    src: `${GALLERY}-training-floor-led-lighting.jpg`,
    alt: "M5 Fitness Zone training floor with blue LED ceiling lighting and members training",
  },
  {
    src: `${GALLERY}-cardio-area.jpg`,
    alt: "Row of cardio machines on a red floor at M5 Fitness Zone",
  },
  {
    src: `${GALLERY}-turf-strength-machines.jpg`,
    alt: "Strength machines next to an artificial turf strip at M5 Fitness Zone",
  },
  {
    src: `${GALLERY}-machine-floor.jpg`,
    alt: "Strength machines and a barbell on the M5 Fitness Zone training floor",
  },
  {
    src: `${GALLERY}-bench-area.jpg`,
    alt: "Weight bench on rubber tile flooring with members training behind it at M5 Fitness Zone",
  },
  {
    src: `${GALLERY}-dumbbell-area.jpg`,
    alt: "Dumbbell racks and adjustable benches in front of a mirrored wall at M5 Fitness Zone",
  },
  {
    src: `${GALLERY}-training-floor.jpg`,
    alt: "M5 Fitness Zone training floor with benches, racks and a wall banner",
  },
  {
    src: `${GALLERY}-reception-desk.jpg`,
    alt: "Curved reception desk with M5 GYM lettering on the wall behind it",
  },
  {
    src: `${GALLERY}-reception-decor.jpg`,
    alt: "M5 Fitness Zone reception desk decorated with balloons",
  },
  {
    src: `${GALLERY}-entrance-signage.jpg`,
    alt: "Illuminated M5 GYM sign above the entrance",
  },
  {
    src: `${GALLERY}-entrance-sign-closeup.jpg`,
    alt: "Close view of the illuminated M5 GYM entrance sign",
  },
  {
    src: `${GALLERY}-building-exterior.jpg`,
    alt: "Illuminated multi-storey commercial building with shopfronts at night",
  },
];
