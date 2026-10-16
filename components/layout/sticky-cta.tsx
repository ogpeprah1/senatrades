"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "@/content/site";
import { ctaLabels } from "@/content/navigation";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Mobile-only floating community CTA. Appears once the page's first screen
 * has scrolled away and hides whenever an element marked
 * `data-hide-sticky-cta` (e.g. a full community CTA section or the footer)
 * is on screen, so it never duplicates or covers a primary CTA.
 */
export function StickyCta() {
  const pathname = usePathname();
  const [pastTop, setPastTop] = useState(false);
  const [blocked, setBlocked] = useState(0);

  useEffect(() => {
    const sentinel = document.getElementById("fold-sentinel");
    const topIo = new IntersectionObserver(([e]) =>
      setPastTop(!e.isIntersecting && e.boundingClientRect.top < 0),
    );
    if (sentinel) topIo.observe(sentinel);

    const visible = new Set<Element>();
    const blockIo = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setBlocked(visible.size);
    });
    document
      .querySelectorAll("[data-hide-sticky-cta], footer")
      .forEach((el) => blockIo.observe(el));

    return () => {
      topIo.disconnect();
      blockIo.disconnect();
    };
    // Re-scan blocking sections after each navigation. Hidden (preserved)
    // routes are display:none, so their elements never intersect.
  }, [pathname]);

  const show = pastTop && blocked === 0;

  return (
    <div
      className={cn(
        "theme-dark pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-[opacity,translate] duration-(--duration-slow) ease-out-expo sm:hidden",
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
    >
      <ButtonLink
        href={links.telegramCommunity}
        telegram
        size="lg"
        tabIndex={show ? 0 : -1}
        aria-hidden={!show}
        event={{ name: "telegram_community_click", location: "sticky_cta" }}
        className={cn(
          "w-full shadow-[0_12px_40px_-8px_rgb(0_0_0/0.6)]",
          show && "pointer-events-auto",
        )}
      >
        {ctaLabels.joinCommunity}
      </ButtonLink>
    </div>
  );
}
