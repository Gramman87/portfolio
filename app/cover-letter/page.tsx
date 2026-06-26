import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Cover Letter | Graham Anderson",
};

export default function CoverLetter() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav bar */}
      <header className="border-b border-white/[0.06] px-6 py-4 print:hidden">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="text-sm font-bold tracking-widest text-white uppercase">GA</a>
          <PrintButton />
        </div>
      </header>

      {/* Letter */}
      <main className="max-w-3xl mx-auto px-6 py-16 print:py-8 print:px-0">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-10 md:p-14 print:bg-white print:border-0 print:text-black print:rounded-none">

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-white/[0.06] print:border-gray-200">
            <h1 className="text-2xl font-black text-white print:text-black">Graham Anderson</h1>
            <p className="text-sm text-gray-400 print:text-gray-600 mt-1">
              Evergreen, CO &nbsp;·&nbsp;
              <a href="mailto:gramman87@gmail.com" className="hover:text-violet-400 print:text-gray-600">gramman87@gmail.com</a>
              &nbsp;·&nbsp;
              <a href="https://grahamanderson.dev" className="hover:text-violet-400 print:text-gray-600">grahamanderson.dev</a>
              &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/graham-anderson-denver" className="hover:text-violet-400 print:text-gray-600">linkedin.com/in/graham-anderson-denver</a>
            </p>
          </div>

          {/* Body */}
          <div className="space-y-6 text-gray-300 print:text-gray-800 leading-relaxed text-sm md:text-base">
            <p>Dear Sol Hiring Team,</p>

            <p>
              I&apos;m applying for the Full Stack Engineer role. An AI-native system that replaces
              the HRIS — built for change, reimagined with AI from the ground up — is exactly the
              kind of product I want to build, and the surface you describe (data model to UI,
              backend services and APIs through the interfaces customers actually use) is how I
              already work. I build JVM/Spring Boot services behind TypeScript and React front-ends,
              and I ship agentic applications on Claude as my core craft. One of them is an agentic
              HR operations agent — so I&apos;m coming to Sol&apos;s domain with something already
              built in it.
            </p>

            <p>
              On backend, I have 5+ years of JVM engineering at Accenture Federal Services:
              modernizing a legacy Java/Spring Boot application end-to-end — containerizing it,
              migrating it onto OpenShift and Kubernetes, and building and consuming REST APIs
              across a microservice architecture that I own through deployment, incident response,
              and reliability work. That work has taken me below the surface — JVM behavior,
              concurrency, and the data-access patterns where performance actually goes to die — and
              I design APIs and data models for composition, not one-off use. Kotlin is the one
              piece of your stack I haven&apos;t shipped in production; on the JVM I expect to ramp
              fast, and I&apos;d rather say that plainly than oversell it.
            </p>

            <p>
              I&apos;m equally comfortable crossing into the frontend — I ship UI, not just hand off
              an API. My HR Operations Agent is the closest analog to Sol: an agentic Claude workflow
              with real tool-calling that handles compensation analysis, retention risk scoring,
              org-chart traversal, and PTO tracking across 30+ employees in under three seconds per
              query, behind a data-driven interface that adapts to the underlying employee data
              rather than a static layout. Around it I&apos;ve built a full-stack Spring Boot MCP
              agent with a streaming React UI, MCP servers on both the producer and consumer sides,
              a sub-agent system backed by a Claude-as-judge eval harness, and a RAG knowledge agent
              — each live or open-source. AI coding tools like Claude Code are a first-class part of
              how I build, daily, not an experiment.
            </p>

            <p>
              I&apos;m scrappy and want the ownership and breadth an early team brings — the chance
              to set patterns thousands of enterprise users will eventually live in. That kind of
              work happens in the room, and I&apos;m ready to relocate to San Mateo to be there in
              person with the founding team. I&apos;d welcome the chance to talk about what Sol is
              building. Thank you for your consideration.
            </p>

            <p>Sincerely,</p>
            <p className="font-semibold text-white print:text-black">Graham Anderson</p>
          </div>
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
