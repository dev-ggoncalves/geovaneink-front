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
2. Framework: **Next.js** (detectado automaticamente).
3. Variável de ambiente:
   - `NEXT_PUBLIC_API_URL` — URL pública da API Django (depois do backend no ar).

Enquanto a API não estiver publicada, o indicador na home mostra **API offline** — o site continua no ar.
