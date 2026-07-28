import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Fireworks, AI Field Engineer) | Graham Anderson",
};

export default function FireworksFdeCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Fireworks Hiring Team,"
      paragraphs={[
        "I'm applying for the AI Field Engineer role. Fireworks powers the kind of product I build in my own time: applications with frontier model capability baked into the core. Many of your customers exist because of GenAI, and so does the work I care about most. I've spent five years partnering with customers and client teams to turn ambiguous goals into shipped, tested software, and sitting on the Fireworks side of that, embedding with a customer's engineers to get them into production, is exactly the work I want. I've built on top of the inference layer for years, and part of what draws me here is going deeper into the serving and fine-tuning platform that makes it work.",
        "The line in your posting that resonates most is that credibility comes from what you build alongside the customer. That's how I operate. On my own initiative I've built a series of AI products on model APIs, each live or open-source: a full-stack MCP agent with a streaming UI and an OpenAI-compatible endpoint, a multi-agent orchestration system, a tool-calling operations agent, and a RAG assistant. I can pair-build a POC inside a customer's codebase and constraints, then own the technical relationship from discovery through deployment.",
        "Evaluation is where I'd add value on day one. You want evaluation frameworks that measure production-quality metrics, not just benchmark scores, and that's precisely the work I do: I stand up Claude-as-judge harnesses that score routing, coverage, and quality against real cases, so a deployment is judged on outcomes that matter to the customer. I run structured discovery, translate recurring pain points into concrete product proposals, and I favor the simplest thing that ships over unnecessary complexity. I work primarily in Python and TypeScript and use Claude Code daily.",
        "What I bring on day one is a builder's credibility with customers, evaluation rigor, and end-to-end ownership from discovery through production, with the serving and fine-tuning depth as the direction I'm eager to grow. I'm based in Evergreen, CO and ready to relocate to San Mateo and spend time on-site with customers. I'd welcome the chance to talk. Thank you for your consideration.",
      ]}
    />
  );
}
