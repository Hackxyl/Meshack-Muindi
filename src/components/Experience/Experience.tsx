
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import "./Experience.css";

const experiences = [
  
  {
    period: "2026",
    type: "INDUSTRIAL ATTACHMENT · SOFTWARE DEVELOPMENT",
    title: "ICT Centre Systems Development",
    organization: "Kiangini ICT Centre",
    description:
      "Worked on the development and deployment of a digital ICT centre management system covering bookings, users, announcements, services, and administrative operations.",
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "PostgreSQL",
      "Git",
      "Render",
    ],
    icon: BriefcaseBusiness,
  },
  {
    period: "2023 — PRESENT",
    type: "EDUCATION · BSC INFORMATION TECHNOLOGY",
    title: "Bachelor of Science in Information Technology",
    organization: "Taita Taveta University",
    description:
      "Developing a strong foundation in software development, web technologies, databases, networking, human-computer interaction, systems analysis, and information technology.",
    technologies: [
      "Programming",
      "Web Development",
      "Databases",
      "Networking",
      "Systems Analysis",
    ],
    icon: GraduationCap,
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        {/* Section Header */}
        <div className="experience-header">
          <div>
            <p className="section-label">
              EXPERIENCE
            </p>

            <h2>
              Where I've
              <br />
              <span>been.</span>
            </h2>
          </div>

          <p className="experience-intro">
            My journey across software development, IT support,
            systems development, and technology education.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <article
                className="experience-item"
                key={`${experience.organization}-${experience.title}`}
              >

                {/* Timeline Marker */}
                <div className="experience-marker">
                  <span />
                </div>

                {/* Date */}
                <div className="experience-period">
                  {experience.period}
                </div>

                {/* Experience Card */}
                <div className="experience-card">

                  <div className="experience-card-top">
                    <div className="experience-icon">
                      <Icon size={19} />
                    </div>

                    <span className="experience-type">
                      {experience.type}
                    </span>
                  </div>

                  <h3>
                    {experience.title}
                  </h3>

                  <p className="experience-organization">
                    {experience.organization}
                  </p>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <div className="experience-tech">
                    {experience.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* CTA */}
        <div className="experience-cta">
          <p>
            Looking for someone who can turn ideas into
            working systems?
          </p>

          <a href="#contact">
            Let's work together
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Experience;