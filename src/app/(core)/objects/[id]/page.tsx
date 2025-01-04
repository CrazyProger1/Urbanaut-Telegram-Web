import { getObject } from "@/services/objects";
import { notFound } from "next/navigation";

import {
  AboutSection,
  DescriptionSection,
  GallerySection,
  HeadSection,
} from "@/components/modules/object/sections";

type Props = {
  params: Promise<{ id: number }>;
};

const ObjectPage = async ({ params }: Props) => {
  const response = await getObject(Number((await params).id));

  if (!response.success) notFound();

  return (
    <>
      <HeadSection object={response} />

      <div className="mt-4" />
      <GallerySection object={response} />

      <div className="mt-4" />
      <AboutSection object={response} />

      <div className="mt-4" />
      <DescriptionSection object={response} />
    </>
  );
};

export default ObjectPage;
