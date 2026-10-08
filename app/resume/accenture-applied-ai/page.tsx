import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Accenture Applied AI Engineer) | Graham Anderson",
};

export default function AccentureAppliedAiResume() {
  return (
    <ResumeDoc
      aiSectionTitle="Agentic AI on Claude: Independent Work"
      locationLine="Based in Evergreen, CO · available for the Denver office · open to travel · current Accenture Federal Services employee"
      summary="AI builder who has rebuilt how I work around agents: I use Claude Code daily and ship agentic systems on the Anthropic ecosystem. Builds MCP servers as both producer and consumer, retrieval pipelines with source citations, multi-agent orchestration, and evaluation frameworks that act as quality gates on agent output, every project live or open-source. 5+ years as a software engineer at Accenture Federal Services and Modius, building Java/Spring Boot services, REST APIs, and AngularJS and React front ends and deploying them on Kubernetes and OpenShift, while partnering with client, product, and architecture teams. 13+ years before that in pre-construction, scoping $80M+ programs and presenting business cases to executives, so I'm as comfortable in a client conversation or a sales pursuit as in a technical deep-dive."
      strengths={[
        "Anthropic Ecosystem: Claude API, Claude Code (daily), tool use, prompt caching, context engineering, adaptive thinking",
        "MCP & Agents: MCP servers (producer + consumer, stdio and Streamable HTTP), agent harnesses, tool-use orchestration, sub-agents",
        "Retrieval & Evaluation: RAG with relevance scoring and citations, LLM-as-judge evaluation harnesses, quality gates on agent output",
        "Engineering: Python, TypeScript, Java/Spring Boot, React, Next.js, Angular/AngularJS, REST APIs, SQL",
        "Cloud & Delivery: AWS, Kubernetes, OpenShift, Docker, CI/CD (40% faster deploys), HashiCorp Vault",
        "Client & Sales Facing: explaining AI to technical and non-technical audiences, live demos, business cases, $80M+ program leadership",
      ]}
      aiWork={[
        "MCP Integration Server (github.com/Gramman87/mcp-server): an enterprise MCP server exposing 6 agentic tools over both stdio and Streamable HTTP, consumed by a Claude agent acting as a real MCP client that discovers and calls tools at runtime across customer, ticket, knowledge-base, and metrics data.",
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack service that publishes tools over an MCP producer surface and runs a streaming agent that consumes them, with a React/TypeScript UI rendering tool calls and tokens live, an OpenAI-compatible endpoint, and a JUnit suite.",
        "RAG Knowledge Agent (github.com/Gramman87/rag-agent): retrieval over a documentation corpus that surfaces top-k chunks with relevance scores, then has Claude compose a grounded answer with inline source citations.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a Claude lead agent dispatches to three specialist sub-agents and synthesizes a decision-grade memo, backed by a Claude-as-judge evaluation harness and prompt caching with cache-hit telemetry.",
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): a tool-calling agent across 8 tools and employee, department, and policy data, answering in under 3 seconds per query. The kind of live demo agent that helps a sales pursuit land.",
      ]}
    />
  );
}
