"use client";
import { MapPin } from "lucide-react";

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
    <div className="w-full max-w-4xl mx-auto mt-6 px-2 sm:px-4 relative group">
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
      </div>
    </div>
  );
};
