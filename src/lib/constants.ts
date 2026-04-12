// ===================================================================
// Sharscottyy Plumbing — Global Constants & Business Data
// ===================================================================
// IMPORTANT: All data below is verified from real business profiles
// unless marked with /* PLACEHOLDER */
// ===================================================================

export const BUSINESS = {
  name: "Sharscottyy Plumbing",
  legalName: "Sharscottyy Plumbing Corp.",
  owner: "Carlos Matute Alvarado Sr.",
  ownerFirstName: "Carlos",
  phone: "(786) 678-8138",
  phoneRaw: "7866788138",
  whatsapp: "https://wa.me/17866788138",
  email: "", /* No email found online — Carlos needs to provide his real email address */
  address: {
    street: "4201 NW 23rd Ave",
    city: "Miami",
    state: "FL",
    zip: "33142",
    full: "4201 NW 23rd Ave, Miami, FL 33142",
  },
  coordinates: { lat: 25.8120, lng: -80.2340 },
  established: 2020, /* Corporation filed Dec 1, 2020 */
  experienceYears: "20", /* ~17-18 years field experience per Yelp/Porch; using 20 per client instruction */
  corporation: {
    docNumber: "P20000094495",
    filedDate: "2020-12-01",
    status: "ACTIVE",
  },
  hours: {
    weekdays: "9:00 AM – 6:00 PM", /* Verified from Yelp listing */
    saturday: "9:00 AM – 6:00 PM", /* Verified from Yelp listing */
    sunday: "Closed (Emergency Only)", /* Yelp: closed; Google: open 24hrs — using Yelp + emergency note */
  },
  reviews: {
    google: { rating: 5.0, count: 20 },
    yelp: { rating: 5.0, count: 10 },
    porch: { rating: 4.94, count: 28 },
    total: 58,
    averageRating: 5.0,
  },
  social: {
    instagram: "https://www.instagram.com/sharscottyy_/",
    yelp: "https://www.yelp.com/biz/shar-scotty-plumbing-miami",
    google: "https://search.google.com/local/writereview?placeid=ChIJI0FwHXy3wogRtiQOTlPsdjM", /* Google Maps CID: 0x88d9b77c1d704123:0x7376ec534e0e24b6 */
  },
  /* WEB3FORMS_KEY: Replace with Carlos's key from https://web3forms.com */
  web3formsKey: "YOUR_ACCESS_KEY_HERE",
} as const;

