# GYM RESEARCH PACKAGE — M5 Fitness Zone

Researched: October 2026
Researcher: Gemini Deep Research
Phase: PROSPECT_DEMO
Source report: `M5 Fitness Zone Research Dossier.pdf`

> This file is the schema-normalized research package for the BLOGSPAGE AI gym website factory.
> It preserves the source report's findings while separating verified/publicly reported/inferred information. Non-`VERIFIED_OFFICIAL` fields require owner verification before final-client production.

> Factory-level content excluded from this research package: Hero content/artwork, transformation data, Training Intelligence, Between Sessions education, section headings/labels, and discount percentages are intentionally excluded. Generic educational topics mentioned in the source report are not treated as confirmed gym services.

## Status vocabulary

- `VERIFIED_OFFICIAL`: the report identifies the information as supported by an official/owner-provided source or Google Business Profile evidence. This is based on the report's characterization; the underlying profile screenshots are not separately attached here.
- `PUBLICLY_REPORTED`: reported by third-party directories, public reviews, or social-profile information without direct owner confirmation.
- `INFERRED`: normalized interpretation or synthesis, not a direct business fact.
- `NOT_FOUND`: not available in the report or not verified.
- `CONFLICTING_SOURCES`: sources in the report materially disagree.
- For fields requiring a value but not found, `value: null` is used.

## 1. BUSINESS

```yaml
BUSINESS:
  name:
    value: "M5 Fitness Zone"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, pp. 1-2"
    status: VERIFIED_OFFICIAL
  tagline:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 13-14; no confirmed official tagline supplied"
    status: NOT_FOUND
  description:
    value: "A gym / fitness centre in Toli Chowki, Hyderabad. The report describes strength training, cardio, personal training, HIIT, group aerobics, functional training, and daily ladies-only hours."
    source: "Google Business Profile anchor and public listings summarized in M5 Fitness Zone Research Dossier.pdf, pp. 1-2, 5, 7-9"
    status: PUBLICLY_REPORTED
  category:
    value: "Gym / Fitness Centre"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, pp. 1-2"
    status: VERIFIED_OFFICIAL
  primary_locality:
    value: "Toli Chowki; primary address is described as Janaki Nagar Colony, Toli Chowki"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, pp. 1-2"
    status: VERIFIED_OFFICIAL
  branch_count:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 2-4, 16-17; a second Salarjung Colony / Miraj Colony directory listing exists but its status is unresolved"
    status: CONFLICTING_SOURCES
  year_established:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, p. 5; founding year marked NOT VERIFIED"
    status: NOT_FOUND
```

## 2. CONTACT

```yaml
CONTACT:
  phone:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, p. 6; report says phone field is unlisted and contact should be made on-site"
    status: NOT_FOUND
  whatsapp:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, p. 6; not publicly disclosed"
    status: NOT_FOUND
  email:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 6, 16-18; not publicly disclosed / not found"
    status: NOT_FOUND
  website:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 6; no custom standalone domain discovered"
    status: NOT_FOUND
  instagram_url:
    value: "https://instagram.com/m.5_fitness_zone"
    source: "Instagram social web anchor reported as linked from Google Business Profile in M5 Fitness Zone Research Dossier.pdf, pp. 3, 6"
    status: VERIFIED_OFFICIAL
  instagram_handle:
    value: "@m5_fitness_zone; alternate URL spelling shown as @m.5_fitness_zone"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 6, 11-12"
    status: PUBLICLY_REPORTED
  facebook_url:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, p. 6; Facebook page not verified"
    status: NOT_FOUND
  youtube_url:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, p. 6; YouTube channel not found"
    status: NOT_FOUND
  booking_url:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 6; no registration or booking workflow identified"
    status: NOT_FOUND
```

## 3. LOCATION

```yaml
LOCATION:
  address_line:
    value: "8-1-399/A/1/B/C/D, 5th Floor, Al Noor Complex, Janaki Nagar Colony"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, pp. 1, 4"
    status: VERIFIED_OFFICIAL
  locality:
    value: "Janaki Nagar Colony / Toli Chowki"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, pp. 1, 4"
    status: VERIFIED_OFFICIAL
  city:
    value: "Hyderabad"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, pp. 1-2"
    status: VERIFIED_OFFICIAL
  state:
    value: "Telangana"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, pp. 1-2"
    status: VERIFIED_OFFICIAL
  postal_code:
    value: "500008"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, p. 1"
    status: VERIFIED_OFFICIAL
  landmark:
    value: "Al Noor Shopping Mall / Complex"
    source: "M5 Fitness Zone Research Dossier.pdf, p. 4"
    status: PUBLICLY_REPORTED
  map_url:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, source index and location sections; no direct map URL supplied"
    status: NOT_FOUND
  latitude:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf; coordinates not supplied"
    status: NOT_FOUND
  longitude:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf; coordinates not supplied"
    status: NOT_FOUND
  secondary_listing:
    value: "9461/A/37/1, Alkareem Mansion, Miraj Colony, Toli Chowki, opposite Marwadi Building, Hyderabad, Telangana 500008"
    source: "Justdial Salarjung Colony listing as summarized in M5 Fitness Zone Research Dossier.pdf, pp. 4, 17-18"
    status: CONFLICTING_SOURCES
```

## 4. HOURS

