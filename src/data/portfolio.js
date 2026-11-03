import profilePhoto from "../assets/profile.jpg";

/**
 * All site copy lives here. Sections only render this file.
 * Replace src/assets/profile.jpg to change the portrait.
 * The downloadable CV is public/Jay_Ponkiya_Resume.pdf.
 * Do not add a date of birth.
 */

const experience = [
  {
    role: "Sr. Frontend Developer",
    company: "Binstellar Technologies Pvt. Ltd.",
    dates: "Mar 2025 – Present",
    location: "Ahmedabad",
  },
  {
    role: "Shopify and WordPress Front End Developer",
    company: "BrainBox Infoway Pvt Ltd.",
    dates: "Jun 2023 – Feb 2025",
    location: "Ahmedabad",
  },
  {
    role: "Web Designer",
    company: "Truesys Fintech",
    dates: "Jan 2020 – May 2023",
    location: "Rajkot",
  },
];

const shopifyProjects = [
  {
    name: "Walkie Talkie Depot",
    domain: "walkietalkiedepot.com",
    type: "E-commerce store, US two-way radio retailer",
    features: [
      "Collections by radio type, accessories and industry",
      "Team packs and promo offers",
      '"Find My Radio" quiz, wholesale quote and rental enquiry pages',
      "Mega-menu with product previews",
      "Auto-added free-headset promo, welcome-discount popup and SEO buying guides",
    ],
  },
  {
    name: "Magic Dose",
    domain: "drinkmagicdose.com",
    type: "D2C beverage store, US functional-beverage brand",
    features: [
      "Flavor-based product slider with 12-pack/4-pack variants and homepage add-to-cart",
      '"Subscribe & Save 15%"',
      "Customer reviews, lab-report page and sold-out states",
    ],
  },
  {
    name: "DĀLY",
    domain: "drinkdaly.com",
    type: "D2C beverage store, US energy & electrolyte drink brand",
    features: [
      'Flavor collections, variety/sample packs and "Coming Soon" pages with notify-me signup',
      "Slide-out cart with free-shipping progress bar",
      'Subscriptions and "As low as $X per can" pricing',
    ],
  },
  {
    name: "FVKD Exotics",
    domain: "fvkd.com",
    type: "D2C hemp products store, US brand",
    features: [
      "Mega-menu with promo banners",
      "Scroll-based image-sequence animation, WebP-optimized, mobile-first",
      "8+ collections with filters (category, capacity, strain type) and thumbnail mega-menu",
      "COA lab-report page, wholesale and rewards pages, state shipping notices",
      "Tiered cart discounts (20% off $100, 40% off $200), free-shipping bar, case-pack offers, reviews",
    ],
  },
  {
    name: "Poppy Playtime Merch Store",
    domain: "playtimeco.store",
    type: "Official gaming-brand merchandise store",
    features: [
      "Plush, apparel and accessories collections with shop-by-character browsing",
      "Animated intro, rotating announcement bar, video-preview carousel and character showcase",
    ],
  },
  {
    name: "MOSCOT",
    domain: "moscot.com",
    type: "E-commerce store, premium eyewear brand",
    features: [
      "Multi-currency (60+ regions), pre-order/sold-out states, wishlist, quick view, slide-out cart",
      "Multi-level mega-menu with collections by category, color, shape and size",
      '"The LAB" frame customizer with Custom Made Tints, virtual try-on, polarized comparison slider',
      "Multi-language/country selection, shop locator, exam booking links, wholesale portal link",
    ],
  },
  {
    name: "Duward",
    domain: "duward.com",
    type: "E-commerce store, Spanish-language watch & jewelry brand",
    features: [
      "Mega-menu by gender, collection and gift budget",
      "Hero slider",
      "Best-seller carousels with color-variant image switching, quick add-to-cart, review ratings",
      "Free-shipping banner (over 50 EUR), store locator and brand-story section",
    ],
  },
];

const wordpressProjects = [
  {
    name: "Ployiperks",
    domain: "portal.ployiperks.com",
    type: "B2B business portal",
    features: [
      "Custom portal with validated multi-step business registration (company, business, user details)",
      "Admin approval workflow and secure business login",
      "GDPR cookie consent, Terms & Privacy Policy pages",
    ],
    tech: ["WordPress", "PHP", "JavaScript", "jQuery", "MySQL"],
  },
  {
    name: "Perfect Smile Dental",
    domain: "perfectsmile-dental.com",
    type: "Multi-clinic website, UK dental group with 28 clinics",
    features: [
      "Treatment pages, clinic locator and region-based clinic selection across 6 regions",
      "Online booking, finance calculator and enquiry forms",
      "WebP + CDN for speed and SEO",
    ],
    tech: ["WordPress", "PHP", "JavaScript", "MySQL"],
  },
  {
    name: "Prime Glaze",
    domain: "primeglaze.co.uk",
    type: "Glazing company website, UK",
    features: [
      "Residential and Commercial sections covering products, services, gallery and projects",
      'Product category pages, "Get a free quote" flow and contact forms',
      "SEO-friendly, mobile-first",
    ],
    tech: ["WordPress", "Elementor", "PHP", "JavaScript", "MySQL"],
  },
  {
    name: "Bower Products",
    domain: "bower.co.uk",
    type: "B2B e-commerce website, UK manufacturer",
    features: [
      "Categorized catalogues (Pest Control, Washroom, Hospitality, UVC)",
      "Product search, customer login",
      "Distributor application form, downloadable catalogues, GDPR cookie consent",
    ],
    tech: ["WordPress", "WooCommerce", "Elementor", "PHP", "MySQL"],
  },
  {
    name: "The Auto Library",
    domain: "theautolibrary.com",
    type: "Automotive knowledge archive platform",
    features: [
      "Manuals and documents by manufacturer, model and year, with dynamic dependent search",
      "User accounts, community forum and moderated user submissions",
      "Light/dark mode and list/visual browsing views",
    ],
    tech: ["WordPress", "Elementor", "PHP", "JavaScript", "AJAX", "MySQL"],
  },
  {
    name: "Insulation Point",
    domain: "insulationpoint.co.uk",
    type: "Building-materials e-commerce store, UK",
    features: [
      "1,000+ products across multi-level categories and brands",
      "Cart, checkout, customer accounts",
      '"Request a Quote" list and bulk-offer pages for trade customers',
      "Blog, FAQs and enquiry form with delivery postcode and quantity fields",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "jQuery", "MySQL"],
  },
  {
    name: "Pratt Homes",
    domain: "prattmodular.com",
    type: "Modular & manufactured home builder, Texas",
    features: [
      "Listings by type (modular, tiny, manufactured, cottage, farmhouse), clearance deals, four-state location pages",
      'User login with "My Favorite Homes"',
      '"Book a Home Consult" and "Request Tour" forms',
      "English/Spanish support, financing page, blog and gallery",
    ],
    tech: ["WordPress", "Elementor", "PHP", "JavaScript", "jQuery", "MySQL"],
  },
];

