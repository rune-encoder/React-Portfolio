import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import ThemeBtn from "./components/UI/ThemeBtn.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/UI/MainContent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // Check if user prefers dark mode in their Operating System and set the theme accordingly.
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode.matches);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  // Listen for changes in the theme if user clicked the button.
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (darkMode) {
      rootElement.classList.add("dark");
      rootElement.classList.remove("light");
    } else {
      rootElement.classList.add("light");
      rootElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Listen for changes if user changed theme in their Operating System.
  // This will also apply the theme on this website.
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [setDarkMode]);

  return (
    <>
      <Header>
        <ThemeBtn darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Nav />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
