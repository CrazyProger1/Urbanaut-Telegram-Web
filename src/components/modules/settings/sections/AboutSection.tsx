import React from "react";
import { Block } from "@/components/common/blocks";
import { Link } from "@/i18n/routing";
import { LINKS } from "@/constants/nav";

const AboutSection = () => {
  return (
    <Block name="About">
      <div className="flex flex-col bg-[#2B241D] rounded-2xl shadow-volume-frame text-text">
        <Link
          href={LINKS.about}
          className="p-4 text-center border-selection rounded-t-2xl hover:bg-selection"
        >
          About Us
        </Link>
        <Link
          href={LINKS.support}
          className="p-4 text-center border-t  border-selection hover:bg-selection"
        >
          Support
        </Link>
        <Link
          href={LINKS.donate}
          className="p-4 text-center border-t  border-selection rounded-b-2xl hover:bg-selection"
        >
          Donate
        </Link>
      </div>
    </Block>
  );
};

export default AboutSection;
