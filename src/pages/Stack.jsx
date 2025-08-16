import React, { useEffect } from "react";
import {
  SiFramer,
  SiFigma,
  SiReact,
  SiNodedotjs,
  SiMongoose,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiGit,
  SiJavascript,
  SiWebrtc,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  {
    id: 1,
    name: "React",
    icon: <SiReact />,
    category: "Frontend",
    description: "Modern UI development",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <SiJavascript />,
    category: "Frontend",
    description: "Core programming language",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Frontend",
    description: "Type-safe JavaScript",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "Frontend",
    description: "Utility-first CSS",
  },
  {
    id: 5,
    name: "Framer Motion",
    icon: <SiFramer />,
    category: "Frontend",
    description: "Animation library",
  },
  {
    id: 6,
    name: "Node.js",
    icon: <SiNodedotjs />,
    category: "Backend",
    description: "Server-side JavaScript",
  },
  {
    id: 7,
    name: "Express",
    icon: <SiExpress />,
    category: "Backend",
    description: "Web framework",
  },
  {
    id: 8,
    name: "WebSocket",
    icon: <SiWebrtc />,
    category: "Backend",
    description: "Real-time communication",
  },
  {
    id: 9,
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Database",
    description: "NoSQL database",
  },
  {
    id: 10,
    name: "Mongoose",
    icon: <SiMongoose />,
    category: "Database",
    description: "MongoDB ODM",
  },
  {
    id: 11,
    name: "Vite",
    icon: <SiVite />,
    category: "Tools",
    description: "Build tool",
  },
  {
    id: 12,
    name: "Vercel",
    icon: <SiVercel />,
    category: "Deployment",
    description: "Cloud platform",
  },
  {
    id: 13,
    name: "Git",
    icon: <SiGit />,
    category: "Tools",
    description: "Version control",
  },
  {
    id: 14,
    name: "Figma",
    icon: <SiFigma />,
    category: "Design",
    description: "Design tool",
  },
];

const categories = ["Frontend", "Backend", "Database", "Tools", "Deployment", "Design"];

export const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="py-24 sm:py-32 md:py-40 scroll-mt-32" id="stack">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display mb-6"
          >
            Tech <span className="text-gradient-primary text-shadow-glow">Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/70 font-light max-w-2xl mx-auto font-body"
          >
            Technologies and tools I use to <span className="text-gradient-secondary">bring ideas to life</span>
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16" ref={ref}>
          {stackItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: (i) => ({
                  opacity: 0,
                  y: 30,
                }),
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut",
                  },
                }),
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="glass rounded-3xl p-6 text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
              <p className="text-sm text-white/60 mb-3">{item.description}</p>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Skills Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const categoryItems = stackItems.filter(item => item.category === category);
              return (
                <div key={category} className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-white">{category}</h4>
                  <div className="space-y-2">
                    {categoryItems.map(item => (
                      <div key={item.id} className="flex items-center justify-center space-x-2 text-white/70 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
