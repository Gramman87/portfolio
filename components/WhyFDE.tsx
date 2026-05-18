const reasons = [
  {
    number: "01",
    title: "I've lived on both sides of the table",
    body: "Thirteen years owning $80M+ programs gave me something most engineers don't have: deep fluency with how customers think, make decisions, and measure success. I know what a C-level sponsor needs to hear, and I know how to get there technically.",
  },
  {
    number: "02",
    title: "I'm built for ambiguity and speed",
    body: "The best FDE work happens in the gap between a customer's half-formed problem and a working solution. I've spent my career in that gap, running complex programs with incomplete information, then pivoting to software engineering where I do the same thing in code.",
  },
  {
    number: "03",
    title: "AI is where I'm placing my bets",
    body: "I'm not waiting for AI to mature before I engage with it. I build RAG pipelines, MCP servers, and agentic prototypes now, standing up eval harnesses to measure quality and tracking the landscape so I can translate what's possible into what's valuable for a specific customer.",
  },
  {
    number: "04",
    title: "I close the loop",
    body: "A lot of engineers hand off to sales or customer success. I don't want to. The feedback loop between what customers need and what gets built is where leverage lives, and it's the thing I find most energizing about the FDE role.",
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
          Why this role,
          <br />
          <span className="text-gray-500">specifically.</span>
        </h2>
        <p className="text-gray-500 max-w-xl mb-16">
          A lot of people can write code. Fewer can embed with a customer, understand their actual problem,
          and ship something that changes how they work, all on a short timeline.
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
