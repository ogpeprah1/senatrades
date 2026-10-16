"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Fires a key-page analytics event when the page becomes visible. */
export function TrackPageView({ page }: { page: "founder" | "community" }) {
  useEffect(() => {
    track({ name: "page_view_key", page });
  }, [page]);
  return null;
}
