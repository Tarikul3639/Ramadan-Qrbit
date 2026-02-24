import React from "react";
import { Sunrise, Sunset, MoonStar } from "lucide-react";
import { DisplayDayType } from "@/hooks/useRamadanData";

const formatTimeWithPeriod = (timeStr?: string) => {
  if (!timeStr) return { time: "--:--", period: "" };
  const [hour, minute] = timeStr.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute, 0);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formatted = date.toLocaleTimeString("en-US", options); // "4:25 AM"
  const [time, period] = formatted.split(" ");
  // console.log(time, period);
  return { time, period };
};

interface TodayProps {
  today: DisplayDayType | null;
}

export const Today = ({ today }: TodayProps) => {
  return (
    <div className="w-full mx-auto mt-6 px-2 sm:px-4 relative group">
      {/* Background Glow Effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-transparent blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>

      <div className="relative flex flex-col w-full rounded-2xl border border-white/10 bg-white/2 backdrop-blur-2xl p-5 sm:p-8 shadow-sm">
        {/* Header Section */}
        <div className="flex justify-between items-center w-full mb-6 border-b border-white/5 pb-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg md:text-2xl font-serif font-bold tracking-tight text-white">
              Today's <span className="text-primary">Schedule</span>
            </h3>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium">
              Spiritual Timing
            </p>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 flex flex-col items-center min-w-20">
            <span className="text-[10px] md:text-xs font-serif font-bold text-primary tracking-widest">
              <span>{today?.day}</span> RAMADAN
            </span>
            <span className="text-[7px] text-slate-400 tracking-[0.2em] font-bold uppercase">
              1447 AH
            </span>
          </div>
        </div>

        {/* Times Grid - Responsive Columns */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 md:gap-6 w-full">
          {/* Sahur / Sheri */}
          <div className="relative overflow-hidden flex flex-col items-center sm:items-start justify-between sm:justify-start p-4 rounded-xl bg-white/3 border border-white/5 hover:border-primary/30 transition-all duration-500 group/card">
            <div className="flex items-center gap-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <MoonStar size={16} className="size-3 sm:size-4" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                Sahur
              </span>
            </div>
            <div className="text-xl md:text-3xl font-serif font-medium text-white tracking-wider">
              {formatTimeWithPeriod(today?.sehri).time}{" "}
              <span className="text-[10px] md:text-xs text-slate-500">
                {formatTimeWithPeriod(today?.sehri).period}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary/40 group-hover/card:w-full transition-all duration-700"></div>
          </div>

          {/* Fajr */}
          <div className="relative overflow-hidden flex flex-col items-center sm:items-start justify-between sm:justify-start p-4 rounded-xl bg-white/3 border border-white/5 hover:border-primary/30 transition-all duration-500 group/card">
            <div className="flex items-center gap-3 sm:mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Sunrise className="size-3 sm:size-4" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                Fajr
              </span>
            </div>
            <div className="text-xl md:text-3xl font-serif font-medium text-white tracking-wider">
              {formatTimeWithPeriod(today?.fajr).time}{" "}
              <span className="text-[10px] md:text-xs text-slate-500">
                {formatTimeWithPeriod(today?.fajr).period}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary/40 group-hover/card:w-full transition-all duration-700"></div>
          </div>

          {/* Iftar */}
          <div className="relative overflow-hidden flex flex-col items-center sm:items-start justify-between sm:justify-start p-4 rounded-xl bg-primary/3 border border-primary/10 hover:border-primary/50 transition-all duration-500 group/card">
            <div className="flex items-center gap-3 mb-2 sm:mb-4">
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                <Sunset size={16} className="size-3 sm:size-4" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70 font-bold">
                Iftar
              </span>
            </div>
            <div className="text-xl md:text-3xl font-serif font-bold text-white tracking-wider">
              {formatTimeWithPeriod(today?.iftar).time}{" "}
              <span className="text-[10px] md:text-xs text-slate-500">
                {formatTimeWithPeriod(today?.iftar).period}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-primary/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
