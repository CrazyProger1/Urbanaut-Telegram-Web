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
  return (
    <div className="flex flex-col">
      <TabbedView activeTab={activeTab}>
        <Tab name="description">
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
