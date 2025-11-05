'use client';
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 bg-slate-50 dark:bg-slate-950">
      
      <div className="h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-16">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
              Akash.dev
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Passionate full-stack developer crafting scalable web applications with modern technologies. Specializing in React, Spring Boot, and cloud solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-medium text-green-600 dark:text-green-400">Available for opportunities</span>
            </div>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors w-fit"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-fuchsia-600 transition-all duration-300"></span>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/akashivu"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 group-hover:bg-fuchsia-100 dark:group-hover:bg-fuchsia-900/20 transition-colors">
                  <Github className="h-4 w-4" />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 group-hover:bg-fuchsia-100 dark:group-hover:bg-fuchsia-900/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:akashivu002@gmail.com"
                className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 group-hover:bg-fuchsia-100 dark:group-hover:bg-fuchsia-900/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">akashivu002@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

       
        <div className="h-px bg-slate-200 dark:bg-slate-800 mb-8"></div>

       
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Akash Patil. Crafted with{' '}
            <Heart className="inline h-4 w-4 text-red-500 fill-red-500 animate-pulse" />{' '}
            using React & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

     
      <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/5 to-transparent pointer-events-none"></div>
    </footer>
  );
}