```yaml
HOURS:
  monday:
    open:
      value: "06:00"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    close:
      value: "24:00 (midnight; end of day)"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
    status: VERIFIED_OFFICIAL
  tuesday:
    open:
      value: "06:00"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    close:
      value: "24:00 (midnight; end of day)"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
    status: VERIFIED_OFFICIAL
  wednesday:
    open:
      value: "06:00"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    close:
      value: "24:00 (midnight; end of day)"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
    status: VERIFIED_OFFICIAL
  thursday:
    open:
      value: "06:00"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    close:
      value: "24:00 (midnight; end of day)"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
    status: VERIFIED_OFFICIAL
  friday:
    open:
      value: "06:00"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    close:
      value: "24:00 (midnight; end of day)"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
    status: VERIFIED_OFFICIAL
  saturday:
    open:
      value: "06:00"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    close:
      value: "24:00 (midnight; end of day)"
      source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
      status: VERIFIED_OFFICIAL
    source: "Google Business Profile anchor timetable summarized in M5 Fitness Zone Research Dossier.pdf, pp. 6-7"
    status: VERIFIED_OFFICIAL
  sunday:
    open:
      value: "07:00"
      source: "Detailed timetable / Google Business Profile schedule as summarized in M5 Fitness Zone Research Dossier.pdf, pp. 7, 17"
      status: CONFLICTING_SOURCES
    close:
      value: "22:00"
      source: "Detailed timetable / Google Business Profile schedule as summarized in M5 Fitness Zone Research Dossier.pdf, pp. 7, 17"
      status: CONFLICTING_SOURCES
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 4, 7, 17; some generic aggregator data says 06:00–24:00"
    status: CONFLICTING_SOURCES
  split_shifts_reported:
    value:
      ladies_only: "Daily 11:00–16:45"
      general_unisex_monday_to_saturday: "06:00–11:00 and 16:45–24:00"
      sunday_general_ladies_schedule: null
    source: "M5 Fitness Zone Research Dossier.pdf, p. 7"
    status: PUBLICLY_REPORTED
```

## 5. ABOUT

```yaml
ABOUT:
  short_description:
    value: "M5 Fitness Zone is a gym / fitness centre in Toli Chowki, Hyderabad. The research dossier reports strength and cardio equipment, personal training, HIIT, group aerobics, functional training, and a daily ladies-only operating window."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 5, 7-9"
    status: PUBLICLY_REPORTED
  positioning:
    value: "Neighborhood fitness facility with reported spacious workout floor, late operating hours Monday–Saturday, and dedicated ladies-only hours."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 5, 12"
    status: INFERRED
  story:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 5, 14; founder story and year established are not verified"
    status: NOT_FOUND
  zones:
    - id: "strength-floor"
      label: "Strength floor"
      value: "Free weights, racks, benches, and resistance machines are reported."
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 8-9"
      status: PUBLICLY_REPORTED
    - id: "cardio-deck"
      label: "Cardio area"
      value: "Treadmills, exercise bikes, and elliptical machines are reported."
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 8-9"
      status: PUBLICLY_REPORTED
    - id: "functional-turf"
      label: "Functional / turf area"
      value: "Artificial turf area used for functional movement and HIIT is reported."
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 5, 8"
      status: PUBLICLY_REPORTED
    - id: "reception"
      label: "Reception"
      value: "Front desk for member check-in, fee payments, and inquiries is reported."
      source: "M5 Fitness Zone Research Dossier.pdf, p. 8"
      status: PUBLICLY_REPORTED
    - id: "changing-lockers"
      label: "Changing / locker spaces"
      value: "Changing spaces and locker storage are reported."
      source: "M5 Fitness Zone Research Dossier.pdf, p. 8"
      status: PUBLICLY_REPORTED
  attributes:
    - id: "ladies-only-hours"
      label: "Ladies-only hours"
      value: "Daily 11:00–16:45, as reported in the dossier."
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 7"
      status: PUBLICLY_REPORTED
    - id: "late-closing"
      label: "Late closing"
      value: "Reported open until midnight Monday–Saturday."
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 4, 6-7"
      status: PUBLICLY_REPORTED
    - id: "air-conditioning"
      label: "Air conditioning and fans"
      value: "Air conditioning units and wall-mounted cooling fans are reported."
      source: "M5 Fitness Zone Research Dossier.pdf, p. 8"
      status: PUBLICLY_REPORTED
    - id: "parking"
      label: "Nearby parking"
      value: "Vehicle parking around Al Noor Complex is reported; exact availability, cost, and terms are not specified."
      source: "M5 Fitness Zone Research Dossier.pdf, p. 8"
      status: PUBLICLY_REPORTED
    - id: "digital-payments"
      label: "Digital payments"
      value: "Google Pay and UPI payments are reported as accepted."
      source: "M5 Fitness Zone Research Dossier.pdf, p. 9"
      status: PUBLICLY_REPORTED
    - id: "elevator-access"
      label: "Elevator access"
      value: "Elevator access to the 5th floor is reported."
      source: "M5 Fitness Zone Research Dossier.pdf, p. 5"
      status: PUBLICLY_REPORTED
    - id: "business-history"
      label: "Business history"
      value: null
      source: "M5 Fitness Zone Research Dossier.pdf, p. 5; founder and years operating not verified"
      status: NOT_FOUND
```

## 6. PROGRAMS

