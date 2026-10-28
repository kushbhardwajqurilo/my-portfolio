import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, User, Share2 } from "lucide-react";
import { findPostBySlug } from "../data/blogPosts";
import SEO from "../components/SEO";
import { buildBlogPostSchema, buildBreadcrumbs } from "../utils/seoSchemas";

export default function BlogPost() {
  const { slug } = useParams();
  const post = findPostBySlug(slug);

  if (!post) {
    return (
      <section className="section-wrap pb-24 pt-32">
        <SEO
          title="Article Not Found"
          description="The requested blog article could not be found."
          noindex={true}
        />
        <div className="section-inner">
          <div className="surface-card-strong p-10 text-center">
            <h1 className="text-4xl font-bold text-white">Article not found</h1>
            <p className="mt-4 text-slate-400">
              The article you are looking for does not exist or has been moved.
            </p>
            <Link to="/blog" className="btn-primary mt-8">
              <ArrowLeft size={18} />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@graph": [
      buildBlogPostSchema(post),
      buildBreadcrumbs([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
      ]),
    ],
  };

  return (
    <div className="pt-24 pb-20">
      <SEO
        title={`${post.title} | Kush Bhardwaj`}
        description={post.excerpt}
        keywords={post.keywords || [post.category, "Web Development", "Kush Bhardwaj"]}
        canonical={`https://my-portfolio-two-gamma-22.vercel.app/blog/${post.slug}`}
        ogType="article"
        article={{
          publishedTime: post.publishDate,
          author: post.author || "Kush Bhardwaj",
          section: post.category,
          tags: post.keywords,
        }}
        schema={blogPostSchema}
      />

      <article className="section-wrap py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link to="/blog" className="btn-ghost mb-8 inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to all articles
          </Link>

          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#76f0d6]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#76f0d6]/30 bg-[#76f0d6]/10 px-3 py-1">
                <Tag size={13} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 border-y border-white/10 py-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2 text-slate-200">
                <User size={15} className="text-[#76f0d6]" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={15} />
                {formatDate(post.publishDate)}
              </span>
            </div>
          </header>

          {/* Article Body */}
          <div className="mt-10 space-y-6 text-base sm:text-lg leading-relaxed text-slate-300">
            {post.content.split("\n\n").map((block, idx) => {
              if (block.startsWith("### ")) {
                return (
                  <h2
                    key={idx}
                    className="pt-6 text-2xl font-bold tracking-tight text-white"
                  >
                    {block.replace("### ", "")}
                  </h2>
                );
              }
              return (
                <p key={idx} className="leading-8 text-slate-300">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 border-t border-white/10 pt-8 flex items-center justify-between">
            <Link to="/blog" className="btn-secondary">
              <ArrowLeft size={16} />
              All Articles
            </Link>
            <Link to="/contact" className="btn-primary">
              Discuss This Topic
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
