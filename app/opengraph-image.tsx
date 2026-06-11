import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pinehollow Studios — a two-person iOS software studio.";

// "The lean" mark, duotone, as a data URI for the card header.
const markSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect x="14" y="5" width="15" height="52" rx="7.5" transform="rotate(22 21.5 31)" fill="#7FE4FF"/>
  <rect x="34" y="15" width="14.5" height="42" rx="7.25" transform="rotate(-24 41.25 36)" fill="#D6F5FF" opacity="0.85"/>
</svg>
`.trim();

// Faint contour rings — the site's topo motif, echoed on the card.
const contourSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <g fill="none" stroke="#7FE4FF" stroke-width="1.5">
    <ellipse cx="300" cy="300" rx="90" ry="70" stroke-opacity="0.20" transform="rotate(-14 300 300)"/>
    <ellipse cx="310" cy="306" rx="160" ry="124" stroke-opacity="0.15" transform="rotate(-10 310 306)"/>
    <ellipse cx="322" cy="314" rx="232" ry="180" stroke-opacity="0.11" transform="rotate(-6 322 314)"/>
    <ellipse cx="336" cy="322" rx="304" ry="238" stroke-opacity="0.07" transform="rotate(-2 336 322)"/>
  </g>
</svg>
`.trim();

const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));

export default async function OgImage() {
  const [extraBold, light] = await Promise.all([
    font("BricolageGrotesque-ExtraBold.ttf"),
    font("BricolageGrotesque-Light.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 76,
          backgroundColor: "#060A0F",
          backgroundImage:
            "radial-gradient(700px 480px at 86% 8%, rgba(127,228,255,0.14), transparent 65%), radial-gradient(900px 640px at -5% 105%, rgba(42,74,94,0.50), transparent 70%)",
          color: "#F1F5F2",
          fontFamily: "Bricolage",
          position: "relative",
        }}
      >
        {/* contour field, bleeding off the right edge */}
        <img
          width={700}
          height={700}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(contourSvg)}`}
          alt=""
          style={{ position: "absolute", top: -60, right: -150 }}
        />

        {/* masthead */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <img
              width={72}
              height={72}
              src={`data:image/svg+xml;utf8,${encodeURIComponent(markSvg)}`}
              alt=""
            />
            <div
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "0.06em",
              }}
            >
              PINEHOLLOW
            </div>
          </div>
          <div
            style={{
              fontSize: 17,
              fontWeight: 300,
              letterSpacing: "0.3em",
              color: "rgba(241,245,242,0.55)",
            }}
          >
            VOL. I — FIELD NOTES
          </div>
        </div>

        {/* headline — echoes the site hero */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 104,
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            fontWeight: 800,
          }}
        >
          <span>TWO PEOPLE,</span>
          <span style={{ display: "flex" }}>
            ONE&nbsp;
            <span style={{ color: "#D6F5FF", fontWeight: 300, letterSpacing: "-0.025em" }}>
              workshop,
            </span>
          </span>
          <span>IOS APPS.</span>
        </div>

        {/* foot strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 19,
            fontWeight: 300,
            letterSpacing: "0.26em",
            color: "rgba(241,245,242,0.62)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 9, height: 9, borderRadius: 99, background: "#7FE4FF" }} />
            PINEHOLLOW.STUDIO
          </div>
          <div style={{ display: "flex" }}>CURRENTLY BUILDING VESTIGE</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: extraBold, weight: 800, style: "normal" },
        { name: "Bricolage", data: light, weight: 300, style: "normal" },
      ],
    },
  );
}