```yaml
PROGRAMS:
  - id: "strength-training"
    name: "Strength Training"
    description: "Free-weight and plate-loaded resistance workouts are reported."
    category: "strength"
    image_opportunity: "Training-floor or free-weight image from the operator-approved photo set."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 7-9"
    status: PUBLICLY_REPORTED
  - id: "cardiovascular-conditioning"
    name: "Cardiovascular Conditioning"
    description: "Cardio routines using treadmills, exercise bikes, and elliptical machines are reported."
    category: "conditioning"
    image_opportunity: "Cardio-equipment image from the operator-approved photo set."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 7-9"
    status: PUBLICLY_REPORTED
  - id: "personal-training"
    name: "Personal Training"
    description: "One-to-one trainer guidance and customized workout instruction are reported; current package details and trainer assignments are not supplied."
    category: "personal"
    image_opportunity: "Coach assisting a member on the training floor, photographed with appropriate consent."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 7-8"
    status: PUBLICLY_REPORTED
  - id: "hiit"
    name: "High-Intensity Interval Training (HIIT)"
    description: "HIIT workouts using functional turf areas are reported."
    category: "conditioning"
    image_opportunity: "Functional turf or HIIT action image from the operator-approved photo set."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 7-8"
    status: PUBLICLY_REPORTED
  - id: "group-aerobics"
    name: "Group Aerobics"
    description: "Structured group cardio and endurance sessions are reported; class schedule is not provided."
    category: "group"
    image_opportunity: "Group aerobics session image from the operator-approved photo set, with participant consent."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 8"
    status: PUBLICLY_REPORTED
  - id: "functional-training"
    name: "Functional Training"
    description: "Bodyweight, agility, and mobility movements are reported."
    category: "conditioning"
    image_opportunity: "Functional-training or turf-area image from the operator-approved photo set."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 8"
    status: PUBLICLY_REPORTED
  - id: "womens-fitness"
    name: "Ladies-only training hours"
    description: "A daily ladies-only operating window of 11:00–16:45 is reported. Confirm current schedule and whether the period includes classes or general gym access."
    category: "group"
    image_opportunity: "Operator-approved image of the training floor during ladies-only hours, with member consent."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 7-8"
    status: PUBLICLY_REPORTED
  - id: "diet-nutrition-guidance"
    name: "Diet and Nutrition Guidance"
    description: "Guidance through on-site trainers is reported as available upon inquiry. Scope, qualifications, and whether this is a formal service require confirmation."
    category: "other"
    image_opportunity: "Operator-approved consultation image only if the gym confirms this is an active service."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 9"
    status: PUBLICLY_REPORTED
```

## 7. WHY_CHOOSE_US

```yaml
WHY_CHOOSE_US:
  - title: "Dedicated ladies-only hours"
    description: "The dossier reports a daily ladies-only operating window from 11:00 to 16:45."
    basis: "Specific operating window reported in the research; confirm current schedule before publication."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 7, 12"
    status: PUBLICLY_REPORTED
  - title: "Late closing Monday–Saturday"
    description: "The primary listing reports opening hours from 06:00 until midnight Monday–Saturday."
    basis: "Published timetable; Sunday hours have a separate conflict recorded below."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 4, 6-7"
    status: PUBLICLY_REPORTED
  - title: "Reported spacious workout floor"
    description: "Multiple public review themes mention a spacious floor and room for cardio and HIIT."
    basis: "Synthesis of review themes, not a measured floor-area comparison."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 11-12"
    status: INFERRED
  - title: "Reported range of strength and cardio equipment"
    description: "The report lists free weights, resistance machines, racks, benches, treadmills, bikes, and ellipticals."
    basis: "Equipment list summarized from public visual records and review text; current inventory should be confirmed."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 8-9"
    status: PUBLICLY_REPORTED
  - title: "Digital UPI payments reported"
    description: "Google Pay and digital UPI payments are reported as accepted."
    basis: "Payment methods listed in the dossier; confirm current acceptance."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 9"
    status: PUBLICLY_REPORTED
```

## 8. REVIEWS

```yaml
REVIEWS:
  google_rating:
    value: 4.5
    source: "Google Business Profile anchor as summarized in M5 Fitness Zone Research Dossier.pdf, pp. 4, 11"
    status: VERIFIED_OFFICIAL
  google_review_count:
    value: 126
    source: "Google Business Profile screenshot baseline as summarized in M5 Fitness Zone Research Dossier.pdf, p. 11"
    status: VERIFIED_OFFICIAL
  google_profile_url:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf; a direct Google Business Profile URL is not supplied"
    status: NOT_FOUND
  rating_read_on:
    value: "October 2026 (month-level date stated by report; exact day not provided)"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 18"
    status: PUBLICLY_REPORTED
  selected_reviews:
    - reviewer: "Abdiaziz Issa"
      rating: 5.0
      text: "More than a gym best in hyderabad well equipped and very large space for everything. I recommend everyone to visit here am sure you will like!"
      source: "M5 Fitness Zone Research Dossier.pdf, p. 11; attributed public review summarized from source [2]"
      status: PUBLICLY_REPORTED
    - reviewer: "Mohammed Anwar"
      rating: 5.0
      text: "One of the best gym in this area. Very spacious for HIIT and cardio workout. Latest equipments for weight lifting exercises. Good ventilation and flexible timings."
      source: "M5 Fitness Zone Research Dossier.pdf, p. 11; attributed public review summarized from source [2]"
      status: PUBLICLY_REPORTED
    - reviewer: "Sarfaraz Basha"
      rating: 5.0
      text: "I was a gents trainer and best gym I've ever. Compare to other gym its very spacious and with advanced equipments and humble surroundings."
      source: "M5 Fitness Zone Research Dossier.pdf, p. 11; attributed public review summarized from source [2]"
      status: PUBLICLY_REPORTED
  sentiment_summary:
    value: "The dossier summarizes positive comments about floor space, equipment variety, helpful staff, and extended hours. It also records occasional concerns about air-conditioning performance during peak summer afternoons and delays for popular machines during evening peak hours."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 11-12"
    status: INFERRED
```

