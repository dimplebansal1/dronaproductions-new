// Central content model for Drona Productions.
// Keeping copy in one place keeps pages consistent and easy to update.

export const COMPANY = {
  name: "Drona Productions",
  tagline: "Complete Event Management & Production",
  email: "info@dronaproductions.in",
  address: "B-36, Sector 99, Noida, Uttar Pradesh",
  partners: ["Mohit Mudgal", "Mansi Goswami"],
  socials: {
    instagram:
      "https://www.instagram.com/dronaproductionsofficial?igsh=eDFvMWFzdG40Ym51",
    facebook: "https://www.facebook.com/share/1EriBKJ4h1/",
  },
};

// Cinematic imagery (Unsplash) — configured as remote patterns in next.config.
const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroWedding: img("photo-1519741497674-611481863552"),
  heroConcert: img("photo-1470229722913-7c0e2dbbafd3"),
  heroStage: img("photo-1492684223066-81342ee5ff30"),
  wedding: img("photo-1583939003579-730e3918a45a"),
  social: img("photo-1530103862676-de8c9debad1d"),
  government: img("photo-1540575467063-178a50c2df87"),
  concert: img("photo-1501281668745-f7f57925c3b4"),
  conference: img("photo-1505373877841-8d25f7d46678"),
  production: img("photo-1516450360452-9312f5e86fc7"),
  lighting: img("photo-1516873240891-4bf014598ab4"),
  led: img("photo-1558618666-fcd25c85cd64"),
  sound: img("photo-1493225457124-a3eb161ffa5f"),
  artist: img("photo-1516280440614-37939bbacd81"),
  dj: img("photo-1571019613454-1cb2f99b2d8b"),
  dancers: img("photo-1504609773096-104ff2c73ba4"),
  team: img("photo-1511578314322-379afb476865"),
  decor: img("photo-1478146896981-b80fe463b330"),
  tent: img("photo-1464366400600-7168b8af9bc3"),
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Event Management", href: "/event-management" },
  { label: "Production", href: "/production" },
  { label: "Artist Management", href: "/artist-management" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

// 2. Main Event Categories — "We Manage"
export const EVENTS = [
  {
    slug: "weddings",
    title: "Weddings",
    short: "Timeless celebrations, flawlessly orchestrated.",
    image: IMAGES.wedding,
    intro:
      "From intimate ceremonies to multi-day destination weddings, we choreograph every ritual, every reveal and every emotion into one seamless celebration.",
    capabilities: [
      "Full wedding concept, theme & creative direction",
      "Venue scouting, layout planning & multi-day flow",
      "Décor, floral design & mandap / stage styling",
      "Guest invitations, RSVP tracking & hospitality desks",
      "Family & VIP coordination with dedicated managers",
      "Rehearsal, entry sequences & grand reveal choreography",
      "On-ground execution across every function & venue",
    ],
    highlights: [
      "Destination & luxury weddings",
      "Sangeet, Mehendi & Reception production",
      "Bespoke décor & lighting design",
    ],
  },
  {
    slug: "social-private",
    title: "Social & Private Events",
    short: "Personal milestones, elevated to an experience.",
    image: IMAGES.social,
    intro:
      "Birthdays, anniversaries, private soirées and family galas — designed with intimacy and delivered with the polish of a large-scale production.",
    capabilities: [
      "Concept, theme & experience design for private hosts",
      "Curated venue selection & bespoke décor styling",
      "Guest management, invitations & seating plans",
      "Hospitality, F&B coordination & guest relations",
      "Entertainment programming & surprise moments",
      "Discreet, single-point on-ground coordination",
    ],
    highlights: [
      "Milestone birthdays & anniversaries",
      "Private parties & family galas",
      "Themed & luxury celebrations",
    ],
  },
  {
    slug: "government-events",
    title: "Government Events",
    short: "Protocol-driven events, executed with precision.",
    image: IMAGES.government,
    intro:
      "Official ceremonies, public functions and state programmes managed with strict protocol, security awareness and dependable large-scale logistics.",
    capabilities: [
      "Protocol planning & VIP / dignitary coordination",
      "Large-scale venue & crowd flow management",
      "Stage, dais & backdrop planning to specification",
      "Multi-agency & vendor coordination on ground",
      "Registration, accreditation & guest handling",
      "End-to-end execution with contingency planning",
    ],
    highlights: [
      "Official ceremonies & inaugurations",
      "Public functions & rallies",
      "Conferences & state programmes",
    ],
  },
  {
    slug: "concerts-live-shows",
    title: "Concerts & Live Shows",
    short: "Full-scale live entertainment, end to end.",
    image: IMAGES.concert,
    intro:
      "Ticketed concerts, festivals and live shows — from artist liaison and stage production to crowd management and a show that runs to the second.",
    capabilities: [
      "Show concept, run-of-show & production design",
      "Artist liaison, hospitality & backstage management",
      "Stage, audience layout & zone planning",
      "Crowd flow, entry & safety coordination",
      "Sponsor & branding integration on ground",
      "Live show-calling & complete on-ground execution",
    ],
    highlights: [
      "Music concerts & festivals",
      "Award nights & live shows",
      "College & corporate fests",
    ],
  },
  {
    slug: "conferences-exhibitions",
    title: "Conferences & Exhibitions",
    short: "Business events that inform, connect and convert.",
    image: IMAGES.conference,
    intro:
      "Conferences, summits, product launches and exhibitions — organised for smooth delegate journeys, brand-perfect staging and measurable impact.",
    capabilities: [
      "Conference format, agenda & session flow planning",
      "Delegate registration, badging & guest management",
      "Exhibition floor planning & booth coordination",
      "Product launch staging & brand experience design",
      "Speaker, panel & AV run-through management",
      "On-ground coordination & complete execution",
    ],
    highlights: [
      "Corporate conferences & summits",
      "Product launches & dealer meets",
      "Trade fairs & exhibitions",
    ],
  },
];

// 3. Complete Event Management services
export const MANAGEMENT_SERVICES = [
  {
    title: "Event Planning & Concept",
    desc: "Strategy, theme and creative direction that shape the entire experience from the first idea.",
    icon: "Lightbulb",
    image: IMAGES.conference,
  },
  {
    title: "Venue Management",
    desc: "Scouting, negotiation, layout and end-to-end coordination with the right venue for your scale.",
    icon: "MapPin",
    image: IMAGES.tent,
  },
  {
    title: "Décor & Theming",
    desc: "Bespoke décor concepts, floral design and immersive theming that bring the vision to life.",
    icon: "Flower2",
    image: IMAGES.decor,
  },
  {
    title: "Stage & Set Design",
    desc: "Custom stage architecture and set design engineered for impact and flawless sightlines.",
    icon: "Layout",
    image: IMAGES.production,
  },
  {
    title: "Photography",
    desc: "Cinematic photography and film coverage that capture every moment worth remembering.",
    icon: "Camera",
    image: IMAGES.wedding,
  },
  {
    title: "Guest Management",
    desc: "Invitations, RSVPs, registration and seating handled with precision and warmth.",
    icon: "Users",
    image: IMAGES.social,
  },
  {
    title: "Hospitality Management",
    desc: "Travel, stay, welcome desks and guest relations for a truly effortless experience.",
    icon: "ConciergeBell",
    image: IMAGES.team,
  },
  {
    title: "On-Ground Event Management",
    desc: "Experienced ground teams that keep every zone running exactly to plan.",
    icon: "ClipboardCheck",
    image: IMAGES.lighting,
  },
  {
    title: "Event Coordination",
    desc: "Vendor, timeline and stakeholder coordination through a single point of contact.",
    icon: "Workflow",
    image: IMAGES.government,
  },
  {
    title: "Complete Event Execution",
    desc: "Full run-of-show delivery — from load-in to final teardown — with nothing left to chance.",
    icon: "CheckCircle2",
    image: IMAGES.concert,
  },
];

// 4. Production & Technical Solutions
export const PRODUCTION_SERVICES = [
  {
    title: "German Hanger & Pagoda Tent",
    desc: "Clear-span German hangars and pagoda tents for weatherproof, large-format venues.",
    icon: "TentTree",
    image: IMAGES.tent,
  },
  {
    title: "Stage Production",
    desc: "Modular, custom-built stages engineered for scale, safety and striking design.",
    icon: "Theater",
    image: IMAGES.production,
  },
  {
    title: "Professional Sound Systems",
    desc: "Line-array and point-source audio tuned for crystal-clear coverage at any capacity.",
    icon: "Speaker",
    image: IMAGES.sound,
  },
  {
    title: "Intelligent Lighting",
    desc: "Moving heads, wash, beam and pixel control programmed for cinematic atmosphere.",
    icon: "Lightbulb",
    image: IMAGES.lighting,
  },
  {
    title: "LED Walls & AV Support",
    desc: "High-resolution LED walls, projection and full AV support with live switching.",
    icon: "MonitorPlay",
    image: IMAGES.led,
  },
  {
    title: "Aluminium Trussing & Rigging",
    desc: "Certified aluminium trussing and rigging for secure, ambitious overhead builds.",
    icon: "Grid3x3",
    image: IMAGES.production,
  },
  {
    title: "Bollywood Artist Tech Specialist",
    desc: "Rider-perfect technical delivery for Bollywood and celebrity performances.",
    icon: "Star",
    image: IMAGES.artist,
  },
  {
    title: "Event Infrastructure",
    desc: "Power, flooring, barricading and complete site infrastructure, deployed reliably.",
    icon: "Boxes",
    image: IMAGES.team,
  },
];

// 5. Artist & Entertainment Management
export const ARTISTS = [
  {
    title: "Bollywood Celebrity Artists",
    desc: "Booking and full management of Bollywood singers, performers and celebrities.",
    icon: "Star",
    image: IMAGES.artist,
  },
  {
    title: "International Artists",
    desc: "Global acts and headliners, sourced and coordinated end to end.",
    icon: "Globe2",
    image: IMAGES.heroConcert,
  },
  {
    title: "DJs",
    desc: "Renowned and resident DJs to set the energy for any crowd.",
    icon: "Disc3",
    image: IMAGES.dj,
  },
  {
    title: "Live Bands",
    desc: "Versatile live bands across genres for weddings, corporates and concerts.",
    icon: "Music",
    image: IMAGES.concert,
  },
  {
    title: "Anchors / Emcees",
    desc: "Professional hosts and emcees who carry the room from start to finish.",
    icon: "Mic",
    image: IMAGES.social,
  },
  {
    title: "Dancers & Performers",
    desc: "Choreographed troupes, specialty acts and show-stopping performers.",
    icon: "PartyPopper",
    image: IMAGES.dancers,
  },
  {
    title: "Artist Coordination & Management",
    desc: "Riders, travel, hospitality and stage logistics handled seamlessly.",
    icon: "Headphones",
    image: IMAGES.team,
  },
];

// 6. Portfolio / Our Work
export const PORTFOLIO = [
  {
    title: "Royal Palace Wedding",
    category: "Weddings",
    services: "Décor · Stage Design · Guest Management · Production",
    image: IMAGES.wedding,
  },
  {
    title: "State Investors Summit",
    category: "Government Events",
    services: "Protocol · Venue · Stage · Execution",
    image: IMAGES.government,
  },
  {
    title: "Live Arena Concert",
    category: "Concerts",
    services: "Artist Liaison · Sound · Lighting · LED",
    image: IMAGES.concert,
  },
  {
    title: "Milestone Anniversary Gala",
    category: "Social Events",
    services: "Concept · Décor · Hospitality · Entertainment",
    image: IMAGES.social,
  },
  {
    title: "Global Product Launch",
    category: "Conferences",
    services: "Brand Staging · AV · Delegate Management",
    image: IMAGES.conference,
  },
  {
    title: "Festival Main Stage Build",
    category: "Production Setup",
    services: "German Hangar · Trussing · Stage · Rigging",
    image: IMAGES.production,
  },
  {
    title: "Sangeet Night Production",
    category: "Weddings",
    services: "Lighting · Sound · Performers · Show-calling",
    image: IMAGES.lighting,
  },
  {
    title: "Corporate Award Night",
    category: "Concerts",
    services: "Stage · LED Wall · Artists · Execution",
    image: IMAGES.led,
  },
];

export const PORTFOLIO_FILTERS = [
  "All",
  "Weddings",
  "Government Events",
  "Concerts",
  "Social Events",
  "Conferences",
  "Production Setup",
];

// 8. Why Choose Drona Productions
export const WHY_CHOOSE = [
  {
    title: "End-to-End Event Management",
    desc: "One team, one accountability — from concept to the final teardown.",
    icon: "Workflow",
    image: IMAGES.wedding,
  },
  {
    title: "Professional Production Team",
    desc: "Seasoned specialists across staging, sound, light and AV.",
    icon: "Users",
    image: IMAGES.production,
  },
  {
    title: "Quality Equipment",
    desc: "Owned and vetted premium gear, maintained to performance standard.",
    icon: "Boxes",
    image: IMAGES.sound,
  },
  {
    title: "Experienced On-Ground Team",
    desc: "Ground crews that anticipate, adapt and deliver under pressure.",
    icon: "ClipboardCheck",
    image: IMAGES.team,
  },
  {
    title: "Artist & Entertainment Network",
    desc: "Direct access to Bollywood, international and homegrown talent.",
    icon: "Star",
    image: IMAGES.artist,
  },
  {
    title: "Single-Point Coordination",
    desc: "A dedicated manager as your single point of contact throughout.",
    icon: "Headphones",
    image: IMAGES.conference,
  },
  {
    title: "Complete Technical Support",
    desc: "Full technical backbone, on standby, at every stage of the show.",
    icon: "Wrench",
    image: IMAGES.lighting,
  },
];

export const STATS = [
  { value: "500+", label: "Events Executed" },
  { value: "12+", label: "Years of Experience" },
  { value: "200+", label: "Artists Managed" },
  { value: "50+", label: "Cities Covered" },
];

export const EVENT_TYPES = [
  "Wedding",
  "Social / Private Event",
  "Government Event",
  "Concert / Live Show",
  "Conference / Exhibition",
  "Production / Technical",
  "Artist Booking",
  "Other",
];

export const INSTAGRAM_REELS = [
  {
    id: "reel-1",
    title: "Cinematic Concert Production",
    image: IMAGES.dj,
    link: "https://www.instagram.com/reel/DbiWWItSmxS/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "reel-2",
    title: "Luxury Wedding Decor & Vibe",
    image: IMAGES.decor,
    link: "https://www.instagram.com/reel/DbtMyDqyHvg/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "reel-3",
    title: "Massive Laser & Light Setup",
    image: IMAGES.heroStage,
    link: "https://www.instagram.com/reel/DbuxgpoyvuS/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "reel-4",
    title: "Corporate Stage Setup",
    image: IMAGES.conference,
    link: "https://www.instagram.com/reel/DcTQ1_TyH3_/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
];
