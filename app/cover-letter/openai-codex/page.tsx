import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (OpenAI Codex) | Graham Anderson",
};

export default function OpenAiCodexCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear OpenAI Hiring Team,"
      paragraphs={[
        "I'm applying for the Full Stack Software Engineer role on the Codex team. Reimagining how software gets built, and applying AI across the whole development lifecycle, is the problem I care about most. I live in AI-assisted development tools every day, and I have strong opinions about where they shine, where they break, and what they should become next. Just as importantly, I've built agentic developer tooling from scratch, so I understand these systems from both the user's side and the builder's side.",
        "The work in this posting spans frontend, backend, agent workflows, cloud infrastructure, and developer tooling, and that full span is where I operate. My Spring Boot MCP Agent is a full-stack agentic developer tool: a service that runs a streaming agent which discovers and calls tools in a loop, exposes an OpenAI-compatible /v1/chat/completions endpoint, and is fronted by a React UI that renders tool calls and tokens in real time, all covered by a JUnit suite. Around it I've built an enterprise tool server that an agent consumes as a real client at runtime, a multi-agent orchestration system with an LLM-as-judge evaluation harness, and other full-stack LLM applications. Each is live or open-source, and each is architected model-agnostically so it ports across providers.",
        "I want to own products end to end, from conception through launch and iteration, and I learn by putting things in front of real users. Five-plus years of production engineering keep me honest about reliability, observability, and performance, and I care about reframing problems rather than just optimizing the existing workflow. I work in TypeScript, React, Python, and Java, and I use agentic coding tools as a first-class part of how I build.",
        "I'm based in Evergreen, CO and ready to relocate to San Francisco for the hybrid schedule. I'd welcome the chance to talk about building the developer tools that redefine how software gets made. Thank you for your consideration.",
      ]}
    />
  );
}
