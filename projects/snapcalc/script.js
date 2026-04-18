const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

const WORKER_URL = "https://snapcalc.princemishra11.workers.dev";

const cache = new Map();
let debounceTimer = null;

inputBox.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  const val = inputBox.value.trim();

  if (!val) {
    setResult("_", "idle");
    return;
  }

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
    const answer = data.answer ?? "?";
    cache.set(key, answer);
    setResult(answer, "pop");
  } catch (err) {
    console.error(err);
    setResult("!", "error");
  }
}

function setResult(value, state) {
  resultDiv.className = state;
  resultDiv.textContent = value;
}
