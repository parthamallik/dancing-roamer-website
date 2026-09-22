import "./GalleryGrid.css";

export default function GalleryGrid({ items, onSelect }) {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <button
          key={item.caption}
          type="button"
          className="gallery-grid__item"
          onClick={() => onSelect?.(index)}
        >
          <img src={item.image} alt={item.caption} loading="lazy" />
          <span className="gallery-grid__caption">{item.caption}</span>
        </button>
      ))}
    </div>
  );
}
