const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

// 🔑 Safe for GitHub
const API_KEY = prompt("Enter Gemini API Key");

// ----------------------------
// UNIT NORMALIZATION
// ----------------------------
const unitMap = {
  kg: ["kg", "kilogram", "kilograms"],
  pound: ["pound", "pounds", "lb", "lbs"],
  km: ["km", "kilometer", "kilometers"],
  mile: ["mile", "miles"],
  acre: ["acre", "acres"],
  sqft: ["sqft", "square feet", "square foot", "ft2"],
  kattha: ["kattha", "katha"],
  usd: ["usd", "dollar", "dollars"]
};

// Reverse lookup
function normalizeUnit(word) {
  for (let key in unitMap) {
    if (unitMap[key].includes(word)) return key;
  }
  return word;
}

// ----------------------------
// CONVERSION TABLE
// ----------------------------
const conversions = {
  kg: { pound: 2.20462 },
  km: { mile: 0.621371 },
  acre: { sqft: 43560 },
  sqft: { acre: 1 / 43560 },
  kattha: { sqft: 1361 }
};

// ----------------------------
// EVENT
// ----------------------------
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    processInput(inputBox.value.trim().toLowerCase());
  }
});

// ----------------------------
// MAIN FLOW
// ----------------------------
async function processInput(input) {
  resultDiv.textContent = "...";

  let local = handleLocal(input);
  if (local !== null) {
    resultDiv.textContent = formatResult(local);
    return;
  }

  try {
    const parsed = await parseWithAI(input);
    const result = compute(parsed);
    resultDiv.textContent = result !== null ? formatResult(result) : "?";
  } catch (err) {
    console.error(err);
    resultDiv.textContent = "!";
  }
}

// ----------------------------
// LOCAL ENGINE (SMART)
// ----------------------------
function handleLocal(input) {

  let n = extractNumber(input);
  if (!n) return null;

  // -------------------------
  // INR → USD (lakh/crore)
  // -------------------------
  if (input.includes("usd") || input.includes("dollar")) {

    // lakh crore
    if (input.includes("lakh crore")) {
      let inr = n * 1e12;
      return (inr / 83) / 1e9; // billion USD
    }

    // crore
    if (input.includes("crore")) {
      let inr = n * 1e7;
      return inr / 83;
    }

    // lakh
    if (input.includes("lakh")) {
      let inr = n * 1e5;
      return inr / 83;
    }
  }

  // -------------------------
  // Indian numbers → number
  // -------------------------
  if (input.includes("lakh crore")) return n * 1e12;
  if (input.includes("crore")) return n * 1e7;
  if (input.includes("lakh")) return n * 1e5;

  // -------------------------
  // GENERIC UNIT CONVERSION
  // -------------------------
  let words = input.split(" ");

  let fromUnit = null;
  let toUnit = null;

  for (let w of words) {
    let u = normalizeUnit(w);
    if (conversions[u] && !fromUnit) {
      fromUnit = u;
    } else if (fromUnit && conversions[fromUnit][u]) {
      toUnit = u;
    }
  }

  if (fromUnit && toUnit) {
    return n * conversions[fromUnit][toUnit];
  }

  // -------------------------
  // PERCENTAGE
  // -------------------------
  let percent = input.match(/(\d+)%\s*of\s*(\d+)/);
  if (percent) {
    return (percent[1] / 100) * percent[2];
  }

  // -------------------------
  // SPLIT (Hinglish supported)
  // -------------------------
  if (input.includes("split") || input.includes("baato")) {
    let nums = input.match(/(\d+).*?(\d+)/);
    if (nums) return nums[1] / nums[2];
  }

  // -------------------------
  // BASIC MATH
  // -------------------------
  if (/^[\d+\-*/().\s]+$/.test(input)) {
    try { return eval(input); } catch {}
  }

  return null;
}

// ----------------------------
// AI PARSER (fallback)
// ----------------------------
async function parseWithAI(input) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `
Convert into JSON. ONLY JSON.

Input: ${input}

Formats:

{"type":"conversion","value":1,"from":"acre","to":"sqft"}
{"type":"percentage","value":10,"total":500}
{"type":"split","value":1200,"people":3}
{"type":"math","expression":"5+6*2"}

Support Indian + Hinglish.
`
          }]
        }]
      })
    }
  );

  const data = await res.json();
  let text = data.candidates[0].content.parts[0].text;

  text = text.replace(/```json|```/g, "").trim();

  return JSON.parse(text);
}

// ----------------------------
// COMPUTE ENGINE
// ----------------------------
function compute(data) {
  if (!data) return null;

  switch (data.type) {

    case "conversion":
      if (conversions[data.from] && conversions[data.from][data.to]) {
        return data.value * conversions[data.from][data.to];
      }
      break;

    case "percentage":
      return (data.value / 100) * data.total;

    case "split":
      return data.value / data.people;

    case "math":
      try { return eval(data.expression); } catch { return null; }
  }

  return null;
}

// ----------------------------
// HELPERS
// ----------------------------
function extractNumber(str) {
  let m = str.match(/(\d+(\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

function formatResult(num) {
  return parseFloat(num.toFixed(2)).toString();
}
