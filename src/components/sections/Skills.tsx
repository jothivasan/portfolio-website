import * as React from "react";
import { EXPERIENCES, SKILLS } from "../../data";

const SkillModule: React.FC<{ name: string; delay: number }> = ({
  name,
  delay,
}) => {
  return (
    <div
      className="group relative bg-zinc-950 border border-zinc-900 p-8 transition-all duration-500 hover:border-zinc-700 hover:-translate-y-1 flex items-center justify-between"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h4 className="text-xs font-black italic tracking-[0.3em] text-zinc-500 uppercase group-hover:text-white transition-colors">
        {name}
      </h4>

      <span className="text-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px]">
        ✦
      </span>

      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity">
        <div className="absolute top-2 right-2 w-px h-4 bg-white" />
        <div className="absolute top-2 right-2 h-px w-4 bg-white" />
      </div>
    </div>
  );
};

const ExperienceLog: React.FC = () => {
  return (
    <div className="space-y-12">
      {EXPERIENCES.map((exp, idx) => (
        <div
          key={exp.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 group"
        >
          <div className="md:col-span-3">
            <div className="text-[10px] font-black italic text-zinc-700 uppercase tracking-widest mb-1 group-hover:text-emerald-500 transition-colors">
              {exp.period}
            </div>
            <div className="text-[9px] font-bold text-zinc-800 uppercase tracking-[0.3em]">
              ENTRY_0{idx + 1}
            </div>
          </div>
          <div className="md:col-span-9 border-l border-zinc-900 pl-8 pb-12 last:pb-0">
            <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-[0.01em] text-white mb-1 group-hover:translate-x-2 transition-transform duration-500">
              {exp.company}
            </h3>
            <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-6 italic">
              {exp.role}
            </div>
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="text-zinc-400 text-xs leading-relaxed max-w-xl flex gap-3"
                >
                  <span className="text-zinc-800">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-px h-full bg-zinc-900" />
            <div className="pl-6">
              <div className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.5em] mb-4">
                CAPABILITIES & CHRONOLOGY
              </div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-[0.01em] leading-[0.8] text-white">
                TECHNICAL <br /> <span className="text-zinc-700">STACK</span>
              </h2>
            </div>
          </div>
          <p className="max-w-xs text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed italic md:border-l border-zinc-900 md:pl-6">
            A comprehensive overview of engineered expertise and professional
            trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 bg-zinc-950 border border-zinc-800 p-8 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-[10px] font-black italic tracking-[0.4em] text-emerald-500 uppercase mb-2">
                    PRIMARY SPECIALIZATION
                  </h4>
                  <h3 className="text-3xl sm:text-4xl font-black italic uppercase tracking-[0.01em] text-white mb-6">
                    FRONTEND ARCHITECTURE
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "JavaScript",
                      "TypeScript",
                      "Tailwind",
                      "Bootstrap",
                      "Redux",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-900 text-zinc-400 text-[9px] font-bold uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 100 100"
                    fill="none"
                    className="text-white"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M50 0V100M0 50H100"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </div>

              {SKILLS.map((skill, idx) => (
                <SkillModule
                  key={skill.name}
                  name={skill.name}
                  delay={idx * 100}
                />
              ))}

              <div className="sm:col-span-2 mt-4 p-8 border border-zinc-900 bg-zinc-950/50">
                <h4 className="text-[10px] font-black italic tracking-[0.4em] text-zinc-600 uppercase mb-8 text-center">
                  CORE_INFRASTRUCTURE
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {[
                    { label: "VERSION CONTROL", items: "GIT, GITHUB" },
                    { label: "DESIGN & PRODUCTIVITY", items: "FIGMA, JIRA" },
                    {
                      label: "DEVELOPMENT ENVIRONMENT",
                      items: "VS CODE, ANTIGRAVITY",
                    },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-[9px] font-black text-zinc-700 uppercase tracking-widest mb-2">
                        {item.label}
                      </div>
                      <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-tighter italic">
                        {item.items}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-zinc-900" />
                <span className="text-[10px] font-black italic tracking-[0.5em] text-zinc-800 uppercase">
                  CHRONOLOGY
                </span>
                <div className="h-px w-8 bg-zinc-900" />
              </div>
              <ExperienceLog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
