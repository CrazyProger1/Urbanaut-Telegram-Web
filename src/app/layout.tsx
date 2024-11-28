import React from "react";

import type { Metadata } from "next";

import "@/styles";
import { APP, DESCRIPTION } from "@/constants/app";
import Providers from "@/components/providers/providers";
import Header from "@/components/layout/headers/Header";
import SwipeWrapper from "@/components/layout/SwipeWrapper";
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
      <ThemedBody className="mx-4 flex min-h-screen flex-col">
        <Header />
        <SwipeWrapper className="my-4 flex-1 flex h-full flex-col">
          {children}
        </SwipeWrapper>
        <Footer />
      </ThemedBody>
    </Providers>
  </html>
);

export default RootLayout;
