const inputBox  = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");
const WORKER_URL = "https://snapcalc.princemishra11.workers.dev";

// ── Cache with max size ────────────────────
const cache    = new Map();
const MAX_CACHE = 100;
function cacheSet(key, val) {
  if (cache.size >= MAX_CACHE) cache.delete(cache.keys().next().value);
  cache.set(key, val);
}

let debounceTimer = null;

// ── Input handler ─────────────────────────
inputBox.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  const val = inputBox.value.trim();
  if (!val) { setResult("_", "idle"); return; }
  setResult("·  ·  ·", "loading");
  debounceTimer = setTimeout(() => calculate(val), 600);
});

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clearTimeout(debounceTimer);
    const val = inputBox.value.trim();
    if (val) calculate(val);
  }
});

// ── Calculate ─────────────────────────────
async function calculate(input) {
  const key = input.toLowerCase().trim();
  if (cache.has(key)) {
    setResult(cache.get(key), "pop");
    return;
  }
  setResult("·  ·  ·", "loading");
  try {
    const res = await fetch(`${WORKER_URL}/api/calculate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: key }),
    });

    const data = await res.json();

    // 🔥 CHANGED HERE (important)
    const answer = (data.result ?? "?").toString().trim();

    cacheSet(key, answer);
    setResult(answer, "pop");
  } catch (err) {
    console.error(err);
    setResult("!", "error");
  }
}

// ── Set result ────────────────────────────
function setResult(value, state) {
  resultDiv.className = state;
  resultDiv.textContent = value;
}

// ── Click to copy ─────────────────────────
resultDiv.addEventListener("click", () => {
  const val = resultDiv.textContent;
  if (!val || val === "_" || val === "·  ·  ·" || val === "!" || val === "?") return;
  navigator.clipboard.writeText(val).then(() => {
    const prev = resultDiv.textContent;
    const prevClass = resultDiv.className;
    resultDiv.textContent = "copied!";
    resultDiv.className = "copied";
    setTimeout(() => {
      resultDiv.textContent = prev;
      resultDiv.className = prevClass;
    }, 1000);
  });
});

// ── Example chips ─────────────────────────
document.querySelectorAll(".example-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    inputBox.value = chip.dataset.query;
    inputBox.focus();
    calculate(chip.dataset.query);
  });
});
