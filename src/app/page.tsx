import { InstagramIcon } from "@/components/icons/instagram";
import { SiteHeader } from "@/components/layout/site-header";

const INSTAGRAM_URL = "https://instagram.com/geovane.ink";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-slate-900 text-slate-50">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.12),_transparent_55%)]"
        />
        <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col justify-center gap-8 px-4 py-10">
          <section className="space-y-4 text-center">
            <p className="text-sm font-medium tracking-[0.2em] text-green-500 uppercase">
              Estúdio de tatuagem
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Bem-vindo à Geovane Ink
            </h1>
            <p className="text-base leading-relaxed text-slate-400">
              Eu sou o Geovane, tatuador. Este espaço vai reunir o meu trabalho,
              mas o site ainda está sendo preparado.
            </p>
          </section>

          <section className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center">
            <p className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-400 uppercase">
              Em manutenção
            </p>
            <h2 className="mt-4 text-lg font-semibold">Página em manutenção</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Estamos construindo o site. Enquanto isso, o portfólio e os
              agendamentos continuam no Instagram.
            </p>
          </section>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir @geovane.ink
          </a>
        </div>
      </main>
    </div>
  );
}
