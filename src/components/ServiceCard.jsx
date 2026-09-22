import "./ServiceCard.css";

export default function ServiceCard({ service, reverse = false }) {
  return (
    <article className={`service-card ${reverse ? "service-card--reverse" : ""}`}>
      <div className="service-card__media">
        <img src={service.image} alt={service.title} loading="lazy" />
        {service.generated && <span className="service-card__badge">New</span>}
      </div>
      <div className="service-card__body">
        <span className="eyebrow">{service.tagline}</span>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <ul className="service-card__points">
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
