"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset in px. */
  y?: number;
  as?: "div" | "li" | "article" | "figure";
};

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Soft fade + rise when scrolled into view. Plays once. Under
 * prefers-reduced-motion, MotionConfig (see Providers) removes the
 * transform and the content simply fades.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: RevealProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Component>
  );
}
