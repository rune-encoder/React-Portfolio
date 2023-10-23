import { Outlet } from "react-router-dom";

import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/UI/Main.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/App.css";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <h1>App.JSX</h1>
      <Main>
      <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
