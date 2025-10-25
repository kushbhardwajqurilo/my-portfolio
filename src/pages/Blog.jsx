import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title:
        "Building Scalable React Applications: Best Practices and Patterns",
      excerpt:
        "Learn how to structure large-scale React applications with proper component architecture, state management, and performance optimizations.",
      content:
        "In this comprehensive guide, we'll explore the essential patterns and practices for building maintainable React applications...",
      category: "React",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      author: "Kush Bhardwaj",
      featured: true,
      slug: "building-scalable-react-applications",
    },
    {
      id: 2,
      title: "Modern CSS Techniques: From Grid to Container Queries",
      excerpt:
        "Explore the latest CSS features and how they can revolutionize your web development workflow, including CSS Grid, Flexbox, and container queries.",
      content:
        "CSS has evolved tremendously in recent years, providing developers with powerful tools for creating responsive layouts...",
      category: "CSS",
      readTime: "6 min read",
      publishDate: "2024-01-10",
      author: "Kush Bhardwaj",
      featured: true,
      slug: "modern-css-techniques",
    },
    {
      id: 3,
      title: "Node.js Performance Optimization: Tips and Tricks",
      excerpt:
        "Discover proven techniques to optimize your Node.js applications for better performance, scalability, and resource efficiency.",
      content:
        "Performance is crucial for any backend application. In this article, we'll dive deep into Node.js optimization strategies...",
      category: "Node.js",
      readTime: "10 min read",
      publishDate: "2024-01-05",
      author: "Kush Bhardwaj",
      featured: false,
      slug: "nodejs-performance-optimization",
    },
    {
      id: 4,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to new frameworks.",
      content:
        "The web development landscape is constantly evolving. Let's examine the key trends that will define the industry in 2024...",
      category: "Web Development",
      readTime: "7 min read",
      publishDate: "2024-01-01",
      author: "Kush Bhardwaj",
      featured: true,
      slug: "future-web-development-trends",
    },
    {
      id: 5,
      title: "TypeScript Best Practices for Large Teams",
      excerpt:
        "Learn how to effectively use TypeScript in enterprise environments with proper typing strategies, tooling, and team conventions.",
      content:
        "Working with TypeScript in large teams requires careful planning and adherence to best practices...",
      category: "TypeScript",
      readTime: "9 min read",
      publishDate: "2023-12-28",
      author: "Kush Bhardwaj",
      featured: false,
      slug: "typescript-best-practices",
    },
    {
      id: 6,
      title: "Microservices with Docker: A Practical Guide",
      excerpt:
        "Step-by-step guide to building and deploying microservices architecture using Docker containers and orchestration tools.",
      content:
        "Microservices architecture has become increasingly popular for building scalable applications...",
      category: "DevOps",
      readTime: "12 min read",
      publishDate: "2023-12-20",
      author: "Kush Bhardwaj",
      featured: false,
      slug: "microservices-docker-guide",
    },
  ];

  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="relative min-h-screen pt-20">
      {/* Newsletter Signup */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest articles and tutorials delivered straight to your
              inbox. No spam, unsubscribe at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
