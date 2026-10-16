import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(currentScrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Compact 42x42 dimensions (fits right on the edge with minimal padding)
  const size = 44;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2; // tight fit to button edge
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 15 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 group"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute inset-0 rounded-full bg-[#76f0d6] opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-60" />

          {/* Compact Button with tight border padding */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#08111f]/95 backdrop-blur-md shadow-xl transition-all duration-200 focus:outline-none"
            aria-label="Scroll back to top"
          >
            {/* Circular Progress Gauge hugging the button edge */}
            <svg
              className="absolute inset-0 -rotate-90 pointer-events-none"
              width={size}
              height={size}
            >
              {/* Background track circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-white/10"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              {/* Active progress stroke */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-[#76f0d6]"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Inner Content - Clean & Compact */}
            <div className="relative flex flex-col items-center justify-center leading-none">
              <span className="text-[10px] font-bold text-[#76f0d6] tabular-nums leading-none tracking-tight">
                {Math.round(scrollProgress)}%
              </span>
              <ArrowUp size={10} className="stroke-[3] text-[#76f0d6] -mt-0.5" />
            </div>

            {/* Tooltip on hover */}
            <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-white/10 bg-[#08111f]/95 px-1.5 py-0.5 text-[9px] font-semibold text-[#76f0d6] opacity-0 shadow-md backdrop-blur-md transition-all duration-200 group-hover:opacity-100">
              Top
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
