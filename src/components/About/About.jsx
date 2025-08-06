// File: About.jsx

import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import resumePdf from '/src/assets/resume/Resume -Arnav .pdf'; // Import the resume file

const About = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to opacity. Fades out as you scroll down.
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]); // Adds a subtle shrink effect

  return (
    <motion.section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-black px-6 text-white py-4"
      style={{ opacity, scale }}
    >
      <div className="text-center max-w-4xl">
        <div className="inline-flex items-center mb-6 px-4 py-1 border border-green-500 rounded-full">
          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
          Available for Collaborations & Internships
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Crafting</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent"> Digital</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Experiences</span>
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
          <a
            href={resumePdf} // Use the imported PDF path
            download="Resume - Arnav Singla.pdf"
            className="px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-md hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;