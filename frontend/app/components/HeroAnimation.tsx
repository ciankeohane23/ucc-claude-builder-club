// Looping hand-drawn style illustration for the homepage hero: a network of
// builders that draws itself in around a Claude spark, with ideas travelling
// along the connections. Pure SVG + CSS (keyframes live in globals.css), so it
// needs no video file and follows the light/dark theme colours.

const CENTER = { x: 200, y: 205 };

// Outer nodes: position, size, and when they appear in the 10s loop
const NODES = [
  { x: 92, y: 112, r: 15, delay: 0.6 },
  { x: 205, y: 62, r: 12, delay: 1.0 },
  { x: 318, y: 104, r: 17, delay: 1.4 },
  { x: 336, y: 258, r: 13, delay: 1.8 },
  { x: 236, y: 342, r: 16, delay: 2.2 },
  { x: 86, y: 292, r: 12, delay: 2.6 },
];

// Slightly bowed path between two points so lines look hand drawn
function wobble(a: { x: number; y: number }, b: { x: number; y: number }, bend: number) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const cx = mx - (dy / len) * bend;
  const cy = my + (dx / len) * bend;
  return `M ${a.x} ${a.y} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x} ${b.y}`;
}

const SPOKES = NODES.map((n, i) => ({
  d: wobble(n, CENTER, i % 2 === 0 ? 10 : -8),
  delay: n.delay - 0.3,
}));

const RING = NODES.map((n, i) => ({
  d: wobble(n, NODES[(i + 1) % NODES.length], i % 2 === 0 ? -14 : 12),
  delay: 3 + i * 0.25,
}));

const STARS = [
  { x: 52, y: 52, s: 1, delay: 0 },
  { x: 352, y: 46, s: 0.8, delay: 1.1 },
  { x: 360, y: 352, s: 1.1, delay: 2.1 },
  { x: 40, y: 360, s: 0.7, delay: 0.6 },
];

function Star({ x, y, s, delay }: { x: number; y: number; s: number; delay: number }) {
  return (
    <path
      className="star"
      style={{ animationDelay: `${delay}s` }}
      d={`M ${x} ${y - 9 * s} Q ${x + 1.5 * s} ${y - 1.5 * s} ${x + 9 * s} ${y} Q ${x + 1.5 * s} ${y + 1.5 * s} ${x} ${y + 9 * s} Q ${x - 1.5 * s} ${y + 1.5 * s} ${x - 9 * s} ${y} Q ${x - 1.5 * s} ${y - 1.5 * s} ${x} ${y - 9 * s} Z`}
      fill="var(--color-primary)"
    />
  );
}

export default function HeroAnimation() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="hero-anim h-auto w-full"
      role="img"
      aria-label="Animated illustration of a network of builders connecting around Claude"
    >
      {/* Faint dotted orbit */}
      <circle
        className="orbit"
        cx={CENTER.x}
        cy={CENTER.y}
        r="120"
        fill="none"
        stroke="var(--color-muted)"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        strokeDasharray="2 9"
        strokeLinecap="round"
      />

      {/* Outer ring connections */}
      {RING.map((e, i) => (
        <path
          key={`ring-${i}`}
          className="edge"
          pathLength={1}
          d={e.d}
          fill="none"
          stroke="var(--foreground)"
          strokeOpacity="0.8"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ animationDelay: `${e.delay}s` }}
        />
      ))}

      {/* Spokes into the centre */}
      {SPOKES.map((e, i) => (
        <path
          key={`spoke-${i}`}
          id={`spoke-${i}`}
          className="edge"
          pathLength={1}
          d={e.d}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ animationDelay: `${e.delay}s` }}
        />
      ))}

      {/* Ideas travelling along the spokes */}
      {SPOKES.map((e, i) => (
        <circle key={`pulse-${i}`} className="pulse" r="4.5" fill="var(--color-primary)">
          <animateMotion
            dur={`${2.6 + (i % 3) * 0.5}s`}
            begin={`${4 + i * 0.4}s`}
            repeatCount="indefinite"
            path={e.d}
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.8;1"
            dur={`${2.6 + (i % 3) * 0.5}s`}
            begin={`${4 + i * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Outer nodes */}
      {NODES.map((n, i) => (
        <g key={`node-${i}`} className="node" style={{ animationDelay: `${n.delay}s` }}>
          <circle cx={n.x} cy={n.y} r={n.r} fill="var(--color-kraft)" />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
          />
          <circle cx={n.x - n.r * 0.3} cy={n.y - n.r * 0.3} r={n.r * 0.28} fill="var(--color-primary)" fillOpacity="0.35" />
        </g>
      ))}

      {/* Centre: Claude-style spark */}
      <g className="core">
        <circle cx={CENTER.x} cy={CENTER.y} r="40" fill="var(--color-primary)" fillOpacity="0.12" />
        <g className="spark">
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;
            const inner = 6;
            const outer = i % 2 === 0 ? 30 : 22;
            return (
              <line
                key={`ray-${i}`}
                x1={(CENTER.x + Math.cos(angle) * inner).toFixed(1)}
                y1={(CENTER.y + Math.sin(angle) * inner).toFixed(1)}
                x2={(CENTER.x + Math.cos(angle) * outer).toFixed(1)}
                y2={(CENTER.y + Math.sin(angle) * outer).toFixed(1)}
                stroke="var(--color-primary)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            );
          })}
        </g>
      </g>

      {STARS.map((s, i) => (
        <Star key={`star-${i}`} {...s} />
      ))}
    </svg>
  );
}
