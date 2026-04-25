// ── Stations Data ─────────────────────────────────────────────────────────────
const STATIONS = [
  { name: "Agartala Junction", code: "AGTL" },
  { name: "Agra Cantonment", code: "AGC" },
  { name: "Agra Fort", code: "AF" },
  { name: "Ahmedabad Junction", code: "ADI" },
  { name: "Ajmer Junction", code: "AII" },
  { name: "Akola Junction", code: "AK" },
  { name: "Aligarh Junction", code: "ALJN" },
  { name: "Alipurduar Junction", code: "APDJ" },
  { name: "Alleppey Junction", code: "ALLP" },
  { name: "Ambala Cantonment", code: "UMB" },
  { name: "Ambikapur Junction", code: "ABKP" },
  { name: "Amravati Junction", code: "AMI" },
  { name: "Amritsar Junction", code: "ASR" },
  { name: "Anand Vihar Terminal", code: "ANVT" },
  { name: "Asansol Junction", code: "ASN" },
  { name: "Aurangabad Junction", code: "AWB" },
  { name: "Ayodhya Junction", code: "AY" },
  { name: "Ballia Junction", code: "BUI" },
  { name: "Bandra Terminus", code: "BDTS" },
  { name: "Bareilly Junction", code: "BE" },
  { name: "Basti Junction", code: "BST" },
  { name: "Belagavi Junction", code: "BGM" },
  { name: "Bengaluru Cantonment", code: "BNC" },
  { name: "Berhampur Junction", code: "BAM" },
  { name: "Bhatinda Junction", code: "BTI" },
  { name: "Bhavnagar Terminus", code: "BVC" },
  { name: "Bhopal Junction", code: "BPL" },
  { name: "Bhopal Habibganj", code: "HBJ" },
  { name: "Bhuj Junction", code: "BHUJ" },
  { name: "Bhagalpur Junction", code: "BGP" },
  { name: "Bhubaneswar Junction", code: "BBS" },
  { name: "Bikaner Junction", code: "BKN" },
  { name: "Bilaspur Junction", code: "BSP" },
  { name: "Bokaro Steel City", code: "BKSC" },
  { name: "Chandigarh Junction", code: "CDG" },
  { name: "Champa Junction", code: "CPH" },
  { name: "Chandrapur Junction", code: "CD" },
  { name: "Chennai Beach", code: "MSB" },
  { name: "Chennai Central", code: "MAS" },
  { name: "Chennai Egmore", code: "MS" },
  { name: "Coimbatore Junction", code: "CBE" },
  { name: "Cuttack Junction", code: "CTC" },
  { name: "Dadar Junction", code: "DR" },
  { name: "Darbhanga Junction", code: "DBG" },
  { name: "Davangere Junction", code: "DVG" },
  { name: "Dehradun Junction", code: "DDN" },
  { name: "Delhi Junction", code: "DLI" },
  { name: "Delhi Sarai Rohilla", code: "DEE" },
  { name: "Deoghar Junction", code: "DGHR" },
  { name: "Dhanbad Junction", code: "DHN" },
  { name: "Dibrugarh Junction", code: "DBRG" },
  { name: "Dimapur Junction", code: "DMV" },
  { name: "Durg Junction", code: "DURG" },
  { name: "Eluru Junction", code: "EE" },
  { name: "Ernakulam Junction", code: "ERS" },
  { name: "Erode Junction", code: "ED" },
  { name: "Etawah Junction", code: "ETW" },
  { name: "Faizabad Junction", code: "FD" },
  { name: "Firozpur Cantonment", code: "FZR" },
  { name: "Gandhinagar Capital", code: "GNC" },
  { name: "Gaya Junction", code: "GAYA" },
  { name: "Ghaziabad Junction", code: "GZB" },
  { name: "Ghazipur City", code: "GCT" },
  { name: "Gondia Junction", code: "G" },
  { name: "Gonda Junction", code: "GD" },
  { name: "Gorakhpur Junction", code: "GKP" },
  { name: "Guntakal Junction", code: "GTL" },
  { name: "Guntur Junction", code: "GNT" },
  { name: "Guwahati Junction", code: "GHY" },
  { name: "Gwalior Junction", code: "GWL" },
  { name: "Hardoi Junction", code: "HDI" },
  { name: "Haridwar Junction", code: "HW" },
  { name: "Hazrat Nizamuddin", code: "NZM" },
  { name: "Hisar Junction", code: "HSR" },
  { name: "Howrah Junction", code: "HWH" },
  { name: "Hubballi Junction", code: "UBL" },
  { name: "Hyderabad Deccan", code: "HYB" },
  { name: "Indore Junction", code: "INDB" },
  { name: "Itarsi Junction", code: "ET" },
  { name: "Jabalpur Junction", code: "JBP" },
  { name: "Jagdalpur Junction", code: "JDB" },
  { name: "Jaipur Junction", code: "JP" },
  { name: "Jalandhar City Junction", code: "JUC" },
  { name: "Jamshedpur Tatanagar", code: "TATA" },
  { name: "Jaunpur Junction", code: "JNU" },
  { name: "Jhansi Junction", code: "JHS" },
  { name: "Jodhpur Junction", code: "JU" },
  { name: "Kacheguda Junction", code: "KCG" },
  { name: "Kanpur Central", code: "CNB" },
  { name: "Katni Junction", code: "KTE" },
  { name: "Katpadi Junction", code: "KPD" },
  { name: "Kathgodam Junction", code: "KGM" },
  { name: "Kharagpur Junction", code: "KGP" },
  { name: "Kolhapur Junction", code: "KOP" },
  { name: "Kolkata Junction", code: "KOAA" },
  { name: "Kollam Junction", code: "QLN" },
  { name: "Korba Junction", code: "KRBA" },
  { name: "Kota Junction", code: "KOTA" },
  { name: "Kottayam Junction", code: "KTYM" },
  { name: "Kozhikode Junction", code: "CLT" },
  { name: "KSR Bengaluru City", code: "SBC" },
  { name: "Kurnool City", code: "KRNT" },
  { name: "Kurukshetra Junction", code: "KKDE" },
  { name: "Lokmanya Tilak Terminus", code: "LTT" },
  { name: "Lucknow Junction", code: "LKO" },
  { name: "Lucknow NR Junction", code: "LJN" },
  { name: "Ludhiana Junction", code: "LDH" },
  { name: "Lumding Junction", code: "LMG" },
  { name: "Madurai Junction", code: "MDU" },
  { name: "Malda Town", code: "MLDT" },
  { name: "Mangaluru Central", code: "MAQ" },
  { name: "Mathura Junction", code: "MTJ" },
  { name: "Mau Junction", code: "MAU" },
  { name: "Meerut City Junction", code: "MTC" },
  { name: "Mirzapur Junction", code: "MZP" },
  { name: "Moradabad Junction", code: "MB" },
  { name: "Mumbai Central", code: "BCT" },
  { name: "Mumbai CSMT", code: "CSMT" },
  { name: "Muzaffarpur Junction", code: "MFP" },
  { name: "Mysuru Junction", code: "MYS" },
  { name: "Nagercoil Junction", code: "NCJ" },
  { name: "Nagpur Junction", code: "NGP" },
  { name: "Nalgonda Junction", code: "NLDA" },
  { name: "Nanded Junction", code: "NED" },
  { name: "Nashik Road Junction", code: "NK" },
  { name: "Nellore Junction", code: "NLR" },
  { name: "New Delhi Junction", code: "NDLS" },
  { name: "New Jalpaiguri Junction", code: "NJP" },
  { name: "New Tinsukia Junction", code: "NTSK" },
  { name: "Nizamabad Junction", code: "NZB" },
  { name: "Palakkad Junction", code: "PGT" },
  { name: "Panipat Junction", code: "PNP" },
  { name: "Pathankot Junction", code: "PTK" },
  { name: "Patiala Junction", code: "PTA" },
  { name: "Patna Junction", code: "PNBE" },
  { name: "Prayagraj Junction", code: "PRYJ" },
  { name: "Pt. Deen Dayal Upadhyaya Jn", code: "DDU" },
  { name: "Pune Junction", code: "PUNE" },
  { name: "Puri Junction", code: "PURI" },
  { name: "Raigarh Junction", code: "RIG" },
  { name: "Raipur Junction", code: "R" },
  { name: "Rajahmundry Junction", code: "RJY" },
  { name: "Rajkot Junction", code: "RJT" },
  { name: "Ranchi Junction", code: "RNC" },
  { name: "Ratlam Junction", code: "RTM" },
  { name: "Rohtak Junction", code: "ROK" },
  { name: "Roorkee Junction", code: "RK" },
  { name: "Rourkela Junction", code: "ROU" },
  { name: "Sagar Junction", code: "SGO" },
  { name: "Saharanpur Junction", code: "SRE" },
  { name: "Salem Junction", code: "SA" },
  { name: "Samastipur Junction", code: "SPJ" },
  { name: "Sambalpur Junction", code: "SBP" },
  { name: "Satna Junction", code: "STA" },
  { name: "Sealdah Junction", code: "SDAH" },
  { name: "Secunderabad Junction", code: "SC" },
  { name: "Shahjahanpur Junction", code: "SPN" },
  { name: "Shalimar Junction", code: "SHM" },
  { name: "Silchar Junction", code: "SCL" },
  { name: "Sitapur City", code: "STP" },
  { name: "Solapur Junction", code: "SUR" },
  { name: "Surat Junction", code: "ST" },
  { name: "Thanjavur Junction", code: "TJ" },
  { name: "Thiruvananthapuram Central", code: "TVC" },
  { name: "Thrissur Junction", code: "TCR" },
  { name: "Tiruchirappalli Junction", code: "TPJ" },
  { name: "Tirunelveli Junction", code: "TEN" },
  { name: "Tirupati Junction", code: "TPTY" },
  { name: "Tumkur Junction", code: "TK" },
  { name: "Udaipur City", code: "UDZ" },
  { name: "Ujjain Junction", code: "UJN" },
  { name: "Vadodara Junction", code: "BRC" },
  { name: "Varanasi Junction", code: "BSB" },
  { name: "Vijayawada Junction", code: "BZA" },
  { name: "Visakhapatnam Junction", code: "VSKP" },
  { name: "Warangal Junction", code: "WL" },
  { name: "Wardha Junction", code: "WR" },
  { name: "Yesvantpur Junction", code: "YPR" },
].sort((a, b) => a.name.localeCompare(b.name));

