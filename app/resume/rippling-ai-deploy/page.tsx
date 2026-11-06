import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Rippling AI Deployment Lead) | Graham Anderson",
};

export default function RipplingAiDeployResume() {
  return (
    <ResumeDoc
      aiSectionTitle="AI Workflows for HR and Finance: Independent Work"
      locationLine="Based in Evergreen, CO · available on-site in San Francisco Tuesday through Thursday · open to travel"
      summary="Engineer with a commercial background who builds AI workflows end to end and scopes them like an engagement: baseline first, success criteria agreed up front, then a working build and a way to measure it. 13+ years in pre-construction scoping and pricing 15 to 20 bids a year from $5M to $85M with owners and executives, winning about one in four. Nearly 5 years as a software engineer at Accenture Federal Services and Modius, including Scrum Master for a 5-person team and program tooling for a 19-team SAFe release train. Builds AI agents for HR and finance workflows as personal projects, each open-source with a live demo."
      strengths={[
        "Engagement Leadership: scoping with executive sponsors, business cases with baselines and success criteria, status and risk reporting, 15 to 20 bids a year from $5M to $85M",
        "AI Fluency: LLMs, tool-calling agents, sub-agents, retrieval, MCP integrations, LLM-as-judge evaluations, deciding what the model does versus deterministic code",
        "Production Readiness: acceptance and evaluation criteria, input validation, labelled fallbacks when the model is unavailable, permissions and edge cases at integration points",
        "Adoption: trained junior estimators, superintendents, and new project managers; explaining technical work to non-technical stakeholders",
        "Build and Delivery: Python, SQL, TypeScript, React, Java/Spring Boot, REST APIs, OpenShift, CI/CD (deploys cut from 25 to 15 minutes), Scrum Master, release planning",
      ]}
      aiWork={[
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): a Claude tool-calling agent over a fictional company's HR data, choosing from 8 tools for compensation analysis, retention-risk scoring, org charts, PTO, and policy search, with each tool call and its result shown in the UI. When the model is unavailable, keyword rules run the same tools and the answer is labelled.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a finance workflow where a lead agent dispatches to three specialist sub-agents and writes a memo. Portfolio math runs in code rather than in the model, and an LLM-as-judge harness scores routing, coverage, and quality on test cases.",
        "SaaS Analytics Dashboard (github.com/Gramman87/fde-dashboard): finance-style metrics with a plain-English question box that streams Claude's answers and AI insight cards, both validated and falling back to labelled rule-based answers.",
        "MCP Integration Server and Web Agent (github.com/Gramman87/mcp-server, mcp-web): business data exposed as tools through the Model Context Protocol, with a Claude agent that discovers and calls them as a real MCP client, the pattern for letting an agent reach existing systems.",
      ]}
    />
  );
}
