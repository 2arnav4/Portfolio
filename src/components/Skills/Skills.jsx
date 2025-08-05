import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import reactIcon from '../../assets/icons/react.png';
import javascriptIcon from '../../assets/icons/javascript.png';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css3.png';
import nodejsIcon from '../../assets/icons/nodejs.png';
import expressIcon from '../../assets/icons/expressjs.png';
import gitIcon from '../../assets/icons/git.png';
import githubIcon from '../../assets/icons/github.png';
import mongodbIcon from '../../assets/icons/mongodb.png';

const Skills = () => {
  const { scrollYProgress } = useScroll();
  
  // Different scroll ranges for each section
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: javascriptIcon, color: "from-yellow-400 to-yellow-500" },
        { name: "HTML", icon: htmlIcon, color: "from-orange-500 to-orange-600" },
        { name: "CSS", icon: cssIcon, color: "from-blue-400 to-blue-500" }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: reactIcon, color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", icon: nodejsIcon, color: "from-green-500 to-green-600" },
        { name: "Express", icon: expressIcon, color: "from-gray-500 to-gray-600" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: gitIcon, color: "from-red-500 to-red-600" },
        { name: "GitHub", icon: githubIcon, color: "from-gray-600 to-gray-700" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: mongodbIcon, color: "from-green-400 to-teal-500" }
      ]
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="min-h-screen flex items-center justify-center bg-black px-6 py-4"
      style={{ opacity, y, scale }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 mb-4">
            TECH ARSENAL
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I've worked with and enjoy using
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Title */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <div className="flex-1 h-1 bg-gradient-to-r from-gray-700 to-transparent rounded-full ml-4"></div>
              </div>

              {/* Skills Container - Shorter boxes */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:scale-105 hover:bg-gray-700/70 transition-all duration-300 cursor-pointer"
                  >
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Skill Content - Shorter layout */}
                    <div className="relative z-10 text-center">
                      <div className="flex justify-center mb-2">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-white font-medium text-xs group-hover:text-gray-200 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Floating particles on hover */}
                    <div className="absolute top-1 right-1 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-200"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
