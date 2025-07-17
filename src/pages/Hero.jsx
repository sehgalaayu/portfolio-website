import React, { useCallback } from "react";
import { motion } from "framer-motion"; // Correct import
import profilepic from "../assets/images/profilepic.png";
import Stars from "../components/Stars";

export const Hero = () => {
  const scrollToSection = useCallback((id) => {
    console.log('Button clicked for section:', id);
    let el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: id === "contact" ? "center" : "start" });
    } else if (id === "contact") {
      // Retry after a short delay in case Footer is rendered late
      setTimeout(() => {
        el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 200);
    }
  }, []);

  return (
    <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)] pt-32">
      <Stars />
      <div className="absolute left-1/2 top-[450px] -translate-x-1/2 w-[2400px] h-[1000px] rounded-[50%] bg-[radial-gradient(closest-side,#000_85%,#249974)] border border-[#8CD6DE]/30 pointer-events-none z-0"></div>

      <div className="container relative mx-auto px-4 pt-12 pb-24 z-10">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="relative mb-8 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            <img
              src={profilepic}
              alt="Aayu Sehgal"
              className="w-[250px] relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Hi, I am <br />
              <span className="text-emerald-400">Aayu Sehgal</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I am a fullstack developer focusing on creating websites that
              provide users with the best experience.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-emerald-500 rounded-full font-medium"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition"
                onClick={() => scrollToSection("portfolio")}
              >
                View Work
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl"
        ></motion.div>
      </div>
    </div>
  );
};
