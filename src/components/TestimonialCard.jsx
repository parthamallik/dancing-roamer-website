import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      {testimonial.photo && (
        <img
          className="testimonial-card__photo"
          src={testimonial.photo}
          alt={testimonial.names}
        />
      )}
      <figcaption className="testimonial-card__names">{testimonial.names}</figcaption>
      <span className="testimonial-card__quote-mark">&ldquo;</span>
      <blockquote>{testimonial.quote}</blockquote>
    </figure>
  );
}
