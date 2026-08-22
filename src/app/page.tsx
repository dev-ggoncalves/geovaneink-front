import Link from "next/link";

import { InstagramIcon } from "@/components/icons/instagram";
import { SiteShell } from "@/components/layout/site-shell";
import { GalleryGrid } from "@/features/gallery/components/gallery-grid";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/shared/constants/social";

export default function HomePage() {
  return (
    <SiteShell>
      <section id="home" className="mx-auto max-w-lg scroll-mt-20 space-y-4 text-center">
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
        <a
          href="#portfolio"
          className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-ink transition-colors hover:border-primary/50"
        >
          Portfolio
        </a>
        <a
          href="#flash"
          className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-ink transition-colors hover:border-primary/50"
        >
          Flash
        </a>
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

      <section id="portfolio" className="mt-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Portfolio</h2>
        <p className="mt-2 max-w-xl text-sm text-muted">Finished work from the studio.</p>
        <div className="mt-8">
          <GalleryGrid
            kind="portfolio"
            emptyLabel="No portfolio photos yet. New work will be added soon."
          />
        </div>
      </section>

      <section id="flash" className="mt-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Available flash</h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Ready-to-tattoo designs. If you like one, request a quote.
        </p>
        <div className="mt-8">
          <GalleryGrid
            kind="flash"
            emptyLabel="No flash designs yet. Check back soon."
          />
        </div>
      </section>
    </SiteShell>
  );
}
