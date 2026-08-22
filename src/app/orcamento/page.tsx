import { SiteShell } from "@/components/layout/site-shell";
import { QuoteForm } from "@/features/quotes/components/quote-form";

export default function OrcamentoPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-lg">
        <h1 className="text-2xl font-semibold tracking-tight">Request a quote</h1>
        <p className="mt-2 text-sm text-muted">An email will be sent after you submit this form.</p>
        <div className="mt-8">
          <QuoteForm />
        </div>
      </div>
    </SiteShell>
  );
}
