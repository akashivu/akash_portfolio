import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";

export default function Home() {
  const stats = [
    { number: "15+", label: "Technologies Used" },
    { number: "5+", label: "Production-Ready Projects" },
    { number: "110+", label: "DSA Problems Solved" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center px-4 pt-16 overflow-hidden"
    >
      {/* ===== BACKGROUND LAYERS ===== */}
      {/* 75% main background */}
      <div className="absolute inset-0 bg-white dark:bg-slate-900 z-0" />

      {/* 25% accent background (right side) */}
      <div className="absolute top-0 right-0 h-full w-[25%] bg-blue-50 dark:bg-slate-800 z-0" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-gray-900 dark:text-white">
        <div className="text-left mb-16">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Open to Full-Time · Internship · Applied ML Roles
            </span>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            Akash Patil
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
            Full-Stack Developer · Applied Data Science & AI/ML Engineering
          </h2>

          {/* Focus line */}
          <div className="text-lg md:text-xl font-medium mb-6 text-slate-600 dark:text-slate-400">
            Backend · Data Science · ML Inference · Cloud Systems
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed">
            I build scalable, data-driven web applications using{" "}
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Java, Spring Boot, React.js
            </span>
            , and cloud platforms. I also work on{" "}
            <span className="font-medium text-slate-800 dark:text-slate-200">
              applied data science and AI/ML systems
            </span>
            — designing feature pipelines, serving Python-based ML inference,
            and converting behavioral data into actionable insights through
            clean, production-ready architecture.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:border-slate-400 dark:hover:border-slate-600 transition"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Focus Icons */}
          <div className="mb-8">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
              ENGINEERING FOCUS
            </p>
            <div className="flex gap-4">
              {[Code2, Database, Cloud, Cpu].map((Icon, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  <Icon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/akashivu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 transition"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/akash-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:akashivu002@gmail.com"
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 transition"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Vertical Name Accent */}
      <div className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 z-10">
        <div
          className="text-6xl font-bold text-gray-500 dark:text-slate-700 tracking-wider"
          style={{ writingMode: "vertical-rl" }}
        >
          Akash Patil
        </div>
      </div>
    </section>
  );
}
