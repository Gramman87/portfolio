import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (NVIDIA Senior Software Engineer, Agentic Systems) | Graham Anderson",
  robots: { index: false, follow: false },
};

export default function NvidiaAgenticSystemsCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear NeMo Evaluator Team,"
      paragraphs={[
        "I'm applying for the Senior Software Engineer, Agentic Systems role on NeMo Evaluator, for the Colorado remote location. The question your team answers, whether a change to an agent actually made it better, is the one I keep running into in my own projects, and I'd like to work on it full time.",
        "Each agent I've built has had to prove itself. My portfolio analyst runs a lead agent and three concurrent sub-agents in Python, and its eval harness scores each case on routing, term coverage, and an LLM judge's rubric, then lists any figure in the memo that no briefing supports. Every request returns a structured trace of the thinking, tool calls, results, and token use across all model calls, so a bad answer can be traced to the step that caused it. In my RAG agent, a retrieval eval showed keyword search found the right passage first for every direct question but only 13% of paraphrased ones, which is why I added vector search instead of assuming it would help.",
        "At Accenture Federal Services I build Java/Spring Boot services and REST APIs, helped move a multi-component application onto Red Hat OpenShift, and cut our deployment time from 25 to 15 minutes by parallelizing and caching the GitLab CI/CD pipelines. On my own initiative I also built and shipped Flightplan for a 19-team program: its 20 rules read GitLab milestones, issues, and merge requests and flag mis-entered data, each finding linking back to the record that needs fixing.",
        "To be direct about the gaps: I have nearly 5 years as a professional engineer rather than 5+, my production work is in Java, and my Python and agent work are personal projects rather than production systems or a published SDK. What I'd bring is the habit of measuring before claiming, and 13 years in pre-construction before software, where every estimate had to stand up to an owner's questions.",
        "I'm based in Evergreen, Colorado. I'd welcome the chance to talk. Thank you for your consideration.",
      ]}
    />
  );
}
