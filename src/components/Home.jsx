import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen text-white flex items-center justify-center py-16">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={HeroImage}
              alt="My Profile"
              className="rounded-full w-48 h-48 mx-auto md:w-64 md:h-64 object-cover shadow-lg"
            />
          </div>
          <div className="text-center md:text-left relative">
            <h1 className="text-5xl font-extrabold mb-4">
              <span className="typing-animation">Hi, I'm Arya</span>
            </h1>
            <p className="text-xl mb-6">
              A Junior Front-End Developer with a passion for creating
              <span className="text-blue-500"> interactive</span> and
              <span className="text-blue-500"> user-friendly</span> websites.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <FaHtml5 className="text-3xl text-orange-500" />
              <FaCss3 className="text-3xl text-blue-500" />
              <FaJsSquare className="text-3xl text-yellow-500" />
              <FaReact className="text-3xl text-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
