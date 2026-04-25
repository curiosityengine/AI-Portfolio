const GROQ_MODELS = [
  'llama-3.3-70b-versatile',
  'llama-3.1-8b-instant',
  'gemma2-9b-it',
  'qwen-qwq-32b',
];
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

// ── State ──────────────────────────────────────────────
function safeParse(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
}

const state = {
  apiKey: localStorage.getItem('lingo_api_key') || '',
  userName: localStorage.getItem('lingo_name') || '',
  voiceRssKey: localStorage.getItem('lingo_voicerss_key') || '01125406ac2a402f9c4220776c91e310',
  ttsVoice: localStorage.getItem('lingo_tts_voice') || 'en-us',
  savedWords: safeParse('lingo_saved_words', []),
  stats: safeParse('lingo_stats', { words: 0, messages: 0, grammar: 0, streak: 0, lastDate: '' }),
  chatMode: 'beginner',
  chatHistory: [],
  currentWord: null,
};

function saveState() {
  localStorage.setItem('lingo_saved_words', JSON.stringify(state.savedWords));
  localStorage.setItem('lingo_stats', JSON.stringify(state.stats));
}

// ── Groq API ───────────────────────────────────────────
async function groqChat(messages, { json = false } = {}) {
  let lastError;
  for (const model of GROQ_MODELS) {
    const body = { model, messages, temperature: 0.7, max_tokens: 1500 };
    if (json) body.response_format = { type: 'json_object' };

    const res = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${state.apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const data = await res.json();
      return data.choices[0].message.content;
    }

    const err = await res.json().catch(() => ({}));
    const msg = err?.error?.message || `API error ${res.status}`;
    const isRateLimit = res.status === 429 || msg.toLowerCase().includes('rate limit');
    if (isRateLimit) {
      lastError = `Rate limit on ${model}, trying next model...`;
      continue;
    }
    throw new Error(msg);
  }
  throw new Error('सभी models का rate limit हो गया है। कुछ देर बाद try करें। ' + (lastError || ''));
}

// ── API Key Modal ──────────────────────────────────────
const apiModal = document.getElementById('apiModal');
const apiKeyInput = document.getElementById('apiKeyInput');

document.getElementById('saveApiKey').addEventListener('click', () => {
  const key = apiKeyInput.value.trim();
  if (!key || key.length < 10) return alert('कृपया valid Groq API key डालें।');
  state.apiKey = key;
  localStorage.setItem('lingo_api_key', key);
  apiModal.classList.add('hidden');
  try { initApp(); } catch (e) { console.error('initApp error:', e); }
});

apiKeyInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('saveApiKey').click(); });

// ── Settings Modal ─────────────────────────────────────
document.getElementById('openSettings').addEventListener('click', () => {
  document.getElementById('settingsApiKey').value = state.apiKey;
  document.getElementById('settingsName').value = state.userName;
  document.getElementById('settingsVoiceRssKey').value = state.voiceRssKey;
  document.getElementById('settingsVoice').value = state.ttsVoice;
  document.getElementById('settingsModal').classList.remove('hidden');
});
document.getElementById('closeSettings').addEventListener('click', () => {
  document.getElementById('settingsModal').classList.add('hidden');
});
document.getElementById('saveSettings').addEventListener('click', () => {
  const key = document.getElementById('settingsApiKey').value.trim();
  const name = document.getElementById('settingsName').value.trim();
  const voiceRssKey = document.getElementById('settingsVoiceRssKey').value.trim();
  const voice = document.getElementById('settingsVoice').value;
  if (key) { state.apiKey = key; localStorage.setItem('lingo_api_key', key); }
  state.userName = name;
  localStorage.setItem('lingo_name', name);
  if (voiceRssKey) { state.voiceRssKey = voiceRssKey; localStorage.setItem('lingo_voicerss_key', voiceRssKey); }
  state.ttsVoice = voice;
  localStorage.setItem('lingo_tts_voice', voice);
  document.getElementById('settingsModal').classList.add('hidden');
  updateGreeting();
});

// ── Tab Navigation ─────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
  });
});

function goToTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-section').forEach(s => s.classList.toggle('active', s.id === `tab-${tab}`));
}

document.querySelectorAll('[data-goto]').forEach(btn => {
  btn.addEventListener('click', () => goToTab(btn.dataset.goto));
});

// ── Dashboard ──────────────────────────────────────────
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = hour < 12 ? 'सुप्रभात' : hour < 17 ? 'नमस्ते' : 'शुभ संध्या';
  const name = state.userName ? `, ${state.userName}` : '';
  document.getElementById('greetingText').textContent = `${greeting}${name}! 👋`;
}

