import "@/styles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import React from "react";
import { Metadata } from "next";
import { DESCRIPTION, APP } from "@/config/base";
import { Footer, Header, ThemedBodyWrapper } from "@/components/modules/layout";
import { TMAProvider } from "@/components/common/telegram";
import { TON_MANIFEST_URL } from "@/config/telegram";
import { ModalProvider } from "@/components/common/modals";
import {
  IgnorePagesWrapper,
  SwipeNavigationWrapper,
} from "@/components/common/utils";
import { PAGES, SWIPE_NAVIGATION_PAGES } from "@/config/pages";

export const revalidate = 60;

export const metadata: Metadata = {
  title: APP,
  description: DESCRIPTION,
  applicationName: APP,
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const RootLayout = async ({ children, params }: Props) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <ThemedBodyWrapper className="flex flex-col min-h-screen">
        <TMAProvider manifestUrl={TON_MANIFEST_URL}>
          <ModalProvider>
            <IgnorePagesWrapper pages={[PAGES.PROFILE]}>
              <Header />
            </IgnorePagesWrapper>
            <NextIntlClientProvider messages={messages}>
              <SwipeNavigationWrapper
                pages={SWIPE_NAVIGATION_PAGES}
                className="py-4 flex-1 flex flex-col h-full"
              >
                {children}
              </SwipeNavigationWrapper>
            </NextIntlClientProvider>
            <Footer />
          </ModalProvider>
        </TMAProvider>
      </ThemedBodyWrapper>
    </html>
  );
};

export default RootLayout;
