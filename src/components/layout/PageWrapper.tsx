import Header from "@/components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";
import ThemedBody from "@/components/layout/ThemedBody";
import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <ThemedBody className="mx-4 h-full">
      <Header />
      {children}
      <Footer />
    </ThemedBody>
  );
};
export default PageWrapper;
