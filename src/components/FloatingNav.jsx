import { Home, User, Heart, Code, Briefcase } from "lucide-react";

export default function FloatingNav() {
  const navItems = [
    { id: "home", icon: Home },
    { id: "about", icon: User },
    { id: "skills", icon: Code },
    { id: "projects", icon: Briefcase },
    { id: "contact", icon: Heart },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg">
        {navItems.map(({ id, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="p-3 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all"
            aria-label={id}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
