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
  Cpu,
  Briefcase,
  GraduationCap,
  Building2,
  Sparkles,
  Award,
  BookOpen,
  Layers,
  CheckCircle2,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi, TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend Architecture",
      icon: Globe,
      description:
        "Modern, reactive, and responsive interfaces with smooth micro-interactions.",
      accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
      borderColor: "hover:border-cyan-500/40",
      technologies: [
        {
          name: "React",
          tag: "Core Library",
          icon: SiReact,
          iconColor: "text-cyan-400",
          bgHover: "group-hover:bg-cyan-500/10",
        },
        {
          name: "Next.js",
          tag: "SSR / App Router",
          icon: SiNextdotjs,
          iconColor: "text-white",
          bgHover: "group-hover:bg-white/10",
        },
        {
          name: "TailwindCSS",
          tag: "Modern Styling",
          icon: SiTailwindcss,
          iconColor: "text-teal-400",
          bgHover: "group-hover:bg-teal-500/10",
        },
        {
          name: "TypeScript",
          tag: "Type Safety",
          icon: SiTypescript,
          iconColor: "text-sky-400",
          bgHover: "group-hover:bg-sky-500/10",
        },
      ],
    },
    {
      category: "Backend & Systems",
      icon: Server,
      description:
        "High-throughput APIs, authentication, background workers, and business logic.",
      accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "hover:border-emerald-500/40",
      technologies: [
        {
          name: "Node.js",
          tag: "Runtime",
          icon: SiNodedotjs,
          iconColor: "text-emerald-400",
          bgHover: "group-hover:bg-emerald-500/10",
        },
        {
          name: "Express.js",
          tag: "Server Framework",
          icon: SiExpress,
          iconColor: "text-slate-200",
          bgHover: "group-hover:bg-slate-500/10",
        },
        {
          name: "Python",
          tag: "Scripts & Services",
          icon: SiPython,
          iconColor: "text-amber-400",
          bgHover: "group-hover:bg-amber-500/10",
        },
        {
          name: "REST APIs",
          tag: "Clean Architecture",
          icon: TbApi,
          iconColor: "text-orange-400",
          bgHover: "group-hover:bg-orange-500/10",
        },
      ],
    },
    {
      category: "Databases & Storage",
      icon: Database,
      description:
        "Data modeling, relational indexing, schema migrations, and NoSQL clusters.",
      accent: "from-purple-500/20 via-indigo-500/10 to-transparent",
      borderColor: "hover:border-purple-500/40",
      technologies: [
        {
          name: "MongoDB",
          tag: "Document Store",
          icon: SiMongodb,
          iconColor: "text-emerald-500",
          bgHover: "group-hover:bg-emerald-500/10",
        },
        {
          name: "PostgreSQL",
          tag: "Relational DB",
          icon: SiPostgresql,
          iconColor: "text-sky-400",
          bgHover: "group-hover:bg-sky-500/10",
        },
        {
          name: "MySQL",
          tag: "SQL Engine",
          icon: SiMysql,
          iconColor: "text-blue-400",
          bgHover: "group-hover:bg-blue-500/10",
        },
        {
          name: "Firebase",
          tag: "Realtime & Auth",
          icon: SiFirebase,
          iconColor: "text-amber-400",
          bgHover: "group-hover:bg-amber-500/10",
        },
      ],
    },
    {
      category: "DevOps, Cloud & Tools",
      icon: GitBranch,
      description:
        "Continuous integration, containerized deployments, cloud hosting, and automation.",
      accent: "from-amber-500/20 via-rose-500/10 to-transparent",
      borderColor: "hover:border-amber-500/40",
      technologies: [
        {
          name: "Git",
          tag: "Version Control",
          icon: SiGit,
          iconColor: "text-orange-500",
          bgHover: "group-hover:bg-orange-500/10",
        },
        {
          name: "Docker",
          tag: "Containerization",
          icon: SiDocker,
          iconColor: "text-sky-400",
          bgHover: "group-hover:bg-sky-500/10",
        },
        {
          name: "AWS",
          tag: "Cloud Infra",
          icon: FaAws,
          iconColor: "text-amber-400",
          bgHover: "group-hover:bg-amber-500/10",
        },
        {
          name: "Namecheap",
          tag: "DNS & Domains",
          icon: TbWorldWww,
          iconColor: "text-orange-400",
          bgHover: "group-hover:bg-orange-500/10",
        },
        {
          name: "VPS Hosting",
          tag: "Linux & Nginx",
          icon: Cpu,
          iconColor: "text-emerald-400",
          bgHover: "group-hover:bg-emerald-500/10",
        },
        {
          name: "Vercel",
          tag: "Edge Delivery",
          icon: SiVercel,
          iconColor: "text-white",
          bgHover: "group-hover:bg-white/10",
        },
      ],
    },
  ];

  const workExperience = [
    {
      current: true,
      title: "Backend Developer",
      company: "Qurilo Solutions",
      location: "New Delhi, India",
      period: "2025 - Present",
      roleType: "Full-Time",
      description:
        "Developing scalable web applications using Node.js, Express, and cloud technologies while building RESTful APIs, improving performance, and collaborating closely with frontend teams.",
      highlights: [
        "Architected scalable RESTful microservices and secure auth layers.",
        "Optimized query response times and system database throughput.",
      ],
      skills: [
        "Node.js",
        "Express.js",
        "Cloud APIs",
        "System Design",
        "MongoDB",
      ],
    },
    {
      current: false,
      title: "Full-Stack Developer",
      company: "Appins Technology",
      location: "Remote",
      period: "2022 - 2024",
      roleType: "Remote",
      description:
        "Built and maintained multiple client projects using modern JavaScript frameworks, working across UI implementation and backend integrations.",
      highlights: [
        "Delivered production web applications across multiple enterprise clients.",
        "Created reusable design components and modular full-stack architectures.",
      ],
      skills: ["React", "Node.js", "TypeScript", "REST APIs", "PostgreSQL"],
    },
    {
      current: false,
      title: "Frontend Developer",
      company: "Sugam Housing Pvt. Ltd.",
      location: "New Delhi, India",
      period: "2021 - 2022",
      roleType: "On-Site",
      description:
        "Started my career by building responsive websites and learning the foundations of product-focused frontend development.",
      highlights: [
        "Engineered mobile-responsive landing pages with high conversion rates.",
        "Collaborated with design stakeholders to refine client workflows.",
      ],
      skills: ["JavaScript", "HTML5", "CSS3 / Sass", "Responsive UI"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Delhi University",
      location: "New Delhi, India",
      period: "2019 - 2022",
      score: "Graduated with Honors",
      focus:
        "Core Computer Science, Data Structures, Algorithms, Relational DBs, and Web Development.",
      coursework: [
        "Data Structures",
        "Algorithms",
        "Database Management",
        "Software Eng.",
      ],
    },
  ];

  const careerHighlights = [
    {
      stat: "3+",
      label: "Years in Production",
      desc: "Delivering real-world applications across startups & agency clients.",
      icon: Briefcase,
    },
    {
      stat: "15+",
      label: "Projects & Modules",
      desc: "Built scalable REST APIs, reactive dashboards, and client portals.",
      icon: Layers,
    },
    {
      stat: "100%",
      label: "Commitment to Code Quality",
      desc: "Clean typing, modular components, and reliable deployments.",
      icon: Award,
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
                src="https://res.cloudinary.com/dmnsqt8nx/image/upload/v1792581574/Casual_Office_Portrait_with_Laptop_and_Plant_znodo4.png"
                alt="Kush Bhardwaj portrait"
                className="h-full min-h-[24rem] w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <span className="eyebrow">About me</span>
              <h1 className="section-title max-w-3xl">
                I build digital products where strong visual taste meets
                practical engineering.
              </h1>
              <p className="section-copy max-w-3xl">
                I am a full-stack developer with 3+ years of experience crafting
                products that feel modern, intuitive, and reliable. I enjoy
                turning complex flows into clear user experiences and building
                systems that stay maintainable as they grow.
              </p>
              <p className="section-copy max-w-3xl">
                My work sits at the intersection of frontend polish and backend
                logic, which means I care just as much about motion, hierarchy,
                and conversion as I do about API design, performance, and scale.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="metric-tile">
                  <p className="text-2xl font-bold">3+</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Years experience
                  </p>
                </div>
                <div className="metric-tile">
                  <p className="text-2xl font-bold">Full stack</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Frontend to backend
                  </p>
                </div>
                <div className="metric-tile">
                  <p className="text-2xl font-bold">Remote ready</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Teams and clients
                  </p>
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
              I use the right stack for the product, but I care most about
              clarity, maintainability, and the overall experience users feel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {skills.map((skillCategory, categoryIndex) => {
              const Icon = skillCategory.icon;
              return (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 ${skillCategory.borderColor}`}
                >
                  {/* Subtle ambient light splash in card header */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${skillCategory.accent} blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`}
                  />

                  {/* Header */}
                  <div className="relative mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#76f0d6] shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-[#76f0d6]/30">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {skillCategory.category}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                        {skillCategory.description}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Tech Tiles Grid */}
                  <div className="relative mt-5 grid grid-cols-2 gap-3">
                    {skillCategory.technologies.map((tech) => {
                      const TechIcon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="group/tile relative flex items-center gap-3.5 rounded-2xl border border-white/5 bg-slate-900/60 p-3 transition-all duration-200 hover:border-white/20 hover:bg-slate-800/80 hover:shadow-lg"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-transform duration-200 group-hover/tile:scale-110">
                            {TechIcon && (
                              <TechIcon
                                className={`text-xl ${tech.iconColor || "text-slate-300"} transition-colors`}
                              />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-white group-hover/tile:text-[#76f0d6] transition-colors">
                              {tech.name}
                            </p>
                            <span className="block truncate text-[11px] font-medium text-slate-400">
                              {tech.tag}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 pb-28">
        <div className="section-inner max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-14 space-y-4"
          >
            <span className="eyebrow">Track Record</span>
            <h2 className="section-title max-w-3xl">
              Experience & education that shaped my engineering mindset.
            </h2>
            <p className="section-copy max-w-2xl">
              A dual overview of hands-on production engineering in startups and
              agencies alongside formal computer science foundations.
            </p>
          </motion.div>

          {/* Split Bento Layout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Work Experience (7 Cols) */}
            <div className="space-y-6 lg:col-span-7">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-[#76f0d6]">
                    <Briefcase size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Work Experience
                  </h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  3 Positions
                </span>
              </div>

              <div className="space-y-4">
                {workExperience.map((job, idx) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      job.current
                        ? "border-[#76f0d6]/40 bg-gradient-to-br from-[#76f0d6]/[0.08] via-slate-900/60 to-slate-900/40 hover:border-[#76f0d6]/60 shadow-lg shadow-[#76f0d6]/5"
                        : "border-white/10 bg-slate-900/50 hover:border-white/20 hover:bg-slate-900/80"
                    }`}
                  >
                    {/* Ambient glow for current role */}
                    {job.current && (
                      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#76f0d6]/20 blur-3xl" />
                    )}

                    <div className="relative flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h4 className="text-lg font-bold text-white group-hover:text-[#76f0d6] transition-colors">
                            {job.title}
                          </h4>
                          {job.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#76f0d6]/30 bg-[#76f0d6]/10 px-2 py-0.5 text-[10px] font-semibold text-[#76f0d6]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#76f0d6] animate-pulse" />
                              CURRENT
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                          <span className="flex items-center gap-1 font-medium text-slate-200">
                            <Building2 size={14} className="text-[#76f0d6]" />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-400">
                            <MapPin size={13} />
                            {job.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-xl border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                        <Calendar size={13} className="text-[#76f0d6]" />
                        {job.period}
                      </div>
                    </div>

                    <p className="relative mb-3 text-sm leading-relaxed text-slate-300/90">
                      {job.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="relative mb-4 space-y-1.5">
                      {job.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-300/80"
                        >
                          <CheckCircle2
                            size={13}
                            className="shrink-0 mt-0.5 text-[#76f0d6]"
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div className="relative flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {job.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-white/5 bg-slate-950/60 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Education & Performance Highlights (5 Cols) */}
            <div className="space-y-6 lg:col-span-5">
              {/* Education Box */}
              <div>
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-[#ff9b67]">
                      <GraduationCap size={18} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Education</h3>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Degree
                  </span>
                </div>

                {education.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:border-[#ff9b67]/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-orange-500/5"
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#ff9b67]/15 blur-3xl group-hover:opacity-100 opacity-50" />

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#ff9b67] uppercase mb-2">
                          {edu.score}
                        </span>
                        <h4 className="text-lg font-bold text-white group-hover:text-[#ff9b67] transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="mt-0.5 text-sm font-medium text-slate-300">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-xl border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                        <Calendar size={13} className="text-[#ff9b67]" />
                        {edu.period}
                      </div>
                    </div>

                    <p className="mb-4 text-xs leading-relaxed text-slate-300/80">
                      {edu.focus}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {edu.coursework.map((c) => (
                        <span
                          key={c}
                          className="rounded-lg border border-white/5 bg-slate-950/60 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Career Impact Stats Bento */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-1">
                  <Sparkles size={16} className="text-[#76f0d6]" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Engineering Impact
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {careerHighlights.map((hl, i) => {
                    const HlIcon = hl.icon;
                    return (
                      <motion.div
                        key={hl.label}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4 transition-all duration-200 hover:border-white/20 hover:bg-slate-800/60"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#76f0d6] transition-transform duration-200 group-hover:scale-110">
                          <HlIcon size={22} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-white">
                              {hl.stat}
                            </span>
                            <span className="text-xs font-semibold text-[#76f0d6]">
                              {hl.label}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-slate-400">
                            {hl.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
