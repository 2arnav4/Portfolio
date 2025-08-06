import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Achievement = () => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const y = useTransform(scrollYProgress, [0.35, 0.55], [50, 0]);

  return (
    <motion.section 
      id="achievement" 
      className="min-h-screen flex items-center justify-center bg-black px-6 text-white py-4"
      style={{ opacity, y }}
    >
      <div className="text-center max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-semibold text-white mb-2">Project Success</h3>
            <p className="text-gray-300">Successfully delivered 10+ web applications with 95% client satisfaction.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold text-white mb-2">Performance</h3>
            <p className="text-gray-300">Optimized applications, achieving 40% faster load times and enhanced user experience.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300">Developed innovative and scalable solutions for complex technical challenges.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievement;