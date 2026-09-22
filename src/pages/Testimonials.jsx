import TestimonialCard from "../components/TestimonialCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { testimonials } from "../data/content.js";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <>
      <section className="section testimonials-hero">
        <div className="container">
          <span className="eyebrow">Love Notes</span>
          <h1>What couples say after the last dance</h1>
          <p>
            Real messages from couples and families Dancing Roamer has choreographed for — shared with
            their permission.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="testimonials-page-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.names} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Your story could be next"
        body="Let's start with a conversation about your wedding date and songs."
      />
    </>
  );
}