function updateStats() {
  document.getElementById('statWords').textContent = state.stats.words;
  document.getElementById('statMessages').textContent = state.stats.messages;
  document.getElementById('statGrammar').textContent = state.stats.grammar;
  document.getElementById('statStreak').textContent = state.stats.streak;
  document.getElementById('streakCount').textContent = state.stats.streak;
  updateRecentWords();
}

function checkStreak() {
  const today = new Date().toDateString();
  if (state.stats.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.stats.lastDate === yesterday) {
      state.stats.streak += 1;
    } else if (state.stats.lastDate !== today) {
      state.stats.streak = 1;
    }
    state.stats.lastDate = today;
    saveState();
  }
}

function updateRecentWords() {
  const list = document.getElementById('recentWordsList');
  const section = document.getElementById('recentWordsSection');
  if (!state.savedWords.length) { section.style.display = 'none'; return; }
  section.style.display = '';
  list.innerHTML = state.savedWords.slice(-10).reverse().map(w =>
    `<span class="word-chip" title="${w.hindi}">${w.english}</span>`
  ).join('');
}

// ── Vocabulary ─────────────────────────────────────────
const hindiInput = document.getElementById('hindiWordInput');
const learnBtn = document.getElementById('learnWordBtn');
const vocabCard = document.getElementById('vocabCard');

learnBtn.addEventListener('click', learnWord);
hindiInput.addEventListener('keydown', e => { if (e.key === 'Enter') learnWord(); });

async function learnWord() {
  const word = hindiInput.value.trim();
  if (!word) return;
  setLearnLoading(true);

  try {
    const raw = await groqChat([
      {
        role: 'system',
        content: `You are an English teacher for Hindi speakers. Respond ONLY with a valid JSON object. No markdown fences, no extra text.`,
      },
      {
        role: 'user',
        content: `Hindi word/phrase: "${word}"
Return JSON:
{
  "hindi": "${word}",
  "english": "English word",
  "pronunciation": "phonetic pronunciation in Roman script e.g. hæp.i",
  "meaning_hindi": "simple Hindi explanation of meaning (2-3 sentences)",
  "examples": [
    {"en": "English example sentence", "hi": "Hindi translation of that sentence"},
    {"en": "Another example", "hi": "Hindi translation"}
  ],
  "synonyms": ["word1", "word2", "word3"]
}`,
      },
    ], { json: true });

    const data = JSON.parse(raw);
    state.currentWord = data;
    renderVocabCard(data);
    state.stats.words += 1;
    checkStreak();
    saveState();
    updateStats();
  } catch (e) {
    alert('Error: ' + e.message);
  } finally {
    setLearnLoading(false);
  }
}

function setLearnLoading(on) {
  document.getElementById('learnBtnText').classList.toggle('hidden', on);
  document.getElementById('learnBtnLoader').classList.toggle('hidden', !on);
  learnBtn.disabled = on;
}

