"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const links = ["About", "Why Applied AI", "Projects", "Experience", "Skills", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const docsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (docsRef.current && !docsRef.current.contains(e.target as Node)) {
        setDocsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/90 backdrop-blur border-b border-white/5 py-3" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-sm font-bold tracking-widest text-white uppercase">GA</a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Docs dropdown */}
          <div className="relative hidden md:block" ref={docsRef}>
            <button
              onClick={() => setDocsOpen((o) => !o)}
              className="flex items-center gap-1 text-xs font-semibold border border-white/10 hover:border-violet-500/50 text-gray-400 hover:text-white px-4 py-2 rounded-full transition-colors"
            >
              Docs <ChevronDown className={`w-3 h-3 transition-transform ${docsOpen ? "rotate-180" : ""}`} />
            </button>
            {docsOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#0f0f1a] border border-white/[0.08] rounded-xl shadow-xl overflow-hidden">
                <a
                  href="/resume"
                  onClick={() => setDocsOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  Resume
                </a>
                <a
                  href="/cover-letter"
                  onClick={() => setDocsOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  Cover Letter
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
