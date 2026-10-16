import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site, brandAssets } from "@/content/site";

export const alt = "SenaTrades - Strategy | Discipline | Results";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markData = await readFile(join(process.cwd(), "public", brandAssets.markReversed.src));
const markSrc = `data:image/png;base64,${markData.toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(60% 70% at 85% 10%, rgba(207,16,37,0.35), rgba(11,11,13,0) 70%), #0b0b0d",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={96} height={81} alt="" />
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -1.5 }}>
            <span style={{ color: "#ff4d5e" }}>Sena</span>
            <span>Trades</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3 }}>
          <span>MASTER THE MARKET.</span>
          <div style={{ display: "flex" }}>
            <span>TRADE WITH&nbsp;</span>
            <span style={{ color: "#cf1025" }}>PURPOSE.</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, letterSpacing: 6, color: "#a3a3a3" }}>
          <div style={{ width: 48, height: 2, background: "#cf1025" }} />
          {site.tagline.toUpperCase()}
        </div>
      </div>
    ),
    size,
  );
}
