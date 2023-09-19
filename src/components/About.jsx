import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaFilePdf } from "react-icons/fa";

const About = () => {
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <div style={{ position: "relative", zIndex: 1, top: 100 }}>
        <div className="container mx-auto p-4">
          <motion.h1
            className="text-4xl font-semibold text-center mb-8 text-white relative"
            variants={containerAnimation}
            initial="initial"
            animate="animate"
          >
            About Me
            <div className="h-1 w-44 bg-blue-500 absolute left-1/2 transform -translate-x-1/2 rounded" />
          </motion.h1>
          <motion.div
            variants={containerAnimation}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={sectionAnimation}
              className="bg-opacity-50 p-6 rounded-lg shadow-lg mb-8 border border-blue-500"
            >
              <p className="text-white text-lg">
                I'm Muhammad Arya Dipanegara Gunawan, a junior Front End
                Developer with a strong passion for creating engaging and
                interactive web experiences. I have a solid foundation in HTML,
                CSS, JavaScript, and PHP, and I continuously strive to expand my
                skills and stay up-to-date with the latest web development
                trends. I enjoy collaborating with teams to bring designs to
                life and optimize website performance. Let's work together to
                build innovative and user-friendly web solutions that make a
                positive impact!
              </p>
              <p className="text-white mt-4 text-lg">
                Saya sangat antusias dalam Front-End dan selalu mencari peluang
                untuk belajar dan berkembang. Selain itu, saya juga sering
                melakukan street Fotografer di waktu luang saya.
              </p>
            </motion.div>

            <motion.h2
              className="text-2xl font-semibold mb-4 text-white"
              variants={sectionAnimation}
            >
              Education
            </motion.h2>
            <motion.div
              variants={sectionAnimation}
              className="bg-opacity-50 p-6 rounded-lg shadow-lg mb-8 border border-blue-500"
            >
              <div className="flex items-center">
                <FaGraduationCap className="text-2xl text-blue-500 mr-2" />
                <p className="text-white text-lg">
                  Universitas Pelita Bangsa, Cikarang
                </p>
              </div>
              <p className="text-white mt-2 text-lg">
                Gelar: Sarjana Komputer, Tahun Lulus: 2024
              </p>
            </motion.div>

            <motion.h2
              className="text-2xl font-semibold mb-4 text-white"
              variants={sectionAnimation}
            >
              Work Experience
            </motion.h2>
            <motion.div
              variants={sectionAnimation}
              className="bg-opacity-50 p-6 rounded-lg shadow-lg mb-8 border border-blue-500"
            >
              <div className="flex items-center">
                <FaBriefcase className="text-2xl text-blue-500 mr-2" />
                <p className="text-white text-lg">
                  [Nama Perusahaan], [Lokasi]
                </p>
              </div>
              <p className="text-white mt-2 text-lg">
                Posisi: [Posisi Anda], Tahun Mulai - Tahun Selesai: [Tahun
                Mulai] - [Tahun Selesai]
              </p>
              <p className="text-white mt-2 text-lg">
                Deskripsi: [Deskripsi Singkat tentang Pengalaman Kerja Anda]
              </p>
            </motion.div>

            <motion.h2
              className="text-2xl font-semibold mb-4 text-white"
              variants={sectionAnimation}
            >
              Resume
            </motion.h2>
            <motion.div
              variants={sectionAnimation}
              className="bg-opacity-50 p-6 rounded-lg shadow-lg border border-blue-500"
            >
              <div className="flex items-center">
                <FaFilePdf className="text-2xl text-blue-500 mr-2" />
                <p className="text-white text-lg">
                  Untuk melihat resume saya, Anda dapat mengunduhnya di [Tautan
                  Resume].
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
