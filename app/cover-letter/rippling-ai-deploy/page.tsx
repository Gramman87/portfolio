import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Rippling AI Deployment Lead) | Graham Anderson",
};

export default function RipplingAiDeployCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Rippling AI Solutions Team,"
      paragraphs={[
        "I'm applying for the AI Deployment Lead role. Rippling already holds HR, payroll, and finance data in one system, so an agent built on it can act across those workflows instead of just answering questions. Turning that into measured results for a customer's G&A teams is the job I want.",
        "Most of my career has been the front half of this role. For 13 years in pre-construction, every engagement started with owners and executives: how the work gets done today, what to change, and a business case with real numbers. I priced 15 to 20 bids a year from $5M to $85M, won about one in four, and trained junior estimators, superintendents, and new project managers. For the last 5+ years I've been a software engineer at Accenture Federal Services and Modius, where I act as Scrum Master for a 5-person team, report progress and risks to leadership, and cut our deployment time 40%.",
        "I also build the kind of workflows you'd deploy. My HR Operations Agent answers compensation, retention-risk, PTO, and policy questions over a fictional company's HR data, showing each tool call so a reviewer can check its work. My portfolio analyst keeps the arithmetic in code rather than in the model and scores its memos against test cases with an LLM-as-judge harness. They taught me what you ask a Deployment Lead to pressure-test: where AI belongs versus deterministic logic, edge cases, and what happens when the model is unavailable.",
        "I'll be straightforward about the gaps: I haven't held a product manager or consultant title, my AI work is self-directed rather than delivered to paying customers, and I haven't worked inside Rippling's products. What I bring is the habit of tying every build to a business case, enough hands-on AI to work credibly with FDEs and customers, and experience keeping complex programs moving.",
        "I'm based in Evergreen, Colorado, available on-site in San Francisco Tuesday through Thursday, and open to travel for customer work. I'd welcome the chance to talk. Thank you for your consideration.",
      ]}
    />
  );
}
