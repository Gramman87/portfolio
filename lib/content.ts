export const projects = [
  {
    title: "HR Operations Agent",
    description:
      "Agentic HR workflow powered by Claude with real tool-calling. An AI agent orchestrates 8 tools across 30+ employees, 6 departments, and 7 HR policies — handling compensation analysis, retention risk scoring, org chart traversal, and PTO tracking in under 3 seconds per query. Try it live.",
    tags: ["Claude API", "Tool Use", "Agents", "Next.js", "TypeScript"],
    color: "from-rose-500 to-pink-600",
    highlight: "Agentic Workflow",
    link: "https://hr-agentic-workflow.vercel.app",
    github: "https://github.com/Gramman87/hr-agentic-workflow",
  },
  {
    title: "MCP Integration Server",
    description:
      "Enterprise MCP server exposing 6 agentic tools over both stdio and Streamable HTTP transports. The live demo runs a Claude agent as a real MCP client — it discovers tools at runtime over the protocol, then calls them to handle customer lookups across 5 accounts, surface support tickets, search a 5-document knowledge base, and retrieve live business metrics ($5.8M ARR, 1,340 accounts).",
    tags: ["MCP SDK", "Streamable HTTP", "TypeScript", "Agent Tools"],
    color: "from-emerald-500 to-teal-600",
    highlight: "Model Context Protocol",
    link: "https://mcp-web-nine.vercel.app",
    github: "https://github.com/Gramman87/mcp-server",
  },
  {
    title: "RAG Knowledge Agent",
    description:
      "End-to-end RAG over a SaaS documentation corpus: TF-IDF cosine retrieval (smoothed IDF weighting, cached per-chunk vectors) surfaces the top-k chunks with relevance scores, then Claude composes a grounded answer with inline source citations. The retrieve-then-generate pattern behind enterprise knowledge assistants — both halves are real, no mocks.",
    tags: ["RAG", "TF-IDF", "Claude API", "TypeScript"],
    color: "from-cyan-500 to-blue-600",
    highlight: "RAG Pipeline",
    link: "https://rag-agent-tau.vercel.app",
    github: "https://github.com/Gramman87/rag-agent",
  },
  {
    title: "SaaS Command Center",
    description:
      "Executive-facing SaaS KPI dashboard — MRR/ARR, churn, engagement, and segment views — with two real Claude integrations on top: a streaming natural-language query interface that answers questions over the live metrics, and Claude-generated insight cards (cached server-side). Built for the discovery-to-demo pipeline: surface a customer's metrics and present value to leadership in minutes.",
    tags: ["Next.js", "Claude API", "Recharts", "TypeScript"],
    color: "from-violet-600 to-indigo-600",
    highlight: "Customer Analytics",
    link: "https://fde-dashboard-orpin.vercel.app",
    github: "https://github.com/Gramman87/fde-dashboard",
  },
  {
    title: "CI/CD Pipeline Optimization",
    description:
      "Parallelized and cached GitLab CI/CD pipelines for a federal enterprise client, reducing deployment time by 40%. Enabled faster iteration on customer demos and prototypes — critical when compressing the gap between discovery and a working solution.",
    tags: ["GitLab CI/CD", "Docker", "Kubernetes", "Java"],
    color: "from-orange-500 to-pink-600",
    highlight: "40% Faster Deploys",
    link: null,
    github: null,
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Accenture Federal Services",
    period: "Mar 2023 – Present",
    bullets: [
      "Modernized a legacy federal Java/Spring Boot application by containerizing it and migrating it onto OpenShift (OCP) — running discovery with the client, defining the target architecture, and shipping the migration to production.",
      "Embed across cross-agency stakeholder groups, translating conflicting requirements and operational constraints into a single solution architecture that technical reviewers and executive sponsors both sign off on.",
      "Re-architected CI/CD pipelines with parallelization and caching, cutting deployment time 40% and tightening the loop between a code change and a demoable build for the client.",
      "Own the feedback loop between client teams and internal product/architecture — surfacing tradeoffs early so the delivered system tracks real operational needs instead of the original spec.",
    ],
  },
  {
    role: "Software Developer",
    company: "Modius",
    period: "Mar 2022 – Mar 2023",
    bullets: [
      "Built Java-based applications with SmartGWT/JavaScript front-ends deployed to enterprise data-center customers, integrating with existing infrastructure and adjacent systems.",
      "Authored and consumed RESTful APIs supporting real-time device communication, demonstrating the end-to-end integration patterns that enterprise platforms require.",
      "Streamlined deployment workflows by optimizing integration scripts, reducing manual handoffs and release friction.",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "Skill Distillery",
    period: "Oct 2021 – Mar 2022",
    bullets: [
      "Built full-stack applications in Java, Spring Boot, and JavaScript deployed on AWS with RESTful service architectures.",
      "Served as Scrum Master and Database Administrator, enforcing Agile cadence, facilitating ceremonies, and driving schema design.",
    ],
  },
  {
    role: "Senior Project Manager",
    company: "Commercial & Industrial Electrical Construction",
    period: "Jan 2008 – Sep 2021",
    bullets: [
      "Owned end-to-end delivery of $80M+ commercial and industrial programs, leading discovery workshops, scoping, business-case development, and executive presentations to C-level sponsors.",
      "Created customer-specific delivery roadmaps and forecast models that quantified scope, cost, and schedule trade-offs — the same discovery-to-roadmap process that drives enterprise AI adoption.",
      "Presented progress, risk, and value narratives to executive leadership on a regular cadence; routinely defended business cases under pressure from diverse stakeholder groups.",
      "Coordinated across procurement, engineering, manpower, and scheduling functions in complex, cross-functional environments — building the collaboration muscle that forward-deployed work demands.",
    ],
  },
];

export const skills = [
  { category: "AI & Agentic", items: ["LLMs", "Agents", "RAG", "MCP / A2A", "Prompt Engineering", "Evaluation Frameworks", "AI Roadmapping"] },
  { category: "Enterprise Software", items: ["Java", "Spring Boot", "TypeScript", "Python", "REST APIs", "Microservices", "Systems Integration"] },
  { category: "Customer-Facing", items: ["Discovery Workshops", "Architecture Diagrams", "Business Cases", "Executive Presentations", "Solution Design", "POC Development"] },
  { category: "Infrastructure & DevOps", items: ["AWS", "OpenShift (OCP)", "Kubernetes", "Docker", "GitLab CI/CD", "HashiCorp Vault", "SQL"] },
  { category: "Frontend & Prototyping", items: ["React", "Next.js", "Tailwind CSS", "Rapid Prototyping", "Data Visualization"] },
  { category: "Program Leadership", items: ["$80M+ Portfolio Delivery", "Enterprise Transformation", "Forecast Modeling", "Cross-Functional Coordination", "Agile / Scrum"] },
];
