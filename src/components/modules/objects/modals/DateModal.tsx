import React from "react";
import { ModalPortal } from "@/components/common/modals";
import { ModalTitle } from "@/components/common/typography/titles";

interface Props {
  show: boolean;
  onClose?: () => void;
}

const DateModal = ({ show, onClose }: Props) => {
  return (
    <ModalPortal show={show} onClose={() => (onClose ? onClose() : null)}>
      <div
        className="flex flex-col w-52 bg-background shadow-volume-frame py-2 px-4 rounded-2xl select-none"
        onClick={(ev) => ev.stopPropagation()}
      >
        <ModalTitle>Date</ModalTitle>

        <div className="text-text text-center">
          <p className="font-medium font-primary">
            Sorting by abandoned time and creation time
          </p>
        </div>
      </div>
    </ModalPortal>
  );
};

export default DateModal;
