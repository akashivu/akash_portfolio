import React from "react";
import { Github, Linkedin, Mail, ArrowRight, Download, Code2 } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 pt-16 bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-slate-700 dark:via-purple-700/20 dark:to-slate-700"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
          <Code2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
            Available for Internship & Full-time
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-slate-900 dark:text-white">Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
            Akash Patil
          </span>
        </h1>

        <div className="mb-8 space-y-4">
          <p className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200">
            Full-Stack Developer
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
  Visionary Full-Stack Developer focused on building <span className="font-semibold text-purple-600 dark:text-purple-400">scalable, high-performance web applications</span>.  
  Skilled in <span className="font-semibold text-purple-600 dark:text-purple-400">React.js</span>, 
  <span className="font-semibold text-purple-600 dark:text-purple-400"> Spring Boot</span>, 
  <span className="font-semibold text-purple-600 dark:text-purple-400"> REST APIs</span>, and 
  <span className="font-semibold text-purple-600 dark:text-purple-400"> Cloud Deployment</span>.
</p>

        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Download className="h-5 w-5" />
            Download CV
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Connect with me
          </span>
          <div className="flex gap-3">
            <a
              href="https://github.com/akashivu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/akash-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="mailto:akashivu002@gmail.com"
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}