"use client";

import { useEffect, useState } from "react";

import { API_BASE_URL, apiFetch, type HealthResponse } from "@/lib/api";
import { cn } from "@/lib/cn";

type Status = "checking" | "ok" | "offline";

export function ApiStatus() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let cancelled = false;

    apiFetch<HealthResponse>("/api/v1/health/")
      .then((data) => {
        if (!cancelled) setStatus(data.status === "ok" ? "ok" : "offline");
      })
      .catch(() => {
        if (!cancelled) setStatus("offline");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const label =
    status === "checking" ? "Checando API…" : status === "ok" ? "API online" : "API offline (local/dev)";

  return (
    <p className="mt-6 flex items-center gap-2 text-sm text-muted">
      <span
        className={cn(
          "inline-block h-2 w-2 rounded-full",
          status === "ok" && "bg-sage",
          status === "checking" && "bg-primary",
          status === "offline" && "bg-error",
        )}
      />
      {label}
      <span className="truncate text-muted/70">{API_BASE_URL || "sem URL"}</span>
    </p>
  );
}
