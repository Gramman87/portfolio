import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Rippling Software Engineer II, HR Product) | Graham Anderson",
};

export default function RipplingHrBackendCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Rippling HR Product Engineering Team,"
      paragraphs={[
        "I'm applying for the Software Engineer II, Backend role on HR Product. HR data is where correctness matters most: a wrong effective date or a missed dependency becomes someone's paycheck or benefits. I like backend work where the data model has to be right, and HRIS, Time, Benefits, and Talent are full of it.",
        "I have 5+ years of backend engineering at Accenture Federal Services and Modius, building Java/Spring Boot services and REST APIs with attention to versioning and backward compatibility. At Accenture I helped move a multi-component application onto Red Hat OpenShift, cut our deployment time 40% by reworking the GitLab CI/CD pipelines, and act as Scrum Master for a 5-person team. On my own initiative I also built and shipped Flightplan, a release-roadmap and audit tool for a 19-team program, whose 20 rules read GitLab milestones, issues, and merge requests and flag mis-entered data.",
        "I've worked with HR data directly, too. My HR Operations Agent models a fictional company's employees, departments, PTO, and policies behind eight tools for compensation, retention risk, org charts, and PTO, with tests that check each tool's numbers against the data.",
        "To be straightforward: my production backend work is in Java, and my Python is from personal projects rather than production, so I'd be moving into your stack rather than arriving fluent in it. I learn fast, as the move from 13 years in pre-construction into software shows.",
        "I'm based in Evergreen, Colorado and available on-site in San Francisco Tuesday through Thursday. I'd welcome the chance to talk. Thank you for your consideration.",
      ]}
    />
  );
}
