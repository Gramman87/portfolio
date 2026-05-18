"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-xs font-semibold border border-white/10 hover:border-violet-500/50 text-gray-400 hover:text-white px-4 py-2 rounded-full transition-colors"
    >
      Print / Save PDF
    </button>
  );
}
