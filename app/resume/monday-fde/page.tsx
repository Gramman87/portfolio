import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (monday.com FDE) | Graham Anderson",
};

export default function MondayFdeResume() {
  return (
    <ResumeDoc
      aiSectionTitle="AI Solutions, Built and Shipped: Independent Work"
      locationLine="Based in Evergreen, CO · available 3 days/week in the Denver office"
      summary="Engineer who closes the gap between AI capability and AI deployment: architecting agent solutions, wiring them into the systems where a business's data already lives, and measuring whether they actually work. Builds MCP servers as both producer and consumer, agents with tool use, retrieval with cited sources, and evaluation harnesses that score agent output against real cases, every project live or open-source, built in TypeScript, React, Next.js, and Python with Claude Code in daily use. 5+ years of enterprise software delivery at Accenture Federal Services and Modius, building Java/Spring Boot services, REST APIs, and AngularJS front ends, helping move a multi-component application onto Red Hat OpenShift to shorten release cycles, and cutting deployment time 40% through CI/CD work. Acts as Scrum Master for a 5-person team, reporting progress and risks to leadership. 13+ years before software in pre-construction, where every engagement started by agreeing on scope and the business case with owners and executives before the build."
      strengths={[
        "Agent Architecture: AI agents, tool use, MCP (producer + consumer), sub-agent orchestration, retrieval with citations, prompt-to-production",
        "Evals & Measurement: LLM-as-judge harnesses scoring routing, coverage, and quality; instrumenting agents with cache-hit telemetry",
        "Integration: MCP integrations into existing systems, REST APIs, OpenAI-compatible endpoints, SQL, enterprise integration patterns",
        "Build: TypeScript, React, Next.js, Node, Python, Java/Spring Boot, Angular/AngularJS; full-stack apps from scratch",
        "Delivery: Red Hat OpenShift, Kubernetes, Docker, AWS, CI/CD (40% faster deploys), Scrum Master for a 5-person team",
        "Executive & Outcome Focus: business cases and success criteria agreed up front, executive presentations, 15 to 20 bids a year from $5M to $85M",
      ]}
      aiWork={[
        "MCP Integration Server (github.com/Gramman87/mcp-server): an enterprise MCP server exposing 6 tools over stdio and Streamable HTTP into customer, ticket, knowledge-base, and metrics data, consumed by a Claude agent that discovers and calls the tools at runtime. The pattern for wiring an agent into a customer's systems.",
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack service that publishes its tools as an MCP server over Streamable HTTP and runs a streaming agent on the same tool registry, with a React/TypeScript UI showing each tool call live, an OpenAI-compatible endpoint, and a JUnit suite.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a lead agent dispatches to three specialist sub-agents and writes a decision-grade memo, with an LLM-as-judge harness scoring routing, coverage, and quality on every change and cache-hit telemetry surfaced in the UI. Evals with data behind every claim.",
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): a business-facing workflow agent orchestrating 8 tools over employee, department, and policy data to answer compensation, retention-risk, org-chart, and PTO questions in under 3 seconds, built full stack in Next.js and TypeScript.",
        "Streaming Analytics Dashboard and RAG Knowledge Agent (github.com/Gramman87/fde-dashboard, rag-agent): a Next.js app with a natural-language query interface streaming answers over business metrics, and retrieval over documents with relevance-scored, cited answers.",
      ]}
    />
  );
}
