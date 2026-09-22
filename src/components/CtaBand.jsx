import { Link } from "react-router-dom";
import { site } from "../data/content.js";
import "./CtaBand.css";

export default function CtaBand({
  title = "Let's choreograph your celebration",
  body = "Tell us your date, your venue and your songs — Smitarani will take it from there.",
}) {
  return (
    <section className="section section--dark cta-band">
      <div className="container cta-band__inner">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="button-row button-row--center">
          <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary">
            Message on WhatsApp
          </a>
          <Link to="/contact" className="btn btn--ghost btn--on-dark">
            Contact Details
          </Link>
        </div>
      </div>
    </section>
  );
}
