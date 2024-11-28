import React from "react";

interface UnavailablePageProps {
  icon: string;
  href?: string;
}

const UnavailablePage = ({ icon, href }: UnavailablePageProps) => (
  <div className="relative h-full w-full flex-1 flex items-center justify-center rounded-2xl">
    <div className="absolute inset-0 bg-secondary blur-sm rounded-2xl h-full"></div>
    <img src={icon} className="relative z-10 size-14" alt="reason-image"></img>
  </div>
);

export default UnavailablePage;
