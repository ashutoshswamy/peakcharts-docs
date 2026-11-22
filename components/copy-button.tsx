"use client";

import { CopyButton as SmoCopyButton } from "@ashutoshswamy/smoui";

/** smoui CopyButton in the site's styling. smoui handles reduced motion itself. */
export function CopyButton({
  text, label, className = "", copy = false,
}: {
  text: string;
  label?: string;
  className?: string;
  /** Skip the pill styling, for callers that supply their own. */
  copy?: boolean;
}) {
  return <SmoCopyButton text={text} label={label} className={`${copy ? "" : "copy-btn"} ${className}`} />;
}
