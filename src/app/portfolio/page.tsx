import { SiteShell } from "@/components/layout/site-shell";
import { GalleryGrid } from "@/features/gallery/components/gallery-grid";

export default function PortfolioPage() {
  return (
    <SiteShell>
      <h1 className="text-2xl font-semibold tracking-tight">Portfolio</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Finished work from the studio.
      </p>
      <div className="mt-8">
        <GalleryGrid
          kind="portfolio"
          emptyLabel="No portfolio photos yet. New work will be added soon."
        />
      </div>
    </SiteShell>
  );
}
