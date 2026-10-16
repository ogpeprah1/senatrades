import type { ReactNode } from "react";
import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import type { CtaLocation } from "@/lib/analytics";

/** Closing brand statement used at the end of every page. */
export function FinalCta({
  title = (
    <>
      The market rewards understanding.
      <br />
      <span className="text-sena-red">Start learning with us.</span>
    </>
  ),
  cta = "Join the Community",
  location = "final_cta",
  surround = "bg-soft-white",
}: {
  title?: ReactNode;
  cta?: string;
  location?: CtaLocation;
  /** Background of the preceding section, visible behind the rounded slab corners. */
  surround?: string;
}) {
  return (
    <div className={surround}>
      <section
        aria-label="Join the community"
        data-hide-sticky-cta
        className="theme-dark grain slab-top relative overflow-hidden bg-midnight pt-[clamp(5rem,3rem+8vw,10rem)] pb-[clamp(4rem,3rem+5vw,7rem)]"
      >
        <div
          aria-hidden
          className="grid-lines absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]"
        />
        <div className="container-site flex flex-col items-start gap-12">
          <h2 className="font-display-tight text-display-xl text-fg">{title}</h2>
          <ButtonLink
            href={links.telegramCommunity}
            size="lg"
            telegram
            event={{ name: "telegram_community_click", location }}
          >
            {cta}
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
