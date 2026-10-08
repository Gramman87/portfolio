import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Accenture AI Led FDE) | Graham Anderson",
};

export default function AccentureAiFdeCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Design & Digital Products Hiring Team,"
      paragraphs={[
        "I'm applying for the AI Led Forward Deployed Engineer role, and I'm applying as an internal candidate: I'm a software engineer at Accenture Federal Services. What draws me to this role is the line about shipping working code, not recommendations. That's how I've approached AI. Every AI system I've built is a working product that's live or open-source, not a proof of concept or a deck.",
        "I design and build AI systems end to end. My HR Operations Agent is an AI-powered product for business users: an agent orchestrates eight tools over employee, department, and policy data to answer compensation, retention-risk, org-chart, and PTO questions in under three seconds. My portfolio analyst routes work from a frontier lead model to smaller specialist models and caches every system prompt, a deliberate cost and latency decision, and an LLM-as-judge harness acts as a guardrail on every change. I've also built a RAG agent with cited sources and MCP servers that let agents reach existing business data and services without re-architecting them. I'll be direct that this AI work has been self-directed over the last couple of years rather than three years of client delivery, and I haven't yet shipped on an enterprise platform like Bedrock or Vertex AI. That's the experience I'm looking to build here.",
        "The consulting and origination side is where my background is deep. At Accenture Federal Services I translate ambiguous client requirements into scoped, tested work, delivering Java/Spring Boot services, REST APIs, and AngularJS front ends alongside client, product, and architecture teams. Before software, I spent 13 years in pre-construction, where the job was to find the opportunity before a brief existed, scope it, build the business case, and win it with senior stakeholders. That's the same instinct as originating AI use cases and shaping an engagement.",
        "I'm based in Evergreen, Colorado, close to the Denver office listed for this role, and I'm open to travel. I'd welcome the chance to talk about building AI products with Design & Digital Products. Thank you for your consideration.",
      ]}
    />
  );
}
