import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface text-ink">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(154,168,148,0.16),_transparent_55%)]"
        />
        <div className="relative mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</div>
      </main>
    </div>
  );
}
