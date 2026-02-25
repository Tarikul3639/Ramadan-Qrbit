"use client";

import { ramadan as data } from "@/data/Ramadan";
import { DayType } from "@/types/RamadanData";
import { useMemo } from "react";

export interface DisplayDayType extends DayType {
  status: "past" | "today" | "tomorrow" | "upcoming";
}

export function useRamadanData(district: string) {
  return useMemo(() => {
    const districtData = data[district] || data['dhaka'];

    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const enrichedData: DisplayDayType[] = districtData.map((item) => {
      const itemDate = new Date(item.date_iso);
      itemDate.setHours(0, 0, 0, 0);

      let status: DisplayDayType["status"] = "upcoming";

      if (itemDate < today) status = "past";
      else if (itemDate.getTime() === today.getTime()) status = "today";
      else if (itemDate.getTime() === tomorrow.getTime()) status = "tomorrow";

      return { ...item, status };
    });

    const todayData = enrichedData.find((d) => d.status === "today") ?? null;

    const tomorrowData =
      enrichedData.find((d) => d.status === "tomorrow") ?? null;

    return {
      days: enrichedData,
      today: todayData,
      tomorrow: tomorrowData,
    };
  }, [district]);
}
