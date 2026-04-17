// ─────────────────────────────────────────────
// SnapCalc — Gemini-powered calculator
// ─────────────────────────────────────────────

const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

// 🔑 API KEY (prompt for MVP)
const API_KEY = prompt("Enter your Gemini API key:");

// 🧠 Cache (avoid repeat API calls)
const cache = new Map();

// ⏱️ Debounce
let debounceTimer = null;

// ─────────────────────────────────────────────
// INPUT HANDLING
// ─────────────────────────────────────────────

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

  debounceTimer = setTimeout(() => {
    calculate(val);
  }, 500);
});

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clearTimeout(debounceTimer);
    const val = inputBox.value.trim();
    if (val) calculate(val);
  }
});

// ─────────────────────────────────────────────
// MAIN CALCULATION FLOW
// ─────────────────────────────────────────────

async function calculate(input) {
  const normalized = input.toLowerCase().trim();

  // Cache hit
  if (cache.has(normalized)) {
    display(cache.get(normalized));
    return;
  }

  try {
    const answer = await askGemini(normalized);

    const clean = sanitizeOutput(answer);

    cache.set(normalized, clean);
    display(clean);

  } catch (err) {
    console.error(err);
    showError();
  }
}

// ─────────────────────────────────────────────
// GEMINI API CALL
// ─────────────────────────────────────────────

async function askGemini(input) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: SYSTEM_PROMPT + "\n\nUser: " + input
              }
            ]
          }
        ]
      })
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const data = await res.json();

  return data.candidates?.[0]?.content?.parts?.[0]?.text || "?";
}

// ─────────────────────────────────────────────
// OUTPUT SANITIZATION (CRITICAL)
// ─────────────────────────────────────────────

function sanitizeOutput(text) {
  if (!text) return "?";

  let cleaned = text.trim();

  // Remove unwanted words/symbols
  cleaned = cleaned.replace(/[^0-9.\-]/g, "");

  // Prevent empty or invalid output
  if (!cleaned || cleaned === "." || cleaned === "-") {
    return "?";
  }

  return cleaned;
}

// ─────────────────────────────────────────────
// DISPLAY
// ─────────────────────────────────────────────

function display(value) {
  resultDiv.classList.remove("error");
  resultDiv.textContent = value;
}

function showError() {
  resultDiv.textContent = "!";
  resultDiv.classList.add("error");
}

// ─────────────────────────────────────────────
// SYSTEM PROMPT (CORE LOGIC)
// ─────────────────────────────────────────────

const SYSTEM_PROMPT = `
You are SnapCalc, an instant calculator.

STRICT RULES:
- Return ONLY the final answer
- No explanation
- No steps
- No text
- No units unless user explicitly asks

- lakh = 100000
- crore = 10000000

- Round to max 4 significant digits
- Remove trailing zeros

- If unsure → return ?

Examples:
1 kg to pound → 2.205
15% of 8400 → 1260
1 lakh + 50000 → 150000
sqrt(144) → 12
37 celsius in fahrenheit → 98.6
1 kattha in sqft → 1361
240 / 12 → 20
2 to the power of 10 → 1024
1 million to lakh → 10
1 acre to sqft → 43560
20 lakh crore in billion dollars → 240
`;
