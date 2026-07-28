import { ImageResponse } from "next/og";

export const alt = "Graham Anderson, Full Stack Software Engineer, AI-Native Products";
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
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 75% 20%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(circle at 20% 90%, rgba(6,182,212,0.18), transparent 50%)",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#a78bfa",
            fontWeight: 700,
          }}
        >
          Full Stack Software Engineer
        </div>
        <div
          style={{
            fontSize: 128,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.05,
            marginTop: 20,
          }}
        >
          Graham Anderson
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#9ca3af",
            marginTop: 28,
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          JVM &amp; TypeScript across the stack, with agentic AI on Claude: MCP, tool-calling, and real-time streaming.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 28,
            color: "#6b7280",
            fontWeight: 600,
          }}
        >
          grahamanderson.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
