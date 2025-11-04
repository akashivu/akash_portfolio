import React from "react";
import { Code2, Server, Database, Wrench, Lightbulb } from "lucide-react";

const SKILLS = {
  "Frontend": {
    icon: Code2,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ]
  },
  "Backend": {
    icon: Server,
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
    ]
  },
  "Database": {
    icon: Database,
    skills: [
      "MySQL",
      "OracleDB",
      "H2 Database",
    ]
  },
  "DevOps & Tools": {
    icon: Wrench,
    skills: [
      "Git / GitHub",
      "Postman",
      "Docker",
      "VS Code",
    ]
  },
  "Core Concepts": {
    icon: Lightbulb,
    skills: [
      "OOP Principles",
      "Data Structures",
      "Algorithms",
      "Agile Methodology",
    ]
  }
};

function SkillCategory({ category, data }) {
  const Icon = data.icon;
  
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl">
      {/* Icon and Title */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {category}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 dark:hover:border-purple-600 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable full-stack applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, data]) => (
            <SkillCategory key={category} category={category} data={data} />
          ))}
        </div>

        {/* Optional: Stats or Additional Info */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              4+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Major Projects
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              10+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Technologies
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              Full Stack
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Development
            </div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              Modern
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Tech Stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}