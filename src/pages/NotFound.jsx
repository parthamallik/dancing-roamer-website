import { Link } from "react-router-dom";
import logoMark from "../assets/logo/logo-mark.png";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <img src={logoMark} alt="" className="not-found__mark" />
        <h1>This step isn&rsquo;t choreographed yet</h1>
        <p>The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back on stage.</p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
