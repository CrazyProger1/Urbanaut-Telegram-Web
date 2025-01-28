import "@/styles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import React from "react";
import {
  ModalProvider,
  TMAProvider,
  ToastProvider,
} from "@/components/common/wrappers/providers";
import {
  IgnorePagesWrapper,
  SwipeNavigationWrapper,
  ThemedBodyWrapper,
} from "@/components/common/wrappers";
import { FOOTER_PAGES, LINKS } from "@/constants/nav";
import { Header } from "@/components/modules/layout/headers";
import { Footer } from "@/components/modules/layout/footers";
import type { Metadata } from "next";
import { APP, DESCRIPTION } from "@/constants/app";

export const metadata: Metadata = {
  title: APP,
  description: DESCRIPTION,
  applicationName: APP,
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
      <NextIntlClientProvider messages={messages}>
        <ThemedBodyWrapper className="px-4 flex flex-col min-h-screen">
          <TMAProvider>
            <ToastProvider>
              <ModalProvider>
                <IgnorePagesWrapper pages={[LINKS.profile]}>
                  <Header />
                </IgnorePagesWrapper>
                <SwipeNavigationWrapper
                  pages={FOOTER_PAGES}
                  className="py-4 flex-1 flex flex-col h-full"
                >
                  {children}
                </SwipeNavigationWrapper>
                <Footer />
              </ModalProvider>
            </ToastProvider>
          </TMAProvider>
        </ThemedBodyWrapper>
      </NextIntlClientProvider>
    </html>
  );
};

export default RootLayout;
