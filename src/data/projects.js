const slugifyTitle = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const projects = [
  {
    id: 1,
    title: "Bharat Bhakti Sangam",
    slug: slugifyTitle("Bharat Bhakti Sangam"),
    category: "Web Apps",
    featured: true,
    image:
      "https://res.cloudinary.com/dqwc7j44b/image/upload/v1777015885/reactprojects_ayvofk.png",
    description:
      "A devotional event platform that blends spiritual culture with modern booking, discovery, and checkout flows.",
    longDescription:
      "Bharat Bhakti Sangam is a high-energy event platform where bhajans, kirtans, and mantra chanting meet modern live production. The website helps visitors discover events, book tickets, and connect with the brand through a fast, polished, and trustworthy digital experience.",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Razorpay",
      "Redis",
      "BullMQ",
      "Cloudinary",
      "Bravo Email Service",
      "Namecheap VPS",
    ],
    links: [
      {
        label: "Visit Website",
        url: "https://bharatbhaktisangam.com",
      },
    ],
    metrics: [
      { label: "Experience", value: "Immersive" },
      { label: "Payments", value: "Razorpay" },
      { label: "Stack", value: "Full stack" },
    ],
    highlights: [
      "Streamlined event discovery and ticket booking journeys.",
      "Integrated payments, media handling, and queue-backed backend jobs.",
      "Balanced energetic branding with clear conversion-focused UI.",
    ],
    challenge:
      "The product needed to feel devotional, exciting, and credible at the same time while keeping the booking flow friction-free.",
    impact:
      "The final experience gives users a confident path from event discovery to checkout while reinforcing the brand's unique identity.",
  },
  {
    id: 2,
    title: "Barber Syndicate",
    slug: slugifyTitle("Barber Syndicate"),
    category: "Web Apps",
    featured: true,
    image:
      "https://res.cloudinary.com/dqwc7j44b/image/upload/v1761130563/bs_z8ue9v.png",
    description:
      "A premium wholesale cosmetics website focused on product clarity, trust, and a polished buying experience for business customers.",
    longDescription:
      "Barber Syndicate presents wholesale cosmetics and beauty products in a clean, conversion-focused layout. The site is designed to help buyers understand the catalog quickly, evaluate product quality, and move toward inquiry or purchase with confidence.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
    links: [
      {
        label: "Visit Website",
        url: "https://git-branch-m-main.vercel.app/",
      },
    ],
    metrics: [
      { label: "Audience", value: "B2B buyers" },
      { label: "Focus", value: "Wholesale" },
      { label: "Visuals", value: "Product led" },
    ],
    highlights: [
      "Structured the experience around trust, product presentation, and business intent.",
      "Used a cleaner content hierarchy to make wholesale browsing easier.",
      "Designed for responsive browsing across desktop and mobile.",
    ],
    challenge:
      "The main goal was to make a wholesale catalog feel premium and easy to scan without overwhelming business buyers.",
    impact:
      "The site gives the brand a stronger digital storefront and makes product discovery easier for wholesale inquiries.",
  },
  {
    id: 3,
    title: "Debt Relief India",
    slug: slugifyTitle("Debt Relief India"),
    category: "Mobile Apps",
    featured: true,
    image:
      "https://res.cloudinary.com/dqwc7j44b/image/upload/v1777015885/resumegen_kqzbtv.png",
    description:
      "A mobile-first debt support product with interactive calculators, better onboarding flows, and smoother input handling.",
    longDescription:
      "Debt Relief India helps users understand their debt position through guided inputs and instant estimates. The product includes a Debt Relief Meter, slider-based interactions, and improved keyboard and form behavior to make the experience clearer and less intimidating on mobile.",
    tech: ["React Native", "Node.js", "MongoDB", "Razorpay"],
    links: [
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=your.app.id",
      },
      {
        label: "iOS",
        url: "https://apps.apple.com/app/id1234567890",
      },
    ],
    metrics: [
      { label: "Platform", value: "Android + iOS" },
      { label: "Flow", value: "Calculator led" },
      { label: "UX", value: "Mobile first" },
    ],
    highlights: [
      "Introduced a Debt Relief Meter for faster debt estimation.",
      "Improved slider, keyboard, and direct-input usability.",
      "Made financial information feel more approachable on mobile.",
    ],
    challenge:
      "The product had to present sensitive financial information in a way that felt simple, helpful, and low-stress on small screens.",
    impact:
      "The updated flows improve comprehension, reduce friction in data entry, and help users reach meaningful debt insights faster.",
  },
];

export const findProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
