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
        "I'm a full-stack software engineer with nearly 5 years building Java/Spring Boot services, REST APIs, and web front ends, and 13 years before that in pre-construction, scoping and pricing projects with owners and executives. I'm looking for a team where both halves count: building the system, and understanding the business problem well enough to build the right one.",
        "At Accenture Federal Services I helped move a multi-component Java/Spring Boot application onto Red Hat OpenShift, cut our deployment time from 25 to 15 minutes by parallelizing and caching the GitLab CI/CD pipelines, and act as Scrum Master for a 5-person team. On my own initiative I also built and shipped Flightplan, a release-roadmap and audit tool for a 19-team program, whose 20 rules read GitLab milestones, issues, and merge requests and flag mis-entered data.",
        "Outside work I build agentic AI applications on Claude as personal projects: a Spring Boot service that publishes its tools as an MCP server and runs a streaming agent over them, a finance workflow where a lead agent dispatches to three sub-agents while the portfolio math stays in code, and an HR agent that shows each tool call as it answers. Each is open-source with tests and CI, and when the model is unavailable it gives a labelled rule-based answer rather than passing canned output off as the model's.",
        "Pre-construction taught me the other half. I priced 15 to 20 bids a year from $5M to $85M, won about one in four, and ran a 5-month pre-construction engagement on an $80M+ project from start to finish. That's where I learned to pin down scope, put real numbers behind a decision, and tell executives plainly where the risk is.",
        "I'm based in Evergreen, CO, and open to relocation. I'd welcome the chance to talk about how I can help your team. Thank you for your consideration.",
      ]}
    />
  );
}
