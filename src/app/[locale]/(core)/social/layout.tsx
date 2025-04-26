import React from "react";
import { NavigationBar } from "@/components/modules/social/bars";

interface Props {
  children?: React.ReactNode;
}

const SocialLayout = async ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center px-4">
      <NavigationBar />
      <div>{children}</div>
    </div>
  );
};

export default SocialLayout;
