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
            <p>Dear Workday Hiring Team,</p>

            <p>
              I&apos;m applying for the Software Development Engineer role on the Developer Agent
              team. Building intelligent, context-aware tooling that helps thousands of developers
              work the way they want — powered by AI agents that assist with coding, automation,
              and application workflows — is exactly the intersection I want to work at: full-stack
              engineering, agentic AI, and production service ownership in one role. I build
              JVM/Spring Boot services behind TypeScript and React front-ends, and I ship agentic
              applications on Claude as my core craft.
            </p>

            <p>
              At Accenture Federal Services I modernize legacy enterprise systems end-to-end —
              containerizing a Java/Spring Boot application and migrating it onto OpenShift and
              Kubernetes, building and consuming REST APIs across a microservice architecture, and
              owning those services through deployment, incident response, and reliability work. I
              re-architected our GitLab CI/CD pipelines with parallelization and caching to cut
              deployment time by 40%, and I uphold API governance — versioning, backward
              compatibility, and security on public-facing surfaces. It&apos;s 5+ years of JVM
              backend work paired with TypeScript/React on the front end and hands-on cloud-native
              operations.
            </p>

            <p>
              On the AI side, I actively build full-stack applications on the Claude API in Python
              and TypeScript. One is an MCP server exposing six tools over stdio and Streamable
              HTTP, with a Claude agent that consumes the protocol as a real client — so I&apos;ve
              worked the Model Context Protocol from both the producer and consumer sides. Others: a
              Python sub-agent system where a lead orchestrator dispatches to three specialists via
              tool-use, backed by a Claude-as-judge eval harness scoring routing, coverage, and
              quality; a tool-calling operations agent; a RAG knowledge agent with real retrieval
              scoring; and a Next.js dashboard with token-by-token Claude streaming. Each is live,
              open-source, and backed by evaluation harnesses and tests — the same tool/function
              calling, streaming, and OpenAI-compatible patterns this role calls for.
            </p>

            <p>
              I&apos;m based in Evergreen, CO, set up for remote and Boulder-area work, and I use
              agentic coding tools like Claude Code daily — so I bring a builder&apos;s perspective
              on what makes developer-facing AI tooling actually good to use. I&apos;d welcome the
              chance to discuss how my background maps onto what the Developer Agent team is
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
