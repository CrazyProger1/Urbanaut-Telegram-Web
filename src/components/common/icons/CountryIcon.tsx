import React from "react";
import { ALTS, COUNTRY_ICONS } from "@/config/media";
import Image from "next/image";

interface Props {
  country: keyof typeof COUNTRY_ICONS;
}

const CountryIcon = ({ country }: Props) => {
  return (
    <Image
      src={COUNTRY_ICONS[country]}
      alt={ALTS.LANGUAGE_ICON}
      width={32}
      height={32}
    />
  );
};

export default CountryIcon;
