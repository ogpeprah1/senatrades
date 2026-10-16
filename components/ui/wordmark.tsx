import Image from "next/image";
import { brandAssets } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Brand lockup: the official SenaTrades mark beside the brand name.
 * Dark backgrounds use the reversed (white/red) mark; light backgrounds use
 * the original. The name is typeset in the logo's red/neutral split until a
 * transparent full-lockup export is supplied (see content/site.ts).
 */
export function Wordmark({
  tone = "onDark",
  size = "md",
  className,
  preload,
}: {
  tone?: "onDark" | "onLight";
  size?: "md" | "lg";
  className?: string;
  preload?: boolean;
}) {
  const mark = tone === "onDark" ? brandAssets.markReversed : brandAssets.mark;
  const markWidth = size === "lg" ? 52 : 40;

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src={mark.src}
        width={mark.width}
        height={mark.height}
        alt=""
        preload={preload}
        sizes={`${markWidth * 2}px`}
        className="shrink-0"
        style={{ width: markWidth, height: "auto" }}
      />
      <span
        className={cn(
          "leading-none font-bold tracking-[-0.035em]",
          size === "lg" ? "text-[1.7rem]" : "text-[1.3rem]",
        )}
      >
        <span className={tone === "onDark" ? "text-sena-red-bright" : "text-sena-red"}>
          Sena
        </span>
        <span className={tone === "onDark" ? "text-soft-white" : "text-midnight"}>
          Trades
        </span>
      </span>
    </span>
  );
}
