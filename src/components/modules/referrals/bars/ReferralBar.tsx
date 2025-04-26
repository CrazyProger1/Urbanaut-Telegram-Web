import React from "react";
import { Block } from "@/components/common/blocks";
import { ReferralLink } from "@/types/referrals";
import { ShareIcon } from "@/components/common/icons";
import { ShareWrapper } from "@/components/common/telegram";

interface Props {
  links: ReferralLink[];
}
const ReferralBar = ({ links }: Props) => {
  if (links.length === 0) return null;

  const link = links[0];

  return (
    <Block className="py-2 px-4 flex flex-row justify-between items-center">
      <div>@{link.code}</div>
      <ShareWrapper link={link.link}>
        <ShareIcon />
      </ShareWrapper>
    </Block>
  );
};

export default ReferralBar;
