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

// ── Fallback DB helpers ────────────────────────────────────────────────────────
const _t = (n, nm, d, h) => ({ number: n, name: nm, daysPerWeek: d, approxDuration: h });
const _l = (fr, to, kt, fq, dur, dist, wr, nt) =>
  ({ from: fr, to, keyTrains: kt, frequency: fq, approxDuration: dur, distance: dist, waitRisk: wr, notes: nt || "" });
const _h = (lbl, rel, time, legs, pros, cons, tip, id) =>
  ({ id: id || 1, label: lbl, reliability: rel, estimatedTotalTime: time, legs, pros, cons, tip });
const _dr = (freq, cnt, trains, note, hops, insight) =>
  ({ directTrains: { frequency: freq, count: cnt, trains, note }, recommendation: "direct", hopRoutes: hops, insight });
const _hr = (freq, cnt, trains, note, hops, insight) =>
  ({ directTrains: { frequency: freq, count: cnt, trains, note }, recommendation: "hop", hopRoutes: hops, insight });

// ── Fallback Route Database (100 popular Indian Railway routes) ─────────────────
// Keyed as "FROM_CODE-TO_CODE". Bidirectional lookup supported via lookupFallback.
// Train data is approximate — always verify on IRCTC before booking.
const FALLBACK_DB = {

  // ── Delhi hub ────────────────────────────────────────────────────────────────
  "NDLS-MAS": _dr("multiple_daily", 6,
    [_t("12621","Tamil Nadu Express",7,"~33 hrs"), _t("12615","GT Express",7,"~35 hrs"), _t("22691","Rajdhani Express",3,"~28 hrs")],
    "6 direct trains; Rajdhani (~28 hrs) is fastest",
    [],
    "Delhi–Chennai spans ~2,200 km. Tamil Nadu Express is always in demand — book 60+ days ahead. Rajdhani (Tue/Wed/Fri) is fastest but runs only a few days a week."
  ),

  "NDLS-HWH": _dr("multiple_daily", 8,
    [_t("12301","Rajdhani Express",7,"~17 hrs"), _t("12303","Poorva Express",7,"~23 hrs"), _t("12311","Kalka Mail",7,"~30 hrs")],
    "8 trains; Rajdhani 12301 is fastest at ~17 hrs via Grand Chord",
    [],
    "Delhi–Howrah is one of India's grandest rail corridors. Rajdhani 12301 departs 4:55 PM and reaches Howrah at 9:55 AM. Book AC classes well in advance."
  ),

  "NDLS-CSMT": _dr("multiple_daily", 10,
    [_t("12951","Mumbai Rajdhani",7,"~16 hrs"), _t("12953","August Kranti Raj.",7,"~17 hrs"), _t("12925","Paschim Express",7,"~24 hrs")],
    "10+ trains; Rajdhani 12951 is fastest at ~16 hrs",
    [],
    "Delhi–Mumbai is India's busiest intercity corridor. Rajdhani 12951 departs 4:55 PM, arrives 8:35 AM. Book 60–120 days ahead for AC berths."
  ),

  "NDLS-BCT": _dr("multiple_daily", 8,
    [_t("12951","Mumbai Rajdhani",7,"~16 hrs"), _t("12471","Swaraj Express",7,"~20 hrs"), _t("14311","Ala Hazrat Express",7,"~22 hrs")],
    "8 trains to Mumbai Central including Rajdhani",
    [],
    "Mumbai Central (BCT) is the Western Railway terminus. Rajdhani 12951 is the premium choice; several express trains also serve this route daily."
  ),

  "NDLS-SBC": _dr("daily", 3,
    [_t("12627","Karnataka Express",7,"~40 hrs"), _t("22691","KSR Bengaluru Raj.",3,"~34 hrs"), _t("12649","Karnataka SC Kranti",6,"~36 hrs")],
    "3 daily trains; Rajdhani is fastest but runs 3 days/week",
    [],
    "Delhi–Bengaluru is a ~2,000 km overnight-plus journey. Karnataka Express runs daily and is the most reliable option; book Rajdhani well ahead."
  ),

  "NDLS-SC": _dr("daily", 4,
    [_t("12723","Telangana Express",7,"~26 hrs"), _t("12437","Rajdhani Express",7,"~24 hrs"), _t("12701","Hussain Sagar Exp.",7,"~28 hrs")],
    "4 trains daily; AP/Telangana Express are the classic choices",
    [],
    "Delhi–Secunderabad has daily Rajdhani from Hazrat Nizamuddin. The Telangana Express is the historic Deccan corridor train. Journey time ~24–28 hrs."
  ),

  "NDLS-PNBE": _dr("multiple_daily", 7,
    [_t("12309","Rajdhani Express",7,"~16 hrs"), _t("12401","Magadh Express",7,"~22 hrs"), _t("12391","Shramjeevi Express",7,"~19 hrs")],
    "7 trains; Rajdhani 12309 is fastest at ~16 hrs",
    [],
    "Delhi–Patna is well connected with multiple daily trains including Rajdhani. Patna Junction is the gateway to Bihar — book ahead during festivals."
  ),

  "NDLS-LKO": _dr("multiple_daily", 12,
    [_t("12003","Lucknow Shatabdi",6,"~6.5 hrs"), _t("12229","Lucknow Mail",7,"~6.5 hrs"), _t("14211","Intercity Express",7,"~8 hrs")],
    "12+ trains; Shatabdi (chair-car day train) is the premium option",
    [],
    "Delhi–Lucknow is one of India's busiest short intercity routes. Shatabdi runs 6 days a week; Lucknow Mail is an iconic overnight option."
  ),

  "NDLS-JP": _dr("multiple_daily", 10,
    [_t("12015","Ajmer Shatabdi",7,"~4.5 hrs"), _t("12413","Ajmer Intercity",7,"~5.5 hrs"), _t("12958","Rajdhani Express",7,"~5 hrs")],
    "10+ trains; Shatabdi is fastest at ~4.5 hrs",
    [],
    "Delhi–Jaipur is one of the best-connected day routes. Shatabdi offers the fastest and most comfortable ride; multiple expresses also run daily."
  ),

  "NDLS-ADI": _dr("multiple_daily", 8,
    [_t("12957","Rajdhani Express",7,"~16 hrs"), _t("12915","Ashram Express",7,"~17 hrs"), _t("12909","Bandra–Garib Rath",7,"~18 hrs")],
    "8 trains; Rajdhani 12957 is fastest at ~16 hrs",
    [],
    "Delhi–Ahmedabad is a key Western Railway route. Rajdhani 12957 departs evening and arrives next morning. Good connectivity via both WR and CR."
  ),

  "NDLS-ASR": _dr("multiple_daily", 8,
    [_t("12031","Amritsar Shatabdi",7,"~6 hrs"), _t("14681","Amritsar Express",7,"~8 hrs"), _t("12903","Golden Temple Mail",7,"~7 hrs")],
    "8 trains; Shatabdi is fastest at ~6 hrs",
    [],
    "Delhi–Amritsar has frequent service including Shatabdi and the iconic Golden Temple Mail. Shatabdi is best for day travel."
  ),

  "NDLS-CDG": _dr("multiple_daily", 10,
    [_t("12011","Kalka Shatabdi",7,"~3.5 hrs"), _t("12053","Jan Shatabdi",7,"~4 hrs"), _t("12245","Chandigarh Exp.",7,"~4 hrs")],
    "10+ trains; Shatabdi is fastest at ~3.5 hrs",
    [],
    "Delhi–Chandigarh is one of the most frequent routes on Indian Railways. Kalka Shatabdi is the most popular; multiple intercity trains also run daily."
  ),

  "NDLS-BPL": _dr("multiple_daily", 8,
    [_t("12001","Bhopal Shatabdi",7,"~8 hrs"), _t("12155","Bhopal Express",7,"~11 hrs"), _t("12193","Shridham Express",7,"~9 hrs")],
    "8 trains; Shatabdi is fastest at ~8 hrs",
    [],
    "Delhi–Bhopal is well served by Shatabdi and several night expresses. Shatabdi is best for same-day travel; Shridham Express is popular for overnight."
  ),

  "NDLS-NGP": _dr("daily", 4,
    [_t("12671","Kamayani Express",7,"~14 hrs"), _t("12809","Mumbai Mail",7,"~16 hrs"), _t("12409","Gondwana Express",7,"~15 hrs")],
    "4 direct trains; journey ~14–16 hrs",
    [],
    "Delhi–Nagpur is a direct ~14-hour journey, making it feasible overnight. Nagpur is a key interchange for onward travel to South and East India."
  ),

  "NDLS-BSB": _dr("multiple_daily", 8,
    [_t("12559","Shiv Ganga Express",7,"~10 hrs"), _t("12581","Poorvottar SF Exp.",7,"~12 hrs"), _t("12307","Howrah Jodhpur Exp.",7,"~13 hrs")],
    "8 trains; Shiv Ganga Express is fastest at ~10 hrs",
    [],
    "Delhi–Varanasi is a spiritual corridor with excellent connectivity. Shiv Ganga and Kashi Express are popular; the Vande Bharat Express has also been introduced on this route."
  ),

  "NDLS-PRYJ": _dr("multiple_daily", 10,
    [_t("12417","Prayagraj Express",7,"~8 hrs"), _t("12275","Allahabad Duronto",4,"~8 hrs"), _t("12303","Poorva Express",7,"~8 hrs")],
    "10 trains; Prayagraj Express is the classic choice",
    [],
    "Delhi–Prayagraj (Allahabad) is very well connected. Multiple trains pass through; book early during Kumbh/Maha Kumbh as demand surges massively."
  ),

  "NDLS-GWL": _dr("multiple_daily", 10,
    [_t("12001","Bhopal Shatabdi",7,"~3.5 hrs"), _t("12627","Karnataka Express",7,"~5 hrs"), _t("12417","Prayagraj Express",7,"~4 hrs")],
    "10+ trains pass through Gwalior daily",
    [],
    "Gwalior is an en-route stop for many Delhi–South and Delhi–Central India trains. The Shatabdi reaches Gwalior in under 4 hours."
  ),

  "NDLS-JHS": _dr("multiple_daily", 8,
    [_t("12001","Bhopal Shatabdi",7,"~5 hrs"), _t("12627","Karnataka Express",7,"~6 hrs"), _t("12649","Karnataka SC Kranti",6,"~6.5 hrs")],
    "8 trains pass through Jhansi including Shatabdi",
    [],
    "Jhansi is on the Delhi–Mumbai/Bengaluru trunk route. Shatabdi passes through for a quick 5-hr ride; overnight expresses also stop here."
  ),

  "NDLS-CNB": _dr("multiple_daily", 15,
    [_t("12003","Lucknow Shatabdi",6,"~4 hrs"), _t("12275","Allahabad Duronto",4,"~4 hrs"), _t("12417","Prayagraj Express",7,"~5 hrs")],
    "15+ trains; many en-route trains stop at Kanpur",
    [],
    "Kanpur Central is one of India's busiest railway stations. Almost every Delhi–East India express stops here. Very easy to find a train."
  ),

  "NDLS-AII": _dr("daily", 6,
    [_t("12015","Ajmer Shatabdi",7,"~6 hrs"), _t("12988","Ajmer Intercity",7,"~7 hrs"), _t("12413","Ajmer SF Express",7,"~7 hrs")],
    "6 trains; Shatabdi is fastest at ~6 hrs",
    [],
    "Delhi–Ajmer is a popular pilgrimage route to Dargah Ajmer Sharif. Shatabdi is the best day option; several express trains run overnight."
  ),

  "NDLS-DDN": _dr("daily", 5,
    [_t("12017","Dehradun Shatabdi",7,"~5.5 hrs"), _t("14309","Ujjaini Express",7,"~7 hrs"), _t("12055","Jan Shatabdi",7,"~6 hrs")],
    "5 trains; Shatabdi is fastest at ~5.5 hrs",
    [],
    "Delhi–Dehradun is a scenic Shivalik foothill route. Shatabdi is the premium option; the Ujjaini Express is popular for overnight travel."
  ),

  "NDLS-JU": _dr("daily", 4,
    [_t("22477","Jodhpur SF Express",7,"~9 hrs"), _t("14659","Jodhpur Express",7,"~11 hrs"), _t("12461","Mandore Express",7,"~10 hrs")],
    "4 direct trains; ~9–11 hrs journey",
    [],
    "Delhi–Jodhpur (Blue City) has good daily connectivity. Mandore Express is the most popular overnight option; SF Express is faster."
  ),

  "NDLS-BKN": _dr("daily", 3,
    [_t("14707","Ranakpur Express",7,"~10 hrs"), _t("12453","Rajasthan SF Exp.",7,"~9 hrs"), _t("14887","Kalka Bikaner Exp.",7,"~12 hrs")],
    "3 trains; ~9–12 hrs journey",
    [],
    "Delhi–Bikaner is a key Rajasthan desert route. Ranakpur Express is a popular overnight choice; trains also connect via Jaipur."
  ),

  "NDLS-UDZ": _dr("few_weekly", 3,
    [_t("12963","Mewar Express",7,"~11 hrs"), _t("12991","Udaipur City Express",4,"~12 hrs"), _t("19665","Udaipur Intercity",3,"~13 hrs")],
    "3 trains including daily Mewar Express",
    [],
    "Delhi–Udaipur (Lake City) has good connectivity via Mewar Express, which runs daily. Book well ahead for tourist season (Oct–Mar)."
  ),

  "NDLS-RNC": _dr("daily", 3,
    [_t("12817","Jharkhand Swarna J.",7,"~18 hrs"), _t("12259","Rajdhani Express",7,"~20 hrs"), _t("18609","Ranchi Express",7,"~22 hrs")],
    "3 trains including Rajdhani; ~18–20 hrs",
    [],
    "Delhi–Ranchi is served by Jharkhand Sampark Kranti and Rajdhani. Rajdhani from Hazrat Nizamuddin is fastest at ~20 hrs."
  ),

  "NDLS-DHN": _dr("daily", 4,
    [_t("12380","Jalianwala Bagh Exp.",7,"~17 hrs"), _t("13049","Amritsar–Howrah Exp.",7,"~18 hrs"), _t("12311","Kalka Mail",7,"~19 hrs")],
    "4 trains pass through Dhanbad daily",
    [],
    "Dhanbad is on the Delhi–Kolkata Grand Chord route. Several expresses stop here en route to Howrah; journey from Delhi is ~17–19 hrs."
  ),

  "NDLS-TATA": _dr("few_weekly", 2,
    [_t("12817","Jharkhand Swarna J.",7,"~22 hrs"), _t("13287","South Bihar Exp.",7,"~24 hrs")],
    "2 direct trains; ~22–24 hrs",
    [],
    "Tatanagar (Jamshedpur) has limited direct trains from Delhi. The Jharkhand Sampark Kranti passes through. Consider hopping via Ranchi or Dhanbad."
  ),

  "NDLS-GHY": _dr("daily", 3,
    [_t("12423","NE Rajdhani Express",7,"~24 hrs"), _t("12505","Kamrup Express",7,"~32 hrs"), _t("12507","Guwahati Exp.",7,"~30 hrs")],
    "3 trains; NE Rajdhani is fastest at ~24 hrs",
    [],
    "Delhi–Guwahati is the Northeast Express corridor. NE Rajdhani from ANVT/NDLS is fastest. Always book well ahead — NE India trains fill up quickly."
  ),

  "NDLS-GAYA": _dr("daily", 5,
    [_t("12309","Rajdhani Express",7,"~13 hrs"), _t("12391","Shramjeevi Express",7,"~16 hrs"), _t("12401","Magadh Express",7,"~18 hrs")],
    "5 trains stop at Gaya en route to Patna",
    [],
    "Gaya is a major pilgrimage centre and is well-connected to Delhi. Many Delhi–Patna trains stop here. Rajdhani is fastest at ~13 hrs."
  ),

  "NDLS-NED": _dr("daily", 2,
    [_t("17057","Devagiri Express",7,"~25 hrs"), _t("12719","Hyderabad Express",7,"~28 hrs")],
    "2 direct trains; ~25–28 hrs via Nagpur",
    [],
    "Nanded (Marathwada region) has limited direct trains from Delhi. Devagiri Express via Nagpur is the primary option. Verify route and stops before booking."
  ),

  // ── Mumbai hub ────────────────────────────────────────────────────────────────
  "CSMT-PUNE": _dr("multiple_daily", 20,
    [_t("12124","Deccan Queen",6,"~3.5 hrs"), _t("12127","Intercity Express",7,"~3.5 hrs"), _t("11007","Deccan Express",7,"~3.5 hrs")],
    "20+ trains; Deccan Queen is the most iconic",
    [],
    "Mumbai–Pune is one of India's busiest short-distance routes. Deccan Queen runs 6 days/week; Intercity, Indrayani and Sinhagad expresses run daily."
  ),

  "CSMT-NGP": _dr("daily", 4,
    [_t("12139","Sewagram Express",7,"~12 hrs"), _t("12105","Vidarbha Express",7,"~13 hrs"), _t("11045","Dikshabhoomi Exp.",7,"~14 hrs")],
    "4 trains; Sewagram Express is the fastest at ~12 hrs",
    [],
    "Mumbai–Nagpur is a classic Central Railway trunk route. Sewagram and Vidarbha Expresses run daily. Nagpur is a major junction for onward travel."
  ),

  "CSMT-HWH": _dr("daily", 3,
    [_t("12809","Mumbai–Howrah Mail",7,"~30 hrs"), _t("22911","Shipra Express",7,"~32 hrs"), _t("18029","LTT–Shalimar Exp.",7,"~36 hrs")],
    "3 trains; Mumbai Mail is the iconic choice",
    [],
    "Mumbai–Howrah is served by the historic Mumbai Mail. This ~30-hour journey crosses the Deccan plateau and passes through Nagpur and Jharkhand."
  ),

  "BCT-ADI": _dr("multiple_daily", 15,
    [_t("12009","Shatabdi Express",7,"~1.5 hrs"), _t("12921","Flying Ranee",7,"~2 hrs"), _t("19015","Saurashtra Express",7,"~5 hrs")],
    "15+ trains; Shatabdi is fastest at ~1.5 hrs",
    [],
    "Mumbai–Ahmedabad is one of India's densest short-distance rail corridors. Jan Shatabdi, Flying Ranee and Intercity trains run throughout the day."
  ),

  "BCT-JP": _dr("daily", 3,
    [_t("12991","Udaipur City Express",4,"~14 hrs"), _t("12955","Mumbai–Jaipur SF",7,"~15 hrs"), _t("19023","Mumbai–Firozpur Exp.",7,"~16 hrs")],
    "3 trains; Mumbai–Jaipur SF is fastest at ~15 hrs",
    [],
    "Mumbai–Jaipur has a daily SF Express and Udaipur Express (via Jaipur 4d/wk). A popular route for Rajasthan tourism; book in advance for peak season."
  ),

  "LTT-SBC": _dr("daily", 4,
    [_t("11301","Udyan Express",7,"~24 hrs"), _t("16590","Rani Chennamma Exp.",7,"~22 hrs"), _t("22113","LTT–KSR Rajdhani",6,"~21 hrs")],
    "4 trains; Rajdhani is fastest at ~21 hrs",
    [],
    "Mumbai (LTT)–Bengaluru is a well-connected route. Udyan Express is the classic choice; Rajdhani runs most days and is significantly faster."
  ),

  "LTT-SC": _dr("daily", 3,
    [_t("11071","Kamayani Express",7,"~16 hrs"), _t("17032","Mumbai–Hyderabad Exp.",7,"~17 hrs"), _t("12701","Hussain Sagar Exp.",7,"~16 hrs")],
    "3 trains; ~16–17 hrs",
    [],
    "Mumbai (LTT)–Secunderabad is served by Hussain Sagar Express and Kamayani Express. A convenient overnight route to Hyderabad."
  ),

  "LTT-MAS": _dr("daily", 3,
    [_t("11041","Chennai Express",7,"~23 hrs"), _t("22643","Patna–Chennai Exp.",4,"~26 hrs"), _t("16352","Nagercoil Express",7,"~24 hrs")],
    "3 trains; ~23–26 hrs",
    [],
    "Mumbai (LTT)–Chennai is served daily by Chennai Express. The route traverses the Deccan and crosses into Tamil Nadu via Jolarpettai."
  ),

  "LTT-TVC": _dr("daily", 2,
    [_t("16381","Mumbai–Thiruvanantha. Exp.",7,"~30 hrs"), _t("22113","Thiruvanantha. Exp.",3,"~28 hrs")],
    "2 direct trains; ~28–30 hrs",
    [],
    "Mumbai–Thiruvananthapuram is a long overnight route along the Konkan/Kerala coast. Book well ahead as Kerala-bound trains are perennially oversubscribed."
  ),

  "LTT-HYB": _dr("daily", 2,
    [_t("17032","Mumbai–Hyderabad Exp.",7,"~15 hrs"), _t("12701","Hussain Sagar Exp.",7,"~16 hrs")],
    "2 daily trains; ~15–16 hrs",
    [],
    "Mumbai–Hyderabad (Deccan) is served by Hussain Sagar Express and Mumbai–Hyderabad Express. An overnight journey through the Marathwada region."
  ),

  "CSMT-BBS": _dr("daily", 2,
    [_t("12879","LTT–Bhubaneswar Exp.",7,"~32 hrs"), _t("22503","Bhubaneswar Express",3,"~34 hrs")],
    "2 trains; ~32–34 hrs",
    [],
    "Mumbai–Bhubaneswar is a long-haul route via Nagpur and Visakhapatnam. Book well ahead; trains often run at high occupancy."
  ),

  // ── Chennai hub ───────────────────────────────────────────────────────────────
  "MAS-SBC": _dr("multiple_daily", 12,
    [_t("12007","Chennai–Mysuru Shatabdi",7,"~5.5 hrs"), _t("12657","Chennai Central Exp.",7,"~6 hrs"), _t("22625","Chennai Rajdhani",4,"~5.5 hrs")],
    "12+ trains including Shatabdi; fastest is ~5.5 hrs",
    [],
    "Chennai–Bengaluru is India's busiest high-frequency intercity route. Shatabdi runs daily; multiple expresses and Intercity trains connect the two IT hubs."
  ),

  "MAS-MDU": _dr("multiple_daily", 8,
    [_t("12635","Vaigai Express",7,"~8 hrs"), _t("12661","Pothigai Express",7,"~9 hrs"), _t("16723","Ananthapuri Express",7,"~10 hrs")],
    "8 trains; Vaigai Express is the classic fastest option",
    [],
    "Chennai–Madurai is a key Tamil Nadu corridor. Vaigai Express is the iconic choice for speed; Pothigai and Ananthapuri are overnight alternatives."
  ),

  "MAS-TVC": _dr("daily", 4,
    [_t("12695","Trivandrum Mail",7,"~16 hrs"), _t("22625","Ananthapuri Exp.",7,"~15 hrs"), _t("16526","Island Express",7,"~17 hrs")],
    "4 trains; Trivandrum Mail is most popular",
    [],
    "Chennai–Thiruvananthapuram is served by the iconic Trivandrum Mail and Island Express. A fully overnight journey through Kerala's capital region."
  ),

  "MAS-CBE": _dr("multiple_daily", 6,
    [_t("12243","Shatabdi Express",7,"~6.5 hrs"), _t("12673","Cheran Express",7,"~7 hrs"), _t("11013","Coimbatore Exp.",7,"~8 hrs")],
    "6 trains; Shatabdi is fastest at ~6.5 hrs",
    [],
    "Chennai–Coimbatore is a major Tamil Nadu route. Shatabdi is the most comfortable day option; Cheran Express is a popular overnight alternative."
  ),

  "MAS-TPJ": _dr("multiple_daily", 8,
    [_t("12635","Vaigai Express",7,"~5 hrs"), _t("12661","Pothigai Express",7,"~6 hrs"), _t("16723","Ananthapuri Express",7,"~6.5 hrs")],
    "8 trains; journey ~5–7 hrs",
    [],
    "Chennai–Tiruchirappalli (Trichy) is well connected with multiple daily trains. Vaigai Express is fastest; many trains continue to Madurai or Tirunelveli."
  ),

  "MAS-HWH": _dr("multiple_daily", 6,
    [_t("12841","Coromandel Express",7,"~27 hrs"), _t("12839","Howrah Mail",7,"~28 hrs"), _t("12508","Guwahati Express",7,"~30 hrs")],
    "6 trains; Coromandel Express is the premier option",
    [],
    "Chennai–Howrah via the East Coast is served by Coromandel Express, one of India's fastest mail trains. The route passes Visakhapatnam and Bhubaneswar."
  ),

  "MAS-VSKP": _dr("daily", 5,
    [_t("12841","Coromandel Express",7,"~12 hrs"), _t("12839","Howrah Mail",7,"~14 hrs"), _t("18463","Prashanti Express",7,"~15 hrs")],
    "5 trains; Coromandel Express is fastest at ~12 hrs",
    [],
    "Chennai–Visakhapatnam is a picturesque East Coast route. Coromandel Express is the fastest and most punctual; plan a morning arrival for sightseeing."
  ),

  "MAS-SC": _dr("multiple_daily", 8,
    [_t("12163","Chennai–Secunderabad Exp.",7,"~13 hrs"), _t("12028","Shatabdi Express",7,"~10.5 hrs"), _t("12603","Hyderabad Express",7,"~12 hrs")],
    "8 trains; Shatabdi is fastest at ~10.5 hrs",
    [],
    "Chennai–Secunderabad (Hyderabad) has excellent connectivity with Shatabdi and multiple expresses. Shatabdi is the fastest and most comfortable day option."
  ),

  "MAS-BZA": _dr("multiple_daily", 10,
    [_t("12841","Coromandel Express",7,"~7 hrs"), _t("12839","Howrah Mail",7,"~8 hrs"), _t("12603","Hyderabad Express",7,"~7.5 hrs")],
    "10+ trains pass through Vijayawada daily",
    [],
    "Vijayawada is a major junction on the East Coast and is extremely well connected to Chennai. Almost every Howrah/Kolkata-bound train stops here."
  ),

  "MAS-TEN": _dr("daily", 4,
    [_t("12661","Pothigai Express",7,"~10 hrs"), _t("16723","Ananthapuri Express",7,"~11 hrs"), _t("12193","Nellai Express",7,"~11 hrs")],
    "4 daily trains; ~10–11 hrs",
    [],
    "Chennai–Tirunelveli (Nellai) is the southernmost point of the trunk route in Tamil Nadu. Nellai Express and Pothigai Express are popular choices."
  ),

  // ── Kolkata hub ───────────────────────────────────────────────────────────────
  "HWH-PURI": _dr("multiple_daily", 10,
    [_t("12801","Purushottam Express",7,"~8 hrs"), _t("12837","Howrah–Puri Exp.",7,"~9 hrs"), _t("22807","Santragachi–Puri SF",7,"~8 hrs")],
    "10 trains; ~8–9 hrs; easy day trip or overnight",
    [],
    "Howrah–Puri (Jagannath Dham) is one of India's most popular pilgrimage routes. Dozens of trains serve this route; book ahead during Rath Yatra."
  ),

  "HWH-BBS": _dr("multiple_daily", 8,
    [_t("12801","Purushottam Express",7,"~6 hrs"), _t("12841","Coromandel Express",7,"~5 hrs"), _t("12245","Howrah–Bhubaneswar Exp.",7,"~6 hrs")],
    "8 trains; Coromandel is fastest at ~5 hrs",
    [],
    "Howrah–Bhubaneswar is a busy East Coast route. Coromandel Express passes through in just 5 hours; multiple expresses also serve the route."
  ),

  "HWH-SBC": _dr("daily", 3,
    [_t("12245","Bengaluru Duronto",4,"~26 hrs"), _t("22887","Howrah–Yeshwantpur Exp.",3,"~28 hrs"), _t("12657","Chennai Central Exp.",7,"~29 hrs")],
    "3 trains; ~26–29 hrs via East Coast or Nagpur",
    [],
    "Howrah–Bengaluru is a long 2,000 km journey. Duronto Express (4 days/wk) is the fastest option; expresses via Visakhapatnam or Nagpur are alternatives."
  ),

  "HWH-VSKP": _dr("daily", 5,
    [_t("12841","Coromandel Express",7,"~12 hrs"), _t("12839","Howrah Mail",7,"~14 hrs"), _t("18645","East Coast Express",7,"~15 hrs")],
    "5 trains; Coromandel is fastest at ~12 hrs",
    [],
    "Howrah–Visakhapatnam is an East Coast route with multiple daily trains. Coromandel Express is the fastest and most reliable option."
  ),

  "HWH-GHY": _dr("daily", 4,
    [_t("12505","Kamrup Express",7,"~17 hrs"), _t("12235","Dibrugarh Rajdhani",3,"~17 hrs"), _t("14055","Brahmaputra Mail",7,"~20 hrs")],
    "4 trains; ~17–20 hrs",
    [],
    "Howrah–Guwahati is the main Northeast gateway. Brahmaputra Mail is iconic; Kamrup Express is fast. The route passes through the lush Barak Valley."
  ),

  "HWH-PNBE": _dr("multiple_daily", 10,
    [_t("12303","Poorva Express",7,"~9 hrs"), _t("12381","Poorbi Express",7,"~10 hrs"), _t("13007","Udyan Abha Toofan",7,"~12 hrs")],
    "10 trains; very frequent; Poorva Express is classic",
    [],
    "Howrah–Patna is one of India's busiest rail routes. Multiple expresses and mail trains run throughout the day; easy to get a seat."
  ),

  "HWH-NJP": _dr("multiple_daily", 6,
    [_t("12343","Darjeeling Mail",7,"~10 hrs"), _t("12517","Garibrath Express",4,"~8 hrs"), _t("12345","Saraighat Express",7,"~9 hrs")],
    "6 trains; ~8–10 hrs",
    [],
    "Howrah–New Jalpaiguri is the gateway to Darjeeling and Sikkim. Darjeeling Mail is iconic; Garibrath and Teesta–Torsa Expresses are faster alternatives."
  ),

  "HWH-NGP": _dr("daily", 3,
    [_t("12809","Howrah–Mumbai Mail",7,"~19 hrs"), _t("22911","Shipra Express",7,"~20 hrs"), _t("12810","Howrah–Mumbai Mail",7,"~21 hrs")],
    "3 trains pass through Nagpur; ~19–21 hrs",
    [],
    "Howrah–Nagpur lies on the Howrah–Mumbai trunk route. Howrah–Mumbai Mail is the classic overnight option; Nagpur is a convenient midway interchange."
  ),

  "HWH-ADI": _dr("daily", 2,
    [_t("12834","Howrah–Ahmedabad Exp.",7,"~36 hrs"), _t("12812","Howrah–Ahmedabad Exp.",3,"~34 hrs")],
    "2 trains; ~34–36 hrs long journey",
    [],
    "Howrah–Ahmedabad is a very long cross-country journey via Nagpur or Bhopal. Break the trip with a stopover in Nagpur or Bhopal if time allows."
  ),

  "SDAH-NJP": _dr("daily", 4,
    [_t("12343","Darjeeling Mail",7,"~10 hrs"), _t("13147","Uttar Banga Express",7,"~10 hrs"), _t("13149","Kanchan Kanya Exp.",7,"~11 hrs")],
    "4 trains; ~10–11 hrs; Darjeeling Mail is most popular",
    [],
    "Sealdah–New Jalpaiguri (for Darjeeling) has multiple trains. Darjeeling Mail runs nightly; Uttar Banga and Kanchan Kanya Expresses are good alternatives."
  ),

  // ── Bengaluru hub ─────────────────────────────────────────────────────────────
  "SBC-MYS": _dr("multiple_daily", 8,
    [_t("12007","Shatabdi Express",7,"~2 hrs"), _t("16209","Mysuru Express",7,"~3 hrs"), _t("16201","Kaveri Express",7,"~3 hrs")],
    "8 trains; Shatabdi is fastest at ~2 hrs",
    [],
    "Bengaluru–Mysuru is one of Karnataka's most-travelled routes. Shatabdi is the premium day option; multiple intercity and express trains run throughout the day."
  ),

  "SBC-CBE": _dr("daily", 4,
    [_t("12677","Ernakulam Express",7,"~5 hrs"), _t("11013","Coimbatore Express",7,"~5.5 hrs"), _t("12674","Cheran Express",7,"~5 hrs")],
    "4 trains; ~5–5.5 hrs",
    [],
    "Bengaluru–Coimbatore is a key inter-state route. Cheran Express and Ernakulam Express are good options; journey passes through the Nilgiri foothills."
  ),

  "SBC-MAQ": _dr("daily", 3,
    [_t("12133","Mangaluru Express",7,"~7 hrs"), _t("16515","Yeshwantpur–Karwar Exp.",7,"~8 hrs"), _t("16517","Kannur Express",7,"~9 hrs")],
    "3 trains; ~7–9 hrs through Western Ghats",
    [],
    "Bengaluru–Mangaluru crosses the spectacular Western Ghats via the Sakleshpur Ghat section. Mangaluru Express is most popular; book a window seat!"
  ),

  "SBC-TVC": _dr("daily", 3,
    [_t("16525","Island Express",7,"~13 hrs"), _t("22637","Venad Express",7,"~14 hrs"), _t("12677","Ernakulam Express",7,"~11 hrs")],
    "3 trains; ~11–14 hrs",
    [],
    "Bengaluru–Thiruvananthapuram (Kerala capital) is served by Island Express and Ernakulam trains. Kerala-bound trains tend to be oversubscribed; book early."
  ),

  "SBC-SC": _dr("daily", 4,
    [_t("12785","Kacheguda Express",7,"~11 hrs"), _t("11302","Udyan Express",7,"~13 hrs"), _t("17603","Kacheguda Express",7,"~12 hrs")],
    "4 trains; ~11–13 hrs",
    [],
    "Bengaluru–Secunderabad (Hyderabad) has several daily trains. Kacheguda Express is the most popular; book 30+ days ahead for weekends."
  ),

  // ── Secunderabad hub ──────────────────────────────────────────────────────────
  "SC-MAS": _dr("multiple_daily", 8,
    [_t("12028","Shatabdi Express",7,"~10.5 hrs"), _t("12163","Chennai Express",7,"~13 hrs"), _t("12603","Hyderabad Express",7,"~12 hrs")],
    "8 trains; Shatabdi is fastest at ~10.5 hrs",
    [],
    "Secunderabad–Chennai has excellent connectivity with Shatabdi, expresses and mail trains. Shatabdi is by far the fastest and most comfortable option."
  ),

  "SC-BZA": _dr("multiple_daily", 10,
    [_t("12603","Hyderabad–Chennai Exp.",7,"~4 hrs"), _t("12164","Chennai–Secunderabad Exp.",7,"~4.5 hrs"), _t("12741","Patna Express",7,"~5 hrs")],
    "10+ trains; very frequent; ~4–5 hrs",
    [],
    "Secunderabad–Vijayawada is a very busy Andhra Pradesh trunk route. Multiple trains run daily; easy to find last-minute tickets."
  ),

  "SC-PUNE": _dr("daily", 3,
    [_t("11305","Udyan Express",7,"~13 hrs"), _t("17031","Hyderabad–Pune Exp.",7,"~14 hrs"), _t("12701","Hussain Sagar Exp.",7,"~14 hrs")],
    "3 trains; ~13–14 hrs",
    [],
    "Secunderabad–Pune is served by Hussain Sagar Express and Udyan Express. An overnight journey through Maharashtra; book well in advance."
  ),

  "SC-HWH": _dr("daily", 3,
    [_t("12741","Patna Express",7,"~22 hrs"), _t("18645","East Coast Express",7,"~24 hrs"), _t("12659","Nagaland Express",7,"~26 hrs")],
    "3 trains; ~22–26 hrs via Vijayawada",
    [],
    "Secunderabad–Howrah is a long East Coast route via Vijayawada and Bhubaneswar. East Coast Express is a comfortable overnight-plus option."
  ),

  // ── Regional routes ───────────────────────────────────────────────────────────
  "PNBE-HWH": _dr("multiple_daily", 10,
    [_t("12303","Poorva Express",7,"~9 hrs"), _t("12305","Rajdhani Express",7,"~7 hrs"), _t("13007","Udyan Abha Express",7,"~10 hrs")],
    "10 trains; Rajdhani is fastest at ~7 hrs",
    [],
    "Patna–Howrah is an extremely busy corridor with frequent trains. Rajdhani 12305 from Patna is the fastest; easy to find trains at short notice."
  ),

  "PNBE-LKO": _dr("daily", 4,
    [_t("15104","Mau Express",7,"~8 hrs"), _t("13019","Bagh Express",7,"~9 hrs"), _t("12529","Lucknow Express",7,"~9 hrs")],
    "4 trains; ~8–9 hrs",
    [],
    "Patna–Lucknow has multiple daily trains. Journey crosses the Gangetic plains through UP and Bihar; pleasant daytime ride."
  ),

  "LKO-BSB": _dr("daily", 5,
    [_t("14235","Barauni Express",7,"~5 hrs"), _t("11072","Kamayani Express",7,"~5.5 hrs"), _t("12301","Rajdhani Express",7,"~4 hrs")],
    "5 trains; en-route trains from Delhi also stop",
    [],
    "Lucknow–Varanasi is a key UP corridor. Many Delhi-bound expresses stop at Lucknow and Varanasi; easy to find trains throughout the day."
  ),

  "BSB-PNBE": _dr("multiple_daily", 8,
    [_t("12391","Shramjeevi Express",7,"~3 hrs"), _t("12559","Shiv Ganga Express",7,"~4 hrs"), _t("12569","Jansadharan Express",7,"~4.5 hrs")],
    "8 trains; ~3–4.5 hrs",
    [],
    "Varanasi–Patna is a short but high-demand route. Many trains from Delhi and Lucknow continue onward; easy to get a seat."
  ),

  "JP-ADI": _dr("daily", 3,
    [_t("19708","Aravali Express",7,"~12 hrs"), _t("19032","Yoga Express",7,"~13 hrs"), _t("12997","Ajmer–Ahmedabad Exp.",7,"~10 hrs")],
    "3 trains; ~10–13 hrs",
    [],
    "Jaipur–Ahmedabad is a Rajasthan–Gujarat corridor with daily trains. Aravali Express is popular; the route passes through the semi-arid Aravalli region."
  ),

  "BPL-NGP": _dr("daily", 4,
    [_t("12809","Howrah Mail",7,"~7 hrs"), _t("12671","Kamayani Express",7,"~7.5 hrs"), _t("12155","Bhopal Exp.",7,"~7 hrs")],
    "4 trains pass through; ~7–7.5 hrs",
    [],
    "Bhopal–Nagpur is on the Delhi–South trunk route. Most Delhi–South trains stop at both; easy to connect. Nagpur is a key junction for onward travel."
  ),

  "NGP-HWH": _dr("daily", 4,
    [_t("12809","Howrah Mail",7,"~15 hrs"), _t("12130","Azad Hind Express",7,"~14 hrs"), _t("22912","Shipra Express",7,"~16 hrs")],
    "4 trains; ~14–16 hrs",
    [],
    "Nagpur–Howrah is on the Howrah–Mumbai trunk route. Azad Hind Express and Howrah Mail are the best options; an overnight journey through Jharkhand."
  ),

  "NGP-MAS": _dr("daily", 3,
    [_t("12671","Kamayani Express",7,"~18 hrs"), _t("12409","Gondwana Express",7,"~20 hrs"), _t("22691","Rajdhani Express",3,"~19 hrs")],
    "3 trains; ~18–20 hrs",
    [],
    "Nagpur–Chennai crosses central India via the South Central Railway. Kamayani Express is the most reliable daily option."
  ),

  "ADI-BRC": _dr("multiple_daily", 20,
    [_t("12009","Shatabdi Express",7,"~1.5 hrs"), _t("12933","Karnavati Express",7,"~2 hrs"), _t("19012","Gujarat Express",7,"~2 hrs")],
    "20+ trains; ~1.5–2 hrs; very frequent",
    [],
    "Ahmedabad–Vadodara is one of Gujarat's busiest rail routes. Shatabdi, Intercity and Karnavati Express run frequently throughout the day."
  ),

  "PUNE-SBC": _dr("few_weekly", 3,
    [_t("11301","Udyan Express",7,"~24 hrs"), _t("16589","Rani Chennamma Exp.",7,"~23 hrs"), _t("11025","Pune–Bangalore Exp.",7,"~26 hrs")],
    "3 trains; ~23–26 hrs",
    [],
    "Pune–Bengaluru is served by Udyan Express and Rani Chennamma Express daily. The route goes via Solapur and Raichur or via Miraj–Hubli."
  ),

  "RNC-PNBE": _dr("daily", 3,
    [_t("13288","South Bihar Express",7,"~7 hrs"), _t("18611","Ranchi–Patna Express",7,"~7 hrs"), _t("12817","Jharkhand Sampark K.",7,"~9 hrs")],
    "3 trains; ~7–9 hrs",
    [],
    "Ranchi–Patna is a key Jharkhand–Bihar route. South Bihar Express and Ranchi–Patna Express are the direct options. Easy day or overnight journey."
  ),

  "ADI-INDB": _dr("daily", 2,
    [_t("19307","Chandigarh Express",7,"~6 hrs"), _t("19165","Sabarmati Express",7,"~7 hrs")],
    "2 trains; ~6–7 hrs",
    [],
    "Ahmedabad–Indore connects Gujarat and Madhya Pradesh. Sabarmati and Chandigarh Expresses are the main options; pleasant route through the Malwa plateau."
  ),

  "ERS-MAS": _dr("daily", 4,
    [_t("12622","Tamil Nadu Express",7,"~12 hrs"), _t("12696","Trivandrum Mail",7,"~12 hrs"), _t("12677","Ernakulam Express",7,"~10 hrs")],
    "4 trains; ~10–12 hrs",
    [],
    "Ernakulam (Kochi)–Chennai is a popular Kerala–Tamil Nadu route. Trains often fill up; book 30–60 days ahead. The route passes through the Western Ghats."
  ),

  "CBE-MDU": _dr("multiple_daily", 6,
    [_t("12637","Pandian Express",7,"~4 hrs"), _t("12084","Jan Shatabdi",7,"~3.5 hrs"), _t("16609","Nagercoil Express",7,"~4 hrs")],
    "6 trains; ~3.5–4 hrs",
    [],
    "Coimbatore–Madurai is a frequent Tamil Nadu corridor. Jan Shatabdi is fastest; Pandian Express is the classic day train."
  ),

  "VSKP-SC": _dr("daily", 5,
    [_t("12603","Hyderabad Express",7,"~10 hrs"), _t("18646","East Coast Express",7,"~11 hrs"), _t("12741","Patna Express",7,"~12 hrs")],
    "5 trains; ~10–12 hrs",
    [],
    "Visakhapatnam–Secunderabad is a busy Andhra Pradesh route. Hyderabad Express and East Coast Express are the main daily options."
  ),

  "R-MAS": _dr("daily", 2,
    [_t("18503","Vishakapatnam Express",7,"~26 hrs"), _t("18235","Bilaspur–Chennai Exp.",3,"~28 hrs")],
    "2 trains; ~26–28 hrs via Visakhapatnam",
    [],
    "Raipur–Chennai is a long cross-regional journey. The route goes via Visakhapatnam on the East Coast. Book well in advance as trains are limited."
  ),

  "BSP-HWH": _dr("daily", 3,
    [_t("18234","Narmada Express",7,"~18 hrs"), _t("22905","Bilaspur–Howrah SF",3,"~16 hrs"), _t("18237","Chattisgarh Exp.",7,"~20 hrs")],
    "3 trains; ~16–20 hrs",
    [],
    "Bilaspur–Howrah passes through the Chhattisgarh–Jharkhand tribal belt. Chhattisgarh Express is the most popular; a scenic overnight route."
  ),

  "HWH-PUNE": _dr("daily", 2,
    [_t("12129","Azad Hind Express",7,"~30 hrs"), _t("22907","Howrah–Pune SF",3,"~28 hrs")],
    "2 trains; ~28–30 hrs via Nagpur",
    [],
    "Howrah–Pune is a long cross-India journey via Nagpur. Azad Hind Express runs daily; a great overnight-plus option through central India."
  ),

  // Raipur→Gaya: only 1 direct train — 22358 Mumbai LTT SF Express (weekly, 1 day)
  "R-GAYA": _dr("rare", 1,
    [_t("22358","Mumbai LTT SF Express",1,"~18 hrs")],
    "Only 1 direct train (22358), runs just 1 day/week — hop route recommended for flexibility",
    [
      _h("Via Bilaspur Junction", "high", "20–24 hrs",
        [
          _l("Raipur Junction", "Bilaspur Junction", ["Chhattisgarh Express 18237", "Intercity Express"], "Multiple daily", "~2 hrs", "~120 km", "low", "Very frequent — easy to catch"),
          _l("Bilaspur Junction", "Gaya Junction", ["Narmada Express 18234", "Bilaspur–Patna Express"], "Daily", "~18 hrs", "~800 km", "low", "Bilaspur–Patna trains stop at Gaya"),
        ],
        ["Bilaspur has very frequent trains to Raipur", "Daily onward trains to Gaya from Bilaspur"],
        ["~20 hrs total journey with one change", "Allow 2–4 hrs wait at Bilaspur"],
        "Book the Raipur→Bilaspur leg first (many options), then Narmada Express to Gaya. Both segments easy to get on short notice."
      ),
      _h("Via Ranchi Junction", "medium", "24–30 hrs",
        [
          _l("Raipur Junction", "Ranchi Junction", ["Jharkhand Express 18609", "Ranchi Express"], "Few weekly", "~10 hrs", "~420 km", "medium", "Check running days before booking"),
          _l("Ranchi Junction", "Gaya Junction", ["Patna Express 12817", "South Bihar Express 13288"], "Daily", "~5 hrs", "~250 km", "low", "Multiple daily trains from Ranchi to Gaya"),
        ],
        ["Shorter second leg from Ranchi to Gaya"],
        ["Fewer Raipur→Ranchi trains; check schedule carefully", "Longer total journey"],
        "Only consider this if the Bilaspur route doesn't have convenient timing. Verify Raipur→Ranchi running days on IRCTC.", 2
      ),
    ],
    "Raipur–Gaya has just one direct train (22358, weekly). For most days, the hop via Bilaspur is the practical choice — frequent first leg, daily onward trains."
  ),

  "BPL-HWH": _dr("few_weekly", 2,
    [_t("12809","Howrah Mail",7,"~22 hrs"), _t("22912","Shipra Express",4,"~22 hrs")],
    "2 trains; ~22 hrs via Nagpur or Jabalpur",
    [],
    "Bhopal–Howrah is served by Howrah Mail and Shipra Express via Nagpur. A long overnight journey; comfortable AC classes are recommended."
  ),

  // ── Hop routes (no/rare direct trains) ───────────────────────────────────────
  "JDB-PNBE": _hr("none", 0, [], "No direct train between Jagdalpur and Patna",
    [
      _h("Via Raipur Junction", "high", "28–34 hrs",
        [
          _l("Jagdalpur Junction", "Raipur Junction", ["Hirakhand Express 18448", "Bhopal Express 18238"], "Daily", "~10 hrs", "~400 km", "low", "Hirakhand Express is the primary option"),
          _l("Raipur Junction", "Patna Junction", ["Chhattisgarh Express 18237", "Durg–Patna Express"], "Daily", "~18 hrs", "~850 km", "low", "Change at Raipur; trains depart throughout the day"),
        ],
        ["Raipur is a major junction with many onward trains to Patna", "High-frequency options at changeover"],
        ["Long total journey of 28+ hours", "Plan for 2–4 hr wait at Raipur"],
        "Book Jagdalpur→Raipur and Raipur→Patna tickets separately on IRCTC."
      ),
      _h("Via Nagpur Junction", "medium", "32–40 hrs",
        [
          _l("Jagdalpur Junction", "Nagpur Junction", ["Gondia–Jagdalpur Express 18233"], "Few weekly", "~12 hrs", "~500 km", "medium", "Limited direct trains; check running days"),
          _l("Nagpur Junction", "Patna Junction", ["Sewagram Express 12139", "Gondwana Express"], "Daily", "~18 hrs", "~900 km", "low", "Multiple options from Nagpur"),
        ],
        ["Alternative if Raipur connection doesn't work"],
        ["Fewer direct Jagdalpur→Nagpur trains", "Longer overall journey"],
        "This route is longer but Nagpur has more frequent onward trains to Patna."
      , 2),
    ],
    "Jagdalpur–Patna has no direct train. Route via Raipur is fastest and most reliable. Total journey 28–34 hrs with one comfortable change."
  ),

  "AGTL-NDLS": _hr("none", 0, [], "No direct train; all routes require at least one change",
    [
      _h("Via Guwahati Junction", "high", "36–42 hrs",
        [
          _l("Agartala Junction", "Guwahati Junction", ["Agartala Rajdhani 20501", "Tripura SF Express 12513"], "Daily", "~14 hrs", "~600 km", "low", "Agartala Rajdhani is most comfortable"),
          _l("Guwahati Junction", "New Delhi Junction", ["NE Rajdhani 12423", "Brahmaputra Mail 14056"], "Daily", "~17 hrs", "~1800 km", "low", "NE Rajdhani from ANVT is fastest to Delhi"),
        ],
        ["Guwahati is a major hub with multiple daily trains to Delhi", "Reliable route with comfortable options"],
        ["36+ hours total journey", "Plan for 3–5 hour wait at Guwahati"],
        "Book Guwahati→Delhi on NE Rajdhani (from ANVT) for fastest onward connection. Wait time at Guwahati can be used to eat and refresh."
      ),
    ],
    "Agartala–Delhi requires a change at Guwahati. Total journey is 36–42 hrs. Agartala Rajdhani and NE Rajdhani make this the most comfortable combination."
  ),

  "DMV-NDLS": _hr("none", 0, [], "No direct train from Dimapur to Delhi",
    [
      _h("Via Guwahati Junction", "high", "38–44 hrs",
        [
          _l("Dimapur Junction", "Guwahati Junction", ["Nagaland Express 12659", "Dimapur–Guwahati Exp."], "Daily", "~4 hrs", "~200 km", "low", "Short hop to Guwahati"),
          _l("Guwahati Junction", "New Delhi Junction", ["NE Rajdhani 12423", "Kamrup Express 12505"], "Daily", "~17 hrs", "~1800 km", "low", "Multiple options to Delhi from Guwahati"),
        ],
        ["Short first leg (~4 hrs) to major hub", "Guwahati has multiple daily trains to Delhi"],
        ["38+ hours total journey", "Coordinate connection timing at Guwahati"],
        "Plan your Guwahati connection carefully — aim for NE Rajdhani to Delhi for the fastest and most comfortable ride."
      ),
    ],
    "Dimapur–Delhi requires a change at Guwahati. The first leg (Dimapur→Guwahati) is short at ~4 hrs. Total journey 38–44 hrs."
  ),

  "SCL-NDLS": _hr("none", 0, [], "No direct train from Silchar to Delhi",
    [
      _h("Via Guwahati Junction", "high", "40–48 hrs",
        [
          _l("Silchar Junction", "Guwahati Junction", ["Barak Valley Express 15606", "Silchar–Guwahati Exp."], "Daily", "~10 hrs", "~450 km", "low", "Barak Valley Express runs daily"),
          _l("Guwahati Junction", "New Delhi Junction", ["NE Rajdhani 12423", "Brahmaputra Mail 14056"], "Daily", "~17 hrs", "~1800 km", "low", "NE Rajdhani is fastest to Delhi"),
        ],
        ["Barak Valley Express is comfortable for the first leg", "Guwahati hub gives daily options to Delhi"],
        ["40+ hours total journey", "Long wait possible at Guwahati — plan accordingly"],
        "Barak Valley Express to Guwahati, then NE Rajdhani to Delhi is the smoothest combination. Alternatively, break journey overnight at Guwahati."
      ),
    ],
    "Silchar (Barak Valley)–Delhi has no direct train. Route via Guwahati is the only practical option. Total journey 40–48 hrs with one change."
  ),

  "DBRG-NDLS": _hr("rare", 1, [_t("15959","Kamrup Express",3,"~48 hrs")], "1 rare direct train; practical route is via Guwahati",
    [
      _h("Via Guwahati Junction", "high", "34–40 hrs",
        [
          _l("Dibrugarh Junction", "Guwahati Junction", ["Rajdhani Express 12235", "Lachit Express 12067"], "Daily", "~8 hrs", "~450 km", "low", "Rajdhani (3d/wk) is best; several expresses run daily"),
          _l("Guwahati Junction", "New Delhi Junction", ["NE Rajdhani 12423", "Brahmaputra Mail 14056"], "Daily", "~17 hrs", "~1800 km", "low", "NE Rajdhani from ANVT is fastest"),
        ],
        ["Shorter total journey than direct train", "Rajdhani on both legs for premium comfort"],
        ["Requires coordination of two trains", "Plan 3–5 hr wait at Guwahati"],
        "The hop via Guwahati is typically faster and more comfortable than the rare direct train. Book Rajdhani on both legs when available."
      ),
    ],
    "Dibrugarh–Delhi has a rare direct train but the hop via Guwahati is often faster. NE Rajdhani from Guwahati is the key second leg."
  ),

  "R-PNBE": _hr("rare", 1, [], "No reliable direct train; hop via Bilaspur is recommended",
    [
      _h("Via Bilaspur Junction", "high", "22–28 hrs",
        [
          _l("Raipur Junction", "Bilaspur Junction", ["Chhattisgarh Express 18237", "Intercity Express"], "Multiple daily", "~2 hrs", "~120 km", "low", "Very frequent — easy connection"),
          _l("Bilaspur Junction", "Patna Junction", ["Bilaspur–Patna Express 18234", "Amarkantak Express"], "Daily", "~20 hrs", "~900 km", "low", "Daily direct train"),
        ],
        ["Short first leg with many options", "Daily onward train to Patna from Bilaspur"],
        ["20+ hours on second leg", "Long total journey"],
        "Quick hop from Raipur to Bilaspur (frequent trains), then catch the Bilaspur–Patna Express. Comfortable if booked in advance."
      ),
      _h("Via Varanasi Junction", "medium", "26–32 hrs",
        [
          _l("Raipur Junction", "Varanasi Junction", ["Gondwana Express", "Chhattisgarh Express"], "Daily", "~14 hrs", "~700 km", "low", "Via Allahabad/Prayagraj or Satna"),
          _l("Varanasi Junction", "Patna Junction", ["Shiv Ganga Express", "Vibhuti Express"], "Daily", "~4 hrs", "~250 km", "low", "Many trains from Varanasi to Patna"),
        ],
        ["Multiple onward trains from Varanasi"],
        ["Longer overall route", "28–32 hours total"],
        "This route is longer but Varanasi gives you many options for the Patna connection.", 2
      ),
    ],
    "Raipur–Patna has no convenient direct train. Hop via Bilaspur is fastest; the Bilaspur–Patna Express makes this a smooth two-leg journey."
  ),

  "BHUJ-MAS": _hr("none", 0, [], "No direct train from Bhuj to Chennai",
    [
      _h("Via Ahmedabad Junction", "high", "36–42 hrs",
        [
          _l("Bhuj Junction", "Ahmedabad Junction", ["Bhuj–Ahmedabad Express 19116", "Gujarat Express 19015"], "Daily", "~7 hrs", "~400 km", "low", "Daily trains from Bhuj to Ahmedabad"),
          _l("Ahmedabad Junction", "Chennai Central", ["Gujarat–Chennai SF 19027", "Navjeevan Express 16687"], "Daily", "~28 hrs", "~1800 km", "low", "Daily direct trains from Ahmedabad to Chennai"),
        ],
        ["Comfortable connection via Ahmedabad", "Both legs have daily trains"],
        ["Total journey 36–42 hrs", "Long second leg"],
        "Bhuj to Ahmedabad is straightforward; plan for a 3–4 hr wait. Book Ahmedabad→Chennai well in advance as Gujarat→Chennai trains fill quickly."
      ),
    ],
    "Bhuj–Chennai requires a change at Ahmedabad. Total journey is ~36–42 hrs. Both legs have daily trains, making planning easy."
  ),

  "JDB-MAS": _hr("none", 0, [], "No direct train from Jagdalpur to Chennai",
    [
      _h("Via Visakhapatnam Junction", "high", "24–30 hrs",
        [
          _l("Jagdalpur Junction", "Visakhapatnam Junction", ["Hirakhand Express 18448", "Kirandul–Vizag Express"], "Daily", "~11 hrs", "~500 km", "low", "Hirakhand Express is the primary option"),
          _l("Visakhapatnam Junction", "Chennai Central", ["Coromandel Express 12841", "Visakhapatnam–Chennai Exp."], "Daily", "~12 hrs", "~800 km", "low", "Multiple daily trains from VSKP to Chennai"),
        ],
        ["Visakhapatnam is a major hub with frequent trains to Chennai", "Both legs have daily options"],
        ["Plan 3–5 hrs at Visakhapatnam", "Book tickets on both segments separately"],
        "Hirakhand Express to Visakhapatnam, then Coromandel Express or another train to Chennai. A scenic first leg through the Eastern Ghats."
      ),
    ],
    "Jagdalpur–Chennai has no direct train. The hop via Visakhapatnam is the most natural route, with excellent connectivity on both legs."
  ),

  "ABKP-NDLS": _hr("none", 0, [], "No direct train from Ambikapur to Delhi",
    [
      _h("Via Bilaspur Junction", "high", "28–34 hrs",
        [
          _l("Ambikapur Junction", "Bilaspur Junction", ["Ambikapur–Bilaspur Express 58201", "Shaktinagar Exp."], "Daily", "~6 hrs", "~250 km", "low", "Short first leg; daily trains"),
          _l("Bilaspur Junction", "New Delhi Junction", ["Chhattisgarh Express 18237", "Bilaspur Rajdhani 20825"], "Daily", "~22 hrs", "~1300 km", "low", "Daily direct trains from Bilaspur to Delhi"),
        ],
        ["Bilaspur is a major junction with daily Delhi trains", "Straightforward single change"],
        ["28+ hours total journey", "Allow 2–4 hrs at Bilaspur for connection"],
        "Bilaspur has daily trains to Delhi including the Chhattisgarh Express and Bilaspur Rajdhani. A comfortable two-leg journey."
      ),
    ],
    "Ambikapur–Delhi requires a change at Bilaspur. Total journey 28–34 hrs. Bilaspur Rajdhani is the fastest option for the second leg."
  ),

  "NTSK-NDLS": _hr("rare", 1, [_t("15910","Avadh Assam Express",2,"~48 hrs")], "1 very slow direct train; hop via Guwahati is faster",
    [
      _h("Via Guwahati Junction", "high", "34–40 hrs",
        [
          _l("New Tinsukia Junction", "Guwahati Junction", ["Tinsukia–Dibrugarh Rajdhani 12235", "Rajdhani Express"], "Daily", "~10 hrs", "~500 km", "low", "Rajdhani runs 3d/wk; expresses run daily"),
          _l("Guwahati Junction", "New Delhi Junction", ["NE Rajdhani 12423", "Kamrup Express 12505"], "Daily", "~17 hrs", "~1800 km", "low", "NE Rajdhani from ANVT is fastest to Delhi"),
        ],
        ["Faster than direct train by 8–10 hrs", "Premium options on both legs"],
        ["Requires coordination of two trains", "3–5 hr wait at Guwahati"],
        "Tinsukia→Guwahati (express), then NE Rajdhani to Delhi. This is 34–40 hrs vs. 48 hrs direct. Book both legs well in advance."
      ),
    ],
    "New Tinsukia–Delhi has a rare and slow direct train. Hopping via Guwahati using NE Rajdhani saves 8–12 hours total."
  ),

  "KRBA-NDLS": _hr("none", 0, [], "No direct train from Korba to Delhi",
    [
      _h("Via Bilaspur Junction", "high", "26–30 hrs",
        [
          _l("Korba Junction", "Bilaspur Junction", ["Korba–Bilaspur MEMU", "Korba Express"], "Multiple daily", "~2 hrs", "~100 km", "low", "Short hop with frequent trains"),
          _l("Bilaspur Junction", "New Delhi Junction", ["Chhattisgarh Express 18237", "Bilaspur Rajdhani 20825"], "Daily", "~22 hrs", "~1300 km", "low", "Multiple daily trains from Bilaspur to Delhi"),
        ],
        ["Very short first leg", "Daily options to Delhi from Bilaspur"],
        ["22+ hours on second leg", "Allow 2–4 hrs at Bilaspur"],
        "Korba is close to Bilaspur — the first leg takes just ~2 hrs. From Bilaspur, catch Chhattisgarh Express or Bilaspur Rajdhani for a comfortable ride to Delhi."
      ),
    ],
    "Korba–Delhi requires a quick hop to Bilaspur (~2 hrs), then a direct train to Delhi. Total journey 26–30 hrs — one of the easier hop routes."
  ),

};

