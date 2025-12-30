'use client';

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Top divider */}
      <div className="h-px bg-slate-800" />

      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          {/* Brand / About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Akash Patil
            </h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Full-Stack Developer with applied data science experience,
              focused on building clean, scalable, and production-ready
              web systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/akashivu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/akash-patil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:akashivu002@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                akashivu002@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Akash Patil. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
