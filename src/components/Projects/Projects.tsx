import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "AI · WEB APPLICATION",
    title: "Mimea Salama",
    description:
      "An intelligent plant health platform designed to help users identify plant health problems and access practical information for better crop care.",
    technologies: [
      "React",
      "JavaScript",
      "AI",
      "Vercel",
    ],
    featured: true,
    live: "https://mimea-salama.vercel.app",
    github: "https://github.com/Hackxyl",
  },
  {
    number: "02",
    category: "FULL-STACK · MANAGEMENT SYSTEM",
    title: "Kiangini ICT Centre",
    description:
      "A modern ICT centre management platform designed to manage users, bookings, announcements, services, and administrative operations through a centralized digital system.",
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "PostgreSQL",
    ],
    featured: true,
    live: "http://kiangini-ict-centre.onrender.com",  // 'visit live site'
    github: "https://github.com/Hackxyl",
  },

  
];

function GithubMark() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.832.091-.647.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.411-.012 2.739 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section className="projects section" id="projects">
      <div className="container">

        {/* Section Header */}
        <div className="projects-header">
          <div>
            <p className="section-label">
              MY PROJECTS
            </p>

            <h2>
              Things I've
              <br />
              <span>built.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of systems, applications, and digital
            products I've designed and developed to solve
            practical problems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <article
              className="project-card project-card-featured"
              key={project.title}
            >
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-body">
                <div className="project-info">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}

                  

                  <a
                    href="#contact"
                    aria-label={`Learn more about ${project.title}`}
                  >
                    <ArrowUpRight size={17} />
                  </a>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="other-projects">

            <div className="other-projects-heading">
              <span>MORE WORK</span>
              <div />
            </div>

            <div className="other-projects-grid">
              {otherProjects.map((project) => (
                <article
                  className="project-card project-card-small"
                  key={project.title}
                >
                  <div className="project-top">
                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-bottom">
                    <div className="project-tech">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubMark />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio CTA */}
        <div className="projects-cta">
          <p>
            Interested in how I build my projects?
          </p>

          <a
            href="https://github.com/Hackxyl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;