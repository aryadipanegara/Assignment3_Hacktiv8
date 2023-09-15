import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaHiking, FaSwimmer } from "react-icons/fa";

const interests = [
  { name: "Fotografer", icon: <FaCamera className="text-5xl" /> },
  { name: "Mendaki", icon: <FaHiking className="text-5xl" /> },
  { name: "Renang", icon: <FaSwimmer className="text-5xl" /> },
];

const Interest = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <div style={{ position: "relative", zIndex: 1, top: 100 }}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-8 text-white">
            Minat atau Hobi
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-lg text-center"
              >
                {interest.icon}
                <p className="mt-4 text-lg font-semibold">{interest.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
