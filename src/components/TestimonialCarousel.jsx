import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard.jsx";
import "./TestimonialCarousel.css";

export default function TestimonialCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  const touchStartX = useRef(null);

  function go(delta) {
    setIndex((i) => (i + delta + count) % count);
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
    touchStartX.current = null;
  }

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        className="testimonial-carousel__arrow testimonial-carousel__arrow--prev"
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
      >
        &#8249;
      </button>

      <div className="testimonial-carousel__track">
        <div className="testimonial-carousel__slide" key={index}>
          <TestimonialCard testimonial={testimonials[index]} />
        </div>
      </div>

      <button
        className="testimonial-carousel__arrow testimonial-carousel__arrow--next"
        aria-label="Next testimonial"
        onClick={() => go(1)}
      >
        &#8250;
      </button>

      <div className="testimonial-carousel__dots">
        {testimonials.map((t, i) => (
          <button
            key={t.names}
            className={`testimonial-carousel__dot ${i === index ? "testimonial-carousel__dot--active" : ""}`}
            aria-label={`Show testimonial from ${t.names}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