## 9. PRICING

```yaml
PRICING:
  currency:
    value: "INR"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18"
    status: VERIFIED_OFFICIAL
  publishes_pricing_publicly:
    value: false
    source: "M5 Fitness Zone Research Dossier.pdf, p. 10; official full rate card is described as not publicly disclosed"
    status: PUBLICLY_REPORTED
  plans:
    daily:
      value: null
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; no gym-specific daily rate supplied"
      status: NOT_FOUND
    weekly:
      value: null
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; no gym-specific weekly rate supplied"
      status: NOT_FOUND
    monthly:
      value: null
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; official rate not disclosed"
      status: NOT_FOUND
    quarterly:
      value: null
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; official rate not disclosed"
      status: NOT_FOUND
    half_year:
      value: null
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; official rate not disclosed"
      status: NOT_FOUND
    annual:
      value: null
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; official rate not disclosed"
      status: NOT_FOUND
    special_training:
      value: null
      source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; personal training fee schedule not supplied"
      status: NOT_FOUND
  other_listed_prices:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; local-market directory benchmark prices are not M5 Fitness Zone prices and must not be used as its prices"
    status: NOT_FOUND
  admission_or_joining_fee:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18; registration fee not disclosed"
    status: NOT_FOUND
  pricing_note:
    value: "Prospective members are reported to be directed to reception for current tariffs and GST inclusions. The dossier includes third-party market benchmarks (monthly ₹1,000–₹1,800; three months about ₹2,500; annual ₹8,000–₹12,000), but these are locality benchmarks, not M5 Fitness Zone pricing. Do not publish them as gym prices."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 10"
    status: PUBLICLY_REPORTED
```

## 10. INSTAGRAM

```yaml
INSTAGRAM:
  profile_url:
    value: "https://instagram.com/m.5_fitness_zone"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 6"
    status: VERIFIED_OFFICIAL
  handle:
    value: "@m5_fitness_zone; URL spelling also appears as @m.5_fitness_zone"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 6, 11-12"
    status: PUBLICLY_REPORTED
  follower_count:
    value: 110
    qualifier: "Report says 110+ followers; exact count and capture date are not supplied."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 12"
    status: PUBLICLY_REPORTED
  items:
      - url:
        value: "https://www.instagram.com/reel/DBenRS3su1s/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Strength training session inside the gym"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL

    - url:
        value: "https://www.instagram.com/reel/C_lW5jby7-N/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Gym interior and equipment walkthrough"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL

 - url:
        value: "https://www.instagram.com/reel/Cu6qjJKrSbD/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Gym interior and equipment walkthrough"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL

  profile_notes:
    value: "The report describes content themes including ladies' batch hours, membership affordability messaging, member workout videos, and gym-floor displays. No individual Reel URLs are provided in the report."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 12"
    status: PUBLICLY_REPORTED
```

## 11. FAQ

```yaml
FAQ:
  - question: "Where is M5 Fitness Zone located?"
    answer: "The primary reported location is 8-1-399/A/1/B/C/D, 5th Floor, Al Noor Complex, Janaki Nagar Colony, Toli Chowki, Hyderabad, Telangana 500008. The dossier also identifies a second directory listing in Salarjung Colony / Miraj Colony whose status is unresolved."
    topic: "location"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 1, 4, 17"
    status: CONFLICTING_SOURCES
  - question: "What are the reported opening hours?"
    answer: "The primary timetable reports 06:00–24:00 Monday–Saturday and 07:00–22:00 Sunday. Sunday hours conflict with generic aggregator hours, so confirm before publication."
    topic: "hours"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 4, 6-7, 17"
    status: CONFLICTING_SOURCES
  - question: "Are there ladies-only hours?"
    answer: "The dossier reports a ladies-only window daily from 11:00 to 16:45. Confirm the current schedule with management."
    topic: "hours"
    source: "M5 Fitness Zone Research Dossier.pdf, p. 7"
    status: PUBLICLY_REPORTED
  - question: "What training programs are reported?"
    answer: "The dossier lists strength training, cardio, personal training, HIIT, group aerobics, functional training, and ladies-only training hours. Current availability and class schedules require confirmation."
    topic: "programs"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 7-8"
    status: PUBLICLY_REPORTED
  - question: "What payment methods are reported?"
    answer: "Google Pay and digital UPI payments are reported as accepted. Confirm current payment options with the gym."
    topic: "payments"
    source: "M5 Fitness Zone Research Dossier.pdf, p. 9"
    status: PUBLICLY_REPORTED
  - question: "Does the gym publish membership prices online?"
    answer: "The dossier says a complete official rate card is not publicly disclosed and directs prospective members to ask reception for current tariffs and GST inclusions."
    topic: "pricing"
    source: "M5 Fitness Zone Research Dossier.pdf, p. 10"
    status: PUBLICLY_REPORTED
  - question: "Is parking available?"
    answer: "Parking around Al Noor Complex is reported, but exact availability, cost, and terms are not specified. Confirm with management."
    topic: "parking"
    source: "M5 Fitness Zone Research Dossier.pdf, p. 8"
    status: PUBLICLY_REPORTED
  - question: "Are nutrition consultations, showers, or BMI checks available?"
    answer: "The dossier reports diet and nutrition guidance upon inquiry, but body-composition/BMI checks and steam, sauna, or shower facilities are marked not verified. Confirm service scope and staff qualifications before publishing."
    topic: "amenities"
    source: "M5 Fitness Zone Research Dossier.pdf, p. 9"
    status: PUBLICLY_REPORTED
```

