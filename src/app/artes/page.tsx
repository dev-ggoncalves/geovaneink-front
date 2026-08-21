import { SiteShell } from "@/components/layout/site-shell";
import { GalleryGrid } from "@/features/gallery/components/gallery-grid";

export default function ArtesPage() {
  return (
    <SiteShell>
      <h1 className="text-2xl font-semibold tracking-tight">Artes disponíveis</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Flashes e desenhos prontos para tatuar. Se gostar de algum, peça orçamento.
      </p>
      <div className="mt-8">
        <GalleryGrid
          kind="flash"
          emptyLabel="Ainda não há artes publicadas. Volte em breve."
        />
      </div>
    </SiteShell>
  );
}
