import { useState } from "react";
import GalleryGrid from "../components/GalleryGrid.jsx";
import Lightbox from "../components/Lightbox.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { gallery } from "../data/content.js";
import "./Gallery.css";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className="section gallery-hero">
        <div className="container">
          <span className="eyebrow">Moments We&rsquo;ve Staged</span>
          <h1>A look at Dancing Roamer on stage</h1>
          <p>
            Sangeet nights, grande entries, reception dances and the candid moments in between — a small
            selection from real Dancing Roamer weddings.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <GalleryGrid items={gallery} onSelect={setActiveIndex} />
        </div>
      </section>

      <Lightbox
        items={gallery}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />

      <CtaBand
        title="Want your wedding on this wall?"
        body="Let's talk choreography for your sangeet or reception."
      />
    </>
  );
}
