import React from "react";

interface Props {
  text?: string;
  size?: "sm";
}
const Badge = ({ text, size = "sm" }: Props) => {
  return (
    <div className="bg-selection px-2 rounded-lg text-sm text-text shadow-volume">
      {text}
    </div>
  );
};

export default Badge;
