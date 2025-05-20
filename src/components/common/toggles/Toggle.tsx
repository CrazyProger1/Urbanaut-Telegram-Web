import React, { ChangeEventHandler } from "react";

interface Props {
  enabled?: boolean;
  onToggle?: ChangeEventHandler<HTMLInputElement>;
}
const Toggle = ({ onToggle, enabled }: Props) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={enabled}
        onChange={onToggle}
      />
      <div className="relative w-11 h-6 bg-background peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-text  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-background" />
    </label>
  );
};

export default Toggle;