// ── Fallback lookup ────────────────────────────────────────────────────────────
function lookupFallback(fromCode, toCode, fromName, toName) {
  if (!fromCode || !toCode) return null;
  let entry = FALLBACK_DB[`${fromCode}-${toCode}`];
  let reversed = false;
  if (!entry) {
    entry = FALLBACK_DB[`${toCode}-${fromCode}`];
    reversed = true;
  }
  if (!entry) return null;

  const result = JSON.parse(JSON.stringify(entry));
  result.sourceStation      = fromName;
  result.destinationStation = toName;

  if (reversed && result.hopRoutes?.length) {
    result.hopRoutes = result.hopRoutes.map((r, i) => ({
      ...r,
      id: i + 1,
      legs: [...r.legs].reverse().map(l => ({ ...l, from: l.to, to: l.from })),
    }));
  }
  return result;
}

// ── Cache helpers ─────────────────────────────────────────────────────────────
// Verified (IRCTC API) results: 7-day TTL — train schedules are stable.
// AI-only estimates: 24-hour TTL — AI can be wrong; don't lock in bad data.
const CACHE_TTL_VERIFIED = 7 * 24 * 60 * 60 * 1000;
const CACHE_TTL_AI       = 24 * 60 * 60 * 1000;

function _cacheKey(a, b) { return `hoprail_v1_${a}_${b}`; }

