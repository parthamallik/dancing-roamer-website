import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import StatStrip from "../components/StatStrip.jsx";
import TestimonialCarousel from "../components/TestimonialCarousel.jsx";
import CtaBand from "../components/CtaBand.jsx";
import ClapperIllustration from "../components/illustrations/ClapperIllustration.jsx";
import {
  heroSlides,
  services,
  danceStyles,
  testimonials,
  portfolio,
  founder,
  site,
} from "../data/content.js";
import "./Home.css";

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  const featuredServices = services.slice(0, 3);
  const featuredPortfolio = portfolio.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        {heroSlides.map((s, i) => (
          <div
            key={s.heading}
            className={`hero__slide ${i === slide ? "hero__slide--active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="hero__overlay" />
        <div className="container hero__content">
          <span className="eyebrow hero__eyebrow">{heroSlides[slide].eyebrow}</span>
          <h1 className="hero__heading">{heroSlides[slide].heading}</h1>
          <p className="hero__body">{heroSlides[slide].body}</p>
          <div className="hero__actions">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary">
              Plan Your Wedding Choreography
            </a>
            <Link to="/services" className="btn btn--ghost btn--on-dark">
              Explore Services
            </Link>
          </div>
          <div className="hero__dots">
            {heroSlides.map((s, i) => (
              <button
                key={s.heading}
                className={`hero__dot ${i === slide ? "hero__dot--active" : ""}`}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container intro">
          <div className="intro__text">
            <span className="eyebrow">Welcome to Dancing Roamer</span>
            <h2>A premier choreography studio, built around one dancer&rsquo;s vision</h2>
            <p>
              Dancing Roamer is a choreography studio founded in Odisha in 2022 by{" "}
              <strong>{founder.name}</strong> — a National Level Folk Dancer who set out to make dance a
              central, storytelling part of every celebration she touches. Today, Smitarani personally
              choreographs sangeet nights, receptions and family performances for luxury weddings, blending
              Odissi, Bollywood, folk and contemporary styles into her signature{" "}
              <strong>Fusion Form</strong>.
            </p>
            <Link to="/about" className="btn btn--ghost">
              Meet the Founder
            </Link>
          </div>
        </div>
      </section>

      {/* Stats (dark) */}
      <section className="section section--dark section--tight">
        <div className="container">
          <StatStrip />
        </div>
      </section>

      {/* Services preview */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Choreography for every moment of your wedding"
            description="From the first sangeet rehearsal to the reception's final bow — and now, the behind-the-scenes story in between."
          />
          <div className="service-grid">
            {featuredServices.map((service) => (
              <Link to="/services" key={service.slug} className="service-grid__card">
                <div className="service-grid__media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  {service.generated && <span className="service-grid__badge">New</span>}
                </div>
                <h3>{service.title}</h3>
                <p>{service.tagline}</p>
              </Link>
            ))}
          </div>
          <div className="service-grid__more">
            <Link to="/services" className="btn btn--primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Work"
            title="Portfolio"
            description="Flagship festivals, luxury wedding sangeets and community collaborations Dancing Roamer has staged."
          />
          <div className="portfolio-preview">
            {featuredPortfolio.map((project) => (
              <Link to="/portfolio" key={project.slug} className="portfolio-preview__card">
                <img src={project.images[0]} alt={project.title} loading="lazy" />
                <div className="portfolio-preview__overlay">
                  <span className="pill-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="service-grid__more">
            <Link to="/portfolio" className="btn btn--primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Behind the scenes spotlight */}
      <section className="section">
        <div className="container bts-spotlight">
          <ClapperIllustration className="bts-spotlight__illustration" size={200} />
          <div className="bts-spotlight__text">
            <span className="eyebrow">Now Offering</span>
            <h2>Behind-the-Scenes Films</h2>
            <p>
              The sangeet stage is only half the story. We now film the part nobody else does — rehearsal
              diaries, family bloopers, and the quiet moments before the big performance — cut into a short
              film you&rsquo;ll rewatch as often as the wedding video itself.
            </p>
            <Link to="/services#behind-the-scenes-films" className="btn btn--ghost">
              See What&rsquo;s Included
            </Link>
          </div>
        </div>
      </section>

      {/* Dance styles */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Signature Fusion Form"
            title="Styles we choreograph with"
            description="Smitarani blends these into original routines built for your songs, your families and your stage."
          />
          <div className="style-grid">
            {danceStyles.map((style) => (
              <div key={style.name} className="style-grid__item">
                <h3>{style.name}</h3>
                <p>{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Love Notes"
            title="What couples say after the last dance"
          />
          <TestimonialCarousel testimonials={testimonials} />
          <div className="service-grid__more">
            <Link to="/testimonials" className="btn btn--ghost">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
