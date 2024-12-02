import React from "react";

import type { Metadata } from "next";

import "@/styles";
import { APP, DESCRIPTION } from "@/constants/app";
import { SwipeWrapper, ThemedBodyWrapper } from "@/components/layout/wrappers";
import { Footer } from "@/components/layout/footers";
import { Header } from "@/components/layout/headers";

export const metadata: Metadata = {
  title: APP,
  description: DESCRIPTION,
  applicationName: APP,
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <ThemedBodyWrapper className="mx-4 flex flex-col min-h-screen">
      <Header />
      <SwipeWrapper className="my-4 flex-1 flex flex-col h-full">
        {children}
      </SwipeWrapper>
      <Footer />
    </ThemedBodyWrapper>
  </html>
);

export default RootLayout;
