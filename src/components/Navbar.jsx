import React, { useState, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  const handleScroll = () => {
    const section = document.getElementById("your-section-id");
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <div
          className={`w-full flex py-6 justify-between items-center navbar ${
            scrolled ? "fixed top-0 left-0 right-0 bg-black" : ""
          }`}
        >
          <Link to="/">
            <img src={logo} alt="logo" className="w-[222px] h-[84px]" />
          </Link>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } `}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <Link
                to="/cart"
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
              >
                Cart
              </Link>
            </li>
          </ul>

          {/* For mobile */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-10"
                    } text-white`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
