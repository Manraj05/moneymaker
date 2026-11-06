import React from "react";
import { notFound } from "next/navigation";
import TeaserPage from "./[clientId]/page";
import { getActiveClient } from "@/lib/client";

export default function DefaultTeaserPage() {
  if (process.env.VERCEL === "1") {
    notFound();
  }
  const activeClient = getActiveClient();
  const paramsPromise = Promise.resolve({ clientId: activeClient.slug });
  return <TeaserPage params={paramsPromise} />;
}
