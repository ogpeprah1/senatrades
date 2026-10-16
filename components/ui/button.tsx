import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";
import { SmartLink } from "./smart-link";
import type { AnalyticsEvent } from "@/lib/analytics";
import { TelegramIcon } from "./social-icon";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full py-2.5 text-center font-medium tracking-[-0.005em] transition-[background-color,color,border-color,box-shadow,transform] duration-(--duration-base) ease-out-expo active:scale-[0.98] select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-sena-red text-white hover:bg-sena-red-deep hover:shadow-red focus-visible:outline-offset-4",
  secondary:
    "border border-line-strong text-fg hover:border-fg hover:bg-fg hover:text-surface",
  ghost:
    "text-fg px-0! underline decoration-line-strong decoration-1 underline-offset-[6px] hover:decoration-sena-red",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-13 px-5 text-base sm:px-7",
};

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: Variant;
  size?: Size;
  event?: AnalyticsEvent;
  /** Leading Telegram glyph for Telegram CTAs. */
  telegram?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  event,
  telegram,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const external = isExternal(href);
  const Arrow = external ? ArrowUpRight : ArrowRight;

  return (
    <SmartLink
      href={href}
      event={event}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {telegram && <TelegramIcon className="size-[1.15em] shrink-0" />}
      <span>{children}</span>
      <Arrow
        aria-hidden
        className={cn(
          "size-[1.05em] shrink-0 transition-transform duration-(--duration-base) ease-out-expo",
          external
            ? "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            : "group-hover/btn:translate-x-1",
        )}
        strokeWidth={2}
      />
    </SmartLink>
  );
}
