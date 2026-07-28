import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Baseten, FDE) | Graham Anderson",
};

export default function BasetenCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Baseten Hiring Team,"
      paragraphs={[
        "I'm applying for the Forward Deployed Engineer role. Baseten powers the companies I'd otherwise be building at: teams shipping real AI products into production. I'm one of those builders, and I've spent five years partnering with customers and client teams to turn ambiguous business goals into scoped, tested, deployed software. Sitting on the Baseten side of that relationship, helping customers go from exploration to production, is exactly the work I want to do.",
        "The core of this role is end-to-end customer delivery: problem framing, evaluation, deployment, and monitoring. That's the arc I already run. At Accenture Federal Services I partner with client teams to translate vague requirements into well-defined specs, then own the resulting services through deployment, incident response, and ongoing reliability. On my own time I've built a series of AI products on model APIs, each live or open-source: a full-stack MCP agent with a streaming UI and an OpenAI-compatible endpoint, a multi-agent orchestration system, a tool-calling operations agent, and a RAG assistant. So I know first-hand what your customers are trying to ship, and where it gets hard.",
        "I care about the evaluation and observability half as much as the build. I stand up Claude-as-judge harnesses that score routing, coverage, and quality, so a service is measured against clear outcomes rather than assumed to work, which is how I'd help customers reason about quality, latency, and cost on Baseten. I work primarily in Python and TypeScript, use Claude Code daily, and favor the simplest thing that solves the problem over unnecessary complexity.",
        "I'll be honest about the boundary: I build on inference rather than having operated model serving at scale, so the infra depth is something I'd ramp into fast, and I'm genuinely excited to. What I bring on day one is velocity, end-to-end ownership, and real empathy for the customer because I am the customer. I'm based in Evergreen, CO and ready to relocate to San Francisco. I'd welcome the chance to talk. Thank you for your consideration.",
      ]}
    />
  );
}
