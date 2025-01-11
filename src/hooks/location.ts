"use client";
import { useEffect, useState } from "react";
import { Location } from "@/types/common";

export const useLocation = (): Location | undefined => {
  const [location, setLocation] = useState<Location | undefined>(undefined);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      },
    );
  }, []);

  return location;
};
