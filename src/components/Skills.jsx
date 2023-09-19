import React, { Component } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    name: "HTML",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    status: "Advanced",
  },
  {
    id: 2,
    name: "CSS",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    status: "Advanced",
  },
  {
    id: 3,
    name: "PHP",
    imageUrl:
      "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
    status: "Advanced",
  },
  {
    id: 4,
    name: "JavaScript",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
    status: "Advance",
  },
  {
    id: 5,
    name: "Codeigniter",
    imageUrl:
      "https://cdn-peanutsquare.b-cdn.net/wp-content/uploads/2022/11/codeigniter-logo.png",
    status: "Intermediate",
  },
  {
    id: 6,
    name: "NodeJS",
    imageUrl:
      "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
    status: "Beginner",
  },
  {
    id: 7,
    name: "Tailwind",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    status: "Advance",
  },
  {
    id: 8,
    name: "Bootstrap",
    imageUrl:
      "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
    status: "Intermediate",
  },
  {
    id: 9,
    name: "ReactJS",
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    status: "Beginner",
  },
];

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
  }

  handleTabChange = (tabNumber) => {
    this.setState({ activeTab: tabNumber });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
        <div style={{ position: "relative", zIndex: 1, top: 100 }}>
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-semibold text-center mb-8 text-white">
              Skills
            </h1>
            <ul className="flex flex-wrap text-sm font-medium text-center text-blue-500 dark:text-blue-400 mb-5">
              <li className="mr-2">
                <button
                  className={`inline-block px-4 py-3 rounded-lg hover:text-white ${
                    activeTab === 1
                      ? "text-blue-500 bg-blue-500 bg-opacity-10"
                      : ""
                  }`}
                  onClick={() => this.handleTabChange(1)}
                >
                  Tech Stack
                </button>
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
              {skills.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="item-tech flex cursor-pointer items-center gap-2 rounded border border-blue-500 px-2 py-2 hover:bg-blue-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                    <img
                      alt={item.name}
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                      src={item.imageUrl}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex items-center text-sm md:text-base lg:text-lg text-white">
                    <div className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                      {item.name}
                    </div>
                    <div className="status-tech opacity-0 absolute mt-5 text-[10px] text-blue-500 transition-all duration-300 md:text-xs lg:text-sm">
                      {item.status}
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

export default Skills;
