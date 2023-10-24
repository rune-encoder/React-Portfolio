import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import ThemeBtn from "./components/UI/ThemeBtn.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/UI/MainContent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

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

  return (
    <>
      <Header>
        <Nav>
          <ThemeBtn darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
