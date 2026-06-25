const reasons = [
  {
    number: "01",
    title: "Full-stack ownership, end to end",
    body: "I build the whole feature — JVM/Spring Boot services behind the API and TypeScript/React on the surface. I take pride in well-tested, maintainable code and own services through their full lifecycle: deployment, incident response, root-cause analysis, and ongoing reliability work.",
  },
  {
    number: "02",
    title: "Agentic AI is the work I already do",
    body: "I ship production applications on Claude: MCP servers acting as both producer and consumer, tool-calling and conversational agents, sub-agent orchestration, and real-time streaming. One is an agentic HR operations agent — close to the AI-native HR surface Sol is building. Every project below is live and open-source, not a demo recording.",
  },
  {
    number: "03",
    title: "Data model to pixels, with AI in the loop",
    body: "I want the breadth that runs from schema to UI. I build data-driven interfaces that adapt to the data rather than static layouts, and I use AI coding tools like Claude Code daily as a first-class part of how I ship — real fluency, not an experiment.",
  },
  {
    number: "04",
    title: "JVM depth, ready for Kotlin",
    body: "5+ years of Java/Spring Boot engineering — services, APIs, and data models that hold up in production — plus hands-on understanding of JVM behavior, concurrency, and data-access patterns. I've modernized legacy enterprise systems end-to-end on AWS, OpenShift, and Kubernetes, and I'm ready to ramp fast on Kotlin.",
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
          Building an AI-native enterprise product means full-stack engineering, agentic AI, and
          real ownership in one role — designing the backend and APIs, shipping the interfaces they
          power, and shaping the patterns the product scales on. That intersection — and the
          ambiguity of an early product — is where I operate best.
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
