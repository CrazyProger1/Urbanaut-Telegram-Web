"use client";

import React from "react";

import { motion } from "framer-motion";

import { backButton } from "@telegram-apps/sdk-react";
import { usePathname, useRouter } from "@/i18n/routing";
import { ICONS } from "@/config/media";
import { PAGES } from "@/config/pages";

const SettingsButton = () => {
  const pathname = usePathname();
  const isOpened = pathname === PAGES.SETTINGS;
  const router = useRouter();

  const handleToggle = () => {
    if (isOpened) {
      router.back();
      backButton.isVisible() && backButton.hide();
    } else router.push(PAGES.SETTINGS);
  };

  return (
    <motion.img
      className="size-12 ml-auto cursor-pointer drop-shadow-volume"
      src={ICONS.SETTINGS}
      alt="settings-icon"
      animate={{ rotate: isOpened ? 360 : 0 }}
      transition={{ duration: 0.5 }}
      onTap={handleToggle}
    />
  );
};

export default SettingsButton;
