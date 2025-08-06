import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  
  // Fades in as the user scrolls into this section's view
  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const y = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]); // Slides up slightly

  return (
    <motion.section 
      id="projects" 
      className="min-h-screen flex items-center justify-center bg-black px-6 text-white py-4"
      style={{ opacity, y }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Explore some of the projects I've worked on. These showcase my skills and expertise in various domains of software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Project 1</h3>
            <p className="text-gray-300">Description of your first project</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Project 2</h3>
            <p className="text-gray-300">Description of your second project</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Project 3</h3>
            <p className="text-gray-300">Description of your third project</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;