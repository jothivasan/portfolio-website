import * as React from "react";
import { useEffect, useState } from "react";

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Calculate years of experience dynamically (calendar months like LinkedIn)
  const calculateExperience = () => {
    const startDate = new Date("2024-08-01"); // Your start date (August 2024)
    const currentDate = new Date();
    
    // Calculate total months difference (LinkedIn style)
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff + 1; // +1 to include current month
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    // Format like "1.5+" for display
    if (years === 0) {
      return `${months}m`;
    } else if (months === 0) {
      return `${years}`;
    } else {
      // Return as decimal for cleaner display (e.g., 1.5+)
      return `${years}.${Math.round((months / 12) * 10)}`;
    }
  };

  const yearsOfExperience = calculateExperience();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#050505]">
      {/* Background Parallax Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 ">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-px h-full bg-zinc-900" />
            <div className="pl-2 md:pl-6">
              <span className="text-[10px] font-black italic tracking-[0.6em] text-zinc-600 uppercase mb-4 block">
                IDENTITY_MANIFESTO
              </span>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.85] text-white">
                Architected <br />
                <span className="text-zinc-800">Clarity</span>
              </h2>
            </div>
          </div>
          <div className="hidden lg:block text-right group/location cursor-pointer">
            <span className="text-[9px] font-black italic text-zinc-800 tracking-widest uppercase mb-2 block">
              COORDINATES
            </span>
            <div className="relative h-5 flex items-center justify-end">
              <span className="text-xs font-bold text-zinc-500 tabular-nums transition-all duration-300 group-hover/location:-translate-y-5 group-hover/location:opacity-0">
                12.9716° N, 80.2454° E
              </span>
              <span className="absolute right-0 text-xs font-bold text-zinc-500 uppercase italic tracking-wider translate-y-5 opacity-0 transition-all duration-300 group-hover/location:translate-y-0 group-hover/location:opacity-100">
                CHENNAI, TAMILNADU
              </span>
            </div>
          </div>
        </div>

        {/* Blueprint Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-zinc-900">
          {/* Vertical Marquee Sidebar */}
          <div className="hidden lg:flex lg:col-span-1 border-r border-zinc-900 py-12 items-center justify-center overflow-hidden"></div>

          {/* Main Content Cell */}
          <div className="lg:col-span-7 border-r border-zinc-900 p-8 md:p-16 lg:p-24 relative overflow-hidden group">
            {/* Corner Decorative Markers */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-zinc-800 group-hover:border-white transition-colors duration-500" />
            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-zinc-800" />

            <div className="relative z-10">
              <div className="text-[9px] font-black text-zinc-700 uppercase tracking-widest mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-900" />
                PRIMARY_OBJECTIVE
              </div>

              <p className="text-lg md:text-2xl text-zinc-300 font-medium leading-relaxed italic mb-12">
                I am Jothivasan a Frontend Developer driven by the pursuit of
                digital excellence. My approach is rooted in the belief that
                software should not only function{" "}
                <span className="text-white">flawlessly</span> but also evoke a
                sense of <span className="text-white">precision</span> and
                purpose.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-zinc-900">
                <div>
                  <h4 className="text-[10px] font-black italic text-zinc-600 uppercase tracking-widest mb-4">
                    METHODOLOGY
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Specializing in the React ecosystem, I bridge the gap
                    between complex backend architectures and intuitive user
                    interfaces.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black italic text-zinc-600 uppercase tracking-widest mb-4">
                    EXECUTION
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    My work is defined by clean code, performance-first logic,
                    and an obsessive attention to microscopic detail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Info Cells */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Cell 1: Experience Snapshot */}
            <div className="border-b border-zinc-900 p-8 md:p-12 bg-zinc-950/30 backdrop-blur-sm group hover:bg-zinc-950 transition-colors duration-500">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black italic text-zinc-700 uppercase tracking-widest">
                  EXP_LOG
                </span>
                <div className="w-1.5 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black italic text-white leading-none">
                  {yearsOfExperience}
                </span>
                <span className="text-sm font-black italic text-zinc-700 uppercase">
                  +YEARS
                </span>
              </div>
              <p className="mt-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                PROFESSIONAL_TRAJECTORY
              </p>
            </div>

            {/* Cell 2: Core Philosophy */}
            <div className="flex-1 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                  <path
                    d="M50 5V95M5 50H95"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              <div className="space-y-10">
                {[
                  {
                    label: "VISION",
                    content: "Architecture designed for scalability.",
                  },
                  {
                    label: "SYSTEM",
                    content: "Design systems that speak code.",
                  },
                  {
                    label: "SPEED",
                    content: "Optimization without compromise.",
                  },
                ].map((item, i) => (
                  <div key={i} className="group/item cursor-pointer">
                    <div className="text-[9px] font-black text-white group-hover/item:text-emerald-500 uppercase tracking-[0.4em] mb-3 group-hover/item:translate-x-2 transition-all duration-300 flex items-center gap-3">
                      <span className="w-1 h-1 bg-zinc-800 group-hover/item:bg-emerald-500" />
                      {item.label}
                    </div>
                    <p className="text-xs text-zinc-500 group-hover/item:text-zinc-400 pl-4 border-l border-zinc-900 group-hover/item:border-emerald-500/30 transition-all duration-300">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Blueprint Line */}
        <div className="flex items-center justify-between border-t border-zinc-900 py-6"></div>
      </div>
    </div>
  );
};

export default About;
