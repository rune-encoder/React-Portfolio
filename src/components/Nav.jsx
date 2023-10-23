import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar.jsx";

import "../styles/Navbar.css";

export default function Nav(props) {
  return (
    <nav>
      <Navbar
        links={[
          <Link className="nav" key={1} to="/About">
            About
          </Link>,
          <Link className="nav" key={2} to="/Portfolio">
            Portfolio
          </Link>,
          <Link className="nav" key={3} to="/Contact">
            Contact
          </Link>,
          <Link className="nav" key={4} to="/Resume">
            Resume
          </Link>,
        ]}
      />
      {props.children}
    </nav>
  );
}
