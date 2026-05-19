export const projects = [
  {
    title: "MCP Integration Server",
    description:
      "Enterprise-grade Model Context Protocol server exposing 6 agentic tools: customer database queries, support ticket surfacing, documentation search, and live metrics retrieval. Demonstrates the agent-to-tool integration pattern that powers AI-driven enterprise workflows.",
    tags: ["MCP SDK", "TypeScript", "Zod", "Agent Tools"],
    color: "from-emerald-500 to-teal-600",
    highlight: "Model Context Protocol",
    link: null,
    github: "https://github.com/Gramman87/mcp-server",
  },
  {
    title: "RAG Knowledge Agent",
    description:
      "Retrieval-augmented generation pipeline with real TF-IDF cosine similarity over a document corpus. Chunks, scores, and surfaces relevant context visually before answer generation — the same pattern that powers enterprise knowledge assistants and AI-driven search.",
    tags: ["RAG", "TF-IDF", "Next.js", "TypeScript"],
    color: "from-cyan-500 to-blue-600",
    highlight: "RAG Pipeline",
    link: "https://rag-agent-tau.vercel.app",
    github: "https://github.com/Gramman87/rag-agent",
  },
  {
    title: "SaaS Command Center",
    description:
      "Executive-facing metrics dashboard with KPI cards, churn forecasting, and a natural language query interface. Built to demonstrate the discovery-to-demo pipeline: understand a customer's metrics, surface insights, and present value to leadership.",
    tags: ["Next.js", "LLM Integration", "Recharts", "TypeScript"],
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
      "Embed directly with federal client stakeholders to run discovery on legacy enterprise systems, translating ambiguous requirements into solution architectures and Java/Spring Boot microservice implementations.",
      "Lead technical deep-dives and present architecture diagrams, integration patterns, and implementation roadmaps to both technical reviewers and executive sponsors.",
      "Enhanced CI/CD pipelines through parallelization and caching, reducing deployment time by 40% — accelerating iteration speed for customer demos and prototypes.",
      "Serve as the feedback loop between client teams and internal product/architecture stakeholders, ensuring solutions stay aligned with real operational needs.",
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
  { category: "Infrastructure & DevOps", items: ["AWS", "Kubernetes", "Docker", "GitLab CI/CD", "HashiCorp Vault", "SQL"] },
  { category: "Frontend & Prototyping", items: ["React", "Next.js", "Tailwind CSS", "Rapid Prototyping", "Data Visualization"] },
  { category: "Program Leadership", items: ["$80M+ Portfolio Delivery", "Enterprise Transformation", "Forecast Modeling", "Cross-Functional Coordination", "Agile / Scrum"] },
];
