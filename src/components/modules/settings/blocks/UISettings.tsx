import React from "react";
import Block from "@/components/common/blocks/Block";
import { Toggle } from "@/components/common/contorls";

const UISettings = () => {
  return (
    <Block className="flex flex-row gap-4 p-2 pl-4 pb-8" title="UI">
      <Toggle />
      Animations
    </Block>
  );
};

export default UISettings;
