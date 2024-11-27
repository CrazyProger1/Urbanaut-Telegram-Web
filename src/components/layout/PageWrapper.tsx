import Header from "@/components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";
import ThemedBody from "@/components/layout/ThemedBody";
import React from "react";
import SwapWrapper from "@/components/layout/SwapWrapper";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <ThemedBody className="mx-4">
      <Header />
      <SwapWrapper>{children}</SwapWrapper>
      <Footer />
    </ThemedBody>
  );
};
export default PageWrapper;
