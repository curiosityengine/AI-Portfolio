const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

// Trigger on Enter
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleInput(inputBox.value.toLowerCase().trim());
  }
});

function handleInput(input) {
  console.log("Input:", input); // DEBUG

  let result = null;

  // -------------------------
  // KG → POUND
  // -------------------------
  if (input.includes("kg") && (input.includes("pound") || input.includes("lb"))) {
    let num = extractNumber(input);
    if (num !== null) result = num * 2.20462;
  }

  // -------------------------
  // KM → MILES
  // -------------------------
  else if (input.includes("km") && input.includes("mile")) {
    let num = extractNumber(input);
    if (num !== null) result = num * 0.621371;
  }

  // -------------------------
  // PERCENTAGE
  // -------------------------
  else if (input.includes("%") && input.includes("of")) {
    let parts = input.match(/(\d+)\s*%\s*of\s*(\d+)/);
    if (parts) {
      result = (parseFloat(parts[1]) / 100) * parseFloat(parts[2]);
    }
  }

  // -------------------------
  // SPLIT
  // -------------------------
  else if (input.includes("split")) {
    let parts = input.match(/(\d+).*(\d+)/);
    if (parts) {
      result = parseFloat(parts[1]) / parseFloat(parts[2]);
    }
  }

  // -------------------------
  // BASIC MATH
  // -------------------------
  else if (/^[\d+\-*/().\s]+$/.test(input)) {
    try {
      result = eval(input);
    } catch (e) {
      result = null;
    }
  }

  // -------------------------
  // OUTPUT
  // -------------------------
  if (result !== null && !isNaN(result)) {
    resultDiv.textContent = formatResult(result);
  } else {
    resultDiv.textContent = "?";
  }
}

// Extract first number
function extractNumber(str) {
  let match = str.match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : null;
}

// Format output
function formatResult(num) {
  return parseFloat(num.toFixed(2)).toString();
}
