"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { InstagramIcon } from "@/components/icons/instagram";
import { cn } from "@/lib/cn";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/shared/constants/social";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/artes", label: "Flash" },
  { href: "/orcamento", label: "Quote" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface/95 shadow-[0_1px_0_0_rgba(230,200,74,0.18)] backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <Link href="/" className="truncate text-sm font-semibold tracking-wide text-ink">
          Geovane Ink
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 min-w-10 items-center gap-2 rounded-lg px-2 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-primary"
          >
            <InstagramIcon className="h-5 w-5 shrink-0" />
            <span className="hidden sm:inline">{INSTAGRAM_HANDLE}</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("h-0.5 w-4 bg-current transition-transform", open && "translate-y-2 rotate-45")} />
              <span className={cn("h-0.5 w-4 bg-current transition-opacity", open && "opacity-0")} />
              <span className={cn("h-0.5 w-4 bg-current transition-transform", open && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium hover:bg-card hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
