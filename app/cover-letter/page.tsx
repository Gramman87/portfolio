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
            <p>Dear Anthropic Hiring Team,</p>

            <p>
              I&apos;m applying for the Forward Deployed Engineer, Applied AI role. The gap between
              what Claude can do and what most enterprise customers are actually experiencing is
              where I want to work — building MCP servers, sub-agents, and agent skills inside
              customer systems, then turning each deployment into a repeatable pattern the next FDE
              can lean on. My background combines hands-on engineering on Claude with over a decade
              of enterprise program leadership, so I can move fluidly between the IDE, the
              architecture whiteboard, and the C-suite briefing room.
            </p>

            <p>
              At Accenture Federal Services I embed directly with federal client stakeholders to
              modernize legacy enterprise systems — running discovery, translating ambiguous
              requirements into solution architectures, presenting implementation roadmaps to
              executive sponsors, and shipping the Java/Spring Boot services that back them.
              Before software engineering, I owned end-to-end delivery of $80M+ commercial
              programs: discovery workshops, customer-specific roadmaps, business cases defended to
              C-level sponsors, cross-functional coordination across complex organizations. The
              high-agency, customer-facing work the FDE role describes is the work I&apos;ve been
              doing for years.
            </p>

            <p>
              On the AI side, I actively build production applications on the Claude API in Python
              and TypeScript: a tool-calling HR operations agent, an MCP server exposing six
              enterprise tools over stdio and Streamable HTTP, a RAG knowledge agent with real
              retrieval scoring, and a customer-facing analytics dashboard with streaming Claude
              integration. Each is live, open-source, and backed by evaluation harnesses I use to
              iterate prompts and tool definitions against customer-style requirements. These
              aren&apos;t side projects — they&apos;re the core craft I&apos;m bringing to this role.
            </p>

            <p>
              What draws me specifically to Anthropic is the mission. Working safely toward
              beneficial AI isn&apos;t a tagline I want to attach to my resume; it&apos;s the reason
              I&apos;d rather build production Claude deployments at the source than ship generic
              integrations elsewhere. I&apos;d welcome the chance to discuss how my background maps
              onto what the Applied AI team is building. Thank you for your consideration.
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
