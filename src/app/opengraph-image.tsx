import { ImageResponse } from "next/og";
export const alt = "Maissara Selim — Research, Systems, Practice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#0B0D0E",
        color: "#F0EFE9",
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 16,
          letterSpacing: 3,
          color: "#C69552",
        }}
      >
        MS / 01 — FIELD · STRATEGY · SYSTEMS
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 96,
          letterSpacing: -5,
          marginTop: 64,
        }}
      >
        MAISSARA SELIM<span style={{ color: "#C69552" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          color: "#98A0A2",
          marginTop: 24,
          maxWidth: 850,
          lineHeight: 1.4,
        }}
      >
        From complex environments to better decisions and practical systems.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #262B2E",
          paddingTop: 24,
          marginTop: "auto",
          fontSize: 16,
          letterSpacing: 2,
        }}
      >
        <span>RESEARCH · SYSTEMS · PRACTICE</span>
        <span style={{ color: "#C69552" }}>MAISSARA.TECH</span>
      </div>
    </div>,
    size,
  );
}
