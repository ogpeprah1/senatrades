"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { isExternal } from "@/lib/utils";

type SmartLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  /** Analytics event fired on click (no-op until a provider is connected). */
  event?: AnalyticsEvent;
  children: ReactNode;
};

/**
 * Internal hrefs use next/link; external hrefs open in a new tab with safe
 * rel attributes and an accessible "opens in a new tab" hint.
 */
export function SmartLink({
  href,
  event,
  onClick,
  children,
  ...rest
}: SmartLinkProps) {
  const handleClick: SmartLinkProps["onClick"] = (e) => {
    if (event) track(event);
    onClick?.(e);
  };

  if (isExternal(href)) {
    const label = rest["aria-label"];
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...rest}
        aria-label={label ? `${label} (opens in a new tab)` : undefined}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
