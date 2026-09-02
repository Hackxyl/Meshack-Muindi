import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Grid */}
      <div className="hero-grid" />

      {/* Ambient Glows */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Hero Content */}
      <div className="container hero-content">

        {/* Availability Status */}
        <div className="hero-status">
          <span className="status-dot" />
          <span>Available for opportunities</span>
        </div>

        {/* Eyebrow */}
        <p className="hero-eyebrow">
          SOFTWARE DEVELOPER · WEB ENGINEER
        </p>

        {/* Main Heading */}
        <h1>
          I build digital
          <br />
          <span>experiences that work</span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          I'm Meshack, a software developer focused on building
          modern web applications, intelligent systems, and
          scalable digital solutions that solve real-world
          problems.
        </p>

        {/* Call To Actions */}
        <div className="hero-actions">

          <a
            href="#projects"
            className="button button-primary"
          >
            View My Work
            <ArrowUpRight size={18} />
          </a>

          <a
            href="#contact"
            className="button button-secondary"
          >
            Let's Connect
          </a>

        </div>

        {/* Social Links */}
      <div className="hero-socials">
  <a
    href="https://github.com/Hackxyl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    GH
  </a>

  <a
    href="https://www.linkedin.com/in/hackxyl-230b922aa"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    IN
  </a>
</div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="scroll-indicator"
        aria-label="Scroll to About section"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>

    </section>
  );
}

export default Hero;