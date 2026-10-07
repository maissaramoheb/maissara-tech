import { ImageResponse } from "next/og";
export function socialImage(title: string, label: string) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#0B0D0E",
        color: "#F0EFE9",
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
        MS. / {label}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 60 ? 58 : 76,
          letterSpacing: -3,
          lineHeight: 1.12,
          marginTop: 70,
          maxWidth: 1020,
        }}
      >
        {title}
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
    { width: 1200, height: 630 },
  );
}
