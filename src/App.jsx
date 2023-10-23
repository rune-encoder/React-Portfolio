import { Outlet } from "react-router-dom";

import Header from "./components/Header.jsx";
import ThemeBtn from "./components/UI/ThemeBtn.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/UI/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header>
        <Nav>
          <ThemeBtn />
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
