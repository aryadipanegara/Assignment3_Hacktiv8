import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
      activeLink: localStorage.getItem("activeLink") || null,
      pageLoaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pageLoaded: true });
    }, 500);
  }

  toggleNav = () => {
    this.setState({ nav: !this.state.nav });
  };

  closeNav = () => {
    this.setState({ nav: false });
  };

  handleLinkClick = (link) => {
    localStorage.setItem("activeLink", link);
    this.setState({ activeLink: link });
  };

  render() {
    const link = [
      {
        id: 1,
        link: "home",
      },
      {
        id: 2,
        link: "about",
      },
      {
        id: 3,
        link: "experience",
      },
      {
        id: 4,
        link: "skills",
      },
      {
        id: 5,
        link: "interest",
      },
      {
        id: 6,
        link: "awards",
      },
    ];

    // Define the variants for the staggered animation
    const variants = {
      hidden: { opacity: 0, y: -10 },
      visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }, // Adjust the delay as needed
    };

    return (
      <>
        <AnimatePresence>
          {this.state.pageLoaded && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center items-center w-full h-20 px-4 text-white bg-black fixed">
                <ul className="hidden md:flex space-x-4">
                  {link.map(({ id, link }) => (
                    <motion.li
                      key={id}
                      className="cursor-pointer capitalize font-medium hover:scale-105 duration-200"
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={`/${link}`}
                        onClick={() => {
                          this.closeNav();
                          this.handleLinkClick(link);
                        }}
                        className={`${
                          this.state.activeLink === link
                            ? "text-white pb-1 border-b-2 border-white transition duration-300 ease-in-out"
                            : "text-gray-500"
                        }`}
                      >
                        {link}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div
                onClick={this.toggleNav}
                className={`cursor-pointer pr-4 z-10 text-gray-500 fixed right-4 top-4 md:hidden ${
                  this.state.nav ? "bg-white bg-opacity-80" : ""
                }`}
              >
                {this.state.nav ? <FaTimes size={30} /> : <FaBars size={30} />}
              </div>

              {this.state.nav && (
                <div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 z-50">
                  <ul className="text-white">
                    {link.map(({ id, link }) => (
                      <motion.li
                        key={id}
                        className="cursor-pointer py-4 text-center hover:bg-gray-600 capitalize"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          to={`/${link}`}
                          onClick={() => {
                            this.closeNav();
                            this.handleLinkClick(link);
                          }}
                          className={`${
                            this.state.activeLink === link
                              ? "text-white pb-1 border-b-2 border-white transition duration-300 ease-in-out"
                              : "text-gray-500"
                          }`}
                        >
                          {link}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
}

export default NavBar;
