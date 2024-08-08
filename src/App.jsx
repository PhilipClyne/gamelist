import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import styles from "./style";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-black text-white" : null
        } w-full overflow-hidden`}
      >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <Header />
          </div>
        </div>

        <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Home />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
