import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "[Nama Perusahaan]",
    position: "[Jabatan]",
    description: "[Deskripsi Pengalaman]",
  },
];

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <div
        className="container mx-auto p-4"
        style={{ position: "relative", zIndex: 1, top: 100 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-white text-center">
          Experience
        </h1>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-opacity-50 rounded-lg shadow-lg p-6 mb-4 border border-blue-500"
          >
            <h2 className="text-xl font-semibold text-white">
              {experience.company} - {experience.position}
            </h2>
            <p className="text-gray-300 mt-2">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
