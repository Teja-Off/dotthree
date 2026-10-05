import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "DotThree · Technology that works";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#111111";
const ORANGE = "#FF6B00";
const MUTED = "#636363";

async function loadFont(fileName: string): Promise<Buffer> {
  return readFile(join(process.cwd(), "src/assets/fonts", fileName));
}

function Dot({ color, diameter }: { color: string; diameter: number }) {
  return <div style={{ width: diameter, height: diameter, borderRadius: diameter, background: color }} />;
}

/** Branded social share image, rendered once at build time in the site's own typeface. */
export default async function OpengraphImage() {
  const [medium, extraBold] = await Promise.all([
    loadFont("Outfit-Medium.woff"),
    loadFont("Outfit-ExtraBold.woff"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#ffffff",
        color: INK,
        fontFamily: "Outfit",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-end", fontSize: 44, letterSpacing: -1.5 }}>
        <span style={{ fontWeight: 800 }}>DOT</span>
        <span style={{ fontWeight: 500 }}>THREE</span>
        <div style={{ display: "flex", marginLeft: 6, marginBottom: 9 }}>
          <Dot color={ORANGE} diameter={15} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 118,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -5,
          }}
        >
          <span>Technology</span>
          <span>that works.</span>
        </div>
        <div style={{ fontSize: 38, fontWeight: 500, color: MUTED, marginTop: 30, letterSpacing: -0.5 }}>
          Computer repair · IT support · Networking · Data recovery
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 14 }}>
          <Dot color={INK} diameter={22} />
          <Dot color={INK} diameter={22} />
          <Dot color={ORANGE} diameter={22} />
        </div>
        <div style={{ width: 360, height: 10, background: ORANGE }} />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Outfit", data: medium, style: "normal", weight: 500 },
        { name: "Outfit", data: extraBold, style: "normal", weight: 800 },
      ],
    },
  );
}
