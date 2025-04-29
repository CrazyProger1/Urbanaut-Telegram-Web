import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

interface Props {
  object: AbandonedObject;
}

const LocationExpand = async ({ object }: Props) => {
  const t = await getTranslations("LocationExpand");
  const lat = object?.location?.point?.latitude;
  const lng = object?.location?.point?.longitude;

  if (!lat || !lng) {
    return <div className="p-2 text-center">{t("unknown")}</div>;
  }

  const shortLat = lat?.toFixed(4);
  const shortLng = lng?.toFixed(4);

  const coordinates = `${shortLat}, ${shortLng}`;

  return (
    <Link
      className="p-2 text-center underline"
      href={`https://maps.google.com/?q=${lat},${lng}`}
    >
      {coordinates}
    </Link>
  );
};

export default LocationExpand;
