import React, { Component } from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaHiking,
  FaSwimmer,
  FaBasketballBall,
  FaMusic,
} from "react-icons/fa";

const interests = [
  {
    id: 1,
    name: "Fotografer",
    icon: <FaCamera className="text-5xl text-blue-500" />,
  },
  {
    id: 2,
    name: "Mendaki",
    icon: <FaHiking className="text-5xl text-green-500" />,
  },
  {
    id: 3,
    name: "Renang",
    icon: <FaSwimmer className="text-5xl text-blue-300" />,
  },
  {
    id: 4,
    name: "Bola Basket",
    icon: <FaBasketballBall className="text-5xl text-orange-500" />,
  },
  {
    id: 5,
    name: "Bernyanyi",
    icon: <FaMusic className="text-5xl text-purple-500" />,
  },
];

class Interest extends Component {
  render() {
    return (
      <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
        <div style={{ position: "relative", zIndex: 1, top: 100 }}>
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-semibold text-center mb-8 text-white">
              Interest
            </h1>
            <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12 justify-center">
              {interests.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="item-tech flex cursor-pointer items-center gap-2 rounded border border-blue-500 px-2 py-2 hover:bg-blue-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                    {item.icon}
                  </div>
                  <div className="flex items-center text-sm md:text-base lg:text-lg text-white">
                    <div className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                      {item.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interest;
