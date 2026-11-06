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
    label: "Rippling: AI Deployment Lead, AI Solutions",
    note: "Founding role reporting to the GM of AI Solutions (G&A focus). San Francisco or New York, 3 days a week in office. US Tier 1 $181.2K to $252K plus equity.",
    resume: "/resume/rippling-ai-deploy",
    cover: "/cover-letter/rippling-ai-deploy",
    posting: "https://ats.rippling.com/rippling/jobs/bc0bf386-e53a-446f-b78a-ab10a79655dc",
  },
  {
    label: "Rippling: Software Engineer II, Backend, HR Product",
    note: "Best level fit. 2+ yrs backend in Python, Go, or similar; relational DB. SF, NYC, or Seattle, 3 days a week. US Tier 1 $152K to $225K.",
    resume: "/resume/rippling-backend",
    cover: "/cover-letter/rippling-hr-backend",
    posting: "https://ats.rippling.com/rippling/jobs/86e4b180-a27e-4b86-bc80-6b7cefa2e1c9",
  },
  {
    label: "Rippling: Senior Software Engineer, Backend, Financial AI Product",
    note: "Senior is a stretch. Evals, retrieval, AI versus deterministic systems. SF, NYC, or Seattle, 3 days a week. US Tier 1 $168K to $280K.",
    resume: "/resume/rippling-backend",
    cover: "/cover-letter/rippling-financial-ai",
    posting: "https://ats.rippling.com/rippling/jobs/5fbd346a-7e22-4434-96d6-c73429b84fea",
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
