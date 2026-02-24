"use client";

import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { OrbitCountdown } from "@/components/ui/OrbitCountdown";
import { Today } from "@/components/ui/Today";
import { Month } from "@/components/ui/Month";
import { ArrowRight, BookOpenText } from "lucide-react";
import { useRamadanData } from "@/hooks/useRamadanData";

export default function Home() {
  const district = "dhaka";
  const { days, today } = useRamadanData(district);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      {/* -------Background Image------- */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%27M40%200l20%2020-20%2020-20-20L40%200zm0%2080l20-20-20-20-20%2020%2020%2080zM0%2040l20-20%2020%2020-20%2020L0%2040zm80%2040l-20-15-20%2015%2020%2015%2020-15z%27%20fill%3D%27%23D4AF37%27%20fill-opacity%3D%270.02%27%20fill-rule%3D%27evenodd%27/%3E%3C/svg%3E')] bg-no-repeat bg-center bg-cover pointer-events-none" />
      <div className="w-full mx-auto max-w-5xl">
        <Navbar />
      </div>
      <div className="flex flex-col w-full items-center justify-center mt-12 mb-8 p-4">
        <OrbitCountdown today={today} />

        {/* Date */}
        <div className="mt-4 sm:mt-8 md:mt-10 lg:mt-16 text-center space-y-2 sm:space-y-4">
          <h2 className="font-serif text-base sm:text-lg md:text-xl font-light tracking-[0.2em] text-white">
            {today?.day} RAMADAN 1447
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/40"></div>
            <p className="text-[8px] sm:text-xs uppercase tracking-[0.5em] text-primary font-bold">
              {today?.date_iso
                ? new Date(today.date_iso).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : ""}
            </p>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-primary/40"></div>
          </div>
        </div>
      </div>
      {/* -------Today------- */}
      <div className="w-full max-w-5xl">
        <Today today={today} />
      </div>
      {/* -------Monthly Calender----------- */}
      <div className="w-full max-w-5xl">
        <Month />
      </div>
      {/* ------- Featured Card for Daily Dua ------- */}
      <div className="w-full max-w-5xl px-2 sm:px-4 relative group">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-secondary/40 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <BookOpenText className="size-4 sm:size-5" />
              </div>
              <h3 className="text-slate-100 font-bold text-lg">
                Daily Dua (Iftar)
              </h3>
            </div>
            <p className="text-slate-300 italic text-base leading-relaxed">
              "Allahumma laka sumtu wa bika aamantu wa 'ala rizqika aftartu."
            </p>
            <p className="text-primary/60 text-sm italic">
              O Allah! I fasted for You and I believe in You and I break my fast
              with Your sustenance.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 rounded-xl bg-primary p-6 text-secondary">
            <div>
              <p className="text-sm font-black uppercase tracking-widest opacity-70">
                Current Phase
              </p>
              <h3 className="text-2xl font-black">Fasting in Progress</h3>
              <p className="text-sm font-medium mt-1">
                Next prayer: Asr at 03:45 PM
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-lg h-10 px-6 bg-secondary text-primary text-sm font-bold shadow-lg hover:opacity-90 transition-all">
              View Prayer Times
              <ArrowRight className="size-3 sm:size-4" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
