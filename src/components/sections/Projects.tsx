import * as React from "react";
import { useState, useEffect } from "react";
import { PROJECTS } from "../../data";
import { Project } from "../../types";

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-black/5">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-10">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-px h-full bg-zinc-900" />
            <div className="pl-2 md:pl-6">
              <div className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.5em] mb-4">
                WORKS THAT WORK
              </div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-[0.01em] leading-[0.8] text-white">
                ENGINEERED <br /> <span className="text-zinc-700">IMPACT</span>
              </h2>
            </div>
          </div>
          <p className="max-w-xs text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed italic md:border-l border-zinc-900 md:pl-6">
            Transforming ideas into production-ready applications.
          </p>
        </div>

        {/* Static Grid Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start min-h-[600px]">
          {/* =========================================
              LEFT COLUMN - CONTENT (~60%) 
             ========================================= */}
          <div className="lg:col-span-7 relative z-10 flex flex-col justify-center min-h-[500px]">
            {PROJECTS.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={project.id}
                  className={`transition-all duration-700 ease-out absolute inset-0 lg:relative lg:inset-auto ${
                    isActive
                      ? "opacity-100 translate-x-0 z-10 relative"
                      : "opacity-0 -translate-x-8 z-0 absolute pointer-events-none"
                  }`}
                  style={{ display: isActive ? "block" : "none" }} // Ensure pure DOM removal for layout stability if needed, or rely on absolute
                >
                  {/* Reuse the content structure */}
                  <div className={isActive ? "block" : "hidden"}>
                    {/* Header */}
                    <div className="mb-10 space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-px bg-zinc-800"></span>
                        <span className="text-[10px] font-black italic uppercase tracking-widest text-zinc-600">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <h3 className="text-xl md:text-2xl lg:text-4xl font-black italic uppercase tracking-tight text-white leading-[0.9]">
                          {project.title}
                        </h3>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 group/link flex-shrink-0"
                          aria-label={`Visit ${project.title}`}
                        >
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/link:rotate-45"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>

                      <p className="text-zinc-400 text-base md:text-sm leading-relaxed max-w-xl font-medium border-l-2 border-zinc-800 pl-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 border-t border-zinc-900 pt-8">
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.2em] mb-4">
                            MY ROLE
                          </h4>
                          <p className="text-white text-sm font-bold uppercase tracking-wide">
                            {project.role}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.2em] mb-4">
                            TECHNOLOGY STACK
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-bold tracking-wider text-zinc-400 bg-zinc-900/50 px-3 py-1.5 rounded border border-zinc-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:block">
                        <h4 className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.2em] mb-4">
                          KEY HIGHLIGHTS
                        </h4>
                        <ul className="space-y-4">
                          {project.responsibilities
                            .slice(0, 3)
                            .map((item, idx) => (
                              <li key={idx} className="flex gap-4 group">
                                <span className="text-emerald-500 mt-1 text-xs">
                                  ❖
                                </span>
                                <span className="text-zinc-400 text-xs leading-relaxed font-medium">
                                  {item}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================
              RIGHT COLUMN - IMAGE & NAV (~40%) 
             ========================================= */}
          <div className="lg:col-span-5 relative h-full flex flex-col justify-start lg:sticky lg:top-24">
            {/* Website Preview Image Container */}
            <div className="relative group w-full perspective-1000 mb-12">
              <div className="relative z-20 aspect-[16/10] bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,1)]">
                {/* Window Controls */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-950/80 backdrop-blur-sm border-b border-white/5 flex items-center px-3 gap-1.5 z-20">
                  <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                </div>

                {/* Stacked Images for Crossfade */}
                <div className="relative w-full h-full bg-[#050505] pt-6">
                  {PROJECTS.map((project, index) => (
                    <img
                      key={project.id}
                      src={project.image}
                      alt={`${project.title} Preview`}
                      width={800}
                      height={500}
                      decoding="async"
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "low"}
                      className={`absolute inset-0 w-full h-full object-contain object-top pt-6 transition-opacity duration-700 ease-in-out ${
                        index === activeIndex
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none z-20"></div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-800/10 to-transparent -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between border-t border-zinc-900 pt-6">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black italic text-white tabular-nums">
                  0{activeIndex + 1}
                </span>
                <span className="text-sm font-medium text-zinc-700">/</span>
                <span className="text-sm font-medium text-zinc-600 tabular-nums">
                  0{PROJECTS.length}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevProject}
                  className="w-12 h-12 flex items-center justify-center border border-zinc-800 text-zinc-500 hover:text-white hover:border-emerald-500 hover:bg-zinc-900 transition-all duration-300 rounded-full group/nav"
                  aria-label="Previous Project"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover/nav:-translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 19l-7-7m0 0l7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextProject}
                  className="w-12 h-12 flex items-center justify-center border border-zinc-800 text-zinc-500 hover:text-white hover:border-emerald-500 hover:bg-zinc-900 transition-all duration-300 rounded-full group/nav"
                  aria-label="Next Project"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover/nav:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 5l7 7m0 0l-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
