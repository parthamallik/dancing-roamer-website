import CtaBand from "../components/CtaBand.jsx";
import { portfolio } from "../data/content.js";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <section className="section portfolio-hero">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h1>A portfolio of previous work</h1>
          <p>
            Flagship festivals Dancing Roamer has produced, luxury wedding sangeets choreographed across
            India, and community events along the way.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container portfolio-list">
          {portfolio.map((project) => (
            <article key={project.slug} className="portfolio-project">
              <div className="portfolio-project__cover">
                <img src={project.images[0]} alt={project.title} loading="lazy" />
              </div>
              <div className="portfolio-project__body">
                <span className="pill-tag">{project.tag}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.images.length > 1 && (
                  <div className="portfolio-project__strip">
                    {project.images.slice(1).map((img, i) => (
                      <img key={i} src={img} alt="" loading="lazy" />
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Have an event in mind?"
        body="Whether it's a wedding sangeet or a large-scale celebration, let's talk."
      />
    </>
  );
}
