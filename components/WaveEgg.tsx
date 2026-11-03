"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SECRET_WORD = "wave";

export default function WaveEgg() {
  const router = useRouter();

  useEffect(() => {
    let typed = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
      typed = (typed + e.key.toLowerCase()).slice(-SECRET_WORD.length);
      if (typed === SECRET_WORD) router.push("/waves");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <Link href="/waves" aria-label="Tsunami Lab" className="inline-block px-2 py-1 text-gray-800 hover:text-cyan-400 transition-colors">
      ~
    </Link>
  );
}
