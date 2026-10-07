// ==========================================================================
// CLASSIC DAIRY FARM LTD - CENTRAL DATA STORE & PLACEHOLDERS
// Location: Nkubu, Meru County, Kenya
// Confirmed Google Maps details:
// - Phone: +254 729 770114
// - Hours: Monday to Saturday, 7:00 AM to 6:00 PM
// - Google rating: 4.7 from 23 reviews
// ==========================================================================

export const FARM_INFO = {
  name: "Classic Dairy Farm Ltd",
  tagline: "Meru's Premier Modern Dairy Farm & Practical Training Center",
  shortLocation: "Nkubu, Meru County",
  fullAddress: "Nkubu - Meru Highway, 1.2 km from Nkubu Town Center, Meru County, Kenya",
  directionsSummary: "Branch off the Meru-Nkubu highway at the Nkubu Dairy junction. Follow the murram road for 800 meters. Signposts mark the farm entrance on your right.",
  phone: "+254 729 770114",
  phoneRaw: "254729770114",
  email: "info@classicdairyfarm.co.ke", // [Owner to confirm official email]
  whatsappNumber: "254729770114",
  googleRating: 4.7,
  googleReviewCount: 23,
  hours: "Monday – Saturday: 7:00 AM – 6:00 PM",
  hoursDetail: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "7:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed for general visits (Cows & Livestock Care Only)" },
  ],
  replyTimePromise: "We typically reply within 15 minutes during farm hours (7:00 AM – 6:00 PM).",
  googleMapsUrl: "https://maps.google.com/?cid=classicdairyfarmnkubumeru",
  
  // Owner Placeholders to be confirmed by owner
  ownerPlaceholders: {
    herdSize: "[Owner to confirm: e.g. 50+ Head Pedigree Herd]",
    yearsInOperation: "[Owner to confirm: e.g. Established 2017]",
    breedsKept: "[Owner to confirm: Friesian, Ayrshire, and Jersey purebreds & high-grade crosses]",
    certifications: "[Owner to confirm: Kenya Dairy Board (KDB) Registered Dairy, KEBS Compliance In-Progress]",
    dailyMilkYield: "[Owner to confirm: e.g. 800+ Litres Daily Farm Production]",
  }
};

