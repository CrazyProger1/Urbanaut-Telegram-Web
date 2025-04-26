import React from "react";
import SwitchBarItem from "./SwitchBarItem";

interface Props {
  children: React.ReactNode;
}
const SwitchBar = ({ children }: Props) => {
  return (
    <div className="w-full bg-foreground rounded-2xl shadow-volume font-primary flex flex-row justify-evenly">
      {children}
    </div>
  );
};

SwitchBar.Item = SwitchBarItem;

export default SwitchBar;
