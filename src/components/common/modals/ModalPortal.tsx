"use client";

import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        onClick={onClose}
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    portalElement,
  );
};

export default ModalPortal;
