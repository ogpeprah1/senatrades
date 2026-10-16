import { links } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { StructureDiagram } from "@/components/education/structure-diagram";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="theme-dark grain relative flex min-h-svh items-center overflow-hidden bg-midnight pt-18">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_55%_at_80%_20%,rgb(207_16_37/0.16),transparent_70%)]"
      />
      <div className="container-site grid items-center gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="font-display-tight mt-8 text-display-xl text-fg">
            Structure broken.
            <br />
            <span className="text-sena-red">Page not found.</span>
          </h1>
          <p className="mt-8 max-w-md text-lead text-fg-soft">
            The page you were looking for has moved or never existed. Let’s get
            you back to something worth reading.
          </p>
          <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <ButtonLink href="/" size="lg" variant="secondary">
              Back to home
            </ButtonLink>
            <ButtonLink
              href={links.telegramCommunity}
              size="lg"
              telegram
              event={{ name: "telegram_community_click", location: "not_found" }}
            >
              Join the Community
            </ButtonLink>
          </div>
        </div>
        <div className="text-fg opacity-70 lg:col-span-6">
          <StructureDiagram title="Illustrative market structure diagram" />
        </div>
      </div>
    </section>
  );
}
