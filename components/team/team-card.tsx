import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "@/content/team";
import { Portrait } from "@/components/ui/portrait";
import { SmartLink } from "@/components/ui/smart-link";
import { SocialIcon } from "@/components/ui/social-icon";

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Photo-led profile. Bio is always visible (no hover-only content), so
 * profiles stay fully accessible on touch devices.
 */
export function TeamCard({
  member,
  expanded = false,
}: {
  member: TeamMember;
  expanded?: boolean;
}) {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden rounded-card">
        <Portrait
          photo={member.photo}
          initials={initialsOf(member.name)}
          placeholderLabel={`Portrait of ${member.name}`}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="aspect-4/5 transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-6 flex items-start justify-between gap-4 border-t border-line pt-5">
        <div>
          <h3 className="font-display-tight text-display-sm text-fg lg:min-h-[2lh]">{member.name}</h3>
          <p className="eyebrow mt-2 text-accent-text lg:min-h-[2lh]">{member.role}</p>
        </div>
        {member.links && member.links.length > 0 && (
          <ul className="flex gap-1">
            {member.links.map((l) => (
              <li key={l.href}>
                <SmartLink
                  href={l.href}
                  aria-label={`${member.name} on ${l.platform}`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg"
                >
                  <SocialIcon platform={l.platform} className="size-4" />
                </SmartLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="mt-4 leading-relaxed text-muted">{member.bio}</p>
      {expanded &&
        member.longBio?.map((p) => (
          <p key={p.slice(0, 24)} className="mt-3 leading-relaxed text-muted">
            {p}
          </p>
        ))}
      {member.href && (
        <Link
          href={member.href}
          className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 hover:decoration-sena-red"
        >
          Meet the Founder
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      )}
    </article>
  );
}
