import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaFilePdf } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <div style={{ position: "relative", zIndex: 1, top: 100 }}>
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-semibold text-center mb-8 text-white">
            About Me
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-lg mb-8"
          >
            <p className="text-gray-700">
              I'm Muhammad Arya Dipanegara Gunawan, a junior Front End Developer
              with a strong passion for creating engaging and interactive web
              experiences. I have a solid foundation in HTML, CSS, JavaScript,
              and PHP, and I continuously strive to expand my skills and stay
              up-to-date with the latest web development trends. I enjoy
              collaborating with teams to bring designs to life and optimize
              website performance. Let's work together to build innovative and
              user-friendly web solutions that make a positive impact!
            </p>
            <p className="text-gray-700 mt-4">
              Saya sangat antusias dalam Front-End dan selalu mencari peluang
              untuk belajar dan berkembang. Selain itu, saya juga sering
              melakukan street Fotografer di waktu luang saya.
            </p>
          </motion.div>

          <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-lg mb-8"
          >
            <div className="flex items-center">
              <FaGraduationCap className="text-xl text-blue-500 mr-2" />
              <p className="text-gray-700">
                Universitas Pelita Bangsa, Cikarang
              </p>
            </div>
            <p className="text-gray-700 mt-2">
              Gelar: Sarjana Komputer, Tahun Lulus: 2024
            </p>
          </motion.div>

          <h2 className="text-2xl font-semibold mb-4 text-white">
            Work Experience
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-lg mb-8"
          >
            <div className="flex items-center">
              <FaBriefcase className="text-xl text-blue-500 mr-2" />
              <p className="text-gray-700">[Nama Perusahaan], [Lokasi]</p>
            </div>
            <p className="text-gray-700 mt-2">
              Posisi: [Posisi Anda], Tahun Mulai - Tahun Selesai: [Tahun Mulai]
              - [Tahun Selesai]
            </p>
            <p className="text-gray-700 mt-2">
              Deskripsi: [Deskripsi Singkat tentang Pengalaman Kerja Anda]
            </p>
          </motion.div>

          <h2 className="text-2xl font-semibold mb-4 text-white">Resume</h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="flex items-center">
              <FaFilePdf className="text-xl text-blue-500 mr-2" />
              <p className="text-gray-700">
                Untuk melihat resume saya, Anda dapat mengunduhnya di [Tautan
                Resume].
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
