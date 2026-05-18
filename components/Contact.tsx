import { Mail, GitFork, Link } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-violet-900/30 to-fuchsia-900/10 border border-violet-500/20 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-700/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Let&apos;s build
              <br />
              something great.
            </h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto mb-12">
              Whether you have a complex integration, a tight deadline, or just an idea, I&apos;d
              love to hear about it.
            </p>

            <a
              href="mailto:gramman87@gmail.com"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-10 py-4 rounded-full transition-colors text-sm mb-12"
            >
              <Mail className="w-4 h-4" />
              gramman87@gmail.com
            </a>

            <div className="flex items-center justify-center gap-6 flex-wrap">
              <a
                href="https://linkedin.com/in/graham-anderson-denver"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <Link className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="https://github.com/gramman87"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <GitFork className="w-4 h-4" />
                GitHub
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="/resume"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <GitFork className="w-4 h-4" />
                Resume
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="/cover-letter"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <GitFork className="w-4 h-4" />
                Cover Letter
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-700 mt-12">
          grahamanderson.dev · Built with Next.js · &copy; 2026 Graham Anderson
        </p>
      </div>
    </section>
  );
}
