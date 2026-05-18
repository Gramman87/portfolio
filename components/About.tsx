export default function About() {
  const stats = [
    { value: "$80M+", label: "Programs delivered" },
    { value: "40%", label: "Faster CI/CD deployments" },
    { value: "13+", label: "Years leading delivery" },
    { value: "3", label: "AI prototypes shipped" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Equally comfortable
              <br />
              <span className="text-gray-500">in the whiteboard</span>
              <br />
              and the IDE.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a solutions-focused engineer with a hybrid background in enterprise software
                delivery and large-scale program leadership. At Accenture Federal Services I design
                and integrate Java/Spring and TypeScript systems for federal clients. Before that,
                I spent 13 years owning $80M+ commercial programs end-to-end — discovery, scoping,
                executive presentations, and customer-facing delivery.
              </p>
              <p>
                On the AI side, I build production-minded proofs-of-concept with LLM APIs, RAG
                pipelines, and the Model Context Protocol (MCP) — and stand up evaluation harnesses
                to measure prototype quality against real customer requirements.
              </p>
              <p>
                Based in Evergreen, CO. Available for extensive travel to customer sites.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-violet-500/30 transition-colors"
              >
                <p className="text-4xl font-black text-white mb-2">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