// ── State ─────────────────────────────────────────────────────────────────────
let fromStation = null;
let toStation   = null;
let loaderTimer = null;
let loaderStep  = 0;

const LOADER_STEPS = [
  "Checking direct train connections…",
  "Identifying major junctions nearby…",
  "Mapping hop routes via key corridors…",
  "Analysing reliability and wait risk…",
  "Synthesising best route options…",
];

// ── DOM Ready ─────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  setupAutocomplete("fromInput", "fromList", (s) => {
    fromStation = s;
    document.getElementById("fromInput").value = s.name;
    document.getElementById("fromInput").closest(".hr-input-row").classList.add("has-value");
  });
  setupAutocomplete("toInput", "toList", (s) => {
    toStation = s;
    document.getElementById("toInput").value = s.name;
    document.getElementById("toInput").closest(".hr-input-row").classList.add("has-value");
  });

  document.getElementById("fromInput").addEventListener("keydown", e => { if (e.key === "Enter") document.getElementById("toInput").focus(); });
  document.getElementById("toInput").addEventListener("keydown",   e => { if (e.key === "Enter") findRoutes(); });

  // Clear buttons
  document.getElementById("clearFrom").addEventListener("click", () => clearStation("from"));
  document.getElementById("clearTo").addEventListener("click",   () => clearStation("to"));

  updateKeyDot();
});

