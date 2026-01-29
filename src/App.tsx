import * as React from "react";
import { Suspense, useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import LoadingScreen from "./components/common/LoadingScreen";
import StructuredData from "./components/common/StructuredData";

// Lazy load below-the-fold sections for better Safari performance
// This enables code splitting and reduces initial JS execution
const About = React.lazy(() => import("./components/sections/About"));
const Projects = React.lazy(() => import("./components/sections/Projects"));
const Skills = React.lazy(() => import("./components/sections/Skills"));
const Contact = React.lazy(() => import("./components/sections/Contact"));
const Footer = React.lazy(() => import("./components/layout/Footer"));

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

            {/* Lazy-loaded sections wrapped in Suspense for Safari performance */}
            <Suspense fallback={null}>
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
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default App;
