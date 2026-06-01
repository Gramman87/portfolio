const reasons = [
  {
    number: "01",
    title: "Production apps on Claude, not slideware",
    body: "I've shipped MCP servers, sub-agents, and agent skills against the Claude API — tool-calling agents orchestrating real workflows, MCP servers over stdio and Streamable HTTP, RAG pipelines with real retrieval scoring. Every project below is live and open-source, not a demo recording.",
  },
  {
    number: "02",
    title: "Discovery to deployment is my native workflow",
    body: "13 years of program leadership running discovery sessions, scoping requirements, and presenting business cases to C-level sponsors — now applied to AI. I deep-dive with a customer, map their pain points to Claude-shaped solutions, and ship the application that proves it. The repeatable deployment patterns become artifacts other FDEs can reuse.",
  },
  {
    number: "03",
    title: "Evaluations are how I iterate",
    body: "Production LLM work isn't vibes-based. I stand up evaluation harnesses to measure agent quality against customer-style requirements, iterate prompts and tool definitions against the eval set, and use the same harnesses to catch regressions before they hit a customer demo.",
  },
  {
    number: "04",
    title: "Enterprise transformation is familiar ground",
    body: "Whether it's modernizing federal legacy systems at Accenture or leading $80M+ delivery, I've spent my career embedded with customers navigating complex transformations. The cross-functional coordination, stakeholder management, and executive presence that customer-facing AI deployment demands are things I've been doing for years.",
  },
];

export default function WhyFDE() {
  return (
    <section id="why-applied-ai" className="py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
          Why Applied AI
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Why forward-deployed,
          <br />
          <span className="text-gray-500">specifically.</span>
        </h2>
        <p className="text-gray-500 max-w-xl mb-16">
          Forward-deployed work on Claude means running the discovery, shipping the production
          application, and documenting the repeatable deployment pattern — all while the customer
          relationship is still hot. That intersection is where I operate best.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-violet-500/20 transition-colors"
            >
              <p className="text-4xl font-black text-white/[0.06] mb-4">{r.number}</p>
              <h3 className="text-base font-bold text-white mb-3">{r.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
