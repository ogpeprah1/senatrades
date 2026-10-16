import { community, formattedSubscribers } from "@/content/site";
import { cn } from "@/lib/utils";

/** Factual community highlights (subscriber count lives in content/site.ts). */
export function CommunityStats({ className }: { className?: string }) {
  const stats = [
    { value: formattedSubscribers, label: `Subscribers in ${community.name}` },
    { value: "Free", label: "Community calls, open to members" },
    { value: "Together", label: "We analyse the market as a group" },
  ];
  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3",
        className,
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-2 bg-midnight p-6 sm:p-8">
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-display-tight text-[clamp(2.25rem,1.6rem+2.4vw,3.5rem)] leading-none text-fg">
            {s.value}
          </dd>
          <dd className="text-sm text-muted">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}
