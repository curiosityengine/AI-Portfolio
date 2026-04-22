const inputBox  = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");
const WORKER_URL = "https://snapcalc.princemishra11.workers.dev";

// ── Cache with max size ────────────────────
const cache = new Map();
const MAX_CACHE = 100;
function cacheSet(key, val) {
  if (cache.size >= MAX_CACHE) cache.delete(cache.keys().next().value);
  cache.set(key, val);
}

// ── History ───────────────────────────────
const HISTORY_KEY = "snapcalc_history";
const MAX_HISTORY = 10;

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); }
  catch { return []; }
}

function addToHistory(input, answer) {
  if (answer === "?" || answer === "!" || answer === "_") return;
  let history = getHistory();
  history = history.filter(h => h.input !== input);
  history.unshift({ input, answer, time: Date.now() });
  if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const panel = document.getElementById("historyPanel");
  const list  = document.getElementById("historyList");
  if (!panel || !list) return;
  const history = getHistory();
  if (history.length === 0) { panel.style.display = "none"; return; }
  panel.style.display = "block";
  list.innerHTML = history.map((h, i) => `
    <div class="history-item" onclick="loadHistory(${i})">
      <span class="history-input">${h.input}</span>
      <span class="history-answer">${h.answer}</span>
    </div>
  `).join("");
}

function loadHistory(index) {
  const history = getHistory();
  const h = history[index];
  if (!h) return;
  inputBox.value = h.input;
  currentExplanation = "";
  hideExplanation();
  setResult(h.answer, "pop");
  showVariations(h.input, h.answer);
  inputBox.focus();
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
}

// ── Variations ────────────────────────────
function showVariations(input, answer) {
  const wrap = document.getElementById("variationsWrap");
  if (!wrap) return;
  const num = parseFloat(String(answer).replace(/,/g, ""));
  if (isNaN(num)) { wrap.style.display = "none"; return; }
  const variations = [
    { label: "+10%", value: num * 1.1 },
    { label: "-10%", value: num * 0.9 },
    { label: "×2",   value: num * 2   },
    { label: "÷2",   value: num / 2   },
  ];
  wrap.style.display = "flex";
  wrap.innerHTML = variations.map(v => {
    const formatted = formatNum(v.value);
    return `<button class="var-btn" onclick="applyVariation('${formatted}', '${v.label}')" title="${v.label} = ${formatted}">${v.label}</button>`;
  }).join("");
}

function applyVariation(value, label) {
  setResult(value, "pop");
  document.querySelectorAll(".var-btn").forEach(b => {
    if (b.textContent === label) {
      b.classList.add("active");
      setTimeout(() => b.classList.remove("active"), 400);
    }
  });
}

function formatNum(num) {
  if (isNaN(num) || !isFinite(num)) return "?";
  const rounded = parseFloat(num.toPrecision(6));
  return rounded.toLocaleString("en-IN", { maximumFractionDigits: 4, minimumFractionDigits: 0 });
}

function hideVariations() {
  const wrap = document.getElementById("variationsWrap");
  if (wrap) wrap.style.display = "none";
}

// ── Explanation ────────────────────────────
let currentExplanation = "";

function hideExplanation() {
  const box = document.getElementById("explanationBox");
  const btn = document.getElementById("explainBtn");
  if (box) box.style.display = "none";
  if (btn) btn.classList.remove("active");
}

function toggleExplanation() {
  const box = document.getElementById("explanationBox");
  const btn = document.getElementById("explainBtn");
  if (!box || !btn || !currentExplanation) return;
  const isOpen = box.style.display === "block";
  box.style.display = isOpen ? "none" : "block";
  box.textContent   = currentExplanation;
  btn.classList.toggle("active", !isOpen);
}

// ── Request ID ─────────────────────────────
let currentRequestId = 0;
let debounceTimer    = null;

// ── Input handler ─────────────────────────
inputBox.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  const val = inputBox.value.trim();
  if (!val) {
    setResult("_", "idle");
    hideVariations();
    hideExplanation();
    return;
  }
  setResult("·  ·  ·", "loading");
  hideVariations();
  hideExplanation();
  debounceTimer = setTimeout(() => calculate(val), 200);
});

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clearTimeout(debounceTimer);
    const val = inputBox.value.trim();
    if (val) calculate(val);
  }
  if (e.key === "Escape") {
    inputBox.value = "";
    setResult("_", "idle");
    hideVariations();
    hideExplanation();
  }
});

// ── Calculate ─────────────────────────────
async function calculate(input) {
  const key = input.toLowerCase().trim();

  // Check cache
  if (cache.has(key)) {
    const cached = cache.get(key);
    const ans = typeof cached === "object" ? cached.answer : cached;
    const exp = typeof cached === "object" ? cached.explanation : "";
    currentExplanation = exp;
    setResult(ans, "pop");
    showVariations(key, ans);
    return;
  }

  setResult("·  ·  ·", "loading");
  const requestId = ++currentRequestId;

  try {
    const res = await fetch(`${WORKER_URL}/api/calculate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: key }),
    });
    const data = await res.json();

    if (requestId !== currentRequestId) return; // stale

    const answer      = (data.answer ?? "?").toString().trim();
    currentExplanation = data.explanation || "";

    cacheSet(key, { answer, explanation: currentExplanation });
    setResult(answer, "pop");
    showVariations(key, answer);
    addToHistory(input, answer);
    hideExplanation();

  } catch (err) {
    console.error(err);
    if (requestId !== currentRequestId) return;
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
    const prev      = resultDiv.textContent;
    const prevClass = resultDiv.className;
    resultDiv.textContent = "copied!";
    resultDiv.className   = "copied";
    setTimeout(() => {
      resultDiv.textContent = prev;
      resultDiv.className   = prevClass;
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

// ── Init ──────────────────────────────────
renderHistory();
