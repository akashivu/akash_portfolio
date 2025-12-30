import React, { useState, useEffect, useRef } from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Lightbulb,
  Layers,
  Zap,
  Shield,
  Award,
  Cpu,
} from "lucide-react";


const SKILLS_DATA = [
  {
    category: "Programming & Frontend",
    icon: Code2,
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-blue-50",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend & APIs",
    icon: Server,
    color: "from-emerald-600 to-green-500",
    bgColor: "bg-emerald-50",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "RESTful APIs",
      "JWT Authentication",
      "Microservices",
    ],
  },
  {
    category: "Applied Data Science & AI/ML",
    icon: Cpu,
    color: "from-indigo-600 to-purple-500",
    bgColor: "bg-indigo-50",
    technologies: [
      "Python",
      "Feature Engineering",
      "Behavioral Signal Analysis",
      "Model Inference Pipelines",
      "Anomaly Detection",
      "FastAPI (ML Services)",
    ],
  },
  {
  category: "Data Analysis & Modeling",
  icon: Database,
  color: "from-sky-600 to-blue-500",
  bgColor: "bg-sky-50",
  technologies: [
    "Pandas",
    "NumPy",
    "Data Modeling",
    "Schema Design",
    "Trend Analysis",
    "SQL Analytics",
  ],
},
{
  category: "Applied NLP & GenAI",
  icon: Cpu,
  color: "from-fuchsia-600 to-pink-500",
  bgColor: "bg-fuchsia-50",
  technologies: [
    "Text-Based Emotion Analysis",
    "NLP Preprocessing",
    "GenAI / LLM API Integration",
    "Prompt Engineering (Basic)",
    "Insight Summarization",
  ],
},

  {
    category: "Databases & Data Modeling",
    icon: Database,
    color: "from-violet-600 to-purple-500",
    bgColor: "bg-violet-50",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "Oracle DB",
      "H2 Database",
      "SQL",
      "Schema Design",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: Wrench,
    color: "from-orange-600 to-red-500",
    bgColor: "bg-orange-50",
    technologies: [
      "Docker",
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "Cloud Deployment",
    ],
  },
  {
    category: "Computer Science Fundamentals",
    icon: Lightbulb,
    color: "from-amber-600 to-yellow-500",
    bgColor: "bg-amber-50",
    technologies: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "SDLC",
      "Agile / Scrum",
      "Clean Architecture",
      "Problem Solving",
    ],
  },
  
];



const STATS = [
  { icon: Award, label: "Projects Built", value: "5+", color: "text-blue-600" },
  { icon: Layers, label: "Technologies Used", value: "15+", color: "text-emerald-600" },
  { icon: Cpu, label: "Applied ML Systems", value: "2+", color: "text-indigo-600" },
  { icon: Shield, label: "Production Quality", value: "100%", color: "text-orange-600" },
];


function useIntersectionObserver(threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [threshold]);

  return [ref, isVisible];
}


function SkillCard({ data, index, isVisible }) {
  const Icon = data.icon;

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="h-full rounded-2xl border-2 border-slate-200 bg-white hover:border-slate-900 hover:shadow-xl transition-all">
        <div className={`p-6 ${data.bgColor} border-b-2 border-slate-200`}>
          <div className="flex items-center justify-between mb-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${data.color}`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full">
              {data.technologies.length}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            {data.category}
          </h3>
        </div>

        <div className="p-6 grid grid-cols-2 gap-2">
          {data.technologies.map((tech) => (
            <div
              key={tech}
              className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-center"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function StatCard({ data, index, isVisible }) {
  const Icon = data.icon;

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-slate-100 ${data.color}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {data.value}
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {data.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Skills() {
  const [headerRef, headerVisible] = useIntersectionObserver(0.3);
  const [skillsRef, skillsVisible] = useIntersectionObserver(0.1);
  const [statsRef, statsVisible] = useIntersectionObserver(0.3);

  return (
    <section id="skills" className="py-24 px-4 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold uppercase rounded-full mb-6">
            <Layers className="w-4 h-4" />
            Skills Overview
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
            Skills & Technologies
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A balanced skill set covering full-stack engineering, applied data
            science, and production-ready machine learning systems.
          </p>
        </header>

        {/* SKILLS GRID */}
        <div ref={skillsRef} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {SKILLS_DATA.map((data, index) => (
              <SkillCard
                key={data.category}
                data={data}
                index={index}
                isVisible={skillsVisible}
              />
            ))}
          </div>
        </div>

        {/* STATS */}
        <div ref={statsRef}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              At a Glance
            </h3>
            <p className="text-slate-600">
              Snapshot of experience and delivery focus
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((data, index) => (
              <StatCard
                key={data.label}
                data={data}
                index={index}
                isVisible={statsVisible}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block p-6 bg-white border-2 border-slate-200 rounded-2xl shadow-lg">
            <p className="text-sm font-semibold text-slate-600 mb-3">
              Interested in collaborating or hiring?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition"
            >
              Get in Touch <Zap className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
