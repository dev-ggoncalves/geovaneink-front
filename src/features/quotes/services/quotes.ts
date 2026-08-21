import { apiFetch } from "@/lib/api";

export type Quote = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "answered";
  reply_text: string;
  created_at: string;
};

export type QuoteCreateResponse = {
  id: number;
  whatsapp_url: string;
};

export function createQuote(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return apiFetch<QuoteCreateResponse>("/api/v1/quotes/", {
    method: "POST",
    json: payload,
  });
}

export function listQuotes() {
  return apiFetch<Quote[]>("/api/v1/admin/quotes/");
}

export function replyQuote(id: number, reply_text: string) {
  return apiFetch<Quote>(`/api/v1/admin/quotes/${id}/reply/`, {
    method: "POST",
    json: { reply_text },
  });
}
