import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (OpenAI FDE) | Graham Anderson",
};

export default function OpenAiFdeResume() {
  return (
    <ResumeDoc
      aiSectionTitle="LLM & Agent Engineering: Independent Work"
      locationLine="Based in Evergreen, CO, ready to relocate to San Francisco, open to customer travel"
      summary="Forward-deployed, full-stack engineer who builds custom software on LLM APIs and delivers it side by side with customers. Partners with technical teams to turn ambiguous business goals into scoped, tested, production systems, sharpened by 13+ years of professional delivery including $80M+ program leadership. Ships full-stack across TypeScript, React, Python, Java, and SQL, and designs for portability across model providers: isolated model seams, OpenAI-compatible endpoints, tool-calling, agents, RAG, streaming, and evaluation harnesses. Experiment-driven with a strong bias for action: scope a POC, put it in front of the customer, and iterate to the solution that actually solves the problem."
      strengths={[
        "Customer-Facing Delivery: embed with customer teams, code side by side, POC-to-production scoping, trusted technical advisor, discovery to deployment",
        "Full-Stack Build: TypeScript, React, Next.js, Python, Java/Spring Boot, REST APIs, Postgres/MySQL, SQL",
        "LLM & Agent Engineering: LLM APIs, OpenAI-compatible endpoints, tool & function calling, agents and sub-agents, RAG, real-time streaming, evaluation harnesses (LLM-as-judge)",
        "Production Ownership: AWS, Kubernetes, OpenShift, Docker, CI/CD (40% faster deploys), deployment, incident response, reliability",
        "Built From Scratch: self-directed products shipped end to end, live and open-source, model-agnostic by design",
        "Working Style: bias for action, experiment-driven and iterative, high tolerance for ambiguity, cross-functional and client-facing, $80M+ program leadership",
      ]}
      aiWork={[
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack service exposing an OpenAI-compatible /v1/chat/completions endpoint and running a streaming agent that discovers and calls tools in a loop, fronted by a React/TypeScript UI that renders tool calls and tokens in real time, with a JUnit suite. The model seam is isolated so any provider's tool-use loop drops straight in.",
        "Portfolio Analyst Sub-Agent System (github.com/Gramman87/fs-analyst-agent): a Python project where a lead model orchestrates three specialist sub-agents via tool-use and synthesizes a decision-grade memo, backed by an LLM-as-judge evaluation harness scoring routing, coverage, and quality, with prompt caching and cache-hit telemetry.",
        "HR Operations Agent and RAG Knowledge Agent: personal full-stack projects, a tool-calling operations agent (8 tools, sub-3-second responses) and a retrieval assistant with real relevance scoring and inline citations. Live and open-source.",
        "The throughline is production-shaped, model-agnostic LLM engineering: API integration, evaluation, streaming, and end-to-end delivery, built to be tested and portable rather than tied to a single provider.",
        "Use agentic coding tools daily and translate fuzzy requirements into scoped, tested work, the discovery-to-deployment arc this role runs alongside customers.",
      ]}
    />
  );
}
