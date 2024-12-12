import React from "react";

import type { Metadata } from "next";

import "@/styles";
import { APP, DESCRIPTION } from "@/constants/app";
import { SwipeWrapper, ThemedBodyWrapper } from "@/components/layout/wrappers";
import { Footer } from "@/components/layout/footers";
import { Header } from "@/components/layout/headers";
import { IgnorePagesWrapper } from "@/components/wrappers";
import { LINKS } from "@/constants/nav";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: APP,
  description: DESCRIPTION,
  applicationName: APP,
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <ThemedBodyWrapper className="mx-4 flex flex-col min-h-screen">
        <Providers>
          <div id="myportal"/>
          <IgnorePagesWrapper pages={[LINKS.profile]}>
            <Header />
          </IgnorePagesWrapper>
          <SwipeWrapper className="my-4 flex-1 flex flex-col h-full">
            {children}
          </SwipeWrapper>
          <Footer />
        </Providers>
      </ThemedBodyWrapper>
    </html>
  );
};

export default RootLayout;
