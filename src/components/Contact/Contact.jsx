import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);

  return (
    <motion.section 
      id="contact" 
      className="min-h-screen flex items-center justify-center bg-gray-900"
      style={{ opacity, y, scale }}
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Let's work together! Get in touch for collaborations, opportunities, or just to say hello.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">your.email@example.com</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-300">linkedin.com/in/yourprofile</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-3xl mb-4">🐙</div>
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-300">github.com/yourusername</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
