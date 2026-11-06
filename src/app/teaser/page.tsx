import React from "react";
import TeaserPage, { generateStaticParams } from "./[clientId]/page";
import { getActiveClient } from "@/lib/client";

export default function DefaultTeaserPage() {
  const activeClient = getActiveClient();
  const paramsPromise = Promise.resolve({ clientId: activeClient.slug });
  return <TeaserPage params={paramsPromise} />;
}
