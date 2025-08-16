import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-24 sm:py-32 relative overflow-hidden scroll-mt-32" id="contact">
      <div className="container mx-auto px-6">
        {/* Contact Section */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display mb-6"
          >
            Let's <span className="text-gradient-primary text-shadow-glow">Connect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/70 font-light max-w-2xl mx-auto mb-12 font-body"
          >
            Ready to bring your ideas to life? Let's discuss your <span className="text-gradient-secondary">next project</span>
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <a
              href="mailto:sehgalaayu@gmail.com"
              className="glass-strong rounded-2xl px-8 py-4 text-white hover:text-purple-300 transition-colors duration-300 group"
            >
              <div className="text-sm text-white/60 mb-1">Email</div>
              <div className="text-lg font-semibold group-hover:scale-105 transition-transform duration-300">
                sehgalaayu@gmail.com
              </div>
            </a>

            <a
              href="tel:+918076904213"
              className="glass-strong rounded-2xl px-8 py-4 text-white hover:text-blue-300 transition-colors duration-300 group"
            >
              <div className="text-sm text-white/60 mb-1">Phone</div>
              <div className="text-lg font-semibold group-hover:scale-105 transition-transform duration-300">
                +91 807 690 4213
              </div>
            </a>

            <div className="glass-strong rounded-2xl px-8 py-4 text-white">
              <div className="text-sm text-white/60 mb-1">Location</div>
              <div className="text-lg font-semibold">
                New Delhi, India
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-6">
            <a
              href="https://github.com/sehgalaayu/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sehgalaayu/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size={24} />
            </a>
            <a
              href="https://x.com/sehgalaayu1"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <AiOutlineTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/sehgalaayu/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <AiFillInstagram size={24} />
            </a>
            <a
              href="https://drive.google.com/file/d/1uLQanDqNu4EmeotGOe-71nlY1MIK6JVL/view"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Resume"
            >
              <HiDocumentText size={24} />
            </a>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm mb-4 sm:mb-0">
            © 2025 Aayu Sehgal. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Built with ❤️ using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
