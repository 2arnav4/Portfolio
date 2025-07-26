import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const wireY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Transform scroll progress to wire movement
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]); // Transform scroll progress to rotation for additional effects

  return (
    <div className="fixed top-0 right-0 h-full w-20 pointer-events-none z-50">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <svg width="80" height="160" viewBox=" 0 0 80 160">
          <path
            d="M 0 80 A 80 80 0 0 1 0 0 L 0 160 A 80 80 0 0 1 0 80 Z"
            fill="none"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="2"
            className="opacity-50"
          />
        </svg>
      </div>

      {/* Animated Wire */} 
      {/* write this again  */}
      <motion.div
        className="absolute right-10 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full"
        style={{ y: wireY }}
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Add the dots and other elements here */}
      </motion.div>
    </div>
  );
};
