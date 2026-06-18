type Project = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  highlight: string;
  link: string | null;
  github: string | null;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Spring Boot MCP Agent",
    description:
      "A full-stack agentic developer tool: a Java 21 / Spring Boot backend publishes tools over an MCP-style producer surface (tools/list, tools/call) and runs a streaming agent that consumes them, with a React + TypeScript front-end that renders tool calls and tokens in real time over SSE. Includes an OpenAI-compatible /v1/chat/completions endpoint and a JUnit suite covering the tools, registry, agent logic, and controllers. The LLM seam is isolated so a real Claude tool-use call drops straight in.",
    tags: ["Java", "Spring Boot", "React", "MCP", "SSE Streaming", "JUnit"],
    color: "from-sky-500 to-blue-600",
    highlight: "JVM + React + MCP",
    link: null,
    github: "https://github.com/Gramman87/spring-mcp-agent",
    image: "/spring-mcp-agent.png",
  },
  {
    title: "MCP Integration Server",
    description:
      "Enterprise MCP server exposing 6 agentic tools over both stdio and Streamable HTTP transports — built as both a producer of tools and a consumer of the protocol. The live demo runs a Claude agent as a real MCP client: it discovers tools at runtime over the protocol, then calls them to handle customer lookups across 5 accounts, surface support tickets, search a 5-document knowledge base, and retrieve live business metrics ($5.8M ARR, 1,340 accounts).",
    tags: ["MCP SDK", "Streamable HTTP", "TypeScript", "Agent Tools"],
    color: "from-emerald-500 to-teal-600",
    highlight: "Model Context Protocol",
    link: "https://mcp-web-nine.vercel.app",
    github: "https://github.com/Gramman87/mcp-server",
  },
  {
    title: "Streaming Analytics Dashboard",
    description:
      "A full-stack Next.js dashboard — MRR/ARR, churn, engagement, and segment views — with two real Claude integrations on top: a natural-language query interface that streams answers token-by-token over the live metrics, and server-side cached insight cards. Real-time streaming and a polished React surface over a production data layer.",
    tags: ["Next.js", "Claude API", "Streaming", "React", "TypeScript"],
    color: "from-violet-600 to-indigo-600",
    highlight: "Real-Time Streaming",
    link: "https://fde-dashboard-orpin.vercel.app",
    github: "https://github.com/Gramman87/fde-dashboard",
  },
  {
    title: "Portfolio Analyst Sub-Agent System",
    description:
      "A Python lead orchestrator (Claude Sonnet 4.6, adaptive thinking) dispatches to three specialist sub-agents (Claude Haiku 4.5) via tool-use — market data, news sentiment, risk concentration — then synthesizes their briefings into a decision-grade analyst memo. Backed by a Claude-as-judge evaluation harness scoring routing, coverage, and quality across hand-written cases. Prompt caching on every system prompt and the lead's tool definitions; cache hit/miss telemetry surfaced in the UI.",
    tags: ["Python", "Sub-Agents", "Claude API", "Tool Use", "Evaluation Harness"],
    color: "from-amber-500 to-orange-600",
    highlight: "Sub-Agent Orchestration",
    link: "https://fs-analyst-agent.vercel.app",
    github: "https://github.com/Gramman87/fs-analyst-agent",
  },
  {
    title: "HR Operations Agent",
    description:
      "Agentic workflow powered by Claude with real tool-calling. An AI agent orchestrates 8 tools across 30+ employees, 6 departments, and 7 policies — handling compensation analysis, retention risk scoring, org-chart traversal, and PTO tracking in under 3 seconds per query. Full-stack Next.js / TypeScript, live and open-source.",
    tags: ["Claude API", "Tool Use", "Agents", "Next.js", "TypeScript"],
    color: "from-rose-500 to-pink-600",
    highlight: "Tool-Calling Agent",
    link: "https://hr-agentic-workflow.vercel.app",
    github: "https://github.com/Gramman87/hr-agentic-workflow",
  },
  {
    title: "RAG Knowledge Agent",
    description:
      "End-to-end RAG over a documentation corpus: TF-IDF cosine retrieval (smoothed IDF weighting, cached per-chunk vectors) surfaces the top-k chunks with relevance scores, then Claude composes a grounded answer with inline source citations. The retrieve-then-generate pattern behind enterprise knowledge assistants — both halves are real, no mocks.",
    tags: ["RAG", "TF-IDF", "Claude API", "TypeScript"],
    color: "from-cyan-500 to-blue-600",
    highlight: "RAG Pipeline",
    link: "https://rag-agent-tau.vercel.app",
    github: "https://github.com/Gramman87/rag-agent",
  },
  {
    title: "CI/CD Pipeline Optimization",
    description:
      "Parallelized and cached GitLab CI/CD pipelines for a federal enterprise client, reducing deployment time by 40%. Tightened the loop between a code change and a deployable build — enabling faster iteration on features and prototypes.",
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
      "Modernized a legacy federal Java/Spring Boot application — containerizing it and migrating it onto OpenShift/Kubernetes, then owning the services through deployment, incident response, and ongoing reliability work.",
      "Build and consume REST APIs across a microservice architecture, upholding versioning, backward compatibility, and security standards on public-facing surfaces.",
      "Re-architected CI/CD pipelines with parallelization and caching, cutting deployment time 40% and tightening the loop between a code change and a deployable build.",
      "Implemented secure secrets management with HashiCorp Vault and partner across product, architecture, and client teams to translate ambiguous requirements into well-scoped, tested engineering work.",
    ],
  },
  {
    role: "Software Developer",
    company: "Modius",
    period: "Mar 2022 – Mar 2023",
    bullets: [
      "Built full-stack Java applications with SmartGWT/JavaScript front-ends deployed to enterprise data-center customers, integrating with existing infrastructure and adjacent systems.",
      "Authored and consumed RESTful APIs supporting real-time device communication — the end-to-end integration patterns that enterprise platforms depend on.",
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
    role: "Pre-Construction Manager",
    company: "Commercial & Industrial Electrical Construction",
    period: "Jan 2008 – Sep 2021",
    bullets: [
      "Led pre-construction on $80M+ commercial and industrial programs — owning scope development, estimating, business-case development, procurement strategy, and risk evaluation before mobilization.",
      "Evaluated effort, risk, and priority across competing workstreams to build delivery roadmaps — the same trade-off calls that drive release planning on an engineering team.",
      "Coordinated across procurement, engineering, manpower, and scheduling functions — building the cross-functional collaboration muscle that full-stack delivery demands.",
    ],
  },
];

export const skills = [
  { category: "Backend (JVM)", items: ["Java", "Spring Boot", "REST APIs", "Microservices", "OpenAI-Compatible Endpoints", "Systems Integration", "SQL"] },
  { category: "Frontend", items: ["TypeScript", "React", "Next.js", "HTML / CSS", "Tailwind CSS", "Data Visualization"] },
  { category: "AI & Agentic", items: ["Claude API", "Tool & Function Calling", "MCP (Producer + Consumer)", "Agents & Sub-agents", "Streaming (SSE / WebSockets)", "RAG", "Evaluation Harnesses"] },
  { category: "Testing & Quality", items: ["JUnit", "Claude-as-Judge Evals", "Evaluation Harnesses", "API Governance & Versioning"] },
  { category: "Cloud & DevOps", items: ["AWS", "Kubernetes", "OpenShift (OCP)", "Docker", "GitLab CI/CD", "HashiCorp Vault"] },
  { category: "Languages & Delivery", items: ["Python", "Agile / Scrum", "Cross-Functional Delivery", "$80M+ Program Leadership", "Incident Response"] },
];
