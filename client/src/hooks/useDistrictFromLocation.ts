"use client";

import { useEffect, useState } from "react";
import { useUserLocation } from "@/hooks/useUserLocation";

interface LocationInfo {
  state_district: string | null;
  county: string | null;
  state: string | null;
  country_code: string | null;
}

export function useDistrictFromLocation() {
  const { latitude, longitude, loading: mapLoading } = useUserLocation();

  const [locationInfo, setLocationInfo] = useState<LocationInfo>({
    state_district: null,
    county: null,
    state: null,
    country_code: null,
  });

  const [loading, setLoading] = useState(true); // Start with true

  useEffect(() => {
    // Waiting for map hook
    if (mapLoading || latitude == null || longitude == null) {
      setLoading(true);
      return;
    }

    const fetchDistrict = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
        );
        const data = await res.json();

        setLocationInfo({
          state_district: data?.address?.state_district
            ? data.address.state_district.split(" ").slice(0, -1).join(" ")
            : "dhaka", // fallback
          county: data?.address?.county ?? null,
          state: data?.address?.state ?? null,
          country_code: data?.address?.country_code ?? "bd", // fallback
        });
      } catch (err) {
        console.error("District fetch error:", err);
        setLocationInfo({
          state_district: "dhaka",
          county: null,
          state: null,
          country_code: "bd",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDistrict();
  }, [latitude, longitude, mapLoading]);

  return { ...locationInfo, loading };
}
