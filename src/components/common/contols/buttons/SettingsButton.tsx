"use client";

import React from "react";

import { motion } from "framer-motion";
import { ICONS } from "@/constants/media";
import { LINKS } from "@/constants/nav";
import { backButton } from "@telegram-apps/sdk-react";
import { usePathname, useRouter } from "@/i18n/routing";

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
        src={ICONS.SETTINGS}
        alt="settings-icon"
        animate={{ rotate: isOpened ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        onTap={handleToggle}
      />
    </>
  );
};

export default SettingsButton;
