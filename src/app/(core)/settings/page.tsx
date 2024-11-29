import React from "react";

const Modal = () => {
  return (
    <div className="relative h-full w-full flex-1 flex items-center justify-center rounded-2xl">
      <div className="absolute inset-0 bg-secondary blur-sm rounded-2xl h-full"></div>
    </div>
  );
};

export default Modal;
