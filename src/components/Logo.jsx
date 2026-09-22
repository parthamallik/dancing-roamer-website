import { Link } from "react-router-dom";
import logoMark from "../assets/logo/logo-mark.png";
import { site } from "../data/content.js";
import "./Logo.css";

export default function Logo({ variant = "light", showTagline = true, markHeight = 56 }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label={`${site.name} home`}>
      <img
        className="logo__mark"
        src={logoMark}
        alt=""
        style={{ height: markHeight }}
      />
      <span className="logo__text">
        <span className="logo__name">{site.name}</span>
        {showTagline && <span className="logo__tagline">{site.tagline}</span>}
      </span>
    </Link>
  );
}
