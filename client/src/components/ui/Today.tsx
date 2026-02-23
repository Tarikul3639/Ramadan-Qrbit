import React from "react";
import { Sunrise, Sunset, MoonStar } from "lucide-react";

export const Today = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 relative group">
      {/* Background Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>

      <div className="relative flex flex-col w-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-6 md:p-8 shadow-2xl">
        
        {/* Header Section */}
        <div className="flex justify-between items-end w-full mb-8 border-b border-white/5 pb-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white">
              Today's <span className="text-primary">Schedule</span>
            </h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium">
              Spiritual Timing
            </p>
          </div>
          
          <div className="px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 flex flex-col items-center">
            <span className="text-[10px] md:text-xs font-serif font-bold text-primary tracking-widest">6 RAMADAN</span>
            <span className="text-[7px] text-slate-400 tracking-[0.2em] font-bold uppercase">1447 AH</span>
          </div>
        </div>

        {/* Times Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 w-full">
          
          {/* Sahur / Sheri */}
          <div className="relative overflow-hidden flex flex-col p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-500 group/card">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <MoonStar size={18} />
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Sahur</span>
            </div>
            <div className="text-2xl md:text-3xl font-serif font-medium text-white tracking-wider">
              04:15 <span className="text-xs text-slate-500">AM</span>
            </div>
            {/* Decoration line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary/40 group-hover/card:w-full transition-all duration-700"></div>
          </div>

          {/* Fajr */}
          <div className="relative overflow-hidden flex flex-col p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-500 group/card">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Sunrise size={18} />
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Fajr</span>
            </div>
            <div className="text-2xl md:text-3xl font-serif font-medium text-white tracking-wider">
              04:45 <span className="text-xs text-slate-500">AM</span>
            </div>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary/40 group-hover/card:w-full transition-all duration-700"></div>
          </div>

          {/* Iftar */}
          <div className="relative overflow-hidden flex flex-col p-5 rounded-xl bg-primary/[0.03] border border-primary/10 hover:border-primary/50 transition-all duration-500 group/card">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                <Sunset size={18} />
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70 font-bold">Iftar</span>
            </div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wider">
              06:30 <span className="text-xs text-slate-500">PM</span>
            </div>
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-primary/40"></div>
          </div>

        </div>
      </div>
    </div>
  );
};