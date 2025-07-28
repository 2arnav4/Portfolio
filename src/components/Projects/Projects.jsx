import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0.3, 0.5], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  return (
    <motion.section 
      id="projects" 
      className="min-h-screen flex items-center justify-center bg-gray-800"
      style={{ opacity, y, scale }}
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Explore some of the projects I've worked on. These showcase my skills and expertise in various domains of software development.
        </p>
        
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