"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PillNav } from "@ashutoshswamy/smoui";

const items = [
  { id: "/", label: "Home" },
  { id: "/docs", label: "Docs" },
  { id: "/docs/charts", label: "Charts" },
];

const section = (path: string) =>
  path.startsWith("/docs/charts") ? "/docs/charts" : path.startsWith("/docs") ? "/docs" : "/";

/** smoui PillNav wired to the router. It only remounts when the route changes from outside the pill, so its stretch animation plays on clicks. */
export function MainNav() {
  const router = useRouter();
  const active = section(usePathname());
  const [seen, setSeen] = useState(active);
  const [picked, setPicked] = useState<string | null>(null);
  const [mounted, setMounted] = useState(active);

  if (seen !== active) {
    setSeen(active);
    if (picked !== active) setMounted(active);
    setPicked(null);
  }

  return (
    <PillNav
      key={mounted}
      items={items}
      defaultValue={mounted}
      className="text-ink"
      onChange={(id) => {
        setPicked(id);
        router.push(id);
      }}
    />
  );
}
