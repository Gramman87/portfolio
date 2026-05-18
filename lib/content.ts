export const projects = [
  {
    title: "SaaS Command Center",
    description:
      "AI-powered analytics dashboard built with Next.js and the Claude API. Real-time KPIs, churn tracking, and natural language queries over business metrics — streamed live.",
    tags: ["Next.js", "Claude API", "Recharts", "TypeScript"],
    color: "from-violet-600 to-indigo-600",
    highlight: "AI Integration",
    link: "https://github.com/Gramman87/fde-dashboard",
  },
  {
    title: "RAG Knowledge Agent",
    description:
      "Retrieval-Augmented Generation pipeline that grounds LLM responses in customer documentation. Chunks, embeds, retrieves, and answers — with a lightweight eval harness to measure accuracy.",
    tags: ["Next.js", "TF-IDF", "RAG", "TypeScript"],
    color: "from-cyan-500 to-blue-600",
    highlight: "RAG Pipeline",
    link: "https://github.com/Gramman87/rag-agent",
  },
  {
    title: "MCP Integration Server",
    description:
      "Model Context Protocol server with 6 enterprise tools — query customer DB, surface support tickets, search docs, and pull live metrics. Connects directly to Claude Desktop via stdio transport.",
    tags: ["MCP SDK", "TypeScript", "Zod", "stdio"],
    color: "from-emerald-500 to-teal-600",
    highlight: "Model Context Protocol",
    link: "https://github.com/Gramman87/mcp-server",
  },
  {
    title: "CI/CD Pipeline Optimizer",
    description:
      "Parallelized and cached GitLab CI/CD pipelines for a federal client, reducing deployment time by 40% and enabling faster iteration cycles for customer demos and prototypes.",
    tags: ["GitLab CI/CD", "Docker", "Kubernetes", "Java"],
    color: "from-orange-500 to-pink-600",
    highlight: "40% faster deploys",
    link: null,
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Accenture Federal Services",
    period: "Mar 2023 — Present",
    bullets: [
      "Partner directly with federal client stakeholders to modernize legacy enterprise systems — translating ambiguous requirements into Java/Spring Boot microservice architectures.",
      "Designed and built scalable RESTful microservices, increasing system maintainability and enabling integration with existing client infrastructure.",
      "Enhanced GitLab CI/CD pipelines through parallelization and caching, reducing deployment time by 40% and accelerating iteration speed for client demos.",
      "Implemented secure secrets management with HashiCorp Vault, strengthening security posture and meeting federal compliance requirements.",
    ],
  },
  {
    role: "Software Developer",
    company: "Modius",
    period: "Mar 2022 — Mar 2023",
    bullets: [
      "Developed Java-based applications with SmartGWT/JavaScript front-ends for enterprise data-center customers on embedded/IoT devices.",
      "Authored and consumed RESTful APIs supporting real-time device communication and integration with adjacent enterprise systems.",
      "Streamlined deployment workflows by optimizing integration scripts, reducing manual handoffs and release friction.",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "Skill Distillery",
    period: "Oct 2021 — Mar 2022",
    bullets: [
      "Built full-stack applications in Java, Spring Boot, and JavaScript deployed on AWS with RESTful service architectures.",
      "Served as Scrum Master and Database Administrator — enforcing Agile cadence, facilitating ceremonies, and driving schema design.",
    ],
  },
  {
    role: "Senior Project Manager",
    company: "Commercial & Industrial Electrical Construction",
    period: "Jan 2008 — Sep 2021",
    bullets: [
      "Owned end-to-end delivery of $80M+ commercial and industrial programs — leading discovery, scoping, business-case development, and executive presentations.",
      "Built customer-specific delivery roadmaps and forecast models that quantified scope, cost, and schedule trade-offs for C-level sponsors.",
      "Coordinated across procurement, engineering, manpower, and scheduling functions — building the cross-functional collaboration muscle that directly applies to FDE work.",
    ],
  },
];

export const skills = [
  { category: "Languages & Frameworks", items: ["Java", "Spring Boot", "TypeScript", "JavaScript", "Python", "REST APIs"] },
  { category: "AI & Agentic", items: ["Claude API", "LLM APIs", "RAG", "MCP Servers", "Prompt Engineering", "Agent Evaluation"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Infrastructure & DevOps", items: ["AWS", "Kubernetes", "Docker", "GitLab CI/CD", "HashiCorp Vault"] },
  { category: "Data & Integration", items: ["SQL", "Microservices", "Systems Integration", "RESTful APIs"] },
  { category: "Leadership", items: ["Customer Discovery", "Executive Presentations", "Program Management", "Agile / Scrum"] },
];
