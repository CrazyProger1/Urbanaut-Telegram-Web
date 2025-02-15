import React from "react";

interface Props {
  children: React.ReactNode;
  name?: string;
}

const Block = ({ name, children }: Props) => (
  <div className="flex flex-col bg-foreground w-full p-4 rounded-2xl shadow-volume-frame">
    {name && (
      <div className="font-bold text-text text-xl text-center mb-2">{name}</div>
    )}
    {children}
  </div>
);

export default Block;
