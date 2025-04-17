import "@/styles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import React from "react";
import { Metadata } from "next";
import { DESCRIPTION, APP } from "@/config/base";
import { Footer, Header } from "@/components/modules/layout";
import { TMAProvider } from "@/components/common/wrappers";
import { TON_MANIFEST_URL } from "@/config/telegram";

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
      <body className="light">
        <TMAProvider manifestUrl={TON_MANIFEST_URL}>
          <Header />
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
          <Footer />
        </TMAProvider>
      </body>
    </html>
  );
};

export default RootLayout;
