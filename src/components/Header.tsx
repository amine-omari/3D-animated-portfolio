import { createClient } from "@/prismicio";
import React from "react";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return <header>Header</header>;
}
