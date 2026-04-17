let currentPage = 1;
let currentQuery = "nature";
let isLoading = false;

const ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"; // 🔥 put your key here

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const downloadBtn = document.getElementById("downloadBtn");
  const closeModal = document.getElementById("closeModal");

  // ===== FETCH FROM UNSPLASH =====
  async function fetchWallpapers(query, page) {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=20&orientation=landscape`,
        {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
          }
        }
      );

      const data = await res.json();

      return data.results.map(photo => ({
        url: photo.urls.full,
        thumb: photo.urls.small,
        color: photo.color || "#111"
      }));
    } catch (err) {
      console.error("API Error:", err);
      return [];
    }
  }

  // ===== MODAL =====
  function openModal(item) {
    modal.classList.remove("hidden");
    modalImg.src = item.url;

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

  // ===== LOAD =====
  async function loadMore() {
    if (isLoading) return;
    isLoading = true;

    const results = await fetchWallpapers(currentQuery, currentPage);

    results.forEach(item => {
      const div = document.createElement("div");
      div.className = "wall-card";
      div.style.position = "relative";
      div.style.backgroundColor = item.color;

      const img = document.createElement("img");
      img.src = item.thumb;
      img.loading = "lazy";

      img.addEventListener("click", () => openModal(item));

      // ❤️ Favorite
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
    isLoading = false;
  }

  // ===== RESET =====
  function resetGallery(query) {
    gallery.innerHTML = "";
    currentPage = 1;
    currentQuery = query;
    loadMore();
  }

  // ===== INIT =====
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

  // ===== CATEGORY =====
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