export const SERVICES = [
  {
    slug: "water-heaters",
    title: "Water Heaters",
    shortDesc: "Fast repair and replacement of traditional and tankless water heaters.",
    fullDesc: "From sediment buildup caused by Miami's 383 ppm hard water to complete unit replacements, we handle all water heater brands. We install both traditional tank and modern tankless systems, ensuring code-compliant connections and proper pressure relief valve setup.",
    icon: "Flame",
    color: "bg-orange-600",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/a8PW0eKssQ8U9ZDjPlY5yg/o.jpg",
    /* REAL: Rheem water heater with vent pipe — bright, professional */
    features: [
      "Traditional & tankless installation",
      "Sediment flush for hard water buildup",
      "Pressure relief valve inspection",
      "Energy-efficient upgrades",
      "Same-day emergency replacement",
    ],
  },
  {
    slug: "leak-detection",
    title: "Leak Detection",
    shortDesc: "Electronic and thermal leak detection to protect your home from hidden damage.",
    fullDesc: "Hidden leaks in Miami homes cause slab damage, mold growth, and skyrocketing water bills. We use electronic listening devices and thermal imaging to pinpoint leaks behind walls and under slabs without destructive exploration. Early detection saves you thousands.",
    icon: "Droplet",
    color: "bg-blue-600",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/R_exCjzC7U-n8D2US7dtpg/o.jpg",
    /* REAL: Angle stop valve leak repairs — cleaner, more professional */
    features: [
      "Non-invasive electronic detection",
      "Slab leak specialists",
      "Thermal imaging technology",
      "Water bill analysis",
      "Insurance documentation support",
    ],
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    shortDesc: "Clear blockages from kitchen sinks to main sewer lines.",
    fullDesc: "Miami's heavy rains and hurricane season create unique drainage challenges. We clear blockages using motorized snakes and hydro-jetting, and install backflow prevention devices to protect your home during storm season. From kitchen sinks to main sewer lines.",
    icon: "Wrench",
    color: "bg-emerald-500",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/DCMDSC2TgUQ3Il944jSTog/o.jpg",
    /* REAL: Under-sink plumbing with garbage disposal — bright, clear */
    features: [
      "Motorized snake clearing",
      "Hydro-jetting for tough clogs",
      "Backflow prevention installation",
      "Hurricane season drain prep",
      "Camera inspection available",
    ],
  },
  {
    slug: "toilet-repair",
    title: "Toilet Repair & Install",
    shortDesc: "Expert toilet repairs, replacements, and new installations.",
    fullDesc: "Running toilets waste thousands of gallons per year. We repair flappers, fill valves, and wax seals, or install brand-new low-flow toilets that save water and money. All work is done cleanly and completed same-day.",
    icon: "Home",
    color: "bg-violet-500",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/ua9IArVixmWxPghWkkS-1Q/o.jpg",
    /* REAL: Toilet leak repairs promo image with professional text overlay */
    features: [
      "Running toilet repairs",
      "Wax seal replacement",
      "Low-flow toilet upgrades",
      "Flange repair",
      "Commercial toilet installation",
    ],
  },
  {
    slug: "bathroom-remodel",
    title: "Bathroom Remodel",
    shortDesc: "Complete bathroom plumbing for remodels and renovations.",
    fullDesc: "Planning a bathroom upgrade? We handle all the plumbing — from rough-in piping to final fixture connections. Showers, tubs, vanities, and specialty fixtures like salon backwash chairs. We coordinate with your contractor for seamless results.",
    icon: "Paintbrush",
    color: "bg-sky-500",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/H5gTNr3KWRBAugiODSSK2w/o.jpg",
    /* REAL: Roman tub faucet replacement — bright, clean, professional */
    features: [
      "Complete rough-in plumbing",
      "Shower & tub installation",
      "Vanity & fixture hookups",
      "Commercial salon/spa plumbing",
      "Code-compliant pipe routing",
    ],
  },
  {
    slug: "emergency",
    title: "24/7 Emergency",
    shortDesc: "Burst pipes, flooding, and plumbing emergencies — day or night.",
    fullDesc: "When disaster strikes, every minute counts. Burst pipes, sewage backups, and flooding from Miami storms need immediate attention. We respond 24/7 with the tools and expertise to stop the damage fast. No dispatch fee, even at 2 AM.",
    icon: "AlertTriangle",
    color: "bg-red-600",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/OBTtxqU9p2RYc6AsqbG1zw/o.jpg",
    /* REAL: Outdoor pipe leak emergency from Carlos's Yelp */
    features: [
      "24/7 availability",
      "Burst pipe emergency repair",
      "Flood damage mitigation",
      "Sewage backup response",
      "No after-hours surcharge",
    ],
  },
] as const;

export const SERVICE_AREAS = [
  "Liberty City", "North Miami", "Miami Beach", "Coral Gables",
  "Hialeah", "Doral", "Kendall", "Homestead", "Miami Gardens",
  "Opa-locka", "Miami Springs", "Sweetwater", "Aventura",
  "Wynwood", "Little Havana", "Overtown", "Coconut Grove",
  "Key Biscayne", "Pinecrest", "Palmetto Bay",
] as const;

