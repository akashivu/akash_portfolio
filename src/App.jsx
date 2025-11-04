import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./components/projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      
      <Home />
       <Projects />
      <Skills/>
     
    </div>
  );
}
