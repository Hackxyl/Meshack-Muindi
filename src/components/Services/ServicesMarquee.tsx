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
    <section className="services-section">
      <div className="services-heading">
        <span className="services-tag">WHAT I CAN DO</span>
      </div>

      <div className="services-marquee">
        <div className="services-marquee-track">
          {[0, 1].map((group) => (
            <div
              className="services-marquee-group"
              key={group}
              aria-hidden={group === 1}
            >
              {services.map((service) => (
                <div className="service-marquee-item" key={service}>
                  <span className="service-marquee-dot" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}