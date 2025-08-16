import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/images/airbnb.jpg";
import proj2 from "../assets/images/web-wallet.jpg";
import proj3 from "../assets/images/portfolio.jpg";
import proj4 from "../assets/images/main-ui.jpg";
import proj5 from "../assets/images/product-feedback.jpg";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "AirBnb Clone",
    desc: "Wanderlust: An Airbnb-Style Listing and Review Platform is a full-stack web application inspired by Airbnb, where users can browse, create, and manage property listings. Each listing features detailed information, images, and user-generated reviews. Built with Node.js, Express, MongoDB, and EJS, the platform supports CRUD operations for listings and reviews, robust error handling, and a clean, responsive user interface.",
    devstack: "MongoDB, Express, EJS, Node.js, Mapbox, Multer Cloudinary",
    link: "https://wanderlust-bnb-epe7.onrender.com/",
    git: "https://github.com/sehgalaayu/AirBnb-Clone-wanderlust",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "Product Feedback App",
    desc: "A modern, full-stack web application for collecting and managing product feedback with real-time voting, user authentication, and a beautiful dark-themed UI. Features include user registration/login, feedback CRUD operations, voting system with smooth transitions, and responsive design. Built with React, TypeScript, Node.js, and MongoDB.",
    devstack: "React, TypeScript, Node.js, Express, MongoDB, JWT",
    link: "https://product-feedback-webapp-1.onrender.com/",
    git: "https://github.com/sehgalaayu/product-feedback-webapp",
    src: proj5,
    type: "fullstack",
  },
  {
    title: "Solana Web-Based Wallet",
    desc: "A modern React + Vite application that generates a new BIP39 mnemonic (seed phrase) and uses it to derive multiple Solana and Ethereum wallets. The app displays the mnemonic in a clean, matrix-style box with a one-click copy feature. Users can add multiple wallets from the same seed, view each wallet's public key or address, and securely reveal or hide private keys (hidden by default for safety).The interface features a minimal, glassmorphic, dark-themed design for a smooth and secure user experience.",
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
  return (
    <div className="py-24 sm:py-32 md:py-40 scroll-mt-32" id="portfolio">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display mb-6"
          >
            Selected <span className="text-gradient-primary text-shadow-glow">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/70 font-light max-w-2xl mx-auto font-body"
          >
            A showcase of my latest work, featuring <span className="text-gradient-secondary">modern web applications</span> and innovative solutions
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="glass-strong rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-300 group-hover:border-white/20 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  
                  {project.desc && (
                    <p className="text-white/70 mb-4 leading-relaxed text-sm">
                      {project.desc}
                    </p>
                  )}

                  <div className="space-y-2 mb-4">
                    <p className="text-purple-400 font-medium text-sm">
                      <span className="text-white/50">Stack:</span> {project.devstack}
                    </p>
                    <p className="text-blue-400 font-medium text-sm capitalize">
                      <span className="text-white/50">Type:</span> {project.type}
                    </p>
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.link}
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <HiOutlineExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.git}
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
