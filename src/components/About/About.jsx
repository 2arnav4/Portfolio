// File: About.jsx

import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to opacity and position
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <motion.section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-[#0F172A] px-6 text-white"
      style={{ opacity, y, scale }}
    >
      <div className="text-center max-w-2xl">
        <div className="inline-flex items-center mb-6 px-4 py-1 border border-green-500 rounded-full">
          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
          Available for Collaborations & Internships
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Crafting</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Digital</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">Experiences</span>
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Hi, I'm <span className="text-blue-400 font-semibold">Arnav Singla</span>, a full-stack developer 
          passionate about creating intuitive web solutions. I transform ideas into functional products, 
          bringing design and code together seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            🔍 Explore Projects
          </a>
          <button className="px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-md hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
            📄 Download Resume
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
