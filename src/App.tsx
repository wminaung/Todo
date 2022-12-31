import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("dark");
  const [imgUrl] = useState({
    darkTheme:
      "md:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-[#282c34]",
    lightTheme:
      "md:bg-[url('./assets/images/bg-desktop-light.jpg')] bg-[url('./assets/images/bg-mobile-light.jpg')]",
  });

  const handleClick = (e: any) => {
    if (theme === "dark") {
      setTheme("light");
      const appTag = document.getElementById("App");
      if (appTag) {
        appTag.classList.remove();
      }
    } else {
      setTheme("dark");
    }
    console.log(theme);
  };

  return (
    <div
      id="App"
      className={`App transition-all ${
        theme === "dark" ? imgUrl.darkTheme : imgUrl.lightTheme
      }  bg-zinc-50 h-screen w-full`}
    >
      {/* <Navbar /> */}
      <div className="pt-20 ">
        <Home onClick={handleClick} isDarkTheme={theme === "dark"} />
      </div>
    </div>
  );
}

export default App;
