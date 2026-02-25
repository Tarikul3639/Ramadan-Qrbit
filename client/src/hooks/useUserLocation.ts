"use client";

import { useState, useEffect } from "react";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  loading: boolean;
  error: string | null;
}

export function useUserLocation() {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocation({
        latitude: null,
        longitude: null,
        loading: false,
        error: "Geolocation not supported",
      });
      return;
    }

    const successHandler = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        loading: false,
        error: null,
      });
    };

    const errorHandler = (error: GeolocationPositionError) => {
      setLocation({
        latitude: null,
        longitude: null,
        loading: false,
        error: error.message,
      });
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
  }, []);

  return location;
}
