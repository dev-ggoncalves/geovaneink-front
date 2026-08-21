import { InstagramIcon } from "@/components/icons/instagram";
import { SiteHeader } from "@/components/layout/site-header";

const INSTAGRAM_URL = "https://instagram.com/geovane.ink";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-surface text-ink">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(154,168,148,0.18),_transparent_55%)]"
        />
        <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col justify-center gap-8 px-4 py-10">
          <section className="space-y-4 text-center">
            <p className="text-sm font-medium tracking-[0.2em] text-sage uppercase">
              Estúdio de tatuagem
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Bem-vindo à Geovane Ink
            </h1>
            <p className="text-base leading-relaxed text-muted">
              Eu sou o Geovane, tatuador. Este espaço vai reunir o meu trabalho,
              mas o site ainda está sendo preparado.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 text-center shadow-[0_0_0_1px_rgba(230,200,74,0.08)]">
            <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              Em manutenção
            </p>
            <h2 className="mt-4 text-lg font-semibold">Página em manutenção</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Estamos construindo o site. Enquanto isso, o portfólio e os
              agendamentos continuam no Instagram.
            </p>
          </section>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir @geovane.ink
          </a>
        </div>
      </main>
    </div>
  );
}
