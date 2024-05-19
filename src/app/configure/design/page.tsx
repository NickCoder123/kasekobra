import { db } from "~/db";
import { DesignConfigurator } from "./DesignConfigurator";

import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function DesignPage({ searchParams }: Props) {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height } = configuration;

  return (
    <DesignConfigurator
      configId={configuration.id}
      imageUrl={imageUrl}
      imageDimensions={{ width, height }}
    />
  );
}
