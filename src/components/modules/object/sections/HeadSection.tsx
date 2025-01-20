import React from "react";
import { AbandonedObject } from "@/types/objects";
import TabBar from "@/components/modules/object/bars/TabBar";

interface Props {
  object: AbandonedObject;
  activeTab: string;
}

const HeadSection = ({ object, activeTab }: Props) => {
  const TABS = [
    {
      key: "description",
      text: "description",
      href: `/objects/${object.id}?tab=description`,
    },
    {
      key: "stats",
      text: "stats",
      href: `/objects/${object.id}?tab=stats`,
    },
  ];
  return (
    <div>
      <TabBar activeTab={activeTab} tabs={TABS} />
    </div>
  );
};

export default HeadSection;
