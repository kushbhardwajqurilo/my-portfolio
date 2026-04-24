import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Server,
  GitBranch,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: [
        { name: "React", level: 95, color: "from-cyan-300 to-cyan-500" },
        { name: "Next.js", level: 90, color: "from-slate-300 to-slate-500" },
        { name: "TailwindCSS", level: 85, color: "from-teal-300 to-teal-500" },
        { name: "TypeScript", level: 80, color: "from-sky-400 to-blue-600" },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      technologies: [
        { name: "Node.js", level: 90, color: "from-emerald-300 to-emerald-600" },
        { name: "Express.js", level: 85, color: "from-slate-300 to-slate-500" },
        { name: "Python", level: 75, color: "from-amber-300 to-orange-500" },
        { name: "REST APIs", level: 90, color: "from-orange-300 to-orange-500" },
      ],
    },
    {
      category: "Database",
      icon: Database,
      technologies: [
        { name: "MongoDB", level: 80, color: "from-emerald-400 to-emerald-700" },
        { name: "PostgreSQL", level: 75, color: "from-sky-400 to-blue-700" },
        { name: "MySQL", level: 80, color: "from-rose-300 to-rose-500" },
        { name: "Firebase", level: 85, color: "from-amber-300 to-orange-500" },
      ],
    },
    {
      category: "Tools & Others",
      icon: GitBranch,
      technologies: [
        { name: "Git", level: 90, color: "from-orange-300 to-orange-500" },
        { name: "Docker", level: 75, color: "from-cyan-300 to-blue-500" },
        { name: "AWS", level: 70, color: "from-amber-300 to-amber-600" },
        { name: "Vercel", level: 85, color: "from-slate-300 to-slate-500" },
      ],
    },
  ];

  const timeline = [
    {
      type: "work",
      title: "Backend Developer",
      company: "Qurilo Private Limited",
      location: "Nawada New Delhi, Delhi, India",
      period: "2025 - Present",
      description:
        "Developing scalable web applications using Node.js, Express, and cloud technologies while building RESTful APIs, improving performance, and collaborating closely with frontend teams.",
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "Appins Technology",
      location: "Remote",
      period: "2022 - 2024",
      description:
        "Built and maintained multiple client projects using modern JavaScript frameworks, working across UI implementation and backend integrations.",
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Sugam Housing Pvt. Ltd.",
      location: "Dwarka Mor New Delhi, India",
      period: "2021 - 2022",
      description:
        "Started my career by building responsive websites and learning the foundations of product-focused frontend development.",
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications",
      company: "Delhi University",
      location: "New Delhi, India",
      period: "2019 - 2022",
      description:
        "Built a strong foundation in programming, data structures, and software engineering principles during undergraduate study.",
    },
  ];

  return (
    <div className="relative pt-24">
      <section className="section-wrap py-16 sm:py-20">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-center"
          >
            <div className="media-frame">
              <img
                src="https://res.cloudinary.com/dqwc7j44b/image/upload/v1777014525/ChatGPT_Image_Dec_26_2025_01_57_05_PM_qzwulh.png"
                alt="Kush Bhardwaj portrait"
                className="h-full min-h-[24rem] w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <span className="eyebrow">About me</span>
              <h1 className="section-title max-w-3xl">
                I build digital products where strong visual taste meets practical engineering.
              </h1>
              <p className="section-copy max-w-3xl">
                I am a full-stack developer with 3+ years of experience crafting
                products that feel modern, intuitive, and reliable. I enjoy turning
                complex flows into clear user experiences and building systems that
                stay maintainable as they grow.
              </p>
              <p className="section-copy max-w-3xl">
                My work sits at the intersection of frontend polish and backend
                logic, which means I care just as much about motion, hierarchy, and
                conversion as I do about API design, performance, and scale.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="metric-tile">
                  <p className="text-2xl font-bold">3+</p>
                  <p className="mt-1 text-sm text-slate-400">Years experience</p>
                </div>
                <div className="metric-tile">
                  <p className="text-2xl font-bold">Full stack</p>
                  <p className="mt-1 text-sm text-slate-400">Frontend to backend</p>
                </div>
                <div className="metric-tile">
                  <p className="text-2xl font-bold">Remote ready</p>
                  <p className="mt-1 text-sm text-slate-400">Teams and clients</p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">
                Get in touch
                <ExternalLink size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 space-y-4"
          >
            <span className="eyebrow">Capabilities</span>
            <h2 className="section-title max-w-3xl">
              A balanced toolkit across frontend, backend, data, and delivery.
            </h2>
            <p className="section-copy max-w-2xl">
              I use the right stack for the product, but I care most about clarity,
              maintainability, and the overall experience users feel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skills.map((skillCategory, categoryIndex) => {
              const Icon = skillCategory.icon;
              return (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="surface-card p-6"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[#76f0d6]">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <div key={tech.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-300">{tech.name}</span>
                          <span className="text-sm text-gray-400">{tech.level}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-800/80">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + techIndex * 0.1,
                            }}
                            className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 pb-24">
        <div className="section-inner max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 space-y-4"
          >
            <span className="eyebrow">Journey</span>
            <h2 className="section-title max-w-3xl">
              Experience and education that shaped how I build.
            </h2>
            <p className="section-copy max-w-2xl">
              I have worked across backend, frontend, and full-stack roles, which
              gives me a broader product perspective and a strong delivery mindset.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#76f0d6] via-white/15 to-[#ff9b67] md:left-1/2 md:-translate-x-px" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 h-4 w-4 rounded-full border-4 border-[#08111f] bg-gradient-to-r from-[#76f0d6] to-[#ff9b67] md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="surface-card p-6">
                    <div
                      className={`mb-2 flex items-center gap-2 ${
                        item.type === "work" ? "text-[#76f0d6]" : "text-[#ff9b67]"
                      }`}
                    >
                      {item.type === "work" ? <Code2 size={18} /> : <Calendar size={18} />}
                      <span className="text-sm font-medium uppercase tracking-wide">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="mb-1 text-xl font-semibold text-white">{item.title}</h3>
                    <div className="mb-2 font-medium text-gray-300">{item.company}</div>
                    <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                    </div>
                    <p className="leading-relaxed text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
