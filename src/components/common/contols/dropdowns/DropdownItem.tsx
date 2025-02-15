import React from "react";

interface Props {
  children: React.ReactNode;
}

const DropdownItem = ({ children }: Props) => {
  return (
    <div className="p-2 flex hover:bg-selection cursor-pointer hover:underline w-full items-start last:rounded-b-2xl">
      {children}
    </div>
  );
};

export default DropdownItem;
