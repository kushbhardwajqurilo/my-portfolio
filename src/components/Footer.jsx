import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { motion } from "framer-motion";

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
    <footer className="relative mt-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Kush Bhardwaj
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <a
              href="/"
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/projects"
              className="hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="/blog"
              className="hover:text-white transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-500 text-sm"
          >
            <p className="flex items-center justify-center gap-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="mt-1"></p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
