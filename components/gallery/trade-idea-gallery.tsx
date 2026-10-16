"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowUpRight } from "lucide-react";
import type { TradeIdea } from "@/content/trade-ideas";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function formatDate(iso: string) {
  // Fixed locale + UTC so server and client render identical text.
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function Meta({ idea, className }: { idea: TradeIdea; className?: string }) {
  if (!idea.instrument && !idea.date) return null;
  return (
    <p className={cn("eyebrow flex flex-wrap items-center gap-x-3 gap-y-1", className)}>
      {idea.instrument && <span>{idea.instrument}</span>}
      {idea.instrument && idea.date && <span aria-hidden className="h-3 w-px bg-current opacity-40" />}
      {idea.date && <time dateTime={idea.date}>{formatDate(idea.date)}</time>}
    </p>
  );
}

export function TradeIdeaGallery({ ideas }: { ideas: TradeIdea[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const open = index !== null;
  const current = open ? ideas[index] : null;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  // Close if the route is hidden by <Activity> while the viewer is open.
  useLayoutEffect(() => () => setIndex(null), []);

  const go = (dir: 1 | -1) => {
    if (index === null) return;
    const next = (index + dir + ideas.length) % ideas.length;
    setIndex(next);
    track({
      name: "trade_gallery_navigate",
      id: ideas[next].id,
      direction: dir === 1 ? "next" : "prev",
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <>
      {/* Mobile: swipeable row. sm+: masonry columns that keep each chart's
          natural aspect ratio so no price labels are cropped. */}
      <ul className="relative -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:block sm:columns-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:columns-3 [&::-webkit-scrollbar]:hidden">
        {ideas.map((idea, i) => (
          <li
            key={idea.id}
            className="w-[82%] shrink-0 snap-center sm:mb-5 sm:w-auto sm:break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => {
                setIndex(i);
                track({ name: "trade_gallery_open", id: idea.id });
              }}
              className="group relative block w-full overflow-hidden rounded-card border border-line bg-surface-raised text-left shadow-paper transition-[box-shadow,transform,border-color] duration-(--duration-base) ease-out-expo hover:-translate-y-1 hover:border-line-strong"
            >
              <span className="relative block bg-[#e3e3e3]">
                <Image
                  src={idea.src}
                  alt={idea.alt}
                  width={idea.width}
                  height={idea.height}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 82vw"
                  className="h-auto max-h-[70svh] w-full object-contain sm:max-h-none"
                />
                {idea.status && (
                  <span
                    className={cn(
                      "eyebrow absolute top-3 left-3 rounded-full px-2.5 py-1 text-[0.62rem] backdrop-blur",
                      idea.status === "Target reached"
                        ? "bg-midnight/85 text-white"
                        : "bg-white/90 text-midnight",
                    )}
                  >
                    {idea.status}
                  </span>
                )}
                <span className="absolute right-3 bottom-3 inline-flex size-9 items-center justify-center rounded-full bg-midnight/80 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 aria-hidden className="size-4" />
                </span>
              </span>
              <span className="flex flex-col gap-2 p-5">
                <Meta idea={idea} className="text-accent-text" />
                <span className="font-medium text-fg">
                  {idea.title ?? "Market perspective"}
                </span>
                <span className="sr-only">- open full-screen view</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current?.title ?? "Market perspective viewer"}
        onClose={() => setIndex(null)}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndex(null);
        }}
        className="theme-dark m-auto h-dvh max-h-none w-full max-w-none bg-transparent p-0"
      >
        {current && (
          <div
            className="flex h-full flex-col"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <p className="eyebrow text-muted" aria-live="polite">
                {index! + 1} / {ideas.length}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={current.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-fg hover:border-fg"
                >
                  Full resolution
                  <ArrowUpRight aria-hidden className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <button
                  type="button"
                  autoFocus
                  onClick={() => setIndex(null)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-fg hover:border-fg"
                >
                  <X aria-hidden className="size-5" />
                  <span className="sr-only">Close viewer</span>
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20">
              <Image
                key={current.id}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="100vw"
                className="h-auto max-h-full w-auto max-w-full animate-fade object-contain"
              />
              {ideas.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="absolute top-1/2 left-3 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-midnight/70 text-fg backdrop-blur hover:border-fg sm:inline-flex"
                  >
                    <ChevronLeft aria-hidden className="size-5" />
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="absolute top-1/2 right-3 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-midnight/70 text-fg backdrop-blur hover:border-fg sm:inline-flex"
                  >
                    <ChevronRight aria-hidden className="size-5" />
                    <span className="sr-only">Next</span>
                  </button>
                </>
              )}
            </div>

            <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center">
              <Meta idea={current} className="justify-center text-accent-text" />
              {current.title && <h2 className="font-medium text-fg">{current.title}</h2>}
              {current.description && (
                <p className="text-sm leading-relaxed text-muted">{current.description}</p>
              )}
              {ideas.length > 1 && (
                <div className="mt-2 flex justify-center gap-3 sm:hidden">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-fg"
                  >
                    <ChevronLeft aria-hidden className="size-5" />
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-fg"
                  >
                    <ChevronRight aria-hidden className="size-5" />
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
