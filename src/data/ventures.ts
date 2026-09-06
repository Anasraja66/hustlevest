export type Venture = {
  id: string;
  title: string;
  description: string;
  capital: number;
  category: string;
  availability: string;
  startupCost: string;
  breakEven: string;
  image: string;
  shoppingList: { item: string; cost: string; vendor: string; why: string }[];
  rules: string[];
  plan: string[];
};

export const ventures: Venture[] = [
  // £100 Ventures
  {
    id: "v1",
    title: "FreshStart Cleans",
    description: "Domestic & End-of-Tenancy Cleaning Assistant",
    capital: 100,
    category: "Home Services",
    availability: "Flexible",
    startupCost: "£100",
    breakEven: "Breaks even in 3 jobs",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Microfibre cloths (pack of 20)", cost: "£8", vendor: "Wilko/Amazon UK", why: "Streak-free surface cleaning" },
      { item: "Multi-surface concentrate cleaner", cost: "£6", vendor: "Tesco/ASDA", why: "Dilute concentrate cleaner" },
      { item: "Foldable trolley bag", cost: "£12", vendor: "Amazon UK", why: "Transport kit without a car" },
      { item: "Flyers (50, home printed)", cost: "£10", vendor: "Vistaprint", why: "Local marketing" }
    ],
    rules: [
      "MANDATORY: Register as self-employed with HMRC once income exceeds the £1,000/year trading allowance.",
      "RECOMMENDED: Public liability insurance (~£5–£15/month) — many letting agents will ask for proof.",
      "NOT REQUIRED: DBS check (not legally required, but offering one is a strong trust signal)."
    ],
    plan: [
      "Day 1: Post in 3 local Facebook community groups + Nextdoor with before/after photos of your own home.",
      "Day 2: Message 5 local letting agents offering a discounted first end-of-tenancy clean.",
      "Day 3: Print & drop 30 flyers through doors near recently-listed rental properties.",
      "Day 4: Ask friends/family for one paid test job, request a review.",
      "Day 5: Post the review + photos again.",
      "Day 6: Follow up with the letting agents.",
      "Day 7: Set up a free Google Business Profile."
    ]
  },
  {
    id: "v-soc1",
    title: "SocialBoost Local",
    description: "Social Media Management for Local Cafes & Shops",
    capital: 100,
    category: "Digital",
    availability: "Flexible",
    startupCost: "£100",
    breakEven: "Breaks even < 1 client",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Canva Pro (Monthly)", cost: "£10.99", vendor: "Canva", why: "Professional graphics and templates" },
      { item: "Buffer/Later Starter Plan", cost: "£15", vendor: "Buffer", why: "Scheduling posts across platforms" },
      { item: "Domain & Simple Landing Page", cost: "£20", vendor: "Carrd / Namecheap", why: "Professional presence" }
    ],
    rules: [
      "MANDATORY: Register as self-employed with HMRC once income exceeds £1,000/year.",
      "RECOMMENDED: Basic contract outlining exactly how many posts/reels you will do per month to prevent scope creep."
    ],
    plan: [
      "Day 1: Set up a Canva Pro trial and create 3 demo social media calendars.",
      "Day 2: Build a simple one-page portfolio on Carrd.",
      "Day 3: Walk down your local high street and identify 5 cafes with poor Instagram presence.",
      "Day 4: Direct Message (DM) them offering a 1-week free trial (3 posts + 1 reel).",
      "Day 5: Visit the ones that replied, take photos of their products on your phone.",
      "Day 6: Schedule the trial posts.",
      "Day 7: Pitch a £150-£300/month retainer to continue."
    ]
  },
  {
    id: "v3",
    title: "Charity Finds Curated",
    description: "Charity-Shop Sourced Clothing Reselling on Vinted/eBay",
    capital: 100,
    category: "Reselling",
    availability: "Evening",
    startupCost: "£100",
    breakEven: "Breaks even in 8 items",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Initial stock (20-30 items)", cost: "£50", vendor: "Local charity shops", why: "Core inventory" },
      { item: "Steamer (handheld)", cost: "£18", vendor: "Amazon UK", why: "Presentation — wrinkle-free photos sell faster" },
      { item: "Poly mailing bags (bulk)", cost: "£8", vendor: "Amazon UK", why: "Vinted/eBay postage packaging" },
      { item: "Postage scale", cost: "£7", vendor: "Amazon UK", why: "Accurate postage cost calculation" }
    ],
    rules: [
      "MANDATORY: HMRC self-employment registration once your Vinted/eBay selling income exceeds £1,000/year.",
      "MANDATORY: Accurate item descriptions/condition under UK Consumer Rights Act.",
      "CHECK: Reselling counterfeit branded goods is illegal — verify authenticity."
    ],
    plan: [
      "Day 1: Source 15-20 items across 3 charity shops.",
      "Day 2: Steam, measure, photograph and list on Vinted.",
      "Day 3: Cross-list the same items on eBay UK and Depop.",
      "Day 4: Bundle deals/offer discounts to boost early sales velocity.",
      "Day 5: Source a second batch focusing on what sold fastest.",
      "Day 6: Respond promptly to offers/questions.",
      "Day 7: Post/ship sold items, request reviews."
    ]
  },
  {
    id: "v-valet1",
    title: "Interior Fresh Valeting",
    description: "Mobile Interior Car Detailing & Cleaning",
    capital: 100,
    category: "Mobile",
    availability: "Weekend",
    startupCost: "£100",
    breakEven: "Breaks even in 4 cars",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Handheld car vacuum (cordless or 12V)", cost: "£35", vendor: "Argos / Amazon", why: "Core cleaning tool" },
      { item: "Interior detailing brushes & microfibres", cost: "£20", vendor: "Halfords", why: "Getting into vents and crevices" },
      { item: "Upholstery foam cleaner & plastics dressing", cost: "£25", vendor: "Halfords", why: "Professional finish" }
    ],
    rules: [
      "MANDATORY: HMRC self-employment registration once over £1,000/yr.",
      "WARNING: Do not use slippery silicone dressings on steering wheels or foot pedals (safety hazard)."
    ],
    plan: [
      "Day 1: Detail your own car or a family member's car. Take extreme close-up before/after photos.",
      "Day 2: Create a Facebook page and post the photos.",
      "Day 3: Post in local community Facebook groups offering 'At-home interior deep cleans' for £25-£35.",
      "Day 4: Do 2 jobs for neighbours.",
      "Day 5: Ask them to share your post on their personal feeds.",
      "Day 6: Print cheap flyers and put them on cars in your street.",
      "Day 7: Set up a Google Business Profile for local SEO."
    ]
  },
  {
    id: "v-cake1",
    title: "SweetSlice Preorders",
    description: "Bespoke Celebration Cakes & Treat Boxes",
    capital: 100,
    category: "Food",
    availability: "Weekend",
    startupCost: "£100",
    breakEven: "Breaks even in 7 dozen",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Cake tins, piping bags, nozzles", cost: "£30", vendor: "Hobbycraft / Amazon", why: "Professional presentation" },
      { item: "Cake boxes & cake boards (bulk)", cost: "£25", vendor: "Online Packaging vendor", why: "Safe transport and premium feel" },
      { item: "Initial ingredients (flour, butter, fondant)", cost: "£40", vendor: "Aldi / Lidl / Bookers", why: "Raw materials" }
    ],
    rules: [
      "MANDATORY: Register your food business with your local authority at least 28 days before trading.",
      "MANDATORY: Level 2 Food Hygiene Certificate (can be done online for ~£15).",
      "MANDATORY: Allergen labelling laws (Natasha's Law) — you must document all 14 major allergens."
    ],
    plan: [
      "Day 1: Register with the local council (it's free) and complete online hygiene course.",
      "Day 2: Bake 3 different high-quality cakes. Do a proper photoshoot near a window.",
      "Day 3: Setup an Instagram page using these photos.",
      "Day 4: Slice the cakes into 'taster boxes' and give them to local hairdressers or small offices with your business card.",
      "Day 5: Post on Facebook groups offering 'Weekend Treat Boxes'.",
      "Day 6: Take pre-orders only (reduces waste).",
      "Day 7: Bake and deliver the pre-orders."
    ]
  },

  // £300 Ventures
  {
    id: "v-garden",
    title: "TidyPlot Gardening",
    description: "Lawn Care, Weeding & Garden Clearance",
    capital: 300,
    category: "Home Services",
    availability: "Flexible",
    startupCost: "£300",
    breakEven: "Breaks even in 7 jobs",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Petrol/Cordless Lawn Mower", cost: "£150", vendor: "B&Q / Screwfix", why: "Core equipment for most jobs" },
      { item: "Strimmer (Cordless)", cost: "£80", vendor: "Argos", why: "Edges and overgrown patches" },
      { item: "Heavy duty gardening gloves, shears, bags", cost: "£50", vendor: "Wilko / B&Q", why: "Manual weeding and waste removal" }
    ],
    rules: [
      "MANDATORY: HMRC self-employment registration.",
      "CHECK: If you transport green waste away, you legally need a Lower Tier Waste Carrier Licence (free in UK) or charge the client to put it in their green bin."
    ],
    plan: [
      "Day 1: Print 200 flyers specifically targeting houses with overgrown front gardens.",
      "Day 2: Deliver flyers.",
      "Day 3: Setup Google Business Profile (TidyPlot [Your Town]).",
      "Day 4: Offer a heavily discounted 'jungle clearance' in a local Facebook group to get before/after portfolio shots.",
      "Day 5: Complete the job, take photos.",
      "Day 6: Post the photos online and quote £20-£25/hour for standard maintenance.",
      "Day 7: Try to lock in 2 clients for bi-weekly mows (recurring revenue)."
    ]
  },
  {
    id: "v-dog",
    title: "Paws On Wheels",
    description: "Mobile Dog Wash & Grooming",
    capital: 300,
    category: "Mobile",
    availability: "Flexible",
    startupCost: "£300",
    breakEven: "Breaks even in 11 jobs",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Portable dog bath / grooming table", cost: "£100", vendor: "Amazon", why: "Professional setup at client's home" },
      { item: "High-velocity pet dryer", cost: "£80", vendor: "Amazon", why: "Crucial for thick coats" },
      { item: "Clippers, shears, professional shampoos", cost: "£100", vendor: "Christies Direct", why: "Grooming essentials" }
    ],
    rules: [
      "RECOMMENDED: Pet business insurance (covers injury to the animal while in your care).",
      "RECOMMENDED: Basic canine first aid course."
    ],
    plan: [
      "Day 1: Practice full grooms on friends/family dogs for free to build a portfolio.",
      "Day 2: Setup Instagram and Facebook.",
      "Day 3: Join local dog walking Facebook groups and post your services.",
      "Day 4: Leave flyers at local pet shops and vets (ask permission).",
      "Day 5: Run a 'First groom 20% off' promotion.",
      "Day 6: Start taking bookings.",
      "Day 7: Rebook clients before they leave for their next 6-week trim."
    ]
  },
  {
    id: "v-meal",
    title: "PrepDone Meal-Prep",
    description: "Healthy Macro-Counted Meal Prep Deliveries",
    capital: 300,
    category: "Food",
    availability: "Weekend",
    startupCost: "£300",
    breakEven: "Breaks even in 16 weeks",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Microwave-safe prep containers (300 units)", cost: "£60", vendor: "Caterbox", why: "Packaging" },
      { item: "Thermal delivery bags", cost: "£30", vendor: "Amazon", why: "Food safety during transit" },
      { item: "Bulk ingredients (Chicken, Rice, Veg) & Spices", cost: "£150", vendor: "Costco / Bookers", why: "Raw materials" },
      { item: "Digital food scales", cost: "£15", vendor: "Argos", why: "Accurate macro tracking" }
    ],
    rules: [
      "MANDATORY: Local authority food business registration.",
      "MANDATORY: Level 2 Food Hygiene Certificate.",
      "MANDATORY: Strict allergen control and labelling."
    ],
    plan: [
      "Day 1: Register with council. Design a simple menu of 4 meals.",
      "Day 2: Calculate exact macros (Protein, Carbs, Fats) for each meal.",
      "Day 3: Do a test cook. Take high-quality photos of the meals in the prep boxes.",
      "Day 4: Print flyers with the menu and macros. Drop them at local independent gyms.",
      "Day 5: Post on Instagram tagging local fitness influencers.",
      "Day 6: Take pre-orders for Sunday delivery.",
      "Day 7: Prep all meals on Sunday, deliver Sunday evening for the week ahead."
    ]
  },
  {
    id: "v-furn",
    title: "Reclaimed Furniture Flipping",
    description: "Upcycling and Reselling Vintage Furniture",
    capital: 300,
    category: "Reselling",
    availability: "Flexible",
    startupCost: "£300",
    breakEven: "Breaks even in 8 pieces",
    image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Orbital sander & sandpaper variety", cost: "£50", vendor: "Screwfix", why: "Prep work" },
      { item: "Frenchic/Chalk paint & top coats", cost: "£60", vendor: "Frenchic online", why: "High quality finish without priming" },
      { item: "New hardware (knobs, handles)", cost: "£40", vendor: "Amazon / Zara Home", why: "Modernizing old pieces" },
      { item: "Initial furniture pieces to flip", cost: "£100", vendor: "Facebook Marketplace / Charity shops", why: "Inventory" }
    ],
    rules: [
      "WARNING: Check for woodworm in old furniture before bringing it into your home.",
      "WARNING: Wear a proper mask (FFP3) when sanding old paint, it may contain lead."
    ],
    plan: [
      "Day 1: Source 2 solid wood bedside tables or a chest of drawers on Facebook Marketplace for cheap/free.",
      "Day 2: Sand, clean, and prep the furniture.",
      "Day 3: Paint 2-3 coats. Let dry.",
      "Day 4: Apply top coat and add new hardware.",
      "Day 5: Stage the furniture nicely in your house with a plant and good lighting. Take photos.",
      "Day 6: List on Facebook Marketplace, eBay, and Etsy (if shipping is possible).",
      "Day 7: Use profits to buy better quality starting pieces."
    ]
  },
  {
    id: "v4",
    title: "WriteRight AI",
    description: "AI-Assisted Copywriting & Website Content Service",
    capital: 300,
    category: "Digital",
    availability: "Flexible",
    startupCost: "£300",
    breakEven: "Breaks even in 2 clients",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "AI writing tool subscription", cost: "£20", vendor: "Direct", why: "Drafting/speed layer" },
      { item: "Portfolio website", cost: "£40", vendor: "Namecheap", why: "Credibility, shows your own copy skills" },
      { item: "LinkedIn Premium (1 month trial)", cost: "£0", vendor: "LinkedIn", why: "B2B lead generation" }
    ],
    rules: [
      "MANDATORY: HMRC self-employment registration once over £1,000/yr.",
      "MANDATORY: Copyright and originality — AI-assisted output must be substantially edited/original.",
      "RECOMMENDED: Professional indemnity insurance once handling client-facing copy."
    ],
    plan: [
      "Day 1: Write 2 free/spec sample pieces for your own portfolio site.",
      "Day 2: Post portfolio on LinkedIn with a clear value proposition.",
      "Day 3: Message 15 local business owners on LinkedIn/Instagram.",
      "Day 4: List services on PeoplePerHour/Fiverr for inbound leads.",
      "Day 5: Offer a free 'copy audit' to 5 prospects.",
      "Day 6: Convert 1-2 audits into paid single-page projects.",
      "Day 7: Deliver, request a LinkedIn recommendation/testimonial."
    ]
  },

  // £500 Ventures
  {
    id: "v2",
    title: "DriveShine",
    description: "Pressure Washing for Driveways, Patios & Decking",
    capital: 500,
    category: "Home Services",
    availability: "Weekend",
    startupCost: "£500",
    breakEven: "Breaks even in 7 jobs",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Electric pressure washer (1800-2100W)", cost: "£120", vendor: "Halfords/Argos", why: "Core equipment" },
      { item: "Patio/surface cleaner attachment", cost: "£60", vendor: "Amazon UK", why: "Even, streak-free results" },
      { item: "Protective clothing", cost: "£45", vendor: "Vinted", why: "Job requires being soaked repeatedly" }
    ],
    rules: [
      "MANDATORY: HMRC self-employment registration once over £1,000/yr.",
      "RECOMMENDED: Public liability insurance — strongly advisable given risk of surface damage.",
      "CHECK: Wastewater runoff shouldn't be allowed into surface water drains near watercourses."
    ],
    plan: [
      "Day 1: Do a free/discounted job on your own or a relative's driveway and film a before/after reel.",
      "Day 2: Post the video on TikTok/Instagram and 3 local Facebook groups.",
      "Day 3: Leaflet a street with visibly mossy driveways.",
      "Day 4: List the service on Facebook Marketplace and Gumtree.",
      "Day 5: Contact 3 local estate/letting agents about pre-sale/pre-let driveway cleans.",
      "Day 6: Offer an Airbnb host a discounted 'turnover clean' package.",
      "Day 7: Set up Google Business Profile with before/after gallery."
    ]
  },
  {
    id: "v-bike",
    title: "FixOnTheGo",
    description: "Mobile Bicycle Repair & Servicing",
    capital: 500,
    category: "Mobile",
    availability: "Flexible",
    startupCost: "£500",
    breakEven: "Breaks even in 15 jobs",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Professional bike tool kit (Park Tool)", cost: "£200", vendor: "Halfords / Wiggle", why: "Essential tools" },
      { item: "Portable bike repair stand", cost: "£80", vendor: "Amazon", why: "Working on location" },
      { item: "Consumables (Cables, brake pads, lube)", cost: "£150", vendor: "Trade distributors", why: "Most common repair parts" }
    ],
    rules: [
      "RECOMMENDED: Public liability and professional indemnity insurance (crucial if brakes fail after you fix them).",
      "RECOMMENDED: Cytech qualification (not legally required, but builds immense trust)."
    ],
    plan: [
      "Day 1: Ensure you are confident in indexing gears and bleeding brakes.",
      "Day 2: Build a simple website offering 'At-home bike servicing from £40'.",
      "Day 3: Put flyers at local trailheads, parks, and train station cycle racks.",
      "Day 4: Post in local cycling club Facebook groups.",
      "Day 5: Run a targeted Google Ad for 'Bike repair near me' in your postcode.",
      "Day 6: Do your first jobs, collect Google reviews.",
      "Day 7: Contact local offices to offer a 'Corporate Bike Servicing Day' in their car park."
    ]
  },
  {
    id: "v-sauce",
    title: "SmallBatch Preserves",
    description: "Artisan Hot Sauce & Jam Production",
    capital: 500,
    category: "Food",
    availability: "Evening",
    startupCost: "£500",
    breakEven: "Breaks even in 135 jars",
    image: "https://images.unsplash.com/photo-1518131672697-613becd4fab5?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Glass jars and lids (wholesale)", cost: "£100", vendor: "Freeman & Harding", why: "Packaging" },
      { item: "Large stock pots, funnels, thermometer", cost: "£100", vendor: "Nisbets", why: "Production equipment" },
      { item: "Custom labels", cost: "£80", vendor: "Avery / Vistaprint", why: "Branding and allergen info" },
      { item: "Ingredients (Chillies, vinegar, fruit)", cost: "£150", vendor: "Wholesale markets", why: "Raw materials" }
    ],
    rules: [
      "MANDATORY: Local authority food business registration (home kitchen inspection).",
      "MANDATORY: Exact labelling (Ingredients by weight, allergens in bold, best before dates).",
      "MANDATORY: pH testing log to prove the product is shelf-stable (prevents botulism in hot sauce)."
    ],
    plan: [
      "Day 1: Register kitchen with local council. Take Level 2 Hygiene course.",
      "Day 2: Test 3 recipes and finalize the best one. Test pH levels.",
      "Day 3: Design and order compliant labels.",
      "Day 4: Cook a full batch of 50 jars.",
      "Day 5: Photograph the jars aesthetically. Setup an Instagram.",
      "Day 6: Book a stall at a local farmers market or craft fair.",
      "Day 7: Pitch to local independent farm shops to stock your product wholesale."
    ]
  },
  {
    id: "v-arbitrage",
    title: "NicheStock Arbitrage",
    description: "Amazon FBA Retail Arbitrage",
    capital: 500,
    category: "Reselling",
    availability: "Flexible",
    startupCost: "£500",
    breakEven: "Breaks even in 77 units",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Amazon Seller Central Professional Account (1st month)", cost: "£30", vendor: "Amazon", why: "To sell via FBA" },
      { item: "Sourcing Software (SellerAmp or Keepa)", cost: "£20", vendor: "Software", why: "To analyze rank and profitability" },
      { item: "Shipping supplies (Boxes, labels, tape)", cost: "£50", vendor: "Amazon", why: "Prepping items for FBA warehouse" },
      { item: "Initial Inventory", cost: "£350", vendor: "TK Maxx, Argos, Supermarkets", why: "Stock to sell" }
    ],
    rules: [
      "MANDATORY: HMRC registration. You are running a retail business.",
      "WARNING: Avoid 'gated' categories (like Topicals, Grocery) until you are 'ungated' with wholesale invoices.",
      "WARNING: Do not sell counterfeit items; your Amazon account will be permanently banned."
    ],
    plan: [
      "Day 1: Register for Amazon Seller Central.",
      "Day 2: Download SellerAmp/Keepa and learn how to read sales rank charts.",
      "Day 3: Go to TK Maxx/Argos and scan clearance aisles for profitable items.",
      "Day 4: Purchase £350 worth of fast-moving, high ROI items.",
      "Day 5: Prep the items (remove price tags, box them up) and create an FBA shipment.",
      "Day 6: Drop the boxes off at UPS.",
      "Day 7: Monitor sales on the Seller app as items hit the warehouse."
    ]
  },
  {
    id: "v-web",
    title: "LocalSite Builds",
    description: "One-Page Websites for Local Tradespeople",
    capital: 500,
    category: "Digital",
    availability: "Flexible",
    startupCost: "£500",
    breakEven: "Breaks even < 2 builds",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    shoppingList: [
      { item: "Framer / Webflow Pro Account", cost: "£25", vendor: "Framer", why: "Website builder" },
      { item: "Domain Name", cost: "£10", vendor: "Namecheap", why: "Your agency domain" },
      { item: "Google Ads initial budget", cost: "£300", vendor: "Google", why: "To generate leads" },
      { item: "Canva Pro", cost: "£12", vendor: "Canva", why: "For client logos/assets" }
    ],
    rules: [
      "MANDATORY: Ensure client sites have a Privacy Policy and Cookie banner to comply with GDPR.",
      "RECOMMENDED: Always take a 50% deposit before starting any build."
    ],
    plan: [
      "Day 1: Build a template one-page site for a generic 'Plumber' and 'Electrician'.",
      "Day 2: Build your own agency site showcasing these templates.",
      "Day 3: Look on Checkatrade for local tradesmen who don't have websites linked.",
      "Day 4: Cold call/email them offering a £250 complete setup.",
      "Day 5: Run a small Google Ad campaign targeting 'Website builder for tradesmen UK'.",
      "Day 6: Sign first client, collect £125 deposit, get their photos/text.",
      "Day 7: Build the site, launch it, collect final payment."
    ]
  }
];
