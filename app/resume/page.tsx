import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume | Graham Anderson",
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="border-b border-white/[0.06] px-6 py-4 print:hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-sm font-bold tracking-widest text-white uppercase">GA</a>
          <PrintButton />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 print:py-8 print:px-0">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-10 md:p-14 print:bg-white print:border-0 print:text-black print:rounded-none">

          {/* Header */}
          <div className="mb-8 pb-8 border-b border-white/[0.06] print:border-gray-200">
            <h1 className="text-3xl font-black text-white print:text-black">Graham Anderson</h1>
            <p className="text-sm text-gray-400 print:text-gray-600 mt-2">
              Evergreen, CO &nbsp;·&nbsp;
              <a href="mailto:gramman87@gmail.com" className="hover:text-violet-400 print:text-gray-600">gramman87@gmail.com</a>
              &nbsp;·&nbsp;
              <a href="https://grahamanderson.dev" className="hover:text-violet-400 print:text-gray-600">grahamanderson.dev</a>
              &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/graham-anderson-denver" className="hover:text-violet-400 print:text-gray-600">linkedin.com/in/graham-anderson-denver</a>
            </p>
            <p className="text-xs text-gray-500 print:text-gray-500 mt-1">Based in Colorado (remote) · available for extensive travel to customer sites</p>
          </div>

          {/* Summary */}
          <Section title="Summary">
            <p className="text-sm text-gray-300 print:text-gray-700 leading-relaxed">
              Solutions-focused engineer with a hybrid background in enterprise software delivery and large-scale program leadership. Combines hands-on experience embedding with enterprise clients — running discovery workshops, designing solution architectures, and presenting AI roadmaps to executive sponsors — with 13+ years leading $80M+ programs end-to-end. Builds production-minded agentic proofs-of-concept with LLMs, RAG, MCP, and agent-to-agent patterns, and translates emerging AI capabilities into measurable business outcomes for enterprise customers. Equally comfortable in the deep-dive discovery session, the architecture whiteboard, and the IDE.
            </p>
          </Section>

          {/* Core Strengths */}
          <Section title="Core Strengths">
            <ul className="space-y-1.5">
              {[
                "Customer Discovery & AI Roadmapping: deep-dive discovery workshops, current-state analysis, customer-specific AI roadmaps, architecture diagrams, business cases",
                "Executive Communication: presentations to C-level sponsors, technical reviewers, and end-user audiences; demonstrating solution value and navigating ambiguity across complex enterprise environments",
                "Applied AI & Agentic: LLMs, Agents, RAG, MCP / A2A, prompt engineering, evaluation frameworks, rapid POC development",
                "Enterprise Software & Integration: Java, Spring Boot, TypeScript, Python, REST APIs, microservices, systems integration, SQL, AWS",
                "DevOps & Platform: Kubernetes, Docker, GitLab CI/CD, HashiCorp Vault, Agile/Scrum",
                "Enterprise Transformation & Program Leadership: $80M+ portfolio delivery, forecast modeling, cross-functional coordination, stakeholder management across complex organizations",
              ].map((s) => (
                <li key={s} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
                  <span className="text-violet-400 print:text-gray-400 shrink-0 mt-0.5">·</span>
                  {s}
                </li>
              ))}
            </ul>
          </Section>

          {/* Experience */}
          <Section title="Professional Experience">
            <div className="space-y-8">
              <Job
                title="Software Engineer"
                company="Accenture Federal Services"
                period="Mar 2023 – Present"
                location="Denver, CO"
                bullets={[
                  "Embed directly with federal client stakeholders to modernize legacy enterprise systems, running discovery sessions and translating ambiguous requirements into solution architectures and Java/Spring Boot microservice implementations.",
                  "Lead technical deep-dives and present architecture diagrams, integration patterns, and implementation roadmaps to both technical reviewers and executive sponsors.",
                  "Enhanced GitLab CI/CD pipelines through parallelization and caching, reducing deployment time by 40% — accelerating iteration speed for customer demos and prototypes.",
                  "Implemented secure secrets management with HashiCorp Vault, strengthening security posture and meeting federal compliance requirements.",
                  "Serve as the feedback loop between client teams and internal product/architecture stakeholders, ensuring solutions stay aligned with real operational needs.",
                ]}
              />
              <Job
                title="Software Developer"
                company="Modius"
                period="Mar 2022 – Mar 2023"
                location="San Francisco Bay Area (Remote)"
                bullets={[
                  "Developed Java-based applications with SmartGWT/JavaScript front-ends for deployment on embedded/IoT devices serving enterprise data-center customers.",
                  "Authored and consumed RESTful APIs supporting real-time device communication and integration with adjacent enterprise systems.",
                  "Streamlined deployment workflows by optimizing integration scripts, improving release efficiency and reducing manual handoffs.",
                ]}
              />
              <Job
                title="Java Full Stack Developer"
                company="Skill Distillery"
                period="Oct 2021 – Mar 2022"
                location="Greenwood Village, CO"
                bullets={[
                  "Built full-stack applications in Java, Spring Boot, and JavaScript deployed on AWS with RESTful service architectures.",
                  "Served as Scrum Master and Database Administrator, enforcing Agile cadence, facilitating ceremonies, and driving robust schema design.",
                ]}
              />
              <Job
                title="Senior Project Manager"
                company="Commercial & Industrial Electrical Construction"
                period="Jan 2008 – Sep 2021"
                location="Colorado"
                bullets={[
                  "Owned end-to-end delivery of $80M+ commercial and industrial programs, leading discovery workshops, scoping, business-case development, and executive presentations to C-level sponsors.",
                  "Created customer-specific delivery roadmaps and forecast models that quantified scope, cost, and schedule trade-offs — the same discovery-to-roadmap process that drives enterprise transformation.",
                  "Presented progress, risk, and value narratives to executive leadership on a regular cadence; routinely defended business cases under pressure from diverse stakeholder groups.",
                  "Coordinated across procurement, engineering, manpower, and scheduling functions in complex, cross-functional environments.",
                ]}
              />
            </div>
          </Section>

          {/* AI Work */}
          <Section title="Applied AI & Agentic Solutions: Independent Work">
            <ul className="space-y-1.5">
              {[
                "Build hands-on agentic proofs-of-concept with LLMs, RAG pipelines, Model Context Protocol (MCP) servers, and agent-to-agent (A2A) patterns — the same technologies driving enterprise AI platforms.",
                "Stand up evaluation harnesses to measure prototype quality and iterate agent behavior against customer-style requirements; rapidly assemble bespoke demos that demonstrate tangible AI value.",
                "Track the evolving agentic landscape (multi-agent orchestration, A2A protocols, consumption models, repeatable deployment patterns) and translate emerging capabilities into customer-specific AI roadmaps.",
              ].map((s) => (
                <li key={s} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
                  <span className="text-violet-400 print:text-gray-400 shrink-0 mt-0.5">·</span>
                  {s}
                </li>
              ))}
            </ul>
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <ul className="space-y-1">
              {["Kubernetes: Cloud Native Ecosystem", "Spring Boot 1.0 Essential Training", "Software Architecture Foundations"].map((c) => (
                <li key={c} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
                  <span className="text-violet-400 print:text-gray-400 shrink-0">·</span>{c}
                </li>
              ))}
            </ul>
          </Section>

          {/* Education */}
          <Section title="Education">
            <ul className="space-y-1">
              {[
                "Skill Distillery: Certificate, Java Full Stack Development (2021–2022)",
                "Emily Griffith Technical College: Certificate, Electrical Apprenticeship (2008–2012)",
                "Metropolitan State University of Denver: Computer Science (coursework)",
              ].map((e) => (
                <li key={e} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
                  <span className="text-violet-400 print:text-gray-400 shrink-0">·</span>{e}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </main>

      <style>{`
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xs font-bold tracking-widest text-violet-400 print:text-gray-500 uppercase mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Job({ title, company, period, location, bullets }: {
  title: string; company: string; period: string; location: string; bullets: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <div>
          <span className="text-sm font-bold text-white print:text-black">{title}</span>
          <span className="text-sm text-violet-400 print:text-gray-600">, {company}</span>
        </div>
        <span className="text-xs text-gray-500 print:text-gray-500">{period} · {location}</span>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
            <span className="text-violet-400 print:text-gray-400 shrink-0 mt-0.5">·</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