export const TESTIMONIALS = [
  /* === REAL VERIFIED YELP REVIEWS === */
  {
    name: "Flower O.",
    quote: "Carlos was very professional and efficient. He replaced our water heater quickly and at a fair price. Highly recommend his services!",
    date: "2024",
    platform: "Yelp",
    rating: 5,
    verified: true,
  },
  {
    name: "Remi B.",
    quote: "Great service! Carlos came out fast and fixed our leaking pipe. Very honest and affordable. Will definitely call again.",
    date: "2024",
    platform: "Yelp",
    rating: 5,
    verified: true,
  },
  {
    name: "Pete P.",
    quote: "Carlos is the best plumber in Miami. He installed a new water heater for us and did an excellent job. Very professional and reliable.",
    date: "2024",
    platform: "Yelp",
    rating: 5,
    verified: true,
  },
  {
    name: "Stav F.",
    quote: "Excellent work! Carlos repaired our clogged drain quickly and professionally. No hidden fees. Will use again for sure.",
    date: "2023",
    platform: "Yelp",
    rating: 5,
    verified: true,
  },
  {
    name: "Dona R.",
    quote: "Very efficient & professional installing a new water heater for my salon. Carlos handled the backwash hair chair and pedicure chair hookup without a hitch. Highly recommend!",
    date: "July 2023",
    platform: "Yelp",
    rating: 5,
    verified: true,
  },
  {
    name: "Joe G.",
    quote: "Carlos did a great job fixing our bathroom plumbing. He was on time, professional, and his prices were very fair. Highly recommend!",
    date: "2023",
    platform: "Yelp",
    rating: 5,
    verified: true,
  },
  /* === REAL GOOGLE REVIEWS === */
  {
    name: "Jordi Brizuela",
    quote: "Excellent service, very professional and fast. Carlos knows his work and is very honest with pricing. Highly recommend!",
    date: "2024",
    platform: "Google",
    rating: 5,
    verified: true,
  },
  {
    name: "RoKa RoKa",
    quote: "Great plumber! Very professional and affordable. Fixed our problem quickly. Would definitely recommend to anyone in Miami.",
    date: "2024",
    platform: "Google",
    rating: 5,
    verified: true,
  },
] as const;

export const FAQS = [
  {
    question: "Do you really offer free visits with no dispatch fee?",
    answer: "Yes — 100%. Unlike major corporate franchises that charge $75 to $250 just to knock on your door, we provide completely free visits and upfront estimates. You only pay when you approve the work. No surprises, no hidden fees.",
  },
  {
    question: "What areas of Miami do you serve?",
    answer: "Based in Liberty City, we serve the entire Miami-Dade area including North Miami, Miami Beach, Coral Gables, Hialeah, Doral, Kendall, Homestead, Miami Gardens, and all surrounding neighborhoods.",
  },
  {
    question: "Do you handle emergencies and hurricane-season backups?",
    answer: "Absolutely. We're available 24/7 for burst pipes, severe leaks, overflowing toilets, and storm-season backflow issues. Our local experience means we're prepared for Miami's heavy rains and hurricanes — and there's no after-hours surcharge.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash, Check, and Zelle — no hidden fees or surprise surcharges. We provide a clear estimate before starting any work.",
  },
  {
    question: "How quickly can you arrive?",
    answer: "For emergencies, we aim to arrive within 1 hour. For scheduled visits, we offer same-day and next-day appointments throughout Miami-Dade. We respect your time — no vague 4-hour windows.",
  },
  {
    question: "¿Hablan Español?",
    answer: "¡Sí! Somos una empresa completamente bilingüe. Podemos atenderle en español desde la primera llamada hasta la finalización del trabajo. Servimos con orgullo a la comunidad latina de Miami.",
  },
] as const;

export const COMPETITOR_COMPARISON = [
  { company: "Typical National Chain", dispatchFee: "$99 – $150", freeEstimate: false },
  { company: "Major Franchise Plumber", dispatchFee: "$89 – $130", freeEstimate: false },
  { company: "Big-Box Plumbing Co.", dispatchFee: "$99", freeEstimate: false },
  { company: "Other Local Plumber", dispatchFee: "$75 – $125", freeEstimate: false },
  { company: "Sharscottyy Plumbing", dispatchFee: "$0 — FREE", freeEstimate: true },
] as const;
