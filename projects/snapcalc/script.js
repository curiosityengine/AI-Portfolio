const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleInput(inputBox.value.toLowerCase());
  }
});

function handleInput(input) {
  let result = null;

  // -------------------------
  // UNIT CONVERSIONS
  // -------------------------

  // kg → pound
  let kgMatch = input.match(/(\d+(\.\d+)?)\s*(kg|kilogram).*(pound|lb)/);
  if (kgMatch) {
    result = parseFloat(kgMatch[1]) * 2.20462;
  }

  // km → miles
  let kmMatch = input.match(/(\d+(\.\d+)?)\s*(km|kilometer).*(mile)/);
  if (kmMatch) {
    result = parseFloat(kmMatch[1]) * 0.621371;
  }

  // -------------------------
  // PERCENTAGE
  // -------------------------

  // "10% of 500"
  let percentMatch = input.match(/(\d+)%\s*of\s*(\d+)/);
  if (percentMatch) {
    result = (parseFloat(percentMatch[1]) / 100) * parseFloat(percentMatch[2]);
  }

  // -------------------------
  // SPLIT
  // -------------------------

  // "split 1200 among 3"
  let splitMatch = input.match(/split\s*(\d+)\s*(among|between)\s*(\d+)/);
  if (splitMatch) {
    result = parseFloat(splitMatch[1]) / parseFloat(splitMatch[3]);
  }

  // -------------------------
  // TIME
  // -------------------------

  // "2 hours 30 min to minutes"
  let timeMatch = input.match(/(\d+)\s*hour.*(\d+)\s*min.*minute/);
  if (timeMatch) {
    result = (parseFloat(timeMatch[1]) * 60) + parseFloat(timeMatch[2]);
  }

  // -------------------------
  // BASIC MATH
  // -------------------------

  try {
    if (!result && /^[\d+\-*/().\s]+$/.test(input)) {
      result = eval(input);
    }
  } catch (e) {}

  // -------------------------
  // OUTPUT CONTROL
  // -------------------------

  if (result !== null) {
    resultDiv.textContent = formatResult(result);
  } else {
    resultDiv.textContent = "?";
  }
}

function formatResult(num) {
  return parseFloat(num.toFixed(2)).toString();
}
