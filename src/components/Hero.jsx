import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-700" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative inline-block"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full p-[3px] bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 animate-gradient-border">
                <div
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dqwc7j44b/image/upload/v1761132911/IMG20230806101921_svnvwv.jpg)",
                  }}
                ></div>
              </div>
            </motion.div>

            {/* Name with Glowing Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Kush Bhardwaj
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting sleek, interactive digital experiences
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Full-Stack Developer specializing in React, Node.js, and modern
              web technologies. I build scalable applications that deliver
              exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <a
                href="/projects"
                className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                {/* moving border */}
                <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-[2px] opacity-0 group-hover:opacity-100 group-hover:animate-border-once pointer-events-none">
                  <span className="block w-full h-full bg-gray-900 rounded-full"></span>
                </span>

                {/* button content */}
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>

                {/* button background */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></span>
              </a>

              <a
                href="/contact"
                className="group px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:text-white hover:border-blue-400 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform"
                />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center space-x-6"
            >
              <a
                href="https://github.com/kushbhardwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kushbhardwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A selection of my recent projects showcasing modern web
              development techniques and clean design principles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                image:
                  "https://res.cloudinary.com/dqwc7j44b/image/upload/v1761130563/bs_z8ue9v.png",
              },
              {
                title: "Debt Relief India",
                description:
                  "Collaborative task management tool with real-time updates",
                tech: ["Next.js", "Socket.io", "PostgreSQL"],
                image:
                  "https://res.cloudinary.com/dqwc7j44b/image/upload/v1761131365/Screenshot_2025-10-22_163904_evycmh.png",
              },
              {
                title: "Lava Landing Page",
                description:
                  "Data visualization dashboard with interactive charts and reports",
                tech: ["React", "Tailwind", "Express", "Redis"],
                image:
                  "https://res.cloudinary.com/dqwc7j44b/image/upload/v1761131653/Screenshot_2025-10-22_164337_g1zgrr.png",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-gray-400">
                  {/* <div className="text-lg font-semibold">Project Preview</div> */}
                  <img src={project?.image}></img>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              View All Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