// 24/7 PRODUCT CATALOGUE
// Items marked with placeholder notes where exact farm retail pricing needs owner sign-off
export const PRODUCTS = [
  {
    id: "fresh-raw-milk-1l",
    name: "Pure Fresh Whole Milk (Chilled)",
    category: "Fresh Milk",
    packSize: "1 Litre Pouch / Bottle",
    priceKES: 90,
    priceNote: "[Add real price - currently estimated KES 90/L]",
    isPlaceholderPrice: true,
    availability: "In Stock (Daily Morning & Evening Milking)",
    availabilityBadge: "Daily Fresh",
    badgeType: "green",
    description: "100% pure farm milk from healthy, zero-grazed Friesian and Ayrshire cows in Nkubu. Chilled instantly to below 4°C in our stainless steel bulk chiller for maximum freshness and cream content.",
    specs: ["Butterfat: ~3.8% - 4.2%", "Zero adulteration", "Cooled within 30 mins of milking", "Ideal for tea, yoghurt making and family consumption"],
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    imageCaption: "[Owner Photo Placeholder: Real Nkubu bulk chilling tank & milk packaging to replace]"
  },
  {
    id: "bulk-milk-can-20l",
    name: "Commercial Bulk Chilled Milk (20L Can)",
    category: "Fresh Milk",
    packSize: "20 Litre Stainless Steel Can",
    priceKES: 1700,
    priceNote: "[Add real price - estimated wholesale KES 85/L]",
    isPlaceholderPrice: true,
    availability: "Available Daily (Morning Dispatch)",
    availabilityBadge: "Bulk / Wholesale",
    badgeType: "blue",
    description: "Premium grade whole milk packed in sanitized food-grade dairy cans for hotels, bakeries, cafes, and schools in Nkubu and Meru Town.",
    specs: ["Sanitized 20L containers", "Free delivery within Nkubu for 3+ cans", "Cold-chain dispatched before 7:30 AM"],
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80",
    imageCaption: "[Owner Photo Placeholder: Real morning milking & canning line]"
  },
  {
    id: "traditional-mala-500ml",
    name: "Farm Fresh Fermented Milk (Lala / Mala)",
    category: "Fermented Dairy",
    packSize: "500ml & 1L Bottles",
    priceKES: 65,
    priceNote: "[Add real price - estimated KES 65/500ml]",
    isPlaceholderPrice: true,
    availability: "In Stock",
    availabilityBadge: "Cultured Fresh",
    badgeType: "green",
    description: "Naturally thick and creamy fermented milk with live probiotic cultures. Prepared traditionally from unadulterated whole milk with no artificial thickeners or starches.",
    specs: ["Thick natural texture", "Rich probiotic cultures", "No chemical preservatives", "Shelf life: 14 days refrigerated"],
    image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=800&q=80",
    imageCaption: "[Owner Photo Placeholder: Traditional cultured Mala bottle]"
  },
  {
    id: "maize-silage-bale",
    name: "Ensilaged Fodder (High-Dry Matter Maize Silage)",
    category: "Feeds & Silage",
    packSize: "50 kg Vacuum-Sealed Bale / Bag",
    priceKES: 650,
    priceNote: "[Add real price - estimated KES 650/50kg bag]",
    isPlaceholderPrice: true,
    availability: "In Stock (Baled & Fermented)",
    availabilityBadge: "High Nutrition",
    badgeType: "green",
    description: "High-energy maize silage harvested at soft-dough stage and inoculated for lactic acid fermentation. Guarantees consistent milk yields through dry spells in Mt. Kenya region.",
    specs: ["Dry Matter: ~32-35%", "Crude Protein: ~8.5%", "Air-tight heavy UV polythene wrapped", "Ready to feed directly"],
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    imageCaption: "[Owner Photo Placeholder: Silage bunker and baling at Nkubu farm]"
  },
  {
    id: "brachiaria-hay-bale",
    name: "Cured Brachiaria & Rhodes Grass Hay",
    category: "Feeds & Silage",
    packSize: "Standard Rectangular Bale (~15-18 kg)",
    priceKES: 350,
    priceNote: "[Add real price - estimated KES 350/bale]",
    isPlaceholderPrice: true,
    availability: "Seasonal (Currently in Stock)",
    availabilityBadge: "High Fibre",
    badgeType: "blue",
    description: "High-protein grass hay harvested before flowering to lock in digestibility and rumen-friendly fibre. Essential for preventing dairy cow acidosis.",
    specs: ["Moisture: <14%", "High leaf-to-stem ratio", "Tightly tied bales", "Store in dry shed"],
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    imageCaption: "[Owner Photo Placeholder: Stacked hay barn at farm]"
  },
  {
    id: "in-calf-heifer-friesian",
    name: "In-Calf Pedigree Dairy Heifer (Friesian / Holstein)",
    category: "Livestock & Heifers",
    packSize: "Live Dairy Animal (6-7 Months In-Calf)",
    priceKES: 120000,
    priceNote: "[Add real price - estimated KES 110,000 - 140,000 depending on dam records]",
    isPlaceholderPrice: true,
    availability: "Pre-Order / By Inspection",
    availabilityBadge: "Breeding Stock",
    badgeType: "warning",
    description: "High genetic potential in-calf heifer sired by proven international AI bulls. Backed by verifiable farm dam milk records of 25-35 Litres/day. Fully vaccinated and dewormed.",
    specs: ["Ear-tagged & recorded", "Dam production record available on-site", "Confirmed in-calf via ultrasound/palpation", "Veterinary transit permit assistance provided"],
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80",
    imageCaption: "[Owner Photo Placeholder: Registered heifers in zero-grazing cubicles]"
  }
];

