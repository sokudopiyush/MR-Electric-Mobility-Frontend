const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.mrelectricmobility.com").replace(/\/$/, "");
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Re-generate the sitemap at most once an hour so newly added scooters show up.
export const revalidate = 3600;

async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/api/products`, { next: { revalidate } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.products) ? data.products : [];
  } catch {
    // If the backend is unreachable at build time, still emit the static pages.
    return [];
  }
}

export default async function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  const products = await getProducts();
  const productPages = products
    .filter((p) => p && p.id != null)
    .map((p) => ({
      url: `${SITE_URL}/products/${p.id}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [...staticPages, ...productPages];
}
