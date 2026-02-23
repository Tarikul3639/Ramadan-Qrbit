import React from "react";
import { LanternIcon } from "@/components/ui/LanternIcon";
import { Clock, User, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="z-50 w-full h-20 border-b border-white/5 backdrop-blur-xl flex items-center justify-between px-6 md:px-12 transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="relative">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500"></div>

          {/* Lantern Container */}
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 shadow-2xl group-hover:border-primary/50 transition-all duration-500">
            <LanternIcon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] animate-pulse" />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg md:text-xl font-serif font-bold tracking-[0.15em] text-white leading-tight uppercase">
            Ramadan <span className="text-primary">Orbit</span>
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-3 bg-primary/40"></div>
            <p className="text-[6px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-slate-400 font-medium group-hover:text-primary transition-colors">
              Sanctuary of Faith
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Time Display - Modern & Sleek */}
        <div className="flex flex-col items-end group">
          {/* Top Label: Lebih kecil & tracking luas untuk kesan mewah */}
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] text-primary/80 font-bold">
              Local Time
            </span>
            <div className="h-[1px] w-4 bg-primary/30 group-hover:w-8 transition-all duration-500"></div>
          </div>

          {/* Time: Fokus ke angka dengan icon yang minimalis */}
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-lg font-medium text-yellow-50 tracking-[0.1em] font-mono leading-none">
              16:14<span className="text-primary/50">:</span>02
            </span>

            {/* Penanda AM/PM Kecil */}
            <span className="text-[8px] md:text-[10px] font-bold text-primary/80 uppercase self-end mb-[1px]">
              PM
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
