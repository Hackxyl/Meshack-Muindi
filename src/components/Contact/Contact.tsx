
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  BriefcaseBusiness,
  GitBranch,
  ExternalLink,
  Send,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

import "./Contact.css";

const EMAIL = "hackxyl58@gmail.com";
const PHONE = "+254114797246";

type FormStatus = "idle" | "sending" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Basic spam trap: real visitors should leave this field empty.
    if (String(formData.get("_honey") || "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("projectType") || "");
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !projectType || !message) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          _subject: `Portfolio enquiry: ${projectType}`,
          _template: "table",
          _honey: "",
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success !== "true") {
        throw new Error(
          "Your idea could not be sent. Please try again or email me directly."
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's talk about
            <br />
            <span>what's next.</span>
          </h2>

          <p className="contact-intro">
            Have a project, an idea, or an opportunity? Tell me a little
            about it. Let's explore how we can turn it into something
            meaningful.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact details */}
          <div className="contact-info">
            <div className="contact-info-heading">
              <span className="contact-eyebrow">CONTACT DETAILS</span>
              <h3>I'm all ears.</h3>
              <p>
                Share your idea or reach out through any of these channels.
              </p>
            </div>

            <a className="contact-item" href={`mailto:${EMAIL}`}>
              <div className="contact-icon">
                <Mail size={19} />
              </div>
              <div className="contact-item-content">
                <span>Email</span>
                <p>{EMAIL}</p>
              </div>
              <ArrowUpRight className="contact-item-arrow" size={18} />
            </a>

            <a className="contact-item" href={`tel:${PHONE}`}>
              <div className="contact-icon">
                <Phone size={19} />
              </div>
              <div className="contact-item-content">
                <span>Phone</span>
                <p>+254 114 797 246</p>
              </div>
              <ArrowUpRight className="contact-item-arrow" size={18} />
            </a>

            <div className="contact-item contact-item-static">
              <div className="contact-icon">
                <MapPin size={19} />
              </div>
              <div className="contact-item-content">
                <span>Location</span>
                <p>Voi, Kenya</p>
              </div>
            </div>

            <a
              className="contact-item"
              href="https://www.linkedin.com/in/hackxyl-230b922aa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <BriefcaseBusiness size={19} />
              </div>
              <div className="contact-item-content">
                <span>LinkedIn</span>
                <p>Let's connect professionally</p>
              </div>
              <ArrowUpRight className="contact-item-arrow" size={18} />
            </a>

            <div className="contact-direct-note">
              <span className="contact-direct-dot" />
              <p>Open to interesting projects and opportunities.</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-card contact-form-card">
            <div className="contact-card-glow" />

            <div className="contact-card-content">
              <div className="contact-form-heading">
                <div className="contact-card-icon">
                  <MessageCircle size={21} />
                </div>

                <span className="contact-card-label">
                  START A CONVERSATION
                </span>

                <h3>Tell me about it.</h3>

                <p>
                  A few details are all I need to get the conversation started.
                </p>
              </div>

              {status === "success" ? (
                <div className="contact-form-success" role="status">
                  <CheckCircle2 size={34} />
                  <h4>Idea submitted successfully!</h4>
                  <p>
                    Thanks for reaching out.I'll get back to you soon after reviewing it.
                    
                  </p>
                  <button
                    type="button"
                    className="contact-button"
                    onClick={() => setStatus("idle")}
                  >
                    Have another idea?
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="contact-name">Your name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Meshack Muindi"
                        autoComplete="name"
                        maxLength={100}
                        required
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-email">Email address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        autoComplete="email"
                        maxLength={254}
                        required
                      />
                    </div>
                  </div>

                  
<div className="contact-field">
  <label htmlFor="contact-project">
    What can I help you with?
  </label>

  <select
    id="contact-project"
    name="projectType"
    defaultValue=""
    required
  >
    <option value="" disabled>
      Select a service or opportunity
    </option>

    <option value="Website development">
      Website Development
    </option>

    <option value="Full-stack web application">
      Full-Stack Web Application
    </option>

    <option value="Backend and API development">
      Backend Systems & API Development
    </option>

    <option value="Database design and development">
      Database Design & Development
    </option>

    <option value="Data analysis">
      Data Analysis
    </option>

    <option value="UI/UX design and website redesign">
      UI/UX Design & Website Redesign
    </option>

    <option value="Technical support and troubleshooting">
      IT Support & Technical Troubleshooting
    </option>

    <option value="Freelance collaboration">
      Freelance Collaboration
    </option>

    <option value="Job or internship opportunity">
      Job or Internship Opportunity
    </option>

    <option value="Other">
      Something Else
    </option>
  </select>
</div>


                  <div className="contact-field">
                    <label htmlFor="contact-message">Your idea</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me a little about your idea, goals, or timeline..."
                      rows={5}
                      minLength={10}
                      maxLength={5000}
                      required
                    />
                    <span className="contact-field-hint">
                      A brief and clear description is a great place to start.
                    </span>
                  </div>

                  {/* Honeypot field for basic bot filtering */}
                  <div className="contact-honeypot" aria-hidden="true">
                    <label htmlFor="contact-website">
                      Leave this field empty
                    </label>
                    <input
                      id="contact-website"
                      type="text"
                      name="_honey"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === "error" && (
                    <p className="contact-form-error" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="contact-button contact-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <LoaderCircle className="contact-spinner" size={18} />
                        Turning your idea into a reality ...
                      </>
                    ) : (
                      <>
                        Turn your idea into a reality
                        <Send size={17} />
                      </>
                    )}
                  </button>

                  <p className="contact-form-privacy">
                    Your details are used to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="contact-bottom">
          <div className="contact-bottom-heading">
            <span className="contact-eyebrow">ELSEWHERE ONLINE</span>
            <p>Find me around the web.</p>
          </div>

          <div className="contact-socials">
            <a
              href={`https://wa.me/${PHONE.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="https://github.com/Hackxyl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch size={17} />
              <span>GitHub</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="https://www.linkedin.com/in/hackxyl-230b922aa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BriefcaseBusiness size={17} />
              <span>LinkedIn</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
