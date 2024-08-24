import React, { FC } from "react";
import Header from "../headers/Header.tsx";
import Footer from "../footers/Footer.tsx";

interface PageWrapperProperties {
  children: React.ReactNode;
}

const PageBodyWrapper: FC<PageWrapperProperties> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageBodyWrapper;
