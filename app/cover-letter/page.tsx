import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Cover Letter — Graham Anderson",
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
              I am writing to express my strong interest in joining your team as a Forward Deployed
              Engineer. My background combines hands-on enterprise software engineering with over a
              decade of large-scale program leadership — a combination that lets me move fluidly
              between the IDE, the architecture whiteboard, and the executive briefing room.
            </p>

            <p>
              At Accenture Federal Services, I partner directly with federal clients to modernize
              legacy systems, translating ambiguous business requirements into Java/Spring Boot
              microservice architectures and integrating them into existing enterprise infrastructure.
              I've enhanced CI/CD pipelines that reduced deployment time by 40%, implemented
              production-grade secrets management with HashiCorp Vault, and served as the feedback
              loop between client teams and internal engineering stakeholders — exactly the kind of
              embedded, customer-facing engineering work that defines the FDE role.
            </p>

            <p>
              Before pivoting into software engineering, I owned end-to-end delivery of $80M+
              commercial and industrial programs. I built customer roadmaps, defended business cases
              to C-level sponsors, and coordinated across procurement, engineering, and field
              operations. That experience gave me a rare fluency: I can hold a deeply technical
              conversation in the morning and present a value narrative to an executive audience in
              the afternoon without losing anything in translation.
            </p>

            <p>
              On the AI side, I actively build production-minded proofs-of-concept with LLM APIs,
              RAG pipelines, and the Model Context Protocol (MCP). I stand up evaluation harnesses
              to measure prototype quality, and I track the evolving agentic landscape — multi-agent
              orchestration, agent-to-agent protocols, repeatable deployment patterns — so I can
              rapidly assemble bespoke, customer-specific demos that show tangible business value.
              These aren&apos;t side projects; they&apos;re the core craft I&apos;m bringing to this role.
            </p>

            <p>
              What draws me to forward-deployed work specifically is the speed and the stakes.
              The best FDEs don&apos;t just build features — they compress the distance between a
              customer&apos;s problem and a working solution. I&apos;ve spent my career getting comfortable
              in that gap, and I&apos;m ready to bring that energy to your team and your customers.
            </p>

            <p>
              I would welcome the opportunity to discuss how my background aligns with what you're
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
