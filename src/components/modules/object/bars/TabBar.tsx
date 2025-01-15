import React from "react";
import TabLink from "./TabLink";

type Tab = {
  key: string;
  text: string;
  href: string;
};

interface Props {
  activeTab: string;
  tabs: Tab[];
}

const TabBar = ({ activeTab, tabs }: Props) => {
  return (
    <div className="flex flex-row bg-foreground first:rounded-l-2xl last:rounded-r-2xl">
      {tabs.map(({ text, href, key }) => (
        <TabLink key={key} text={text} href={href} active={key === activeTab} />
      ))}
    </div>
  );
};

export default TabBar;
