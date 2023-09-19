import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="#"
            className="text-2xl hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-blue-500 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Muhammad Arya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
