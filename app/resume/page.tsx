import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume | Graham Anderson",
};

export default function Resume() {
  return (
    <ResumeDoc
      locationLine="Based in Evergreen, CO · open to relocation"
      summary="Full-stack software engineer with nearly 5 years building Java/Spring Boot services, REST APIs, and web front ends at Accenture Federal Services and Modius. Cut deployment time from 25 to 15 minutes by parallelizing and caching GitLab CI/CD pipelines, and acts as Scrum Master for a 5-person team. Built and shipped Flightplan, a release-roadmap and audit tool for a 19-team program. Builds agentic AI applications on Claude as personal projects, from MCP servers and tool-calling agents to sub-agent orchestration and streaming UIs, each open-source with tests and CI. Before software, 13+ years in pre-construction, scoping and pricing $5M to $85M projects with owners and executives."
      strengths={[
        "Backend: Java 21, Spring Boot, REST APIs, modular monolith architecture, service decomposition design, systems integration, SQL",
        "Frontend: TypeScript, React, Next.js, D3, Angular/AngularJS, Tailwind, data visualization",
        "AI & Agentic (personal projects): Claude API, Python, tool calling, MCP servers and clients, sub-agents, streaming (SSE), RAG, LLM-as-judge evaluations, labelled fallbacks",
        "Testing & Quality: JUnit, Vitest, pytest, Node test runner, mutation-checked tests; API versioning, backward compatibility, security standards",
        "Cloud & DevOps: Red Hat OpenShift, Kubernetes, Docker, GitLab CI/CD, HashiCorp Vault, OAuth 2.0 PKCE; AWS from training and personal projects",
        "Delivery: Scrum Master for a 5-person team, SAFe release planning, cross-team coordination, scoping and business cases with executives",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a Java 21 service that publishes a tool registry as an MCP server over Streamable HTTP and runs a streaming Claude agent on the same tools behind a React UI, with a JUnit suite and CI checks against both the Java and TypeScript MCP clients.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a Python finance workflow where a lead agent dispatches to three specialist sub-agents running concurrently. Portfolio math runs in code rather than in the model, malformed requests are rejected before they spend anything, and an LLM-as-judge harness scores routing, coverage, and quality on test cases.",
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): a tool-calling agent over a fictional company's HR data (employees, departments, PTO, policies) with 8 tools. Tool errors go back to the model instead of failing the request, and tests check every tool's numbers against the data directly.",
        "SaaS Analytics Dashboard and MCP Web Agent (github.com/Gramman87/fde-dashboard, mcp-web): streamed model answers over business data, AI insight cards validated before the UI renders them, labelled rule-based fallbacks, input limits, and an Origin check on the MCP endpoint.",
      ]}
    />
  );
}
