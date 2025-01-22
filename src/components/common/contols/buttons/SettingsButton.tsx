"use client";

import React from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ICONS } from "@/constants/media";
import { LINKS } from "@/constants/nav";
import { backButton } from "@telegram-apps/sdk-react";

const SettingsButton = () => {
  const pathname = usePathname();
  const isOpened = pathname === LINKS.settings;
  const router = useRouter();

  const handleToggle = () => {
    if (isOpened) {
      router.back();
      backButton.isVisible() && backButton.hide();
    } else router.push(LINKS.settings);
  };

  return (
    <>
      <motion.img
        className="size-12 ml-auto cursor-pointer"
        src={ICONS.settings}
        alt="settings-icon"
        animate={{ rotate: isOpened ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        onTap={handleToggle}
      />
    </>
  );
};

export default SettingsButton;
