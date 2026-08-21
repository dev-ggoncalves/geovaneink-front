import { InstagramIcon } from "@/components/icons/instagram";

const INSTAGRAM_URL = "https://instagram.com/geovane.ink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-700 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-4">
        <p className="truncate text-sm font-semibold tracking-wide text-slate-50">
          Geovane Ink
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 min-w-10 items-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-green-500"
        >
          <InstagramIcon className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">@geovane.ink</span>
        </a>
      </div>
    </header>
  );
}