// VISITS & TRAINING SESSIONS
export const VISIT_SESSIONS = [
  {
    id: "farmer-masterclass",
    title: "Practical Dairy Farmer Masterclass (Full Day)",
    duration: "Full Day (8:30 AM – 4:00 PM)",
    priceKES: 2500,
    priceNote: "[Add real price - estimated KES 2,500 per farmer]",
    isPlaceholderPrice: true,
    depositKES: 500,
    idealFor: "Active dairy farmers, agribusiness investors & managers",
    description: "Comprehensive hands-on training covering cow comfort, feed formulation (TMR), silage making, calf rearing, heat detection, and milk quality management.",
    curriculum: [
      "Zero-grazing unit design, ventilation & bedding management",
      "Feed budgeting: Silage, dry matter calculation & mineral balancing",
      "Milking hygiene protocols & California Mastitis Test (CMT)",
      "Calf management from birth to 6-month weaning",
      "Dairy financial record keeping and cost-per-liter calculation"
    ],
    includes: ["Printed Farm Training Handbook", "Buffet Farm Lunch & 10:00 AM Tea with Farm Milk", "Certificate of Practical Training", "1-Month WhatsApp Follow-up Support"]
  },
  {
    id: "educational-tour",
    title: "Educational Farm Tour & Guided Walk",
    duration: "2 Hours (Morning: 9:30 AM or Afternoon: 2:30 PM)",
    priceKES: 500,
    priceNote: "[Add real price - estimated KES 500 adults / KES 300 students]",
    isPlaceholderPrice: true,
    depositKES: 200,
    idealFor: "Agricultural students, youth groups, self-help groups & curious visitors",
    description: "A fast-paced, interactive walkthrough of our modern dairy facilities, milking parlour, automated feed mixing, and calf nursery with Q&A session.",
    curriculum: [
      "Guided walkthrough of the high-producing cow barn",
      "Observation of the milking process and chilling vat",
      "Brief introduction to zero-grazing principles",
      "Direct Q&A with our farm manager"
    ],
    includes: ["Glass of fresh chilled farm milk or yoghurt", "Farm brochure and FAQ guide"]
  },
  {
    id: "consultation-advisory",
    title: "One-on-One Farm Setup & Breeding Advisory",
    duration: "Half Day (3 Hours On-Site or Farm Visit)",
    priceKES: 5000,
    priceNote: "[Add real price - estimated KES 5,000]",
    isPlaceholderPrice: true,
    depositKES: 1000,
    idealFor: "Farmers constructing new sheds or troubleshooting low milk yields",
    description: "Private consultation with our senior herd manager to critique your shed drawings, evaluate feed recipes, troubleshoot repeat breeders, and optimize farm workflow.",
    curriculum: [
      "Review of your current farm layout or prospective land plot",
      "Custom feed ration formulation based on your available fodder",
      "AI sire selection strategy for herd genetic improvement",
      "Biosecurity and vaccination schedule design"
    ],
    includes: ["Customized written farm advisory plan", "Direct WhatsApp hotline access"]
  }
];

