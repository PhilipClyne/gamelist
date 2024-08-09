// src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetail from "./pages/GameDetail";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ? storedTheme : "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartProvider>
        {" "}
        {/* Wrap your app with CartProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;
