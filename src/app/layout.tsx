import React from "react";
import type { Metadata } from "next";
import "./globals.scss";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import { APP, DESCRIPTION } from "@/constants/app";

export const metadata: Metadata = {
  title: APP,
  description: DESCRIPTION,
  applicationName: APP,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className="dark bg-primary">
      <div className="ml-4 mr-4">
        <Header />
        {children}
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
