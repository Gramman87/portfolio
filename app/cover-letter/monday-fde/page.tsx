import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (monday.com FDE) | Graham Anderson",
};

export default function MondayFdeCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear monday.com Hiring Team,"
      paragraphs={[
        "I'm applying for the Forward Deployed Engineer, Strategic Deployments role in Denver. Your posting puts it plainly: enterprises don't struggle to access AI capability, they struggle to deploy it. Closing that gap, by architecting agent solutions, wiring them into the systems where a customer's data already lives, and proving they deliver, is the work I've been building toward.",
        "The core of the role maps closely to what I've built. I've built MCP servers as both producer and consumer, including an enterprise MCP server that exposes customer, ticket, knowledge-base, and metrics data to a Claude agent that discovers and calls its tools at runtime. That's the same pattern as wiring MCP integrations into a customer's systems. I build evals the way you describe them: my multi-agent analyst runs an LLM-as-judge harness that scores routing, coverage, and quality on every change, with telemetry surfaced in the UI, so every claim about the system has data behind it. I build full stack in TypeScript, React, Next.js, and Python with Claude Code in daily use, and every project is live or open-source. I'll be straightforward that my deepest TypeScript and React work is in those projects; professionally my front-end work has been AngularJS alongside Java/Spring Boot, so I'd be leaning into a stack I already build in rather than learning a new one.",
        "Outcome ownership is the part of this role I'm most comfortable with. For 13 years in pre-construction, every engagement began by agreeing on scope and the business case with owners and executives before anything was built, across 15 to 20 bids a year ranging from $5M to $85M, winning about one in four. At Accenture Federal Services I deliver enterprise software for federal clients, helped move a multi-component application onto Red Hat OpenShift to shorten release cycles, cut our deployment time 40%, and act as Scrum Master for a 5-person team, reporting progress and risks to leadership.",
        "I'm based in Evergreen, Colorado, an easy commute to the Denver office for the three in-office days. I'd welcome the chance to talk about deploying AI for your most strategic customers. Thank you for your consideration.",
      ]}
    />
  );
}
