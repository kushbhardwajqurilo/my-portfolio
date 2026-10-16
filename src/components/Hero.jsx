import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Layers3,
  Smartphone,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const values = [
    {
      title: "Narrative-first UI",
      copy: "Interfaces that communicate clearly before they decorate.",
      icon: Layers3,
    },
    {
      title: "Fast product delivery",
      copy: "Practical engineering decisions that keep momentum high.",
      icon: Sparkles,
    },
    {
      title: "Responsive by default",
      copy: "Thoughtful interactions across desktop, tablet, and mobile.",
      icon: Smartphone,
    },
  ];

  return (
    <div className="relative">
      <section className="section-wrap pb-20 pt-32 sm:pt-36">
        <div className="section-inner">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr,0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <span className="eyebrow">
                Full-stack developer based in India
              </span>
              <div className="space-y-6">
                <h1 className="display-title max-w-4xl">
                  Building standout interfaces that feel premium, fast, and
                  alive.
                </h1>
                <p className="section-copy max-w-2xl">
                  I design and ship polished web and mobile products with a
                  focus on clear storytelling, strong UX decisions, and
                  production-ready engineering.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  Explore projects
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Book a call
                  <Mail size={18} />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: "3+", label: "Years building products" },
                  { value: "10+", label: "Production launches" },
                  { value: "100%", label: "Responsive-first thinking" },
                ].map((stat) => (
                  <div key={stat.label} className="metric-tile">
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-slate-300">
                <a
                  href="https://github.com/kush-bhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2.5 text-sm"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kushbhardwajdev05?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2.5 text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="surface-card-strong relative overflow-hidden p-6 sm:p-8"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(118,240,214,0.25),transparent_68%)] blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,155,103,0.25),transparent_68%)] blur-3xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="pill">Current focus</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    UI + Engineering
                  </span>
                </div>

                <div className="media-frame ">
                  <img
                    src="https://res.cloudinary.com/dqwc7j44b/image/upload/v1777014525/ChatGPT_Image_Dec_26_2025_01_57_05_PM_qzwulh.png"
                    alt="Kush Bhardwaj portrait"
                    className="h-[26rem] w-sm object-cover"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="metric-tile">
                    <div className="mb-3 flex items-center gap-2 text-[#76f0d6]">
                      <Globe2 size={16} />
                      <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                        Web experiences
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-slate-300">
                      Landing pages, dashboards, product sites, and full-stack
                      applications with memorable interactions.
                    </p>
                  </div>
                  <div className="metric-tile">
                    <div className="mb-3 flex items-center gap-2 text-[#ff9b67]">
                      <Smartphone size={16} />
                      <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                        Mobile flows
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-slate-300">
                      Mobile-friendly systems and app experiences designed for
                      clarity, speed, and confidence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-10">
        <div className="section-inner">
          <div className="grid gap-5 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="surface-card p-6"
                >
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-[#76f0d6]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {value.copy}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20">
        <div className="section-inner space-y-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className="eyebrow">Selected work</span>
              <h2 className="section-title max-w-3xl">
                Projects built to balance visual character with real product
                needs.
              </h2>
            </div>
            <Link to="/projects" className="btn-ghost">
              View the full project archive
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="surface-card overflow-hidden"
              >
                <div className="media-frame rounded-none border-x-0 border-t-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="pill">{project.category}</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="pill border-white/8 text-[11px] tracking-[0.18em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.links[0]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-4 py-2.5 text-sm"
                    >
                      Open project
                      <ArrowRight size={16} />
                    </a>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="btn-ghost"
                    >
                      Case study
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pb-24 pt-4">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card-strong grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center"
          >
            <div className="space-y-4">
              <span className="eyebrow">Ready to build</span>
              <h2 className="section-title max-w-2xl">
                If you want a product that feels sharp, fast, and custom,
                let&apos;s talk.
              </h2>
              <p className="section-copy max-w-2xl">
                I can help with landing pages, dashboards, product redesigns,
                frontend systems, and full-stack delivery.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link to="/contact" className="btn-primary">
                Start a conversation
                <Mail size={18} />
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn more about me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
