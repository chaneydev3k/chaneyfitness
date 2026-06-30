import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Personal Trainer & Online Fitness Coach`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0B0B",
          backgroundImage:
            "radial-gradient(circle at 78% 0%, rgba(59,130,246,0.38), transparent 55%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
              <path
                d="M14 39 L24 16 L31 33 L39 16 L50 39"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M14 48 H50" stroke="#0B0B0B" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ color: "#fff", fontSize: 30, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#fff",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 940,
            }}
          >
            Fitness built around your life.
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 32, maxWidth: 880 }}>
            Evidence-based coaching for busy professionals. Stronger, leaner,
            healthier — for decades.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#3B82F6",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <span>Strength.</span>
          <span style={{ color: "rgba(255,255,255,0.35)" }}>·</span>
          <span>Performance.</span>
          <span style={{ color: "rgba(255,255,255,0.35)" }}>·</span>
          <span>Longevity.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
