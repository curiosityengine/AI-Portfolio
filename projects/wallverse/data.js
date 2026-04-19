const UNSPLASH_KEY = "jG8I0T_9dNVF3p2zFjjjxdTHJi9l2cuzutlpiytWXfM";
const PIXABAY_KEY  = "55480324-56c6d823dfc3fc9c5805c16b0";
const PEXELS_KEY   = "SOUjV6HIxdiZpJQkA2cey65IKj68rTH8ZJzfF6QulaA8KfXNwMtHTloo";
const WALLHAVEN_KEY = "yxQAVZjLLwHJKS5yyYcLhIcOQrrNFw7i";

// ── Unsplash ──────────────────────────────────────────
async function fetchUnsplash(query, page, color = null, width = null, height = null) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=15&orientation=landscape${color ? `&color=${color}` : ""}${width ? `&w=${width}&h=${height}` : ""}`,
      { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
    );
    const data = await res.json();
    return data.results.map(photo => ({
      id: "unsplash_" + photo.id,
      url: photo.urls.full,
      thumb: photo.urls.small,
      download_url: photo.links.download_location,
      category: query,
      tags: photo.tags?.map(t => t.title) || [],
      author: photo.user.name,
      color: photo.color || "#111",
      source: "Unsplash"
    }));
  } catch (err) {
    console.error("Unsplash failed:", err);
    return []; // if one API fails, others still load
  }
}

// ── Pixabay ───────────────────────────────────────────
async function fetchPixabay(query, page) {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${query}&page=${page}&per_page=15&image_type=photo&orientation=horizontal&safesearch=true`
    );
    const data = await res.json();
    return data.hits.map(photo => ({
      id: "pixabay_" + photo.id,
      url: photo.largeImageURL,
      thumb: photo.previewURL,
      download_url: null, // Pixabay allows direct download
      category: query,
      tags: photo.tags?.split(", ") || [],
      author: photo.user,
      color: "#111",
      source: "Pixabay"
    }));
  } catch (err) {
    console.error("Pixabay failed:", err);
    return [];
  }
}

// ── Wallhaven ────────────────────────────────────────────
// ── Wallhaven (now with optional NSFW) ─────────────────────────────
async function fetchWallhaven(query, page, includeNSFW = false) {
  try {
    let purity = "100"; // default: SFW only
    if (includeNSFW) {
      purity = "111";   // SFW + Sketchy + NSFW (most common for full access)
      // Alternative: "011" for Sketchy + NSFW only, or "001" for NSFW only
    }

    const res = await fetch(
      `https://wallhaven.cc/api/v1/search?q=${encodeURIComponent(query)}&page=${page}&ratios=16x9&categories=111&purity=${purity}&apikey=${WALLHAVEN_KEY}`
    );

    if (!res.ok) throw new Error("Wallhaven error");

    const data = await res.json();

    return data.data.map(photo => ({
      id: "wallhaven_" + photo.id,
      url: photo.path,
      thumb: photo.thumbs.large,
      color: photo.colors?.[0] || "#111",
      source: "Wallhaven",
      nsfw: photo.purity !== "sfw"   // optional flag for your UI
    }));
  } catch (err) {
    console.error("Wallhaven failed:", err);
    return [];
  }
}

// ── Pexels ────────────────────────────────────────────
async function fetchPexels(query, page) {
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=15&orientation=landscape`,
      { headers: { Authorization: PEXELS_KEY } }
    );
    const data = await res.json();
    return data.photos.map(photo => ({
      id: "pexels_" + photo.id,
      url: photo.src.original,
      thumb: photo.src.medium,
      download_url: null, // Pexels allows direct download
      category: query,
      tags: [query],
      author: photo.photographer,
      color: photo.avg_color || "#111",
      source: "Pexels"
    }));
  } catch (err) {
    console.error("Pexels failed:", err);
    return [];
  }
}

// ===== PICSUM =====
async function fetchPicsum(query, page) {
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=15`
  );
  const data = await res.json();
  return data.map(photo => ({
    id: "picsum_" + photo.id,
    url: `https://picsum.photos/id/${photo.id}/1920/1080`,
    thumb: `https://picsum.photos/id/${photo.id}/400/300`,
    color: "#111",
    source: "Picsum"
  }));
}

// ── Main function (called by script.js) ──────────────
async function searchWallpapers(query = "nature", page = 1, includeNSFW = false, color = null, width = null, height = null) {
  const [unsplash, pixabay, pexels, wallhaven, picsum] = await Promise.all([
    fetchUnsplash(query, page, color, width, height),
    fetchPixabay(query, page),
    fetchPexels(query, page),
    fetchWallhaven(query, page, includeNSFW),
    fetchPicsum(query, page)
  ]);

  const combined = [...unsplash, ...pixabay, ...pexels, ...wallhaven, ...picsum];
  return combined.sort(() => Math.random() - 0.5);
}
