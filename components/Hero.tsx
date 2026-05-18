"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-700/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <p className="animate-fade-up text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-6">
          Forward Deployed Engineer
        </p>

        <h1 className="animate-fade-up-delay-1 text-6xl md:text-8xl font-black tracking-tight text-white leading-none mb-6">
          Graham
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Anderson
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          I build production-minded AI systems (RAG pipelines, MCP servers, agentic workflows) and
          translate them into measurable outcomes for real customers. Backed by 13+ years of $80M+
          program leadership and hands-on enterprise engineering at the federal level.
        </p>

        <div className="animate-fade-up-delay-3 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}
