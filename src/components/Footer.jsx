import React from "react";
import "../styles/Footer.css";
import footerContent from "../content/footerContent.js";

export default function Footer() {
  const { footerText, socialLinks } = footerContent;
  return (
    <footer>
      <div className="footer-links-group">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            title={`Visit Christian's ${link.name}`}
            data-descr={link.name}
          >
            {React.createElement(link.icon, { className: "icon" })}
          </a>
        ))}
      </div>
      <h5 className="footer-text">{footerText}</h5>
    </footer>
  );
}
