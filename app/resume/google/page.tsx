import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Google SWE III) | Graham Anderson",
};

export default function GoogleResume() {
  return (
    <ResumeDoc
      aiSectionTitle="LLM & Agent Engineering: Independent Work"
      locationLine="Based in Evergreen, CO · available on-site in the San Francisco Bay Area Tuesday through Thursday for a hybrid schedule"
      summary="Full-stack software engineer with 5+ years building and operating production services in the cloud: Java/Spring Boot and REST APIs on the backend, TypeScript and React on the front end. Ships features end to end from data model to UI and owns them through deployment, incident response, and reliability. Cares about code quality, testing, and clean design, and holds the line on API governance (versioning, backward compatibility, and security on public-facing surfaces). Builds LLM and agent applications independently, architected model-agnostically with isolated model seams and OpenAI-compatible endpoints, which pairs naturally with a cloud platform serving AI at scale. 13+ years of professional delivery, including $80M+ program leadership."
      strengths={[
        "Backend: Java, Spring Boot, Python, REST APIs, microservices, distributed systems, SQL, systems integration",
        "Frontend: TypeScript, React, Next.js, HTML/CSS, full-stack feature ownership from data model to UI",
        "Cloud & Infrastructure: AWS, Kubernetes, OpenShift, Docker, containerization, CI/CD (40% faster deploys)",
        "LLM & Agent (independent): LLM APIs, OpenAI-compatible endpoints, tool & function calling, agents and sub-agents, RAG, evaluation harnesses (LLM-as-judge)",
        "Quality & Reliability: JUnit and automated testing, code review, API governance, deployment, incident response, monitoring",
        "Delivery: cross-functional collaboration, Agile/Scrum, release planning, $80M+ program leadership, mentoring",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack service exposing an OpenAI-compatible /v1/chat/completions endpoint and running a streaming agent that discovers and calls tools in a loop, fronted by a React/TypeScript UI that renders tool calls and tokens in real time, with a JUnit suite. The model seam is isolated so any provider drops in.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a Python project where a lead model orchestrates three specialist sub-agents via tool-use and synthesizes a decision-grade memo, backed by an LLM-as-judge evaluation harness scoring routing, coverage, and quality, with prompt caching and cache-hit telemetry.",
        "HR Operations Agent and RAG Knowledge Agent: personal full-stack projects, a tool-calling operations agent (8 tools, sub-3-second responses) and a retrieval assistant with real relevance scoring and inline citations. Live and open-source.",
        "The throughline is production-shaped, model-agnostic full-stack engineering: API integration, evaluation, streaming, and end-to-end delivery, built to be tested and portable rather than tied to one provider.",
      ]}
    />
  );
}
