import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pinehollow Studios — independent software, built quietly.";

const markSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <clipPath id="c">
      <rect width="128" height="128" rx="28" ry="28"/>
    </clipPath>
    <radialGradient id="bg" cx="50%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#1B2E25"/>
      <stop offset="100%" stop-color="#0A1410"/>
    </radialGradient>
    <radialGradient id="halo" cx="50%" cy="60%" r="55%">
      <stop offset="0%" stop-color="#3FE5A0" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#3FE5A0" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.12"/>
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g clip-path="url(#c)">
    <rect width="128" height="128" fill="url(#bg)"/>
    <rect width="128" height="128" fill="url(#halo)"/>
    <g transform="translate(22 22) scale(1.3125)">
      <path d="M4 54 L14 8 L32 36 L50 8 L60 54 Z" fill="#3FE5A0"/>
    </g>
    <rect width="128" height="128" fill="url(#sheen)"/>
  </g>
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
