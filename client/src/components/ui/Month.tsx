"use client";
import { MapPin, CircleCheck } from "lucide-react";
import { DisplayDayType } from "@/hooks/useRamadanData";

//Tabs
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Tabs from "@/components/ui/Tabs";

const formatTimeWithPeriod = (timeStr?: string) => {
  if (!timeStr) return { time: "--:--", period: "" };
  const [hour, minute] = timeStr.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute, 0);

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formatted = date.toLocaleTimeString("en-US", options); // "4:25 AM"
  const [time, period] = formatted.split(" ");
  // console.log(time, period);
  return { time, period };
};

interface MonthType {
  days: DisplayDayType[];
}

export const Month = (days: MonthType) => {
  const [activeTab, setActiveTab] = useState("full_calendar");
  const tabs = [
    { id: "full_calendar", label: "FULL CALENDAR" },
    { id: "short_calender", label: "SUHOOR & IFTAR" },
  ];
  const todayRef = useRef<HTMLTableRowElement>(null);
  // const [highlight, setHighlight] = useState(false);
  const scrollToToday = () => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      // setHighlight(true);
      // setTimeout(() => setHighlight(false), 2000); // 2 seconds highlight
    }
  };
  return (
    <div className="w-full mx-auto mt-6 px-2 sm:px-4 relative group">
      <div className="relative flex flex-col w-full rounded-2xl border border-white/10 bg-white/2 backdrop-blur-2xl p-2 sm:p-8 shadow-sm">
        <div className="p-3 sm:pb-6">
          {/* Header */}
          <header className="flex flex-wrap justify-between items-end gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary">
                <MapPin className="size-3 sm:size-3.5 mb-0.5" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                  London, United Kingdom
                </span>
              </div>
              <h1 className="text-slate-100 text-lg md:text-2xl font-black leading-tight">
                Ramadan 1445 AH Schedule
              </h1>
              <p className="text-primary/70 text-xs sm:text-sm font-serif">
                Spiritual timings and daily fast tracker for your city.
              </p>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <button
                onClick={scrollToToday}
                className="flex items-center gap-1.5 sm:gap-2 rounded-lg h-10 px-4 sm:px-6 bg-primary/10 border border-primary/30 text-primary text-[10px] sm:text-xs font-bold hover:bg-primary/20 transition-all active:scale-98"
              >
                <MapPin className="size-3 sm:size-3" />
                Jump to Today
              </button>
            </div>
          </header>

          {/* Tabs */}
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        </div>

        {/* Calender */}
        <div className="w-full max-h-100 overflow-y-auto overflow-x-auto rounded-xl border border-primary/30">
          <table
            className={`${activeTab == "short_calender" ? "min-w-60" : "min-w-120"} w-full text-center`}
          >
            <thead className="sticky top-0 z-20 bg-background">
              <tr className="bg-primary/10">
                <th className="px-2 sm:px-4 py-3 sm:py-5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest border-b border-primary/20">
                  Ramadan
                </th>
                <th
                  className={`${activeTab == "short_calender" && "hidden"} px-2 sm:px-4 py-3 sm:py-5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest border-b border-primary/20`}
                >
                  Date
                </th>
                <th className="table-cell px-2 sm:px-4 py-3 sm:py-5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest border-b border-primary/20">
                  Suhoor (Sehri)
                </th>
                <th
                  className={
                    activeTab == "short_calender"
                      ? "hidden"
                      : "table-cell px-2 sm:px-4 py-3 sm:py-5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest border-b border-primary/20"
                  }
                >
                  Fajr (Fajr)
                </th>
                <th className="table-cell px-2 sm:px-4 py-3 sm:py-5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest border-b border-primary/20">
                  Iftar (Maghrib)
                </th>
                <th
                  className={`${activeTab == "short_calender" && "hidden"} px-2 sm:px-4 py-3 sm:py-5 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest border-b border-primary/20`}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {days.days.map((d, index) => {
                const isToday =
                  new Date().toDateString() ===
                  new Date(d.date_iso).toDateString();
                const status = d.status;

                return (
                  <motion.tr
                    key={index}
                    ref={isToday ? todayRef : null}
                    className={`transition-colors duration-200 hover:bg-primary/5 ${
                      isToday ? "bg-primary/10" : ""
                    }`}
                  >
                    {/* Day Column */}
                    <td className="px-2 sm:px-4 py-2 sm:py-3">
                      <span
                        className={`style-font text-[10px] sm:text-xs ${isToday ? "text-primary" : "text-white/40"}`}
                      >
                        {String(d.day).padStart(2, "0")}
                      </span>
                    </td>

                    {/* Date Column */}
                    <td
                      className={`${activeTab == "short_calender" && "hidden"} px-2 sm:px-4 py-2 sm:py-3`}
                    >
                      <div className="flex flex-col">
                        <span className="style-font text-[10px] sm:text-sm font-medium text-white/90">
                          {new Date(d.date_iso).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                        <span className="text-[10px] sm:text-xs text-white/50 tracking-[1.1] pt-1">
                          {new Date(d.date_iso).toLocaleDateString("en-GB", {
                            weekday: "long",
                          })}
                        </span>
                      </div>
                    </td>

                    {/* Sehri Column */}
                    <td className="table-cell px-2 sm:px-4 py-2 sm:py-3">
                      <span className="style-font text-[10px] sm:text-sm font-semibold text-white/80 tracking-wider">
                        {d.sehri}{" "}
                        <span className="text-[8px] sm:text-[10px] text-primary/60">
                          {formatTimeWithPeriod(d?.sehri).period}
                        </span>
                      </span>
                    </td>

                    {/* Fajr Column */}
                    <td
                      className={
                        activeTab == "short_calender"
                          ? "hidden"
                          : "table-cell px-2 sm:px-4 py-2 sm:py-3"
                      }
                    >
                      <span className="style-font text-[10px] sm:text-sm font-semibold text-white/80 tracking-wider">
                        {d.fajr}{" "}
                        <span className="text-[8px] sm:text-[10px] text-primary/60">
                          {formatTimeWithPeriod(d?.fajr).period}
                        </span>
                      </span>
                    </td>

                    {/* Iftar Column */}
                    <td className="table-cell px-2 sm:px-4 py-2 sm:py-3">
                      <span className="style-font text-[10px] sm:text-sm font-semibold text-primary tracking-wider">
                        {formatTimeWithPeriod(d?.iftar).time}{" "}
                        <span className="text-[8px] sm:text-[10px] opacity-60">
                          {formatTimeWithPeriod(d?.iftar).period}
                        </span>
                      </span>
                    </td>

                    {/* Status Column */}
                    <td
                      className={`${activeTab == "short_calender" && "hidden"} px-2 sm:px-4 py-2 sm:py-3 `}
                    >
                      {status === "past" && (
                        <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-slate-800 text-slate-500 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider">
                          <CircleCheck className="size-2 sm:size-3" />
                          <span className="pt-0.5">Done</span>
                        </span>
                      )}
                      {status === "today" && (
                        <span className="inline-flex items-center gap-1 px-2 sm:px-4 py-1 rounded-full bg-primary text-background-dark text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest animate-pulse text-center pb-px">
                          Today
                        </span>
                      )}
                      {(status === "upcoming" || status === "tomorrow") && (
                        <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                          Soon
                        </span>
                      )}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
