import React from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const awards = [
  {
    id: 1,
    title: "Penghargaan Terbaik dalam Kategori XYZ",
    year: 2022,
    description:
      "Penghargaan ini diberikan kepada saya atas pencapaian luar biasa dalam kategori XYZ pada tahun 2022.",
  },
  {
    id: 2,
    title: "Penghargaan Prestasi Luar Biasa",
    year: 2021,
    description:
      "Penghargaan ini diberikan atas prestasi luar biasa yang telah saya raih pada tahun 2021.",
  },
  {
    id: 3,
    title: "Penghargaan Prestasi Luar Biasa",
    year: 2021,
    description:
      "Penghargaan ini diberikan atas prestasi luar biasa yang telah saya raih pada tahun 2021.",
  },
  {
    id: 4,
    title: "Penghargaan Prestasi Luar Biasa",
    year: 2021,
    description:
      "Penghargaan ini diberikan atas prestasi luar biasa yang telah saya raih pada tahun 2021.",
  },
  // Tambahkan penghargaan lainnya di sini
];

const Awards = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <div style={{ position: "relative", zIndex: 1, top: 100 }}>
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-semibold text-center mb-8 text-white">
            Penghargaan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="bg-opacity-30 p-4 rounded-lg shadow-lg border border-blue-500 text-center text-white"
              >
                <div className="flex items-center justify-center">
                  <FaTrophy className="text-3xl text-yellow-500 mr-2" />
                  <h2 className="text-xl font-semibold">{award.title}</h2>
                </div>
                <p className="text-gray-500 text-sm mb-2">{award.year}</p>
                <p className="text-gray-700">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
