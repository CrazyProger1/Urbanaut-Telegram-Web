import React from "react";
import { AbandonedObject } from "@/types/objects";
import { Tab, TabbedView } from "@/components/common/views";

import { DescriptionTab, StatsTab } from "@/components/modules/object/tabs";
import TabBar from "@/components/modules/object/bars/TabBar";

interface Props {
  activeTab: string;
  object: AbandonedObject;
}

const AboutSection = ({ object, activeTab }: Props) => {
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
    <div className="flex flex-col">
      <TabBar activeTab={activeTab} tabs={TABS} />
      <TabbedView activeTab={activeTab}>
        <Tab name="desciption">
          <DescriptionTab object={object} />
        </Tab>
        <Tab name="stats">
          <StatsTab object={object} />
        </Tab>
      </TabbedView>
    </div>
  );
};

export default AboutSection;
