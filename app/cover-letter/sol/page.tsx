import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Sol) | Graham Anderson",
};

export default function SolCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Sol Hiring Team,"
      paragraphs={[
        "I'm applying for the Full Stack Engineer role. An AI-native system that replaces the HRIS — built for change, reimagined with AI from the ground up — is exactly the kind of product I want to build, and the surface you describe (data model to UI, backend services and APIs through the interfaces customers actually use) is how I already work. I build JVM/Spring Boot services behind TypeScript and React front-ends, and I ship agentic applications on Claude as my core craft. One of them is an agentic HR operations agent — so I'm coming to Sol's domain with something already built in it.",
        "On backend, I have 5+ years of JVM engineering at Accenture Federal Services: modernizing a legacy Java/Spring Boot application end-to-end — containerizing it, migrating it onto OpenShift and Kubernetes, and building and consuming REST APIs across a microservice architecture that I own through deployment, incident response, and reliability work. That work has taken me below the surface — JVM behavior, concurrency, and the data-access patterns where performance actually goes to die — and I design APIs and data models for composition, not one-off use. Kotlin is the one piece of your stack I haven't shipped in production; on the JVM I expect to ramp fast, and I'd rather say that plainly than oversell it.",
        "I'm equally comfortable crossing into the frontend — I ship UI, not just hand off an API. My HR Operations Agent is the closest analog to Sol: an agentic Claude workflow with real tool-calling that handles compensation analysis, retention risk scoring, org-chart traversal, and PTO tracking across 30+ employees in under three seconds per query, behind a data-driven interface that adapts to the underlying employee data rather than a static layout. Around it I've built a full-stack Spring Boot MCP agent with a streaming React UI, MCP servers on both the producer and consumer sides, a sub-agent system backed by a Claude-as-judge eval harness, and a RAG knowledge agent — each live or open-source. AI coding tools like Claude Code are a first-class part of how I build, daily, not an experiment.",
        "I'm scrappy and want the ownership and breadth an early team brings — the chance to set patterns thousands of enterprise users will eventually live in. That kind of work happens in the room, and I'm ready to relocate to San Mateo to be there in person with the founding team. I'd welcome the chance to talk about what Sol is building. Thank you for your consideration.",
      ]}
    />
  );
}
