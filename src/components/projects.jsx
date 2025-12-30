import { useMemo, useState, useEffect, useRef } from "react";
import { Github, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "MentalSense – AI-Driven Mental Wellness Analytics",
    year: 2025,
    category: "AI / Data Science",
    desc: "Privacy-first AI platform that analyzes behavioral signals such as keystroke dynamics and emotional text to detect stress patterns, trends, and anomalies. Designed as an applied data science system integrated into a full-stack product.",
    tags: [
      "Applied Data Science",
      "Python",
      "FastAPI",
      "Machine Learning",
      "Spring Boot",
      "React",
      "JWT",
    ],
    image: "/thumbs/mentalsense.png",
    code: "https://github.com/akashivu/mentalsense",
    demo: "https://mentalsense.netlify.app/",
  },
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

function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3, ...options });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
}

function ProjectCard({ p, index, currentIndex }) {
  const isActive = index === currentIndex;
  
  return (
    <article 
      className={`flex-shrink-0 w-full snap-center transition-all duration-700 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Side - Project Image */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
            <div className="aspect-[4/3] relative">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Action Buttons */}
              <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full shadow-xl hover:scale-110 transition-transform"
                    aria-label="View Source Code"
                  >
                    <Github className="w-5 h-5 text-slate-900" />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 rounded-full shadow-xl hover:scale-110 transition-transform"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                )}
              </div>

              {/* Year Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-sm font-bold text-slate-900 rounded-full shadow-lg">
                  {p.year}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Project Details */}
          <div className="space-y-6">
            {/* Project Number & Category */}
            <div className="flex items-center gap-6">
              <div className="text-8xl font-bold text-slate-200 leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mb-2">
                  {p.category}
                </span>
                <div className="w-12 h-1 bg-slate-900"></div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 pt-4">
              {p.code && (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors group/link"
                >
                  <span>View Code</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all hover:shadow-xl group/link"
                >
                  <span>Live Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const categories = useCategories(PROJECTS);
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasPlayedPreview, setHasPlayedPreview] = useState(false);

  const list = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter(p => p.category === active)),
    [active]
  );

  const [sectionRef, sectionVisible] = useIntersectionObserver();

  // Auto-preview animation when section becomes visible
  useEffect(() => {
    if (sectionVisible && !hasPlayedPreview && scrollContainerRef.current && list.length > 1) {
      setHasPlayedPreview(true);
      
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / list.length;
      
      // Quick preview animation
      const previewAnimation = async () => {
        // Wait a moment before starting
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Scroll through all projects quickly
        for (let i = 1; i < list.length; i++) {
          container.scrollTo({
            left: cardWidth * i,
            behavior: 'smooth'
          });
          await new Promise(resolve => setTimeout(resolve, 400));
        }
        
        // Wait at the end
        await new Promise(resolve => setTimeout(resolve, 600));
        
        // Scroll back to first
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      };
      
      previewAnimation();
    }
  }, [sectionVisible, hasPlayedPreview, list.length]);

  // Detect current project based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.scrollWidth / list.length;
      const index = Math.round(container.scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [list.length]);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / list.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const goToNext = () => {
    if (currentIndex < list.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header 
          className={`mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-12">
            <div className="mb-4 inline-block">
              <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                Portfolio
              </span>
              <div className="w-16 h-0.5 bg-slate-900 mt-3 mx-auto"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Featured Projects
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              A curated collection of full-stack applications demonstrating technical expertise, 
              creative problem-solving, and attention to production-quality code.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map(c => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => {
                    setActive(c);
                    setCurrentIndex(0);
                    setHasPlayedPreview(false);
                  }}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </header>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white rounded-full shadow-2xl border border-slate-200 hover:bg-slate-50 transition-all duration-300 hover:scale-110"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}
          
          {currentIndex < list.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white rounded-full shadow-2xl border border-slate-200 hover:bg-slate-50 transition-all duration-300 hover:scale-110"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Projects Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {list.map((p, index) => (
              <ProjectCard 
                key={p.title} 
                p={p} 
                index={index} 
                currentIndex={currentIndex}
              />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {list.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-slate-900"
                    : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <span className="text-sm font-semibold text-slate-500">
              {currentIndex + 1} / {list.length}
            </span>
          </div>
        </div>

        {list.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
}