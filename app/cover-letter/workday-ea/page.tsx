import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Workday Presales EA) | Graham Anderson",
};

export default function WorkdayEaCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Workday Hiring Team,"
      paragraphs={[
        "I'm applying for the Presales Enterprise Architect role on Workday's North America Presales team. I've done presales before, just not for software. For 13 years I led pre-construction on $80M+ commercial and industrial programs, which meant understanding what an owner actually needed, mapping the systems and dependencies involved, building the business case, and presenting a solution strategy to executives before a single crew mobilized. For the last five years I've been a software engineer building and integrating enterprise applications. This role is where those two careers meet.",
        "On the technical side, I bring hands-on enterprise architecture experience. At Accenture Federal Services I modernized a legacy federal application: containerizing it, implementing Java/Spring Boot microservices, building and consuming REST APIs, building front-end features in AngularJS, and deploying it onto OpenShift and Kubernetes. I work daily with integration points, security standards (secrets management with HashiCorp Vault, API governance across versioning and backward compatibility), and the dependencies that make or break an enterprise solution, and I partner with product, architecture, and client teams to turn ambiguous requirements into scoped plans.",
        "I also build AI agents, which matters for where presales is heading. On my own time I've built an agentic HR operations workflow that handles compensation analysis, retention risk, and PTO tracking, a multi-agent financial analyst backed by an evaluation harness, and an MCP-based reference architecture for exposing enterprise systems to AI. Each is live or open-source. That gives me a practical, credible way to design tailored AI demos and proofs of concept that show a prospect what Workday's AI can do for their business.",
        "I'm based in Evergreen, Colorado, work remotely, and I'm glad to travel to customers. I'd welcome the chance to talk about bringing Workday's value to life for your prospects. Thank you for your consideration.",
      ]}
    />
  );
}
