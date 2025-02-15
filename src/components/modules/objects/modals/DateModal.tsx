import { ModalPortal } from "@/components/common/modals";
import { ModalTitle } from "@/components/common/typography/titles";
import { Dropdown, DropdownItem } from "@/components/common/contols/dropdowns";

interface Props {
  show: boolean;
  onClose?: () => void;
}

const DateModal = ({ show, onClose }: Props) => {
  return (
    <ModalPortal show={show} onClose={() => (onClose ? onClose() : null)}>
      <div
        className="flex flex-col  bg-background shadow-volume-frame py-2 px-4 rounded-2xl select-none"
        onClick={(ev) => ev.stopPropagation()}
      >
        <ModalTitle>Date</ModalTitle>

        <div className="text-text text-center px-1 py-2">
          <div className="rounded-2xl shadow-volume-frame bg-foreground flex flex-col">
            <div className="flex flex-row">
              <div className="p-2 bg-selection rounded-tl-2xl border border-selection-border">
                added at
              </div>
              <div className="p-2">built at</div>
              <div className="p-2">abandoned at</div>
            </div>
            <div>Body</div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default DateModal;
