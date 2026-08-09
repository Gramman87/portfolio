import type { Metadata } from "next";
import ResumeDoc from "@/components/ResumeDoc";

export const metadata: Metadata = {
  title: "Resume (Amazon SDE II) | Graham Anderson",
};

export default function AmazonResume() {
  return (
    <ResumeDoc
      aiSectionTitle="Independent Engineering Projects"
      locationLine="Based in Evergreen, CO, in the Denver metro and local to AWS Denver roles"
      summary="Backend software engineer with 5+ years building and operating production JVM services in the cloud. Modernizes enterprise systems end to end: Java/Spring Boot microservices and REST APIs on AWS, OpenShift, and Kubernetes, owned through deployment, on-call, incident response, and ongoing reliability. Drives measurable results, including cutting deployment time 40% with parallelized, cached CI/CD, and digs into root causes rather than symptoms. Brings genuine end-to-end ownership and cross-functional delivery, sharpened by 13+ years leading $80M+ programs and mentoring teams, plus self-directed depth in agentic AI. Comfortable owning ambiguous features from design through operations at scale."
      strengths={[
        "Languages & Backend: Java, Spring Boot, Python, REST APIs, microservices, distributed systems, SQL, systems integration",
        "AWS & Cloud: AWS, Kubernetes, OpenShift (OCP), Docker, containerization, infrastructure automation, CI/CD",
        "Operational Excellence: deployment, on-call, incident response, root-cause analysis, monitoring, reliability, secure secrets management (HashiCorp Vault)",
        "Ownership & Delivery: end-to-end feature ownership, ambiguous-to-scoped requirements, code review, API governance (versioning, backward compatibility, security), mentoring",
        "Testing & Quality: JUnit, automated testing, evaluation harnesses, coding standards, source control",
        "Leadership: cross-functional delivery, release planning, $80M+ program leadership, Agile/Scrum (Scrum Master)",
      ]}
      aiWork={[
        "Self-directed, production-shaped engineering: a series of full-stack applications built on my own initiative, each live or open-source, designed to be tested, observable, and maintainable rather than demos.",
        "Spring Boot MCP Agent (github.com/Gramman87/spring-mcp-agent): a full-stack Java 21 / Spring Boot service exposing tools over an API surface and running a streaming agent that consumes them, fronted by a React/TypeScript UI, with an OpenAI-compatible endpoint and a JUnit suite covering tools, registry, agent logic, and controllers.",
        "Additional projects in Python and TypeScript/React on the Claude API: a multi-agent orchestration system with a Claude-as-judge evaluation harness, a tool-calling operations agent, and a retrieval-augmented knowledge assistant. All live and open-source.",
        "Demonstrates Learn and Be Curious: I pick up new domains and tools independently, build real systems with them, and hold the work to production standards.",
      ]}
    />
  );
}
