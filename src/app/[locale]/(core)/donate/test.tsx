"use client";

import { SendTransactionRequest } from "@tonconnect/ui";
import { TonConnectButton, useTonConnectUI } from "@/telegram/ui-react";

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

const Donate = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  // setOptions({ buttonRootId });
  return (
    <div>
      <div className="mt-36" />
      <input
        type="number"
        className="bg-[#2B241D] text-text border border-selection rounded-2xl p-2 w-full placeholder-text shadow-volume-frame"
        placeholder="Enter amount..."
      />
      <button
        className="p-4 bg-[#2B241D] shadow-volume-frame text-center text-lg font-primary text-text rounded-2xl border border-selection w-full mt-4"
        onClick={() => tonConnectUI.openModal()}
      >
        Connect Wallet 💸
      </button>
      <div
        className="p-4 bg-[#2B241D] shadow-volume-frame text-center text-lg font-primary text-text rounded-2xl border border-selection mt-4"
        onClick={() => tonConnectUI.sendTransaction(transaction)}
      >
        Donate ❤️
      </div>
    </div>
  );
};

export default Donate;
