import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://my-portfolio-two-gamma-22.vercel.app";
const DEFAULT_TITLE = "Kush Bhardwaj | Full-Stack Developer & Creative Engineer";
const DEFAULT_DESCRIPTION =
  "Portfolio of Kush Bhardwaj — Full-stack developer crafting sleek, interactive, and high-performance digital products and web applications using React, Next.js, and Node.js.";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dqwc7j44b/image/upload/v1791955577/Screenshot_2026-10-14_103024_hu2y6g.png";
const DEFAULT_KEYWORDS =
  "Kush Bhardwaj, Full-Stack Developer, Frontend Engineer, React, Next.js, Node.js, JavaScript, TypeScript, Web Development, Portfolio";

function setOrCreateMeta(attribute, key, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setOrCreateLink(rel, href) {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = "Kush Bhardwaj - Full-Stack Developer Portfolio",
  article,
  schema,
  noindex = false,
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    const formattedTitle = title
      ? title.includes("Kush Bhardwaj")
        ? title
        : `${title} | Kush Bhardwaj`
      : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Canonical URL
    const canonicalUrl =
      canonical ||
      `${SITE_URL}${location.pathname === "/" ? "" : location.pathname}`;
    setOrCreateLink("canonical", canonicalUrl);

    // 3. Primary Meta Tags
    setOrCreateMeta("name", "title", formattedTitle);
    setOrCreateMeta("name", "description", description);
    const keywordsString = Array.isArray(keywords)
      ? keywords.join(", ")
      : keywords;
    setOrCreateMeta("name", "keywords", keywordsString);
    setOrCreateMeta("name", "author", "Kush Bhardwaj");

    // 4. Robots Directives
    const robotsContent = noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
    setOrCreateMeta("name", "robots", robotsContent);
    setOrCreateMeta("name", "googlebot", robotsContent);

    // 5. Open Graph Meta Tags
    setOrCreateMeta("property", "og:site_name", "Kush Bhardwaj Portfolio");
    setOrCreateMeta("property", "og:type", ogType);
    setOrCreateMeta("property", "og:title", formattedTitle);
    setOrCreateMeta("property", "og:description", description);
    setOrCreateMeta("property", "og:url", canonicalUrl);
    setOrCreateMeta("property", "og:image", ogImage);
    setOrCreateMeta("property", "og:image:secure_url", ogImage);
    setOrCreateMeta("property", "og:image:alt", ogImageAlt);
    setOrCreateMeta("property", "og:locale", "en_US");

    // 6. Twitter Card Meta Tags
    setOrCreateMeta("name", "twitter:card", "summary_large_image");
    setOrCreateMeta("name", "twitter:title", formattedTitle);
    setOrCreateMeta("name", "twitter:description", description);
    setOrCreateMeta("name", "twitter:image", ogImage);
    setOrCreateMeta("name", "twitter:image:alt", ogImageAlt);
    setOrCreateMeta("name", "twitter:creator", "@kush_bhardwaj_05");

    // 7. Article specific tags
    if (ogType === "article" && article) {
      if (article.publishedTime) {
        setOrCreateMeta(
          "property",
          "article:published_time",
          article.publishedTime
        );
      }
      if (article.author) {
        setOrCreateMeta("property", "article:author", article.author);
      }
      if (article.section) {
        setOrCreateMeta("property", "article:section", article.section);
      }
      if (Array.isArray(article.tags)) {
        article.tags.forEach((tag) => {
          setOrCreateMeta("property", "article:tag", tag);
        });
      }
    }

    // 8. JSON-LD Structured Data
    let scriptTag = document.getElementById("seo-json-ld");
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "seo-json-ld";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [
    title,
    description,
    keywords,
    canonical,
    ogType,
    ogImage,
    ogImageAlt,
    article,
    schema,
    noindex,
    location.pathname,
  ]);

  return null;
}

