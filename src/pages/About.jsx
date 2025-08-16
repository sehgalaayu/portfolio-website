import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  
  return (
    <section id="about" className="py-24 sm:py-32 md:py-40 scroll-mt-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display mb-6"
          >
            About <span className="text-gradient-primary text-shadow-glow">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/70 font-light max-w-3xl mx-auto font-body"
          >
            Passionate <span className="text-gradient-secondary">full-stack developer</span> crafting digital experiences with modern technologies and innovative solutions
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
        >
          {/* Left Column */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Background</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating innovative web solutions. My journey in tech started with a curiosity about how things work, which led me to pursue a career in web development.
              </p>
              <div className="glass-strong rounded-2xl p-4">
                <code className="text-purple-300 text-sm font-mono">
                  const developer = {`{`}<br />
                  &nbsp;&nbsp;name: <span className="text-blue-300">'Aayu Sehgal'</span>,<br />
                  &nbsp;&nbsp;role: <span className="text-green-300">'Full-Stack Developer'</span>,<br />
                  &nbsp;&nbsp;passion: <span className="text-yellow-300">'Creating amazing web experiences'</span><br />
                  {`}`};
                </code>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Expertise</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                I specialize in building robust and scalable web applications using modern technologies. My expertise spans both front-end and back-end development, allowing me to create seamless, end-to-end solutions.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                  <div className="text-sm text-white/70">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Skills & Technologies</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 font-medium">Frontend Development</span>
                    <span className="text-purple-400 text-sm">70%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 font-medium">Backend Development</span>
                    <span className="text-blue-400 text-sm">85%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3">Frontend</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• React & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-3">Backend</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Node.js & Express</li>
                    <li>• MongoDB & Mongoose</li>
                    <li>• RESTful APIs</li>
                    <li>• Authentication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 60 }}
          className="glass rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-white text-center">My Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Planning</h4>
              <p className="text-white/70 text-sm">Thorough analysis and strategic planning to ensure optimal solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Development</h4>
              <p className="text-white/70 text-sm">Clean, maintainable code following industry best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Delivery</h4>
              <p className="text-white/70 text-sm">High-quality solutions delivered on time with exceptional user experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
