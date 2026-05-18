const certs = [
  { name: "Kubernetes: Cloud Native Ecosystem", issuer: "LinkedIn Learning" },
  { name: "Spring Boot 1.0 Essential Training", issuer: "LinkedIn Learning" },
  { name: "Software Architecture Foundations", issuer: "LinkedIn Learning" },
];

const education = [
  { degree: "Certificate, Java Full Stack Development", school: "Skill Distillery", year: "2021–2022" },
  { degree: "Certificate, Electrical Apprenticeship", school: "Emily Griffith Technical College", year: "2008–2012" },
  { degree: "Computer Science (coursework)", school: "Metropolitan State University of Denver", year: "" },
];

export default function Certifications() {
  return (
    <section className="py-20 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-6">
              Certifications
            </p>
            <div className="space-y-3">
              {certs.map((c) => (
                <div key={c.name} className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">▪</span>
                  <div>
                    <p className="text-sm text-white font-medium">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-6">
              Education
            </p>
            <div className="space-y-3">
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
        </div>
      </div>
    </section>
  );
}