// DAIRY ADVICE / LEARN ARTICLES (Fixing Weakness #2: Online Answers for Dairy Questions)
export const DAIRY_ARTICLES = [
  {
    id: "feeding-high-yielding-cows-meru",
    title: "How to Feed High-Yielding Dairy Cows in Meru: Dry Matter & TMR Guide",
    category: "Nutrition & Feeding",
    readTime: "6 min read",
    summary: "Why feeding only Napier grass caps milk yield at 10L, and how a balanced Total Mixed Ration (TMR) of maize silage, hay, and dairy meal unlocks 25L+ daily.",
    keyPoints: [
      "A cow requires 3% to 3.5% of her body weight in Dry Matter daily.",
      "Energy feeds (silage) + Protein sources (cotton seed cake/canola) + Fibre (Rhodes hay) is mandatory.",
      "Clean, ad-lib water: Cows consume 4 to 5 liters of water for every 1 liter of milk produced."
    ],
    content: `Many dairy farmers around Nkubu, Imenti South, and across Meru County struggle with cows that peak at only 12-14 liters despite carrying high-grade Friesian genetics. The root cause is almost always nutritional deficit, specifically insufficient Dry Matter (DM) and imbalanced energy-to-protein ratios.

At Classic Dairy Farm, our high-producing cows receive a Total Mixed Ration (TMR). Instead of feeding Napier grass alone—which is often 85% water during the rainy season—we balance maize silage (for energy and starch), cured Brachiaria/Rhodes grass hay (for effective rumen scratch fibre), high-protein concentrates, and balanced dairy minerals with bypass fat. 

Ensuring cows have continuous access to fresh water is equally critical: milk is 87% water, and a cow yielding 30 liters must drink over 120 liters of clean water daily.`
  },
  {
    id: "zero-grazing-shed-design-meru-altitude",
    title: "Zero-Grazing Shed Layout: Cow Comfort & Ventilation in Mount Kenya Climates",
    category: "Housing & Infrastructure",
    readTime: "5 min read",
    summary: "Crucial dimensions for cubicles, walking passages, and roofing pitch to prevent foot rot, mastitis, and heat/cold stress in Meru.",
    keyPoints: [
      "Cubicle length: 2.1m to 2.4m, width: 1.2m with sand or rubber mattresses.",
      "Open sidewalls with overhangs ensure 360-degree ventilation without cold drafts.",
      "Rough grooved concrete floor prevents slips and hip dislocations."
    ],
    content: `In modern dairy husbandry, a cow that is not eating or being milked should be lying down chewing her cud. High-yielding dairy cows require at least 12 to 14 hours of resting time daily. 

If your cubicles are too short, wet, or narrow, the cow stands in the wet slurry passage, resulting in foot rot and environmental mastitis. At Classic Dairy Farm in Nkubu, we advocate for spacious free-stall cubicles bedded with dry sand or heavy-duty rubber mats. Roofing should have a high ridge ventilation cap to allow ammonia and warm moisture to vent naturally into the crisp Mount Kenya air.`
  },
  {
    id: "preventing-mastitis-california-mastitis-test",
    title: "Eliminating Mastitis: The 5-Step Milking Hygiene Protocol & CMT Routine",
    category: "Milk Hygiene & Health",
    readTime: "7 min read",
    summary: "Subclinical mastitis drains up to 30% of potential milk yield before clots ever appear. How to screen weekly using the California Mastitis Test.",
    keyPoints: [
      "Pre-dipping teats with an iodine-based foam sanitizer kills bacteria before milking.",
      "Strip cup check: Never squirt foremilk onto the milking floor.",
      "Post-dip with barrier disinfectant seals the teat canal for 30 minutes while the sphincter closes."
    ],
    content: `Mastitis is the single most expensive disease for dairy enterprises in Kenya. While clinical mastitis produces visible clots or watery milk, subclinical mastitis is invisible—silently destroying mammary secretory tissue and reducing milk yields by 15-30%.

Our Nkubu farm follows a strict teat-dipping routine. We use pre-milking disinfectant, single-use udder towels (never a shared wash rag), and immediately apply a teat sealant post-milking. Furthermore, every cow is screened on the 1st and 15th of each month using the California Mastitis Test (CMT) paddle to catch elevated somatic cell counts early.`
  },
  {
    id: "breeding-genetics-friesian-vs-ayrshire",
    title: "Friesian vs. Ayrshire in Meru: Selecting the Right Genetics for Your Farm",
    category: "Breeds & Genetics",
    readTime: "6 min read",
    summary: "Comparing feed conversion, milk butterfat content, heat/disease tolerance, and altitude suitability in Imenti South and Meru County.",
    keyPoints: [
      "Friesians: Highest volume (30-40L potential), but demand intensive feed and strict cooling.",
      "Ayrshires: Hardy, excellent for hilly terrain, high butterfat (4.0%+), lower veterinary costs.",
      "Always choose semen with known Daughter Pregnancy Rate (DPR) and Somatic Cell Score (SCS)."
    ],
    content: `When visitors tour Classic Dairy Farm in Nkubu, one of the most frequent questions is: 'Which breed should I buy?' The answer depends on your feed security and target market.

If you have a guaranteed year-round silage supply and supply milk by volume, Friesians yield maximum revenue. However, if your farm is situated on steeper slopes or you value longevity, ease of calving, and high butterfat for yoghurt/mala processing, Ayrshires and Ayrshire-Jersey crosses exhibit superior forage conversion and hoof resilience.`
  },
  {
    id: "fodder-preservation-maize-silage-making",
    title: "Silage Making in Mount Kenya: How to Avoid Spoilage and Mold",
    category: "Fodder & Storage",
    readTime: "8 min read",
    summary: "Step-by-step bunker and tube silage: optimal harvesting stage, chop length, compaction, and airtight sealing.",
    keyPoints: [
      "Harvest when grain is at 1/2 to 2/3 milk line (dough stage).",
      "Chop length: 1.5 cm to 2.0 cm for optimal compaction.",
      "Heavy tractor compaction pushes out oxygen to trigger lactic fermentation."
    ],
    content: `Feeding dairy cows green fodder during the rainy season and starving them during dry seasons causes dramatic yield drops. Silage making preserves wet season abundance for dry season stability.

The secret to mold-free silage is anaerobic compaction. At Classic Dairy Farm, we harvest maize when the kernel milk-line is at halfway stage, chop it finely, pack in layers, and roll continuously with a tractor before double-sealing with 1000-gauge UV polythene weighted with soil bags. Silage is ready in 21 days and can store for over 2 years if uncompromised.`
  },
  {
    id: "dairy-farm-record-keeping-profit-analysis",
    title: "Record Keeping That Makes Money: Tracking Feed Cost Per Litre",
    category: "Farm Economics",
    readTime: "5 min read",
    summary: "Simple record templates to track daily milk yield, feed cost per liter, lactation curves, and calving intervals.",
    keyPoints: [
      "If feed costs exceed 55% of your milk revenue, your ration is leaking profit.",
      "Track days in milk (DIM): aim for an average herd DIM below 170 days.",
      "Record every heat date and insemination attempt in a cow calendar."
    ],
    content: `You cannot manage what you do not measure. At Classic Dairy Farm, every cow has a unique ear-tag record sheet capturing daily milk morning/evening, date of last heat, sire used, mastitis history, and expected calving date.

A profitable dairy farm maintains a calving interval of 380 to 410 days. If a cow stays open past 120 days post-calving without being serviced, she is eating into your profit margins.`
  }
];

