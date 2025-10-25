"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter, X } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Apps", "Mobile Apps", "APIs", "Open Source"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features including user authentication, payment processing, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      longDescription:
        "This comprehensive e-commerce platform serves thousands of users with features like real-time inventory tracking, advanced search filters, personalized recommendations, and seamless checkout experience. The admin dashboard provides detailed analytics and management capabilities.",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      category: "Web Apps",
      liveDemo: "he.com",
      github: "",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team workspaces, project timelines, and advanced filtering. Supports drag-and-drop functionality and integration with popular tools.",
      longDescription:
        "A comprehensive project management solution that helps teams organize, track, and collaborate on tasks efficiently. Features include Kanban boards, Gantt charts, time tracking, and seamless integrations.",
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      category: "Web Apps",
      liveDemo: "https://taskmaster-app.com",
      github: "https://github.com/kushbhardwaj/task-management",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description:
        "Native mobile weather application with location-based forecasts, interactive maps, severe weather alerts, and beautiful animated UI. Supports offline functionality and multiple locations.",
      longDescription:
        "A feature-rich weather application that provides accurate forecasts with beautiful visualizations. Includes hourly and weekly forecasts, weather maps, and push notifications for severe weather conditions.",
      image: "/api/placeholder/600/400",
      tech: ["React Native", "Expo", "Weather API", "AsyncStorage"],
      category: "Mobile Apps",
      liveDemo: "https://play.google.com/store/apps/weather-pro",
      github: "https://github.com/kushbhardwaj/weather-app",
      featured: false,
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, custom reports, and KPI tracking. Built for scalability with support for multiple data sources.",
      longDescription:
        "A powerful analytics platform that transforms complex data into actionable insights through interactive visualizations, custom dashboards, and automated reporting capabilities.",
      image: "/api/placeholder/600/400",
      tech: ["React", "D3.js", "Express", "Redis", "Chart.js"],
      category: "Web Apps",
      liveDemo: "https://analytics-pro.com",
      github: "https://github.com/kushbhardwaj/analytics-dashboard",
      featured: true,
    },
    {
      id: 5,
      title: "Social Media API",
      description:
        "RESTful API for social media platform with user management, post creation, real-time messaging, content moderation, and advanced search capabilities. Highly scalable architecture.",
      longDescription:
        "A robust backend API that powers social media applications with features like user authentication, post management, real-time chat, content moderation, and analytics tracking.",
      image: "/api/placeholder/600/400",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      category: "APIs",
      liveDemo: "https://api-docs.socialmedia.com",
      github: "https://github.com/kushbhardwaj/social-api",
      featured: false,
    },
    {
      id: 6,
      title: "React Component Library",
      description:
        "Open-source React component library with 50+ customizable components, comprehensive documentation, TypeScript support, and accessibility features. Used by 1000+ developers.",
      longDescription:
        "A comprehensive component library that provides developers with production-ready React components, following best practices for accessibility, performance, and customization.",
      image: "/api/placeholder/600/400",
      tech: ["React", "TypeScript", "Storybook", "Rollup", "Jest"],
      category: "Open Source",
      liveDemo: "https://ui-components-lib.com",
      github: "https://github.com/kushbhardwaj/react-components",
      featured: false,
    },
    {
      id: 7,
      title: "Fitness Tracker Mobile",
      description:
        "Cross-platform fitness tracking app with workout plans, progress tracking, social features, and health integration. Connects with wearable devices and health platforms.",
      longDescription:
        "A comprehensive fitness application that helps users track workouts, monitor progress, connect with friends, and achieve their fitness goals through personalized plans and insights.",
      image: "/api/placeholder/600/400",
      tech: ["React Native", "Firebase", "HealthKit", "Google Fit"],
      category: "Mobile Apps",
      liveDemo: "https://fittrack-mobile.com",
      github: "https://github.com/kushbhardwaj/fitness-tracker",
      featured: false,
    },
    {
      id: 8,
      title: "Blockchain Voting System",
      description:
        "Secure blockchain-based voting platform with cryptographic verification, transparent results, voter authentication, and audit trails. Built for high security and transparency.",
      longDescription:
        "A revolutionary voting system that leverages blockchain technology to ensure vote integrity, transparency, and security while maintaining voter privacy and providing verifiable results.",
      image: "/api/placeholder/600/400",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      category: "Web Apps",
      liveDemo: "https://blockchain-vote.com",
      github: "https://github.com/kushbhardwaj/blockchain-voting",
      featured: false,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, from full-stack web applications to
              mobile apps and open-source contributions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.some((p) => p.featured) && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                {filteredProjects
                  .filter((project) => project.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-blue-400/50"
                    >
                      {/* Project Image */}
                      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          <div className="text-center">
                            <div className="text-2xl font-bold mb-2">
                              {project.title}
                            </div>
                            <div className="text-sm">Project Preview</div>
                          </div>
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Action Buttons */}
                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg"
                            aria-label="GitHub"
                          >
                            <Github size={18} />
                          </a>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex gap-4">
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-600 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-blue-400 transition-all duration-300"
                          >
                            <Github size={18} />
                            Code
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </>
          )}

          {/* All Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {selectedCategory === "All"
                ? "All Projects"
                : `${selectedCategory} Projects`}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/50"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="text-lg font-semibold mb-1">
                        {project.title}
                      </div>
                      <div className="text-xs">Preview</div>
                    </div>
                  </div>

                  {/* Overlay with buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl text-gray-400 mb-2">No projects found</h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
