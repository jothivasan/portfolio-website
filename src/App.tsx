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
import StructuredData from "./components/common/StructuredData";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-black selection:bg-[#1DCD9F] selection:text-black">
      {/* SEO Structured Data */}
      <StructuredData />
      
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="animate-[fadeIn_1s_ease-out]">
          <Navbar />
          <main role="main">
            <section id="hero" aria-label="Hero section">
              <Hero />
            </section>

            <section
              id="about"
              className="bg-[#050505] pt-16 pb-16 md:pb-24 md:pt-24"
              aria-label="About section"
            >
              <About />
            </section>

            <section 
              id="projects" 
              className="pt-16 pb-16 md:pb-24 md:pt-24"
              aria-label="Projects section"
            >
              <Projects />
            </section>

            <section
              id="experience"
              className="bg-[#050505] pt-16 pb-16 md:pb-24 md:pt-24"
              aria-label="Experience section"
            >
              <Skills />
            </section>

            <section 
              id="contact" 
              className="pt-16 pb-16 md:pb-24 md:pt-24"
              aria-label="Contact section"
            >
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
