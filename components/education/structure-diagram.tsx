import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Illustrative market-structure diagram (not real price data).
 * Shows: higher highs/lows, an inducement high, equal-low liquidity,
 * a sweep into a point of interest, and a structure shift.
 * Pure SVG + CSS animation - no JS, no charting library.
 */

const path =
  "M20 392 L92 262 L140 330 L210 186 L262 298 L304 232 L344 300 L380 252 L420 356 L478 206 L522 258 L592 112";

const swings: { x: number; y: number; label?: string; pos?: "above" | "below" }[] = [
  { x: 92, y: 262 },
  { x: 140, y: 330 },
  { x: 210, y: 186, label: "HH", pos: "above" },
  { x: 262, y: 298, label: "HL", pos: "below" },
  { x: 304, y: 232, label: "IDM", pos: "above" },
  { x: 344, y: 300 },
  { x: 380, y: 252 },
  { x: 420, y: 356 },
  { x: 478, y: 206 },
  { x: 522, y: 258 },
];

export function StructureDiagram({
  className,
  animated = true,
  title = "Illustration of market structure, liquidity and a point of interest",
}: {
  className?: string;
  animated?: boolean;
  title?: string;
}) {
  const id = useId();
  const fade = (delay: number) =>
    animated
      ? { className: "animate-fade", style: { animationDelay: `${delay}ms` } }
      : {};

  return (
    <svg
      viewBox="0 0 612 440"
      role="img"
      aria-labelledby={`${id}-t ${id}-d`}
      className={cn("h-auto w-full overflow-visible", className)}
    >
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>
        Price forms higher highs and higher lows, then pulls back. Equal lows
        leave resting liquidity below them. Price sweeps that liquidity into a
        marked point of interest, then rallies and breaks above the inducement
        high, signalling a shift in structure. Illustrative only.
      </desc>

      {/* Baseline grid */}
      <g stroke="currentColor" strokeOpacity="0.08" strokeWidth="1">
        {[80, 160, 240, 320, 400].map((y) => (
          <line key={y} x1="0" x2="612" y1={y} y2={y} />
        ))}
      </g>

      {/* Point of interest zone */}
      <g {...fade(1500)}>
        <rect
          x="392"
          y="334"
          width="86"
          height="40"
          rx="3"
          fill="#cf1025"
          fillOpacity="0.16"
          stroke="#cf1025"
          strokeOpacity="0.7"
          strokeWidth="1"
        />
        <text
          x="482"
          y="390"
          fill="#ff4d5e"
          fontFamily="var(--font-geist-mono)"
          fontSize="12"
          letterSpacing="1.5"
        >
          POI
        </text>
      </g>

      {/* Liquidity (equal lows) */}
      <g {...fade(1100)}>
        <line
          x1="250"
          x2="440"
          y1="300"
          y2="300"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeDasharray="3 5"
        />
        <text
          x="284"
          y="320"
          fill="currentColor"
          fillOpacity="0.6"
          fontFamily="var(--font-geist-mono)"
          fontSize="11"
          letterSpacing="1.5"
        >
          LIQUIDITY
        </text>
      </g>

      {/* Structure shift line */}
      <g {...fade(2100)}>
        <line
          x1="304"
          x2="500"
          y1="232"
          y2="232"
          stroke="#ff4d5e"
          strokeOpacity="0.85"
          strokeDasharray="6 5"
        />
        <text
          x="324"
          y="250"
          fill="#ff4d5e"
          fontFamily="var(--font-geist-mono)"
          fontSize="11"
          letterSpacing="1.5"
        >
          MSS
        </text>
      </g>

      {/* Price path */}
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
        strokeLinecap="round"
        pathLength={1}
        className={animated ? "draw-path" : undefined}
        style={animated ? { ["--path-length" as string]: 1 } : undefined}
      />

      {/* Swing points + labels */}
      {swings.map((s, i) => (
        <g key={`${s.x}-${s.y}`} {...fade(500 + i * 110)}>
          <circle
            cx={s.x}
            cy={s.y}
            r="3.5"
            fill="var(--surface)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {s.label && (
            <text
              x={s.x}
              y={s.pos === "above" ? s.y - 14 : s.y + 24}
              textAnchor="middle"
              fill="currentColor"
              fillOpacity="0.75"
              fontFamily="var(--font-geist-mono)"
              fontSize="11"
              letterSpacing="1.5"
            >
              {s.label}
            </text>
          )}
        </g>
      ))}

      {/* Current point */}
      <g {...fade(2400)}>
        <circle cx="592" cy="112" r="10" fill="#cf1025" fillOpacity="0.2" />
        <circle cx="592" cy="112" r="4.5" fill="#cf1025" />
      </g>
    </svg>
  );
}
