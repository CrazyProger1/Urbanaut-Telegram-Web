import React from "react";

interface Props {
  children: React.ReactNode;
  activeTab: string;
}

const TabbedView = ({ children, activeTab }: Props) => {
  const activeChild = React.Children.toArray(children).find((child) => {
    return React.isValidElement(child) && child.props.name === activeTab;
  });

  return <>{activeChild ? activeChild : "no active child"}</>;
};

export default TabbedView;
