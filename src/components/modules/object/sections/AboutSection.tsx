import React from "react";
import { AbandonedObject } from "@/types/objects";
import { Tab, TabbedView } from "@/components/common/views";

import { DescriptionTab, StatsTab } from "@/components/modules/object/tabs";

interface Props {
  object: AbandonedObject;
}

const AboutSection = ({ object }: Props) => {
  return (
    <TabbedView activeTab="desciption">
      <Tab name="desciption">
        <DescriptionTab object={object} />
      </Tab>
      <Tab name="stats">
        <StatsTab object={object} />
      </Tab>
    </TabbedView>
  );
};

export default AboutSection;
