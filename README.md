# geovaneink-front

Frontend Next.js (App Router) do site Geovane Ink. Pronto para deploy na Vercel.

## Desenvolvimento

```bash
npm install
copy .env.example .env.local
npm run dev
```

Abre em `http://localhost:3000`. A API local deve estar em `http://localhost:8000`.

## Vercel

1. Importe o repositório `geovaneink-front`.
2. Framework: **Next.js**.
3. Variáveis:
   - `API_PROXY_URL` — origem da API Django, ex. `https://web-production-c07ea.up.railway.app`. O Next faz rewrite de `/api` e `/media` para essa origem.
   - `NEXT_PUBLIC_API_URL` — vazio em produção (o browser chama o próprio domínio). Em local: `http://localhost:8000`.
