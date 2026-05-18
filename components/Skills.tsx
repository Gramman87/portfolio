import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
          What I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div
              key={s.category}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/20 transition-colors"
            >
              <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
                {s.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-gray-300 bg-white/[0.05] px-3 py-1.5 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
