import { SiteShell } from "@/components/layout/site-shell";
import { GalleryGrid } from "@/features/gallery/components/gallery-grid";

export default function ArtesPage() {
  return (
    <SiteShell>
      <h1 className="text-2xl font-semibold tracking-tight">Available flash</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Ready-to-tattoo designs. If you like one, request a quote.
      </p>
      <div className="mt-8">
        <GalleryGrid
          kind="flash"
          emptyLabel="No flash designs yet. Check back soon."
        />
      </div>
    </SiteShell>
  );
}
