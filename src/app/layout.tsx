import React from "react";

import type { Metadata } from "next";
import "./globals.scss";
import { APP, DESCRIPTION } from "@/constants/app";
import Providers from "@/components/providers/providers";
import Header from "@/components/layout/headers/Header";
import SwapWrapper from "@/components/layout/SwapWrapper";
import Footer from "@/components/layout/footers/Footer";
import ThemedBody from "@/components/layout/ThemedBody";

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
      <ThemedBody className="mx-4">
        <Header />
        <SwapWrapper>{children}</SwapWrapper>
        <Footer />
      </ThemedBody>
    </Providers>
  </html>
);

export default RootLayout;
