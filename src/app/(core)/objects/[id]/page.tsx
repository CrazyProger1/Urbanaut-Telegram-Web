import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Page({ params }: Props) {}
