"use client";

import React, { Suspense, useState } from "react";
import { z } from "zod";
import { useTranslations } from "next-intl";

import { ModalPortal } from "@/components/common/modals";
import { Block, BlockButton } from "@/components/common/blocks";
import { SendTransactionRequest } from "@tonconnect/ui";
import { useTonConnectUI, useTonWallet } from "@/telegram/ui-react";
import { ICONS } from "@/config/media";
import { TON_WALLET } from "@/config/pay";
import { HorizontalDivider } from "@/components/common/dividers";
import { ShakableInput } from "@/components/common/inputs";
import { MODAL_KEYS } from "@/config/params";

const amountSchema = z.number().positive();

const DonateModal = () => {
  const t = useTranslations("DonateModal");

  const wallet = useTonWallet();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [shaking, setShaking] = useState<boolean>(false);
  const [tonConnectUI] = useTonConnectUI();

  const handleConnectWallet = () => {
    tonConnectUI.openModal();
  };

  const handleSendTransactionClick = () => {
    const result = amountSchema.safeParse(amount);

    if (!result.success) {
      setShaking(true);
      setTimeout(() => setShaking(false), 300);
      return;
    }

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
      <ModalPortal query={MODAL_KEYS.DONATE}>
        <Block
          title={t("title")}
          blockClassName="lg:w-1/4 sm:w-2/4"
          onClick={(e) => e.stopPropagation()}
        >
          <HorizontalDivider />
          <ShakableInput
            value={amount}
            placeholder={t("placeholder")}
            type="number"
            onChange={(e) => {
              setAmount(e.target.value ? Number(e.target.value) : undefined);
            }}
            shaking={shaking}
            className={`border ${shaking ? "border-variant-danger" : "border-transparent"}`}
          />
          <HorizontalDivider />
          <BlockButton
            icon={ICONS.WALLET}
            content={t("connectWallet")}
            onClick={handleConnectWallet}
            disable={wallet !== null}
          />
          <HorizontalDivider />
          <BlockButton
            className="rounded-b-2xl"
            content={t("donate")}
            icon={ICONS.GIFT}
            onClick={handleSendTransactionClick}
          />
        </Block>
      </ModalPortal>
    </Suspense>
  );
};

export default DonateModal;
