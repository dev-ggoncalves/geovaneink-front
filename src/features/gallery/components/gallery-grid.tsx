"use client";

import { useEffect, useState } from "react";

import { listGallery, type GalleryImage, type GalleryKind } from "@/features/gallery/services/gallery";

export function GalleryGrid({ kind, emptyLabel }: { kind: GalleryKind; emptyLabel: string }) {
  const [items, setItems] = useState<GalleryImage[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    listGallery(kind)
      .then((data) => {
        if (!cancelled) setItems(data);
      })
      .catch(() => {
        if (!cancelled) setError("A galeria ainda não está disponível.");
      });
    return () => {
      cancelled = true;
    };
  }, [kind]);

  if (error) {
    return <p className="text-sm text-muted">{error}</p>;
  }

  if (items.length === 0) {
    return <p className="text-sm text-muted">{emptyLabel}</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden rounded-xl border border-border bg-card">
          <img
            src={item.image_url}
            alt={item.title || "Tatuagem Geovane Ink"}
            className="aspect-square w-full object-cover"
          />
          {item.title ? (
            <p className="truncate px-3 py-2 text-sm text-muted">{item.title}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
