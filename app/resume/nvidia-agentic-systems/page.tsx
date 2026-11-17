import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (NVIDIA Senior Software Engineer, Agentic Systems) | Graham Anderson",
  robots: { index: false, follow: false },
};

export default function NvidiaAgenticSystemsResume() {
  return (
    <ResumeDoc
      aiSectionTitle="Agent Evaluation and Agentic AI: Independent Work"
      locationLine="Based in Evergreen, CO · applying for the Colorado remote location"
      summary="Software engineer with nearly 5 years building Java/Spring Boot services, REST APIs, and delivery tooling at Accenture Federal Services and Modius, who builds and evaluates AI agents in Python and TypeScript as personal projects. Builds measurement in from the start: an LLM-as-judge harness that scores a multi-agent system on routing, coverage, and rubric quality and flags figures no source supports, and a retrieval eval that showed keyword search missed most paraphrased questions before vector search was added. The agents expose every tool call and result, validate input before spending anything, and fall back to labelled answers rather than passing canned output off as the model's. At work, cut deployment time from 25 to 15 minutes in GitLab CI/CD and built and shipped Flightplan, a 20-rule audit engine over a 19-team program's GitLab data. Before software, 13+ years in pre-construction, scoping and pricing $5M to $85M projects with owners and executives."
      strengths={[
        "Agent Evaluation: LLM-as-judge scoring with JSON-schema structured output, routing and coverage checks, grounding checks, retrieval evals (hit@1, hit@3, MRR), offline regression tests that need no API key",
        "Python: type-hinted Python 3, request validation, concurrent sub-agents, structured trace and usage records, pytest against a mocked API transport",
        "Agent Systems: Claude API tool-use loops, MCP servers and clients (Java and TypeScript SDKs), sub-agent orchestration, streaming (SSE), hybrid RAG with reciprocal rank fusion",
        "Developer-Facing Interfaces: MCP tool servers, REST and OpenAI-compatible endpoints, API versioning and backward compatibility",
        "Platform: Docker, Red Hat OpenShift (Kubernetes), GitLab CI/CD, GitHub Actions, HashiCorp Vault, Java 21, Spring Boot, TypeScript, React",
        "Delivery: Scrum Master for a 5-person team in a 19-team SAFe program, cross-team coordination, scoping and business cases with executives",
      ]}
      aiWork={[
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent, Python): a lead agent dispatches to three specialist sub-agents that run concurrently, and each request returns a structured trace of thinking, tool calls, results, and errors, with token totals across every model call. The eval harness scores hand-written cases on routing, term coverage, and an LLM judge's rubric returned as JSON-schema structured output, and lists any figure in a memo that no briefing supports. 68 pytest tests run the real SDK against a mocked transport.",
        "RAG Knowledge Agent (github.com/Gramman87/rag-agent, TypeScript): keyword and vector retrieval merged by reciprocal rank fusion, measured by a retrieval eval of 16 hand-written questions scoring hit@1, hit@3, and MRR. Keyword search alone found the right passage first for every direct question but for 13% of paraphrases, which is why vector search was added. CI runs the keyword eval on every push.",
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent, Java 21): one tool registry published as an MCP server over Streamable HTTP and used by a streaming Claude agent, with CI checking the server against both the Java and TypeScript MCP clients, a Docker image, and a fake Anthropic server that tests every fallback path without an API key.",
        "HR Operations Agent and MCP Web Agent (github.com/Gramman87/hr-agentic-workflow, mcp-web, TypeScript): tool-calling agents whose tool errors go back to the model instead of failing the request, with tests that check every tool's numbers against the data directly and an Origin check on the MCP endpoint.",
      ]}
    />
  );
}
