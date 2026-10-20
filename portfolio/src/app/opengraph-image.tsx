import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.headline}`;
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
          padding: 72,
          background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85, display: "flex" }}>asirhossain.vercel.app</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, display: "flex" }}>{site.name}</div>
          <div style={{ fontSize: 38, marginTop: 24, color: "#c7d2fe", display: "flex" }}>{site.headline}</div>
        </div>
        <div style={{ fontSize: 26, opacity: 0.8, display: "flex" }}>
          CSE undergraduate · East Delta University · {site.location}
        </div>
      </div>
    ),
    size,
  );
}
