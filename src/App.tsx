import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section id="experience" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">Experience</h2>
        </section>
        <section id="certificates" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">Certificates</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