## 12. SEO

```yaml
SEO:
  gym_name:
    value: "M5 Fitness Zone"
    source: "Google Business Profile anchor as described in M5 Fitness Zone Research Dossier.pdf, pp. 1-2"
    status: VERIFIED_OFFICIAL
  locality:
    value: "Toli Chowki, Hyderabad"
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 1-2, 13"
    status: VERIFIED_OFFICIAL
  natural_location_wording:
    value:
      - "M5 Fitness Zone in Toli Chowki, Hyderabad"
      - "Gym near Janaki Nagar Colony"
      - "Unisex gym with ladies' timing in Toli Chowki"
      - "Gym open until midnight in Toli Chowki"
    source: "Natural search phrases listed in M5 Fitness Zone Research Dossier.pdf, p. 13"
    status: INFERRED
  title_candidate:
    value: "M5 Fitness Zone | Gym in Toli Chowki, Hyderabad"
    source: "Derived from business name, category, and locality in M5 Fitness Zone Research Dossier.pdf, pp. 1-2, 13"
    status: INFERRED
  description_candidate:
    value: "Explore M5 Fitness Zone in Toli Chowki, Hyderabad, with reported strength training, cardio, personal training, HIIT, group aerobics, and dedicated ladies-only hours. Confirm current timings and membership prices with the gym."
    source: "Derived from M5 Fitness Zone Research Dossier.pdf, pp. 7-10"
    status: INFERRED
  alt_text_context:
    value:
      - "M5 Fitness Zone training floor in Al Noor Complex, Toli Chowki, Hyderabad, if shown in an operator-approved image"
      - "Strength and free-weight equipment at M5 Fitness Zone, if confirmed by current photo"
      - "Cardio equipment at M5 Fitness Zone, if confirmed by current photo"
      - "Functional turf area at M5 Fitness Zone, if confirmed by current photo"
    source: "Facility and equipment descriptions in M5 Fitness Zone Research Dossier.pdf, pp. 8-9; alt text is conditional on matching approved imagery"
    status: INFERRED
```

## 13. ASSET_MANIFEST

```yaml
ASSET_MANIFEST:
  logo:
    value: null
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 17-18; official vector logo files listed as a collection request, no direct logo asset URL supplied"
    status: NOT_FOUND
  candidates:
    - role: "about_interior"
      url: null
      subject: "High-resolution current gym-floor / interior photo to be collected manually by operator"
      source: "Operator to collect manually; report notes high-resolution original photography is needed (p. 18)"
      usable: "unknown"
      status: NOT_FOUND
    - role: "why_choose_anchor"
      url: null
      subject: "Operator-approved image showing the actual strength floor, cardio area, or functional turf"
      source: "Operator to collect manually; equipment and facility details in M5 Fitness Zone Research Dossier.pdf, pp. 8-9"
      usable: "unknown"
      status: NOT_FOUND
    - role: "gallery"
      url: null
      subject: "Current high-resolution photos of training floor, cardio deck, reception, and approved facilities"
      source: "Operator to collect manually; M5 Fitness Zone Research Dossier.pdf, p. 18"
      usable: "unknown"
      status: NOT_FOUND
    - role: "pricing_background"
      url: null
      subject: "Neutral operator-approved gym interior image; do not imply prices or offers"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "faq_background"
      url: null
      subject: "Operator-approved gym interior image, if required by the chosen factory template"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "og_image"
      url: null
      subject: "Approved brand image or gym-floor photo with confirmed logo assets"
      source: "Operator to collect manually; official vector logo not supplied in the report"
      usable: "unknown"
      status: NOT_FOUND
```

## 14. SOURCE_LOG

