
import * as React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-emerald-500 font-black italic uppercase tracking-tighter text-xl mb-1">JOTHIVASAN.</span>
          <span className="text-[10px] text-zinc-600 font-black italic uppercase tracking-[0.2em]">CRAFTING THE FUTURE © {year}</span>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col text-center md:text-right">
            <span className="text-[10px] text-zinc-700 font-black italic uppercase tracking-widest mb-2">BUILT WITH</span>
            <span className="text-xs text-zinc-400 font-black italic uppercase tracking-widest">REACT / TYPESCRIPT / TAILWIND</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
