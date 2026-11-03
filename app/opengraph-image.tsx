import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
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
          justifyContent: "center",
          padding: "0 120px",
          background: "#1f1e1a",
          color: "#eceae3",
          borderLeft: "1px solid #34322c",
          borderRight: "1px solid #34322c",
        }}
      >
        <div style={{ fontSize: 28, color: "#9b988e", fontFamily: "monospace" }}>nt.</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, letterSpacing: -2 }}>{site.name}</div>
        <div style={{ fontSize: 38, color: "#9b988e", marginTop: 16 }}>{site.role}</div>
      </div>
    ),
    size,
  );
}
