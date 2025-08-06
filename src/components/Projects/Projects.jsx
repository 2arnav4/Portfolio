import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const y = useTransform(scrollYProgress, [0.55, 0.75], [50, 0]);

  return (
    <motion.section 
      id="projects" 
      className="min-h-screen flex items-center justify-center bg-black px-6 text-white py-4"
      style={{ opacity, y }}
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Explore some of the projects I've worked on. These showcase my skills in turning complex problems into elegant software solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">Project 1</h3>
            <p className="text-gray-300">Description of your first project, highlighting key technologies and outcomes.</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">Project 2</h3>
            <p className="text-gray-300">Description of your second project, focusing on the challenges and solutions implemented.</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">Project 3</h3>
            <p className="text-gray-300">Description of your third project, detailing the impact and my specific role.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;