"use client";
import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const shakeVariants = {
  shake: {
    x: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.3 },
  },
};

interface Props {
  placeholder?: string;
  className?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  shaking?: boolean;
  type?: HTMLInputTypeAttribute;
}
const ShakableInput = ({
  placeholder,
  className,
  value,
  onChange,
  shaking,
  type,
}: Props) => {
  const combinedClassNames = clsx(
    className,
    "bg-background text-text text-center p-2 w-full placeholder-text focus:outline-none focus:ring-0 appearance-none",
    "[&::-webkit-outer-spin-button]:appearance-none",
    "[&::-webkit-inner-spin-button]:appearance-none",
    " [-moz-appearance:textfield]",
  );
  return (
    <motion.input
      animate={shaking ? "shake" : ""}
      variants={shakeVariants}
      value={value}
      type={type}
      className={combinedClassNames}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default ShakableInput;
