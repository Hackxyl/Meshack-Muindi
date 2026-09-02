import {
  ArrowUpRight,
  Mail,
  ArrowUp,
} from "lucide-react";

import "./Footer.css";
import meshLogo from "../../assets/meshh.jpeg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Top */}
        <div className="footer-top">

          <div className="footer-brand">
            <img src={meshLogo} alt="Meshack Logo" className="logo-image" />
            <a href="#home" className="footer-logo">
              MESHACK
            </a>

            <p>
              Software developer and web engineer building
              modern digital experiences, intelligent systems,
              and practical solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <span className="footer-label">
              NAVIGATION
            </span>

            <nav className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* Connect */}
          <div className="footer-column">
            <span className="footer-label">
              CONNECT
            </span>

            <nav className="footer-links">
              <a
                href="https://github.com/Hackxyl"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/hackxyl-230b922aa"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <a
                href="Whatsapp://send?phone=+254114797246"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
                <ArrowUpRight size={14} />
              </a>

              <a href="#contact">
                Email
                <Mail size={14} />
              </a>
            </nav>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} MESHACK. All rights reserved.
          </p>

          <div className="footer-status">
            <span className="footer-status-dot" />
            <span>BUILDING THE FUTURE</span>
          </div>

          <a
            href="#home"
            className="back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;