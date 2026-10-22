
import { ArrowUpRight, ExternalLink } from "lucide-react";
import "./Projects.css";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  status: "LIVE" | "IN DEVELOPMENT" | "DATA ANALYSIS" | "PORTFOLIO";
  live?: string;
};

const projects: Project[] = [
  {
    number: "01",
    category: "AI · AGRICULTURE · WEB APPLICATION",
    title: "Mimea Salama",
    description:
      "An AI-powered plant health platform that helps users identify plant diseases, understand prevention methods, and access practical crop-care guidance.",
    technologies: ["React", "JavaScript", "AI", "Leaflet", "Vercel"],
    featured: true,
    status: "LIVE",
    live: "https://mimea-salama.vercel.app",
  },
  {
    number: "02",
    category: "FULL-STACK · MANAGEMENT SYSTEM",
    title: "Kiangini ICT Centre",
    description:
      "A centralized ICT centre management platform designed to streamline bookings, announcements, facilities, user management, and administrative operations.",
    technologies: ["Python", "Django", "JavaScript", "PostgreSQL"],
    featured: true,
    status: "LIVE",
    live: "https://kiangini-ict-centre.hackxyl58.workers.dev/",
  },
  {
    number: "03",
    category: "FULL-STACK · SPORTS TECHNOLOGY",
    title: "TTU Sports Management System",
    description:
      "A university sports platform designed to organize teams, player registrations, fixtures, results, announcements, and sports administration.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    featured: true,
    status: "IN DEVELOPMENT",
  },
  {
    number: "04",
    category: "DATA ANALYTICS · BUSINESS INTELLIGENCE",
    title: "Adidas Sales Analysis",
    description:
      "A sales analysis project exploring business performance through structured data, pivot tables, sales comparisons, and dashboard-style reporting.",
    technologies: ["Excel", "Data Analysis", "Pivot Tables", "Dashboards"],
    featured: false,
    status: "DATA ANALYSIS",
  },
  {
    number: "05",
    category: "SOFTWARE DEVELOPMENT · WEB SYSTEM",
    title: "Library Management System",
    description:
      "A web-based system concept for organizing library books, user records, and borrowing activities through a centralized interface.",
    technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
    featured: false,
    status: "IN DEVELOPMENT",
  },
  {
    number: "06",
    category: "WEB DEVELOPMENT · LEARNING PLATFORM",
    title: "CodeWithMe",
    description:
      "A web learning-platform project focused on presenting educational content through a structured interface and interactive web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Django"],
    featured: false,
    status: "IN DEVELOPMENT",
  },
  {
    number: "07",
    category: "PERSONAL BRAND · WEB ENGINEERING",
    title: "Meshack Portfolio",
    description:
      "My personal developer portfolio, built to showcase selected projects, technical capabilities, and opportunities for collaboration.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    featured: false,
    status: "PORTFOLIO",
    live: "https://hackxyl.github.io/Meshack-Muindi/",
  },
];

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <header className="projects-header">
          <div className="projects-heading">
            <p className="section-label">SELECTED WORK</p>

            <h2>
              Ideas into
              <br />
              <span>digital products.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of applications, management systems, and
            analytical projects built to solve practical problems
            through software and data.
          </p>
        </header>

        <div className="projects-section-heading">
          <span>FEATURED PROJECTS</span>
          <span className="projects-count">01 — 03</span>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <article
              className="project-card project-card-featured"
              key={project.title}
            >
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-body">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div
                    className="project-tech"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <span
                    className={`project-status project-status-${project.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <span className="project-status-dot" />
                    {project.status}
                  </span>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-link"
                      aria-label={`Visit ${project.title} website`}
                    >
                      View project
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="other-projects">
          <div className="projects-section-heading">
            <span>MORE WORK</span>
            <span className="projects-count">
              {String(otherProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="other-projects-grid">
            {otherProjects.map((project) => (
              <article
                className="project-card project-card-small"
                key={project.title}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-small-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div
                  className="project-tech"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span
                    className={`project-status project-status-${project.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <span className="project-status-dot" />
                    {project.status}
                  </span>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="projects-cta">
          <div className="projects-cta-copy">
            <span>HAVE AN IDEA?</span>
            <p>Let's build something meaningful together.</p>
          </div>

          <a href="#contact">
            Tell me your project idea
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
