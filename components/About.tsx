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
              Full-stack, from the
              <br />
              <span className="text-gray-500">Spring Boot service</span>
              <br />
              to the React surface.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a full-stack engineer who builds production features across the whole stack —
                JVM/Spring Boot services on the backend, TypeScript and React on the front end. At
                Accenture Federal Services I modernize legacy enterprise systems: containerizing
                Java/Spring Boot applications, building REST APIs, and owning services through
                deployment on OpenShift and Kubernetes.
              </p>
              <p>
                On the AI side, I build agentic applications on Claude in Python and TypeScript — MCP
                servers acting as both producer and consumer, tool-calling agents, RAG pipelines, and
                real-time streaming integrations. I back them with evaluation harnesses and tests so
                they stay correct and maintainable as they evolve.
              </p>
              <p>
                Based in Evergreen, CO — set up for remote and Boulder-area work.
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
