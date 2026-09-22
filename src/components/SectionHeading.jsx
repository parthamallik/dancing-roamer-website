export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className="section-head" style={align === "left" ? { textAlign: "left", margin: "0 0 44px" } : undefined}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {align === "left" && <div className="divider divider--start" />}
    </div>
  );
}
