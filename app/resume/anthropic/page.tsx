import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Anthropic) | Graham Anderson",
};

export default function AnthropicResume() {
  return (
    <ResumeDoc
      locationLine="Based in Evergreen, CO · ready to relocate to San Francisco"
      summary="Full-stack product engineer who turns model capabilities into products people actually use: TypeScript and React on the surface, services and APIs behind them, and agentic experiences on the Claude API as core craft. Builds on Claude daily: MCP servers as both producer and consumer, tool-calling and conversational agents, sub-agent orchestration, RAG, and token-by-token streaming, with an OpenAI-compatible endpoint and evaluation harnesses (including Claude-as-judge) to keep it correct as it scales. 5+ years of production engineering with genuine end-to-end ownership: performance, reliability, accessibility, and API governance on public-facing surfaces, plus daily use of agentic coding tools like Claude Code, bringing a builder's perspective on designing for both human and AI developers."
      strengths={[
        "Full-Stack Product: TypeScript, React, Next.js, end-to-end feature ownership, performance, accessibility, reliability, developer experience",
        "AI & Agentic: Claude API, tool & function calling, MCP (producer + consumer), agents and sub-agents, conversational & agent-mediated UX, RAG, real-time streaming (SSE/WebSockets), OpenAI-compatible endpoints",
        "Backend & APIs: Python, Java/Spring Boot, REST APIs, microservices, concurrency & data-access patterns, SQL, systems integration",
        "Quality & DX: evaluation harnesses, Claude-as-judge evals, JUnit, API governance (versioning, backward compatibility, security), observability",
        "Cloud & Platform: AWS, Kubernetes, OpenShift, Docker, CI/CD (40% faster deploys), HashiCorp Vault, service-lifecycle ownership and incident response",
        "Collaboration: Claude Code / Cursor daily, Agile/Scrum, partnering with PMs, designers, and researchers, $80M+ program leadership",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack service that publishes tools over an MCP producer surface and runs a streaming agent consuming them over SSE, fronted by a React/TypeScript UI, with an OpenAI-compatible /v1/chat/completions endpoint and a JUnit suite. The LLM seam is isolated so a real Claude tool-use call drops straight in, the kind of API-and-tooling surface developers build on.",
        "MCP Integration Server (github.com/Gramman87/mcp-server): an enterprise MCP server exposing agentic tools over both stdio and Streamable HTTP, consumed by a Claude agent acting as a real MCP client that discovers and calls tools at runtime, the Model Context Protocol worked end to end from both the producer and consumer sides.",
        "Ship full-stack agentic applications on the Claude API in Python and TypeScript/React: tool-calling agents, sub-agent orchestration, RAG pipelines, and real-time streaming UIs, including an agentic HR operations agent and a finance analyst sub-agent system. Every project is live and open-source.",
        "Stand up evaluation harnesses, Claude-as-judge scoring on routing, coverage, and output quality across hand-written cases, plus prompt caching with cache-hit telemetry, to iterate prompts and tool definitions and catch regressions.",
        "Use Claude Code daily as a first-class part of how I build, bringing real opinions on what makes developer-facing AI tooling trustworthy and on designing for both human and AI developers.",
      ]}
    />
  );
}
