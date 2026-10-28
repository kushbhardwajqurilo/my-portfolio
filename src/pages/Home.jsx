import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import { PERSON_SCHEMA, WEBSITE_SCHEMA } from "../utils/seoSchemas";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [PERSON_SCHEMA, WEBSITE_SCHEMA],
  };

  return (
    <div>
      <SEO
        title="Kush Bhardwaj | Full-Stack Developer & Creative Engineer"
        description="Portfolio of Kush Bhardwaj — Full-stack developer crafting sleek, interactive, and high-performance digital products and web applications using React, Next.js, and Node.js."
        keywords={[
          "Kush Bhardwaj",
          "Full-Stack Developer",
          "Frontend Engineer",
          "React Developer",
          "Next.js Developer",
          "Node.js Developer",
          "Creative Engineer",
          "Software Engineer Portfolio",
          "Web Developer New Delhi",
        ]}
        canonical="https://my-portfolio-two-gamma-22.vercel.app/"
        schema={homeSchema}
      />
      <Hero />
    </div>
  );
}
