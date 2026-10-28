const SITE_URL = "https://my-portfolio-two-gamma-22.vercel.app";

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kush Bhardwaj",
  jobTitle: "Full-Stack Developer & Creative Engineer",
  url: SITE_URL,
  image:
    "https://res.cloudinary.com/dqwc7j44b/image/upload/v1791955577/Screenshot_2026-10-14_103024_hu2y6g.png",
  email: "mailto:kushbhardwaj8800@gmail.com",
  nationality: "Indian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "India",
  },
  sameAs: [
    "https://github.com/kush-bhardwaj",
    "https://www.linkedin.com/in/kushbhardwajdev05",
    "https://instagram.com/kush_bhardwaj_05",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Tailwind CSS",
    "Redis",
    "BullMQ",
    "Docker",
    "Full-Stack Web Development",
    "REST APIs",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kush Bhardwaj Portfolio",
  url: SITE_URL,
  description:
    "Portfolio of Kush Bhardwaj — Full-stack developer crafting sleek, interactive, and high-performance digital products and web applications.",
  author: {
    "@type": "Person",
    name: "Kush Bhardwaj",
  },
};

export function buildBreadcrumbs(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory:
      project.category === "Mobile Apps"
        ? "MobileApplication"
        : "WebApplication",
    operatingSystem: "Web, iOS, Android",
    image: project.image,
    author: {
      "@type": "Person",
      name: "Kush Bhardwaj",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function buildBlogPostSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    articleBody: post.content,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author || "Kush Bhardwaj",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Kush Bhardwaj",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.keywords ? post.keywords.join(", ") : post.category,
  };
}

