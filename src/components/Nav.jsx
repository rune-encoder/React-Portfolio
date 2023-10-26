import { Link, useLocation } from "react-router-dom";
import Navbar from "./UI/Navbar.jsx";

export default function Nav() {
  const location = useLocation();
  const links = [
    { id: 1, path: "/About", text: "About" },
    { id: 2, path: "/Portfolio", text: "Portfolio" },
    { id: 3, path: "/Contact", text: "Contact" },
    { id: 4, path: "/Resume", text: "Resume" },
  ];

  const isLinkDisabled = (link) => {
    if (location.pathname === "/" && link.path === "/About") {
      return true;
    }

    return link.path === location.pathname;
  };

  return (
    <div className="nav-group">
      <nav>
        <Navbar
          links={links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={isLinkDisabled(link) ? "active" : ""}
            >
              {link.text}
            </Link>
          ))}
        />
      </nav>
    </div>
  );
}
