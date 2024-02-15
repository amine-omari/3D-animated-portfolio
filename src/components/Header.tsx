import { createClient } from "@/prismicio";
import React from "react";

export default async function Header() {
  const client = createClient();

  return <header>Header</header>;
}
