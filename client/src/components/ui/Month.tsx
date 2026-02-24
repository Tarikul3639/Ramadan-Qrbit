"use client";
import { MapPin, CircleCheck } from "lucide-react";

//Tabs
import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("calendar");

  const tabs = [
    { id: "calendar", label: "FULL CALENDAR" },
    { id: "iftar", label: "SUHOOR & IFTAR" },
    { id: "dua", label: "DUA RECITATION" },
  ];

  return (
    <LayoutGroup>
      <div className="relative flex border-b border-primary/20 gap-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative flex flex-col items-center justify-center pb-2.5 pt-2 cursor-pointer"
          >
            <p
              className={`text-[10px] sm:text-xs font-bold tracking-wider transition-colors ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </p>

            {/* Animated Underline */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-0.5 sm:-bottom-0.75 left-0 right-0 h-0.5 sm:h-0.75 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
}

export const Month = () => {
  return (
    <div className="w-full mx-auto mt-6 px-2 sm:px-4 relative group">
      <div className="relative flex flex-col w-full rounded-2xl border border-white/10 bg-white/2 backdrop-blur-2xl p-5 sm:p-8 shadow-sm">
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
            <button className="flex items-center gap-1.5 sm:gap-2 rounded-lg h-10 px-4 sm:px-6 bg-primary/10 border border-primary/30 text-primary text-[10px] sm:text-xs font-bold hover:bg-primary/20 transition-all active:scale-98">
              <MapPin className="size-3 sm:size-3" />
              Jump to Today
            </button>
          </div>
        </header>

        {/* Tabs */}
        <Tabs />

        {/* Calender */}
        <div className="w-full rounded-xl overflow-hidden border border-primary/30">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary/10">
                <th className="px-6 py-5 text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20">
                  Ramadan
                </th>
                <th className="px-6 py-5 text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20">
                  Date
                </th>
                <th className="px-6 py-5 text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20">
                  Suhoor (Sehri)
                </th>
                <th className="px-6 py-5 text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20">
                  Iftar (Maghrib)
                </th>
                <th className="px-6 py-5 text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {/* <!-- Row: Past --> */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-6 text-slate-400 text-sm font-medium">
                  Day 1
                </td>
                <td className="px-6 py-6 text-slate-400 text-sm">
                  March 11, 2024
                </td>
                <td className="px-6 py-6 text-slate-400 text-sm font-mono">
                  05:12 AM
                </td>
                <td className="px-6 py-6 text-slate-400 text-sm font-mono">
                  06:45 PM
                </td>
                <td className="px-6 py-6 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-500 text-[10px] font-semibold uppercase tracking-wider">
                    <CircleCheck className="size-2 sm:size-3" />
                    Done
                  </span>
                </td>
              </tr>
              {/* <!-- Row: Active (Current Day) --> */}
              <tr className="bg-primary/20 ring-1 ring-inset ring-primary/50 relative overflow-hidden group">
                <td className="px-6 py-8 text-slate-100 text-base font-bold">
                  Day 2
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                </td>
                <td className="px-6 py-8 text-slate-100 text-base font-medium">
                  March 12, 2024
                </td>
                <td className="px-6 py-8 text-primary text-lg font-bold font-mono">
                  05:10 AM
                </td>
                <td className="px-6 py-8 text-primary text-lg font-bold font-mono">
                  06:46 PM
                </td>
                <td className="px-6 py-8 text-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-background-dark text-xs font-black uppercase tracking-widest animate-pulse">
                    Today
                  </span>
                </td>
              </tr>
              {/* <!-- Row: Upcoming --> */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-6 text-slate-300 text-sm font-medium">
                  Day 3
                </td>
                <td className="px-6 py-6 text-slate-300 text-sm">
                  March 13, 2024
                </td>
                <td className="px-6 py-6 text-slate-300 text-sm font-mono">
                  05:08 AM
                </td>
                <td className="px-6 py-6 text-primary text-sm font-mono">
                  06:47 PM
                </td>
                <td className="px-6 py-6 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    Soon
                  </span>
                </td>
              </tr>
              {/* <!-- Row: Upcoming --> */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-6 text-slate-300 text-sm font-medium">
                  Day 4
                </td>
                <td className="px-6 py-6 text-slate-300 text-sm">
                  March 14, 2024
                </td>
                <td className="px-6 py-6 text-slate-300 text-sm font-mono">
                  05:07 AM
                </td>
                <td className="px-6 py-6 text-primary text-sm font-mono">
                  06:48 PM
                </td>
                <td className="px-6 py-6 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    Soon
                  </span>
                </td>
              </tr>
              {/* <!-- Row: Upcoming --> */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-6 text-slate-300 text-sm font-medium">
                  Day 5
                </td>
                <td className="px-6 py-6 text-slate-300 text-sm">
                  March 15, 2024
                </td>
                <td className="px-6 py-6 text-slate-300 text-sm font-mono">
                  05:05 AM
                </td>
                <td className="px-6 py-6 text-primary text-sm font-mono">
                  06:49 PM
                </td>
                <td className="px-6 py-6 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    Soon
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
