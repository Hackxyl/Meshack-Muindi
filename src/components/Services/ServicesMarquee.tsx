
import "./ServicesMarquee.css";

const services = [
  "Software Development",
  "Web Engineering",
  "Full-Stack Development",
  "Data Analysis",
  "Backend Systems",
  "API Development",
  "Database Design",
  "UI/UX Design",
  "IT Support",
  "Technical Troubleshooting",
];

export default function ServicesMarquee() {
  return (
    <section
      className="services-marquee"
      aria-label="Services and capabilities"
    >
      <div className="services-marquee-track">
        {[0, 1].map((group) => (
          <div
            className="services-marquee-group"
            key={group}
            aria-hidden={group === 1 ? "true" : undefined}
          >
            {services.map((service) => (
              <span className="service-marquee-item" key={service}>
                <span className="service-marquee-dot" />
                {service}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
