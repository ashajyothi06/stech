import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/sklassics-tech-logo.png";

/* ── Explicit color palette (light navbar) ── */
const lt = {
  bg: "hsl(0, 0%, 100%)",
  fg: "hsl(0, 15%, 10%)",
  mutedFg: "hsl(0, 10%, 35%)",
  hoverBg: "hsl(0, 0%, 96%)",
  primary: "hsl(0, 90%, 55%)",
  border: "hsl(0, 10%, 90%)",
};

const scopedCSS = `
.sk-nav-link { 
  color: ${lt.mutedFg}; 
}

.sk-nav-link:hover { 
  color: ${lt.mutedFg}; 
  background: transparent; 
}

.sk-nav-link-active { 
  color: ${lt.mutedFg}; 
  background: transparent; 
}

.sk-nav-mobile-btn:hover { 
  background: transparent; 
}
`;



const navItems = [
  { name: "Technologies", path: "/technologies" },
  { name: "Our Works", path: "/our-works" },
  { name: "Blog", path: "/ourblog" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const serviceItems = [
  { name: "AIML Services", path: "/aiml-services" },
  { name: "Application Services", path: "/application-services" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const linkClass = (active: boolean) =>
    `px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
      active ? "sk-nav-link-active" : "sk-nav-link"
    }`;

  return (
    <nav
      className="w-full fixed top-0 z-50 transition-all duration-300"
      style={{
        background: lt.bg,
        boxShadow: scrolled ? `0 6px 24px hsla(0, 0%, 0%, 0.08)` : "none",
        borderBottom: scrolled ? `1px solid ${lt.border}` : `1px solid transparent`,
      }}
    >
      <style>{scopedCSS}</style>

      <div className="max-w-7xl mx-auto flex items-center justify-between h-[60px] sm:h-[65px] lg:h-[70px] px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Sklassics Tech"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"

          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg sk-nav-mobile-btn transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: lt.fg }}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-end items-center gap-1 lg:gap-1.5 text-[14px]">
          <li>
            <Link to="/" className={linkClass(isActive("/"))}>
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 ${linkClass(
                isActive("/aiml-services") || isActive("/application-services")
              )}`}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-56 rounded-xl py-2 shadow-lg"
                  style={{
                    background: lt.bg,
                    border: `1px solid ${lt.border}`,
                  }}
                >
                  {serviceItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(item.path)
                            ? "sk-nav-link-active"
                            : "sk-nav-link"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={linkClass(isActive(item.path))}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              background: lt.bg,
              borderTop: `1px solid ${lt.border}`,
            }}
          >
            <ul className="flex flex-col px-4 py-4 space-y-1">
              <li>
                <Link to="/" className={`block ${linkClass(isActive("/"))}`}>
                  Home
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between px-4 py-3 rounded-lg font-medium sk-nav-link transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden ml-4 mt-1 space-y-1 pl-3"
                      style={{
                        borderLeft: `2px solid hsla(0, 90%, 55%, 0.25)`,
                      }}
                    >
                      {serviceItems.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                              isActive(item.path)
                                ? "sk-nav-link-active"
                                : "sk-nav-link"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block ${linkClass(isActive(item.path))}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
