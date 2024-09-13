import React from "react";
import type { Metadata } from "next";
import "./globals.scss";
// import { Poppins } from "next/font/google";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Urbanaut",
  description: "Social network for stalkers, diggers and so on.",
};

// const poppins = Poppins({
//   weight: "900",
//   style: "normal",
//   subsets: ["latin"],
//   variable: "--font-primary",
// });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="dark bg-background">
        <div className="ml-4 mr-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
