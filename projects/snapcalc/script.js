const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

// 🔑 Use prompt (safe for GitHub)
const API_KEY = prompt("Enter Gemini API Key");

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

  // 1️⃣ Local logic first
  let localResult = handleLocal(input);
  if (localResult !== null) {
    resultDiv.textContent = formatResult(localResult);
    return;
  }

  // 2️⃣ AI fallback
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
// LOCAL ENGINE (INDIA + USD FIX)
// ----------------------------
function handleLocal(input) {

  let n = extractNumber(input);

  // -------------------------
  // LAKH CRORE → USD (BILLION)
  // -------------------------
  if ((input.includes("lakh crore")) && (input.includes("dollar") || input.includes("usd"))) {
    if (n) {
      let inr = n * 1e12; // lakh crore → INR
      let usd = inr / 83; // INR → USD
      return usd / 1e9;   // USD → billion
    }
  }

  // -------------------------
  // LAKH CRORE → NUMBER
  // -------------------------
  if (input.includes("lakh crore")) {
    if (n) return n * 1e12;
  }

  // -------------------------
  // CRORE → USD
  // -------------------------
  if (input.includes("crore") && (input.includes("usd") || input.includes("dollar"))) {
    if (n) {
      let inr = n * 1e7;
      return inr / 83;
    }
  }

  // -------------------------
  // LAKH → USD
  // -------------------------
  if (input.includes("lakh") && (input.includes("usd") || input.includes("dollar"))) {
    if (n) {
      let inr = n * 1e5;
      return inr / 83;
    }
  }

  // -------------------------
  // LAKH → NUMBER
  // -------------------------
  if (input.includes("lakh")) {
    if (n) return n * 1e5;
  }

  // -------------------------
  // CRORE → NUMBER
  // -------------------------
  if (input.includes("crore")) {
    if (n) return n * 1e7;
  }

  // -------------------------
  // KATTHA → SQFT
  // -------------------------
  if (input.includes("kattha") && input.includes("sqft")) {
    if (n) return n * 1361;
  }

  // -------------------------
  // KG → POUND
  // -------------------------
  if (input.includes("kg") && (input.includes("pound") || input.includes("lb"))) {
    if (n) return n * 2.20462;
  }

  // -------------------------
  // KM → MILE
  // -------------------------
  if (input.includes("km") && input.includes("mile")) {
    if (n) return n * 0.621371;
  }

  // -------------------------
  // PERCENTAGE
  // -------------------------
  let percent = input.match(/(\d+)%\s*of\s*(\d+)/);
  if (percent) {
    return (percent[1] / 100) * percent[2];
  }

  // -------------------------
  // SPLIT
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
// AI PARSER (FREE GEMINI)
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

{"type":"conversion","value":1,"from":"kg","to":"pound"}
{"type":"percentage","value":10,"total":500}
{"type":"split","value":1200,"people":3}
{"type":"math","expression":"5+6*2"}

Support:
lakh, crore, kattha, usd, dollar
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
      if (data.from === "kg") return data.value * 2.20462;
      if (data.from === "km") return data.value * 0.621371;
      if (data.from === "kattha") return data.value * 1361;
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