function renderVocabCard(d) {
  document.getElementById('vcHindi').textContent = d.hindi;
  document.getElementById('vcEnglish').textContent = d.english;
  document.getElementById('vcPronun').textContent = `/${d.pronunciation}/`;
  document.getElementById('vcMeaning').textContent = d.meaning_hindi;

  const exList = document.getElementById('vcExamples');
  exList.innerHTML = d.examples.map(ex =>
    `<div class="example-item"><div class="example-en">${ex.en}</div><div class="example-hi">${ex.hi}</div></div>`
  ).join('');

  const synWrap = document.getElementById('vcSynonymSection');
  if (d.synonyms?.length) {
    document.getElementById('vcSynonyms').innerHTML = d.synonyms.map(s =>
      `<span class="word-chip">${s}</span>`).join('');
    synWrap.style.display = '';
  } else {
    synWrap.style.display = 'none';
  }

  vocabCard.classList.remove('hidden');
  vocabCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.getElementById('speakWordBtn').addEventListener('click', () => {
  if (!state.currentWord) return;
  speak(state.currentWord.english);
});

document.getElementById('saveWordBtn').addEventListener('click', () => {
  if (!state.currentWord) return;
  const exists = state.savedWords.find(w => w.english === state.currentWord.english);
  if (exists) { alert('यह word पहले से saved है!'); return; }
  state.savedWords.push({ english: state.currentWord.english, hindi: state.currentWord.hindi });
  saveState();
  renderSavedWords();
  updateRecentWords();
  document.getElementById('saveWordBtn').textContent = '✅ Saved!';
  setTimeout(() => { document.getElementById('saveWordBtn').textContent = '💾 Save Word'; }, 1500);
});

document.getElementById('tryAnotherBtn').addEventListener('click', () => {
  hindiInput.value = '';
  hindiInput.focus();
  vocabCard.classList.add('hidden');
});

function renderSavedWords() {
  const list = document.getElementById('savedWordsList');
  document.getElementById('savedCount').textContent = state.savedWords.length;
  if (!state.savedWords.length) { list.innerHTML = ''; return; }
  list.innerHTML = state.savedWords.slice().reverse().map(w =>
    `<div class="saved-word-card" onclick="hindiInput.value='${w.hindi}';learnWord();goToTab('vocab')">
      <div class="saved-word-en">${w.english}</div>
      <div class="saved-word-hi">${w.hindi}</div>
    </div>`
  ).join('');
}

// ── Text to Speech ─────────────────────────────────────
let currentAudio = null;

async function speak(text) {
  if (state.voiceRssKey) {
    await speakVoiceRSS(text);
  } else {
    speakBrowser(text);
  }
}

async function speakVoiceRSS(text) {
  // Stop any currently playing audio
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }

  const params = new URLSearchParams({
    key: state.voiceRssKey,
    src: text,
    hl:  state.ttsVoice,   // e.g. "en-us"
    r:   '-2',              // slightly slower — better for learners
    c:   'mp3',
    f:   '44khz_16bit_stereo',
  });

  const url = `https://api.voicerss.org/?${params}`;
  try {
    currentAudio = new Audio(url);
    await currentAudio.play();
  } catch (e) {
    console.warn('VoiceRSS failed, falling back to browser TTS:', e);
    speakBrowser(text);
  }
}

function speakBrowser(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const doSpeak = () => {
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'en-US';
    utt.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v => v.lang === 'en-US' && v.localService)
      || voices.find(v => v.lang.startsWith('en'))
      || voices[0];
    if (preferred) utt.voice = preferred;
    window.speechSynthesis.speak(utt);
  };
  const voices = window.speechSynthesis.getVoices();
  if (voices.length) doSpeak();
  else window.speechSynthesis.addEventListener('voiceschanged', doSpeak, { once: true });
}

// ── Chat ───────────────────────────────────────────────
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendChatBtn');

const modePrompts = {
  beginner: `You are a friendly English tutor for absolute beginners from India who speak Hindi.
Rules:
- Keep your English responses SHORT and SIMPLE (A1-A2 level).
- After responding in English, add a Hindi note explaining what you said and correcting any mistakes.
- Highlight corrections clearly under "सुधार (Correction):".
- Encourage the learner warmly.
- Never be harsh about mistakes.`,
  intermediate: `You are an English tutor for intermediate Hindi-speaking learners.
Rules:
- Respond in natural English (B1 level).
- Point out grammar/vocabulary errors in a "सुधार (Correction):" section in Hindi.
- Suggest better vocabulary alternatives.
- Keep conversations natural and interesting.`,
  advanced: `You are an English tutor for advanced Hindi-speaking learners targeting fluency.
Rules:
- Respond in sophisticated, natural English (B2-C1 level).
- Provide corrections and nuance tips in Hindi under "सुधार:".
- Focus on idioms, collocations, and tone.
- Challenge the learner with follow-up questions.`,
};

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.chatMode = btn.dataset.mode;
    state.chatHistory = [];
    chatMessages.innerHTML = '';
    appendAIMessage(`Mode बदल गया: <strong>${btn.textContent}</strong> 🎯<br/>नई conversation शुरू करें!`);
  });
});

sendBtn.addEventListener('click', sendChat);
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) sendChat(); });

document.querySelectorAll('.suggestion-chips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    chatInput.value = `Tell me about: ${chip.textContent}`;
    chatInput.focus();
  });
});

async function sendChat() {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = '';

  appendUserMessage(text);
  state.chatHistory.push({ role: 'user', content: text });

  const typing = appendTyping();

  try {
    const messages = [
      { role: 'system', content: modePrompts[state.chatMode] },
      ...state.chatHistory.slice(-10),
    ];
    const reply = await groqChat(messages);
    typing.remove();

    // Parse corrections out of reply
    const corrMatch = reply.match(/सुधार[^:]*:([\s\S]*?)(?=\n\n|\n[A-Z]|$)/i);
    let mainReply = reply;
    let correction = null;
    if (corrMatch) {
      correction = corrMatch[1].trim();
      mainReply = reply.replace(corrMatch[0], '').trim();
    }

    appendAIMessage(mainReply, correction);
    state.chatHistory.push({ role: 'assistant', content: reply });
    state.stats.messages += 1;
    checkStreak();
    saveState();
    updateStats();
  } catch (e) {
    typing.remove();
    appendAIMessage(`Error: ${e.message}`);
  }
}

