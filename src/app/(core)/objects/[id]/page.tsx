import { getObject } from "@/services/objects";
import { notFound } from "next/navigation";

import {
  AboutSection,
  GallerySection,
  HeadSection,
  ConcludeSection,
} from "@/components/modules/object/sections";
import { BackButtonWrapper } from "@/components/common/wrappers";
import { LINKS } from "@/constants/nav";

type Props = {
  params: Promise<{ id: number }>;
  searchParams: Promise<{
    tab?: string;
  }>;
};

const ObjectPage = async ({ params, searchParams }: Props) => {
  const response = await getObject(Number((await params).id));

  if (!response.success) notFound();

  const tab = (await searchParams).tab || "description";
  return (
    <BackButtonWrapper path={LINKS.objects}>
      <HeadSection object={response} activeTab={tab} />

      <div className="mt-4" />
      <GallerySection object={response} />

      <div className="mt-4" />
      <AboutSection object={response} activeTab={tab} />
    </BackButtonWrapper>
  );
};

export default ObjectPage;
