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
              Solutions-focused engineer with a hybrid background in enterprise software delivery and large-scale program leadership. Combines hands-on experience designing and integrating Java/Spring and TypeScript systems for federal and enterprise clients with 13+ years leading $80M+ commercial programs end-to-end: owning discovery, scoping, executive presentations, business cases, and customer-facing delivery. Builds production-minded proofs-of-concept with LLM APIs, RAG, and the Model Context Protocol (MCP), and translates emerging agentic capabilities into measurable business outcomes. Equally comfortable embedded with a customer, in the architecture whiteboard session, and in the IDE.
            </p>
          </Section>

          {/* Core Strengths */}
          <Section title="Core Strengths">
            <ul className="space-y-1.5">
              {[
                "Customer Discovery & Solution Design: requirements workshops, current-state analysis, architecture diagrams, technology roadmaps, business cases",
                "Customer-Facing Communication: executive presentations to C-level sponsors, technical reviewers, and end-user audiences; navigating ambiguity across complex, cross-organizational environments",
                "Applied AI & Agentic: production LLM patterns (prompt engineering, agent development, evaluation frameworks, RAG, MCP servers, sub-agents, and agent skills)",
                "Enterprise Software Delivery: Java, Spring Boot, TypeScript, JavaScript, REST APIs, microservices, systems integration, SQL, AWS; Python for AI prototyping",
                "DevOps & Platform: Kubernetes, Docker, GitLab CI/CD, HashiCorp Vault, Agile/Scrum",
                "Program Leadership: $80M+ portfolio ownership, forecasting, budgeting, procurement, scheduling, cross-functional stakeholder management",
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
                  "Partnered directly with federal client stakeholders to modernize legacy enterprise systems, translating ambiguous business requirements into Java/Spring Boot microservice architectures and integration patterns.",
                  "Designed and built scalable RESTful microservices, increasing system maintainability and enabling integration with existing client infrastructure.",
                  "Enhanced GitLab CI/CD pipelines through parallelization and caching, reducing deployment time by 40% and accelerating iteration speed for client demos and prototypes.",
                  "Implemented secure secrets management with HashiCorp Vault, strengthening security posture and meeting federal compliance requirements.",
                  "Acted as the feedback loop between client teams and internal product/architecture stakeholders to keep solutions aligned with real-world operational needs.",
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
                  "Owned end-to-end delivery of $80M+ commercial and industrial programs, leading discovery, scoping, business-case development, executive presentations, and stakeholder management.",
                  "Built customer-specific delivery roadmaps and forecast models that quantified scope, cost, and schedule trade-offs for C-level sponsors.",
                  "Presented progress, risk, and value narratives to executive leadership on a regular cadence; routinely defended business cases under pressure.",
                  "Coordinated across procurement, engineering, manpower, and scheduling functions in complex, cross-functional environments.",
                ]}
              />
            </div>
          </Section>

          {/* AI Work */}
          <Section title="Applied AI & Agentic Solutions: Independent Work">
            <ul className="space-y-1.5">
              {[
                "Build hands-on proofs-of-concept with LLM APIs and agent frameworks: RAG pipelines, tool/function calling, and Model Context Protocol (MCP) servers, sub-agents, and agent skills.",
                "Stand up lightweight evaluation harnesses to measure prototype quality and iterate prompts and agent behavior against customer-style requirements.",
                "Track the evolving agentic landscape (agent-to-agent protocols, multi-agent orchestration, repeatable deployment patterns) and rapidly assemble bespoke, customer-specific demos that demonstrate tangible AI value.",
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