```yaml
SOURCE_LOG:
  - id: "S1"
    priority: 1
    type: "Google Business Profile anchor / Nears.me listing summarized by report"
    url: "https://gym-india.nears.me/listings/india/telangana/hyderabad/trusted-m5-fitness-zone-hyderabad-ts/"
    accessed: "October 2026"
    fields_supplied: "Business name, primary address, locality, category, reported operating hours, Instagram URL, services, Google rating and review-count baseline."
    status: "Report characterizes the business identity anchor as verified; underlying direct GBP URL is not supplied."
  - id: "S2"
    priority: 5
    type: "Yappe local directory / review database"
    url: "https://yappe.in/telangana/hyderabad/m5-fitness-zone/338032"
    accessed: "October 2026"
    fields_supplied: "Detailed user review text, timetable/context, trainer references and facility descriptions as summarized in the report."
    status: "PUBLICLY_REPORTED"
  - id: "S3"
    priority: 5
    type: "Justdial directory listing, Toli Chowki"
    url: "https://www.justdial.com/Hyderabad/M5-Fitness-Zone-Toli-Chowki/040PXX40-XX40-220622190502-J1C2_BZDET"
    accessed: "October 2026"
    fields_supplied: "Services, location/listing information, directory rating and review context."
    status: "PUBLICLY_REPORTED"
  - id: "S4"
    priority: 5
    type: "Justdial directory listing, Salarjung Colony"
    url: "https://www.justdial.com/Hyderabad/M5-Fitness-Zone-Gym-Salarjung-Colony/040PXX40-XX40-220327175347-S6F3_BZDET"
    accessed: "October 2026"
    fields_supplied: "Secondary address at Alkareem Mansion / Miraj Colony, rating and review-count context."
    status: "PUBLICLY_REPORTED; secondary branch status unresolved"
  - id: "S5"
    priority: 6
    type: "Justdial local market benchmark directory"
    url: "https://www.justdial.com/Hyderabad/Unisex-Gyms-in-Miraj-Colony-Toli-Chowki/nct-11576125"
    accessed: "October 2026"
    fields_supplied: "Local market membership fee benchmarks only; not M5 Fitness Zone prices."
    status: "PUBLICLY_REPORTED; DO NOT use as gym pricing"
  - id: "S6"
    priority: 6
    type: "Justdial gym listings / local benchmark page"
    url: "https://www.justdial.com/Hyderabad/Gyms-in-Podium-Mall-Toli-Chowki/nct-11575244"
    accessed: "October 2026"
    fields_supplied: "Local market benchmark context."
    status: "PUBLICLY_REPORTED"
  - id: "S7"
    priority: 6
    type: "IDBF Hyderabad business directory"
    url: "https://hyderabad.idbf.in/gym"
    accessed: "October 2026"
    fields_supplied: "Address and listing cross-check as summarized in report."
    status: "PUBLICLY_REPORTED"
  - id: "S8"
    priority: 6
    type: "IDBF contact portal"
    url: "https://hyderabad.idbf.in/4206295/m5-fitness-zone"
    accessed: "October 2026"
    fields_supplied: "Contact, landmark, and neighboring facility context as summarized in report."
    status: "PUBLICLY_REPORTED"
  - id: "S9"
    priority: 7
    type: "Magicpin listing"
    url: "https://magicpin.in/Hyderabad/Podium-Mall/Fitness/M5-Fitness-Zone/store/1b27bcb"
    accessed: "October 2026"
    fields_supplied: "Location profile / Podium Mall vicinity context."
    status: "PUBLICLY_REPORTED; report assigns LOW confidence"
  - id: "S10"
    priority: 6
    type: "Justdial photos listing"
    url: "https://www.justdial.com/Hyderabad/M5-Fitness-Zone-Toli-Chowki/040PXX40-XX40-220622190502-J1C2_BZDET/photos"
    accessed: "October 2026"
    fields_supplied: "Photo listing referenced by report; individual asset URLs are not reproduced in the dossier."
    status: "PUBLICLY_REPORTED"
  - id: "S11"
    priority: 7
    type: "Justdial local benchmark page"
    url: "https://www.justdial.com/Hyderabad/Gyms-in-Nanal-Nagar-Toli-Chowki/nct-11575244/page-3"
    accessed: "October 2026"
    fields_supplied: "Local market pricing benchmark context only."
    status: "PUBLICLY_REPORTED; not gym-specific pricing"
```

## 15. VERIFICATION_NOTES

### conflicts

```yaml
conflicts:
  - field: "LOCATION.address_line / BUSINESS.branch_count"
    values:
      - value: "8-1-399/A/1/B/C/D, 5th Floor, Al Noor Complex, Janaki Nagar Colony, Toli Chowki, Hyderabad, Telangana 500008"
        source: "Google Business Profile anchor / Nears.me summary; M5 Fitness Zone Research Dossier.pdf, pp. 1, 4"
      - value: "9461/A/37/1, Alkareem Mansion, Miraj Colony, Toli Chowki, opposite Marwadi Building, Hyderabad, Telangana 500008"
        source: "Justdial Salarjung Colony listing; M5 Fitness Zone Research Dossier.pdf, pp. 4, 17-18"
    note: "Treat Al Noor Complex as the primary identity anchor as described in the report, but do not claim a single-branch or two-branch structure without owner confirmation. Ask whether the Salarjung Colony listing is an active second branch, auxiliary location, or outdated listing."
    status: CONFLICTING_SOURCES
  - field: "REVIEWS.google_rating / REVIEWS.google_review_count"
    values:
      - value: "4.5 / 5 stars; 126 reviews"
        source: "Google Business Profile screenshot baseline summarized in M5 Fitness Zone Research Dossier.pdf, pp. 4, 11"
      - value: "4.4 stars; 118 reviews on Nears.me"
        source: "M5 Fitness Zone Research Dossier.pdf, pp. 11, 17"
      - value: "4.0 stars; 121 reviews on Justdial"
        source: "M5 Fitness Zone Research Dossier.pdf, p. 17"
      - value: "4.6 stars; 90 reviews on Justdial secondary listing"
        source: "M5 Fitness Zone Research Dossier.pdf, p. 4"
    note: "Metrics differ by platform and listing. If displaying Google metrics, verify the live Google Business Profile immediately before launch; do not combine counts from different platforms."
    status: CONFLICTING_SOURCES
  - field: "HOURS.sunday"
    values:
      - value: "07:00–22:00"
        source: "Detailed timetable / primary listing as summarized in M5 Fitness Zone Research Dossier.pdf, pp. 4, 7, 17"
      - value: "06:00–24:00"
        source: "Generic aggregator listing as summarized in M5 Fitness Zone Research Dossier.pdf, pp. 4, 17"
    note: "The report recommends 07:00–22:00 based on detailed timetable records, but Sunday hours should be confirmed with management before publication."
    status: CONFLICTING_SOURCES
  - field: "CONTACT.instagram_url / CONTACT.instagram_handle"
    values:
      - value: "https://instagram.com/m.5_fitness_zone and @m.5_fitness_zone"
        source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 6"
      - value: "@m5_fitness_zone"
        source: "M5 Fitness Zone Research Dossier.pdf, pp. 6, 11-12"
    note: "The report uses both punctuated and unpunctuated handle forms. Confirm the exact canonical Instagram username and profile URL with the operator before encoding links."
    status: CONFLICTING_SOURCES
```

