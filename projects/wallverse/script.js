let currentPage = 1;
let currentQuery = "nature";
let isLoading = false;

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const downloadBtn = document.getElementById("downloadBtn");
  const closeModal = document.getElementById("closeModal");

  // ===== MODAL =====
  function openModal(item) {
    if (!modal || !modalImg || !downloadBtn) return;

    modal.classList.remove("hidden");
    modalImg.src = item.url;

    // ✅ direct download (no CORS issue)
    downloadBtn.onclick = () => {
      const a = document.createElement("a");
      a.href = item.url;
      a.download = "wallverse.jpg";
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  // ===== LOAD WALLPAPERS =====
  async function loadMore() {
    if (isLoading) return;
    isLoading = true;

    try {
      const results = await searchWallpapers(currentQuery, currentPage);

      if (!results || results.length === 0) {
        isLoading = false;
        return;
      }

      results.forEach(item => {
        const div = document.createElement("div");
        div.className = "wall-card";
        div.style.position = "relative";
        div.style.backgroundColor = item.color || "#111";

        const img = document.createElement("img");
        img.src = item.thumb;
        img.loading = "lazy";

        // ✅ click → modal
        img.addEventListener("click", () => openModal(item));

        // ✅ favorite button
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
        });

        div.appendChild(img);
        div.appendChild(favBtn);
        gallery.appendChild(div);
      });

      currentPage++;
    } catch (err) {
      console.error("Error loading wallpapers:", err);
    }

    isLoading = false;
  }

  // ===== RESET =====
  function resetGallery(query) {
    gallery.innerHTML = "";
    currentPage = 1;
    currentQuery = query;
    loadMore();
  }

  // ===== INITIAL LOAD =====
  loadMore();

  // ===== SEARCH =====
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim() || "nature";
      resetGallery(query);
    }, 500);
  });

  // ===== CATEGORY FILTER =====
  window.filterCategory = function(category) {
    searchInput.value = "";
    resetGallery(category === "all" ? "nature" : category);
  };

  // ===== INFINITE SCROLL =====
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !isLoading
    ) {
      loadMore();
    }
  });
});
