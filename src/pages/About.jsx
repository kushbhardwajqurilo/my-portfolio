import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Calendar,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "TailwindCSS", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      technologies: [
        { name: "Node.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "Python", level: 75, color: "from-yellow-400 to-yellow-600" },
        {
          name: "REST APIs",
          level: 90,
          color: "from-purple-400 to-purple-600",
        },
      ],
    },
    {
      category: "Database",
      icon: Database,
      technologies: [
        { name: "MongoDB", level: 80, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "MySQL", level: 80, color: "from-red-400 to-red-600" },
        { name: "Firebase", level: 85, color: "from-orange-400 to-orange-600" },
      ],
    },
    {
      category: "Tools & Others",
      icon: GitBranch,
      technologies: [
        { name: "Git", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 70, color: "from-yellow-500 to-yellow-700" },
        { name: "Vercel", level: 85, color: "from-gray-400 to-gray-600" },
      ],
    },
  ];

  const timeline = [
    {
      type: "work",
      title: "Backend Developer",
      company: "Qurilo Private Limited",
      location: "Nawada New Delhi, Delhi, India",
      period: "2025- Present",
      description: `
    Developing scalable web applications using Node.js, Express, and cloud technologies. 
    Building RESTful APIs, optimizing performance, and mentoring junior developers 
    while ensuring clean, maintainable code and seamless integration with frontend teams.
  `,
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "Appins Technology",
      location: "Remote",
      period: "2022 - 2024",
      description:
        "Built and maintained multiple client projects using modern JavaScript frameworks. Collaborated with design teams to create pixel-perfect user interfaces.",
    },

    {
      type: "work",
      title: "Frontend Developer",
      company: "Sugam Housing Pvt. Ltd.",
      location: "Dwarka Mor New Delhi, India",
      period: "2021 - 2022",
      description:
        "Started career developing responsive websites and learning full-stack development fundamentals.",
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications",
      company: "Delhi University",
      location: "New Delhi,India",
      period: "2019 - 2022",
      description:
        "Graduated Magna Cum Laude. Coursework focused on algorithms, data structures, and software engineering principles.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Left Image */}
              <div className="lg:col-span-1">
                <div className="w-full h-full mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500">
                  <div
                    className="w-full h-full rounded-2xl bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://res.cloudinary.com/dqwc7j44b/image/upload/v1761132911/IMG20230806101921_svnvwv.jpg)",
                    }}
                  ></div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Hello, I'm Kush!
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with over 3+ years of
                    experience crafting digital solutions that bridge the gap
                    between complex technology and intuitive user experiences.
                    My journey in tech began during my undergraduate studies at
                    Delhi University, where I discovered my love for both the
                    logical problem-solving of backend systems and the creative
                    expression of frontend design.
                  </p>
                  <p>
                    Throughout my career, I've had the privilege of working with
                    startups and established companies alike, helping them build
                    scalable applications that serve millions of users. I
                    believe in writing clean, maintainable code and staying
                    current with the latest technologies while maintaining a
                    focus on performance and accessibility.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge through technical writing and mentoring
                    fellow developers.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Get In Touch
                  </a>
                  {/* <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-blue-400 transition-all duration-300"
                  >
                    <Download size={18} />
                    Download Resume
                  </a> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I
              use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillCategory, categoryIndex) => {
              const Icon = skillCategory.icon;
              return (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="text-blue-400" size={24} />
                    <h3 className="text-xl font-semibold text-white">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <div key={tech.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">
                            {tech.name}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
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

      {/* Timeline Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My professional journey and educational background that shaped my
              expertise.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-[#0A0A0F]" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        item.type === "work"
                          ? "text-blue-400"
                          : "text-purple-400"
                      }`}
                    >
                      {item.type === "work" ? (
                        <Code2 size={18} />
                      ) : (
                        <Calendar size={18} />
                      )}
                      <span className="text-sm font-medium uppercase tracking-wide">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="text-gray-300 font-medium mb-2">
                      {item.company}
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
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