// ── Autocomplete ──────────────────────────────────────────────────────────────
function setupAutocomplete(inputId, listId, onSelect) {
  const input = document.getElementById(inputId);
  const list  = document.getElementById(listId);
  let activeIdx = -1;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    activeIdx = -1;
    if (q.length < 1) { closeList(list); return; }

    const matches = STATIONS.filter(s =>
      s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)
    ).slice(0, 8);

    if (!matches.length) { closeList(list); return; }

    list.innerHTML = matches.map((s, i) => `
      <div class="hr-ac-item" data-idx="${i}">
        <span class="hr-ac-name">${highlight(s.name, q)}</span>
        <span class="hr-ac-code">${s.code}</span>
      </div>
    `).join("");

    list.querySelectorAll(".hr-ac-item").forEach((el, i) => {
      el.addEventListener("mousedown", (e) => {
        e.preventDefault();
        onSelect(matches[i]);
        closeList(list);
      });
    });

    list.classList.add("open");
    list._matches = matches;
  });

  input.addEventListener("keydown", (e) => {
    if (!list.classList.contains("open")) return;
    const items = list.querySelectorAll(".hr-ac-item");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      updateActive(items, activeIdx);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      updateActive(items, activeIdx);
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      onSelect(list._matches[activeIdx]);
      input.value = list._matches[activeIdx].name;
      input.closest(".hr-input-row").classList.add("has-value");
      closeList(list);
    } else if (e.key === "Escape") {
      closeList(list);
    }
  });

  input.addEventListener("blur", () => setTimeout(() => closeList(list), 150));
}