### not_found

```yaml
not_found:
  - field: "BUSINESS.tagline"
    note: "No confirmed official tagline supplied; source report's suggested hero headline is factory content and is not treated as an official tagline."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 13-14"
    status: NOT_FOUND
  - field: "BUSINESS.year_established"
    note: "Report explicitly marks founding year and years operating as not verified."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, p. 5"
    status: NOT_FOUND
  - field: "CONTACT.phone"
    note: "No direct phone number supplied; report says contact directly on-site."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 6, 16"
    status: NOT_FOUND
  - field: "CONTACT.whatsapp"
    note: "WhatsApp number not publicly disclosed."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, p. 6"
    status: NOT_FOUND
  - field: "CONTACT.email"
    note: "Official email not publicly disclosed / not found."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 6, 16-18"
    status: NOT_FOUND
  - field: "CONTACT.website"
    note: "No custom standalone domain found; Instagram is the reported social web anchor."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 6"
    status: NOT_FOUND
  - field: "CONTACT.facebook_url"
    note: "Facebook page not verified."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, p. 6"
    status: NOT_FOUND
  - field: "CONTACT.youtube_url"
    note: "YouTube channel not found."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, p. 6"
    status: NOT_FOUND
  - field: "CONTACT.booking_url"
    note: "No digital registration / booking workflow identified."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 6"
    status: NOT_FOUND
  - field: "LOCATION.map_url / latitude / longitude"
    note: "Direct map URL and coordinates are not supplied in the report."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 1-4, 18"
    status: NOT_FOUND
  - field: "ABOUT.story"
    note: "Founder story, formal mission statement, and founding year are not verified."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 5, 14"
    status: NOT_FOUND
  - field: "PRICING.plans / admission_or_joining_fee"
    note: "Official rate card, joining fee, GST policy, and personal training prices are not supplied. Do not use locality benchmark prices as gym prices."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 10, 18"
    status: NOT_FOUND
  - field: "INSTAGRAM.items"
    note: "No individual Instagram Reel URLs are included in the source report."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 12"
    status: NOT_FOUND
  - field: "ASSET_MANIFEST.logo"
    note: "Official vector logo file is requested from the operator but no asset URL/file is provided in the report."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, p. 18"
    status: NOT_FOUND
  - field: "ASSET_MANIFEST.candidates"
    note: "No individual image asset URLs are provided. Collect current high-resolution facility photos manually from the operator; do not assume third-party images are owned or licensed."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 8-9, 18"
    status: NOT_FOUND
  - field: "TRAINERS.current_roster"
    note: "Sarfaraz Basha is described as a former gents trainer and Fouzia Ma'am as a morning trainer in member records; current active roster and credentials are not verified."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 5, 10"
    status: NOT_FOUND
  - field: "REVIEWS.google_profile_url"
    note: "Direct Google Business Profile URL is not supplied."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 11, 18"
    status: NOT_FOUND
  - field: "TRANSFORMATION_DATA"
    note: "No verified quantitative transformation cases, before/after metrics, or published case studies were found in indexed text."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, p. 12"
    status: NOT_FOUND
  - field: "FAQ.parking_terms / FAQ.accessibility / FAQ.shower_wifi_bmi"
    note: "Exact parking terms, accessibility details, shower/steam/sauna, Wi-Fi, and BMI/body-composition check availability are not verified."
    sources_searched: "M5 Fitness Zone Research Dossier.pdf, pp. 8-9"
    status: NOT_FOUND
```

### publicly_reported_only

```yaml
publicly_reported_only:
  - field: "BUSINESS.description"
    note: "Derived from public listings and dossier synthesis; owner should approve exact public-facing description."
  - field: "BUSINESS.branch_count"
    note: "Second directory listing is unresolved; owner must confirm active branch count."
  - field: "BUSINESS.year_established"
    note: "Not found; ask owner."
  - field: "CONTACT.whatsapp"
    note: "Not publicly disclosed; obtain owner-approved business number."
  - field: "CONTACT.instagram_handle"
    note: "Punctuated and unpunctuated forms both appear; confirm canonical account."
  - field: "LOCATION.landmark"
    note: "Landmark wording is from public directory research; confirm how the gym wants it displayed."
  - field: "HOURS.*"
    note: "Confirm all current hours, especially Sunday, and confirm ladies-only schedule."
  - field: "ABOUT.*"
    note: "Facility and positioning claims are based on public report; owner should confirm current conditions and wording."
  - field: "PROGRAMS.*"
    note: "Programs are publicly reported; confirm active services, schedules, and current availability."
  - field: "WHY_CHOOSE_US.*"
    note: "Differentiators are derived from public listing/review themes; owner should approve before publication."
  - field: "REVIEWS.selected_reviews"
    note: "Third-party review quotations; verify source attribution and current platform context before republishing."
  - field: "REVIEWS.sentiment_summary"
    note: "Synthesis of multiple public reviews; inferred and not an official statement."
  - field: "FAQ.*"
    note: "FAQ answers rely on public reports and should be owner-confirmed before launch."
  - field: "INSTAGRAM.follower_count"
    note: "110+ is a report-time estimate; verify current count if it will be displayed."
  - field: "ABOUT.attributes.parking"
    note: "Parking around the complex is reported, but exact availability and terms are unknown."
  - field: "PROGRAMS.diet-nutrition-guidance"
    note: "Reported as available upon inquiry; confirm service scope and qualifications before presenting as a formal service."
```