function appendUserMessage(text) {
  const div = document.createElement('div');
  div.className = 'chat-message user-message';
  div.innerHTML = `<div class="message-bubble">${escapeHtml(text)}</div>`;
  chatMessages.appendChild(div);
  scrollChat();
}

function appendAIMessage(text, correction = null) {
  const div = document.createElement('div');
  div.className = 'chat-message ai-message';
  let html = `<div class="message-bubble">${text.replace(/\n/g, '<br/>')}`;
  if (correction) {
    html += `<div class="correction-box"><div class="label">✏️ सुधार (Correction)</div>${correction.replace(/\n/g, '<br/>')}</div>`;
  }
  html += '</div>';
  div.innerHTML = html;
  chatMessages.appendChild(div);
  scrollChat();
  return div;
}

function appendTyping() {
  const div = document.createElement('div');
  div.className = 'chat-message ai-message typing-indicator';
  div.innerHTML = `<div class="message-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;
  chatMessages.appendChild(div);
  scrollChat();
  return div;
}

function scrollChat() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ── Voice Input ────────────────────────────────────────
const voiceBtn = document.getElementById('voiceInputBtn');
const voiceStatus = document.getElementById('voiceStatus');
let recognition = null;

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = 'en-IN';
  recognition.interimResults = false;

  recognition.onresult = e => {
    chatInput.value = e.results[0][0].transcript;
    voiceBtn.classList.remove('listening');
    voiceStatus.classList.add('hidden');
  };
  recognition.onend = () => {
    voiceBtn.classList.remove('listening');
    voiceStatus.classList.add('hidden');
  };
  recognition.onerror = () => {
    voiceBtn.classList.remove('listening');
    voiceStatus.classList.add('hidden');
  };

  voiceBtn.addEventListener('click', () => {
    if (voiceBtn.classList.contains('listening')) {
      recognition.stop();
    } else {
      recognition.start();
      voiceBtn.classList.add('listening');
      voiceStatus.classList.remove('hidden');
    }
  });
} else {
  voiceBtn.style.display = 'none';
}

// ── Grammar ────────────────────────────────────────────
const topicLabels = {
  'tenses': 'Tenses (काल)',
  'articles': 'Articles (a, an, the)',
  'prepositions': 'Prepositions',
  'modal-verbs': 'Modal Verbs',
  'pronouns': 'Pronouns',
  'sentence-structure': 'Sentence Structure',
  'question-formation': 'Questions बनाना',
  'conjunctions': 'Conjunctions',
  'passive-voice': 'Passive Voice',
  'conditionals': 'Conditionals',
};

const lessonCache = {};

document.querySelectorAll('.grammar-topic-btn').forEach(btn => {
  btn.addEventListener('click', () => loadGrammarLesson(btn.dataset.topic));
});

document.getElementById('backToTopics').addEventListener('click', () => {
  document.getElementById('grammarTopics').style.display = '';
  document.getElementById('grammarLesson').classList.add('hidden');
});

async function loadGrammarLesson(topic) {
  document.getElementById('grammarTopics').style.display = 'none';
  const lessonEl = document.getElementById('grammarLesson');
  lessonEl.classList.remove('hidden');
  document.getElementById('lessonTitle').textContent = topicLabels[topic] || topic;
  document.getElementById('lessonLoader').style.display = 'flex';
  document.getElementById('lessonContent').classList.add('hidden');
  document.getElementById('lessonQuiz').classList.add('hidden');

  if (lessonCache[topic]) {
    renderLesson(lessonCache[topic]);
    return;
  }

  try {
    const raw = await groqChat([
      {
        role: 'system',
        content: `You are an English grammar teacher for Hindi-speaking students. Explain clearly using Hindi examples. Use HTML formatting with <h4>, <p>, <ul>, <li>, <div class="rule-box">, <div class="example">, <code>, <table>, <th>, <td> tags. Keep it practical and easy to understand.`,
      },
      {
        role: 'user',
        content: `Create a complete Hindi-medium lesson on English grammar topic: "${topicLabels[topic]}".

Include:
1. Simple explanation in Hindi (what it is and why it matters)
2. The main rules with HTML formatting
3. 4-5 example sentences with Hindi translations (use div class="example")
4. Common mistakes Hindi speakers make
5. Quick memory trick (याद रखने का तरीका)

After the lesson HTML, add a JSON block like this (OUTSIDE the HTML):
QUIZ_JSON:{"questions":[{"q":"Fill in: She ___ a doctor.","options":["is","are","am","be"],"answer":0},{"q":"Which is correct?","options":["I am going","I is going","I are going","I be going"],"answer":0},{"q":"Choose correct sentence:","options":["He have a car","He has a car","He having a car","He had have a car"],"answer":1}]}`,
      },
    ]);

    const quizMatch = raw.match(/QUIZ_JSON:(\{[\s\S]*\})/);
    let quiz = null;
    let html = raw;
    if (quizMatch) {
      try { quiz = JSON.parse(quizMatch[1]); } catch (_) {}
      html = raw.replace(/QUIZ_JSON:[\s\S]*$/, '').trim();
    }

    const lesson = { html, quiz };
    lessonCache[topic] = lesson;
    renderLesson(lesson);

    state.stats.grammar += 1;
    checkStreak();
    saveState();
    updateStats();
  } catch (e) {
    document.getElementById('lessonLoader').style.display = 'none';
    document.getElementById('lessonContent').classList.remove('hidden');
    document.getElementById('lessonContent').innerHTML = `<p style="color:var(--red)">Error: ${e.message}</p>`;
  }
}

// Convert any leftover markdown to HTML before rendering
function mdToHtml(text) {
  return text
    .replace(/^#{1,3}\s+(.+)$/gm, '<h4>$1</h4>')          // ### headings
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')       // **bold**
    .replace(/\*(.+?)\*/g, '<em>$1</em>')                   // *italic*
    .replace(/`([^`]+)`/g, '<code>$1</code>');              // `code`
}

function renderLesson({ html, quiz }) {
  document.getElementById('lessonLoader').style.display = 'none';
  const content = document.getElementById('lessonContent');
  content.innerHTML = mdToHtml(html);
  content.classList.remove('hidden');

  if (quiz?.questions?.length) {
    renderQuiz(quiz);
  }
}

function renderQuiz(quiz) {
  const quizEl = document.getElementById('lessonQuiz');
  const container = document.getElementById('quizQuestions');

  container.innerHTML = quiz.questions.map((q, qi) =>
    `<div class="quiz-q" data-qi="${qi}" data-answer="${q.answer}">
      <p><strong>Q${qi + 1}.</strong> ${q.q}</p>
      <div class="quiz-options">
        ${q.options.map((opt, oi) =>
          `<button class="quiz-option" data-oi="${oi}" type="button">${opt}</button>`
        ).join('')}
      </div>
    </div>`
  ).join('');

  quizEl.classList.remove('hidden');
  document.getElementById('quizResult').classList.add('hidden');

  // Event delegation — one listener on the container, never misses dynamically created buttons
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.quiz-option');
    if (!btn) return;
    const qDiv = btn.closest('.quiz-q');
    if (qDiv.dataset.answered) return;
    qDiv.dataset.answered = '1';
    qDiv.dataset.selected = btn.dataset.oi;
    // Visual feedback: highlight selected option immediately
    qDiv.querySelectorAll('.quiz-option').forEach(b => {
      b.disabled = true;
      b.style.opacity = b === btn ? '1' : '0.5';
    });
    btn.style.opacity = '1';
    btn.style.borderColor = 'var(--accent)';
    btn.style.color = 'var(--accent)';
  }, { once: false });
}

document.getElementById('checkQuizBtn').addEventListener('click', () => {
  let correct = 0, total = 0;
  document.querySelectorAll('.quiz-q').forEach(qDiv => {
    total++;
    const answer = parseInt(qDiv.dataset.answer);
    const selected = parseInt(qDiv.dataset.selected ?? -1);
    qDiv.querySelectorAll('.quiz-option').forEach((btn, i) => {
      if (i === answer) btn.classList.add('correct');
      else if (i === selected && selected !== answer) btn.classList.add('wrong');
    });
    if (selected === answer) correct++;
  });
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  const pct = Math.round((correct / total) * 100);
  const emoji = pct === 100 ? '🎉' : pct >= 60 ? '👍' : '📚';
  result.innerHTML = `${emoji} <strong>${correct}/${total}</strong> सही — ${pct}%<br/>${pct < 60 ? 'Lesson दोबारा पढ़ें!' : 'शाबाश! बहुत अच्छा!'}`;
});

// ── Utilities ──────────────────────────────────────────
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── Init ───────────────────────────────────────────────
function initApp() {
  updateGreeting();
  updateStats();
  renderSavedWords();
  checkStreak();
}

if (state.apiKey) {
  apiModal.classList.add('hidden');
  initApp();
}