function highlight(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return escHtml(text);
  return escHtml(text.slice(0, idx))
    + `<strong style="color:var(--accent)">${escHtml(text.slice(idx, idx + query.length))}</strong>`
    + escHtml(text.slice(idx + query.length));
}

function updateActive(items, idx) {
  items.forEach((el, i) => el.classList.toggle("active", i === idx));
}

function closeList(list) {
  list.classList.remove("open");
  list.innerHTML = "";
}

function clearStation(which) {
  if (which === "from") {
    fromStation = null;
    document.getElementById("fromInput").value = "";
    document.getElementById("fromInput").closest(".hr-input-row").classList.remove("has-value");
    document.getElementById("fromInput").focus();
  } else {
    toStation = null;
    document.getElementById("toInput").value = "";
    document.getElementById("toInput").closest(".hr-input-row").classList.remove("has-value");
    document.getElementById("toInput").focus();
  }
}

// ── Swap ──────────────────────────────────────────────────────────────────────
function swapStations() {
  const tmp = fromStation;
  fromStation = toStation;
  toStation   = tmp;

  document.getElementById("fromInput").value = fromStation?.name || "";
  document.getElementById("toInput").value   = toStation?.name   || "";

  document.getElementById("fromInput").closest(".hr-input-row").classList.toggle("has-value", !!fromStation);
  document.getElementById("toInput").closest(".hr-input-row").classList.toggle("has-value", !!toStation);
}

// ── Quick Examples ────────────────────────────────────────────────────────────
function setExample(fromName, toName) {
  const from = STATIONS.find(s => s.name === fromName);
  const to   = STATIONS.find(s => s.name === toName);
  if (!from || !to) return;

  fromStation = from;
  toStation   = to;
  document.getElementById("fromInput").value = from.name;
  document.getElementById("toInput").value   = to.name;
  document.getElementById("fromInput").closest(".hr-input-row").classList.add("has-value");
  document.getElementById("toInput").closest(".hr-input-row").classList.add("has-value");
}

// ── API Key ───────────────────────────────────────────────────────────────────
function getApiKey() { return localStorage.getItem("hoprail_groq_key") || ""; }

function saveApiKey() {
  const val = document.getElementById("keyInput").value.trim();
  if (!val) return;
  localStorage.setItem("hoprail_groq_key", val);
  closeKeyModal();
  updateKeyDot();
}

function openKeyModal()  { document.getElementById("keyModal").classList.add("open"); document.getElementById("keyInput").value = getApiKey(); document.getElementById("keyInput").focus(); }
function closeKeyModal() { document.getElementById("keyModal").classList.remove("open"); }

function updateKeyDot() {
  const dot = document.getElementById("keyDot");
  dot.classList.toggle("set", !!getApiKey());
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeKeyModal(); });

// ── Main Search ───────────────────────────────────────────────────────────────
async function findRoutes() {
  const fromVal = document.getElementById("fromInput").value.trim();
  const toVal   = document.getElementById("toInput").value.trim();

  if (!fromVal) { document.getElementById("fromInput").focus(); shake("fromInput"); return; }
  if (!toVal)   { document.getElementById("toInput").focus();   shake("toInput");   return; }

  const fromName = fromStation?.name || fromVal;
  const toName   = toStation?.name   || toVal;

  if (fromName.toLowerCase() === toName.toLowerCase()) {
    shake("toInput"); return;
  }

  const apiKey = getApiKey();
  if (!apiKey) { openKeyModal(); return; }

  showLoader();
  hideAll();

  try {
    const data = await callGroq(fromName, toName, apiKey);
    hideLoader();
    renderResults(data, fromName, toName);
  } catch (err) {
    hideLoader();
    showError(err.message || "Something went wrong. Please try again.");
  }
}

