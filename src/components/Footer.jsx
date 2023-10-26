import "../styles/Footer.css";

import React from "react";

import footerContent from "../content/footerContent.js";
const { footerText, socialLinks } = footerContent;

export default function Footer() {
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
