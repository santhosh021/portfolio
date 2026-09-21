import { About } from "./components/About";
import { Ai } from "./components/Ai";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Ai />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-subtle">
        <p>© {new Date().getFullYear()} Santhosh. Built with React and TypeScript, and hosted on my own server.</p>
      </footer>
    </>
  );
}
