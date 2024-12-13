"use client";
import React, { useState } from "react";
import { ModalPortal } from "@/components/modals";
import {CategoryModal, DifficultyModal} from "@/components/modals/searches";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>Open modal</button>
      <ModalPortal show={visible} onClose={() => setVisible(false)}>
        {/*<DifficultyModal />*/}
        <CategoryModal />
      </ModalPortal>
    </div>
  );
};

export default AboutSection;
