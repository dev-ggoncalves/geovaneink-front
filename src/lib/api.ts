import { getAccessToken } from "@/lib/auth";

const raw = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
export const API_BASE_URL =
  raw || (process.env.NODE_ENV === "production" ? "" : "http://localhost:8000");

export class ApiError extends Error {
  status: number;
  payload: unknown;

  constructor(message: string, status: number, payload: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.payload = payload;
  }
}

function fieldError(payload: unknown): string | undefined {
  if (!payload || typeof payload !== "object") return undefined;
  const record = payload as Record<string, unknown>;
  if (typeof record.detail === "string") return record.detail;
  for (const value of Object.values(record)) {
    if (Array.isArray(value) && typeof value[0] === "string") return value[0];
    if (typeof value === "string") return value;
  }
  return undefined;
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit & { json?: unknown; formData?: FormData },
): Promise<T> {
  const url = `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  const headers = new Headers(init?.headers);
  const token = getAccessToken();
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  let body = init?.body;
  if (init?.json !== undefined) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(init.json);
  } else if (init?.formData) {
    body = init.formData;
  }

  const res = await fetch(url, {
    ...init,
    headers,
    body,
  });

  if (res.status === 204) {
    return undefined as T;
  }

  const contentType = res.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await res.json().catch(() => null)
    : await res.text();

  if (!res.ok) {
    throw new ApiError(fieldError(payload) || "Request failed.", res.status, payload);
  }

  return payload as T;
}

export type HealthResponse = {
  status: string;
  service: string;
};
