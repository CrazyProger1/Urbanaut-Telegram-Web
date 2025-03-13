import React from "react";

interface Props {
  children: React.ReactNode;
}

const ItemTitle = ({ children }: Props) => {
  return <div className="font-primary text-text font-bold">{children}</div>;
};

export default ItemTitle;
