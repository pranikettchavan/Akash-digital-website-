// ── Contact Info ───────────────────────────────────────────────
export const PHONE = "+91 7066109911";
export const WHATSAPP = "917066109911"; // without +
export const WHATSAPP_URL = `https://wa.me/917066109911?text=${encodeURIComponent("Hi! 👋\nI came across your website and would love to connect.")}`;
export const EMAIL = "growmoredigisolutions@gmail.com";
export const ADDRESS =
  "Survey No 15/6, Kausar Baugh, NIBM Road, Kondhwa, Pune - 411048";
export const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRGta-UMizlkbwh_vA7m0MCtgHGoYTnqgvBSkb4pt-JD4ZGQ/viewform?usp=sharing&ouid=100883454952368947909";

// ── Brand ─────────────────────────────────────────────────────
export const BRAND = { name: "Grow More", sub: "Digi Solutions" };

// ── Social Media ───────────────────────────────────────────────
export const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/growmoredigitalsolutions",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.08)",
    border: "rgba(225,48,108,0.2)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/growmoredigisolutions/",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.08)",
    border: "rgba(10,102,194,0.2)",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100095483233237&mibextid=wwXIfr&rdid=i92WPcyUosYOCnDy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EfdKeZRJ5%2F%3Fmibextid%3DwwXIfr#",
    color: "#1877F2",
    bg: "rgba(24,119,242,0.08)",
    border: "rgba(24,119,242,0.2)",
  },
];

