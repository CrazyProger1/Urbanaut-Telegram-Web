import React, { FC } from "react";
import Header from "../headers/Header.tsx";
import Footer from "../footers/Footer.tsx";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageBodyWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageBodyWrapper;
