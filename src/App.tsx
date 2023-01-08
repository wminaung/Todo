import React, { useState } from "react";

import "./App.css";
import Home from "./pages/Home";

type AppImgUrlState = {
  darkTheme: string;
  lightTheme: string;
};

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [imgUrl] = useState<AppImgUrlState>({
    darkTheme:
      "md:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-[#282c34]",
    lightTheme:
      "md:bg-[url('./assets/images/bg-desktop-light.jpg')] bg-[url('./assets/images/bg-mobile-light.jpg')]",
  });

  const handleClickForTheme = (e: React.MouseEvent<HTMLDivElement>) => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  console.count("App is render");
  return (
    <div
      id="App"
      className={`App transition-all ${
        theme === "dark" ? imgUrl.darkTheme : imgUrl.lightTheme
      }  h-screen w-full`}
    >
      <div className="pt-20 ">
        <Home
          onClickForTheme={handleClickForTheme}
          isDarkTheme={theme === "dark"}
        />
      </div>{" "}
    </div>
  );
}

export default App;
