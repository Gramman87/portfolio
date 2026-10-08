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
    label: "Workday: Presales Enterprise Architect (JR-0109846)",
    note: "BEST FIT. USA Remote (CO range $115.5-173.3K). No Workday-experience gate; P3 quals cleared (3+ yrs enterprise sw, presentations, cloud/integration). Angle: pre-construction = presales for buildings + enterprise integration + AI demos. Closes 10/31/2026.",
    resume: "/resume/workday-ea",
    cover: "/cover-letter/workday-ea",
    posting: "https://workday.wd5.myworkdayjobs.com/Workday/job/USANYHome-Office-NY-Metro-Tri-State/Presales---Enterprise-Architect_JR-0109846",
  },
  {
    label: "Workday: Sr. AI Deployment Architect (JR-0107274)",
    note: "STRETCH, CLOSES 10/09/2026. USA Remote, 50% travel. Gaps: enterprise AI delivery is self-directed; no multi-country implementation lead. Gap framed as motivation in cover letter. HR + finance agents map to Workday HCM/Financials.",
    resume: "/resume/workday-ai-deploy",
    cover: "/cover-letter/workday-ai-deploy",
    posting: "https://workday.wd5.myworkdayjobs.com/Workday/job/USA-IL-Chicago/Principal-Functional-Consultant--AI-Practice_JR-0107274",
  },
  {
    label: "Workday: Applied AI Partner Architect (JR-0108918)",
    note: "GATED: basic qual 3+ yrs Workday experience (he has none, stated honestly). Otherwise bullseye: MCP/agentic/RAG, GSI (Accenture), CO Remote, $162-243K, 40% travel.",
    resume: "/resume/workday-ai-partner",
    cover: "/cover-letter/workday-ai-partner",
    posting: "https://workday.wd5.myworkdayjobs.com/Workday/job/USA-CA-Remote/Forward-Deployed-Partner-Architect_JR-0108918",
  },
  {
    label: "Accenture: Applied AI Engineer, Founding Team (R00323002)",
    note: "STRONG FIT. Oracle Business Group AI CoE. Denver listed, CO $73.8-189K. Claude-forward (they want an Anthropic SME). MCP, retrieval, evals, demo agents. Gap: hybrid/vector retrieval (his RAG is TF-IDF), no Oracle. Apply via INTERNAL portal (AFS employee).",
    resume: "/resume/accenture-applied-ai",
    cover: "/cover-letter/accenture-applied-ai",
    posting: "https://accenture.wd103.myworkdayjobs.com/AccentureCareers/job/New-York-One-Manhattan-West-Corp/Applied-AI-Engineer--Founding-Team_R00323002",
  },
  {
    label: "Accenture: AI Led Forward Deployed Engineer, Design & Digital Products (R00350773)",
    note: "STRETCH. Denver listed, CO $63.8-203.1K. Product-led, ship working code. Gaps stated honestly: GenAI is ~2 yrs self-directed (wants 3 yrs shipping), no Bedrock/Vertex/Foundry/Databricks, no fine-tuning or LangChain. Apply via INTERNAL portal.",
    resume: "/resume/accenture-ai-fde",
    cover: "/cover-letter/accenture-ai-fde",
    posting: "https://accenture.wd103.myworkdayjobs.com/AccentureCareers/job/New-York-One-Manhattan-West-Corp/AI-Led-Forward-Deployed-Engineer---Design---Digital-Products_R00350773",
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
