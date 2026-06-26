import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Anthropic) | Graham Anderson",
};

export default function AnthropicCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Anthropic Hiring Team,"
      paragraphs={[
        "I'm applying for the Senior Software Engineer, Full-stack role in Product Engineering. I build on Claude every day, and I want to build the products that bring it to millions. I ship across the whole stack: TypeScript and React on the surface, services behind them, and agentic experiences on the Claude API as my core craft. Whether the team turns out to be Developer Experience, Claude.ai, the API, or Claude Code, the throughline is the same work I already do, turning new model capabilities into products that developers and end users can actually pick up and run with.",
        "What I build independently maps directly onto what Anthropic's products expose. I've built MCP servers as both producer and consumer (stdio and Streamable HTTP), tool-calling and conversational agents, sub-agent orchestration, RAG, and token-by-token streaming UIs, plus a full-stack Spring Boot MCP agent with an OpenAI-compatible /v1/chat/completions endpoint and a streaming React front end. Having worked the Model Context Protocol from both sides, I build with the grain of how Claude actually works rather than around it. Every project is live or open-source.",
        "I also use Claude Code daily as a first-class part of how I build, so I come to developer-facing AI tooling as a heavy user with real opinions on what makes it trustworthy: great platform fundamentals, fast feedback, and designing for both human and AI developers. On rigor, 5+ years of production engineering taught me to own technical quality across the whole stack: performance, reliability, accessibility, and API governance (versioning, backward compatibility, and security on public-facing surfaces), and back LLM work with evaluation harnesses, including Claude-as-judge scoring, so it stays correct as it evolves and scales to real users.",
        "I'd bring genuine end-to-end ownership and a product-oriented mindset to whichever team I'm matched with. I'm based in Evergreen, CO and ready to relocate to San Francisco for this role and the in-person collaboration it calls for. I'd welcome the chance to talk about what I could build with the team. Thank you for your consideration.",
      ]}
    />
  );
}
