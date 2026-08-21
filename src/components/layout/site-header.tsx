import { InstagramIcon } from "@/components/icons/instagram";

const INSTAGRAM_URL = "https://instagram.com/geovane.ink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface/95 shadow-[0_1px_0_0_rgba(230,200,74,0.18)] backdrop-blur">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-4">
        <p className="truncate text-sm font-semibold tracking-wide text-ink">
          Geovane Ink
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 min-w-10 items-center gap-2 rounded-lg px-2 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-primary"
        >
          <InstagramIcon className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">@geovane.ink</span>
        </a>
      </div>
    </header>
  );
}
