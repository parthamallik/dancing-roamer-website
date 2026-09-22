import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import logoMark from "../assets/logo/logo-mark.png";
import { founder, achievements, site } from "../data/content.js";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="section about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__portrait">
            <img src={founder.portrait} alt={`${founder.name}, founder of Dancing Roamer`} />
          </div>
          <div className="about-hero__text">
            <span className="eyebrow">About Dancing Roamer</span>
            <h1>{founder.name}</h1>
            <p className="about-hero__role">{founder.role}</p>
            {founder.bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary">
              Start Planning Together
            </a>
          </div>
        </div>
      </section>

      <section className="section section--alt about-milestones">
        <img src={logoMark} alt="" aria-hidden="true" className="about-milestones__watermark" />
        <div className="container">
          <SectionHeading eyebrow="Milestones" title="A journey told in a few proud moments" />
          <ul className="highlight-list">
            {founder.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading eyebrow="Recognition" title="Achievements &amp; press" />
          <div className="achievements-grid">
            {achievements.map((item) => (
              <div key={item.title} className="achievements-grid__item">
                <div className="achievements-grid__media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="achievements-grid__body">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container about-cta__inner">
          <h2>Sole proprietor. Every wedding, personally choreographed.</h2>
          <p>
            Dancing Roamer is run end-to-end by {founder.name} — from the first phone call to the final
            rehearsal, you work directly with the person choreographing your celebration.
          </p>
          <Link to="/contact" className="btn btn--ghost">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
