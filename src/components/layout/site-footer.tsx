import { GoogleIcon } from "@/components/icons/google";
import { InstagramIcon } from "@/components/icons/instagram";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { GOOGLE_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/shared/constants/social";

const links = [
  { href: WHATSAPP_URL, label: "WhatsApp", icon: WhatsAppIcon },
  { href: GOOGLE_URL, label: "Google", icon: GoogleIcon },
  { href: INSTAGRAM_URL, label: INSTAGRAM_HANDLE, icon: InstagramIcon },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-4 py-8">
        <nav className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center sm:gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary/50 hover:text-primary sm:w-auto sm:min-w-40"
            >
              <link.icon className="h-4 w-4 shrink-0" />
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} Geovane Ink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
