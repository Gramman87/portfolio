import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Baseten, FDE) | Graham Anderson",
};

export default function BasetenResume() {
  return (
    <ResumeDoc
      aiSectionTitle="AI Products & Evaluation: Personal Projects"
      locationLine="Based in Evergreen, CO · ready to relocate to San Francisco"
      summary="Forward-deployed engineer who ships AI products end to end and partners directly with customers to get them into production. 5+ years turning ambiguous business goals into scoped, tested, deployed software, most recently with enterprise client teams. Builds AI applications on model APIs as core craft: tool-calling and conversational agents, MCP, RAG, and streaming, backed by Claude-as-judge evaluation harnesses that measure quality against clear outcomes. Owns services through deployment, monitoring, and incident response. Works primarily in Python and TypeScript, uses Claude Code daily, and favors the simplest solution over unnecessary complexity. Genuine empathy for the customer, because building production AI products is what I already do."
      strengths={[
        "Customer-Facing Delivery: end-to-end ownership (problem framing, evaluation, deployment, monitoring), translating vague objectives into specs and PoCs, engineer + PM + technical customer success in one",
        "AI Product Build: Python, TypeScript/React, model-API integration, tool & function calling, MCP (producer + consumer), agents and sub-agents, RAG, real-time streaming",
        "Evaluation & Observability: Claude-as-judge evaluation harnesses, routing/coverage/quality scoring, prompt caching with cache-hit telemetry, service reliability and incident response",
        "Production Ownership: REST APIs, microservices, AWS, Kubernetes, OpenShift, Docker, CI/CD (40% faster deploys), deployment and monitoring of live services",
        "Backend & Full-Stack: Next.js, Java/Spring Boot, SQL, systems integration, OpenAI-compatible endpoints",
        "Working Style: Claude Code / Cursor daily, high tolerance for ambiguity, bias for velocity and simplicity, cross-functional and client-facing, $80M+ stakeholder alignment",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a personal, full-stack project where a backend publishes tools over a Model Context Protocol surface and a streaming agent calls them in a loop, fronted by a React UI that renders each tool call and token in real time, with an OpenAI-compatible /v1/chat/completions endpoint and a JUnit suite. The model seam is isolated so a real Claude tool-use call drops straight in.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a self-directed Python project where a lead Claude model orchestrates three specialist sub-agents via tool-use and synthesizes a decision-grade memo, backed by a Claude-as-judge evaluation harness scoring routing, coverage, and quality, with prompt caching and cache-hit telemetry surfaced in the UI.",
        "HR Operations Agent and RAG Knowledge Agent: personal full-stack projects, a tool-calling operations agent (8 tools, sub-3-second responses) and a retrieval assistant with real relevance scoring and inline citations. Live and open-source.",
        "The throughline across these self-built projects is production-shaped AI: model-API integration, evaluation, streaming, and end-to-end delivery, built to be tested and measurable rather than demos, the same journey Baseten customers run.",
        "Use Claude Code daily and translate fuzzy requirements into scoped, tested work, the discovery-to-deployment arc this role runs with customers.",
      ]}
    />
  );
}
