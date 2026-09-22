/**
 * Original line-art illustration for the Behind-the-Scenes Films service —
 * the brand deck didn't include BTS artwork, so this was drawn to match
 * the logo's monoline style and colour palette.
 */
export default function ClapperIllustration({ className = "", size = 220 }) {
  return (
    <svg
      className={className}
      width={size}
      height={(size * 220) / 240}
      viewBox="0 0 240 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a clapperboard, representing behind-the-scenes films"
    >
      <defs>
        <clipPath id="clapClip">
          <path d="M40,100 L200,100 L208,66 L48,66 Z" />
        </clipPath>
      </defs>

      <rect
        x="40"
        y="100"
        width="160"
        height="72"
        rx="10"
        fill="var(--color-white)"
        stroke="var(--color-text)"
        strokeWidth="4"
      />
      <line x1="70" y1="172" x2="60" y2="190" stroke="var(--color-text)" strokeWidth="4" strokeLinecap="round" />
      <line x1="170" y1="172" x2="180" y2="190" stroke="var(--color-text)" strokeWidth="4" strokeLinecap="round" />

      <g clipPath="url(#clapClip)">
        <rect x="30" y="56" width="190" height="54" fill="var(--color-white)" />
        <g stroke="var(--color-primary)" strokeWidth="10">
          <line x1="20" y1="120" x2="70" y2="40" />
          <line x1="60" y1="120" x2="110" y2="40" />
          <line x1="100" y1="120" x2="150" y2="40" />
          <line x1="140" y1="120" x2="190" y2="40" />
          <line x1="180" y1="120" x2="230" y2="40" />
        </g>
      </g>
      <path
        d="M40,100 L200,100 L208,66 L48,66 Z"
        fill="none"
        stroke="var(--color-text)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="83" r="4" fill="var(--color-text)" />

      <path
        d="M132 148 c0 -10 14 -10 14 0 c0 -10 14 -10 14 0 c0 10 -14 18 -14 22 c0 -4 -14 -12 -14 -22 Z"
        fill="var(--color-accent-gold)"
      />
    </svg>
  );
}
