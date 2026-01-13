import * as React from "react";
import { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const bgTranslate = scrollY * 0.5;
  const textTranslate = scrollY * -0.15;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6 pt-24 pb-24 lg:pt-32"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          transform: `translateY(${bgTranslate}px)`,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 max-w-5xl text-center w-full"
        style={{ transform: `translateY(${textTranslate}px)` }}
      >
        <div className="inline-block px-3 py-1.5 mb-10 lg:mb-12 border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 font-black italic uppercase tracking-[0.2em] text-[6px] md:text-[9px] animate-[fade-in_1s_ease-out]">
          AVAILABLE FOR NEW PROJECTS — 2026
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black italic uppercase tracking-[0.01em] leading-[0.9] mb-10 opacity-0 animate-[fade-up_0.8s_ease-out_forwards]">
          BUILDING <br />
          <span className="inline-block pr-4 md:pr-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700">
            MODERN
          </span>{" "}
          <br />
          EXPERIENCES
        </h1>

        <p className="max-w-xl mx-auto text-zinc-500 text-sm md:text-md font-medium leading-relaxed mb-16 opacity-0 animate-[fade-up_0.8s_ease-out_0.2s_forwards]">
          Result Driven Frontend Developer specializing in high-performance web
          applications, sophisticated design systems, and scalable cloud
          architectures.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fade-up_0.8s_ease-out_0.4s_forwards]">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative w-full sm:w-auto px-6 py-4 bg-white text-black font-bold text-xs uppercase italic tracking-widest overflow-hidden transition-all duration-300 hover:pr-14 cursor-pointer"
            aria-label="View selected works"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <span className="absolute right-[-24px] top-1/2 -translate-y-1/2 group-hover:right-4 transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="w-full sm:w-auto px-6 py-4 border border-zinc-800 bg-transparent text-zinc-400 font-bold text-xs  uppercase italic tracking-widest hover:border-white hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="View professional history"
          >
            MY EXPERIENCE
          </button>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `,
        }}
      />
    </div>
  );
};

export default Hero;
