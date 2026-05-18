import { projects } from "@/lib/content";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
          Things I&apos;ve built
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const inner = (
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${p.color} text-white`}>
                    {p.highlight}
                  </span>
                  {p.link
                    ? <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    : <Terminal className="w-4 h-4 text-gray-700" />
                  }
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 border border-white/[0.06] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {!p.link && (
                  <p className="text-xs text-gray-700 mt-4">CLI / server — no live demo</p>
                )}
              </div>
            );

            const cardClass = `group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 transition-all duration-300 overflow-hidden ${
              p.link ? "hover:border-white/[0.12] cursor-pointer" : ""
            }`;

            return p.link ? (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.color}`} />
                <div className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                {inner}
              </a>
            ) : (
              <div key={p.title} className={cardClass}>
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.color}`} />
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
