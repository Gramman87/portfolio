const reasons = [
  {
    number: "01",
    title: "Full-stack ownership, end to end",
    body: "I build the whole feature — JVM/Spring Boot services behind the API and TypeScript/React on the surface. I take pride in well-tested, maintainable code and own services through their full lifecycle: deployment, incident response, root-cause analysis, and ongoing reliability work.",
  },
  {
    number: "02",
    title: "Agentic AI is the work I already do",
    body: "I ship production applications on Claude: MCP servers acting as both producer and consumer, tool- and function-calling agents, sub-agent orchestration, and real-time streaming. The agentic developer tooling this team builds is the exact craft I practice — every project below is live and open-source, not a demo recording.",
  },
  {
    number: "03",
    title: "Tested and maintainable, not vibes",
    body: "Production LLM work isn't guesswork. I stand up evaluation harnesses — including Claude-as-judge scoring on routing, coverage, and quality — alongside conventional tests, and uphold API governance: versioning, backward compatibility, and security standards on public-facing surfaces.",
  },
  {
    number: "04",
    title: "JVM depth meets cloud-native operations",
    body: "5+ years of Java and Spring Boot engineering plus hands-on operation of production services on AWS, OpenShift, and Kubernetes. I've modernized legacy enterprise systems end-to-end and cut deployment time 40% with parallelized, cached CI/CD.",
  },
];

export default function WhyFDE() {
  return (
    <section id="why-me" className="py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
          Why Me
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Built for this
          <br />
          <span className="text-gray-500">kind of work.</span>
        </h2>
        <p className="text-gray-500 max-w-xl mb-16">
          Building developer-facing AI tooling means full-stack engineering, agentic AI, and
          production service ownership in one role — designing the backend, shipping the React
          surface, and keeping it reliable for the developers who depend on it. That intersection
          is where I operate best.
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
