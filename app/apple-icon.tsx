import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const svg = `
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
