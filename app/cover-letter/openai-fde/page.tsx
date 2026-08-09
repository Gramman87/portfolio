import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (OpenAI FDE) | Graham Anderson",
};

export default function OpenAiFdeCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear OpenAI Hiring Team,"
      paragraphs={[
        "I'm applying for the Forward Deployed Software Engineer role in San Francisco. Turning research breakthroughs into production systems by building custom software on your APIs, side by side with a customer's engineers, is the work I most want to do. I build full-stack applications on LLM APIs, I've spent years partnering with customers and client teams to turn ambiguous goals into shipped software, and I design for portability across model providers rather than locking to one.",
        "The heart of this role is embedding with customers and coding to production alongside them. That's the arc I run. At Accenture Federal Services I work hands-on with client technical teams, translate fuzzy requirements into scoped work, and own what I build through deployment, incident response, and reliability. On my own initiative I've shipped a series of LLM applications end to end, each live or open-source: a full-stack agent service that exposes an OpenAI-compatible /v1/chat/completions endpoint and streams tool calls and tokens to a React UI, a multi-agent orchestration system with an LLM-as-judge evaluation harness, a tool-calling operations agent, and a retrieval-augmented assistant. I build across the stack with TypeScript, React, Python, and SQL over Postgres and MySQL.",
        "I bring a bias for action and an experiment-driven style: scope a POC, put it in front of the customer, iterate to the solution that actually solves their problem. My model-agnostic architecture (an isolated model seam and OpenAI-compatible surfaces) means I plug into whatever API best fits the job. And I build products from scratch, which is exactly what shipping custom customer solutions demands. Behind all of it are 13+ years of professional delivery, including $80M+ program leadership, so I bring the stakeholder judgment and ownership that trusted-advisor work requires.",
        "I'm based in Evergreen, CO and ready to relocate to San Francisco for the hybrid schedule, and I'm glad to travel to customer sites. I'd welcome the chance to talk about turning OpenAI's capabilities into production wins for your customers. Thank you for your consideration.",
      ]}
    />
  );
}
