import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#030303]">
      {/* Grid Pattern de fondo - Global */}
      <div
        className="fixed inset-0 z-0 opacity-20 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), 
                            linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
