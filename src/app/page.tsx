import Link from "next/link";

import { InstagramIcon } from "@/components/icons/instagram";
import { SiteShell } from "@/components/layout/site-shell";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/shared/constants/social";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-lg space-y-4 text-center">
        <p className="text-sm font-medium tracking-[0.2em] text-sage uppercase">
          Estúdio de tatuagem
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Bem-vindo à Geovane Ink
        </h1>
        <p className="text-base leading-relaxed text-muted">
          Eu sou o Geovane, tatuador. Veja o portfólio, as artes disponíveis e peça
          o seu orçamento.
        </p>
      </section>

      <nav className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
        <Link
          href="/portfolio"
          className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-ink transition-colors hover:border-primary/50"
        >
          Portfólio
        </Link>
        <Link
          href="/artes"
          className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-ink transition-colors hover:border-primary/50"
        >
          Artes
        </Link>
        <Link
          href="/orcamento"
          className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-ink transition-colors hover:border-primary/50"
        >
          Orçamento
        </Link>
      </nav>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-8 inline-flex min-h-12 w-full max-w-lg items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover"
      >
        <InstagramIcon className="h-5 w-5" />
        Seguir {INSTAGRAM_HANDLE}
      </a>
    </SiteShell>
  );
}