function readCache(fromCode, toCode) {
  try {
    const raw = localStorage.getItem(_cacheKey(fromCode, toCode));
    if (!raw) return null;
    const { ts, ttl, data } = JSON.parse(raw);
    const maxAge = ttl || CACHE_TTL_VERIFIED;
    if (Date.now() - ts > maxAge) { localStorage.removeItem(_cacheKey(fromCode, toCode)); return null; }
    return data;
  } catch { return null; }
}

function writeCache(fromCode, toCode, data, verified) {
  const ttl = verified ? CACHE_TTL_VERIFIED : CACHE_TTL_AI;
  try { localStorage.setItem(_cacheKey(fromCode, toCode), JSON.stringify({ ts: Date.now(), ttl, data })); } catch {}
}

function clearRouteCache() {
  const fromCode = fromStation?.code;
  const toCode   = toStation?.code;
  if (fromCode && toCode) localStorage.removeItem(_cacheKey(fromCode, toCode));
  fromCache = false;
  findRoutes();
}

// ── State ─────────────────────────────────────────────────────────────────────
let fromStation   = null;
let toStation     = null;
let loaderTimer   = null;
let loaderStep    = 0;
let verifiedByApi = false;
let fromCache     = false;
let fromFallback  = false;

const LOADER_STEPS = [
  "Fetching live train data…",
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

// ── API Keys ──────────────────────────────────────────────────────────────────
function getApiKey()       { return localStorage.getItem("hoprail_groq_key")    || ""; }
function getNtesWorkerUrl(){ return localStorage.getItem("hoprail_ntes_worker") || ""; }

function saveApiKey() {
  const groq   = document.getElementById("keyInput").value.trim();
  const worker = document.getElementById("ntesWorkerInput").value.trim();
  if (groq)   localStorage.setItem("hoprail_groq_key",    groq);
  if (worker) localStorage.setItem("hoprail_ntes_worker", worker);
  if (!groq && !worker) return;
  closeKeyModal();
  updateKeyDot();
}

function openKeyModal() {
  document.getElementById("keyModal").classList.add("open");
  document.getElementById("keyInput").value        = getApiKey();
  document.getElementById("ntesWorkerInput").value = getNtesWorkerUrl();
  document.getElementById("keyInput").focus();
}
function closeKeyModal() { document.getElementById("keyModal").classList.remove("open"); }

function updateKeyDot() {
  const dot = document.getElementById("keyDot");
  dot.classList.remove("set", "full");
  if (getApiKey() && getNtesWorkerUrl()) dot.classList.add("full");
  else if (getApiKey())                  dot.classList.add("set");
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeKeyModal(); });

