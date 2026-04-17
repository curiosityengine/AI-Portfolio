async function enhanceQuery(userInput) {
  try {
    const res = await fetch("http://localhost:3000/ai-search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: userInput })
    });

    const data = await res.json();
    return data.query;

  } catch (err) {
    console.error(err);
    return userInput;
  }
}

// script.js — WallVerse app logic
let currentPage = 1;
let currentQuery = "nature";
let isLoading = false;

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");
  const loader = document.getElementById("loader");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const downloadBtn = document.getElementById("downloadBtn");
  const closeModal = document.getElementById("closeModal");

  // ===== MODAL =====
function openModal(item) {
  modal.classList.remove("hidden");
  modalImg.src = item.url;

  downloadBtn.onclick = async () => {
    try {
      downloadBtn.innerText = "⏳ Downloading...";
      downloadBtn.disabled = true;

      let imageUrl = item.url;

      // Only Unsplash needs the special download endpoint
      if (item.source === "Unsplash" && item.download_url) {
        const trackRes = await fetch(item.download_url, {
          headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
        });
        const trackData = await trackRes.json();
        imageUrl = trackData.url;
      }

      const imgRes = await fetch(imageUrl);
      const blob = await imgRes.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `wallverse-${item.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);

      downloadBtn.innerText = "✅ Downloaded!";
      setTimeout(() => {
        downloadBtn.innerText = "⬇️ Download";
        downloadBtn.disabled = false;
      }, 2000);

    } catch (err) {
      console.error("Download error:", err);
      downloadBtn.innerText = "❌ Failed";
      downloadBtn.disabled = false;
    }
  };
}

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalImg.src = "";
  });

  // Close modal on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modalImg.src = "";
    }
  });

  // ===== LOAD WALLPAPERS =====
  async function loadMore() {
    if (isLoading) return;
    isLoading = true;
    loader.style.display = "block";

    const results = await searchWallpapers(currentQuery, currentPage);

    results.forEach(item => {
      const div = document.createElement("div");
      div.className = "wall-card";
      div.style.backgroundColor = item.color;

      const img = document.createElement("img");
      img.src = item.thumb;
      img.loading = "lazy";
      img.alt = item.tags?.[0] || item.category;
      div.addEventListener("click", () => openModal(item));

      // ❤️ Favorite button
      const favBtn = document.createElement("button");
      favBtn.innerText = "❤️";
      favBtn.className = "fav-btn";
      favBtn.title = "Save to favorites";
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let saved = JSON.parse(localStorage.getItem("favorites")) || [];
        const alreadySaved = saved.find(w => w.id === item.id);
        if (!alreadySaved) {
          saved.push(item);
          localStorage.setItem("favorites", JSON.stringify(saved));
          favBtn.innerText = "💜";
        } else {
          favBtn.innerText = "💜";
        }
      });

      div.appendChild(img);
      div.appendChild(favBtn);
      gallery.appendChild(div);
    });

    currentPage++;
    isLoading = false;
    loader.style.display = "none";
  }

  // ===== RESET GALLERY =====
  function resetGallery(query) {
    gallery.innerHTML = "";
    currentPage = 1;
    currentQuery = query;
    loadMore();
  }

  // ===== INITIAL LOAD =====
  loadMore();

  // ===== SEARCH (debounced) =====
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
const userInput = searchInput.value.trim() || "nature";
const aiQuery = await enhanceQuery(userInput);
resetGallery(aiQuery);
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
