"use client";

import { BookOpenText, ArrowRight } from "lucide-react";

interface FeaturedCardProps {
  duaText?: string;
  duaTrans?: string;
  currentPhase?: string;
  nextPrayer?: string;
}

export const FeaturedCard = ({
  duaText = "Allahumma laka sumtu wa bika aamantu wa 'ala rizqika aftartu.",
  duaTrans = "O Allah! I fasted for You and I believe in You and I break my fast with Your sustenance.",
  currentPhase = "Fasting in Progress",
  nextPrayer = "Asr at 03:45 PM",
}: FeaturedCardProps) => {
  return (
    <div className="w-full max-w-5xl px-2 sm:px-4 relative group">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Dua Card */}
        <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-secondary/40 p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <BookOpenText className="size-4 sm:size-5" />
            </div>
            <h3 className="text-slate-100 font-bold text-lg">Daily Dua (Iftar)</h3>
          </div>
          <p className="text-slate-300 italic text-base leading-relaxed">{duaText}</p>
          <p className="text-primary/60 text-sm italic">{duaTrans}</p>
        </div>

        {/* Current Phase Card */}
        <div className="flex flex-col items-start justify-center gap-4 rounded-xl bg-primary p-6 text-secondary">
          <div>
            <p className="text-sm font-black uppercase tracking-widest opacity-70">
              Current Phase
            </p>
            <h3 className="text-2xl font-black">{currentPhase}</h3>
            <p className="text-sm font-medium mt-1">Next prayer: {nextPrayer}</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg h-10 px-6 bg-secondary text-primary text-sm font-bold shadow-lg hover:opacity-90 transition-all">
            View Prayer Times
            <ArrowRight className="size-3 sm:size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};