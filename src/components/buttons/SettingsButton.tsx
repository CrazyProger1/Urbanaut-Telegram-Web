"use client";

import React from "react";
import { motion } from "framer-motion";
import { ICONS } from "@/constants/media";
import { LINKS } from "@/constants/nav";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SettingsButton = () => {
  const params = useSearchParams();
  const prevPage = params.get("prev");
  const pathname = usePathname();
  const isOpened = pathname === LINKS.settings;
  const router = useRouter();
  const handleToggle = () => {
    if (isOpened && prevPage) router.push(prevPage);
    else if (isOpened && !prevPage) router.push("/");
    else router.push(LINKS.settings + "?prev=" + pathname);
  };

  return (
    <motion.img
      className="size-12 ml-auto cursor-pointer"
      src={ICONS.settings}
      alt="settings-icon"
      animate={{ rotate: isOpened ? 360 : 0 }}
      transition={{ duration: 0.5 }}
      onTap={handleToggle}
    />
  );
};

export default SettingsButton;