### owner_questions

1. Is the official business name exactly “M5 Fitness Zone,” and is there a separate registered / GST trade name?
2. Is Al Noor Complex, 5th Floor, the only active gym location? Is the Salarjung Colony / Alkareem Mansion listing a second branch, auxiliary facility, or outdated listing?
3. Confirm the full public address, floor, building name, landmark wording, and PIN code.
4. What are the current opening and closing times for each day, particularly Sunday?
5. Are ladies-only hours still daily from 11:00 to 16:45? Do these hours mean exclusive gym-floor access, coached batches, or both?
6. What direct front-desk phone number and WhatsApp Business number should the website publish?
7. What official business email should be published?
8. Is `https://instagram.com/m.5_fitness_zone` the canonical Instagram profile? Confirm exact handle and link.
9. Does the gym have an official Facebook page, YouTube channel, or booking URL?
10. What is the official membership rate card for daily, weekly, monthly, quarterly, half-yearly, annual, and personal-training plans?
11. Are there registration/admission fees, taxes, contract terms, or cancellation rules that should be disclosed?
12. Which payment methods are currently accepted?
13. Which programs are currently active: strength training, cardio, personal training, HIIT, group aerobics, functional training, and ladies-only sessions?
14. What are the current group class days/times and class capacity?
15. Which trainers are currently employed? Confirm names, titles, qualifications, certifications, and consent to publish biographies or photos.
16. Is diet/nutrition guidance an active service? Who provides it, what are their qualifications, and what exactly is included?
17. Are BMI/body-composition checks, showers, steam/sauna, Wi-Fi, lockers, and changing facilities available?
18. What are the parking arrangements, including availability, cost, and restrictions?
19. Can the gym provide its final vector logo and approved brand assets?
20. Can the operator provide high-resolution original photos of the actual training floor, equipment, reception, and functional turf?
21. Are the selected public reviews approved for reuse on the website, and should they be shown with reviewer names?
22. Does the gym have consented transformation stories and approved before/after photography? No transformation data should be published unless evidence and consent are provided.
23. What year was the gym established, and is there an approved founder / business story?
24. Are there official Google Business Profile or map links to use on the website?

````

## 16. EXCLUDED_BY_CONTRACT

```yaml
EXCLUDED_BY_CONTRACT:
  - item: "Transformations"
    value: "No gym-specific transformation content, quantitative results, before/after metrics, or testimonials may be invented. The source report states that verified transformation metrics and published case studies were not found."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 12"
    status: NOT_FOUND
  - item: "Hero copy and artwork"
    value: "Factory/template layer. Do not treat the report's suggested hero headline or artwork inventory as an official gym tagline or approved creative."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 13-14"
    status: INFERRED
  - item: "Training Intelligence"
    value: "Factory/template layer; do not populate with gym-specific claims unless separately supplied and approved."
    source: "Factory contract instructions"
    status: NOT_FOUND
  - item: "Between Sessions educational content"
    value: "Factory/template layer. The report's generic educational topic suggestions are not confirmed gym services and are not included as gym-specific content."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 12-13"
    status: NOT_FOUND
  - item: "Section headings and labels"
    value: "Factory/template layer; not business research data."
    source: "Factory contract instructions"
    status: NOT_FOUND
  - item: "Discount percentages and promotional terms"
    value: "No discount percentages, active offers, or promotional terms may be created from affordability messaging. Obtain current terms directly from the gym."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 3, 10"
    status: NOT_FOUND
  - item: "Unsupported health, nutrition, and physiological claims"
    value: "Do not claim weight-loss outcomes, injury prevention, posture correction, calorie expenditure, muscle recovery, or medical benefits as proven gym capabilities. Publish only approved factual service descriptions."
    source: "M5 Fitness Zone Research Dossier.pdf, pp. 5, 7-8, 12; conservative normalization rule"
    status: NOT_FOUND
  - item: "Local market benchmark prices"
    value: "The report's approximate Toli Chowki market prices are not M5 Fitness Zone prices and must not appear as its membership rates."
    source: "M5 Fitness Zone Research Dossier.pdf, p. 10"
    status: NOT_FOUND
````

## Normalization audit

- Source report used as the factual basis; no new research performed.
- Missing values are represented as `null` with `NOT_FOUND` where applicable.
- The secondary address, review metrics, Sunday hours, and Instagram handle variants remain explicit conflicts.
- Third-party directory and review information is marked `PUBLICLY_REPORTED`, not owner-verified.
- Price benchmarks from other local listings are explicitly excluded from gym-specific pricing.
- Trainer names in the report are historical / review-derived and are not presented as a verified current roster.
- No transformation metrics, fabricated testimonials, image URLs, or Reel URLs have been added.
- Factory-level content remains excluded.
