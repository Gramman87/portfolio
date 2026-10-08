import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Workday AI Deployment Architect) | Graham Anderson",
};

export default function WorkdayAiDeployResume() {
  return (
    <ResumeDoc
      aiSectionTitle="AI Agent Design & Delivery: Independent Work"
      locationLine="Based in Evergreen, CO · remote, open to up to 50% customer travel"
      summary="Solution designer and engineer who connects AI capabilities to concrete business outcomes. Designs and builds AI-enabled workflows end to end: agents with tool-calling, multi-agent orchestration, retrieval, and evaluation harnesses that measure whether an agent actually does its job, including an agentic HR operations workflow and a multi-agent financial analyst. 5+ years of enterprise software engineering in a consulting environment at Accenture Federal Services and Modius, translating ambiguous client requirements into scoped, delivered work across data models, security, and integration patterns. Also acts as Scrum Master for a 5-person engineering team at Accenture Federal Services, coordinating with partner teams and reporting progress and risks up the chain to leadership. 13+ years of high-stakes program leadership from pre-construction: running discovery, building business cases, and aligning owners, engineers, procurement, and schedulers on $80M+ programs."
      strengths={[
        "AI Solution Design: AI agents and agent behaviors, tool-calling, multi-agent orchestration, RAG, evaluation harnesses (LLM-as-judge), use cases tied to business value",
        "Discovery & Functional Design: requirements discovery, translating business needs into AI-enabled workflows, process design, data readiness",
        "Consulting Delivery: client-facing work at Accenture Federal Services, partnering with product, architecture, and client teams on high-stakes delivery",
        "Data, Security & Integration: REST APIs, data models, SQL, third-party system integration, HashiCorp Vault secrets management, API governance",
        "Executive Communication: explaining complex technical concepts to non-technical stakeholders, business-case development, $80M+ program leadership",
        "Build: Java/Spring Boot, Python, TypeScript, React, Angular/AngularJS, Kubernetes/OpenShift",
      ]}
      aiWork={[
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): an AI-enabled HR workflow where an agent orchestrates 8 tools across employee, department, and policy data, handling compensation analysis, retention risk scoring, org-chart traversal, and PTO tracking in under 3 seconds per query. Designed around the questions an HR leader actually asks.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a lead agent dispatches to three specialist sub-agents and synthesizes a decision-grade memo for a finance audience, with an LLM-as-judge harness scoring routing, coverage, and quality so every change is measured.",
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a reference integration showing how enterprise systems expose tools to an agent over MCP, with a streaming UI and test suite, covering the data, security, and integration questions every enterprise AI deployment raises.",
        "Each project is live or open-source and built the way a deployment should be: start from the business outcome, design the agent's behavior, then measure it.",
      ]}
    />
  );
}
