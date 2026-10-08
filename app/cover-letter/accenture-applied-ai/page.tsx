import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Accenture Applied AI Engineer) | Graham Anderson",
};

export default function AccentureAppliedAiCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Oracle Business Group AI Center of Excellence Team,"
      paragraphs={[
        "I'm applying for the Applied AI Engineer role on your founding team, and I'm applying as an internal candidate: I'm a software engineer at Accenture Federal Services. Your posting describes someone who has rebuilt how they work around AI agents and knows the Anthropic ecosystem. That's how I work today. I use Claude Code every day, and I've spent my own time building agentic systems on Claude that are live and open-source.",
        "The work you describe maps closely to what I've built. I've built MCP servers as both producer and consumer, including an enterprise MCP server with six tools over stdio and Streamable HTTP that a Claude agent discovers and calls at runtime, and a Spring Boot service that publishes tools over MCP and streams an agent's tool calls to a React UI. I've built a retrieval agent that returns relevance-scored sources and has Claude compose grounded answers with inline citations, and a multi-agent system backed by a Claude-as-judge evaluation harness that acts as a quality gate on every change. My retrieval so far uses keyword scoring rather than vector search, and moving to hybrid retrieval on a platform like Oracle 23ai is exactly the kind of thing I want to learn on your knowledge repository.",
        "I'm also comfortable on the client and sales side of the work. Before software, I spent 13 years leading pre-construction on $80M+ programs, scoping work and presenting business cases to owners and executives to win it. At Accenture Federal Services I build Java/Spring Boot services and REST APIs, deploy them on Kubernetes and OpenShift, and partner with client, product, and architecture teams. Building live demo agents and AI-generated assets that help a pursuit close sits right where those two backgrounds meet.",
        "I'm based in Evergreen, Colorado, close to the Denver office listed for this role, and I'm open to travel. I'd welcome the chance to help shape this team from the start. Thank you for your consideration.",
      ]}
    />
  );
}
