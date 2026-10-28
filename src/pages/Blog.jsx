import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import SEO from "../components/SEO";
import { buildBreadcrumbs } from "../utils/seoSchemas";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Engineering & Web Development Blog | Kush Bhardwaj",
        url: "https://my-portfolio-two-gamma-22.vercel.app/blog",
        description:
          "Articles and technical insights on React architecture, Node.js performance, TypeScript patterns, and modern web engineering.",
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `https://my-portfolio-two-gamma-22.vercel.app/blog/${post.slug}`,
          datePublished: post.publishDate,
        })),
      },
      buildBreadcrumbs([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
      ]),
    ],
  };

  return (
    <div className="relative min-h-screen pt-24">
      <SEO
        title="Engineering Blog & Web Insights | Kush Bhardwaj"
        description="Articles and deep dives on React scalability, Node.js performance, modern CSS, TypeScript best practices, and microservices architecture."
        keywords={[
          "Kush Bhardwaj Blog",
          "Web Development Articles",
          "React Architecture",
          "Node.js Performance",
          "TypeScript Best Practices",
          "Frontend System Design",
        ]}
        canonical="https://my-portfolio-two-gamma-22.vercel.app/blog"
        schema={blogSchema}
      />

      {/* Header */}
      <section className="section-wrap py-16 sm:py-20">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="space-y-6"
          >
            <span className="eyebrow">Engineering Insights</span>
            <h1 className="section-title max-w-4xl">
              Thoughts on architecture, web performance, and developer craft.
            </h1>
            <p className="section-copy max-w-3xl">
              Technical breakdowns, real-world development patterns, and
              practical learnings from building scalable web applications.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-transparent bg-white text-slate-950 shadow-[0_15px_40px_rgba(255,255,255,0.16)]"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="surface-card flex flex-col justify-between p-6 sm:p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#76f0d6]">
                    <span className="inline-flex items-center gap-1.5">
                      <Tag size={13} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-400">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold leading-snug text-white transition-colors hover:text-[#76f0d6]">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar size={13} />
                    {formatDate(post.publishDate)}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#76f0d6] hover:underline"
                  >
                    Read article
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="surface-card-strong rounded-2xl p-8 sm:p-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-[#76f0d6] bg-clip-text text-transparent">
              Stay in the Loop
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Get the latest engineering deep dives and production patterns
              directly in your inbox. No fluff, unsubscribe at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#76f0d6] transition-colors"
              />
              <button className="btn-primary justify-center">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
