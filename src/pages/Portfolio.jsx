import React, { useState } from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/images/airbnb.jpg";
import proj2 from "../assets/images/web-wallet.jpg";
import proj3 from "../assets/images/portfolio.jpg";
import proj4 from "../assets/images/main-ui.jpg";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "AirBnb Clone",
    desc: "Wanderlust: An Airbnb-Style Listing and Review Platform is a full-stack web application inspired by Airbnb, where users can browse, create, and manage property listings. Each listing features detailed information, images, and user-generated reviews. Built with Node.js, Express, MongoDB, and EJS, the platform supports CRUD operations for listings and reviews, robust error handling, and a clean, responsive user interface.",
    devstack: "MongoDB, Express, EJS, Node.js, Joi, Passport for AUTH",
    link: "https://github.com/sehgalaayu/AirBnb-Clone-wanderlust",
    git: "https://github.com/sehgalaayu/AirBnb-Clone-wanderlust",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "Solana Web-Based Wallet",
    desc: "A modern React + Vite application that generates a new BIP39 mnemonic (seed phrase) and uses it to derive multiple Solana and Ethereum wallets. The app displays the mnemonic in a clean, matrix-style box with a one-click copy feature. Users can add multiple wallets from the same seed, view each wallet’s public key or address, and securely reveal or hide private keys (hidden by default for safety).The interface features a minimal, glassmorphic, dark-themed design for a smooth and secure user experience.",
    devstack: "React, bip39, ethers, @solana/web3.js, ed25519-hd-key",
    link: "https://web-based-wallet-32bt.vercel.app/",
    git: "https://github.com/sehgalaayu/web-based-wallet",
    src: proj2,
    type: "frontend",
  },
  {
    title: "Starry Lottery",
    desc: "A visually stunning, interactive lottery game built with React and Framer Motion. Users can generate random lottery tickets, and if the sum of the digits is 15, they win—with confetti and a celebratory prompt! The app features a modern light/dark mode toggle, a magical animated starfield background, and smooth, delightful UI animations throughout.",
    devstack: "React, Tailwind",
    link: "https://starry-lottery.vercel.app/",
    git: "https://github.com/sehgalaayu/starry-lottery",
    src: proj4,
    type: "frontend",
  },
  {
    title: "Portfolio Website",
    devstack: "React, Tailwind, Framer Motion",
    link: "https://portfolio-website-taupe-iota.vercel.app/",
    git: "https://github.com/sehgalaayu/portfolio-website",
    src: proj3,
    type: "frontend",
  },
];

export const Portfolio = () => {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const next = () => setActive((prev) => (prev + 1) % total);
  const prev = () => setActive((prev) => (prev - 1 + total) % total);

  // Card width + gap
  const CARD_WIDTH = 480;
  const GAP = 32;
  // Show 3 cards at a time, center the active
  const VISIBLE_COUNT = 3;
  const containerWidth = CARD_WIDTH * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 1);
  // Center the active card
  const containerX = -1 * (active * (CARD_WIDTH + GAP) - ((containerWidth - CARD_WIDTH) / 2));

  return (
    <div className="text-white py-24 md:py-64 scroll-mt-32" id="portfolio">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>
        <div className="relative w-full flex items-center justify-center min-h-[560px] pt-32">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-pink-500/60 text-white rounded-full p-3 shadow-lg transition-all"
            aria-label="Previous Project"
          >
            &#8592;
          </button>
          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-pink-500/60 text-white rounded-full p-3 shadow-lg transition-all"
            aria-label="Next Project"
          >
            &#8594;
          </button>
          <div style={{ width: containerWidth }}>
            <motion.div
              className="flex gap-8"
              initial={false}
              animate={{ x: containerX }}
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
              style={{ minWidth: (CARD_WIDTH + GAP) * total }}
            >
              {projects.map((project, idx) => {
                const isActive = idx === active;
                const isSide = Math.abs(idx - active) === 1 || Math.abs(idx - active) === total - 1;
                return (
                  <motion.div
                    key={idx}
                    className={`w-[480px] max-w-full cursor-pointer group transition-all duration-300 ${isActive ? "z-10" : "z-0 opacity-60 scale-95"}`}
                    animate={isActive ? { scale: 1.08, y: -2, opacity: 1 } : isSide ? { scale: 0.95, y: 0, opacity: 0.7 } : { scale: 0.9, y: 0, opacity: 0.3 }}
                    transition={{ type: "spring", stiffness: 80, damping: 18 }}
                    whileHover={isActive ? { scale: 1.13, y: -4, boxShadow: "0 12px 64px #ff5f8fcc, 0 0 0 #fff0" } : {}}
                  >
                    <div className="bg-white/10 rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-400/30 backdrop-blur-xl transition-all duration-300">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-t-2xl"
                      />
                      <div className="p-6">
                        <h3 className="text-3xl font-bold mb-2 text-pink-400 uppercase tracking-widest">
                          {project.title}
                        </h3>
                        <p className="text-white/80 mb-4 min-h-[60px]">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                            target="_blank" rel="noopener noreferrer"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                            target="_blank" rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
