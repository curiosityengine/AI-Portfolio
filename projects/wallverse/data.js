let currentPage = 1;
let currentQuery = "nature";
let isLoading = false;
let allWallpapers = [];

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");

  async function loadMore() {
    if (isLoading) return;
    isLoading = true;

    try {
      const results = await searchWallpapers(currentQuery, currentPage);
      allWallpapers = [...allWallpapers, ...results];

      results.forEach(item => {
        const div = document.createElement("div");
        div.className = "wall-card";

        const img = document.createElement("img");
        img.src = item.thumb;
        img.loading = "lazy";
        img.alt = item.tags?.[0] || item.category;

        // simple click
        img.addEventListener("click", () => {
          window.open(item.url, "_blank");
        });

        div.appendChild(img);
        gallery.appendChild(div);
      });

      currentPage++;
    } catch (err) {
      console.error("Error:", err);
    }

    isLoading = false;
  }

  function resetGallery(query) {
    gallery.innerHTML = "";
    currentPage = 1;
    currentQuery = query;
    allWallpapers = [];
    loadMore();
  }

  // initial load
  loadMore();

  // search
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim() || "nature";
      resetGallery(query);
    }, 500);
  });

  // category
  window.filterCategory = function(category) {
    searchInput.value = "";
    resetGallery(category === "all" ? "nature" : category);
  };

  // infinite scroll
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !isLoading
    ) {
      loadMore();
    }
  });
});
