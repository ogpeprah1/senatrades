"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, ctaLabels } from "@/content/navigation";
import { links } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/wordmark";
import { MobileNav } from "./mobile-nav";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;
    // IntersectionObserver instead of a scroll handler: no work per scroll frame.
    const io = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "theme-dark fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-(--duration-base)",
        scrolled
          ? "border-b border-line bg-midnight/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-sena-red focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-site flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="SenaTrades - home"
          className="shrink-0 rounded-md"
        >
          <Wordmark preload />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-(--duration-fast)",
                      active ? "text-fg" : "text-fg-soft/80 hover:text-fg",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-sena-red transition-opacity",
                        active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href={links.telegramCommunity}
            telegram
            event={{ name: "telegram_community_click", location: "nav" }}
            className="hidden sm:inline-flex"
          >
            {ctaLabels.joinCommunityShort}
          </ButtonLink>
          <MobileNav pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
