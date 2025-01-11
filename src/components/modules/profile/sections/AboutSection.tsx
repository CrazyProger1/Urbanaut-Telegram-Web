"use client";
import React from "react";
import { useLocation } from "@/hooks/location";

const LocationComponent: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location && (
        <div className="text-amber-700">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

const AboutSection = () => {
  return (
    <div>
      <LocationComponent />
    </div>
  );
};

export default AboutSection;