// ── NTES Worker — Fetch Real Direct Trains ────────────────────────────────────
// Single call to a Cloudflare Worker that proxies NTES.
// NTES returns ALL trains on the route with running-day info in one shot —
// no date-looping needed (unlike the old RapidAPI approach that needed 30 calls).
//
// Set your Worker URL in Settings or hardcode it below.
function getNtesWorkerUrl() {
  return localStorage.getItem("hoprail_ntes_worker") || "";
}

async function fetchDirectTrains(fromCode, toCode) {
  const workerUrl = getNtesWorkerUrl();
  if (!workerUrl) throw new Error("ntes_not_configured");

  setLoaderText("Fetching live train data from NTES…", 15);
  updateDayPips(5); // show progress early

  const url = `${workerUrl.replace(/\/$/, "")}/api/hoprail/trains?from=${encodeURIComponent(fromCode)}&to=${encodeURIComponent(toCode)}`;

  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || `NTES Worker returned ${res.status}`);
  }

  const json = await res.json();
  if (!Array.isArray(json?.data)) throw new Error("Unexpected response from NTES Worker.");

  updateDayPips(10); // done — all trains returned in one call
  setLoaderText(`Found ${json.data.length} train(s) on this route…`, 60);

  return json.data;
}

function formatRealTrainsForPrompt(trains) {
  return trains.slice(0, 12).map(t => {
    const dur     = t.duration || t.travel_time || "?";
    const runDays = t.run_days;
    let daysStr;
    if (Array.isArray(runDays)) {
      daysStr = runDays.join(", ");
    } else if (runDays && typeof runDays === "object") {
      daysStr = Object.entries(runDays).filter(([, v]) => v).map(([k]) => k).join(", ");
    } else {
      daysStr = String(runDays || "daily");
    }
    return `  • ${t.train_name} (${t.train_number}) — runs: ${daysStr} — duration: ~${dur}`;
  }).join("\n");
}

