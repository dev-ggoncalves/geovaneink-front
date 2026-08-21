import { apiFetch } from "@/lib/api";

export type GalleryKind = "portfolio" | "flash";

export type GalleryImage = {
  id: number;
  kind: GalleryKind;
  title: string;
  image_url: string;
  sort_order: number;
};

export function listGallery(kind: GalleryKind) {
  return apiFetch<GalleryImage[]>(`/api/v1/gallery/?kind=${kind}`);
}

export function uploadGallery(kind: GalleryKind, title: string, file: File) {
  const formData = new FormData();
  formData.append("kind", kind);
  formData.append("title", title);
  formData.append("image", file);
  return apiFetch<GalleryImage>("/api/v1/gallery/", { method: "POST", formData });
}

export function deleteGallery(id: number) {
  return apiFetch<void>(`/api/v1/gallery/${id}/`, { method: "DELETE" });
}
