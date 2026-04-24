import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const getPrimaryProjectLink = (project) =>
    project.links?.[0]?.url || project.github || "#";

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative pt-24">
      <section className="section-wrap py-16 sm:py-20">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="space-y-6"
          >
            <span className="eyebrow">Project library</span>
            <h1 className="section-title max-w-4xl">
              A curated set of builds across web products, mobile experiences, and brand-led interfaces.
            </h1>
            <p className="section-copy max-w-3xl">
              These are selected projects where I focused on usability, visual
              identity, engineering quality, and the kind of details that make a
              product feel serious.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
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
          </motion.div>
        </div>
      </section>

      <section className="section-wrap py-8">
        <div className="section-inner">
          {filteredProjects.some((project) => project.featured) && (
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-3"
              >
                <span className="eyebrow">Featured projects</span>
                <h2 className="section-title max-w-3xl">
                  The strongest examples of how I approach product design and development.
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-8">
                {filteredProjects
                  .filter((project) => project.featured)
                  .map((project, index) => (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="surface-card-strong overflow-hidden"
                    >
                      <div className="grid lg:grid-cols-[1.1fr,0.9fr]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full min-h-[18rem] w-full object-cover"
                          loading="lazy"
                        />
                        <div className="space-y-6 p-6 sm:p-8">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="pill">{project.category}</span>
                            {project.metrics.map((metric) => (
                              <span key={metric.label} className="text-xs uppercase tracking-[0.22em] text-slate-500">
                                {metric.label}: {metric.value}
                              </span>
                            ))}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                            <p className="mt-4 text-base leading-8 text-slate-300">
                              {project.longDescription}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.highlights.map((point) => (
                              <span
                                key={point}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                              >
                                {point}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="pill border-white/10 text-[11px] tracking-[0.18em]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {project.links?.map((link) => (
                              <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary px-5 py-3 text-sm"
                              >
                                <ExternalLink size={16} />
                                {link.label}
                              </a>
                            ))}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary px-5 py-3 text-sm"
                              >
                                <Github size={16} />
                                Code
                              </a>
                            )}
                            <Link to={`/projects/${project.slug}`} className="btn-secondary px-5 py-3 text-sm">
                              View case study
                              <ArrowRight size={16} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-wrap py-20">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 space-y-3"
          >
            <span className="eyebrow">All projects</span>
            <h2 className="section-title max-w-3xl">
              {selectedCategory === "All"
                ? "A broader view of the work."
                : `${selectedCategory} projects`}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="surface-card group overflow-hidden"
              >
                <div className="media-frame rounded-none border-x-0 border-t-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="pill">{project.category}</span>
                    <a
                      href={getPrimaryProjectLink(project)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                      aria-label={`${project.title} link`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.links?.map((link) => (
                      <span
                        key={link.label}
                        className="rounded-full border border-[#76f0d6]/20 bg-[#76f0d6]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a7ffef]"
                      >
                        {link.label}
                      </span>
                    ))}
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="pill border-white/8 text-[11px] tracking-[0.18em]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link to={`/projects/${project.slug}`} className="btn-ghost">
                      Open case study
                      <ArrowRight size={16} />
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="surface-card mt-10 py-16 text-center"
            >
              <h3 className="text-2xl font-bold text-white">No projects found</h3>
              <p className="mt-3 text-slate-400">Try switching to another category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
