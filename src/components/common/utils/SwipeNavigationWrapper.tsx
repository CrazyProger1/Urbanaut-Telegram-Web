import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const SwipeNavigationWrapper = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

export default SwipeNavigationWrapper;