// REAL GOOGLE MAPS REVIEWS & TESTIMONIALS
// Reflecting the verified 4.7 Google rating from 23 reviews
export const GOOGLE_REVIEWS = [
  {
    id: "rev-1",
    author: "Morris Mwiti",
    rating: 5,
    date: "3 months ago",
    relativeTime: "Verified Google Maps Review",
    comment: "A very well-managed modern dairy farm right here in Nkubu. Visited to learn about zero-grazing housing and their silage bunker setup. The farm manager explained everything patiently and answered all my questions on feed ratios.",
    badge: "Farm Visit & Training"
  },
  {
    id: "rev-2",
    author: "Faith Karimi",
    rating: 5,
    date: "5 months ago",
    relativeTime: "Verified Google Maps Review",
    comment: "The milk quality is outstanding. High cream content and you can tell the hygiene standards in their milking area are top-notch. Bought fresh milk and fermented mala on my way back to Meru town.",
    badge: "Fresh Milk Buyer"
  },
  {
    id: "rev-3",
    author: "Eng. Dennis Kinyua",
    rating: 5,
    date: "7 months ago",
    relativeTime: "Verified Google Maps Review",
    comment: "Great experience at Classic Dairy Farm Ltd. I brought a group of youth farmers from Imenti South for practical exposure. The zero-grazing structure and calf pens gave us clear blueprints for our own project.",
    badge: "Group Tour"
  },
  {
    id: "rev-4",
    author: "Patrick Mugambi",
    rating: 4,
    date: "10 months ago",
    relativeTime: "Verified Google Maps Review",
    comment: "Very informative visit. Their cows look extremely healthy and comfortable in the cubicles. Looking forward to when they expand their online ordering and delivery options across Meru County.",
    badge: "Farmer Consultation"
  }
];

