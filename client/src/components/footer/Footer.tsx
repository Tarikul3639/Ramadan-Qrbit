import React from "react";
import { LanternIcon } from "@/components/ui/LanternIcon";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 mt-20 border-t border-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* Logo & Brand Section */}
        <div className="flex items-center gap-4 group">
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-transparent border border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40">
            <LanternIcon className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] animate-pulse" />
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-sm sm:text-base font-serif font-bold tracking-[0.25em] text-white uppercase leading-none mb-1">
              Ramadan <span className="text-primary">Orbit</span>
            </h2>
            <p className="text-[9px] tracking-[0.2em] text-slate-500 uppercase font-medium">
              Sanctuary of Faith
            </p>
          </div>
        </div>

        {/* Bottom Note & Attribution */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="h-px w-16 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-1.5 text-[9px] text-slate-500 tracking-[0.15em] uppercase">
            <span className="opacity-70">© 2026 Crafted with</span>
            <Heart size={10} className="text-primary/60 fill-primary/20 animate-bounce" style={{ animationDuration: '3s' }} />
            <span className="opacity-70">by</span>
            <a 
              href="https://tarikul-islam.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-all duration-300 hover:tracking-[0.25em] font-bold"
            >
              Tarikul Islam
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};