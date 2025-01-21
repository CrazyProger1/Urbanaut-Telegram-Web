import React from "react";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default HomePage;

// import React from "react";
// import { redirect } from "next/navigation";
// import { LINKS } from "@/constants/nav";
//
// const Page = () => {
//     redirect(LINKS.objects);
//     return <div />;
// };
//
// export default Page;
