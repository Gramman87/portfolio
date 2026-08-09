import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (OpenAI Codex) | Graham Anderson",
};

export default function OpenAiCodexResume() {
  return (
    <ResumeDoc
      aiSectionTitle="Developer Tools & Agent Engineering: Independent Work"
      locationLine="Based in Evergreen, CO, ready to relocate to San Francisco"
      summary="Full-stack product engineer who builds agentic developer tools and AI-powered workflows across the whole stack: frontend applications, backend services, agent workflows, and the developer tooling that ties them together. A daily user of AI-assisted development tools with strong intuition for their strengths, weaknesses, and emerging opportunities, and a builder of agent harnesses from scratch, so I understand these systems from both the user's and the builder's side. 5+ years of production engineering with genuine end-to-end ownership, strong product judgment, and a habit of learning from real user feedback. Designs model-agnostically: isolated model seams, OpenAI-compatible endpoints, tool-calling, and evaluation."
      strengths={[
        "Developer Tools & Agent Workflows: agentic developer tooling, agent runtimes and harnesses, tool & function calling, the agent loop, real-time streaming, OpenAI-compatible endpoints",
        "Full-Stack Product: TypeScript, React, Next.js, Python, Java/Spring Boot, backend services, REST APIs, SQL",
        "AI-Assisted Development: daily user of agentic coding tools with real intuition for their strengths and gaps; builds with them and builds the systems behind them",
        "Reliability & Quality: observability, evaluation harnesses (LLM-as-judge), JUnit and automated testing, CI/CD (40% faster deploys), API governance",
        "Cloud & Ownership: AWS, Kubernetes, OpenShift, Docker, deployment, incident response, end-to-end feature ownership",
        "Working Style: strong product judgment, learns from user feedback, reframes problems from first principles, bias for action",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack agentic developer tool. A service runs a streaming agent that discovers and calls tools in a loop, exposes an OpenAI-compatible /v1/chat/completions endpoint, and is fronted by a React/TypeScript UI that renders tool calls and tokens in real time, with a JUnit suite covering tools, registry, agent logic, and controllers. The model seam is isolated so any provider drops in.",
        "MCP Integration Server (github.com/Gramman87/mcp-server): an enterprise tool server exposing agentic tools over stdio and Streamable HTTP, consumed by an agent acting as a real client that discovers and invokes tools at runtime, direct experience with how coding agents call tools under the hood.",
        "Multi-agent orchestration and retrieval: a Python sub-agent system with an LLM-as-judge evaluation harness scoring routing, coverage, and quality, plus a tool-calling operations agent and a RAG assistant. All live and open-source.",
        "The throughline is agent workflows and developer tooling built to production standards: tested, observable, model-agnostic, and shipped end to end.",
        "Use agentic coding tools daily as a first-class part of how I build, bringing real opinions on what makes developer-facing AI tooling trustworthy and where it should go next.",
      ]}
    />
  );
}
