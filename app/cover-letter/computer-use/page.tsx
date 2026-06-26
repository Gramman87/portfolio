import type { Metadata } from "next";
import LetterDoc from "@/components/LetterDoc";

export const metadata: Metadata = {
  title: "Cover Letter (Anthropic, Computer Use) | Graham Anderson",
};

export default function ComputerUseCoverLetter() {
  return (
    <LetterDoc
      greeting="Dear Anthropic Hiring Team,"
      paragraphs={[
        "I'm applying for the Product Engineer, Computer Use role. Teaching Claude to see and operate real interfaces, and building the agent harness and end-user products around that capability, is the exact kind of work I already do: I build agent runtimes that call tools in a loop and the full-stack products that wrap them. I ship across the whole stack, from the UI to the agent runtime to the backend services behind it, and agentic experiences on the Claude API are my core craft.",
        "Most of what I build independently is agent harnesses. My Spring Boot MCP Agent runs a streaming agent that discovers tools over an MCP surface and calls them in a loop, fronted by a React UI that renders each tool call and token in real time, with the model seam isolated so a real Claude tool-use loop drops straight in. My MCP Integration Server runs a Claude agent as a real MCP client that discovers and invokes tools at runtime, so I've built both the harness and the tools it drives. I've worked tool-calling, streaming, and the agent loop from every side, and every project is live or open-source.",
        "I'm built for the ambiguity this role calls for: I scope, build, ship, and measure end to end, shifting focus as priorities move, and I back agentic work with evaluation harnesses (including Claude-as-judge) so it stays correct as it changes. Five-plus years of production engineering keep me honest about technical quality, performance, reliability, and APIs that hold up. And I use Claude Code daily, so I come to computer-use and agent products as a heavy user with real opinions on what makes them trustworthy to operate.",
        "I'd bring genuine end-to-end ownership and a builder's instinct to the team. I'm based in Evergreen, CO and ready to relocate to San Francisco, New York, or Seattle for this role and the close, in-person work with researchers it calls for. I'd welcome the chance to talk about what I could build on the Computer Use team. Thank you for your consideration.",
      ]}
    />
  );
}
