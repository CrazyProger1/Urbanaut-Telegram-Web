import React from "react";
import { Block } from "@/components/common/blocks";
import { Link } from "@/i18n/routing";
import { LINKS } from "@/constants/nav";

const AboutSection = () => {
  return (
    <Block name="About">
      <div className="flex flex-col  rounded-2xl text-text font-primary">
        <Link
          href={LINKS.about}
          className="p-4 bg-[#2B241D] text-lg text-center shadow-volume-frame border border-selection rounded-2xl hover:bg-selection"
        >
          About Us 🔎
        </Link>
        <Link
          href={LINKS.support}
          className="p-4 mt-4 bg-[#2B241D] text-lg shadow-volume-frame text-center border border-selection rounded-2xl hover:bg-selection"
        >
          Support 🆘
        </Link>
        <Link
          href={LINKS.donate}
          className="p-4 mt-4 bg-[#2B241D] text-lg shadow-volume-frame text-center border border-selection rounded-2xl hover:bg-selection"
        >
          Donate ❤️
        </Link>
      </div>
    </Block>
  );
};

export default AboutSection;
