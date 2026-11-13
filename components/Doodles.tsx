/**
 * Hand-drawn style stationery & math doodles for Edzoro.
 * All inline SVGs (no requests), brand palette, decorative only (aria-hidden).
 */

type DoodleProps = { className?: string; style?: React.CSSProperties };

const stroke = {
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Open book with a bookmark ribbon */
export function OpenBook({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        {...stroke}
        d="M32 16c-4-4-10-6-18-6v36c8 0 14 2 18 6 4-4 10-6 18-6V10c-8 0-14 2-18 6z"
        stroke="#2d2d2d"
        strokeWidth="2.5"
      />
      <path {...stroke} d="M32 16v36" stroke="#2d2d2d" strokeWidth="2" />
      <path
        {...stroke}
        d="M18 20c3 0 6 .6 9 2M18 28c3 0 6 .6 9 2M18 36c3 0 6 .6 9 2M46 20c-3 0-6 .6-9 2M46 28c-3 0-6 .6-9 2M46 36c-3 0-6 .6-9 2"
        stroke="#f15a29"
        strokeWidth="2"
        opacity="0.75"
      />
      <path {...stroke} d="M40 10v12l4-3 4 3V10" stroke="#f15a29" strokeWidth="2.5" />
    </svg>
  );
}

/** Classic yellow pencil, tilted, with a doodle motion line */
export function Pencil({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g transform="rotate(38 32 32)">
        <rect x="26" y="8" width="12" height="34" rx="1.5" fill="#f5f7ff" stroke="#2d2d2d" strokeWidth="2.5" />
        <path d="M26 42l6 10 6-10z" fill="#ffd8c7" stroke="#2d2d2d" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M29.5 47.5l2.5 4.5 2.5-4.5z" fill="#2d2d2d" />
        <rect x="26" y="8" width="12" height="7" rx="1.5" fill="#f15a29" stroke="#2d2d2d" strokeWidth="2.5" />
        <rect x="26" y="20" width="12" height="3" fill="#f15a29" opacity="0.55" />
      </g>
      <path
        {...stroke}
        d="M12 52c6 4 12 5 18 3"
        stroke="#f15a29"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}

/** Closed diary/notebook with elastic band */
export function Diary({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="14" y="8" width="36" height="48" rx="5" fill="#faf9f9" stroke="#2d2d2d" strokeWidth="2.5" />
      <path {...stroke} d="M14 20c6-2 10-2 14 0M14 30c6-2 10-2 14 0M14 40c6-2 10-2 14 0" stroke="#e4e9ff" strokeWidth="2.5" />
      <rect x="42" y="8" width="8" height="48" rx="3" fill="#f15a29" opacity="0.9" stroke="#d94e22" strokeWidth="1" />
      <path {...stroke} d="M22 8v-2M32 8v-2" stroke="#2d2d2d" strokeWidth="2.5" />
      <circle cx="24" cy="52" r="1.6" fill="#f15a29" />
      <circle cx="30" cy="52" r="1.6" fill="#f15a29" />
      <circle cx="36" cy="52" r="1.6" fill="#f15a29" />
    </svg>
  );
}

/** Ruler + protractor combo */
export function Ruler({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g transform="rotate(-30 32 32)">
        <rect x="10" y="26" width="44" height="10" rx="2" fill="#f5f7ff" stroke="#2d2d2d" strokeWidth="2.5" />
        <path
          {...stroke}
          d="M16 26v5M22 26v3.5M28 26v5M34 26v3.5M40 26v5M46 26v3.5"
          stroke="#f15a29"
          strokeWidth="2"
        />
      </g>
      <path
        {...stroke}
        d="M44 10a14 14 0 0 1 8 13"
        stroke="#f15a29"
        strokeWidth="2"
        opacity="0.7"
      />
      <path {...stroke} d="M52 23l-4-1M52 23l-1-4" stroke="#f15a29" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

/** Calculator with a smiley display */
export function Calculator({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="16" y="6" width="32" height="52" rx="6" fill="#faf9f9" stroke="#2d2d2d" strokeWidth="2.5" />
      <rect x="21" y="12" width="22" height="10" rx="2.5" fill="#2d2d2d" />
      <path {...stroke} d="M25 17h8" stroke="#7CFFB2" strokeWidth="2" />
      <g fill="#f15a29">
        <circle cx="25" cy="30" r="2.6" />
        <circle cx="39" cy="30" r="2.6" />
        <circle cx="25" cy="40" r="2.6" />
        <circle cx="39" cy="40" r="2.6" />
      </g>
      <g fill="none" stroke="#2d2d2d" strokeWidth="2">
        <circle cx="32" cy="30" r="2.6" />
        <circle cx="32" cy="40" r="2.6" />
        <circle cx="25" cy="50" r="2.6" />
        <circle cx="32" cy="50" r="2.6" />
        <circle cx="39" cy="50" r="2.6" />
      </g>
    </svg>
  );
}

/** Geometry compass */
export function Compass({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="12" r="4" fill="#f5f7ff" stroke="#2d2d2d" strokeWidth="2.5" />
      <path {...stroke} d="M29 15L20 50M35 15l9 35" stroke="#2d2d2d" strokeWidth="2.5" />
      <path {...stroke} d="M20 50l-2 5M44 50l2 5" stroke="#2d2d2d" strokeWidth="2.5" />
      <path {...stroke} d="M27 44a14 14 0 0 0 10 0" stroke="#f15a29" strokeWidth="2" />
      <path {...stroke} d="M32 22c1.5 3 1.5 8 0 11" stroke="#f15a29" strokeWidth="2" />
    </svg>
  );
}

/** Lightbulb with formulas — idea doodle */
export function IdeaBulb({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        {...stroke}
        d="M32 6a16 16 0 0 1 9 29c-1.6 1.2-2.4 2.6-2.6 4.6l-.2 2.4h-12l-.2-2.4c-.2-2-1-3.4-2.6-4.6A16 16 0 0 1 32 6z"
        stroke="#f15a29"
        strokeWidth="2.5"
      />
      <path {...stroke} d="M27 47h10M28.5 51h7" stroke="#2d2d2d" strokeWidth="2.5" />
      <path {...stroke} d="M32 16v10M29 19l3-3 3 3" stroke="#2d2d2d" strokeWidth="2" />
      <path {...stroke} d="M10 18l4 2M54 18l-4 2M8 34h5M56 34h-5" stroke="#f15a29" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

/** Spiral notebook with a Σ on the cover */
export function Notebook({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="12" y="10" width="40" height="44" rx="4" fill="#faf9f9" stroke="#2d2d2d" strokeWidth="2.5" />
      <path {...stroke} d="M20 10V6M28 10V6M36 10V6M44 10V6" stroke="#2d2d2d" strokeWidth="2.5" />
      <text x="32" y="42" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#f15a29" fontFamily="Georgia, serif">Σ</text>
      <path {...stroke} d="M18 18h28M18 52h28" stroke="#e4e9ff" strokeWidth="2.5" />
    </svg>
  );
}

/** Sparkle star doodle */
export function Sparkle({ className = "", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} style={style} aria-hidden>
      <path
        d="M16 3c1 6 3 8 10 10-7 2-9 4-10 10-1-6-3-8-10-10 7-2 9-4 10-10z"
        fill="#f15a29"
        opacity="0.9"
      />
    </svg>
  );
}

/** Curvy hand-drawn arrow */
export function CurvyArrow({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 40" className={className} aria-hidden>
      <path
        {...stroke}
        d="M6 6c14 14 34 22 62 22"
        stroke="#2d2d2d"
        strokeWidth="2.5"
      />
      <path {...stroke} d="M58 22l10 6-11 4" stroke="#2d2d2d" strokeWidth="2.5" />
    </svg>
  );
}

/** π symbol doodle with rays */
export function PiDoodle({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        {...stroke}
        d="M10 14h28M18 14v22M32 14v10c0 4 3 5 6 3"
        stroke="#2d2d2d"
        strokeWidth="3"
      />
      <path {...stroke} d="M6 8l3 2M42 8l-3 2M6 38l3-2M42 38l-3-2" stroke="#f15a29" strokeWidth="2" />
    </svg>
  );
}

/** Stack of books */
export function BookStack({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="10" y="42" width="44" height="9" rx="2.5" fill="#f15a29" opacity="0.92" stroke="#d94e22" strokeWidth="1.5" />
      <rect x="14" y="32" width="38" height="9" rx="2.5" fill="#f5f7ff" stroke="#2d2d2d" strokeWidth="2.5" />
      <rect x="18" y="22" width="32" height="9" rx="2.5" fill="#ffd8c7" stroke="#2d2d2d" strokeWidth="2.5" />
      <path {...stroke} d="M46 26h4M44 36h6" stroke="#2d2d2d" strokeWidth="2" />
      <path {...stroke} d="M14 18l2-6M20 16l0-7M26 18l-2-6" stroke="#f15a29" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}