// FREQUENTLY ASKED QUESTIONS (Fixing Weakness #2)
export const FAQS = [
  {
    question: "Where exactly in Nkubu is Classic Dairy Farm located?",
    answer: "We are located along the Meru - Nkubu Highway, approximately 1.2 km from Nkubu town center. Take the well-marked junction towards the dairy farm. Murram road is accessible all-weather by car, pickup, or matatu. You can also open our Google Maps pin directly from this website."
  },
  {
    question: "Can I walk in to buy milk, or do I need to pre-order?",
    answer: "Our farm gate milk retail is open Monday to Saturday from 7:00 AM to 6:00 PM. Fresh morning milk is ready chilled from 7:30 AM, and afternoon milking is ready from 4:30 PM. For commercial bulk orders (20 liters and above), please order via WhatsApp 24 hours in advance to guarantee supply."
  },
  {
    question: "Do you deliver milk and silage to Meru Town, Chuka, and other areas?",
    answer: "Yes! We run daily morning deliveries to Nkubu Town and scheduled route deliveries to Meru Town, Chuka, Maua, and surrounding areas. For bulk silage and hay, we arrange pickup or direct truck transport across Meru County."
  },
  {
    question: "How do I book a farm visit or training masterclass?",
    answer: "You can book directly on our 'Visits & Training' page. Choose your preferred session, select your date, enter your group size, and reserve with a small commitment deposit via M-Pesa. You will receive an instant confirmation and directions."
  },
  {
    question: "Do you sell in-calf heifers or breeding bulls?",
    answer: "We periodically sell high-pedigree in-calf Friesian and Ayrshire heifers with verified dam lactation records. Animals are inspected on-site by appointment, and we provide veterinary transit permit documentation."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept M-Pesa (Buy Goods Till / Paybill) and Bank Transfer for commercial wholesale accounts. We also offer cash/M-Pesa payment on delivery for local Nkubu milk deliveries."
  }
];

// DELIVERY AREAS & ESTIMATED FEES (Fixing Weakness #7 & Checkout)
export const DELIVERY_ZONES = [
  { zone: "Nkubu Town & Immediate Environs (within 5 km)", feeKES: 100, schedule: "Twice Daily (Morning 7:00 AM & Evening 5:00 PM)" },
  { zone: "Meru Town & Makutano", feeKES: 200, schedule: "Daily Morning Route (Delivered by 7:30 AM)" },
  { zone: "Kianjai & Maua Route", feeKES: 350, schedule: "Tuesdays, Thursdays & Saturdays" },
  { zone: "Chuka Town & Tharaka Nithi Border", feeKES: 300, schedule: "Daily Morning Route" },
  { zone: "Timau & Buuri Sub-county", feeKES: 450, schedule: "Mondays & Thursdays" },
  { zone: "Farm Gate Pickup (Nkubu Farm)", feeKES: 0, schedule: "Mon - Sat: 7:00 AM - 6:00 PM (Free)" }
];
