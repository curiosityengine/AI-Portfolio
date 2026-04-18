const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

const WORKER_URL = "https://snapcalc.princemishra11.workers.dev";

const cache = new Map();
let debounceTimer = null;

inputBox.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  const val = inputBox.value.trim();

  if (!val) {
    resultDiv.textContent = "...";
    resultDiv.classList.remove("error");
    return;
  }

  resultDiv.textContent = "·";
  resultDiv.classList.remove("error");

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
    display(cache.get(key));
    return;
  }

  try {
    const res = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: key }),
    });

    const data = await res.json();
    const answer = data.answer ?? "?";
    cache.set(key, answer);
    display(answer);
  } catch (err) {
    console.error(err);
    resultDiv.textContent = "!";
    resultDiv.classList.add("error");
  }
}

function display(value) {
  resultDiv.classList.remove("error");
  resultDiv.textContent = value;
}
