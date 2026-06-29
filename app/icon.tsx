import { ImageResponse } from "next/og";

// 192x192 is Google Search's recommended favicon size — large enough that
// the search snippet, the browser tab, and any home-screen consumer all
// down-scale cleanly. Smaller raster favicons (e.g. 32x32) get rejected by
// Google's indexer.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

// Rounded glacial tile with "the lean" — two gradient beams over a deep
// radial field (the app-icon glyph).
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <clipPath id="c">
      <rect width="128" height="128" rx="28" ry="28"/>
    </clipPath>
    <radialGradient id="bg" cx="50%" cy="14%" r="95%">
      <stop offset="0%" stop-color="#15293A"/>
      <stop offset="100%" stop-color="#060A0F"/>
    </radialGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="#B0F1FF"/>
      <stop offset="100%" stop-color="#D6F5FF"/>
    </linearGradient>
  </defs>
  <g clip-path="url(#c)">
    <rect width="128" height="128" fill="url(#bg)"/>
    <g transform="translate(16.96 16.96) scale(1.47)">
      <rect x="14" y="5" width="15" height="52" rx="7.5" transform="rotate(22 21.5 31)" fill="url(#beam)"/>
      <rect x="34" y="15" width="14.5" height="42" rx="7.25" transform="rotate(-24 41.25 36)" fill="url(#beam)" opacity="0.85"/>
    </g>
    <rect width="128" height="128" rx="28" ry="28" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="1.5"/>
  </g>
</svg>
`.trim();

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <img
          width={192}
          height={192}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          alt=""
        />
      </div>
    ),
    size,
  );
}
