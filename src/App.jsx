import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingNav from "./components/FloatingNav";
export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
     
      
      <Home />
       <Projects />
      <Skills/>
      <Contact/>
      <Footer/>

       <FloatingNav />
    </div>
  );
}
