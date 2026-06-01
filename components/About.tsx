export default function About() {
  const stats = [
    { value: "$80M+", label: "Programs delivered" },
    { value: "40%", label: "Faster CI/CD deployments" },
    { value: "13+", label: "Years leading delivery" },
    { value: "5+", label: "Years software engineering" },
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
                I&apos;m a customer-facing engineer with a hybrid background in production software
                delivery and large-scale program leadership. At Accenture Federal Services I embed
                directly with federal client stakeholders to modernize legacy systems — running discovery,
                designing solution architectures, and presenting roadmaps to executive sponsors.
                Before that, I spent 13 years owning $80M+ programs end-to-end.
              </p>
              <p>
                On the AI side, I build production applications on Claude — MCP servers, sub-agents,
                and agent skills — in Python and TypeScript. I stand up evaluation harnesses to
                measure prototype quality and assemble customer-specific demos that show measurable value,
                then document the repeatable deployment patterns behind them.
              </p>
              <p>
                Based in Evergreen, CO. Available for 40%+ travel to customer sites.
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
