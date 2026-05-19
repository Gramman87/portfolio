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
            <p>Dear Hiring Manager,</p>

            <p>
              The gap between what AI can do and what most enterprise customers are actually
              experiencing is where I want to work — and that&apos;s exactly where a Forward Deployed
              Architect lives. My background combines hands-on AI engineering with over a decade
              of enterprise program leadership, letting me move fluidly between the IDE, the
              architecture whiteboard, and the C-suite briefing room.
            </p>

            <p>
              At Accenture Federal Services, I embed directly with federal client stakeholders to
              modernize legacy enterprise systems — running discovery sessions, translating ambiguous
              requirements into solution architectures, and presenting implementation roadmaps to
              executive sponsors. I&apos;ve enhanced CI/CD pipelines that reduced deployment time by 40%,
              and I serve as the feedback loop between client teams and internal product/architecture
              stakeholders. This is the embedded, customer-facing technical work that forward-deployed
              roles demand.
            </p>

            <p>
              Before software engineering, I owned end-to-end delivery of $80M+ commercial programs.
              I ran discovery workshops, built customer-specific roadmaps and forecast models,
              defended business cases to C-level sponsors, and coordinated across cross-functional
              teams. That experience gave me a rare fluency: I can lead a technical deep-dive in
              the morning and present an AI value narrative to an executive audience in the afternoon
              without losing anything in translation.
            </p>

            <p>
              On the AI side, I actively build with LLMs, RAG pipelines, Model Context Protocol
              (MCP), and agent-to-agent patterns. I stand up evaluation harnesses to measure
              prototype quality and rapidly assemble bespoke, customer-specific demos that show
              tangible business value. These aren&apos;t side projects; they&apos;re the core craft
              I&apos;m bringing to this role.
            </p>

            <p>
              What draws me to forward-deployed work specifically is the speed and the stakes:
              driving AI adoption across enterprise customers who are ready for transformation
              but need someone to bridge the gap between what the platform can do and what their
              business actually needs. That bridge — from discovery to production — is where I
              want to work.
            </p>

            <p>
              I would welcome the opportunity to discuss how my background aligns with what
              you&apos;re building. Thank you for your consideration.
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
