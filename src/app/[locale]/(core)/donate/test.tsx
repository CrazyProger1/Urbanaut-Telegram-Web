"use client";

import { SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react";

const transaction: SendTransactionRequest = {
  validUntil: Date.now() + 5 * 60 * 1000,
  messages: [
    {
      address: "0QD-SuoCHsCL2pIZfE8IAKsjc0aDpDUQAoo-ALHl2mje04A-",
      amount: "20000000",
    },
  ],
};

const Donate = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  return (
    <div>
      <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
        Send transaction
      </button>
    </div>
  );
};

export default Donate;
