"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";
import { cn } from "@/lib/cn";
import { fetchMe } from "@/features/auth/services/auth";
import {
  deleteGallery,
  listGallery,
  uploadGallery,
  type GalleryImage,
  type GalleryKind,
} from "@/features/gallery/services/gallery";
import { listQuotes, replyQuote, type Quote } from "@/features/quotes/services/quotes";
import { clearTokens } from "@/lib/auth";
import { ApiError } from "@/lib/api";

type Tab = "portfolio" | "flash" | "quotes";

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState<Tab>("portfolio");

  useEffect(() => {
    fetchMe()
      .then((me) => {
        if (!me.is_staff) {
          clearTokens();
          router.replace("/login");
          return;
        }
        setReady(true);
      })
      .catch(() => {
        clearTokens();
        router.replace("/login");
      });
  }, [router]);

  if (!ready) {
    return (
      <SiteShell>
        <p className="text-sm text-muted">A carregar…</p>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">Administração</h1>
        <button
          type="button"
          onClick={() => {
            clearTokens();
            router.replace("/login");
          }}
          className="h-10 rounded-lg border border-border px-4 text-sm text-muted hover:bg-card"
        >
          Sair
        </button>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto">
        {(
          [
            ["portfolio", "Portfólio"],
            ["flash", "Artes"],
            ["quotes", "Orçamentos"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "h-10 shrink-0 rounded-lg px-4 text-sm font-medium",
              tab === id ? "bg-primary text-surface" : "border border-border text-muted hover:bg-card",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {tab === "quotes" ? <QuotesPanel /> : <GalleryPanel kind={tab} />}
      </div>
    </SiteShell>
  );
}

function GalleryPanel({ kind }: { kind: GalleryKind }) {
  const [items, setItems] = useState<GalleryImage[]>([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function refresh() {
    listGallery(kind)
      .then(setItems)
      .catch(() => setError("Não foi possível carregar as imagens."));
  }

  useEffect(() => {
    refresh();
  }, [kind]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!file) {
      setError("Escolha uma imagem.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await uploadGallery(kind, title, file);
      setTitle("");
      setFile(null);
      refresh();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Falha no upload.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6">
        <h2 className="font-semibold">Enviar imagem</h2>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Título (opcional)"
          className="w-full rounded-lg border border-border bg-surface px-3 py-3 text-sm outline-none focus:border-primary"
        />
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          className="w-full text-sm text-muted file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:font-semibold file:text-surface"
        />
        {error ? <p className="text-sm text-error">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface hover:bg-primary-hover disabled:opacity-60 sm:w-auto"
        >
          {loading ? "A enviar…" : "Publicar"}
        </button>
      </form>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.id} className="overflow-hidden rounded-xl border border-border bg-card">
            <img src={item.image_url} alt={item.title} className="aspect-square w-full object-cover" />
            <div className="flex items-center justify-between gap-2 px-3 py-2">
              <p className="truncate text-sm text-muted">{item.title || "Sem título"}</p>
              <button
                type="button"
                onClick={async () => {
                  await deleteGallery(item.id);
                  refresh();
                }}
                className="text-xs text-error"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuotesPanel() {
  const [items, setItems] = useState<Quote[]>([]);
  const [reply, setReply] = useState<Record<number, string>>({});
  const [error, setError] = useState("");

  function refresh() {
    listQuotes().then(setItems).catch(() => setError("Não foi possível carregar os orçamentos."));
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="space-y-4">
      {error ? <p className="text-sm text-error">{error}</p> : null}
      {items.length === 0 ? <p className="text-sm text-muted">Nenhum orçamento ainda.</p> : null}
      {items.map((item) => (
        <article key={item.id} className="rounded-xl border border-border bg-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold">{item.name}</h3>
            <span className="text-xs uppercase tracking-wide text-sage">
              {item.status === "answered" ? "Respondido" : "Novo"}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {item.email}
            {item.phone ? ` · ${item.phone}` : ""}
          </p>
          <p className="mt-3 text-sm leading-relaxed">{item.message}</p>
          {item.reply_text ? (
            <p className="mt-3 text-sm text-sage">Resposta: {item.reply_text}</p>
          ) : (
            <form
              className="mt-4 space-y-3"
              onSubmit={async (event) => {
                event.preventDefault();
                try {
                  await replyQuote(item.id, reply[item.id] || "");
                  refresh();
                } catch (err) {
                  setError(err instanceof ApiError ? err.message : "Falha ao responder.");
                }
              }}
            >
              <textarea
                rows={3}
                value={reply[item.id] || ""}
                onChange={(event) => setReply((current) => ({ ...current, [item.id]: event.target.value }))}
                placeholder="Resposta para o cliente"
                className="w-full rounded-lg border border-border bg-surface px-3 py-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-surface hover:bg-primary-hover sm:w-auto"
              >
                Enviar resposta
              </button>
            </form>
          )}
        </article>
      ))}
    </div>
  );
}
