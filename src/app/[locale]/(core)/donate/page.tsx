"use client";
import dynamic from "next/dynamic";

const Donate = dynamic(() => import("./test"), { ssr: false });

const Page = () => {
  return <Donate />;
};

export default Page;
