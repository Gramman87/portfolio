import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Index | Graham Anderson",
  robots: { index: false, follow: false },
};

const groups = [
  {
    label: "General",
    note: "Company-agnostic defaults (linked publicly from the homepage).",
    resume: "/resume",
    cover: "/cover-letter",
    posting: null as string | null,
  },
  {
    label: "Sol: Full Stack Engineer",
    note: "JVM/Kotlin-forward, San Mateo relocation, HR-agent led.",
    resume: "/resume/sol",
    cover: "/cover-letter/sol",
    posting: "https://jobs.ashbyhq.com/sol/826c7afe-1c25-4bb7-bdb3-7efd6f7f76b2",
  },
  {
    label: "Anthropic: Senior SWE, Full-stack",
    note: "TypeScript/React + Python + Claude/MCP forward, SF relocation.",
    resume: "/resume/anthropic",
    cover: "/cover-letter/anthropic",
    posting: "https://job-boards.greenhouse.io/anthropic/jobs/5174743008",
  },
  {
    label: "Anthropic: Product Engineer, Computer Use",
    note: "Agent harness / agent runtime / tool-loop framing, SF / NYC / Seattle.",
    resume: "/resume/computer-use",
    cover: "/cover-letter/computer-use",
    posting: "https://job-boards.greenhouse.io/anthropic/jobs/5238637008",
  },
  {
    label: "Anthropic: Applied AI Architect",
    note: "Forward-deployed / pre-sales technical advisor. Eval-framework and enterprise-integration framing, NYC / SF / Seattle, customer travel.",
    resume: "/resume/applied-ai",
    cover: "/cover-letter/applied-ai",
    posting: "https://job-boards.greenhouse.io/anthropic/jobs/4461444008",
  },
];

export default function DocsIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="text-sm font-bold tracking-widest text-white uppercase">GA</a>
          <span className="text-xs text-gray-500">Private docs index</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-black mb-2">Application Documents</h1>
        <p className="text-sm text-gray-500 mb-10">
          Per-target resume and cover-letter variants. This page is unlinked and not indexed; share
          only the specific links you need.
        </p>

        <div className="space-y-4">
          {groups.map((g) => (
            <div
              key={g.label}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
            >
              <h2 className="text-base font-bold text-white">{g.label}</h2>
              <p className="text-sm text-gray-500 mt-1 mb-4">{g.note}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={g.resume}
                  className="text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full transition-colors"
                >
                  Resume
                </a>
                <a
                  href={g.cover}
                  className="text-xs font-semibold border border-white/10 hover:border-white/30 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors"
                >
                  Cover Letter
                </a>
                {g.posting && (
                  <a
                    href={g.posting}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold border border-white/10 hover:border-violet-500/50 text-gray-400 hover:text-white px-4 py-2 rounded-full transition-colors"
                  >
                    Job posting ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
