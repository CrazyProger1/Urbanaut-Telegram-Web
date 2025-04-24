"use client";
import React, { Suspense, useState } from "react";

import { ModalPortal } from "@/components/common/modals";
import { Block } from "@/components/common/blocks";
import { SendTransactionRequest } from "@tonconnect/ui";
import { useTonConnectUI, useTonWallet } from "@/telegram/ui-react";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";
import { TON_WALLET } from "@/config/pay";

const buttonRootId = "ton-connect-button";

const DonateModal = () => {
  const wallet = useTonWallet();
  const [amount, setAmount] = useState<number | undefined>(undefined);

  const [tonConnectUI, setOptions] = useTonConnectUI();

  const handleConnectWallet = (e: React.MouseEvent) => {
    tonConnectUI.openModal();
  };

  const handleSendTransactionClick = (e: React.MouseEvent) => {
    if (!amount || amount <= 0) return;

    const transaction: SendTransactionRequest = {
      validUntil: Date.now() + 5 * 60 * 1000,
      messages: [
        {
          address: TON_WALLET,
          amount: amount.toString(),
        },
      ],
    };

    tonConnectUI.sendTransaction(transaction);
  };

  return (
    <Suspense fallback={null}>
      <ModalPortal query="donate">
        <Block
          title="Donate"
          blockClassName="lg:w-1/4 sm:w-2/4"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            value={amount}
            type="number"
            className="bg-background text-text text-center p-2 w-full placeholder-text focus:outline-none focus:ring-0 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
            placeholder="Enter amount..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value ? Number(e.target.value) : undefined)
            }
          />
          <BlockButton
            icon={ICONS.WALLET}
            text="Connect Wallet"
            onClick={handleConnectWallet}
            disable={wallet !== null}
          />
          <BlockButton
            className="rounded-b-2xl"
            text="Donate"
            icon={ICONS.GIFT}
            onClick={handleSendTransactionClick}
          />
        </Block>
      </ModalPortal>
    </Suspense>
  );
};

export default DonateModal;
