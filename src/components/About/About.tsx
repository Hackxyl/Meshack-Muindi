import {
  Code2,
  Database,
  Globe,
  Layers3,
} from "lucide-react";

import "./About.css";

const capabilities = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building reliable applications with clean architecture, maintainable code, and practical problem-solving.",
  },
  {
    icon: Globe,
    title: "Web Engineering",
    description:
      "Creating responsive and modern web experiences with strong attention to performance, usability, and detail.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description:
      "Designing APIs, databases, authentication systems, and backend services that support real-world applications.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Connecting frontend interfaces, backend logic, databases, and deployment into complete digital products.",
  },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Building with purpose,
            <br />
            <span>not just code.</span>
          </h2>

          <p className="section-intro">
            I'm Meshack Muindi, a software developer, web engineer, Data analyst, and technology enthusiast. I'm
            passionate about turning ideas into useful digital
            products and solving problems through technology.
          </p>
        </div>

        <div className="about-layout">

          <div className="about-story">
            <p>
              My work sits at the intersection of software
              development, web engineering, and digital
              problem-solving. I enjoy taking an idea from
              concept to a working system.
            </p>

            <p>
              I work across the stack, building interfaces,
              backend systems, APIs, databases, and applications
              that are designed to be practical, scalable, and
              easy to use.
            </p>

            <p>
              I'm continuously learning, experimenting with new
              technologies, and building projects that challenge
              me to become a better engineer.
            </p>

            <a
              href="#contact"
              className="about-link"
            >
              Let's work together
              <span>→</span>
            </a>
          </div>

          <div className="capabilities">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="capability-card"
                  key={item.title}
                >
                  <div className="capability-icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>

                    <p>
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

        </div>

        <div className="tech-strip">

          <span>TECHNOLOGIES</span>

          <div className="tech-list">
            <span>React</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Django</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Git</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;