import * as React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/common/LoadingScreen";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-black selection:bg-[#1DCD9F] selection:text-black">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={`transition-all duration-1000 transform ${
          isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>

          <section
            id="about"
            className="bg-[#050505] pt-16 pb-16 md:pb-24 md:pt-24"
          >
            <About />
          </section>

          <section id="projects" className="pt-16 pb-16 md:pb-24 md:pt-24">
            <Projects />
          </section>

          <section
            id="experience"
            className="bg-[#050505] pt-16 pb-16 md:pb-24 md:pt-24"
          >
            <Skills />
          </section>

          <section id="contact" className="pt-16 pb-16 md:pb-24 md:pt-24">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
