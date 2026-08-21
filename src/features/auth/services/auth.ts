import { apiFetch } from "@/lib/api";
import { setTokens } from "@/lib/auth";

export type Me = {
  id: number;
  email: string;
  name: string;
  is_staff: boolean;
};

export async function login(email: string, password: string) {
  const tokens = await apiFetch<{ access: string; refresh: string }>("/api/v1/auth/token/", {
    method: "POST",
    json: { email, password },
  });
  setTokens(tokens.access, tokens.refresh);
  return tokens;
}

export function fetchMe() {
  return apiFetch<Me>("/api/v1/auth/me/");
}
