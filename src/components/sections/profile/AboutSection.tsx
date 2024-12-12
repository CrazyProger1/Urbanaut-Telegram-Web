"use client";
import React, { useState } from "react";
import { ModalPortal } from "@/components/modals";

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ModalPortal
        show={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="size-32 bg-foreground">TEST</div>
      </ModalPortal>

      <button className="text-text" onClick={() => setIsOpen(true)}>
        Show Modal
      </button>
    </>
  );
};

export default AboutSection;
