import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { navLinks, site } from "../data/content.js";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Logo markHeight={60} />

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm navbar__cta">
            Enquire Now
          </a>
        </nav>

        <button
          className={`navbar__toggle ${open ? "navbar__toggle--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
