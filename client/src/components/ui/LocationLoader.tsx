"use client";

import { Loader, LocateFixed } from "lucide-react";

const LocationLoader = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary p-6">
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Glow */}
        <div className="absolute h-24 w-24 rounded-full bg-primary/5 blur-2xl animate-pulse" />

        {/* Minimalist Icon Box */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-0 rounded-2xl border border-primary/20 animate-[ping_3s_ease-in-out_infinite]" />
          <Loader
            className="h-8 w-8 animate-spin text-primary"
            strokeWidth={1.5}
          />
          <LocateFixed className="absolute h-3.5 w-3.5 text-white opacity-80" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center space-y-1">
          <h3 className="style-font text-sm font-bold tracking-[0.15em] text-white uppercase italic text-center">
            Detecting <span className="text-primary">Location</span>
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-1.5 opacity-60 text-center">
            <span className="h-0.5 w-3 rounded-full bg-primary animate-pulse" />
            <p className="style-font text-[10px] font-medium tracking-[0.2em] text-primary/80 uppercase">
              Optimizing Ramadan{" "}
              <span className="block sm:inline">Experience</span>
            </p>
            <span className="h-0.5 w-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>

        {/* Progress Line using the CSS class */}
        <div className="h-px w-20 overflow-hidden bg-white/5">
          <div className="h-full w-full bg-primary/40 animate-progress-loading" />
        </div>
      </div>
    </main>
  );
};

export default LocationLoader;
