import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Workday Applied AI Partner Architect) | Graham Anderson",
};

export default function WorkdayAiPartnerCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Workday Hiring Team,"
      paragraphs={[
        "I'm applying for the Applied AI Partner Architect role. Making agentic AI real for the enterprise, with secure, governed architectures built on patterns like MCP and RAG, is the work I've been building toward, and I come to it from inside a Global System Integrator: I'm a software engineer at Accenture Federal Services.",
        "I build agentic systems end to end. I've built MCP servers as both producer and consumer, including an enterprise tool server that a frontier-model agent consumes as a real client, plus a full-stack agent service with a streaming UI. I've also built an agentic HR operations workflow that answers compensation, retention-risk, and PTO questions across employee and policy data, and a multi-agent financial analyst with an evaluation harness that scores every change. Each is live or open-source. They're the same kind of work as this role's pilot builds: a working prototype that closes the gap between an AI roadmap and technical reality.",
        "At Accenture Federal Services I build and integrate enterprise applications: a multi-component Java/Spring Boot application with REST APIs and AngularJS front ends, deployed on Kubernetes and OpenShift in a federal environment where security and compliance shape every design. I've seen firsthand how an SI delivers, and how a bespoke solution becomes something a practice can repeat. Before software, I spent 13 years leading pre-construction on $80M+ programs, presenting business cases and plans to owners and executives.",
        "I haven't yet worked hands-on in the Workday platform itself, and I'd ramp into its data model, security framework, and Agent System of Record quickly, the same way I've picked up every agentic protocol I've built with. I'm based in Evergreen, Colorado, work remotely, and I'm glad to travel to partners and customers. I'd welcome the chance to talk. Thank you for your consideration.",
      ]}
    />
  );
}
