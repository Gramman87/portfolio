import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Workday AI Deployment Architect) | Graham Anderson",
};

export default function WorkdayAiDeployCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Workday Hiring Team,"
      paragraphs={[
        "I'm applying for the Sr. AI Deployment Architect role. Helping customers move from AI concepts to day-to-day workflows that are usable, responsible, and tied to measurable value is the work I've been building toward, and it draws on the two things I've done professionally: leading complex programs and building enterprise software.",
        "I design and build AI-enabled workflows end to end. My HR Operations Agent orchestrates eight tools across employee, department, and policy data to answer compensation, retention-risk, org-chart, and PTO questions in under three seconds, designed around what an HR leader actually asks. My multi-agent financial analyst produces a decision-grade memo for a finance audience, with an evaluation harness that scores every change. Both are live. This AI work has been self-directed rather than delivered to enterprise customers, and taking it into real deployments with Workday's most complex customers is exactly what draws me to this role.",
        "Professionally, I've spent five years as a software engineer in a consulting environment at Accenture Federal Services, translating ambiguous client requirements into scoped, delivered work and partnering with product, architecture, and client teams on data models, security, and integration. Before that, I spent 13 years leading pre-construction on $80M+ programs: running discovery, building the business case, and aligning owners, engineers, procurement, and schedulers around a plan they trusted. It's the same muscle as leading a functional workstream and earning an executive sponsor's confidence.",
        "I'm based in Evergreen, Colorado, work remotely, and I'm comfortable with frequent customer travel. I'd welcome the chance to talk about helping Workday's customers turn AI into results. Thank you for your consideration.",
      ]}
    />
  );
}
