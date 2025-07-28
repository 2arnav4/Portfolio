import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Achievement = () => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);

  return (
    <motion.section 
      id="achievement" 
      className="min-h-screen flex items-center justify-center bg-gray-900"
      style={{ opacity, y, scale }}
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-white mb-2">Project Success</h3>
            <p className="text-gray-300">Successfully delivered 10+ web applications with 95% client satisfaction</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
            <p className="text-gray-300">Optimized applications achieving 40% faster load times</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300">Developed innovative solutions for complex technical challenges</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievement;