function shake(inputId) {
  const el = document.getElementById(inputId);
  el.style.animation = "none";
  el.offsetHeight;
  el.closest(".hr-input-row").style.borderColor = "rgba(239,68,68,0.5)";
  setTimeout(() => el.closest(".hr-input-row").style.borderColor = "", 1200);
}

// ── Groq API ──────────────────────────────────────────────────────────────────
async function callGroq(from, to, apiKey) {
  const systemPrompt = `You are HopRail, an expert on Indian Railways. You have deep knowledge of train routes, junction stations, and connectivity across India. Always respond with valid JSON only — no markdown, no code fences, no explanation.`;

  const userPrompt = `Plan a journey from "${from}" to "${to}" on Indian Railways.

Analyse:
1. Direct train connectivity (how many trains run, how often)
2. If direct connectivity is poor (fewer than 3 trains per week), identify 2–3 optimal hop routes via major railway junctions
3. For each leg of each route, list real well-known train names

Return this exact JSON (no markdown, just raw JSON):
{
  "sourceStation": "full station name as known on Indian Railways",
  "destinationStation": "full station name as known on Indian Railways",
  "directTrains": {
    "frequency": "none|rare|weekly|few_weekly|daily|multiple_daily",
    "count": 0,
    "trains": [
      {"name": "Train Name", "number": "12345", "daysPerWeek": 1, "approxDuration": "~18 hrs"}
    ],
    "note": "brief note about direct connectivity"
  },
  "recommendation": "direct|hop",
  "hopRoutes": [
    {
      "id": 1,
      "label": "Via [Junction Name]",
      "reliability": "high|medium|low",
      "estimatedTotalTime": "24–28 hrs",
      "legs": [
        {
          "from": "Station Name",
          "to": "Station Name",
          "keyTrains": ["Train Name 1", "Train Name 2", "Train Name 3"],
          "frequency": "Multiple daily",
          "approxDuration": "2–3 hrs",
          "distance": "~150 km",
          "waitRisk": "low|medium|high",
          "notes": ""
        }
      ],
      "pros": ["Pro point 1", "Pro point 2"],
      "cons": ["Con point"],
      "tip": "Practical booking or travel tip"
    }
  ],
  "insight": "2–3 sentence insight about travelling between these two cities on Indian Railways."
}

Rules:
- If recommendation is "direct", hopRoutes can be empty or contain 1 alternative for reference
- Always include 2–3 hopRoutes when recommendation is "hop"
- Use actual train names you know (e.g. Chhattisgarh Express, Gondwana Express, Rajdhani)
- waitRisk: low = daily multiple trains, medium = once daily, high = few per week
- Be honest about uncertainty — if unsure of exact count, give best estimate`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0,
      max_tokens: 2000,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user",   content: userPrompt },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    if (res.status === 401) throw new Error("Invalid API key. Please check your Groq key in settings.");
    if (res.status === 429) throw new Error("Rate limit hit. Please wait a moment and try again.");
    throw new Error(err?.error?.message || `API error ${res.status}`);
  }

  const json = await res.json();
  const raw  = json.choices?.[0]?.message?.content || "";

  return parseGroqResponse(raw);
}

function parseGroqResponse(raw) {
  // Strip markdown fences if present
  let text = raw.trim();
  text = text.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "");

  try {
    return JSON.parse(text);
  } catch {
    // Try to find JSON object in the response
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try { return JSON.parse(match[0]); } catch {}
    }
    throw new Error("Could not parse AI response. Please try again.");
  }
}

// ── Loader ────────────────────────────────────────────────────────────────────
function showLoader() {
  document.getElementById("loader").style.display = "flex";
  loaderStep = 0;
  updateLoaderStep();
  loaderTimer = setInterval(() => {
    loaderStep = Math.min(loaderStep + 1, LOADER_STEPS.length - 1);
    updateLoaderStep();
  }, 1800);
}

function updateLoaderStep() {
  document.getElementById("loaderStepText").textContent = LOADER_STEPS[loaderStep];
  const pct = Math.round(((loaderStep + 1) / LOADER_STEPS.length) * 85);
  document.getElementById("loaderBar").style.width = pct + "%";
}

