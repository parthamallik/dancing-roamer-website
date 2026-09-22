import { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onNavigate]);

  if (index == null) return null;
  const item = items[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        &times;
      </button>
      <button
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
      >
        &#8249;
      </button>
      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.caption} />
        <figcaption>{item.caption}</figcaption>
      </figure>
      <button
        className="lightbox__nav lightbox__nav--next"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
      >
        &#8250;
      </button>
    </div>
  );
}
