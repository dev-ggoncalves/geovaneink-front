"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";
import { login } from "@/features/auth/services/auth";
import { ApiError } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      router.replace("/admin");
    } catch (err) {
      setError(err instanceof ApiError ? "E-mail ou senha inválidos." : "Não foi possível entrar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteShell>
      <form
        onSubmit={onSubmit}
        className="mx-auto w-full max-w-lg space-y-4 rounded-xl border border-border bg-card p-6"
      >
        <h1 className="text-2xl font-semibold tracking-tight">Área administrativa</h1>
        <p className="text-sm text-muted">Entre para gerir portfólio, artes e orçamentos.</p>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">
            Senha
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        {error ? <p className="text-sm text-error">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover disabled:opacity-60"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </SiteShell>
  );
}
