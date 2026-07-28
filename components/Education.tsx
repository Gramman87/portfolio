const education = [
  { degree: "Certificate, Java Full Stack Development", school: "Skill Distillery", year: "2021–2022" },
  { degree: "Certificate, Electrical Apprenticeship", school: "Emily Griffith Technical College", year: "2008–2012" },
  { degree: "Computer Science (coursework)", school: "Metropolitan State University of Denver", year: "" },
];

export default function Education() {
  return (
    <section className="py-20 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-6">
          Education
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((e) => (
            <div key={e.degree} className="flex items-start gap-3">
              <span className="text-violet-500 mt-1">▪</span>
              <div>
                <p className="text-sm text-white font-medium">{e.degree}</p>
                <p className="text-xs text-gray-500">{e.school}{e.year ? ` · ${e.year}` : ""}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
