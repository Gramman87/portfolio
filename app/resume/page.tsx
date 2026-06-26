import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume | Graham Anderson",
};

export default function Resume() {
  return (
    <ResumeDoc
      locationLine="Based in Evergreen, CO · open to relocation"
      summary="Full-stack software engineer who builds production features across the whole stack, JVM/Spring Boot services, APIs, and data models on the backend, TypeScript and React on the front end. Ships agentic AI applications on Claude in Python and TypeScript: MCP servers (producer and consumer), tool-calling agents, sub-agent orchestration, RAG, and real-time streaming. Modernizes legacy enterprise systems and operates production services on AWS, OpenShift, and Kubernetes, owning them through deployment, incident response, and reliability. Takes pride in well-tested, maintainable code and sound API governance: versioning, backward compatibility, and security on public-facing surfaces."
      strengths={[
        "Backend (JVM): Java, Spring Boot, REST APIs, microservices, OpenAI-compatible endpoints, systems integration, SQL",
        "Frontend: TypeScript, React, Next.js, HTML/CSS, Tailwind, data visualization",
        "AI & Agentic: Claude API, tool & function calling, MCP (producer + consumer), agents and sub-agents, real-time streaming (SSE/WebSockets), RAG, evaluation harnesses",
        "Testing & Quality: JUnit, Claude-as-judge evaluations, evaluation harnesses; API governance: versioning, backward compatibility, security standards",
        "Cloud & DevOps: AWS, Kubernetes, OpenShift (OCP), Docker, GitLab CI/CD, HashiCorp Vault, full service-lifecycle ownership and incident response",
        "Delivery: Python, Agile/Scrum, cross-functional collaboration, release planning, $80M+ program leadership",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack Java 21 / Spring Boot service that publishes tools over an MCP producer surface and runs a streaming agent consuming them over SSE, fronted by a React/TypeScript UI, with an OpenAI-compatible endpoint and a JUnit suite covering tools, registry, agent logic, and controllers. The LLM seam is isolated so a real Claude tool-use call drops straight in.",
        "Ship full-stack applications on the Claude API: MCP servers as both producer and consumer (stdio + Streamable HTTP transports), tool-calling agents, sub-agent orchestration, RAG pipelines, and real-time streaming UIs in Python and TypeScript/React. Every project is live and open-source.",
        "Stand up evaluation harnesses, including Claude-as-judge scoring on routing correctness, coverage, and output quality across hand-written cases, to iterate prompts and tool definitions and catch regressions.",
        "Hands-on with agentic coding tools (Claude Code, Cursor) and LLM integration patterns: tool/function calling, OpenAI-compatible endpoints, data streaming, and the Model Context Protocol as a producer and consumer.",
      ]}
    />
  );
}
