import { SiteShell } from "@/components/layout/site-shell";
import { QuoteForm } from "@/features/quotes/components/quote-form";

export default function OrcamentoPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-lg">
        <h1 className="text-2xl font-semibold tracking-tight">Pedir orçamento</h1>
        <p className="mt-2 text-sm text-muted">
          O pedido chega no e-mail contato.geovaneink@gmail.com e também pode ir
          para o WhatsApp +353 83 861 3064.
        </p>
        <div className="mt-8">
          <QuoteForm />
        </div>
      </div>
    </SiteShell>
  );
}
