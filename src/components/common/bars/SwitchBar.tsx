import React from "react";
import SwitchBarItem from "./SwitchBarItem";
import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: string;
}
const SwitchBar = ({ children, className }: Props) => {
  const combinedClassName = clsx(
    "w-full bg-foreground rounded-2xl shadow-volume font-primary flex flex-row justify-evenly",
    className,
  );
  return <div className={combinedClassName}>{children}</div>;
};

SwitchBar.Item = SwitchBarItem;

export default SwitchBar;
