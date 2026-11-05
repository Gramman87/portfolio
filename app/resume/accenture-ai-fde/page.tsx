import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Accenture AI Led FDE) | Graham Anderson",
};

export default function AccentureAiFdeResume() {
  return (
    <ResumeDoc
      aiSectionTitle="AI-Powered Products, Shipped: Independent Work"
      locationLine="Based in Evergreen, CO · available for the Denver office · open to travel · current Accenture Federal Services employee"
      summary="Product-minded engineer who designs and ships AI-powered products full stack, working code rather than recommendations. Builds AI systems end to end: RAG with cited sources, agentic orchestration, prompt and context engineering, evaluation harnesses, tool use, and MCP integration, with deliberate model selection for cost and latency (a larger lead model dispatching to smaller specialist models, with token use tracked across every call). Every product is live or open-source. 5+ years as a software engineer in a consulting environment at Accenture Federal Services and Modius, delivering Java/Spring Boot services, REST APIs, and AngularJS and React front ends with client, product, and architecture teams. Also acts as Scrum Master for a 5-person engineering team at Accenture Federal Services, coordinating with partner teams and reporting progress and risks up the chain to leadership. 13+ years before that in pre-construction, originating and scoping $80M+ programs and building the business case before a brief existed."
      strengths={[
        "AI Systems: RAG, agentic orchestration, sub-agents, prompt and context engineering, evaluation harnesses (LLM-as-judge), tool use, MCP (producer + consumer)",
        "Model Judgment: larger vs. smaller-model routing, token-use tracking, cost and latency tradeoffs; Claude, plus OpenAI-compatible endpoints for portability",
        "Product Engineering: full-stack AI products in TypeScript, React, Next.js, Python, Java/Spring Boot, Angular/AngularJS, SQL",
        "Activating Existing Data: exposing systems and data to agents through MCP and APIs rather than re-architecting them",
        "Consulting Delivery: client-facing work at Accenture Federal Services, translating ambiguous requirements into scoped work, Kubernetes/OpenShift deployment, CI/CD (40% faster deploys)",
        "Origination & Stakeholders: use-case discovery, business cases, executive communication, $80M+ program leadership",
      ]}
      aiWork={[
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): an AI-powered HR product where an agent orchestrates 8 tools over employee, department, and policy data for compensation analysis, retention risk scoring, org-chart traversal, and PTO tracking, with each tool call and its result shown in the UI. Live, with a UI built for the business user.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a larger lead model routes to three smaller specialist sub-agents running concurrently and synthesizes a decision-grade memo, with token use across every model call shown in the UI, a labelled fallback when the model is unavailable, and an LLM-as-judge harness scoring routing, coverage, and quality on test cases.",
        "RAG Knowledge Agent (github.com/Gramman87/rag-agent): retrieval over a documentation corpus with relevance-scored top-k chunks and grounded answers carrying inline source citations.",
        "MCP Integration Server and Spring Boot MCP Agent (github.com/Gramman87/mcp-server, spring-mcp-agent): MCP servers that open existing business data and services to agents: one consumed by a real MCP client at runtime, the other a Java service that also runs a streaming agent on the same tools, with a React UI and an OpenAI-compatible endpoint.",
        "Streaming Analytics Dashboard (github.com/Gramman87/fde-dashboard): a Next.js product with a natural-language query interface that streams answers over sample business metrics, plus server-side cached AI insight cards and a labelled fallback when the model is unavailable.",
      ]}
    />
  );
}
