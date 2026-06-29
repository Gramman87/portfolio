import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Anthropic, Applied AI) | Graham Anderson",
};

export default function AppliedAiResume() {
  return (
    <ResumeDoc
      aiSectionTitle="Agentic AI & Evaluation: Independent Work"
      locationLine="Based in Evergreen, CO · ready to relocate to San Francisco, New York, or Seattle · open to customer travel"
      summary="Technical advisor and builder who helps organizations turn Claude into deployed solutions. 5+ years translating ambiguous business problems into shipped, tested technical work, now building agentic applications on the Claude API as core craft: MCP servers (producer and consumer), tool-calling and conversational agents, RAG, and streaming, backed by Claude-as-judge evaluation frameworks that measure whether the system actually performs. Comfortable across the full gamut, from deep technical dives with engineering teams to business-value conversations with executives, with hands-on enterprise-integration experience and a track record of aligning cross-functional stakeholders to deliver."
      strengths={[
        "Claude Solutions: API integration, tool & function calling, MCP (producer + consumer), agents and sub-agents, RAG, real-time streaming, OpenAI-compatible endpoints",
        "Evaluation & Reliability: Claude-as-judge evaluation frameworks, routing/coverage/quality scoring, prompt caching, API governance (versioning, backward compatibility, security)",
        "Enterprise Integration: REST APIs, microservices, systems integration, AWS, Kubernetes, OpenShift, legacy modernization, deployment and incident response",
        "Customer-Facing & Cross-Functional: translating business goals into technical architecture, partnering across product/engineering/client teams, technical content for engineers and executives, $80M+ stakeholder alignment",
        "Full-Stack Build: TypeScript, React, Next.js, Java/Spring Boot, Python, SQL",
        "Working Style: Claude Code / Cursor daily, Agile/Scrum, comfortable with ambiguity and customer travel",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack reference for standing Claude up behind an organization's own surface, a service that publishes tools over an MCP producer surface and runs a streaming agent consuming them, with an OpenAI-compatible /v1/chat/completions endpoint and a JUnit suite. The model seam is isolated so a real Claude tool-use call drops straight in.",
        "MCP Integration Server (github.com/Gramman87/mcp-server): an enterprise MCP server exposing agentic tools over stdio and Streamable HTTP, consumed by a Claude agent as a real MCP client at runtime, the integration pattern enterprises adopt to give Claude access to their systems.",
        "Evaluation frameworks: Claude-as-judge harnesses that score routing, coverage, and output quality across hand-written cases, plus prompt caching with cache-hit telemetry, so performance for a specific use case is measured, not assumed.",
        "A range of agentic solutions on Claude: an HR operations agent, a finance analyst sub-agent system, and a RAG knowledge assistant, each full-stack and live or open-source, showing common integration patterns across domains.",
        "Use Claude Code daily and translate fuzzy requirements into scoped, tested work, the same discovery-to-delivery arc this role runs with customers.",
      ]}
    />
  );
}
