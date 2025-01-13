import React from "react";

import type { Metadata } from "next";

import "@/styles";
import { APP, DESCRIPTION } from "@/constants/app";
import {
  SwipeNavigationWrapper,
  ThemedBodyWrapper,
} from "@/components/common/wrappers";
import { Footer } from "@/components/modules/layout/footers";
import { Header } from "@/components/modules/layout/headers";
import { IgnorePagesWrapper } from "@/components/common/wrappers";
import { FOOTER_PAGES, LINKS } from "@/constants/nav";
import {
  ModalProvider,
  ToastProvider,
  TMAProvider,
} from "@/components/common/wrappers/providers";

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
        <TMAProvider>
          <ToastProvider>
            <ModalProvider>
              <IgnorePagesWrapper pages={[LINKS.profile]}>
                <Header />
              </IgnorePagesWrapper>
              <SwipeNavigationWrapper
                pages={FOOTER_PAGES}
                className="my-4 flex-1 flex flex-col h-full"
              >
                {children}
              </SwipeNavigationWrapper>
              <Footer />
            </ModalProvider>
          </ToastProvider>
        </TMAProvider>
      </ThemedBodyWrapper>
    </html>
  );
};

export default RootLayout;
