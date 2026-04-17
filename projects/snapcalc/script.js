const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

// 🔑 Safe for GitHub
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

  // 1️⃣ Try Math.js
  let processed = preprocess(input);
  let mathResult = tryMathJS(processed);

  if (mathResult !== null) {
    resultDiv.textContent = formatResult(mathResult);
    return;
  }

  // 2️⃣ Fallback to AI
  try {
    const answer = await getAIAnswer(input);
    resultDiv.textContent = answer;
  } catch (err) {
    console.error(err);
    resultDiv.textContent = "!";
  }
}

// ----------------------------
// PREPROCESSOR (INDIA SUPPORT)
// ----------------------------
function preprocess(input) {

  let str = input;

  // lakh crore → trillion
  if (str.includes("lakh crore")) {
    str = str.replace(/(\d+)/, (_, n) => `${n}e12`);
  }

  // crore → 1e7
  else if (str.includes("crore")) {
    str = str.replace(/(\d+)/, (_, n) => `${n}e7`);
  }

  // lakh → 1e5
  else if (str.includes("lakh")) {
    str = str.replace(/(\d+)/, (_, n) => `${n}e5`);
  }

  // kattha → sqft (manual handling later)
  if (str.includes("kattha")) {
    str = str.replace("kattha", "1361 sqft");
  }

  // Hinglish split
  if (str.includes("baato")) {
    let nums = str.match(/(\d+).*?(\d+)/);
    if (nums) return `${nums[1]} / ${nums[2]}`;
  }

  // remove extra words
  str = str.replace(/(kitna|hota|hai|me|in|ko|batao)/g, "");

  return str;
}

// ----------------------------
// MATH.JS ENGINE
// ----------------------------
function tryMathJS(input) {
  try {
    let result = math.evaluate(input);
    return typeof result === "number" ? result : null;
  } catch {
    return null;
  }
}

// ----------------------------
// AI FALLBACK (ONLY WHEN NEEDED)
// ----------------------------
async function getAIAnswer(input) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `
You are a calculator.

Return ONLY a number.
No explanation.
No units.

Input: ${input}
`
          }]
        }]
      })
    }
  );

  const data = await res.json();
  return data.candidates[0].content.parts[0].text.trim();
}

// ----------------------------
// FORMAT OUTPUT
// ----------------------------
function formatResult(num) {
  return parseFloat(Number(num).toFixed(2)).toString();
}