function realTrainsToDaysPerWeek(runDays) {
  if (!runDays) return null;
  if (Array.isArray(runDays)) return runDays.length;
  if (typeof runDays === "object")
    return Object.values(runDays).filter(v => v === 1 || v === "1" || v === true).length;
  return null;
}

// ── Main Search ───────────────────────────────────────────────────────────────
async function findRoutes() {
  const fromVal = document.getElementById("fromInput").value.trim();
  const toVal   = document.getElementById("toInput").value.trim();

  if (!fromVal) { document.getElementById("fromInput").focus(); shake("fromInput"); return; }
  if (!toVal)   { document.getElementById("toInput").focus();   shake("toInput");   return; }

  const fromName = fromStation?.name || fromVal;
  const toName   = toStation?.name   || toVal;

  if (fromName.toLowerCase() === toName.toLowerCase()) { shake("toInput"); return; }

  const fromCode  = fromStation?.code || "";
  const toCode    = toStation?.code   || "";
  const groqKey   = getApiKey();
  const ntesWorker = getNtesWorkerUrl();

  // 1. Check 7-day cache first — skip all API calls if fresh result exists
  if (fromCode && toCode) {
    const cached = readCache(fromCode, toCode);
    if (cached) {
      fromCache = true; fromFallback = false; verifiedByApi = false;
      showLoader(fromName, toName);
      hideAll();
      setTimeout(() => { hideLoader(); renderResults(cached, fromName, toName); }, 350);
      return;
    }
  }

  // 2. No Groq key — try fallback DB before prompting for key
  if (!groqKey) {
    if (fromCode && toCode) {
      const fallback = lookupFallback(fromCode, toCode, fromName, toName);
      if (fallback) {
        fromFallback = true; fromCache = false; verifiedByApi = false;
        showLoader(fromName, toName);
        hideAll();
        setTimeout(() => { hideLoader(); renderResults(fallback, fromName, toName); }, 400);
        return;
      }
    }
    openKeyModal();
    return;
  }

  showLoader(fromName, toName);
  hideAll();
  verifiedByApi = false; fromCache = false; fromFallback = false;

  try {
    let realTrains = null;

    if (ntesWorker && fromCode && toCode) {
      // NTES Worker available — single call returns all trains with running days
      showDayScan();
      try {
        realTrains = await fetchDirectTrains(fromCode, toCode);
        verifiedByApi = true;
        updateDayPips(10);
      } catch (e) {
        if (e.message === "ntes_not_configured") {
          // Worker URL disappeared somehow; fall through to fallback/Groq
        } else {
          console.warn("NTES Worker failed, falling back:", e.message);
        }
      }
    }

    if (!realTrains && fromCode && toCode) {
      // No live API — prefer curated fallback DB over Groq's unreliable memory
      const fallback = lookupFallback(fromCode, toCode, fromName, toName);
      if (fallback) {
        fromFallback = true;
        if (fromCode && toCode) writeCache(fromCode, toCode, fallback, false);
        hideLoader();
        renderResults(fallback, fromName, toName);
        return;
      }
    }

    setLoaderText("Planning routes with AI…", 65);
    const data = await callGroq(fromName, toName, groqKey, realTrains);

    // Cache: 7 days if IRCTC-verified, 24 hrs if AI-only estimate
    if (fromCode && toCode) writeCache(fromCode, toCode, data, verifiedByApi);

    hideLoader();
    renderResults(data, fromName, toName);
  } catch (err) {
    hideLoader();
    // Fallback DB as error recovery for popular routes
    if (fromCode && toCode) {
      const fallback = lookupFallback(fromCode, toCode, fromName, toName);
      if (fallback) {
        fromFallback = true;
        renderResults(fallback, fromName, toName);
        return;
      }
    }
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
async function callGroq(from, to, apiKey, realTrains = null) {
  let verifiedBlock = "";

  if (realTrains !== null) {
    if (realTrains.length === 0) {
      verifiedBlock = `\n⚠ VERIFIED BY IRCTC API: Zero direct trains found between these exact stations across the next 30 days. Use frequency="none", count=0, recommendation="hop".\n`;
    } else {
      verifiedBlock = `\n✅ VERIFIED BY IRCTC API — use this data exactly for directTrains, do NOT change or omit any train:\n${formatRealTrainsForPrompt(realTrains)}\n(Total verified direct trains: ${realTrains.length})\n`;
    }
  }

  const systemPrompt = `You are HopRail, an Indian Railways expert. Respond with valid JSON only — no markdown, no prose, no code fences.`;

  const userPrompt = `Journey: "${from}" → "${to}" on Indian Railways.
${verifiedBlock}
${realTrains === null ? `No live API data available. Use your knowledge — if even one weekly train might exist on this route, use frequency="rare" rather than "none".` : ""}

Return this exact JSON:
{
  "sourceStation": "station name",
  "destinationStation": "station name",
  "directTrains": {
    "frequency": "none|rare|few_weekly|daily|multiple_daily",
    "count": 0,
    "trains": [{"name": "Train Name", "number": "12345", "daysPerWeek": 1, "approxDuration": "~18 hrs"}],
    "note": "one-line note about direct connectivity"
  },
  "recommendation": "direct|hop",
  "hopRoutes": [
    {
      "id": 1,
      "label": "Via Junction Name",
      "reliability": "high|medium|low",
      "estimatedTotalTime": "24–28 hrs",
      "legs": [
        {
          "from": "Station",
          "to": "Station",
          "keyTrains": ["Train 1", "Train 2"],
          "frequency": "Daily",
          "approxDuration": "~5 hrs",
          "distance": "~300 km",
          "waitRisk": "low|medium|high",
          "notes": ""
        }
      ],
      "pros": ["point"],
      "cons": ["point"],
      "tip": "booking tip"
    }
  ],
  "insight": "2 sentences about this journey."
}

Rules:
- If VERIFIED DATA is provided above, copy it into directTrains exactly as given.
- Always include 2–3 hopRoutes when recommendation is "hop".
- recommendation="direct" if frequency is few_weekly/daily/multiple_daily; "hop" if none/rare.
- waitRisk: low=multiple daily, medium=once daily, high=few per week.`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0,
      max_tokens: 3500,
      response_format: { type: "json_object" },
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
  let text = raw.trim();
  try { return JSON.parse(text); } catch {}
  text = text.replace(/^```(?:json)?\s*/im, "").replace(/\s*```\s*$/im, "").trim();
  try { return JSON.parse(text); } catch {}
  const match = text.match(/\{[\s\S]*\}/);
  if (match) { try { return JSON.parse(match[0]); } catch {} }
  throw new Error("Could not parse AI response. Please try again.");
}

// ── Loader ────────────────────────────────────────────────────────────────────
function showLoader(fromName, toName) {
  const el = document.getElementById("loader");
  el.style.display = "flex";

  const from = fromName ? shortName(fromName) : "—";
  const to   = toName   ? shortName(toName)   : "—";
  document.getElementById("loaderFromLbl").textContent = from;
  document.getElementById("loaderToLbl").textContent   = to;
  document.getElementById("loaderMidLbl").textContent  = "scanning";

  document.getElementById("dayScan").style.display = "none";
  resetDayPips();

  loaderStep = 0;
  setLoaderText(LOADER_STEPS[0], 5);

  loaderTimer = setInterval(() => {
    loaderStep = Math.min(loaderStep + 1, LOADER_STEPS.length - 1);
    setLoaderText(LOADER_STEPS[loaderStep]);
  }, 2200);
}

function setLoaderText(text, pct) {
  const stepEl = document.getElementById("loaderStepText");
  stepEl.style.opacity = "0";
  setTimeout(() => {
    stepEl.textContent  = text;
    stepEl.style.opacity = "1";
  }, 150);
  if (pct !== undefined) document.getElementById("loaderBar").style.width = pct + "%";
}

function hideLoader() {
  clearInterval(loaderTimer);
  document.getElementById("loaderBar").style.width = "100%";
  document.getElementById("dayScan").style.display = "none";
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderBar").style.width = "0%";
  }, 350);
}