// ── Services data ─────────────────────────────────────────────
export const SERVICES = [
  {
    id: "social-media",
    icon: "📱",
    iconBg: "rgba(91,82,232,0.1)",
    iconBorder: "rgba(91,82,232,0.18)",
    name: "Social Media Marketing",
    short:
      "Build loyal communities and drive explosive engagement across Instagram, Facebook, LinkedIn, and more with scroll-stopping content and precision targeting.",
    desc: "Social media is where your brand personality lives. We create scroll-stopping content, manage your community, and run precision-targeted ad campaigns across all major platforms — building audiences that actually convert.",
    benefits: [
      "Strategic content calendar & brand storytelling",
      "Targeted paid social campaigns with A/B testing",
      "Community management & audience engagement",
      "Competitor analysis & monthly performance reports",
      "Reel, Story & Short-form video production",
    ],
    img: "/images/img-social-media.jpg",
    cta: "Get Social Media Plan",
    color: "#6C63FF",
  },
  {
    id: "digital-marketing",
    icon: "🚀",
    iconBg: "rgba(14,165,233,0.1)",
    iconBorder: "rgba(14,165,233,0.18)",
    name: "Digital Marketing",
    short:
      "Full-funnel campaigns across Google, Meta, and beyond — converting clicks into customers with precision ad strategies and compelling conversion funnels.",
    desc: "From Google Ads to performance marketing, we build comprehensive digital ecosystems that attract, engage, and convert your ideal customers. Every rupee is tracked, optimized, and accountable to measurable ROI.",
    benefits: [
      "Google Search, Display & Shopping Ads management",
      "Conversion funnel design & landing page optimization",
      "Retargeting campaigns to recapture lost prospects",
      "Full attribution tracking & ROI-focused reporting",
      "Integrated multi-channel marketing strategy",
    ],
    img: "/images/img-digital-marketing.jpg",
    cta: "Start Your Campaign",
    color: "#00D4FF",
  },
  {
    id: "influencer",
    icon: "⭐",
    iconBg: "rgba(233,30,140,0.1)",
    iconBorder: "rgba(233,30,140,0.18)",
    name: "Influencer Marketing",
    short:
      "Connect with verified influencers aligned with your brand values to amplify reach, build authentic trust, and drive real conversions at scale.",
    desc: "Modern consumers trust people over brands. We connect you with the right influencers — from mega to micro — whose audiences genuinely align with your ideal customer profile, creating authentic advocacy that drives decisions.",
    benefits: [
      "Curated influencer matching across niches & platforms",
      "Campaign brief creation & creative direction",
      "Contract management & deliverable tracking",
      "Performance analysis: reach, engagement & conversions",
      "Long-term brand ambassador program development",
    ],
    img: "/images/img-influencer.jpg",
    cta: "Launch Influencer Campaign",
    color: "#F72585",
  },
  {
    id: "seo",
    icon: "🔍",
    iconBg: "rgba(255,107,53,0.1)",
    iconBorder: "rgba(255,107,53,0.18)",
    name: "Search Engine Optimization",
    short:
      "Dominate Google rankings with technical SEO, content strategy, and authoritative link-building that delivers sustainable, compounding organic growth.",
    desc: "93% of all online experiences begin with a search engine. We engineer your search presence to rank at the top for keywords your customers are actively searching — delivering a compounding stream of qualified organic traffic.",
    benefits: [
      "Comprehensive technical SEO audit & implementation",
      "Keyword research, mapping & content strategy",
      "On-page optimization for every key landing page",
      "High-authority backlink acquisition & outreach",
      "Monthly ranking reports with clear growth tracking",
    ],
    img: "/images/img-services.jpg",
    cta: "Boost My Rankings",
    color: "#FF6B35",
  },
  {
    id: "web-dev",
    icon: "💻",
    iconBg: "rgba(245,197,24,0.1)",
    iconBorder: "rgba(245,197,24,0.2)",
    name: "Web Development",
    short:
      "Stunning, blazing-fast websites built to convert visitors into customers — mobile-first, performance-optimized, and SEO-ready from day one.",
    desc: "Your website is your most powerful sales tool — or your biggest missed opportunity. We design and develop stunning, fast websites architected to convert visitors into leads and leads into paying customers.",
    benefits: [
      "Custom website design with premium UI/UX",
      "Mobile-first, responsive development across all devices",
      "E-commerce stores with seamless payment integration",
      "Core Web Vitals optimized for speed & performance",
      "SEO-ready structure built in from day one",
    ],
    img: "/images/img-video.png",
    cta: "Build My Website",
    color: "#F5C518",
  },
  {
    id: "email",
    icon: "📧",
    iconBg: "rgba(37,211,102,0.1)",
    iconBorder: "rgba(37,211,102,0.18)",
    name: "Email Marketing",
    short:
      "Personalized, automated email sequences that nurture leads, recover lost sales, and build lasting customer loyalty with industry-leading open rates.",
    desc: "Email delivers the highest ROI of any digital marketing channel. We build intelligent, automated email ecosystems that nurture every lead at the perfect moment with the perfect message, driving consistent revenue growth.",
    benefits: [
      "Welcome sequences, drip campaigns & newsletters",
      "Audience segmentation & behavioral triggers",
      "Abandoned cart & re-engagement automation",
      "A/B testing of subject lines, content & CTAs",
      "Deliverability optimization & list hygiene",
    ],
    img: "/images/img-team.jpg",
    cta: "Start Email Strategy",
    color: "#25D366",
  },
];

// ── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Rohit Deshmukh",
    role: "Local Business Owner",
    initial: "R",
    color: "from-blue-500 to-primary",
    rating: 4.5,
    text: "After working with Grow More Digi Solutions, my business started getting more walk-in customers through Google. Earlier we had very low visibility, but now we appear in top results for nearby searches.",
  },
  {
    name: "Richie Ashley",
    role: "Restaurant Owner",
    initial: "R",
    color: "from-orange-400 to-red-500",
    rating: 5.0,
    text: "Thanks to Grow More Digi Solutions, our restaurant is now visible on Google and Instagram. We're getting more orders online and visitors, especially on weekends.",
  },
  {
    name: "Jessica Brown",
    role: "Business Owner",
    initial: "J",
    color: "from-pink-500 to-secondary",
    rating: 4.5,
    text: "Grow More Digi Solutions did an excellent job designing our website. The layout is clean, fast, and user-friendly. They understood our requirements perfectly and delivered exactly what we needed. We've already started getting more inquiries through the site.",
  },
  {
    name: "Kunal Verma",
    role: "Real Estate Developer",
    initial: "K",
    color: "from-green-400 to-green-700",
    rating: 4.0,
    text: "We're receiving genuine property inquiries regularly. Their targeting and lead generation strategy works really well. Also generating leads for our real estate firm.",
  },
  {
    name: "Shweta Mishra",
    role: "Business Owner",
    initial: "S",
    color: "from-purple-400 to-primary",
    rating: 4.0,
    text: "Instagram has become one of our main lead sources after working with Grow More Digi Solutions. Engagement, reach, and inquiries—all have improved. Worth the investment.",
  },
  {
    name: "James Anderson",
    role: "Business Owner",
    initial: "J",
    color: "from-accent to-primary",
    rating: 5.0,
    text: "I have partnered with this firm to grow my Instagram presence, and the results have been amazing. Their reel strategies and content ideas helped us reach a wider audience. My page looks more professional now, and we're seeing steady growth in followers and engagement.",
  },
  {
    name: "Lars Andersen",
    role: "Business Owner",
    initial: "L",
    color: "from-brand to-orange-500",
    rating: 4.0,
    text: "Grow More helped us generate consistent leads through Google Ads. Their strategy and optimization skills are excellent. We're getting better ROI compared to our previous agency.",
  },
  {
    name: "Sarah Ahmed",
    role: "Business Owner",
    initial: "S",
    color: "from-pink-400 to-red-400",
    rating: 4.5,
    text: "Before working with them, my Instagram page had very low activity. Now it's completely different—consistent posts, creative reels, and higher engagement. Followers are increasing and customers are noticing our brand.",
  },
];

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { count: 750, suffix: "+", label: "Happy Clients" },
  { count: 6, suffix: "+", label: "Years of Excellence" },
  { count: 1200, suffix: "+", label: "Projects Delivered" },
  { count: 98, suffix: "%", label: "Client Satisfaction" },
];

// ── Process ───────────────────────────────────────────────────
export const PROCESS = [
  {
    num: "01",
    icon: "🔎",
    title: "Discovery & Audit",
    desc: "We deep-dive into your brand, market, competitors, and digital footprint to uncover your biggest growth opportunities.",
  },
  {
    num: "02",
    icon: "📐",
    title: "Strategy & Planning",
    desc: "We craft a bespoke, data-backed digital strategy with clear KPIs, timelines, and measurable milestones tailored to your goals.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Execute & Launch",
    desc: "Our expert team brings the strategy to life — content, campaigns, ads, and automation — executed flawlessly across all channels.",
  },
  {
    num: "04",
    icon: "📈",
    title: "Optimize & Scale",
    desc: "We continuously monitor, test, and optimize every campaign — scaling what works and iterating fast to maximize your ROI.",
  },
];

// ── Values ────────────────────────────────────────────────────
export const VALUES = [
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc: "Every strategy is built on insights, not guesswork. We analyze, test, and optimize relentlessly to ensure maximum returns.",
  },
  {
    icon: "🎨",
    title: "Creative Excellence",
    desc: "Great marketing starts with great ideas. Our creative team produces content that captures attention and drives action.",
  },
  {
    icon: "🤝",
    title: "Client-First Always",
    desc: "Your success is our success. We build long-term partnerships based on trust, transparency, and genuine commitment.",
  },
  {
    icon: "⚡",
    title: "Agile Execution",
    desc: "We move fast and adapt faster. Our agile approach means quick launches, rapid iteration, and capturing market opportunities.",
  },
  {
    icon: "🔬",
    title: "Continuous Innovation",
    desc: "We invest in staying ahead of industry trends, emerging platforms, and algorithm changes to keep your brand competitive.",
  },
  {
    icon: "📈",
    title: "Measurable Impact",
    desc: "Clear KPIs, detailed reporting, and accountability are non-negotiable — you always know exactly where your investment goes.",
  },
];





