import * as React from "react";
import { useState, useEffect } from "react";

const Logo = () => (
  <svg
    width="40"
    height="46"
    viewBox="0 0 55 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="48" r="15" fill="#D9D9D9" />
    <path
      d="M34 10.5C34 4.70101 38.701 0 44.5 0C50.299 0 55 4.70101 55 10.5V42C55 53.598 45.598 63 34 63V10.5Z"
      fill="#1DCD9F"
    />
  </svg>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 0; // Sections now have proper pt-24 padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const linkClass =
    "text-[11px] md:text-xs font-black italic tracking-[0.2em] text-zinc-400 hover:text-white transition-colors duration-300 uppercase cursor-pointer";
  const mobileLinkClass =
    "text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer text-left";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[130] transition-all duration-500 ${
          scrolled ? "py-4" : "py-8"
        } ${
          scrolled && !isMenuOpen
            ? "bg-black/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left Side: About and Work */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group lg:hidden flex flex-col gap-1.5 p-2 -ml-2 transition-all duration-300 z-[140]"
              aria-label="Toggle Menu"
            >
              <div
                className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
              />
              <div
                className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-4 group-hover:w-6"}`}
              />
              <div
                className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}
              />
            </button>
            <div className="hidden lg:flex items-center gap-8 lg:ml-36">
              <button
                onClick={(e) => scrollToSection(e, "about")}
                className={linkClass}
              >
                About
              </button>
              <button
                onClick={(e) => scrollToSection(e, "projects")}
                className={linkClass}
              >
                Work
              </button>
              <button
                onClick={() =>
                  window.open("/Jothivasan-Frontend-Developer.pdf", "_blank")
                }
                className="text-[10px] font-black italic tracking-widest text-white border border-zinc-800 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
              >
                RESUME
              </button>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <button
              onClick={(e) => scrollToSection(e, "hero")}
              aria-label="Back to top"
            >
              <Logo />
            </button>
          </div>

          {/* Right Side: Experience, Contact and Hire Button */}
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={(e) => scrollToSection(e, "experience")}
                className={linkClass}
              >
                Experience
              </button>
              <button
                onClick={(e) => scrollToSection(e, "contact")}
                className={linkClass}
              >
                Contact
              </button>
            </div>
            <button
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-[10px] font-black italic tracking-widest text-white border border-zinc-800 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
            >
              HIRE ME
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[120] bg-black transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="h-full w-full overflow-y-auto flex flex-col px-8 md:px-24 pt-32 pb-12">
          <div className="text-zinc-500 text-[10px] font-black italic tracking-[0.5em] mb-10 border-l border-zinc-900 pl-4">
            NAVIGATION
          </div>

          <div className="flex flex-col gap-4 mb-20">
            <button
              onClick={(e) => scrollToSection(e, "hero")}
              className={mobileLinkClass}
            >
              Home
            </button>
            <button
              onClick={(e) => scrollToSection(e, "about")}
              className={mobileLinkClass}
            >
              About
            </button>
            <button
              onClick={(e) => scrollToSection(e, "projects")}
              className={mobileLinkClass}
            >
              Work
            </button>
            <button
              onClick={(e) => scrollToSection(e, "experience")}
              className={mobileLinkClass}
            >
              Experience
            </button>
            <button
              onClick={(e) => scrollToSection(e, "contact")}
              className={mobileLinkClass}
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => {
              setIsMenuOpen(false);
              window.open("/Jothivasan-Frontend-Developer.pdf", "_blank");
            }}
            className="text-[10px] font-black italic tracking-widest text-white border border-zinc-800 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap w-full sm:w-auto"
          >
            RESUME
          </button>

          <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-900 pt-12">
            <div>
              <div className="text-zinc-600 text-[10px] font-black italic tracking-widest mb-6">
                SOCIALS
              </div>
              <div className="flex flex-wrap gap-8 text-[11px] font-black italic text-zinc-400">
                <a
                  href="https://linkedin.com/in/jothivasan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors tracking-widest"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://github.com/jothivasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors tracking-widest"
                >
                  GITHUB
                </a>
                <a
                  href="https://leetcode.com/u/Jothi_vasan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors tracking-widest"
                >
                  LEETCODE
                </a>
                <a
                  href="mailto:jothivasan2001@gmail.com"
                  className="hover:text-white transition-colors tracking-widest"
                >
                  EMAIL
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-zinc-800 text-[10px] font-black italic tracking-widest mb-6 uppercase">
                Legal
              </div>
              <p className="text-zinc-700 text-[10px] font-bold">
                © 2026 JOTHIVASAN. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
