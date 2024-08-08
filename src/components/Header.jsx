import React, { useContext, useEffect, useState } from "react";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("theme", theme);
  }, [theme]);
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <div className="flex items-center p-3">
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiOutlineMagnifyingGlass
          className={`${
            theme === "light" ? "text-black bg-white" : "text-white bg-black"
          } rounded-full w-8 h-8 p-1`}
        />
        <input
          type="text"
          className="ml-5 text-black bg-transparent outline-none"
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            className="cursor-pointer text-[35px] bg-slate-200 text-black rounded-full"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="cursor-pointer text-[35px] bg-slate-200 text-black rounded-full"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
