import {
  ArrowUp,
} from "lucide-react";

import "./Footer.css";
import meshLogo from "../../assets/meshh.jpeg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Identity */}
        <div className="footer-main">

          <div className="footer-brand">
            <img
              src={meshLogo}
              alt="Meshack"
              className="logo-image"
            />

            <div className="footer-brand-content">
              <a href="#home" className="footer-logo">
                MESHACK MUINDI
              </a>

              <p>
                Full-stack developer
              </p>
            </div>
          </div>

          <div className="footer-statement">
            <span className="footer-command">
              &lt;/&gt;
            </span>

            <p>
              Building digital experiences that work.
            </p>
          </div>

        </div>

        {/* Technical Divider */}
        <div className="footer-divider">
          <span>END OF PAGE</span>

          <span className="footer-line" />

          <span>DEVELOPED AND DESIGNED BY <a href="#about">MESHACK</a></span>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            &copy; {currentYear} MESHACK. All rights reserved.
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