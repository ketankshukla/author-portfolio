import { ImageResponse } from "next/og";

export const alt = "Ketan Shukla — Author of 22 Books Across 3 Series";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GOLD = "#d4a843";
const GOLD_LT = "#e8c36a";
const CREAM = "#f5f0e8";
const MUTED = "#a8a196";

/**
 * Generated at build rather than shipped as a binary. The previous metadata
 * pointed at /images/og-image.png, which had never existed in the repo — so
 * every share of this site rendered without a preview.
 */
const series = [
  { name: "Aztec Samurai Adventures", books: "12", kind: "Epic fantasy" },
  { name: "Reality Without Belief", books: "5", kind: "Philosophy" },
  { name: "Repetition: Mother of Mastery", books: "5", kind: "Non-fiction" },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050505",
          padding: "0 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: GOLD,
          }}
        />

        <div style={{ display: "flex", fontSize: 25, letterSpacing: 7, color: GOLD, textTransform: "uppercase" }}>
          Author
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 600,
            color: CREAM,
            letterSpacing: -2.5,
            marginTop: 12,
          }}
        >
          Ketan Shukla
        </div>

        <div style={{ display: "flex", alignItems: "baseline", marginTop: 16 }}>
          <span style={{ fontSize: 34, color: GOLD_LT }}>22 books</span>
          <span style={{ fontSize: 30, color: "#4a453e", margin: "0 14px" }}>·</span>
          <span style={{ fontSize: 34, color: GOLD_LT }}>3 series</span>
          <span style={{ fontSize: 30, color: "#4a453e", margin: "0 14px" }}>·</span>
          <span style={{ fontSize: 34, color: GOLD_LT }}>388 chapters</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 40 }}>
          {series.map((s) => (
            <div
              key={s.name}
              style={{
                display: "flex",
                alignItems: "center",
                borderTop: "1px solid #26262c",
                padding: "16px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 52,
                  fontSize: 27,
                  color: GOLD,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.books}
              </div>
              <div style={{ display: "flex", flex: 1, fontSize: 29, color: CREAM }}>
                {s.name}
              </div>
              <div style={{ display: "flex", fontSize: 23, color: MUTED }}>{s.kind}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 2,
            color: "#7f7a71",
            marginTop: 34,
          }}
        >
          ketanshukla.com
        </div>
      </div>
    ),
    size,
  );
}
