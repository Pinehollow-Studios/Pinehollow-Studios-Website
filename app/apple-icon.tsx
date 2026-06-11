import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Full-bleed — iOS applies its own corner mask, so the tile fills the square.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <radialGradient id="bg" cx="50%" cy="14%" r="95%">
      <stop offset="0%" stop-color="#15293A"/>
      <stop offset="100%" stop-color="#060A0F"/>
    </radialGradient>
    <radialGradient id="halo" cx="50%" cy="62%" r="60%">
      <stop offset="0%" stop-color="#7FE4FF" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#7FE4FF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.10"/>
      <stop offset="45%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" fill="url(#bg)"/>
  <rect width="128" height="128" fill="url(#halo)"/>
  <g transform="translate(19 19) scale(1.41)">
    <rect x="14" y="5" width="15" height="52" rx="7.5" transform="rotate(22 21.5 31)" fill="#7FE4FF"/>
    <rect x="34" y="15" width="14.5" height="42" rx="7.25" transform="rotate(-24 41.25 36)" fill="#D6F5FF" opacity="0.85"/>
  </g>
  <rect width="128" height="128" fill="url(#sheen)"/>
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
          background: "#060A0F",
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
