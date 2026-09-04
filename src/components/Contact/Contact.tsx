import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        {/* Header */}
        <div className="contact-header">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's build
            <br />
            <span>something.</span>
          </h2>

          <p className="contact-intro">
            Have an idea, project, opportunity, or problem you'd
            like to solve? I'm always open to meaningful
            conversations and interesting technical challenges.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-layout">

          {/* Contact Information */}
          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={19} />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:hackxyl58@gmail.com">
                  hackxyl58@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={19} />
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+254114797246">+254 114 797 246</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={19} />
              </div>

              <div>
                <span>Location</span>
                <p>Voi, Kenya</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                
              </div>

              <div>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/hackxyl-230b922aa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/hackxyl-230b922aa
                </a>
              </div>
            </div>

          </div>

          {/* Contact CTA Card */}
          <div className="contact-card">

            <div className="contact-card-glow" />

            <div className="contact-card-content">

              <span className="contact-card-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h3>
                Let's turn your
                <br />
                idea into reality.
              </h3>

              <p>
                Whether it's a web application, intelligent
                system, business platform, or something entirely
                new, let's discuss what we can build together.
              </p>

              <a
                href="mailto:hackxyl58@gmail.com?subject=Project%20Inquiry&body=Hello%20Meshack,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you."
             className="contact-button"
              >
              Start a conversation
             <ArrowUpRight size={17} />
            </a>

            </div>

          </div>

        </div>

        {/* Social Links */}
        <div className="contact-bottom">

          <div>
            <span>CONNECT</span>
            <p>Find me online.</p>
          </div>

          <div className="contact-socials">

            <a
              href="whatsapp://send?phone=+254114797246"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <span>WhatsApp</span>
            </a>

            <a
              href="https://github.com/Hackxyl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hackxyl-230b922aa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
             
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;