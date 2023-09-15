import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
    };
  }

  toggleNav = () => {
    this.setState({ nav: !this.state.nav });
  };

  closeNav = () => {
    this.setState({ nav: false });
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

    return (
      <>
        <div className="flex justify-center items-center w-full h-20 px-4 text-white bg-black fixed">
          <ul className="hidden md:flex space-x-4">
            {link.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link to={`/${link}`} onClick={this.closeNav}>
                  {link}
                </Link>
              </li>
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
                <li
                  key={id}
                  className="cursor-pointer py-4 text-center hover:bg-gray-600 capitalize"
                >
                  <Link to={`/${link}`} onClick={this.closeNav}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default NavBar;
