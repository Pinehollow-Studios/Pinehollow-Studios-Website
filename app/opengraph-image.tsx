import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pinehollow Studios — independent software, built quietly.";

const markSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <defs>
    <radialGradient id="bloom" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#B8F5D6" stop-opacity="0.95"/>
      <stop offset="35%" stop-color="#3FE5A0" stop-opacity="0.95"/>
      <stop offset="75%" stop-color="#3FE5A0" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#3FE5A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="core" cx="50%" cy="42%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/>
      <stop offset="20%" stop-color="#B8F5D6" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#B8F5D6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="512" cy="512" r="320" fill="#3FE5A0" opacity="0.35"/>
  <circle cx="512" cy="512" r="240" fill="url(#bloom)"/>
  <circle cx="512" cy="500" r="170" fill="url(#core)"/>
  <circle cx="512" cy="512" r="240" fill="none" stroke="#3FE5A0" stroke-width="8" opacity="0.9"/>
  <circle cx="512" cy="512" r="240" fill="none" stroke="rgba(255,255,255,0.20)" stroke-width="2"/>
</svg>
`.trim();

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0A1410",
          backgroundImage:
            "radial-gradient(800px 600px at 80% 30%, rgba(63,229,160,0.25), transparent 70%), radial-gradient(900px 700px at 0% 80%, rgba(45,79,63,0.55), transparent 70%)",
          color: "#F1F5F2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img
            width={84}
            height={84}
            src={`data:image/svg+xml;utf8,${encodeURIComponent(markSvg)}`}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em" }}>
              Pinehollow
            </div>
            <div
              style={{
                fontSize: 16,
                letterSpacing: "0.18em",
                color: "rgba(241,245,242,0.62)",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Studios
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 500,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Independent software,</span>
            <span style={{ fontStyle: "italic", color: "#B8F5D6", fontWeight: 400 }}>
              built quietly.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              fontSize: 18,
              color: "rgba(241,245,242,0.62)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: "#3FE5A0",
              }}
            />
            pinehollow.studio
          </div>
        </div>
      </div>
    ),
    size,
  );
}
