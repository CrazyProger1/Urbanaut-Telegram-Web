import React from "react";
import { Block } from "@/components/common/blocks";

interface RowProps {
  name: string;
  value: string;
}

const Row = ({ name, value }: RowProps) => (
  <div className="flex flex-row">
    <div className="font-bold">{name}:</div>
    <div className="pl-1 cursor-pointer">{value}</div>
  </div>
);
const AboutSection = () => {
  return (
    <div className="flex flex-col font-primary text-text">
      <Block name="Stats">
        <Row name="Karma" value="0" />
        <Row name="Experience" value="0" />
      </Block>
      <div className="mt-4" />
      <Block name="Statistics">
        <Row name="Reports" value="0" />
        <Row name="Visits" value="0" />
      </Block>
    </div>
  );
};

export default AboutSection;
