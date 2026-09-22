import { Link } from "react-router-dom";
import logoLockup from "../assets/logo/logo-lockup.jpg";
import { navLinks, site } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img className="footer__logo-badge" src={logoLockup} alt="Dancing Roamer — Roam World on Dance Beats" />
          <p className="footer__about">
            Luxury wedding choreography &amp; behind-the-scenes films, led personally by founder{" "}
            {site.founderName} — {site.city}.
          </p>
          <div className="footer__social">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Dancing Roamer on Instagram">
              Instagram
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Dancing Roamer on Facebook">
              Facebook
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.city}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>&copy; {year} Dancing Roamer. All rights reserved.</span>
          <span>Founded &amp; run by {site.founderName}</span>
        </div>
      </div>
    </footer>
  );
}
