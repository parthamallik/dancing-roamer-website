/**
 * Dancing Roamer — global design tokens.
 *
 * Single source of truth for brand colors, type, spacing and shadows.
 * `cssVars` is injected onto :root once at startup (see main.jsx) so any
 * plain CSS file in the project can consume the same tokens via
 * var(--color-primary) etc. Components that need a token in JS (inline
 * styles, canvas, chart colors, ...) should import `theme` directly.
 */

export const theme = {
  color: {
    primary: "#7A4B34", // terracotta brown — wordmark & line-art mark
    primaryDark: "#54321F",
    primaryLight: "#A97B5C",
    accentGold: "#C29A5B", // achievements, dividers, small highlights
    accentGoldSoft: "#E4CFA5",
    blush: "#E9D8C6", // logo backdrop tan/blush
    blushSoft: "#F1E4D6",
    cream: "#FBF5EE", // main page background
    creamAlt: "#F4E9DC", // alternate section background
    charcoal: "#221E1B", // dark sections (footer, dark hero overlay)
    charcoalSoft: "#332C27",
    text: "#2B2119",
    textMuted: "#6E5D4F",
    textOnDark: "#F4EAE0",
    textOnDarkMuted: "#C9B9A9",
    white: "#FFFFFF",
    border: "#E3D2BE",
    success: "#5C7A50",
  },
  font: {
    display: "'Playfair Display', 'Georgia', serif",
    accent: "'Quicksand', 'Trebuchet MS', sans-serif",
    body: "'Poppins', 'Segoe UI', sans-serif",
  },
  radius: {
    sm: "6px",
    md: "14px",
    lg: "28px",
    pill: "999px",
  },
  shadow: {
    soft: "0 10px 30px -12px rgba(43, 33, 25, 0.25)",
    card: "0 18px 40px -18px rgba(43, 33, 25, 0.35)",
    lift: "0 24px 60px -20px rgba(43, 33, 25, 0.45)",
  },
  maxWidth: "1180px",
};

/** Flattens theme.color/font into --color-* / --font-* CSS custom properties. */
export function injectThemeVars(target = document.documentElement) {
  Object.entries(theme.color).forEach(([key, value]) => {
    target.style.setProperty(`--color-${kebab(key)}`, value);
  });
  Object.entries(theme.font).forEach(([key, value]) => {
    target.style.setProperty(`--font-${kebab(key)}`, value);
  });
  Object.entries(theme.radius).forEach(([key, value]) => {
    target.style.setProperty(`--radius-${kebab(key)}`, value);
  });
  Object.entries(theme.shadow).forEach(([key, value]) => {
    target.style.setProperty(`--shadow-${kebab(key)}`, value);
  });
  target.style.setProperty("--max-width", theme.maxWidth);
}

function kebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export default theme;
