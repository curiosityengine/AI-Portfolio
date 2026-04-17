let currentPage = 1;
let currentQuery = "nature";
let isLoading = false;
let allWallpapers = [];

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");

  // ── Load and append wallpapers ──────────────────────────
  async function loadMore() {
    if (isLoading) return;
    isLoading = true;

    const results = await searchWallpapers(currentQuery, currentPage);
    allWallpapers = [...allWallpapers, ...results];
    img.addEventListener("click", () => {
  openModal(item);
});
    const favBtn = document.createElement("button");
favBtn.innerText = "❤️";
favBtn.style.position = "absolute";
favBtn.style.top = "10px";
favBtn.style.right = "10px";

favBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  let saved = JSON.parse(localStorage.getItem("favorites")) || [];
  saved.push(item);
  localStorage.setItem("favorites", JSON.stringify(saved));

  alert("Saved!");
});

div.style.position = "relative";
div.appendChild(favBtn);
    results.forEach(item => {
      const div = document.createElement("div");
      div.className = "wall-card";
      div.style.backgroundColor = item.color; // placeholder color while loading
      const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const downloadBtn = document.getElementById("downloadBtn");
const closeModal = document.getElementById("closeModal");

function openModal(item) {
  modal.classList.remove("hidden");
  modalImg.src = item.url;
  downloadBtn.href = item.url;
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
      const img = document.createElement("img");
      img.src = item.thumb;                   // thumb for fast grid load
      img.loading = "lazy";
      img.alt = item.tags[0] || item.category;

      // Click to view full resolution
      img.addEventListener("click", () => {
        window.open(item.url, "_blank");
      });

      div.appendChild(img);
      gallery.appendChild(div);
    });

    currentPage++;
    isLoading = false;
  }

  // ── Reset gallery for new search/filter ─────────────────
  function resetGallery(query) {
    gallery.innerHTML = "";
    currentPage = 1;
    currentQuery = query;
    allWallpapers = [];
    loadMore();
  }

  // ── Initial load ─────────────────────────────────────────
  loadMore();

  // ── Search ───────────────────────────────────────────────
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim() || "nature";
      resetGallery(query);
    }, 500); // wait 500ms after user stops typing
  });

  // ── Category filter ──────────────────────────────────────
  window.filterCategory = function(category) {
    searchInput.value = "";
    resetGallery(category === "all" ? "nature" : category);
  };

  // ── Infinite scroll ──────────────────────────────────────
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300
      && !isLoading
    ) {
      loadMore();
    }
  });
});
