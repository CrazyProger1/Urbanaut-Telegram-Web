"use client";
import React, { Suspense, useState } from "react";
import { z } from "zod";

import { ModalPortal } from "@/components/common/modals";
import { Block } from "@/components/common/blocks";
import { SendTransactionRequest } from "@tonconnect/ui";
import { useTonConnectUI, useTonWallet } from "@/telegram/ui-react";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";
import { TON_WALLET } from "@/config/pay";

const amountSchema = z
  .number({ required_error: "Enter amount..." })
  .positive("Amount must be greater than 0");

const DonateModal = () => {
  const wallet = useTonWallet();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const [tonConnectUI] = useTonConnectUI();

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 300); // reset after animation
  };

  const handleConnectWallet = () => {
    tonConnectUI.openModal();
  };

  const handleSendTransactionClick = () => {
    const result = amountSchema.safeParse(amount);

    if (!result.success) {
      setError(result.error.errors[0].message);
      setAmount(undefined);
      triggerShake();
      return;
    }

    setError(null);

    const transaction: SendTransactionRequest = {
      validUntil: Date.now() + 5 * 60 * 1000,
      messages: [
        {
          address: TON_WALLET,
          amount: amount!.toString(),
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
            value={amount ?? ""}
            type="number"
            className={`bg-background text-text text-center p-2 w-full placeholder-text focus:outline-none focus:ring-0 appearance-none
              [&::-webkit-outer-spin-button]:appearance-none
              [&::-webkit-inner-spin-button]:appearance-none
              [-moz-appearance:textfield]
              ${error ? "border border-red-500 placeholder-red-500" : ""}
              ${shake ? "animate-shake" : ""}`}
            placeholder={error || "Enter amount..."}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAmount(e.target.value ? Number(e.target.value) : undefined);
              setError(null);
            }}
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
