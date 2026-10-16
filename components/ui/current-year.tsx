"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * The prerendered shell must not read the clock (Cache Components), so the
 * year is resolved on the client only; the server snapshot is empty.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => String(new Date().getFullYear()),
    () => "",
  );
  return <span>{year}</span>;
}
