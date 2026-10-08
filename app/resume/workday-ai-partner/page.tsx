import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Workday Applied AI Partner Architect) | Graham Anderson",
};

export default function WorkdayAiPartnerResume() {
  return (
    <ResumeDoc
      aiSectionTitle="Agentic AI Architecture: Independent Work"
      locationLine="Based in Evergreen, CO · remote, open to up to 40% partner and customer travel"
      summary="Architect and engineer who designs production-minded agentic AI systems and explains them to engineers and executives alike. Builds agents with MCP (as both producer and consumer), tool-calling, multi-agent orchestration, RAG, and evaluation harnesses, including an agentic HR operations workflow and a multi-agent financial analyst. 5+ years of enterprise software engineering inside a Global System Integrator at Accenture Federal Services, building, integrating, and deploying Java/Spring Boot services on Kubernetes and OpenShift in a security- and compliance-driven federal environment. Also acts as Scrum Master for a 5-person engineering team at Accenture Federal Services, coordinating with partner teams and reporting progress and risks up the chain to leadership. 13+ years presenting business cases and technical plans to owners and executives as a pre-construction leader on $80M+ programs, and comfortable building the plane while flying it."
      strengths={[
        "Agentic Architecture: AI agents, MCP (producer + consumer), tool-calling, multi-agent orchestration, RAG, evaluation harnesses, rapid prototyping",
        "Enterprise Integration: REST APIs, service decomposition design, data flows across systems, Kubernetes, OpenShift, AWS",
        "Security & Governance: HashiCorp Vault secrets management, API governance (versioning, backward compatibility, security), federal compliance environment",
        "GSI Experience: software engineering within Accenture Federal Services, partnering with client, product, and architecture teams",
        "Executive Communication: architecture diagrams, roadmaps, business cases, presenting to technical, business, and executive audiences",
        "Build: Java/Spring Boot, Python, TypeScript, React, Angular/AngularJS, SQL",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack service that publishes tools over MCP and runs a streaming agent that consumes them, with an OpenAI-compatible endpoint, React/TypeScript UI, and a JUnit suite. The model seam is isolated so any provider's tool-use loop drops in.",
        "MCP Integration Server (github.com/Gramman87/mcp-server): an enterprise MCP server exposing agentic tools over stdio and Streamable HTTP, consumed by a frontier-model agent acting as a real MCP client, the pattern for connecting a system of record to frontier models.",
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow) and Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): an agentic HCM workflow across employee, department, and policy data, and a multi-agent financial analyst backed by an LLM-as-judge evaluation harness.",
        "Each is live or open-source: the kind of working prototype that closes the gap between an AI roadmap and technical reality.",
      ]}
    />
  );
}
