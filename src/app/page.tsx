import Link from "next/link";

import { InstagramIcon } from "@/components/icons/instagram";
import { SiteShell } from "@/components/layout/site-shell";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/shared/constants/social";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-lg space-y-4 text-center">
        <p className="text-sm font-medium tracking-[0.2em] text-sage uppercase">
          Tattoo studio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Welcome to Geovane Ink
        </h1>
        <p className="text-base leading-relaxed text-muted">
          I&apos;m Geovane, tattoo artist. Browse the portfolio, available flash, and
          request a quote.
        </p>
      </section>

      <nav className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
        <Link
          href="/portfolio"
          className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-ink transition-colors hover:border-primary/50"
        >
          Portfolio
        </Link>
        <Link
          href="/artes"
          className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-ink transition-colors hover:border-primary/50"
        >
          Flash
        </Link>
        <Link
          href="/orcamento"
          className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-ink transition-colors hover:border-primary/50"
        >
          Quote
        </Link>
      </nav>

      <div className="mt-8 flex justify-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full max-w-lg items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover"
        >
          <InstagramIcon className="h-5 w-5" />
          Follow {INSTAGRAM_HANDLE}
        </a>
      </div>
    </SiteShell>
  );
}
