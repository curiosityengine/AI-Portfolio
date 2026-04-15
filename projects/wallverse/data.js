// api.js
const ACCESS_KEY = "jG8I0T_9dNVF3p2zFjjjxdTHJi9l2cuzutlpiytWXfM";

export async function searchWallpapers(query = "nature", page = 1) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=30&orientation=landscape`,
    { headers: { Authorization: `Client-ID ${ACCESS_KEY}` } }
  );
  const data = await res.json();
  return data.results.map(photo => ({
    id: photo.id,
    url: photo.urls.regular,
    thumb: photo.urls.thumb,
    category: query,
    tags: photo.tags?.map(t => t.title) || [],
    author: photo.user.name,
    color: photo.color
  }));
}
