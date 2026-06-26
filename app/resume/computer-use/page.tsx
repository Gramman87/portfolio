import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Anthropic, Computer Use) | Graham Anderson",
};

export default function ComputerUseResume() {
  return (
    <ResumeDoc
      aiSectionTitle="Agent Engineering: Independent Work"
      locationLine="Based in Evergreen, CO · ready to relocate to San Francisco, New York, or Seattle"
      summary="Full-stack product engineer who builds agent harnesses and the products that wrap them: agent runtimes that call tools in a loop, the TypeScript and React surfaces that drive them, and the backend services behind them. Agentic experiences on the Claude API are core craft: MCP servers as both producer and consumer, tool-calling and conversational agents, sub-agent orchestration, real-time streaming, and evaluation harnesses (including Claude-as-judge) to keep them correct as they change. 5+ years of production engineering with genuine end-to-end ownership and a high tolerance for ambiguity, plus daily use of Claude Code, bringing a builder's perspective on what makes agent products trustworthy to operate."
      strengths={[
        "Agent Engineering: agent runtimes & harnesses, tool & function calling, the agent loop (plan, call, observe), MCP (producer + consumer), sub-agent orchestration, real-time streaming",
        "Full-Stack Product: TypeScript, React, Next.js, end-to-end ownership (scope, build, ship, measure), performance, reliability, developer experience",
        "Backend & APIs: Python, Java/Spring Boot, REST APIs, microservices, concurrency & data-access patterns, SQL, systems integration",
        "AI Quality: evaluation harnesses, Claude-as-judge evals, prompt caching, RAG, API governance (versioning, backward compatibility, security)",
        "Cloud & Platform: AWS, Kubernetes, OpenShift, Docker, CI/CD (40% faster deploys), HashiCorp Vault, service-lifecycle ownership and incident response",
        "Working Style: Claude Code / Cursor daily, high tolerance for ambiguity, partnering with PMs, designers, and researchers, $80M+ program leadership",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack service that runs a streaming agent which discovers tools over an MCP producer surface and calls them in a loop, fronted by a React/TypeScript UI that renders each tool call and token in real time, with an OpenAI-compatible /v1/chat/completions endpoint and a JUnit suite. The model seam is isolated so a real Claude tool-use loop drops straight in.",
        "MCP Integration Server (github.com/Gramman87/mcp-server): an enterprise MCP server exposing agentic tools over stdio and Streamable HTTP, with a Claude agent acting as a real MCP client that discovers and invokes tools at runtime, so I've built both the agent harness and the tools it drives.",
        "HR Operations Agent and a finance analyst sub-agent system: agentic Claude workflows where the agent plans, calls tools, and synthesizes results, with data-driven UIs on top. Full-stack Next.js / TypeScript and Python, live and open-source.",
        "Stand up evaluation harnesses: Claude-as-judge scoring on routing, coverage, and output quality across hand-written cases, plus prompt caching with cache-hit telemetry, to iterate on prompts and tool definitions and catch regressions.",
        "Use Claude Code daily as a first-class part of how I build, bringing real opinions on what makes agent and computer-use products trustworthy to operate.",
      ]}
    />
  );
}
