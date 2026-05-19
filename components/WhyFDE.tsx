const reasons = [
  {
    number: "01",
    title: "Discovery to demo is my native workflow",
    body: "I've run hundreds of discovery sessions across 13 years of program leadership — scoping requirements, building roadmaps, and presenting business cases to C-level sponsors. Now I do the same thing with AI: deep-dive with a customer, map their pain points, and build a POC that shows measurable value.",
  },
  {
    number: "02",
    title: "I build what I present",
    body: "I don't hand off between the whiteboard and the IDE. I build production-minded agentic solutions — RAG pipelines, MCP servers, agent workflows — and then present them to executive audiences. That end-to-end ownership compresses the distance between a customer's problem and a working solution.",
  },
  {
    number: "03",
    title: "5 agentic systems built and shipped",
    body: "I don't just follow the AI landscape — I build in it. I've shipped agentic workflows with Claude tool-calling, MCP servers with 6+ enterprise tools, RAG pipelines with real retrieval scoring, and executive dashboards with LLM integration. Each project is live, demoed, and open-source.",
  },
  {
    number: "04",
    title: "Enterprise transformation is familiar ground",
    body: "Whether it was modernizing federal legacy systems at Accenture or leading $80M+ program delivery, I've spent my career embedded with customers navigating complex transformations. The cross-functional coordination, stakeholder management, and executive presence that enterprise AI adoption requires are things I've been doing for years.",
  },
];

export default function WhyFDE() {
  return (
    <section id="why-fde" className="py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
          Why FDE
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Why forward-deployed,
          <br />
          <span className="text-gray-500">specifically.</span>
        </h2>
        <p className="text-gray-500 max-w-xl mb-16">
          Driving enterprise AI adoption requires someone who can run the discovery workshop, build the
          agentic POC, and present the value narrative to leadership — all on a compressed timeline.
          That intersection is where I operate best.
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
