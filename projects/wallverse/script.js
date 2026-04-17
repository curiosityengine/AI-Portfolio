let currentPage = 1;
let currentQuery = "nature";
let isLoading = false;
let allWallpapers = [];

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");

  // ✅ MODAL (ONLY ONCE)
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

  // ── Load wallpapers ──────────────────────────
  async function loadMore() {
    if (isLoading) return;
    isLoading = true;

    const results = await searchWallpapers(currentQuery, currentPage);
    allWallpapers = [...allWallpapers, ...results];

    results.forEach(item => {
      const div = document.createElement("div");
      div.className = "wall-card";
      div.style.backgroundColor = item.color;
      div.style.position = "relative";

      const img = document.createElement("img");
      img.src = item.thumb;
      img.loading = "lazy";
      img.alt = item.tags[0] || item.category;

      // ✅ MODAL CLICK
      img.addEventListener("click", () => {
        openModal(item);
      });

      // ✅ FAVORITE BUTTON
      const favBtn = document.createElement("button");
      favBtn.innerText = "❤️";
      favBtn.style.position = "absolute";
      favBtn.style.top = "10px";
      favBtn.style.right = "10px";
      favBtn.style.background = "transparent";
      favBtn.style.border = "none";
      favBtn.style.cursor = "pointer";

      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        let saved = JSON.parse(localStorage.getItem("favorites")) || [];
        saved.push(item);
        localStorage.setItem("favorites", JSON.stringify(saved));

        alert("Saved!");
      });

      div.appendChild(img);
      div.appendChild(favBtn);
      gallery.appendChild(div);
    });

    currentPage++;
    isLoading = false;
  }

  // ── Reset ──────────────────────────
  function resetGallery(query) {
    gallery.innerHTML = "";
    currentPage = 1;
    currentQuery = query;
    allWallpapers = [];
    loadMore();
  }

  // ── Initial load ───────────────────
  loadMore();

  // ── Search ─────────────────────────
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim() || "nature";
      resetGallery(query);
    }, 500);
  });

  // ── Category ───────────────────────
  window.filterCategory = function(category) {
    searchInput.value = "";
    resetGallery(category === "all" ? "nature" : category);
  };

  // ── Infinite Scroll ────────────────
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !isLoading
    ) {
      loadMore();
    }
  });
});
