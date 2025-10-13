import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      const isDark = saved === "dark";
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, []);

  // Persist theme change
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Projects", "Skills", "Contact"];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-white/40 dark:bg-slate-900/40 shadow-lg border-b border-slate-200/20 dark:border-slate-800/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
         
          <a
            href="#home"
            className="group relative font-bold text-xl sm:text-2xl text-slate-900 dark:text-white"
          >
            <span className="relative z-10">
              Akash
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
                .dev
              </span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

         
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-fuchsia-500"
                      : "text-slate-700 dark:text-slate-300 hover:text-fuchsia-500 dark:hover:text-fuchsia-400"
                  }`}
                >
                  {link}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          
          <div className="flex items-center gap-3">
            
            <button
              onClick={() => setDark((prev) => !prev)}
              className="relative p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-fuchsia-400 dark:hover:border-fuchsia-500 transition-all duration-300 group overflow-hidden"
              aria-label="Toggle theme"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                {dark ? (
                  <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-500 transition-all duration-300" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-400 transition-all duration-300" />
                )}
              </div>
            </button>

           
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-fuchsia-400 dark:hover:border-fuchsia-500 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-fuchsia-500 bg-fuchsia-500/10"
                      : "text-slate-700 dark:text-slate-300 hover:text-fuchsia-500 hover:bg-fuchsia-500/5"
                  }`}
                >
                  {link}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
