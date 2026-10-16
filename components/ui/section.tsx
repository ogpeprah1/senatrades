import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

const themeSurface: Record<Theme, string> = {
  dark: "theme-dark bg-midnight",
  light: "theme-light bg-soft-white",
};

/** Page section with theme tokens + consistent vertical rhythm. */
export function Section({
  theme = "light",
  spacing = "default",
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"section"> & {
  theme?: Theme;
  spacing?: "default" | "sm" | "none";
}) {
  return (
    <section
      className={cn(
        "relative",
        themeSurface[theme],
        spacing === "default" && "section-y",
        spacing === "sm" && "section-y-sm",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  as: Tag = "p",
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "eyebrow flex items-center gap-3 text-muted",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-sena-red" />
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  size = "lg",
  id,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  id?: string;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow className={cn(align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        id={id}
        className={cn(
          "font-display-tight text-fg",
          size === "md" && "text-display-md",
          size === "lg" && "text-display-lg",
          size === "xl" && "text-display-xl",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "max-w-(--container-prose) text-lead text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </header>
  );
}
