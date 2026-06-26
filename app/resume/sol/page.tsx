import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Sol) | Graham Anderson",
};

export default function SolResume() {
  return (
    <ResumeDoc
      locationLine="Based in Evergreen, CO · open to relocation"
      summary="Full-stack software engineer who builds AI-native enterprise products end to end — from JVM/Spring Boot services, APIs, and data models on the backend to the TypeScript and React interfaces they power. 5+ years of JVM engineering with real depth in concurrency and data-access patterns, ready to ramp quickly on Kotlin. Ships agentic and conversational AI on Claude in Python and TypeScript: MCP servers (producer and consumer), tool-calling agents, sub-agent orchestration, RAG, and real-time streaming — including an agentic HR operations agent. Builds data-driven interfaces that adapt to the data rather than static layouts, uses AI coding tools daily, and takes pride in well-tested, maintainable code and sound API governance — versioning, backward compatibility, and security on public-facing surfaces."
      strengths={[
        "Backend (JVM): Java, Spring Boot, Kotlin (ramping), REST APIs, microservices, concurrency & data-access patterns, systems integration, SQL",
        "Frontend: TypeScript, React, Next.js, HTML/CSS, Tailwind, data-driven & dynamic interfaces",
        "AI & Agentic: Claude API, tool & function calling, conversational & agent-mediated UX, MCP (producer + consumer), agents and sub-agents, real-time streaming (SSE/WebSockets), RAG, evaluation harnesses",
        "Testing & Quality: JUnit, Claude-as-judge evaluations, evaluation harnesses; API governance — versioning, backward compatibility, security standards",
        "Cloud & DevOps: AWS, Kubernetes, OpenShift (OCP), Docker, GitLab CI/CD, HashiCorp Vault, full service-lifecycle ownership and incident response",
        "Delivery: Python, Agile/Scrum, cross-functional collaboration, release planning, $80M+ program leadership",
      ]}
      aiWork={[
        "HR Operations Agent (github.com/Gramman87/hr-agentic-workflow): an AI-native take on HR operations — an agentic Claude workflow with real tool-calling that orchestrates 8 tools across 30+ employees, 6 departments, and 7 policies for compensation analysis, retention risk scoring, org-chart traversal, and PTO tracking in under 3 seconds per query, with a data-driven UI that adapts to the underlying employee data. Full-stack Next.js / TypeScript, live and open-source.",
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack Java 21 / Spring Boot service that publishes tools over an MCP producer surface and runs a streaming agent consuming them over SSE, fronted by a React/TypeScript UI, with an OpenAI-compatible endpoint and a JUnit suite covering tools, registry, agent logic, and controllers. The LLM seam is isolated so a real Claude tool-use call drops straight in.",
        "Ship full-stack applications on the Claude API — MCP servers as both producer and consumer (stdio + Streamable HTTP transports), tool-calling agents, sub-agent orchestration, RAG pipelines, and real-time streaming UIs in Python and TypeScript/React. Every project is live and open-source.",
        "Stand up evaluation harnesses — including Claude-as-judge scoring on routing correctness, coverage, and output quality across hand-written cases — to iterate prompts and tool definitions and catch regressions.",
        "Hands-on with agentic coding tools (Claude Code, Cursor) and LLM integration patterns: tool/function calling, OpenAI-compatible endpoints, data streaming, and the Model Context Protocol as a producer and consumer.",
      ]}
    />
  );
}
