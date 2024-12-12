"use client";

import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";

interface Props {
  show: boolean;
  children: React.ReactNode;
  onClose?: React.MouseEventHandler;
}

const ModalPortal = ({ show, children, onClose }: Props) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("modal-container"));
  }, []);

  if (!portalElement || !show) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {children}
    </div>,
    portalElement,
  );
};

export default ModalPortal;
