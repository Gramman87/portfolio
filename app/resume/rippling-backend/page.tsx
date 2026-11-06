import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Rippling Backend Engineering) | Graham Anderson",
};

export default function RipplingBackendResume() {
  return (
    <ResumeDoc
      aiSectionTitle="Backend and Applied AI Projects: Independent Work"
      locationLine="Based in Evergreen, CO · available on-site in San Francisco Tuesday through Thursday"
      summary="Backend software engineer with nearly 5 years building Java/Spring Boot services, REST APIs, and the data behind them at Accenture Federal Services and Modius, with an eye for correctness: validation, versioned APIs, and tests that cover the edge cases. Built and shipped Flightplan, a rule-based audit engine that checks a 19-team program's GitLab release data and flags what's wrong. Builds applied AI as personal projects in Python and TypeScript, keeping arithmetic and business rules in code, using the model for judgment, and scoring output with evaluation harnesses. Before software, 13+ years in pre-construction, scoping and pricing $5M to $85M projects with owners and executives."
      strengths={[
        "Backend: Java, Spring Boot, Python, REST API design and versioning, data modeling, SQL, modular monolith architecture, service decomposition design",
        "Correctness: rule-based validation and audit engines, input validation, backward compatibility, JUnit, Vitest, Node test runner, mutation-checked tests",
        "Applied AI: tool-calling agents, sub-agents, retrieval, structured output validation, LLM-as-judge evaluations, deterministic code versus model judgment, labelled fallbacks",
        "Integration: GitLab API, MCP (server and client), OAuth 2.0 PKCE, OpenAI-compatible endpoints, SSE streaming",
        "Delivery: Red Hat OpenShift, Kubernetes, Docker, GitLab CI/CD (deploys cut from 25 to 15 minutes), HashiCorp Vault, Scrum Master for a 5-person team",
        "Front end: TypeScript, React, Next.js, D3, AngularJS",
      ]}
      aiWork={[
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a Python finance workflow where a lead agent dispatches to three specialist sub-agents running concurrently. Portfolio math runs in code rather than in the model, malformed requests are rejected before they spend anything, and an LLM-as-judge harness scores routing, coverage, and quality on test cases.",
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): a tool-calling agent over a fictional company's HR data (employees, departments, PTO, policies) with 8 tools. Tool errors go back to the model instead of failing the request, and tests check every tool's numbers against the data directly.",
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a Java 21 service that publishes a tool registry as an MCP server over Streamable HTTP and runs a streaming agent on the same tools, with a JUnit suite and CI checks against both the Java and TypeScript MCP clients.",
        "SaaS Analytics Dashboard and MCP Web Agent (github.com/Gramman87/fde-dashboard, mcp-web): streamed model answers over business data, AI insight cards validated before the UI renders them, labelled rule-based fallbacks, input limits, and an Origin check on the MCP endpoint.",
      ]}
    />
  );
}
