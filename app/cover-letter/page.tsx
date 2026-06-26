import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter | Graham Anderson",
};

export default function CoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Hiring Team,"
      paragraphs={[
        "I'm a full-stack software engineer who builds production features across the whole stack — services and APIs on the backend, TypeScript and React on the front end — and ships agentic applications on Claude as my core craft. I take real end-to-end ownership: designing the data model, building the interface, and keeping it reliable for the people who depend on it.",
        "I have 5+ years of production engineering, most recently at Accenture Federal Services, where I modernize legacy enterprise systems end-to-end: containerizing Java/Spring Boot services, migrating them onto OpenShift and Kubernetes, building and consuming REST APIs across a microservice architecture, and owning them through deployment, incident response, and reliability work. I re-architected our CI/CD pipelines to cut deployment time 40%, and I uphold API governance — versioning, backward compatibility, and security on public-facing surfaces.",
        "On the AI side, I build agentic applications on Claude in Python and TypeScript: MCP servers as both producer and consumer, tool-calling and conversational agents, sub-agent orchestration, RAG, and real-time streaming. Among them are a full-stack Spring Boot MCP agent with an OpenAI-compatible endpoint, a finance analyst sub-agent system backed by a Claude-as-judge eval harness, and an agentic HR operations agent — each live or open-source. I use agentic coding tools like Claude Code daily, and I back my LLM work with evaluation harnesses and tests so it stays correct and maintainable as it evolves.",
        "I'm based in Evergreen, CO, open to relocation, and I'd welcome the chance to talk about how I can help your team build. Thank you for your consideration.",
      ]}
    />
  );
}
