export interface DayType {
  day: number;
  date_iso: string;
  date_display: string;
  sehri: string;
  fajr: string;
  iftar: string;
}

export interface RamadanDataType {
  [district: string]: DayType[];
}
