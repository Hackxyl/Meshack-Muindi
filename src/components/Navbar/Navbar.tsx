import { Menu, X } from "lucide-react";
import { useState } from "react";

import "./Navbar.css";
import meshLogo from "../../assets/meshh.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
          aria-label="Meshack home"
        >
          <img
            src={meshLogo}
            alt="Mesh"
            className="logo-image"
          />
        <span className="logo-text">
          
        </span>
        MESHACK
        </a>

        {/* Navigation */}
        <nav
           id="main-navigation"
           className={`nav-links ${open ? "nav-open" : ""}`}
           aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="nav-cta"
          onClick={closeMenu}
        >
          Let's Talk
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((current) => !current)}
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
