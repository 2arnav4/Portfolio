import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import reactIcon from "../../assets/icons/react.png";
import javascriptIcon from "../../assets/icons/javascript.png";
import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css3.png";
import nodejsIcon from "../../assets/icons/nodejs.png";
import expressIcon from "../../assets/icons/expressjs.png";
import gitIcon from "../../assets/icons/git.png";
import githubIcon from "../../assets/icons/github.png";
import mongodbIcon from "../../assets/icons/mongodb.png";

const Skills = () => {
  const skillsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "center start"], // triggers when Skills section enters viewport
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: javascriptIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: reactIcon },
        { name: "Node.js", icon: nodejsIcon },
        { name: "Express", icon: expressIcon },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: githubIcon },
      ],
    },
    { title: "Databases", skills: [{ name: "MongoDB", icon: mongodbIcon }] },
  ];

  return (
    <motion.section
      ref={skillsRef}
      id="skills"
      className="min-h-screen flex items-center justify-center bg-black px-6 text-white py-4"
      style={{ opacity, y }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 mb-4">
            TECH ARSENAL
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gray-700 ml-4"></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:scale-105 hover:bg-gray-700/70 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-center mb-3">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-white font-medium text-sm">
                      {skill.name}
                    </h4>
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
