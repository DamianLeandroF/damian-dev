import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-100 w-max"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-px bg-linear-to-r from-purple-600/50 via-blue-500/50 to-purple-600/50 rounded-full blur-sm opacity-60" />

        {/* Main navbar container */}
        <div className="relative flex items-center justify-center border border-slate-700 bg-black/80 backdrop-blur-xl px-8 py-4 rounded-full text-white text-sm">
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden h-6 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block group-hover:-translate-y-full transition-transform duration-300">
                  {item.name}
                </span>
                <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-purple-400">
                  {item.name}
                </span>

                {/* Underline effect */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-purple-500 to-blue-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
