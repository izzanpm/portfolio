import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section id="about" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">About</h2>
        </section>
        <section id="skills" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">Skills</h2>
        </section>
        <section id="projects" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-text-primary">Projects</h2>
        </section>
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
