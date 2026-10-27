// Looping illustration for the Build page: hand-drawn blocks drop in and
// stack into a little structure, then a Claude spark lands on top. Pure SVG +
// CSS (keyframes in globals.css), coloured from the theme.

const INK = "var(--foreground)";

// Each piece falls in at its own moment of the 9s loop
const PIECES = [
  { d: "M 92 300 L 178 302 L 176 224 L 94 222 Z", fill: "var(--color-kraft)", delay: 0.4 },
  { d: "M 196 302 L 290 300 L 292 222 L 198 224 Z", fill: "var(--color-primary)", delay: 0.9 },
  { d: "M 112 214 L 276 212 L 278 176 L 110 178 Z", fill: "var(--color-surface)", delay: 1.5 },
  { d: "M 150 168 L 194 92 L 240 168 Z", fill: "var(--color-kraft)", delay: 2.1 },
];

export default function BuildAnimation() {
  return (
    <svg
      viewBox="0 0 380 360"
      className="build-anim h-auto w-full"
      role="img"
      aria-label="Animated illustration of building blocks stacking up, topped by a Claude spark"
    >
      {/* Ground line */}
      <path
        className="ground"
        pathLength={1}
        d="M 40 304 Q 190 296 340 306"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {PIECES.map((p, i) => (
        <g key={i} className="piece" style={{ animationDelay: `${p.delay}s` }}>
          <path
            d={p.d}
            fill={p.fill}
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {/* Little window on the orange block, so it reads as a build */}
      <g className="piece" style={{ animationDelay: "0.9s" }}>
        <path d="M 226 248 L 262 247 L 262 276 L 227 277 Z" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      </g>

      {/* Claude spark landing on top */}
      <g className="topper" style={{ animationDelay: "2.8s" }}>
        <g className="spark">
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i / 10) * Math.PI * 2;
            const outer = i % 2 === 0 ? 22 : 16;
            return (
              <line
                key={i}
                x1={(195 + Math.cos(a) * 4).toFixed(1)}
                y1={(62 + Math.sin(a) * 4).toFixed(1)}
                x2={(195 + Math.cos(a) * outer).toFixed(1)}
                y2={(62 + Math.sin(a) * outer).toFixed(1)}
                stroke="var(--color-primary)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            );
          })}
        </g>
      </g>

      {/* Motion marks */}
      {[
        { d: "M 60 150 L 84 140", delay: 0.2 },
        { d: "M 54 176 L 74 172", delay: 0.6 },
        { d: "M 300 120 L 326 112", delay: 1.2 },
        { d: "M 310 150 L 332 148", delay: 1.7 },
      ].map((m, i) => (
        <path
          key={i}
          className="mark"
          d={m.d}
          stroke="var(--color-primary)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ animationDelay: `${m.delay}s` }}
        />
      ))}
    </svg>
  );
}