// ── Day pip helpers (10 pips = 30 days, 3 days per pip) ──────────────────────
function resetDayPips() {
  document.getElementById("dayPips").querySelectorAll("span").forEach(s => {
    s.classList.remove("done", "active");
  });
  document.getElementById("dayScanText").textContent = "Scanning 0 / 30 days…";
}

function showDayScan() {
  document.getElementById("dayScan").style.display = "flex";
  const pips = document.getElementById("dayPips").querySelectorAll("span");
  if (pips[0]) pips[0].classList.add("active");
}

function updateDayPips(daysChecked) {
  const TOTAL_DAYS = 30;
  const TOTAL_PIPS = 10;
  const pips = document.getElementById("dayPips").querySelectorAll("span");
  const pipsCompleted = Math.floor((daysChecked / TOTAL_DAYS) * TOTAL_PIPS);
  pips.forEach((p, i) => {
    p.classList.remove("done", "active");
    if (i < pipsCompleted)         p.classList.add("done");
    else if (i === pipsCompleted)  p.classList.add("active");
  });
  document.getElementById("dayScanText").textContent =
    `Scanning ${Math.min(daysChecked, TOTAL_DAYS)} / ${TOTAL_DAYS} days…`;
}

// ── Render Results ────────────────────────────────────────────────────────────
function renderResults(data, fromRaw, toRaw) {
  const from = data.sourceStation      || fromRaw;
  const to   = data.destinationStation || toRaw;

  document.getElementById("resultFrom").textContent = from;
  document.getElementById("resultTo").textContent   = to;

  const isDirect = data.recommendation === "direct";

  renderDirectSection(data.directTrains, isDirect);

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

  if (isDirect || freq === "few_weekly" || freq === "daily" || freq === "multiple_daily") {
    cls   = "good";
    icon  = "✦";
    title = "Direct trains available";
    sub   = note || `${trains.length} direct train${trains.length !== 1 ? "s" : ""} found`;
  } else if (freq === "rare" || freq === "weekly") {
    cls   = "sparse";
    icon  = "⚠";
    title = "Very limited direct trains";
    sub   = note || "Hop route recommended for reliable travel";
  } else {
    cls   = "none";
    icon  = "✕";
    title = verifiedByApi ? "No direct trains" : "No direct trains (AI estimate)";
    sub   = verifiedByApi
      ? (note || "Verified by IRCTC data — a hop route is your best option")
      : (note || "AI estimate — always verify on IRCTC before assuming none exist");
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

  let badgeText, badgeStyle;
  let verifiedBadge;
  if (verifiedByApi) {
    verifiedBadge = `<span style="font-size:0.68rem;margin-left:auto;color:var(--accent);opacity:0.8">✓ IRCTC verified</span>`;
  } else if (fromCache) {
    verifiedBadge = `<span style="font-size:0.68rem;margin-left:auto;color:var(--accent);opacity:0.7;cursor:pointer;text-decoration:underline;text-underline-offset:2px" onclick="clearRouteCache()" title="Results look wrong? Click to refresh">↺ Cached · Refresh</span>`;
  } else if (fromFallback) {
    verifiedBadge = `<span style="font-size:0.68rem;margin-left:auto;color:var(--muted-light);opacity:0.9">◎ Route DB</span>`;
  } else {
    verifiedBadge = `<span style="font-size:0.68rem;margin-left:auto;color:var(--muted-light)">AI estimate</span>`;
  }

  section.innerHTML = `
    <p class="hr-section-label">Direct Connectivity</p>
    <div class="hr-direct-card ${cls}">
      <div class="hr-direct-header">
        <span class="hr-direct-icon">${icon}</span>
        <div style="flex:1">
          <div class="hr-direct-title">${title}</div>
          <div class="hr-direct-sub">${escHtml(sub)}</div>
        </div>
        ${verifiedBadge}
      </div>
      ${trainsHtml}
    </div>
  `;
}

function renderRouteCard(route, index) {
  const legs     = route.legs || [];
  const stations = buildStationList(legs);

  const stripHtml = `
    <div class="hr-route-strip">
      <div class="hr-strip-inner">
        ${stations.map((s, i) => {
          const isFirst  = i === 0;
          const isLast   = i === stations.length - 1;
          const cls      = isFirst ? "origin" : isLast ? "dest" : "hop";
          const lineHtml = i < stations.length - 1 ? `<div class="hr-strip-line"></div>` : "";
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
  if (r === "high") return "● High reliability";
  if (r === "low")  return "● Low reliability";
  return "● Medium reliability";
}

// ── Reset ─────────────────────────────────────────────────────────────────────
function resetSearch() {
  verifiedByApi = false;
  fromCache     = false;
  fromFallback  = false;
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
