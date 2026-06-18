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
            <p className="text-xs text-gray-500 print:text-gray-500 mt-1">Based in Evergreen, CO · remote / Boulder-area</p>
          </div>

          {/* Summary */}
          <Section title="Summary">
            <p className="text-sm text-gray-300 print:text-gray-700 leading-relaxed">
              Full-stack software engineer who builds production features across the whole stack — JVM/Spring Boot services on the backend, TypeScript and React on the front end. Ships agentic AI applications on Claude in Python and TypeScript: MCP servers (producer and consumer), tool-calling agents, sub-agent orchestration, RAG, and real-time streaming. Modernizes legacy enterprise systems and operates production services on AWS, OpenShift, and Kubernetes, owning them through deployment, incident response, and reliability. Takes pride in well-tested, maintainable code and sound API governance — versioning, backward compatibility, and security on public-facing surfaces.
            </p>
          </Section>

          {/* Core Strengths */}
          <Section title="Core Strengths">
            <ul className="space-y-1.5">
              {[
                "Backend (JVM): Java, Spring Boot, REST APIs, microservices, OpenAI-compatible endpoints, systems integration, SQL",
                "Frontend: TypeScript, React, Next.js, HTML/CSS, Tailwind, data visualization",
                "AI & Agentic: Claude API, tool & function calling, MCP (producer + consumer), agents and sub-agents, real-time streaming (SSE/WebSockets), RAG, evaluation harnesses",
                "Testing & Quality: JUnit, Claude-as-judge evaluations, evaluation harnesses; API governance — versioning, backward compatibility, security standards",
                "Cloud & DevOps: AWS, Kubernetes, OpenShift (OCP), Docker, GitLab CI/CD, HashiCorp Vault, full service-lifecycle ownership and incident response",
                "Delivery: Python, Agile/Scrum, cross-functional collaboration, release planning, $80M+ program leadership",
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
                  "Modernized a legacy federal application by containerizing it and migrating it onto OpenShift/Kubernetes, implementing Java/Spring Boot microservices and owning the services through deployment, incident response, and ongoing reliability work.",
                  "Build and consume REST APIs across a microservice architecture, upholding versioning, backward compatibility, and security standards on public-facing surfaces.",
                  "Enhanced GitLab CI/CD pipelines through parallelization and caching, reducing deployment time by 40% and tightening the loop between a code change and a deployable build.",
                  "Implemented secure secrets management with HashiCorp Vault, strengthening security posture and meeting federal compliance requirements.",
                  "Partner across product, architecture, and client teams to translate ambiguous requirements into well-scoped, tested engineering work.",
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
                title="Pre-Construction Manager"
                company="Commercial & Industrial Electrical Construction"
                period="Jan 2008 – Sep 2021"
                location="Colorado"
                bullets={[
                  "Led pre-construction on $80M+ commercial and industrial programs — owning scope development, estimating, business-case development, procurement strategy, and risk evaluation before mobilization.",
                  "Evaluated effort, risk, and priority across competing workstreams to build delivery roadmaps — the same trade-off calls that drive release planning on an engineering team.",
                  "Coordinated across procurement, engineering, manpower, and scheduling functions, building the cross-functional collaboration muscle that full-stack delivery demands.",
                ]}
              />
            </div>
          </Section>

          {/* AI Work */}
          <Section title="Agentic AI on Claude: Independent Work">
            <ul className="space-y-1.5">
              {[
                "Ship full-stack applications on the Claude API — MCP servers as both producer and consumer (stdio + Streamable HTTP transports), tool-calling agents, sub-agent orchestration, RAG pipelines, and real-time streaming UIs in Python and TypeScript/React. Every project is live and open-source.",
                "Stand up evaluation harnesses — including Claude-as-judge scoring on routing correctness, coverage, and output quality across hand-written cases — to iterate prompts and tool definitions and catch regressions.",
                "Hands-on with agentic coding tools (Claude Code, Cursor) and LLM integration patterns: tool/function calling, OpenAI-compatible endpoints, data streaming, and the Model Context Protocol as a producer and consumer.",
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
