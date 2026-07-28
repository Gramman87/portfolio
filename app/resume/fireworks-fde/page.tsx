import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Fireworks, AI Field Engineer) | Graham Anderson",
};

export default function FireworksFdeResume() {
  return (
    <ResumeDoc
      aiSectionTitle="AI Products & Evaluation: Personal Projects"
      locationLine="Based in Evergreen, CO · ready to relocate to San Mateo · open to on-site customer work"
      summary="Forward-deployed engineer who builds AI products end to end and earns credibility by building alongside customers. 5+ years turning ambiguous business goals into scoped, tested, deployed software, most recently with enterprise client teams. Builds GenAI applications on model APIs as core craft: tool-calling and conversational agents, MCP, RAG, and streaming, backed by evaluation frameworks that measure production-quality outcomes rather than benchmark scores. Runs structured discovery, owns the technical relationship from first engagement through production, and translates recurring pain points into concrete product proposals. Works primarily in Python and TypeScript, uses Claude Code daily, and favors the simplest solution that ships. Coming from the application and evaluation side and ramping fast into inference-serving and fine-tuning depth."
      strengths={[
        "Customer-Facing Delivery: build POCs and MVPs inside customer codebases, own the technical relationship discovery-to-production, structured discovery, engineer + technical customer success in one",
        "Evaluation Frameworks: Claude-as-judge harnesses scoring routing, coverage, and production-quality metrics; prompt caching with cache-hit telemetry; measuring outcomes over benchmarks",
        "AI Product Build: Python, TypeScript/React, model-API integration, tool & function calling, MCP (producer + consumer), agents and sub-agents, RAG, real-time streaming",
        "Production Ownership: REST APIs, microservices, AWS, Kubernetes, OpenShift, Docker, CI/CD (40% faster deploys), deployment, monitoring, and incident response",
        "Product Feedback: translating recurring customer pain points into concrete product proposals, codifying repeatable patterns back into tooling and docs",
        "Working Style: Claude Code / Cursor daily, high tolerance for ambiguity, bias for velocity and simplicity, on-site customer work, $80M+ stakeholder alignment",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a personal, full-stack project where a backend publishes tools over a Model Context Protocol surface and a streaming agent calls them in a loop, fronted by a React UI that renders each tool call and token in real time, with an OpenAI-compatible /v1/chat/completions endpoint and a JUnit suite.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a self-directed Python project where a lead Claude model orchestrates three specialist sub-agents via tool-use and synthesizes a decision-grade memo, backed by a Claude-as-judge evaluation harness scoring routing, coverage, and quality, with prompt caching and cache-hit telemetry surfaced in the UI.",
        "HR Operations Agent and RAG Knowledge Agent: personal full-stack projects, a tool-calling operations agent (8 tools, sub-3-second responses) and a retrieval assistant with real relevance scoring and inline citations. Live and open-source.",
        "The throughline across these self-built projects is production-shaped GenAI: model-API integration, evaluation frameworks, streaming, and end-to-end delivery, the same journey Fireworks customers run when they bake frontier capability into their products.",
        "Use Claude Code daily and translate fuzzy requirements into scoped, tested work, the discovery-to-deployment arc this role runs alongside customers.",
      ]}
    />
  );
}
