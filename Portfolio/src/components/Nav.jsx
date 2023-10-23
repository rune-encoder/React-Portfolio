import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar.jsx";

export default function Nav(props) {
  console.log(props);

  return (
    <Navbar
      links={[
        <Link key={1} to="/About">
          About
        </Link>,
        <Link key={2} to="/Portfolio">
          Portfolio
        </Link>,
        <Link key={3} to="/Contact">
          Contact
        </Link>,
        <Link key={4} to="/Resume">
          Resume
        </Link>,
      ]}
    />
  );
}
