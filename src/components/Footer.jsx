import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/kush-bhardwaj",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kushbhardwajdev05?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/kush_bhardwaj_05",
      icon: Instagram,
    },
  ];

  return (
    <footer className="relative z-10 mt-24 border-t border-white/10">
      <div className="section-wrap py-10 sm:py-14">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card-strong px-6 py-10 sm:px-10"
          >
            <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr,0.9fr]">
              <div className="space-y-4">
                <span className="eyebrow">Open for select freelance work</span>
                <h2 className="text-3xl font-bold text-white">
                  Designing sharp digital products with strong frontend craft.
                </h2>
                <p className="max-w-xl text-base leading-8 text-slate-300">
                  I build modern interfaces that feel premium, perform well, and
                  convert attention into action.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
                      >
                        <Icon size={16} />
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Explore
                </p>
                <div className="grid gap-3 text-sm text-slate-300">
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                  <Link to="/projects" className="hover:text-white">
                    Projects
                  </Link>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Contact
                </p>
                <a
                  href="mailto:kushbhardwaj8800@gmail.com"
                  className="flex items-center gap-3 text-slate-200 hover:text-white"
                >
                  <Mail size={16} className="text-[#76f0d6]" />
                  kushbhardwaj8800@gmail.com
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin size={16} className="text-[#ff9b67]" />
                  New Delhi, India
                </div>
                <Link to="/contact" className="btn-secondary mt-2">
                  Book a conversation
                </Link>
              </div>
            </div>

            <div className="accent-line my-8" />

            <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Copyright {new Date().getFullYear()} Kush Bhardwaj. All rights
                reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
