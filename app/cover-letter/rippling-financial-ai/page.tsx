import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Rippling Senior Software Engineer, Financial AI) | Graham Anderson",
};

export default function RipplingFinancialAiCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Rippling Financial AI Product Team,"
      paragraphs={[
        "I'm applying for the Senior Software Engineer, Backend role on the Financial AI Product team. Your posting asks for judgment about where AI should be used versus deterministic systems, and that's the question I keep running into when I build with models.",
        "In my portfolio analyst, a lead agent dispatches to three specialist sub-agents, but the portfolio math runs in code, because a model shouldn't be trusted with a weighted average. An LLM-as-judge harness scores its memos on test cases, and a separate check lists any figure in a memo that no source supports. In my analytics dashboard, the AI insight cards are validated before the UI renders them, and if the model fails or refuses, the user gets a labelled rule-based answer instead of a broken page.",
        "The deterministic side is familiar from my day job. At Accenture Federal Services I build Java/Spring Boot services and REST APIs, cut our deployment time 40% through CI/CD work, and act as Scrum Master for a 5-person team. On my own initiative I built Flightplan, an audit engine whose 20 rules read a 19-team program's GitLab data and flag what's mis-entered, which is close to the validation and exception handling your team describes.",
        "I'll be direct about the stretch: I have 5+ years as a software engineer, my AI work is self-directed rather than in production, and my production language is Java rather than Python or Go. I'm applying because the problem fits what I've been building toward.",
        "I'm based in Evergreen, Colorado and available on-site in San Francisco Tuesday through Thursday. Thank you for your consideration.",
      ]}
    />
  );
}
