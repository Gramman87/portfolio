import PrintButton from "@/components/PrintButton";

export default function LetterDoc({
  greeting,
  paragraphs,
}: {
  greeting: string;
  paragraphs: string[];
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav bar */}
      <header className="border-b border-white/[0.06] px-6 py-4 print:hidden">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="text-sm font-bold tracking-widest text-white uppercase">GA</a>
          <PrintButton />
        </div>
      </header>

      {/* Letter */}
      <main className="max-w-3xl mx-auto px-6 py-16 print:py-8 print:px-0">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-10 md:p-14 print:bg-white print:border-0 print:text-black print:rounded-none">

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-white/[0.06] print:border-gray-200">
            <h1 className="text-2xl font-black text-white print:text-black">Graham Anderson</h1>
            <p className="text-sm text-gray-400 print:text-gray-600 mt-1">
              Evergreen, CO &nbsp;·&nbsp;
              <a href="mailto:gramman87@gmail.com" className="hover:text-violet-400 print:text-gray-600">gramman87@gmail.com</a>
              &nbsp;·&nbsp;
              <a href="https://grahamanderson.dev" className="hover:text-violet-400 print:text-gray-600">grahamanderson.dev</a>
              &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/graham-anderson-denver" className="hover:text-violet-400 print:text-gray-600">linkedin.com/in/graham-anderson-denver</a>
            </p>
          </div>

          {/* Body */}
          <div className="space-y-6 text-gray-300 print:text-gray-800 leading-relaxed text-sm md:text-base">
            <p>{greeting}</p>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>Sincerely,</p>
            <p className="font-semibold text-white print:text-black">Graham Anderson</p>
          </div>
        </div>
      </main>

      <style>{`
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
