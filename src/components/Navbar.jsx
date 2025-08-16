import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-medium transition-all duration-500">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`glass-strong mt-6 sm:mt-8 rounded-full hidden md:flex items-center justify-center p-4 max-w-[500px] mx-auto z-50 transition-all duration-500 ${
          scrolled 
            ? "scale-95 shadow-2xl backdrop-blur-2xl" 
            : "scale-100 backdrop-blur-xl"
        }`}
        style={{
          background: scrolled 
            ? "rgba(255, 255, 255, 0.15)" 
            : "rgba(255, 255, 255, 0.08)",
          border: scrolled 
            ? "1px solid rgba(255, 255, 255, 0.3)" 
            : "1px solid rgba(255, 255, 255, 0.15)"
        }}
      >
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={link.path}
                className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 ease-out hover:scale-105 relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        onClick={toggleNav}
        className="md:hidden absolute top-6 right-6 glass-strong rounded-full z-50 text-white/80 p-3 hover:scale-110 transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        }}
        aria-label="Open navigation menu"
        tabIndex={0}
        role="button"
        onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') toggleNav(); }}
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: nav ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed left-0 top-0 w-full h-full glass transition-all duration-500 ${
          nav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ 
          paddingTop: 'env(safe-area-inset-top, 0px)',
          background: "rgba(15, 15, 35, 0.95)",
          backdropFilter: "blur(20px)"
        }}
      >
        <ul className="flex flex-col items-center justify-center space-y-12 h-full">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={nav ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={link.path} 
                onClick={closeNav} 
                className="text-4xl sm:text-6xl font-light text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
              >
                {link.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