const skillGroups = [
  {
    title: "CMS & Platforms",
    items: ["WordPress", "Shopify", "BigCommerce"],
  },
  {
    title: "Front-End",
    items: ["HTML5", "CSS3", "Bootstrap 5", "SCSS", "JavaScript", "jQuery"],
  },
  {
    title: "Back-End",
    items: ["PHP", "Shopify Liquid", "Twig (Timber)", "Advanced Custom Fields (ACF)"],
  },
  {
    title: "Design & Tools",
    items: ["PSD to HTML Conversion", "Photoshop", "Figma to HTML", "Git (Version Control)"],
  },
  {
    title: "Other Skills",
    items: [
      "Responsive Web Design",
      "UI/UX Understanding",
      "Website Performance Optimization",
      "Cross-Browser Compatibility",
    ],
  },
];

export const portfolio = {
  name: "Jay Ponkiya",
  title: "Sr. Front End Developer (Shopify and WordPress)",
  location: "Ahmedabad, India",
  email: "ponkiyajayu22@gmail.com",
  phone: "9512382358",
  resume: "/Jay_Ponkiya_Resume.pdf",
  profileImage: profilePhoto,
  profileAlt: "Portrait of Jay Ponkiya",
  roles: ["Shopify Developer", "WordPress Developer", "Sr. Front End Developer"],
  heroIntro:
    "Results-driven Web Developer with 5.5+ years of experience in web application development and eCommerce solutions. Specialized in WordPress, Shopify, and BigCommerce development.",
  summary:
    "Results-driven Web Developer with 5.5+ years of experience in web application development and eCommerce solutions. Specialized in WordPress, Shopify, and BigCommerce development with strong front-end expertise in HTML5, CSS3, SCSS, JavaScript, and jQuery. Experienced in building responsive, user-friendly, high-performance websites. Proven ability to lead teams, mentor developers, and convert client requirements into effective technical solutions.",
  highlights: [
    "5.5+ years of experience in web application development and front-end implementation",
    "Strong expertise in WordPress, Shopify and BigCommerce, including custom themes and dynamic functionality",
    "Proficient in HTML5, CSS3, SCSS, JavaScript, jQuery and PSD/Figma to responsive HTML conversion",
    "Builds visually appealing, responsive, user-friendly websites with clean UI/UX practices",
    "Skilled in turning client requirements into effective design and technical solutions",
    "Team player with leadership abilities, mentoring experience, strong analytical and problem-solving skills",
  ],
  stats: [
    { value: "5.5+", label: "Years experience" },
    {
      value: String(shopifyProjects.length + wordpressProjects.length),
      label: "Delivered projects",
      detail: `${shopifyProjects.length} Shopify + ${wordpressProjects.length} WordPress`,
    },
    { value: String(experience.length), label: "Companies" },
  ],
  skillGroups,
  marquee: skillGroups.flatMap((group) => group.items),
  experience,
  projectGroups: [
    {
      id: "shopify",
      label: "Shopify",
      role: "Shopify Developer",
      tech: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "JSON"],
      items: shopifyProjects,
    },
    {
      id: "wordpress",
      label: "WordPress",
      role: "Web Developer, WordPress / WooCommerce",
      tech: ["PHP", "JavaScript", "jQuery", "HTML5", "CSS3", "MySQL"],
      items: wordpressProjects,
    },
  ],
  education: [
    {
      credential: "Bachelor of Computer Application",
      school: "Saurashtra University",
      dates: "2017 – 2020",
      location: "Rajkot",
    },
    {
      credential: "Higher Secondary (12th)",
      school: "Imperial Science School",
      dates: "2016 – 2017",
      location: "Dhoraji",
    },
  ],
  certificates: [
    "Free Code Camp Course: HTML5, CSS, Bootstrap",
    "Udemy: Responsive Web Design Essentials Course (HTML5, CSS3, Bootstrap)",
  ],
  languages: ["English", "Hindi", "Gujarati"],
  interests: ["Travelling", "Listening Music"],
  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "background", label: "Background" },
    { id: "contact", label: "Contact" },
  ],
  actions: {
    projects: "View Projects",
    resume: "Download Resume",
    contact: "Contact",
    visit: "Visit site",
    backToTop: "Back to top",
    send: "Send message",
    sending: "Sending…",
  },
};

export const sectionIds = ["home", ...portfolio.nav.map((item) => item.id)];
