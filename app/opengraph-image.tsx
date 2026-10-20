import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#0a0a0a",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 4, textTransform: "uppercase", color: "#4338ca" }}>
          {site.name}
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, marginTop: 24, maxWidth: 900 }}>
          {site.ogHeadline}
        </div>
        <div style={{ fontSize: 32, marginTop: 12, color: "#4338ca" }}>{site.ogSubline}</div>
        <div style={{ fontSize: 24, marginTop: 24, color: "#6b6b6b", maxWidth: 900 }}>
          {site.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
