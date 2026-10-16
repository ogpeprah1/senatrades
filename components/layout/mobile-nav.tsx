"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav, ctaLabels } from "@/content/navigation";
import { links, socials } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { SocialIcon } from "@/components/ui/social-icon";
import { Wordmark } from "@/components/ui/wordmark";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function MobileNav({ pathname }: { pathname: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  // Open/close the native modal dialog (focus trap, Esc, inert background).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Reset transient state if this subtree is ever hidden by <Activity>.
  useLayoutEffect(() => {
    return () => {
      setOpen(false);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-fg transition-colors hover:border-fg lg:hidden"
      >
        <Menu aria-hidden className="size-5" />
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Site menu"
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        className="theme-dark m-0 h-dvh max-h-none w-full max-w-none bg-midnight p-0 backdrop:bg-transparent lg:hidden"
      >
        <div className="grain flex min-h-full flex-col">
          <div className="container-site flex h-18 shrink-0 items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} aria-label="SenaTrades - home">
              <Wordmark />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-fg transition-colors hover:border-fg"
            >
              <X aria-hidden className="size-5" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="container-site flex-1 pt-6">
            <ul className="flex flex-col">
              {mainNav.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <li
                    key={item.href}
                    className={cn("border-b border-line", open && "animate-rise")}
                    style={{ animationDelay: `${60 + i * 45}ms` }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="flex items-center justify-between py-4"
                    >
                      <span
                        className={cn(
                          "font-display-tight text-[2.25rem] leading-none",
                          active ? "text-fg" : "text-fg-soft",
                        )}
                      >
                        {item.label}
                      </span>
                      <span className="eyebrow text-muted">
                        {active ? (
                          <span className="text-accent-text">Current</span>
                        ) : (
                          String(i + 1).padStart(2, "0")
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="container-site flex shrink-0 flex-col gap-6 pt-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <ButtonLink
              href={links.telegramCommunity}
              telegram
              size="lg"
              event={{ name: "telegram_community_click", location: "mobile_nav" }}
              className="w-full"
            >
              {ctaLabels.joinCommunity}
            </ButtonLink>
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow text-muted">Follow</p>
              <ul className="flex items-center gap-1">
                {socials
                  .filter((s) => s.platform !== "telegram")
                  .map((s) => (
                    <li key={s.platform}>
                      <SmartLink
                        href={s.href}
                        event={{
                          name: "social_click",
                          platform: s.platform,
                          location: "mobile_nav",
                        }}
                        className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
                        aria-label={`SenaTrades on ${s.label}`}
                      >
                        <SocialIcon platform={s.platform} className="size-[18px]" />
                      </SmartLink>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
