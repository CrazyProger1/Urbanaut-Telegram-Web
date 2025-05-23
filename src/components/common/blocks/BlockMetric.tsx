import React from "react";
import { Tooltip } from "@/components/common/hints";

interface Props {
  text?: React.ReactNode | string;
  metric?: React.ReactNode | string;
  tooltip?: React.ReactNode | string;
}
const BlockMetric = ({ text, metric, tooltip }: Props) => {
  return (
    <Tooltip text={tooltip || metric}>
      <div className="p-2 font-primary text-text flex flex-row justify-between active:bg-selection">
        <div>{text}</div>
        <div>{metric}</div>
      </div>
    </Tooltip>
  );
};

export default BlockMetric;
