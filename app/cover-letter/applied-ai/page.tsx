import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Anthropic, Applied AI) | Graham Anderson",
};

export default function AppliedAiCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Anthropic Hiring Team,"
      paragraphs={[
        "I'm applying for the Applied AI Architect role. Helping enterprises see what Claude can do and architecting how they actually integrate and deploy it is work I'm built for: I've spent five years translating ambiguous business problems into shipped, tested technical solutions, and I now build agentic applications on Claude as my core craft. I can move from an executive's business goal down to a working tool-calling integration and back up to the value it delivers.",
        "On the technical side, I build the exact patterns enterprise customers need to adopt Claude well: MCP servers as both producer and consumer, tool-calling and conversational agents, RAG, and streaming integrations, plus a full-stack Spring Boot MCP agent with an OpenAI-compatible endpoint. Crucially for this role, I design evaluation frameworks: Claude-as-judge harnesses that score routing, coverage, and output quality, so a customer can measure whether Claude actually performs for their use case rather than guess. Every project is live or open-source.",
        "I'm comfortable across the full gamut this role spans, from deep technical dives with engineering teams to business-value conversations with executives. At Accenture Federal Services I integrate into existing enterprise stacks, partner across product, architecture, and client teams, and turn fuzzy requirements into well-scoped, tested work. Before software, I led $80M+ programs where the job was aligning many stakeholders around a plan and delivering it. That cross-functional, customer-facing muscle is exactly what a trusted technical advisor needs.",
        "I'd bring genuine technical depth, a builder's credibility, and the ability to meet customers where they are. I'm based in Evergreen, CO, ready to relocate to San Francisco, New York, or Seattle, and glad to travel to customer sites. I'd welcome the chance to talk about helping enterprises get real value from Claude. Thank you for your consideration.",
      ]}
    />
  );
}
