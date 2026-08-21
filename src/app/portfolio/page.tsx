import { SiteShell } from "@/components/layout/site-shell";
import { GalleryGrid } from "@/features/gallery/components/gallery-grid";

export default function PortfolioPage() {
  return (
    <SiteShell>
      <h1 className="text-2xl font-semibold tracking-tight">Portfólio</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Trabalhos já feitos no estúdio.
      </p>
      <div className="mt-8">
        <GalleryGrid
          kind="portfolio"
          emptyLabel="Ainda não há fotos no portfólio. Em breve o Geovane sobe as imagens."
        />
      </div>
    </SiteShell>
  );
}
