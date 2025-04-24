"use client";
import React from "react";

import { ModalPortal } from "@/components/common/modals";
import { Block } from "@/components/common/blocks";
import { SendTransactionRequest } from "@tonconnect/ui";
import { useTonConnectUI } from "@/telegram/ui-react";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";

const buttonRootId = "ton-connect-button";

const transaction: SendTransactionRequest = {
  validUntil: Date.now() + 5 * 60 * 1000,
  messages: [
    {
      address: "UQBLKpiR56C_vTkV6GErNF61PyUgDN6YXMJrtekCd0FQaBg0",
      amount: "1",
    },
  ],
};

interface Props {
  visible?: boolean;
}

const DonateModal = ({ visible }: Props) => {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  return (
    <ModalPortal visible={visible}>
      <Block title="Donate" blockClassName="lg:w-1/4 sm:w-2/4">
        <input
          type="number"
          className="bg-background text-text text-center p-2 w-full placeholder-text focus:outline-none focus:ring-0 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
          placeholder="Enter amount..."
        />
        <BlockButton
          icon={ICONS.WALLET}
          text="Connect Wallet"
          onClick={() => tonConnectUI.openModal()}
        />
        <BlockButton
          className="rounded-b-2xl"
          text="Donate"
          icon={ICONS.GIFT}
          onClick={() => tonConnectUI.sendTransaction(transaction)}
        />
      </Block>
    </ModalPortal>
  );
};

export default DonateModal;
