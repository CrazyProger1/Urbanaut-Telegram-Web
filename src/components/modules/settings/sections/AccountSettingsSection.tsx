import React from "react";
import { Block } from "@/components/common/blocks";

const AccountSettingsSection = () => {
  return (
    <Block name="Account">
      <div className="p-4 text-text font-primary text-lg mt-4 bg-[#2B241D] shadow-volume-frame text-center border border-selection rounded-2xl hover:bg-selection">
        Delete Account 🛑
      </div>
    </Block>
  );
};

export default AccountSettingsSection;
