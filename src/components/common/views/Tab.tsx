import React from "react";

interface Props {
  name: string;
  children: React.ReactNode;
}

const Tab = ({ children, name }: Props) => {
  return <>{children}</>;
};

export default Tab;
