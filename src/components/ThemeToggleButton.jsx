// components/ThemeToggleButton.js
import React from "react";

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
    >
      {theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
    </button>
  );
};

export default ThemeToggleButton;
