import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function CustomLogo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#76f0d6" />
            <stop offset="50%" stopColor="#49d3ba" />
            <stop offset="100%" stopColor="#ff9b67" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polygon
          points="20,2 32,10 32,30 20,38 8,30 8,10"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
        <path
          d="M12 12 L12 28 M12 20 L24 12 M12 20 L24 28"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />
        <circle cx="28" cy="20" r="2" fill="url(#logoGradient)" filter="url(#glow)" />
      </svg>

      <div className="flex flex-col">
        <span className="text-lg font-bold text-white">Kush</span>
        <span className="text-xs tracking-[0.22em] text-slate-400">Developer</span>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "border border-white/10 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08111f]/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center">
              <CustomLogo />
            </Link>
          </motion.div>

          <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl md:flex">
            <div className="flex items-baseline gap-1">
              {navItems.map((item) => (
                <NavLink key={item.name} to={item.href} className={navLinkClass}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <Link to="/contact" className="btn-primary px-5 py-2.5 text-sm">
              Start a project
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-b border-white/10 bg-[#08111f]/90 backdrop-blur-xl md:hidden"
      >
        <div className="space-y-2 px-4 pb-5 pt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-base font-medium ${
                  isActive
                    ? "border border-white/10 bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            Start a project
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
