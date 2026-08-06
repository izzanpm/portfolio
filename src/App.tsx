import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-field text-ink">
      <Navbar />
      <main className="pt-[4.5rem]">
        <Hero />
        <Projects />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
