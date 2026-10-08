import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Workday Presales EA) | Graham Anderson",
};

export default function WorkdayEaResume() {
  return (
    <ResumeDoc
      aiSectionTitle="AI Demos & Proofs of Concept: Independent Work"
      locationLine="Based in Evergreen, CO · remote, open to up to 50% customer travel"
      summary="Solution architect and engineer who translates business needs into enterprise technology strategy, with an instinct for presales earned the long way: 13+ years in pre-construction, scoping $80M+ programs, building the business case, and presenting it to owners and executives before the work was won. 5+ years as a software engineer at Accenture Federal Services and Modius, building and integrating enterprise applications (Java/Spring Boot services, REST APIs, AngularJS and React front ends) and deploying them on Kubernetes and OpenShift, with working command of cloud architecture, security, and integration standards. Also acts as Scrum Master for a 5-person engineering team at Accenture Federal Services, coordinating with partner teams and reporting progress and risks up the chain to leadership. Builds AI agents and proofs of concept on LLM APIs (tool-calling, MCP, RAG, evaluation), so I can design tailored AI demos that speak to a prospect's actual business problem."
      strengths={[
        "Solution Architecture: mapping systems, dependencies, and integration points into solution strategies; REST APIs, service decomposition design, enterprise integration patterns",
        "Presales & Executive Communication: business-case development, technical presentations to executives and owners, translating technical concepts into business value",
        "Cloud, Security & Integration: AWS, Kubernetes, OpenShift, Docker, HashiCorp Vault secrets management, API governance (versioning, backward compatibility, security)",
        "Enterprise Data & AI: AI agents, tool-calling, MCP, RAG, evaluation harnesses; tailored AI demos and proofs of concept",
        "Full-Stack Build: Java/Spring Boot, Python, TypeScript, React, Angular/AngularJS, SQL",
        "Professional Services: client-facing delivery at Accenture Federal Services, cross-functional work with product, architecture, and client teams, $80M+ program leadership",
      ]}
      aiWork={[
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): an agentic HR workflow where an AI agent orchestrates 8 tools across employee, department, and policy data for compensation analysis, retention risk scoring, org-chart traversal, and PTO tracking in under 3 seconds per query. A working demo of AI applied to the HCM questions Workday customers ask.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): multi-agent orchestration that produces a decision-grade financial memo, backed by an LLM-as-judge evaluation harness that measures quality rather than assuming it.",
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack reference architecture showing how an enterprise can expose its systems to AI, a service that publishes tools over MCP and runs a streaming agent against them, with an OpenAI-compatible endpoint, React UI, and JUnit suite.",
        "Every project is live or open-source and follows the same arc presales runs: understand the business problem, then show a working solution.",
      ]}
    />
  );
}
