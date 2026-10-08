type Project = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  highlight: string;
  link: string | null;
  github: string | null;
  image?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Spring Boot MCP Agent",
    description:
      "A full-stack agentic developer tool: a Java 21 / Spring Boot backend publishes tools over an MCP-style producer surface (tools/list, tools/call) and runs a streaming agent that consumes them, with a React + TypeScript front-end that renders tool calls and tokens in real time over SSE. Includes an OpenAI-compatible /v1/chat/completions endpoint and a JUnit suite covering the tools, registry, agent logic, and controllers. The LLM seam is isolated so a real Claude tool-use call drops straight in.",
    tags: ["Java", "Spring Boot", "React", "MCP", "SSE Streaming", "JUnit"],
    color: "from-sky-500 to-blue-600",
    highlight: "JVM + React + MCP",
    link: "https://spring-mcp-agent.onrender.com",
    github: "https://github.com/Gramman87/spring-mcp-agent",
    image: "/spring-mcp-agent.png",
    note: "Live demo is on a free tier and cold-starts, so first load can take 30 to 60 seconds to wake.",
  },
  {
    title: "MCP Integration Server",
    description:
      "Enterprise MCP server exposing 6 agentic tools over both stdio and Streamable HTTP transports, built as both a producer of tools and a consumer of the protocol. The live demo runs a Claude agent as a real MCP client: it discovers tools at runtime over the protocol, then calls them to handle customer lookups across 5 accounts, surface support tickets, search a 5-document knowledge base, and retrieve live business metrics ($5.8M ARR, 1,340 accounts).",
    tags: ["MCP SDK", "Streamable HTTP", "TypeScript", "Agent Tools"],
    color: "from-emerald-500 to-teal-600",
    highlight: "Model Context Protocol",
    link: "https://mcp-web-nine.vercel.app",
    github: "https://github.com/Gramman87/mcp-server",
  },
  {
    title: "Streaming Analytics Dashboard",
    description:
      "A full-stack Next.js dashboard: MRR/ARR, churn, engagement, and segment views, with two real Claude integrations on top: a natural-language query interface that streams answers token-by-token over the live metrics, and server-side cached insight cards. Real-time streaming and a polished React surface over a production data layer.",
    tags: ["Next.js", "Claude API", "Streaming", "React", "TypeScript"],
    color: "from-violet-600 to-indigo-600",
    highlight: "Real-Time Streaming",
    link: "https://fde-dashboard-orpin.vercel.app",
    github: "https://github.com/Gramman87/fde-dashboard",
  },
  {
    title: "Portfolio Analyst Sub-Agent System",
    description:
      "A Python lead orchestrator (Claude Sonnet 4.6, adaptive thinking) dispatches to three specialist sub-agents (Claude Haiku 4.5) via tool-use (market data, news sentiment, risk concentration), then synthesizes their briefings into a decision-grade analyst memo. Backed by a Claude-as-judge evaluation harness scoring routing, coverage, and quality across hand-written cases. Prompt caching on every system prompt and the lead's tool definitions; cache hit/miss telemetry surfaced in the UI.",
    tags: ["Python", "Sub-Agents", "Claude API", "Tool Use", "Evaluation Harness"],
    color: "from-amber-500 to-orange-600",
    highlight: "Sub-Agent Orchestration",
    link: "https://fs-analyst-agent.vercel.app",
    github: "https://github.com/Gramman87/fs-analyst-agent",
  },
  {
    title: "HR Operations Agent",
    description:
      "An AI-native take on HR operations: an agentic workflow on Claude with real tool-calling, where the interface is driven by the underlying employee data rather than static layouts. The agent orchestrates 8 tools across 30+ employees, 6 departments, and 7 policies, handling compensation analysis, retention risk scoring, org-chart traversal, and PTO tracking in under 3 seconds per query. Full-stack Next.js / TypeScript, live and open-source, a data-driven enterprise interface built end to end.",
    tags: ["Claude API", "Tool Use", "Agents", "Next.js", "TypeScript", "HR"],
    color: "from-rose-500 to-pink-600",
    highlight: "Agentic HR System",
    link: "https://hr-agentic-workflow.vercel.app",
    github: "https://github.com/Gramman87/hr-agentic-workflow",
  },
  {
    title: "RAG Knowledge Agent",
    description:
      "End-to-end RAG over a documentation corpus: TF-IDF cosine retrieval (smoothed IDF weighting, cached per-chunk vectors) surfaces the top-k chunks with relevance scores, then Claude composes a grounded answer with inline source citations. The retrieve-then-generate pattern behind enterprise knowledge assistants. Both halves are real, no mocks.",
    tags: ["RAG", "TF-IDF", "Claude API", "TypeScript"],
    color: "from-cyan-500 to-blue-600",
    highlight: "RAG Pipeline",
    link: "https://rag-agent-tau.vercel.app",
    github: "https://github.com/Gramman87/rag-agent",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Accenture Federal Services",
    period: "Mar 2023 – Present",
    bullets: [
      "Modernize a government off-the-shelf (GOTS) application, migrating its stack onto Red Hat OpenShift (OCP) to shorten feature release cycles; containerized its multi-component Java/Spring Boot monolith and deployed it through CI/CD.",
      "Cut deployment time 40% by parallelizing and caching GitLab CI/CD pipelines, shortening the loop from code change to deployable build.",
      "Act as Scrum Master for a 5-person engineering team: run Agile ceremonies, coordinate dependencies with partner teams, and report progress and risks up the chain to leadership.",
      "Build full-stack features from REST APIs to AngularJS front ends, holding to versioning, backward-compatibility, and security standards on public-facing APIs.",
      "Centralized application secrets in HashiCorp Vault to meet federal compliance requirements.",
    ],
  },
  {
    role: "Software Developer",
    company: "Modius",
    period: "Mar 2022 – Mar 2023",
    bullets: [
      "Built Java features with SmartGWT/JavaScript front ends for a DCIM (data center infrastructure management) platform used by hyperscale operators to manage their infrastructure.",
      "Authored and consumed REST APIs for real-time device communication and integration with customers' enterprise systems.",
      "Streamlined deployment workflows by optimizing integration scripts, reducing manual handoffs between releases.",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "Skill Distillery",
    period: "Oct 2021 – Mar 2022",
    bullets: [
      "Built full-stack applications in Java, Spring Boot, Angular, and JavaScript deployed on AWS with RESTful service architectures.",
      "Served as Scrum Master and Database Administrator, enforcing Agile cadence, facilitating ceremonies, and driving schema design.",
    ],
  },
  {
    role: "Pre-Construction Manager",
    company: "Commercial & Industrial Electrical Construction",
    period: "Jan 2008 – Sep 2021",
    bullets: [
      "Led pre-construction on 15 to 20 bids a year ranging from $5M to $85M, winning roughly 1 in 4, and owned scope development, estimating, business cases, procurement strategy, and risk evaluation before mobilization.",
      "Trained junior estimators, superintendents, and new project managers, building the bench that carried projects from bid to field.",
      "Coordinated procurement, engineering, manpower, and scheduling into a delivery plan for each awarded project.",
    ],
  },
];

export const skills = [
  { category: "Backend (JVM)", items: ["Java", "Spring Boot", "REST APIs", "Modular Monolith Architecture", "Service Decomposition Design", "Concurrency & Data Access", "OpenAI-Compatible Endpoints", "Systems Integration", "SQL"] },
  { category: "Frontend", items: ["TypeScript", "React", "Next.js", "Angular / AngularJS", "HTML / CSS", "Tailwind CSS", "Data-Driven & Dynamic UIs"] },
  { category: "AI & Agentic", items: ["Claude API", "Tool & Function Calling", "Conversational & Agent-Mediated UX", "MCP (Producer + Consumer)", "Agents & Sub-agents", "Streaming (SSE / WebSockets)", "RAG", "Evaluation Harnesses"] },
  { category: "Testing & Quality", items: ["JUnit", "Claude-as-Judge Evals", "Evaluation Harnesses", "API Governance & Versioning"] },
  { category: "Cloud & DevOps", items: ["AWS", "Kubernetes", "OpenShift (OCP)", "Docker", "GitLab CI/CD", "HashiCorp Vault"] },
  { category: "Languages & Delivery", items: ["Python", "Agile / Scrum", "Cross-Functional Delivery", "$80M+ Program Leadership", "Incident Response"] },
];
