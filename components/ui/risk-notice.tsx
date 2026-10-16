import Link from "next/link";
import { riskNotice, riskNoticeShort, legal } from "@/content/site";
import { cn } from "@/lib/utils";

export function RiskNotice({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <aside
      aria-label={compact ? "Risk notice summary" : "Risk notice"}
      className={cn(
        "flex gap-4 border-l-2 border-sena-red pl-4 text-sm leading-relaxed text-muted",
        className,
      )}
    >
      <p>
        <span className="eyebrow mr-2 text-fg">Risk notice</span>
        {compact ? riskNoticeShort : riskNotice}{" "}
        <Link
          href={legal.riskDisclosure}
          className="whitespace-nowrap text-fg underline decoration-line-strong underline-offset-4 hover:decoration-sena-red"
        >
          Read the risk disclosure
        </Link>
      </p>
    </aside>
  );
}
