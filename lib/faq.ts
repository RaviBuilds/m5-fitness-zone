import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * M5 FITNESS ZONE — from docs/Gym-research.md (FAQ.*). Only entries the
 * research answers are used, worded as "reported" where the source is
 * PUBLICLY_REPORTED. The location answer uses the primary Al Noor Complex
 * address only; the unresolved Salarjung Colony / Miraj Colony listing is
 * deliberately not stated. No cancellation / freeze / trial / joining-fee /
 * guest / refund FAQ is added because the research supports none of them.
 * Owner verification is required before final-client production.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is M5 Fitness Zone located?",
    answer:
      "8-1-399/A/1/B/C/D, 5th Floor, Al Noor Complex, Janaki Nagar Colony, Toli Chowki, Hyderabad, Telangana 500008. Elevator access to the 5th floor is reported.",
  },
  {
    id: "02",
    question: "What are the opening hours?",
    answer:
      "The gym is listed as open 6:00 AM to midnight, Monday to Saturday. Sunday hours are listed as 7:00 AM to 10:00 PM; confirm Sunday timings with the gym before you visit.",
  },
  {
    id: "03",
    question: "Are there ladies-only hours?",
    answer:
      "A ladies-only window is reported daily from 11:00 AM to 4:45 PM. Confirm the current schedule with the gym.",
  },
  {
    id: "04",
    question: "What training programs are available?",
    answer:
      "Reported programs include strength training, cardio, personal training, HIIT, group aerobics, functional training and ladies-only training hours. Confirm current availability and class schedules with the gym.",
  },
  {
    id: "05",
    question: "Which payment methods are accepted?",
    answer: "Google Pay and UPI payments are reported as accepted. Confirm current payment options with the gym.",
  },
  {
    id: "06",
    question: "What are the current membership prices?",
    answer:
      "A complete rate card is not published publicly. Ask reception for current tariffs and GST inclusions.",
  },
  {
    id: "07",
    question: "Is parking available?",
    answer:
      "Parking around Al Noor Complex is reported, but availability, cost and terms are not specified. Confirm with the gym.",
  },
  {
    id: "08",
    question: "Is nutrition guidance available?",
    answer:
      "Diet and nutrition guidance from on-site trainers is reported on enquiry. The scope of this service should be confirmed with the gym.",
  },
];
