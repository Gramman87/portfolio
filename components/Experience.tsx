import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
          Where I&apos;ve worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06] ml-1.5 hidden md:block" />

          <div className="space-y-12">
            {experience.map((e, i) => (
              <div key={i} className="md:pl-12 relative">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-violet-500 bg-[#0a0a0f] hidden md:block" />

                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.10] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{e.role}</h3>
                      <p className="text-violet-400 font-medium text-sm mt-0.5">{e.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-white/[0.05] px-3 py-1.5 rounded-full whitespace-nowrap">
                      {e.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-400">
                        <span className="text-violet-500 mt-0.5 shrink-0">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
