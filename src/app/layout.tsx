import React from "react";

import type { Metadata } from "next";
import "./globals.scss";
import { APP, DESCRIPTION } from "@/constants/app";
import Providers from "@/components/providers/providers";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: APP,
  description: DESCRIPTION,
  applicationName: APP,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <Providers>
      <PageWrapper>{children}</PageWrapper>
    </Providers>
  </html>
);

export default RootLayout;
