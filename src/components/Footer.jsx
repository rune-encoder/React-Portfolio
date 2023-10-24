import "../styles/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

export default function Footer(props) {
  return (
    <footer>
      {props.children}
      <div className="footer-links-group">
        <a
          href="https://github.com/rune-encoder"
          target="_blank"
          title="Visit Christian's Github"
          data-descr="GitHub"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="www.linkedin.com/in/
          christian-palacios-3536281aa
          "
          target="_blank"
          title="Visit Christian's LinkedIn"
          data-descr="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://profile.indeed.com/p/christianp-j1b1fb2"
          target="_blank"
          title="Visit Christian's Indeed"
          data-descr="Indeed"
        >
          <SiIndeed className="icon" />
        </a>
        <a
          href="https://twitter.com/rune_encoder"
          target="_blank"
          title="Visit Christian's Twitter"
          data-descr="Twitter"
        >
          <FaTwitterSquare className="icon" />
        </a>
        <a
          href="https://www.instagram.com/rune_encoder/"
          target="_blank"
          title="Visit Christian's Instagram"
          data-descr="Instagram"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://open.spotify.com/user/1238388654?si=w9VCJZNHSyO980eQ_OVUEw"
          target="_blank"
          title="Visit Christian's Spotify"
          data-descr="Spotify"
        >
          <FaSpotify className="icon" />
        </a>
      </div>
      <h5 className="footer-text">Website by Christian Palacios</h5>
    </footer>
  );
}
