import { stats } from "../data/content.js";
import "./StatStrip.css";

export default function StatStrip() {
  return (
    <ul className="stat-strip">
      {stats.map((stat) => (
        <li key={stat.label} className="stat-strip__item">
          <span className="stat-strip__value">{stat.value}</span>
          <span className="stat-strip__label">{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
