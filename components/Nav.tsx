"use client";

import { useState, useEffect } from "react";

const links = ["About", "Why FDE", "Projects", "Experience", "Skills", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/90 backdrop-blur border-b border-white/5 py-3" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest text-white uppercase">GA</span>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume"
          className="text-xs font-semibold border border-white/10 hover:border-violet-500/50 text-gray-400 hover:text-white px-4 py-2 rounded-full transition-colors hidden md:block"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full transition-colors"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
