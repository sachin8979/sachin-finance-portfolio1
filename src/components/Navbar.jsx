import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "About",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Certifications",
    "Contact"
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Wrapper */}
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between
        bg-white/5 backdrop-blur-xl 
        border border-white/10
        shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        rounded-2xl mt-4">

        {/* Brand */}
        <Link className="text-3xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Sachin
          </span>
          <span className="text-white"> Singh</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-gray-300 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={"/" + item.toLowerCase()}
              className={({ isActive }) =>
                `relative text-lg transition-all duration-300
                ${isActive ? "text-yellow-400" : "hover:text-yellow-300"}`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-2 rounded-xl
          bg-gradient-to-r from-yellow-500 to-yellow-600
          text-black font-semibold shadow-lg
          hover:shadow-yellow-500/40 transition-all"
        >
          Contact
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-4"
        >
          <nav className="flex flex-col gap-6 text-gray-300">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={"/" + item.toLowerCase()}
                className="text-lg hover:text-yellow-300 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
