"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/utils";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-card border border-line bg-surface-raised p-7 shadow-paper sm:p-9">
      <blockquote className="relative pl-7 font-serif text-[clamp(1.4rem,1.2rem+0.8vw,1.85rem)] leading-[1.18] text-fg">
        <span aria-hidden className="absolute top-0 left-0 font-serif text-[2.4rem] leading-none text-sena-red">
          “
        </span>
        <p>{t.excerpt}</p>
      </blockquote>

      {t.full.join(" ") !== t.excerpt && (
        <details className="group">
          <summary className="eyebrow inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-muted transition-colors hover:text-fg [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Read full message</span>
            <span className="hidden group-open:inline">Hide full message</span>
            <span aria-hidden className="transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="mt-2 flex flex-col gap-3 border-l border-line pl-4 text-[0.9375rem] leading-relaxed text-fg-soft">
            {t.full.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </details>
      )}

      <figcaption className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5">
        <span className="font-medium text-fg">{t.name}</span>
        <span className={cn("eyebrow text-[0.65rem]", t.teamMember ? "text-accent-text" : "text-muted")}>
          {t.teamMember ? "SenaTrades team" : "Community member"}
        </span>
      </figcaption>
    </figure>
  );
}

/** Slide width + gap, and how many slides fit in one view. */
function metrics(el: HTMLElement) {
  const [a, b] = el.children as unknown as HTMLElement[];
  const stride = a && b ? b.offsetLeft - a.offsetLeft : el.clientWidth;
  const perView = Math.max(1, Math.round((el.clientWidth + 20) / stride));
  return { perView, stride };
}

/**
 * Scroll-snap carousel: two testimonials per view from `md`, one below.
 * Native scrolling keeps swipe/trackpad behaviour; buttons page by one view.
 */
export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { perView, stride } = metrics(el);
        const total = Math.max(1, Math.ceil(items.length / perView));
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        const current = Math.round(el.scrollLeft / (stride * perView));
        setPages(total);
        setPage(atEnd ? total - 1 : Math.min(total - 1, current));
      });
    };
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, [items.length]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const { perView, stride } = metrics(el);
    el.scrollBy({ left: dir * stride * perView, behavior: "smooth" });
  };

  const btn =
    "inline-flex size-12 items-center justify-center rounded-full border border-line-strong text-fg transition-colors hover:border-fg hover:bg-fg hover:text-surface disabled:pointer-events-none disabled:opacity-30";

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Testimonials">
      <ul
        ref={trackRef}
        className="relative -mx-5 flex items-start snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:scroll-px-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <li
            key={t.id}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className="w-[88%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)]"
          >
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex flex-1 items-center gap-4">
          <p className="eyebrow shrink-0 text-muted" aria-live="polite">
            {String(page + 1).padStart(2, "0")} / {String(pages).padStart(2, "0")}
          </p>
          <div aria-hidden className="h-px max-w-xs flex-1 bg-line">
            <div
              className="h-px bg-sena-red transition-[width] duration-(--duration-base)"
              style={{ width: `${((page + 1) / pages) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={() => go(-1)} disabled={page === 0} className={btn}>
            <ChevronLeft aria-hidden className="size-5" />
            <span className="sr-only">Previous testimonials</span>
          </button>
          <button type="button" onClick={() => go(1)} disabled={page >= pages - 1} className={btn}>
            <ChevronRight aria-hidden className="size-5" />
            <span className="sr-only">Next testimonials</span>
          </button>
        </div>
      </div>
    </div>
  );
}
