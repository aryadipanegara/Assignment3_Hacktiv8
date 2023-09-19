import React from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const awards = [
  {
    title: "Penghargaan Terbaik dalam Kategori XYZ",
    year: 2022,
    description:
      "Penghargaan ini diberikan kepada saya atas pencapaian luar biasa dalam kategori XYZ pada tahun 2022.",
  },
  {
    title: "Penghargaan Prestasi Luar Biasa",
    year: 2021,
    description:
      "Penghargaan ini diberikan atas prestasi luar biasa yang telah saya raih pada tahun 2021.",
  },
  // Add more awards here
];

const Awards = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <div style={{ position: "relative", zIndex: 1, top: 100 }}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-8 text-white">
            Penghargaan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-opacity-50 p-6 rounded-lg shadow-lg border border-blue-500 text-center"
              >
                <div className="flex items-center mb-2">
                  <FaTrophy className="text-3xl text-yellow-500 mr-2" />
                  <h2 className="text-lg font-semibold text-white">
                    {award.title}
                  </h2>
                </div>
                <p className="text-gray-500 text-sm mb-2">{award.year}</p>
                <p className="text-gray-300">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
