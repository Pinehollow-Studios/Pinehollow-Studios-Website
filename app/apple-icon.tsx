import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <defs>
    <clipPath id="c">
      <path d="M0 484 C 0 168, 168 0, 484 0 L 540 0 C 856 0, 1024 168, 1024 484 L 1024 540 C 1024 856, 856 1024, 540 1024 L 484 1024 C 168 1024, 0 856, 0 540 Z"/>
    </clipPath>
    <radialGradient id="field" cx="50%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#1B2E25"/>
      <stop offset="60%" stop-color="#0A1410"/>
      <stop offset="100%" stop-color="#040806"/>
    </radialGradient>
    <radialGradient id="bloom" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#B8F5D6" stop-opacity="0.95"/>
      <stop offset="35%" stop-color="#3FE5A0" stop-opacity="0.95"/>
      <stop offset="75%" stop-color="#3FE5A0" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#3FE5A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="core" cx="50%" cy="42%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85"/>
      <stop offset="20%" stop-color="#B8F5D6" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#B8F5D6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.22"/>
      <stop offset="35%" stop-color="#FFFFFF" stop-opacity="0.04"/>
      <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g clip-path="url(#c)">
    <rect width="1024" height="1024" fill="url(#field)"/>
    <circle cx="512" cy="512" r="240" fill="url(#bloom)"/>
    <circle cx="512" cy="500" r="170" fill="url(#core)"/>
    <circle cx="512" cy="512" r="240" fill="none" stroke="#3FE5A0" stroke-width="6" opacity="0.85"/>
    <circle cx="512" cy="512" r="240" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
    <rect width="1024" height="1024" fill="url(#sheen)"/>
  </g>
</svg>
`.trim();

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1410",
        }}
      >
        <img
          width={180}
          height={180}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          alt=""
        />
      </div>
    ),
    size,
  );
}
