import { useMemo, useState } from "react";
import { Github, ExternalLink, Calendar, Folder } from "lucide-react";

const PROJECTS = [
  {
    title: "AdiyogiCabz – Travel Booking Platform",
    year: 2025,
    category: "Web Apps",
    desc: "Real-world travel booking system with cab management, secure authentication, and live pricing. Developed for a client business.",
    tags: ["React", "Spring Boot", "MySQL", "Tailwind", "JWT Auth"],
    image: "/thumbs/adiyogicabz.png",
    code: "https://github.com/akashivu/Adiyogi-Travels",
    demo: "https://adiyogicabz.com",
  },
  {
    title: "SkillSync – Team Collaboration Platform",
    year: 2025,
    category: "Web Apps",
    desc: "Full-stack team collaboration system featuring JWT auth, role-based access, and team join request workflows.",
    tags: ["React", "Spring Boot", "Oracle DB", "JWT", "Tailwind CSS"],
    image: "/thumbs/skillsync-dummy.jpg",
    code: "https://github.com/Akashivu-github/SkillSync",
    demo: "",
  },
  {
    title: "Job Portal – Recruitment Platform",
    year: 2025,
    category: "Backend",
    desc: "Recruiters post jobs and users apply with JWT-based authentication and REST APIs. Built with Spring Boot and secured backend design.",
    tags: ["Spring Boot", "JWT", "JPA", "REST API", "Oracle DB"],
    image: "/thumbs/jobportal.png",
    code: "https://github.com/akashivu/jobportal-backend",
    demo: "https://jobportal-frontend-ui.netlify.app/",
  },
  {
    title: "Expense Tracker – Income & Expense Dashboard",
    year: 2025,
    category: "Dashboards",
    desc: "Track your expenses, view charts, and analyze spending patterns. Fully responsive with dark/light mode and localStorage data sync.",
    tags: ["React", "Context API", "Chart.js", "Tailwind CSS"],
    image: "/thumbs/expense.png",
    code: "https://github.com/akashivu/Finance-tracker",
    demo: "https://super-nasturtium-6e6fa6.netlify.app/",
  },
];

function useCategories(items) {
  return useMemo(() => ["All", ...Array.from(new Set(items.map(i => i.category)))], [items]);
}

function ProjectCard({ p }) {
  return (
    <article className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
      
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

     
      <div className="p-6">
       
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="inline-flex items-center gap-1">
            <Folder className="w-3 h-3" />
            {p.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {p.year}
          </span>
        </div>

        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {p.title}
        </h3>

        
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {p.desc}
        </p>

        
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

       
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const categories = useCategories(PROJECTS);

  const list = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter(p => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-base text-gray-600 max-w-2xl">
            A collection of full-stack applications demonstrating expertise in modern web development, backend architecture, and deployment practices.
          </p>
        </header>

        
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(c => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        
        {list.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}