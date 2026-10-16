import { cn } from "@/lib/utils";

/**
 * Decorative candlestick backdrop (illustrative, not real market data).
 * Generated deterministically from a seed at render time - pure SVG + CSS,
 * no JavaScript shipped. Candles rise in once; nothing moves continuously.
 */

type Candle = { o: number; h: number; l: number; c: number };

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generate(count: number, seed: number): Candle[] {
  const rand = mulberry32(seed);
  const candles: Candle[] = [];
  let price = 100;
  for (let i = 0; i < count; i++) {
    // Gentle uptrend with pullback phases, so the shape reads as structure.
    const phase = Math.sin(i / 6.5);
    const drift = 0.14 + phase * 0.75;
    const o = price;
    const c = o + drift + (rand() - 0.5) * 3.2;
    const h = Math.max(o, c) + rand() * 1.6;
    const l = Math.min(o, c) - rand() * 1.6;
    candles.push({ o, h, l, c });
    price = c;
  }
  return candles;
}

function emaOf(values: number[], period: number) {
  const k = 2 / (period + 1);
  const out: number[] = [];
  for (const [i, v] of values.entries()) {
    out.push(i === 0 ? v : v * k + out[i - 1] * (1 - k));
  }
  return out;
}

const VARIANTS = {
  hero: { count: 64, seed: 7, step: 16, body: 8 },
  subtle: { count: 34, seed: 21, step: 16, body: 8 },
} as const;

export function CandleBackdrop({
  variant = "hero",
  emphasis = "normal",
  className,
}: {
  variant?: keyof typeof VARIANTS;
  /** "soft" tones down the moving-average line and area fill. */
  emphasis?: "normal" | "soft";
  className?: string;
}) {
  const soft = emphasis === "soft";
  const { count, seed, step, body } = VARIANTS[variant];
  const candles = generate(count, seed);

  const W = count * step + 40; // room for the live marker
  const H = 520;
  const pad = 30;
  const lo = Math.min(...candles.map((c) => c.l));
  const hi = Math.max(...candles.map((c) => c.h));
  const y = (v: number) => pad + (1 - (v - lo) / (hi - lo)) * (H - pad * 2);
  const x = (i: number) => i * step + step / 2;

  // Exponential moving average of closes, drawn as a smooth curve.
  const pts = emaOf(candles.map((c) => c.c), 10).map((v, i) => [x(i), y(v)] as const);
  const emaPath = pts.reduce((d, [px, py], i) => {
    if (i === 0) return `M${px} ${py}`;
    const [qx, qy] = pts[i - 1];
    return `${d} Q${qx} ${qy} ${(qx + px) / 2} ${(qy + py) / 2}`;
  }, "");
  const last = candles[candles.length - 1];
  const lastY = y(last.c);
  const areaPath = `${emaPath} L${x(count - 1)} ${H} L${x(0)} ${H} Z`;
  const gid = `cb-${variant}`;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMaxYMid slice"
      className={cn("pointer-events-none select-none", className)}
    >
      <defs>
        <linearGradient id={`${gid}-area`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cf1025" stopOpacity={soft ? 0.12 : 0.22} />
          <stop offset="1" stopColor="#cf1025" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Horizontal levels */}
      <g stroke="#f5f5f5" strokeOpacity="0.07" strokeDasharray="2 6">
        {[0.22, 0.48, 0.74].map((f) => (
          <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} />
        ))}
      </g>

      <path d={areaPath} fill={`url(#${gid}-area)`} className="animate-fade" style={{ animationDelay: "900ms" }} />

      {/* Candles */}
      {candles.map((c, i) => {
        const up = c.c >= c.o;
        const top = y(Math.max(c.o, c.c));
        const h = Math.max(1.5, Math.abs(y(c.o) - y(c.c)));
        return (
          <g
            key={i}
            className="candle-in"
            style={{ animationDelay: `${Math.round(i * (1100 / count))}ms` }}
          >
            <line
              x1={x(i)}
              x2={x(i)}
              y1={y(c.h)}
              y2={y(c.l)}
              stroke={up ? "#f5f5f5" : "#ff4d5e"}
              strokeOpacity={up ? 0.35 : 0.55}
              strokeWidth="1.2"
            />
            <rect
              x={x(i) - body / 2}
              y={top}
              width={body}
              height={h}
              rx="1.5"
              fill={up ? "#f5f5f5" : "#cf1025"}
              fillOpacity={up ? 0.14 : 0.65}
              stroke={up ? "#f5f5f5" : "none"}
              strokeOpacity="0.5"
              strokeWidth="1"
            />
          </g>
        );
      })}

      {/* Moving average */}
      <path
        d={emaPath}
        fill="none"
        stroke="#ff4d5e"
        strokeOpacity={soft ? 0.55 : 1}
        strokeWidth={soft ? 1.6 : 2}
        strokeLinecap="round"
        pathLength={1}
        className="draw-path"
        style={{ ["--path-length" as string]: 1, animationDelay: "500ms" }}
      />

      {/* Live price line + marker */}
      <g className="animate-fade" style={{ animationDelay: "1500ms" }}>
        <line x1="0" x2={W} y1={lastY} y2={lastY} stroke="#ff4d5e" strokeOpacity="0.35" strokeDasharray="4 5" />
        <circle cx={x(count - 1)} cy={lastY} r="9" fill="#cf1025" fillOpacity="0.25" className="animate-pulse-dot origin-center [transform-box:fill-box]" />
        <circle cx={x(count - 1)} cy={lastY} r="3.5" fill="#ff4d5e" />
      </g>
    </svg>
  );
}
