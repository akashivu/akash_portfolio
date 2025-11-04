import React from "react";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "AdiyogiCabz – Travel Booking Platform",
    desc: "A full-stack client project for a real travel business. Features cab booking, driver management, location-based search, and responsive UI with live data integration.",
    tags: ["React", "Spring Boot", "MySQL", "Tailwind", "JWT Auth"],
    code: "https://github.com/Akashivu-github/AdiyogiCabz",
    demo: "https://adiyogicabz.com",
  },
  {
    title: "SkillSync – Team Collaboration Platform",
    desc: "An advanced full-stack platform with JWT authentication, role-based access, team join requests, and project collaboration system.",
    tags: ["React", "Spring Boot", "Oracle DB", "JWT", "Tailwind CSS"],
    code: "https://github.com/Akashivu-github/SkillSync",
    demo: "https://skillsync.vercel.app",
  },
  {
    title: "Job Portal – Recruitment Platform",
    desc: "Backend system where recruiters can post jobs, and users can apply, powered by Spring Boot and secured using JWT authentication.",
    tags: ["Spring Boot", "JWT", "JPA", "H2/Oracle DB", "REST API"],
    code: "https://github.com/Akashivu-github/Job-Portal",
    demo: "https://jobportal-ui.vercel.app",
  },
  {
    title: "Expense Tracker – Income & Expense Dashboard",
    desc: "A personal finance web app with charts, category filters, and dark/light mode. Data persisted with localStorage.",
    tags: ["React", "Context API", "Chart.js", "Tailwind CSS"],
    code: "https://github.com/Akashivu-github/Expense-Tracker",
    demo: "https://expense-tracker-akash.vercel.app",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {project.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of impactful projects I've built, showcasing full-stack development and real-world solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}