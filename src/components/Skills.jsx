import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaPhp,
  FaPython,
  FaJava,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={64} /> },
  { name: "CSS", icon: <FaCss3 size={64} /> },
  { name: "JavaScript", icon: <FaJsSquare size={64} /> },
  { name: "PHP", icon: <FaPhp size={64} /> },
  { name: "Python", icon: <FaPython size={64} /> },
  { name: "Java", icon: <FaJava size={64} /> },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <div className="" style={{ position: "relative", zIndex: 1, top: 100 }}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-8 text-white">
            Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-4 rounded-lg shadow-lg text-center"
              >
                {skill.icon}
                <p className="mt-4 text-lg font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