function hideLoader() {
  clearInterval(loaderTimer);
  document.getElementById("loaderBar").style.width = "100%";
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderBar").style.width = "0%";
  }, 300);
}

// ── Render Results ────────────────────────────────────────────────────────────
function renderResults(data, fromRaw, toRaw) {
  const from = data.sourceStation      || fromRaw;
  const to   = data.destinationStation || toRaw;

  document.getElementById("resultFrom").textContent = from;
  document.getElementById("resultTo").textContent   = to;

  const isDirect = data.recommendation === "direct";
  const trains   = data.directTrains?.trains || [];
  const freq     = data.directTrains?.frequency || "none";

  // Direct trains section
  renderDirectSection(data.directTrains, isDirect);

  // Hop routes
  const hopSection = document.getElementById("hopSection");
  if (!isDirect && data.hopRoutes?.length) {
    document.getElementById("hopSectionLabel").textContent =
      `Recommended Hop Route${data.hopRoutes.length > 1 ? "s" : ""}`;
    document.getElementById("routesList").innerHTML =
      data.hopRoutes.map((r, i) => renderRouteCard(r, i)).join("");
    hopSection.style.display = "block";
  } else if (isDirect && data.hopRoutes?.length) {
    document.getElementById("hopSectionLabel").textContent = "Alternative Hop Route";
    document.getElementById("routesList").innerHTML =
      data.hopRoutes.slice(0, 1).map((r, i) => renderRouteCard(r, i)).join("");
    hopSection.style.display = "block";
  } else {
    hopSection.style.display = "none";
  }

  // Insight
  if (data.insight) {
    document.getElementById("insightText").textContent = data.insight;
    document.getElementById("insightBox").style.display = "flex";
  } else {
    document.getElementById("insightBox").style.display = "none";
  }

  document.getElementById("resultsMain").style.display = "block";
  document.getElementById("hero").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDirectSection(directTrains, isDirect) {
  const section = document.getElementById("directSection");
  const freq    = directTrains?.frequency || "none";
  const trains  = directTrains?.trains    || [];
  const note    = directTrains?.note      || "";

  let cls, icon, title, sub;

  if (isDirect) {
    cls   = "good";
    icon  = "✦";
    title = "Direct trains available";
    sub   = note || `${trains.length} direct train${trains.length !== 1 ? "s" : ""} found`;
  } else if (freq === "rare" || freq === "weekly" || freq === "few_weekly") {
    cls   = "sparse";
    icon  = "⚠";
    title = "Very limited direct trains";
    sub   = note || "Hop route recommended for reliable travel";
  } else {
    cls   = "none";
    icon  = "✕";
    title = "No direct trains found";
    sub   = note || "Hop route is the only option";
  }

  const trainsHtml = trains.length ? `
    <div class="hr-train-list">
      ${trains.map(t => `
        <div class="hr-train-item">
          <span class="hr-train-num">${escHtml(t.number || "—")}</span>
          <span class="hr-train-name">${escHtml(t.name || "Unknown")}</span>
          <span class="hr-train-days">${t.daysPerWeek ? `${t.daysPerWeek}×/wk` : escHtml(t.approxDuration || "")}</span>
        </div>
      `).join("")}
    </div>` : "";

  section.innerHTML = `
    <p class="hr-section-label">Direct Connectivity</p>
    <div class="hr-direct-card ${cls}">
      <div class="hr-direct-header">
        <span class="hr-direct-icon">${icon}</span>
        <div>
          <div class="hr-direct-title">${title}</div>
          <div class="hr-direct-sub">${escHtml(sub)}</div>
        </div>
      </div>
      ${trainsHtml}
    </div>
  `;
}

function renderRouteCard(route, index) {
  const legs = route.legs || [];
  const stations = buildStationList(legs);

  const stripHtml = `
    <div class="hr-route-strip">
      <div class="hr-strip-inner">
        ${stations.map((s, i) => {
          const isFirst = i === 0;
          const isLast  = i === stations.length - 1;
          const cls     = isFirst ? "origin" : isLast ? "dest" : "hop";
          const lineHtml = i < stations.length - 1
            ? `<div class="hr-strip-line"></div>` : "";
          return `
            <div class="hr-strip-station">
              <div class="hr-strip-dot ${cls}"></div>
              <div class="hr-strip-name ${cls}">${escHtml(shortName(s))}</div>
            </div>
            ${lineHtml}
          `;
        }).join("")}
      </div>
    </div>
  `;

  const legsHtml = legs.map(leg => `
    <div class="hr-leg">
      <div class="hr-leg-header">
        <div class="hr-leg-route">
          <span>${escHtml(shortName(leg.from))}</span>
          <span class="hr-leg-arrow">→</span>
          <span>${escHtml(shortName(leg.to))}</span>
        </div>
        <div class="hr-leg-meta">
          <span class="hr-wait-badge ${leg.waitRisk || "low"}">${waitLabel(leg.waitRisk)}</span>
        </div>
      </div>
      <div class="hr-leg-detail">
        ${leg.frequency      ? `<span class="hr-leg-stat"><span class="hr-leg-stat-icon">⟳</span>${escHtml(leg.frequency)}</span>` : ""}
        ${leg.approxDuration ? `<span class="hr-leg-stat"><span class="hr-leg-stat-icon">◷</span>${escHtml(leg.approxDuration)}</span>` : ""}
        ${leg.distance       ? `<span class="hr-leg-stat"><span class="hr-leg-stat-icon">↔</span>${escHtml(leg.distance)}</span>` : ""}
      </div>
      ${leg.keyTrains?.length ? `
        <div class="hr-train-chips">
          ${leg.keyTrains.slice(0, 4).map(t => `<span class="hr-train-chip">${escHtml(t)}</span>`).join("")}
        </div>
      ` : ""}
      ${leg.notes ? `<div style="font-size:0.72rem;color:var(--muted-light);margin-top:0.4rem">${escHtml(leg.notes)}</div>` : ""}
    </div>
  `).join("");

  const footerHtml = [
    ...(route.pros || []).map(p => `<div class="hr-route-pro">${escHtml(p)}</div>`),
    ...(route.cons || []).map(c => `<div class="hr-route-con">${escHtml(c)}</div>`),
    ...(route.tip  ? [`<div class="hr-route-tip">${escHtml(route.tip)}</div>`] : []),
  ].join("");

  return `
    <div class="hr-route-card">
      <div class="hr-route-head">
        <div>
          <span class="hr-route-num">Route ${index + 1}</span>
          <div class="hr-route-label">${escHtml(route.label || "Hop Route")}</div>
        </div>
        <div class="hr-route-badges">
          <span class="hr-reliability-badge ${route.reliability || "medium"}">${reliabilityLabel(route.reliability)}</span>
          ${route.estimatedTotalTime ? `<span class="hr-time-badge">⏱ ${escHtml(route.estimatedTotalTime)}</span>` : ""}
        </div>
      </div>
      ${stripHtml}
      <div class="hr-legs">${legsHtml}</div>
      ${footerHtml ? `<div class="hr-route-footer">${footerHtml}</div>` : ""}
    </div>
  `;
}

function buildStationList(legs) {
  if (!legs.length) return [];
  const result = [legs[0].from];
  for (const leg of legs) result.push(leg.to);
  return result;
}

function shortName(name) {
  if (!name) return "";
  return name
    .replace(" Junction", " Jn")
    .replace(" Cantonment", " Cantt")
    .replace(" Terminal", " Terml")
    .replace(" Terminus", " Terml");
}

function waitLabel(risk) {
  if (risk === "high")   return "High wait risk";
  if (risk === "medium") return "Medium wait risk";
  return "Low wait risk";
}

function reliabilityLabel(r) {
  if (r === "high")   return "● High reliability";
  if (r === "low")    return "● Low reliability";
  return "● Medium reliability";
}

// ── Reset ─────────────────────────────────────────────────────────────────────
function resetSearch() {
  hideAll();
  document.getElementById("hero").style.display = "block";
  document.getElementById("fromInput").focus();
}

function hideAll() {
  document.getElementById("resultsMain").style.display = "none";
  document.getElementById("emptyState").style.display  = "none";
  document.getElementById("loader").style.display      = "none";
}

function showError(msg) {
  document.getElementById("emptyMsg").textContent = msg;
  document.getElementById("emptyState").style.display = "flex";
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
