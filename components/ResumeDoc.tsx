import PrintButton from "@/components/PrintButton";

const experience = [
  {
    title: "Software Engineer",
    company: "Accenture Federal Services",
    period: "Mar 2023 – Present",
    location: "Denver, CO",
    bullets: [
      "Modernize a government off-the-shelf (GOTS) application, migrating its stack onto Red Hat OpenShift (OCP) to shorten feature release cycles; containerized the application and implemented Java/Spring Boot microservices deployed through CI/CD.",
      "Cut deployment time 40% by parallelizing and caching GitLab CI/CD pipelines, shortening the loop from code change to deployable build.",
      "Act as Scrum Master for a 5-person engineering team: run Agile ceremonies, coordinate dependencies with partner teams, and report progress and risks up the chain to leadership.",
      "Build full-stack features from REST APIs to AngularJS front ends, holding to versioning, backward-compatibility, and security standards on public-facing APIs.",
      "Centralized application secrets in HashiCorp Vault to meet federal compliance requirements.",
    ],
  },
  {
    title: "Software Developer",
    company: "Modius",
    period: "Mar 2022 – Mar 2023",
    location: "San Francisco Bay Area (Remote)",
    bullets: [
      "Built Java features with SmartGWT/JavaScript front ends for a DCIM (data center infrastructure management) platform used by hyperscale operators to manage their infrastructure.",
      "Authored and consumed REST APIs for real-time device communication and integration with customers' enterprise systems.",
      "Streamlined deployment workflows by optimizing integration scripts, reducing manual handoffs between releases.",
    ],
  },
  {
    title: "Java Full Stack Developer",
    company: "Skill Distillery",
    period: "Oct 2021 – Mar 2022",
    location: "Greenwood Village, CO",
    bullets: [
      "Built full-stack applications in Java, Spring Boot, Angular, and JavaScript deployed on AWS with RESTful service architectures.",
      "Served as Scrum Master and Database Administrator, enforcing Agile cadence, facilitating ceremonies, and driving robust schema design.",
    ],
  },
  {
    title: "Pre-Construction Manager",
    company: "Commercial & Industrial Electrical Construction",
    period: "Jan 2008 – Sep 2021",
    location: "Colorado",
    bullets: [
      "Led pre-construction on 15 to 20 bids a year ranging from $5M to $85M, winning roughly 1 in 4, and owned scope development, estimating, business cases, procurement strategy, and risk evaluation before mobilization.",
      "Trained junior estimators, superintendents, and new project managers, building the bench that carried projects from bid to field.",
      "Coordinated procurement, engineering, manpower, and scheduling into a delivery plan for each awarded project.",
    ],
  },
];

const education = [
  "Skill Distillery: Certificate, Full Stack Java Development (2021–2022)",
  "Metropolitan State University of Denver: Computer Science coursework",
];

export default function ResumeDoc({
  summary,
  strengths,
  aiWork,
  locationLine,
  aiSectionTitle = "Agentic AI Engineering: Independent Work",
}: {
  summary: string;
  strengths: string[];
  aiWork: string[];
  locationLine: string;
  aiSectionTitle?: string;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="border-b border-white/[0.06] px-6 py-4 print:hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-sm font-bold tracking-widest text-white uppercase">GA</a>
          <PrintButton />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 print:py-8 print:px-0">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-10 md:p-14 print:bg-white print:border-0 print:text-black print:rounded-none">

          {/* Header */}
          <div className="mb-8 pb-8 border-b border-white/[0.06] print:border-gray-200">
            <h1 className="text-3xl font-black text-white print:text-black">Graham Anderson</h1>
            <p className="text-sm text-gray-400 print:text-gray-600 mt-2">
              Evergreen, CO &nbsp;·&nbsp;
              <a href="mailto:gramman87@gmail.com" className="hover:text-violet-400 print:text-gray-600">gramman87@gmail.com</a>
              &nbsp;·&nbsp;
              <a href="https://grahamanderson.dev" className="hover:text-violet-400 print:text-gray-600">grahamanderson.dev</a>
              &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/graham-anderson-denver" className="hover:text-violet-400 print:text-gray-600">linkedin.com/in/graham-anderson-denver</a>
            </p>
            <p className="text-xs text-gray-500 print:text-gray-500 mt-1">{locationLine}</p>
          </div>

          {/* Summary */}
          <Section title="Summary">
            <p className="text-sm text-gray-300 print:text-gray-700 leading-relaxed">{summary}</p>
          </Section>

          {/* Core Strengths */}
          <Section title="Core Strengths">
            <ul className="space-y-1.5">
              {strengths.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
                  <span className="text-violet-400 print:text-gray-400 shrink-0 mt-0.5">·</span>
                  {s}
                </li>
              ))}
            </ul>
          </Section>

          {/* Experience */}
          <Section title="Professional Experience">
            <div className="space-y-8">
              {experience.map((job) => (
                <Job key={job.company} {...job} />
              ))}
            </div>
          </Section>

          {/* AI Work */}
          <Section title={aiSectionTitle}>
            <ul className="space-y-1.5">
              {aiWork.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
                  <span className="text-violet-400 print:text-gray-400 shrink-0 mt-0.5">·</span>
                  {s}
                </li>
              ))}
            </ul>
          </Section>

          {/* Education */}
          <Section title="Education">
            <ul className="space-y-1">
              {education.map((e) => (
                <li key={e} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
                  <span className="text-violet-400 print:text-gray-400 shrink-0">·</span>{e}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </main>

      <style>{`
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xs font-bold tracking-widest text-violet-400 print:text-gray-500 uppercase mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Job({ title, company, period, location, bullets }: {
  title: string; company: string; period: string; location: string; bullets: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <div>
          <span className="text-sm font-bold text-white print:text-black">{title}</span>
          <span className="text-sm text-violet-400 print:text-gray-600">, {company}</span>
        </div>
        <span className="text-xs text-gray-500 print:text-gray-500">{period} · {location}</span>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-gray-300 print:text-gray-700">
            <span className="text-violet-400 print:text-gray-400 shrink-0 mt-0.5">·</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
