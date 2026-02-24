"use client";

import { ramadan as data } from "@/data/Ramadan";
import { DayType } from "@/types/RamadanData";
import { useMemo } from "react";

export interface DisplayDayType extends DayType {
  status: "past" | "today" | "upcoming";
}

export function useRamadanData(district: string) {
  return useMemo(() => {
    const districtData = data[district] || [];
    const todayISO = new Date().toISOString().split("T")[0];

    const enrichedData: DisplayDayType[] = districtData.map((item) => {
      let status: "past" | "today" | "upcoming" = "upcoming";

      if (item.date_iso < todayISO) status = "past";
      if (item.date_iso === todayISO) status = "today";

      return { ...item, status };
    });

    return {
      days: enrichedData,
      today: enrichedData.find((d) => d.status == "today") || null,
    };
  }, [data]);
}
