/* An-Naḥw al-Wāḍiḥ — interactive Arabic grammar course
   Plain JS, no build step. Data: data/catalog.js and data/lessons/NN.js (window.COURSE).
   Engine adapted from humanshado/FrenchGrammar for Arabic (right-to-left text, harakāt, Arabic voice). */
(function () {
  "use strict";
  const BOOK = window.BOOK, LESSONS = window.LESSONS || {}, ART = window.ART || {};
  const app = document.getElementById("app");

  /* ---------- helpers ---------- */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const HARAKAT = /[ً-ٰٟـ]/g;            // tashkīl + dagger alif + tatweel
  const strip = (s) => String(s || "").replace(HARAKAT, "");
  const PUNCT = /[،؛؟.,;:!?«»"“”()\[\]…—–\-*_/]/g;
  const norm = (s) => strip(s).toLowerCase().replace(PUNCT, " ").replace(/\s+/g, " ").trim();
  // loose: also forgive hamza seats, alif maqṣūra / yāʾ and tāʾ marbūṭa / hāʾ
  const loose = (s) => norm(s).replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/ؤ/g, "و").replace(/ئ/g, "ي").replace(/ء/g, "");
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const uniqBy = (a, f) => { const s = new Set(); return a.filter((x) => { const k = f(x); if (s.has(k)) return false; s.add(k); return true; }); };
  const isAr = (s) => /[؀-ۿ]/.test(String(s));
  const ar = (s, cls = "") => `<span class="ar ${cls}" lang="ar" dir="rtl">${esc(s)}</span>`;
  // mixed text: wrap Arabic runs so they get the Arabic font and direction
  const mix = (s) => esc(s).replace(/([؀-ۿ][؀-ۿً-ٰٟ\s،؛]*[؀-ۿً-ٰٟ]|[؀-ۿ])/g, '<span class="ar" lang="ar">$1</span>');
  const meta = (n) => BOOK.lessons[n - 1];
  const full = (n) => !!LESSONS[n];
  const lines = (L) => (L.scenes || []).flatMap((s) => s.lines);
  const V = (v, n) => ({ ar: v[0], en: v[1], type: v[2] || "", pic: v[3] || "", note: v[4] || "", forms: v[5] || "", group: v[6] || "", lesson: n });
  const vocabOf = (L) => (L.vocab || []).map((v) => V(v, L.n));
  const allVocab = () => Object.values(LESSONS).sort((a, b) => a.n - b.n).flatMap(vocabOf);
  const gender = (v) => /n\.f|adj\.f/.test(v.type) ? "f" : /n\.m|adj\.m/.test(v.type) ? "m" : "";
  const AL = /^ا[ً-ْ]*ل[ً-ْ]*/;
  const bare = (w) => String(w).replace(AL, "").trim();
  const pdf = (p) => `PDF p. ${p}`;

  /* ---------- storage ---------- */
  const KEY = "nahw-wadih-v1";
  let store;
  try { store = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { store = {}; }
  ["read", "best", "srs", "star", "ex", "sec"].forEach((k) => (store[k] = store[k] || {}));
  store.prefs = Object.assign({ tr: true, sp: true, rate: 0.85, gcol: true, hk: true, big: false }, store.prefs || {});
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* storage unavailable */ } };
  if (store.prefs.big) document.documentElement.classList.add("big-ar");

  /* ---------- speech ---------- */
  const TTS = {
    voice: null, gen: 0, ok: "speechSynthesis" in window,
    init() {
      if (!this.ok) return;
      const pickV = () => { const vs = speechSynthesis.getVoices(); this.voice = vs.find((v) => /^ar[-_](SA|EG)/i.test(v.lang) && /google|neural|natural|online|maged|tarik|hamed|zariyah|laila|salma|shakir/i.test(v.name)) || vs.find((v) => /^ar[-_]SA/i.test(v.lang)) || vs.find((v) => /^ar/i.test(v.lang)) || null; };
      pickV(); speechSynthesis.onvoiceschanged = pickV;
    },
    say(text, opts = {}) {
      if (!this.ok) { toast(); if (opts.onend) setTimeout(opts.onend, 1500); return; }
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text).replace(/_{2,}/g, " … ").replace(/[*{}\[\]]/g, ""));
      u.lang = (this.voice && this.voice.lang) || "ar-SA"; if (this.voice) u.voice = this.voice;
      u.rate = opts.rate || store.prefs.rate || 0.85;
      const my = ++this.gen; let called = false;
      const done = () => { if (called) return; called = true; if (my === this.gen && opts.onend) opts.onend(); };
      u.onend = done; u.onerror = done;
      if (opts.onend) setTimeout(done, (String(text).length * 110) / u.rate + 3000);
      speechSynthesis.speak(u);
      if (!this.voice) toast();
    },
    stop() { this.gen++; if (this.ok) speechSynthesis.cancel(); }
  };
  let warned = false;
  function toast(msg) {
    if (warned && !msg) return; if (!msg) warned = true;
    const d = document.createElement("div"); d.className = "notice toast";
    d.innerHTML = msg || "No Arabic voice was found in this browser, so audio may be silent. On Windows add the Arabic language pack (Settings ▸ Time & language ▸ Speech); on Android install Google Speech Services Arabic; on iOS/macOS add an Arabic voice under Accessibility ▸ Spoken Content. Chrome and Edge usually have one built in.";
    document.body.appendChild(d); setTimeout(() => d.remove(), 9000);
  }
  TTS.init();
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  /* ---------- dictionary (all lessons) ---------- */
  const DICT = new Map();
  const addKey = (k, e) => { k = loose(k); if (!k) return; if (!DICT.has(k)) DICT.set(k, []); DICT.get(k).push(e); };
  allVocab().forEach((e) => {
    String(e.ar).split(/\s*[\/=]\s*/).forEach((h) => { addKey(h, e); addKey(bare(h), e); if (/\s/.test(strip(h).trim())) strip(h).split(/\s+/).forEach((w) => { if (w.length > 2) addKey(w, { ...e, part: true }); }); });
    String(e.forms).split(/[,،]/).forEach((f) => f.trim() && (addKey(f.trim(), e), addKey(bare(f.trim()), e)));
  });
  Object.entries(window.LEXICON || {}).forEach(([k, en]) => k.split(",").forEach((f) => addKey(f, { ar: k.split(",")[0], en, lesson: 0, common: true })));
  function lookup(token, n) {
    const t = loose(token); if (!t) return [];
    const cands = []; const add = (x) => { if (x && x.length >= 1 && !cands.includes(x)) cands.push(x); };
    add(t);
    // proclitics: wa-, fa-, bi-, li-, ka-, sa-, al-, li-l-
    [t].forEach((c) => { if (/^[وف]/.test(c) && c.length > 3) add(c.slice(1)); });
    cands.slice().forEach((c) => { if (/^[بلكس]/.test(c) && c.length > 3) add(c.slice(1)); if (/^لل/.test(c) && c.length > 3) add(c.slice(2)); });
    cands.slice().forEach((c) => { if (/^ال/.test(c) && c.length > 3) add(c.slice(2)); });
    // enclitic pronouns and common endings
    cands.slice().forEach((c) => {
      ["هما", "هم", "هن", "كما", "كم", "كن", "نا", "ها", "ه", "ك", "ي", "ات", "ون", "ين", "ان", "تان", "تين", "وا", "ه"].forEach((s) => { if (c.endsWith(s) && c.length - s.length >= 2) { add(c.slice(0, -s.length)); add(c.slice(0, -s.length) + "ه"); } });
    });
    cands.slice().forEach((c) => { if (/^[اتني]/.test(c) && c.length >= 4) add(c.slice(1)); });
    for (const c of cands) {
      const hits = DICT.get(c);
      if (hits && hits.length) { const rank = (h) => h.lesson === n ? (h.part ? 1 : 0) : h.common ? 2 : (h.part ? 4 : 3); return uniqBy(hits.slice().sort((a, b) => rank(a) - rank(b)), (h) => h.ar + h.lesson); }
    }
    return [];
  }

  /* ---------- Arabic keyboard (for typing answers) ---------- */
  const KB_ROWS = ["ض ص ث ق ف غ ع ه خ ح ج", "ش س ي ب ل ا ت ن م ك ط", "ذ ئ ء ؤ ر ى ة و ز ظ د", "أ إ آ ـَ ـُ ـِ ـْ ـّ ـً ـٌ ـٍ"];
  const HK = ["ـَ", "ـُ", "ـِ", "ـْ", "ـّ", "ـً", "ـٌ", "ـٍ", "أ", "إ", "آ", "ء", "ة", "ى"];
  function kbHTML(full) {
    const key = (c) => `<button type="button" class="kb-k" data-c="${esc(c.replace("ـ", ""))}">${esc(c)}</button>`;
    return `<div class="kb ${full ? "full" : ""}" dir="rtl">${full ? KB_ROWS.map((r) => `<div class="kb-r">${r.split(" ").map(key).join("")}</div>`).join("") + `<div class="kb-r">${key("␣").replace('data-c="␣"', 'data-c=" "')}<button type="button" class="kb-k kb-bs" data-bs="1">⌫</button></div>` : HK.map(key).join("")}<button type="button" class="kb-k kb-tog" title="Full Arabic keyboard">${full ? "▴" : "⌨"}</button></div>`;
  }
  let lastGap = null;
  function bindKb(root) {
    root.querySelectorAll("input, textarea").forEach((g) => g.addEventListener("focus", () => (lastGap = g)));
    root.querySelectorAll(".kb-wrap").forEach((wrap) => {
      wrap.addEventListener("mousedown", (e) => {
        const b = e.target.closest(".kb-k"); if (!b) return; e.preventDefault();
        if (b.classList.contains("kb-tog")) { const full = !wrap.querySelector(".kb").classList.contains("full"); wrap.innerHTML = kbHTML(full); return; }
        const inp = (wrap.dataset.for && root.querySelector("#" + wrap.dataset.for)) || lastGap; if (!inp) return;
        const s = inp.selectionStart ?? inp.value.length, en = inp.selectionEnd ?? s;
        if (b.dataset.bs) { const a = Math.max(0, s - (s === en ? 1 : 0)); inp.value = inp.value.slice(0, a) + inp.value.slice(en); inp.setSelectionRange(a, a); inp.focus(); return; }
        const c = b.dataset.c; inp.value = inp.value.slice(0, s) + c + inp.value.slice(en); inp.focus(); inp.setSelectionRange(s + c.length, s + c.length);
      });
    });
  }
  const kb = (id) => `<div class="kb-wrap" ${id ? `data-for="${id}"` : ""}>${kbHTML(false)}</div>`;

  /* ---------- router ---------- */
  function route() {
    TTS.stop(); closePop();
    const h = location.hash.replace(/^#\/?/, "").split("/");
    document.querySelectorAll("nav.main a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#/" + (h[0] || "")));
    window.scrollTo(0, 0);
    if (h[0] === "lesson") return renderLesson(+h[1] || 1, h[2] || "lesson", h[3]);
    if (h[0] === "review") return renderReview();
    if (h[0] === "grammar") return renderGrammarIndex();
    if (h[0] === "irab") return renderIrabMap();
    if (h[0] === "index") return renderIndex(decodeURIComponent(h[1] || ""));
    if (h[0] === "method") return renderMethod();
    return renderHome();
  }
  window.addEventListener("hashchange", route);

  /* ---------- home ---------- */
  function renderHome() {
    const total = BOOK.lessons.length, nFull = Object.keys(LESSONS).length, nRead = Object.keys(store.read).length;
    const words = allVocab().length;
    const due = srsDeck().filter((c) => c.due <= Date.now()).length;
    const first = (BOOK.lessons.find((c) => full(c[0]) && !store.read[c[0]]) || BOOK.lessons[0])[0];
    const card = ([n, t, e, p, icon]) => {
      const b = store.best[n]; const badge = full(n) ? (b != null ? `<span class="badge done">quiz ${b}%</span>` : store.read[n] ? `<span class="badge done">opened</span>` : `<span class="badge full">interactive</span>`) : `<span class="badge">coming soon</span>`;
      return `<a class="lesson-card ${full(n) ? "" : "soon"}" href="#/lesson/${n}"><span class="num">${n} · PDF p. ${p}</span> ${badge}<span class="icon">${icon || ""}</span>${ar(t, "t")}<span class="en">${esc(e)}</span></a>`;
    };
    const parts = Object.entries(BOOK.parts).map(([k, p]) => `<h3 class="part-h"><span class="part-k">${esc(p.ar)}</span> ${esc(p.en)} <span class="small muted">${esc(p.note || "")}</span></h3><div class="grid">${BOOK.lessons.filter((c) => c[5] === k).map(card).join("")}</div>`).join("");
    app.innerHTML = `
      <section class="hero">
        <div class="card">
          <div class="flagbar ar-bar"><i></i><i></i><i></i></div>
          ${ar(BOOK.title, "big")}
          <h1 style="font-size:1.3rem;margin:.3rem 0">${esc(BOOK.titleEn)}</h1>
          <p class="muted">A lesson-by-lesson interactive companion to <i>${esc(BOOK.book)}</i> (${esc(BOOK.author)}). Each lesson teaches the same rule as the book, with the PDF page numbers, and goes further: parts of speech, case endings (<i>iʿrāb</i>), agreement, verb conjugation and moods, sentence structure and good style.</p>
          <p>Every lesson has an illustrated <b>lesson</b> with interactive diagrams and “check yourself” questions, <b>picture vocabulary</b>, short fully-vowelled <b>texts</b> with tap-to-translate words and audio, <b>dictation</b>, a <b>dialogue</b> to speak, <b>flashcards</b> with spaced repetition, graded <b>exercises</b> in the book's styles (including <i>iʿrāb</i> and “vowel the endings”), a new mixed <b>quiz</b> each round, a one-page <b>summary</b> and <b>learning tips</b>.</p>
          <div class="toolbar"><a class="btn primary" href="#/lesson/${first}">Continue — lesson ${first}</a><a class="btn" href="#/method">How to study</a><a class="btn" href="#/irab">Iʿrāb map</a><a class="btn" href="#/review">Review ${due ? `(${due} due)` : ""}</a><a class="btn" href="${BOOK.video}" target="_blank" rel="noopener">▶ Video series</a></div>
        </div>
        <div class="card">
          <h3>Your progress</h3>
          <div class="stats"><div class="stat"><b>${nRead}</b>lessons opened</div><div class="stat"><b>${Object.keys(store.sec).length}</b>sections done</div><div class="stat"><b>${due}</b>words due today</div></div>
          <p class="small muted" style="margin:.8rem 0 .3rem">Interactive lessons: ${nFull} of ${total} · ${words} words and expressions</p>
          <div class="progressbar"><i style="width:${Math.max(2, (nFull / total) * 100)}%"></i></div>
          <p class="small muted">The course is built part by part. Progress, stars and best scores are saved in this browser only.</p>
          <div class="toolbar"><button class="btn ${store.prefs.big ? "on" : ""}" id="bigar">Larger Arabic text</button></div>
        </div>
      </section>
      <h2 style="margin-top:1.5rem">Lessons <span class="small muted ar">الفهرس</span></h2>
      ${parts}`;
    app.querySelector("#bigar").onclick = (e) => { store.prefs.big = !store.prefs.big; save(); document.documentElement.classList.toggle("big-ar", store.prefs.big); e.target.classList.toggle("on", store.prefs.big); };
  }

  /* ---------- lesson ---------- */
  const TABS = [["lesson", "📘 Lesson"], ["words", "🖼 Picture words"], ["read", "📖 Read"], ["listen", "🎧 Listen"], ["speak", "🗣 Speak"], ["vocab", "🔤 Vocabulary"], ["exercises", "✏️ Exercises"], ["practice", "✅ Quiz"], ["summary", "📋 Summary"], ["tips", "💡 Tips"]];
  function renderLesson(n, tab, sub) {
    if (n < 1 || n > BOOK.lessons.length) n = 1;
    const m = meta(n), L = LESSONS[n];
    const prev = n > 1 ? `<a href="#/lesson/${n - 1}">← ${n - 1}</a>` : "", next = n < BOOK.lessons.length ? `<a href="#/lesson/${n + 1}">${n + 1} →</a>` : "";
    const part = BOOK.parts[m[5]];
    if (!L) { app.innerHTML = `<div class="lesson-head"><div><div class="muted small">${esc(part.en)} · lesson ${n} · ${pdf(m[3])}</div>${ar(m[1], "title")}<div><b>${esc(m[2])}</b></div></div><div class="lesson-nav toolbar">${prev}${next}</div></div><div class="notice">This lesson is not interactive yet — the course is built part by part. Meanwhile, read ${pdf(m[3])} of the book and watch the matching video in the <a href="${BOOK.video}" target="_blank" rel="noopener">video series</a>.</div>`; return; }
    if (!TABS.find(([k]) => k === tab)) tab = "lesson";
    const exDone = Object.keys(store.ex).filter((k) => k.startsWith(n + ":")).length;
    const secDone = (L.lesson || []).filter((s) => store.sec[n + ":" + s.id]).length;
    store.read[n] = store.read[n] || Date.now(); save();
    app.innerHTML = `
      <div class="lesson-head">
        <div><div class="muted small">${esc(part.en)} · lesson ${n} · PDF pp. ${L.pages[0]}–${L.pages[1]}</div><div class="title-row"><span class="icon big">${m[4] || ""}</span>${ar(m[1], "title")}</div><div><b>${esc(m[2])}</b></div></div>
        <div class="lesson-nav toolbar"><a href="${BOOK.video}" target="_blank" rel="noopener" title="Video series for the book">▶ video</a>${prev}${next}</div>
      </div>
      <p class="muted">${mix(L.summary)}</p>
      <nav class="tabs">${TABS.map(([k, l]) => `<a href="#/lesson/${n}/${k}" class="${k === tab ? "on" : ""}">${l}${k === "exercises" && exDone ? ` <span class="small">(${exDone}/${(L.exercises || []).length})</span>` : ""}${k === "lesson" && secDone ? ` <span class="small">(${secDone}/${L.lesson.length})</span>` : ""}</a>`).join("")}</nav>
      <div id="tab"></div>`;
    const el = document.getElementById("tab");
    ({ lesson: tabLesson, words: tabWords, read: tabRead, listen: tabListen, speak: tabSpeak, vocab: tabVocab, exercises: tabExercises, practice: tabPractice, summary: tabSummary, tips: tabTips }[tab])(el, n, L, sub);
  }

  /* ---------- the lesson (grammar explained, with illustrations) ---------- */
  function exRow(x) { return `<div class="ex"><span class="exar" dir="rtl" lang="ar">${tokenize(x[0])} <button class="btn icon" data-say="${esc(x[0])}" title="Listen">🔊</button></span><span class="muted">${esc(x[1])}</span>${x[2] ? `<span class="small ex-note">${mix(x[2])}</span>` : ""}</div>`; }
  function tabLesson(el, n, L, sub) {
    const secs = L.lesson || [];
    el.innerHTML = `<div class="lesson-wrap">
      <aside class="toc card"><div class="small muted">In this lesson</div><ol>${secs.map((s) => `<li><a href="#/lesson/${n}/lesson/${s.id}" class="${store.sec[n + ":" + s.id] ? "done" : ""}">${esc(s.t)}</a></li>`).join("")}</ol>
        ${L.objectives ? `<div class="small muted" style="margin-top:.6rem">You will be able to</div><ul class="small obj">${L.objectives.map((o) => `<li>${mix(o)}</li>`).join("")}</ul>` : ""}
        ${L.method ? `<div class="small muted" style="margin-top:.6rem">The book's method</div><ol class="small obj">${["الأمثلة — read the examples", "البحث — discuss what you notice", "القاعدة — state the rule", "التمرينات — practise"].map((x) => `<li>${mix(x)}</li>`).join("")}</ol>` : ""}</aside>
      <div class="lesson-body">${secs.map((s, k) => `<section class="card gcard lsec" id="sec-${s.id}">
        <div class="sec-top"><span class="sec-n">${k + 1}</span><div><h3>${esc(s.t)}</h3>${s.ar ? `<div class="sec-ar">${ar(s.ar)}</div>` : ""}</div>${s.pos ? `<span class="chip pos-chip">${esc(s.pos)}</span>` : ""}</div>
        ${s.pages ? `<div class="small muted">PDF p. ${esc(s.pages)}</div>` : ""}
        <div class="sec-b">${s.b || ""}</div>
        ${s.widget && ART.widgets && ART.widgets[s.widget] ? `<div class="widget inline-w" data-w="${s.widget}" data-s="${s.id}">${ART.widgets[s.widget].html(s.wd || {}, s)}</div>` : ""}
        ${(s.ex || []).length ? `<div class="exs">${s.ex.map(exRow).join("")}</div>` : ""}
        ${s.after ? `<div class="sec-b">${s.after}</div>` : ""}
        ${s.rule ? `<div class="rule"><div class="rule-h">القاعدة · the rule</div>${s.rule}</div>` : ""}
        ${s.warn ? `<div class="remark warn"><b>⚠ Watch out.</b> ${s.warn}</div>` : ""}
        ${s.tip ? `<div class="remark"><b>💡 Tip.</b> ${s.tip}</div>` : ""}
        ${(s.check || []).length ? `<div class="check"><div class="check-h">✔ Check yourself</div>${s.check.map((c, i) => `<div class="cq" data-s="${s.id}" data-i="${i}"><div>${mix(c[0])}</div><div class="opts inline">${shuffle(c[1].map((o, j) => [o, j])).map(([o, j]) => `<button class="opt sm ${isAr(o) && !/[a-z]/i.test(o) ? "ar-opt" : ""}" data-j="${j}">${mix(o)}</button>`).join("")}</div><div class="small why" hidden></div></div>`).join("")}</div>` : ""}
        <div class="toolbar"><button class="btn sec-done ${store.sec[n + ":" + s.id] ? "on" : ""}" data-s="${s.id}">${store.sec[n + ":" + s.id] ? "✔ Done" : "Mark as done"}</button>${k < secs.length - 1 ? `<a class="btn" href="#/lesson/${n}/lesson/${secs[k + 1].id}">Next: ${esc(secs[k + 1].t)} ↓</a>` : `<a class="btn primary" href="#/lesson/${n}/exercises">Go to the exercises →</a>`}</div>
      </section>`).join("")}</div></div>`;
    el.querySelectorAll(".inline-w").forEach((w) => { const W = ART.widgets[w.dataset.w]; const s = secs.find((x) => x.id === w.dataset.s); if (W.bind) W.bind(w, TTS, s.wd || {}, s); });
    el.querySelectorAll(".cq").forEach((q) => {
      const s = secs.find((x) => x.id === q.dataset.s), c = s.check[+q.dataset.i];
      q.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
        const ok = +b.dataset.j === c[2];
        q.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.j === c[2]) x.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        const w = q.querySelector(".why"); w.hidden = false; w.innerHTML = `<b class="${ok ? "g-ok" : "g-no"}">${ok ? "أحسنت! Well done." : "Not quite."}</b> ${mix(c[3] || "")}`;
        const ansText = c[1][c[2]]; if (isAr(ansText) && c[4] !== false) TTS.say(c[4] || ansText);
      });
    });
    el.querySelectorAll(".sec-done").forEach((b) => b.onclick = () => { const k = n + ":" + b.dataset.s; if (store.sec[k]) delete store.sec[k]; else store.sec[k] = Date.now(); save(); b.classList.toggle("on", !!store.sec[k]); b.textContent = store.sec[k] ? "✔ Done" : "Mark as done"; const a = el.querySelector(`.toc a[href$="/${b.dataset.s}"]`); if (a) a.classList.toggle("done", !!store.sec[k]); });
    el.querySelector(".lesson-body").addEventListener("click", (e) => { const w = e.target.closest(".w"); if (w) showPop(w, w.textContent, n); });
    if (sub) setTimeout(() => { const t = document.getElementById("sec-" + sub); if (t) t.scrollIntoView({ block: "start" }); }, 120);
  }

  // Read
  function tokenize(text) {
    return String(text).split(/(\s+|[«»“”"!?.,;:()…—–،؛؟]+)/).map((t) => !t ? "" : /^[\s«»“”"!?.,;:()…—–،؛؟]+$/.test(t) ? esc(t) : isAr(t) ? `<span class="w">${esc(t)}</span>` : esc(t)).join("");
  }
  function lineHTML(l, i) {
    const [sp, a, en] = l;
    return `<div class="line ${sp ? "dlg" : "nar"}"><span class="sent" data-i="${i}" dir="rtl" lang="ar">${sp ? `<span class="sp">${esc(sp)}:</span> ` : ""}${tokenize(a)}<span class="say" data-sent="${i}" title="Listen">🔊</span></span><span class="tr">${esc(en)}</span></div>`;
  }
  function tabRead(el, n, L) {
    store.read[n] = Date.now(); save();
    const p = store.prefs; let i = 0;
    const body = L.scenes.map((s) => `<section class="scene"><h3>${s.pic ? `<span class="pic">${esc(s.pic)}</span>` : ""}${ar(s.h)} <span class="small muted">— ${esc(s.en)}</span></h3>${s.lines.map((l) => lineHTML(l, i++)).join("")}${s.note ? `<div class="remark"><b>Note.</b> ${mix(s.note)}</div>` : ""}</section>`).join("");
    el.innerHTML = `
      <div class="toolbar sticky">
        <button class="btn ${p.tr ? "on" : ""}" data-t="tr">Translation</button>
        <button class="btn ${p.sp ? "on" : ""}" data-t="sp">Speakers</button>
        <button class="btn ${p.hk ? "on" : ""}" data-t="hk">Ḥarakāt</button>
        <button class="btn primary" id="playall">▶ Read aloud</button><button class="btn" id="stop">■</button>
        ${rateSelect()}
        <span class="small muted">Tap any word for its meaning. Turn ḥarakāt off to practise reading unvowelled text.</span>
      </div>
      <div class="reader ${p.tr ? "" : "no-tr"} ${p.sp ? "" : "no-sp"} ${p.hk ? "" : "no-hk"}" id="reader">${body}</div>`;
    const reader = el.querySelector("#reader");
    const hk = (on) => reader.querySelectorAll(".sent .w").forEach((w) => { if (!w.dataset.full) w.dataset.full = w.textContent; w.textContent = on ? w.dataset.full : strip(w.dataset.full); });
    if (!p.hk) hk(false);
    el.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => { const k = b.dataset.t; p[k] = !p[k]; save(); b.classList.toggle("on", p[k]); reader.classList.toggle("no-" + k, !p[k]); if (k === "hk") hk(p.hk); });
    const sents = lines(L);
    reader.addEventListener("click", (e) => {
      const say = e.target.closest(".say"); if (say) { playFrom(reader, sents, +say.dataset.sent, true); return; }
      const w = e.target.closest(".w"); if (w) showPop(w, w.dataset.full || w.textContent, n);
    });
    el.querySelector("#playall").onclick = () => playFrom(reader, sents, 0);
    el.querySelector("#stop").onclick = () => { TTS.stop(); reader.querySelectorAll(".playing").forEach((x) => x.classList.remove("playing")); };
    bindRate(el);
  }
  function rateSelect() { const r = store.prefs.rate; return `<select class="btn" id="rate" title="Speed">${[0.55, 0.7, 0.85, 1].map((v) => `<option value="${v}" ${v == r ? "selected" : ""}>${v === 1 ? "normal" : v + "×"}</option>`).join("")}</select>`; }
  function bindRate(el) { const s = el.querySelector("#rate"); if (s) s.onchange = () => { store.prefs.rate = +s.value; save(); }; }
  function playFrom(root, sents, i, once) {
    root.querySelectorAll(".playing").forEach((x) => x.classList.remove("playing"));
    if (i >= sents.length) return;
    const node = root.querySelector(`.sent[data-i="${i}"]`); if (node) { node.classList.add("playing"); node.scrollIntoView({ block: "center", behavior: "smooth" }); }
    TTS.say(sents[i][1], { onend: () => { node && node.classList.remove("playing"); if (!once) setTimeout(() => playFrom(root, sents, i + 1), 250); } });
  }

  // Popover
  let popEl = null;
  function closePop() { if (popEl) { popEl.remove(); popEl = null; } }
  document.addEventListener("click", (e) => {
    if (popEl && !e.target.closest(".pop") && !e.target.closest(".w")) closePop();
    const s = e.target.closest("[data-say]"); if (s) TTS.say(s.dataset.say);
    const st = e.target.closest(".star[data-key]"); if (st) { toggleStar(st.dataset.key); st.classList.toggle("on", !!store.star[st.dataset.key]); }
  });
  function showPop(anchor, word, n) {
    closePop();
    word = word.replace(/[«»"،؛؟.,!:]/g, "");
    const hits = lookup(word, n).slice(0, 3);
    const d = document.createElement("div"); d.className = "pop";
    d.innerHTML = `${ar(word, "pw")}${hits.length ? hits.map((h) => `<div style="margin-top:.35rem">${h.pic ? `<span class="pic">${esc(h.pic)}</span> ` : ""}<b>${esc(h.en)}</b><div class="meta">${ar(h.ar)} ${h.type ? `<span class="chip g-${gender(h)}">${esc(h.type)}</span>` : ""} ${h.note ? "· " + mix(h.note) : ""} ${h.forms ? `· ${ar(h.forms)}` : ""} ${h.lesson && h.lesson !== n ? `· lesson ${h.lesson}` : ""}</div></div>`).join("") : `<div class="meta">No entry — probably a name, or a form not in the lists. Try the <a href="#/index/${encodeURIComponent(strip(bare(word)))}">word index</a>.</div>`}
      <div class="row"><button class="btn" data-say="${esc(word)}">🔊 Listen</button>${hits[0] && !hits[0].common ? `<button class="btn star ${store.star[wordKey(hits[0])] ? "on" : ""}" data-key="${esc(wordKey(hits[0]))}">★ Review</button>` : ""}</div>`;
    document.body.appendChild(d);
    const r = anchor.getBoundingClientRect(); const w = d.offsetWidth, h = d.offsetHeight;
    let x = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), innerWidth - w - 8); let y = r.bottom + 8; if (y + h > innerHeight - 8) y = r.top - h - 8;
    d.style.left = x + "px"; d.style.top = Math.max(8, y) + "px"; popEl = d;
  }

  // Picture words
  function tabWords(el, n, L) {
    const voc = vocabOf(L).filter((v) => v.pic);
    el.innerHTML = `<div class="toolbar"><button class="btn primary" id="pw-quiz">🎯 Picture quiz</button><button class="btn ${store.prefs.gcol ? "on" : ""}" id="pw-g">Gender colours</button><span class="small muted">Tap a picture to hear it. <span class="g-m">blue = masculine <span class="ar">مذكّر</span></span> · <span class="g-f">red = feminine <span class="ar">مؤنّث</span></span></span></div>
      <div id="pw-area"></div>`;
    const area = el.querySelector("#pw-area");
    const groups = [...new Set(voc.map((v) => v.group))];
    const tile = (v) => `<div class="tile g-${gender(v)}" data-say="${esc(v.ar)}" title="${esc(v.en)}"><span class="emo">${esc(v.pic)}</span>${ar(v.ar)}<span class="en">${esc(v.en)}</span></div>`;
    const draw = () => { area.innerHTML = groups.map((g) => `${g ? `<h3 class="grp-h">${mix(g)}</h3>` : ""}<div class="pics ${store.prefs.gcol ? "gcol" : ""}">${voc.filter((v) => v.group === g).map(tile).join("")}</div>`).join(""); };
    el.querySelector("#pw-g").onclick = (e) => { store.prefs.gcol = !store.prefs.gcol; save(); e.target.classList.toggle("on", store.prefs.gcol); draw(); };
    el.querySelector("#pw-quiz").onclick = () => {
      let i = 0, score = 0; const deck = shuffle(voc).slice(0, 12);
      const q = () => {
        if (i >= deck.length) { area.innerHTML = `<div class="card center"><div class="score-big">${score}/${deck.length}</div><button class="btn primary" id="again">Again</button> <button class="btn" id="back">Back to pictures</button></div>`; area.querySelector("#again").onclick = () => el.querySelector("#pw-quiz").click(); area.querySelector("#back").onclick = draw; return; }
        const t = deck[i], opts = shuffle([t, ...pick(voc.filter((x) => x !== t && x.pic !== t.pic), 3)]);
        area.innerHTML = `<div class="q center"><div class="qbar"><span class="kind">Which word?</span><span>${i + 1}/${deck.length} · ${score}</span></div><div class="emo huge">${esc(t.pic)}</div><div class="opts">${opts.map((o) => `<button class="opt ar-opt" data-ok="${o === t}">${ar(o.ar)}</button>`).join("")}</div><div id="fb"></div></div>`;
        area.querySelectorAll(".opt").forEach((b) => b.onclick = () => { const ok = b.dataset.ok === "true"; if (ok) score++; TTS.say(t.ar); area.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (x.dataset.ok === "true") x.classList.add("right"); }); if (!ok) b.classList.add("wrong"); area.querySelector("#fb").innerHTML = `<p>${ar(t.ar)} — ${esc(t.en)}</p><button class="btn primary" id="nx">Next →</button>`; area.querySelector("#nx").onclick = () => { i++; q(); }; });
      };
      q();
    };
    draw();
  }

  // Listen
  function tabListen(el, n, L) {
    const sents = lines(L);
    el.innerHTML = `
      <div class="toolbar">${rateSelect()}<span class="small muted">Audio uses your device's Arabic text-to-speech voice. Slow it down for dictation.</span></div>
      <div class="two">
        <div class="card"><h3>1 · Read-along & shadowing</h3><p class="small muted">Listen line by line. Tick “pause” and repeat each line aloud in the gap, copying the case endings you hear.</p>
          <div class="toolbar"><button class="btn primary" id="ra-play">▶ Play all</button><button class="btn" id="ra-stop">■ Stop</button><label class="small"><input type="checkbox" id="ra-pause"> pause to repeat</label><label class="small"><input type="checkbox" id="ra-hide"> hide text</label></div>
          <div class="reader compact" id="ra">${sents.map((s, i) => `<p dir="rtl"><span class="sent" data-i="${i}" lang="ar">${s[0] ? `<span class="sp">${esc(s[0])}:</span> ` : ""}<span class="txt">${esc(s[1])}</span></span> <span class="say" data-sent="${i}">🔊</span></p>`).join("")}</div></div>
        <div class="card"><h3>2 · Dictation <span class="small muted ar">الإملاء</span></h3><p class="small muted">Listen and type what you hear. Ḥarakāt and punctuation don't count; a hamza seat or a ة / ه slip is shown but forgiven.</p><div id="dict"></div></div>
      </div>
      <div class="card"><h3>3 · Listening vocabulary</h3><p class="small muted">Hear a word, choose its meaning.</p><div id="lv"></div></div>
      <div class="card"><h3>4 · Listening comprehension</h3><p class="small muted">Listen to a text without reading it, then answer.</p><div id="lc"></div></div>`;
    bindRate(el);
    const ra = el.querySelector("#ra");
    el.querySelector("#ra-hide").onchange = (e) => ra.classList.toggle("hide-txt", e.target.checked);
    let stopped = false;
    const playSeq = (i) => { if (stopped || i >= sents.length) return; const node = ra.querySelector(`.sent[data-i="${i}"]`); ra.querySelectorAll(".playing").forEach((x) => x.classList.remove("playing")); node.classList.add("playing"); node.scrollIntoView({ block: "nearest" }); TTS.say(sents[i][1], { onend: () => setTimeout(() => playSeq(i + 1), el.querySelector("#ra-pause").checked ? 1400 + sents[i][1].length * 70 : 300) }); };
    el.querySelector("#ra-play").onclick = () => { stopped = false; playSeq(0); };
    el.querySelector("#ra-stop").onclick = () => { stopped = true; TTS.stop(); };
    ra.addEventListener("click", (e) => { const s = e.target.closest(".say"); if (s) { stopped = true; playFrom(ra, sents, +s.dataset.sent, true); } });
    const pool = uniqBy(sents.map((s) => s[1]).flatMap((t) => t.split(/(?<=[.!؟?])\s+/)).map((t) => t.replace(/^[—–-]\s*/, "").trim()).filter((t) => { const w = t.split(/\s+/).length; return w >= 2 && w <= 9; }), (x) => x);
    let order = shuffle(pool), di = 0, score = 0, tries = 0;
    const dict = el.querySelector("#dict");
    const drawDict = () => {
      const target = order[di % order.length];
      dict.innerHTML = `<div class="toolbar"><button class="btn primary" id="d-play">🔊 Play</button><button class="btn" id="d-slow">🐢 Slow</button><span class="small muted" id="d-sc">${score}/${tries} correct</span></div>
        <input class="dict" id="d-in" lang="ar" dir="rtl" placeholder="اكتب هنا…" autocomplete="off" autocapitalize="off" spellcheck="false">${kb("d-in")}<div class="toolbar" style="margin-top:.5rem"><button class="btn" id="d-check">Check</button><button class="btn" id="d-show">Show</button><button class="btn" id="d-next">Next →</button></div><div id="d-res"></div>`;
      bindKb(dict);
      const play = (r) => TTS.say(target, { rate: r });
      dict.querySelector("#d-play").onclick = () => play(); dict.querySelector("#d-slow").onclick = () => play(0.55);
      dict.querySelector("#d-next").onclick = () => { di++; drawDict(); };
      dict.querySelector("#d-show").onclick = () => { dict.querySelector("#d-res").innerHTML = `<p>${ar(target, "big-line")}</p>`; };
      dict.querySelector("#d-check").onclick = () => {
        const want = norm(target).split(" "), got = norm(dict.querySelector("#d-in").value).split(" ").filter(Boolean);
        let exact = true, close = true;
        const marks = want.map((w, i) => { const g = got[i]; if (g === w) return `<span class="ok">${esc(w)}</span>`; exact = false; if (g && loose(g) === loose(w)) return `<span class="acc" title="check the hamza / ة">${esc(g)}</span><span class="miss">${esc(w)}</span>`; close = false; return g ? `<span class="no">${esc(g)}</span><span class="miss">${esc(w)}</span>` : `<span class="miss">${esc(w)}</span>`; }).join(" ");
        if (got.length !== want.length) { exact = false; close = false; }
        tries++; if (close) score++;
        dict.querySelector("#d-res").innerHTML = `<div class="feedback ${close ? "ok" : "no"}">${exact ? "ممتاز! Perfect ✔" : close ? "Right — just check the hamza or ة (orange)." : "Compare: green = right, yellow = expected."}</div><p class="diff" dir="rtl" lang="ar">${marks}</p><p>${ar(target, "big-line")}</p>`;
        dict.querySelector("#d-sc").textContent = `${score}/${tries} correct`;
      };
      dict.querySelector("#d-in").onkeydown = (e) => { if (e.key === "Enter") dict.querySelector("#d-check").click(); };
      setTimeout(play, 300);
    };
    dict.innerHTML = `<button class="btn primary" id="d-start">Start dictation</button>`; dict.querySelector("#d-start").onclick = drawDict;
    const lv = el.querySelector("#lv"), voc = vocabOf(L);
    const drawLV = () => {
      const [t, ...wrong] = pick(voc, 4); const opts = shuffle([t, ...wrong]);
      lv.innerHTML = `<div class="toolbar"><button class="btn primary" id="lv-play">🔊 Play word</button><button class="btn" id="lv-next">Next →</button></div><div class="opts">${opts.map((o) => `<button class="opt" data-ok="${o === t}">${esc(o.en)}</button>`).join("")}</div><div id="lv-f"></div>`;
      const play = () => TTS.say(t.ar); lv.querySelector("#lv-play").onclick = play; lv.querySelector("#lv-next").onclick = drawLV; setTimeout(play, 200);
      lv.querySelectorAll(".opt").forEach((b) => b.onclick = () => { lv.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (x.dataset.ok === "true") x.classList.add("right"); }); if (b.dataset.ok !== "true") b.classList.add("wrong"); lv.querySelector("#lv-f").innerHTML = `<p>${t.pic ? esc(t.pic) + " " : ""}${ar(t.ar)} — ${esc(t.en)}</p>`; });
    };
    lv.innerHTML = `<button class="btn primary">Start</button>`; lv.querySelector("button").onclick = drawLV;
    const lc = el.querySelector("#lc");
    lc.innerHTML = `<div class="toolbar">${L.scenes.map((s, k) => `<button class="btn" data-sc="${k}">${s.pic ? esc(s.pic) + " " : ""}${ar(s.h)}</button>`).join("")}</div><div id="lc-a"></div>`;
    lc.querySelectorAll("[data-sc]").forEach((b) => b.onclick = () => {
      const s = L.scenes[+b.dataset.sc]; const a = lc.querySelector("#lc-a");
      const qs = (L.comp || []).filter((c) => c[3] == null || c[3] === +b.dataset.sc);
      let k = 0; const playScene = () => { const go = (j) => { if (j >= s.lines.length) return; TTS.say(s.lines[j][1], { onend: () => setTimeout(() => go(j + 1), 400) }); }; go(0); };
      a.innerHTML = `<div class="toolbar"><button class="btn primary" id="lc-p">▶ Play the text</button><button class="btn" id="lc-t">Show text</button></div><div id="lc-txt" hidden>${s.lines.map((l) => `<p dir="rtl">${l[0] ? `<b>${esc(l[0])}:</b> ` : ""}${ar(l[1])}</p>`).join("")}</div><div id="lc-q"></div>`;
      a.querySelector("#lc-p").onclick = playScene; a.querySelector("#lc-t").onclick = () => { a.querySelector("#lc-txt").hidden = !a.querySelector("#lc-txt").hidden; };
      const drawQ = () => { const qa = a.querySelector("#lc-q"); if (!qs.length) { qa.innerHTML = `<p class="small muted">Retell the text aloud in Arabic in two or three sentences, then check with the text.</p>`; return; } const c = qs[k % qs.length]; qa.innerHTML = `<p><b>${mix(c[0])}</b></p><div class="opts">${shuffle(c[1].map((o, j) => [o, j])).map(([o, j]) => `<button class="opt" data-j="${j}">${mix(o)}</button>`).join("")}</div><button class="btn" id="lc-n">Next question →</button>`; qa.querySelectorAll(".opt").forEach((o) => o.onclick = () => { qa.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.j === c[2]) x.classList.add("right"); }); if (+o.dataset.j !== c[2]) o.classList.add("wrong"); }); qa.querySelector("#lc-n").onclick = () => { k++; drawQ(); }; };
      drawQ(); playScene();
    });
  }

  // Speak (dialogue)
  function tabSpeak(el, n, L) {
    const dlg = L.scenes.map((s, k) => ({ s, k, who: [...new Set(s.lines.map((l) => l[0]).filter(Boolean))] })).filter((d) => d.who.length >= 2);
    if (!dlg.length) { el.innerHTML = `<div class="card">No dialogue in this lesson — read the texts aloud from the Read tab instead, with every case ending.</div>`; return; }
    el.innerHTML = `<div class="card"><h3>Dialogue</h3><p class="small muted">Choose a dialogue and a role. The other parts are spoken for you; when it's your turn, say your line aloud <b>with its endings</b>. ${SR ? "Press 🎤 and your browser will check what it heard (allow the microphone)." : "Your browser has no speech recognition, so listen to the model, say the line, and move on."} In “challenge” mode you see only the English and must find the Arabic yourself.</p>
      <div class="toolbar"><select class="btn" id="sp-d">${dlg.map((d, i) => `<option value="${i}">${esc(d.s.h)} (${esc(d.who.join(" / "))})</option>`).join("")}</select><select class="btn" id="sp-r"></select><label class="small"><input type="checkbox" id="sp-c"> challenge (English only)</label><button class="btn primary" id="sp-go">▶ Start</button></div></div><div id="sp-area"></div>`;
    const selD = el.querySelector("#sp-d"), selR = el.querySelector("#sp-r");
    const fillR = () => { selR.innerHTML = dlg[+selD.value].who.map((w) => `<option>${esc(w)}</option>`).join(""); selR.selectedIndex = 1; };
    selD.onchange = fillR; fillR();
    el.querySelector("#sp-go").onclick = () => {
      const d = dlg[+selD.value], me = selR.value, hard = el.querySelector("#sp-c").checked, area = el.querySelector("#sp-area");
      let i = 0, good = 0, mine = 0; const log = [];
      const step = () => {
        if (i >= d.s.lines.length) { area.innerHTML = `<div class="card center"><div class="score-big">✔</div><p>Dialogue finished${mine ? ` — ${good}/${mine} lines recognised` : ""}.</p><button class="btn primary" id="sp-again">Again</button></div>${transcript()}`; area.querySelector("#sp-again").onclick = () => el.querySelector("#sp-go").click(); return; }
        const [who, a, en] = d.s.lines[i];
        if (who !== me) { log.push({ who, a, en }); draw(null); TTS.say(a, { onend: () => { i++; setTimeout(step, 300); } }); return; }
        mine++; draw({ a, en });
      };
      const transcript = () => `<div class="card chat">${log.map((x) => `<div class="bubble ${x.who === me ? "me" : ""}"><b>${esc(x.who)}</b> ${ar(x.a)}${x.score != null ? ` <span class="small ${x.score >= 0.7 ? "g-ok" : "g-no"}">${Math.round(x.score * 100)}%</span>` : ""}<div class="small muted">${esc(x.en)}</div></div>`).join("")}</div>`;
      const draw = (turn) => {
        area.innerHTML = transcript() + (turn ? `<div class="card turn"><div class="small muted">Your turn (${esc(me)}):</div><p class="big-line">${hard ? `<i>${esc(turn.en)}</i>` : ar(turn.a)}</p>${hard ? "" : `<p class="small muted">${esc(turn.en)}</p>`}
          <div class="toolbar">${SR ? `<button class="btn primary" id="sp-mic">🎤 Speak</button>` : ""}<button class="btn" id="sp-model">🔊 Model</button><button class="btn" id="sp-next">${SR ? "Skip →" : "I said it →"}</button></div><div id="sp-fb"></div></div>` : `<p class="small muted">…</p>`);
        if (!turn) return;
        area.querySelector("#sp-model").onclick = () => TTS.say(turn.a);
        area.querySelector("#sp-next").onclick = () => { log.push({ who: me, a: turn.a, en: turn.en }); i++; step(); };
        if (SR) area.querySelector("#sp-mic").onclick = () => listen(turn.a, (heard, score) => {
          if (score >= 0.7) good++;
          area.querySelector("#sp-fb").innerHTML = `<div class="feedback ${score >= 0.7 ? "ok" : "no"}">${score >= 0.7 ? "أحسنت!" : "Try again, or listen to the model."} I heard: ${ar(heard)} (${Math.round(score * 100)}%)</div><button class="btn primary" id="sp-cont">Continue →</button>`;
          area.querySelector("#sp-cont").onclick = () => { log.push({ who: me, a: turn.a, en: turn.en, score }); i++; step(); };
        });
      };
      step();
    };
  }
  function listen(target, cb) {
    try {
      const r = new SR(); r.lang = "ar-SA"; r.interimResults = false; r.maxAlternatives = 3;
      r.onresult = (e) => { const alts = [...e.results[0]].map((a) => a.transcript); const best = alts.map((a) => [a, similarity(a, target)]).sort((a, b) => b[1] - a[1])[0]; cb(best[0], best[1]); };
      r.onerror = (e) => toast("Speech recognition error: " + esc(e.error) + ". Check microphone permission.");
      r.start(); toast("🎤 Listening… speak now.");
    } catch (e) { toast("Speech recognition is not available here."); }
  }
  function similarity(a, b) { const A = loose(a).split(" "), B = loose(b).split(" ").filter(Boolean); if (!B.length) return 0; let hit = 0; const pool = A.slice(); B.forEach((w) => { const k = pool.indexOf(w); if (k >= 0) { hit++; pool.splice(k, 1); } }); return hit / Math.max(B.length, A.length * 0.8); }

  // Vocabulary
  const wordKey = (v) => `${v.lesson}|${v.ar}`;
  function toggleStar(k) { if (store.star[k]) delete store.star[k]; else { store.star[k] = 1; if (!store.srs[k]) store.srs[k] = { box: 0, due: Date.now() }; } save(); }
  function vocabTable(list, showLesson) {
    return `<div class="scroll-x"><table class="t vt"><thead><tr><th></th><th></th><th>Arabic</th><th>English</th><th>Type</th><th>Forms · notes</th>${showLesson ? "<th>Lesson</th>" : ""}<th></th></tr></thead><tbody>${list.map((v) => `<tr>
        <td><button class="star ${store.star[wordKey(v)] ? "on" : ""}" data-key="${esc(wordKey(v))}" title="Add to review">★</button></td><td class="emo">${esc(v.pic)}</td>
        <td>${ar(v.ar, "g-" + gender(v))}</td><td>${esc(v.en)}</td><td><span class="chip g-${gender(v)}">${esc(v.type)}</span></td><td class="small">${v.forms ? ar(v.forms) + " " : ""}${mix(v.note)}</td>${showLesson ? `<td><a href="#/lesson/${v.lesson}/vocab">${v.lesson}</a></td>` : ""}<td><button class="btn icon" data-say="${esc(v.ar)}">🔊</button></td></tr>`).join("")}</tbody></table></div>`;
  }
  function tabVocab(el, n, L) {
    const voc = vocabOf(L);
    const types = [...new Set(voc.map((v) => v.type.replace(/\s.*/, "")).filter(Boolean))];
    el.innerHTML = `
      <div class="toolbar"><button class="btn primary" id="v-flash">🃏 Flashcards</button><button class="btn" id="v-gender">مذكّر / مؤنّث ?</button><button class="btn" id="v-addall">★ Add all to review</button>
        <select class="btn" id="v-type"><option value="">All types</option>${types.map((t) => `<option>${esc(t)}</option>`).join("")}</select>
        <span class="small muted">${voc.length} entries · ★ = spaced-repetition review · forms = plural / present tense / feminine</span></div>
      <div id="v-area"></div>`;
    const area = el.querySelector("#v-area");
    const drawTable = () => { const t = el.querySelector("#v-type").value; area.innerHTML = vocabTable(voc.filter((v) => !t || v.type.startsWith(t))); };
    el.querySelector("#v-type").onchange = drawTable;
    el.querySelector("#v-addall").onclick = () => { voc.forEach((v) => { const k = wordKey(v); store.star[k] = 1; if (!store.srs[k]) store.srs[k] = { box: 0, due: Date.now() }; }); save(); drawTable(); };
    el.querySelector("#v-flash").onclick = () => flashcards(area, shuffle(voc), drawTable);
    el.querySelector("#v-gender").onclick = () => genderDrill(area, voc.filter((v) => gender(v) && /n\./.test(v.type)), drawTable);
    drawTable();
  }
  function genderDrill(area, nouns, onDone) {
    if (nouns.length < 2) { area.innerHTML = `<p class="muted">Not enough nouns in this lesson.</p>`; return; }
    let deck = shuffle(nouns), i = 0, score = 0;
    const draw = () => {
      if (i >= deck.length) { area.innerHTML = `<div class="card center"><div class="score-big">${score}/${deck.length}</div><p>Masculine or feminine</p><button class="btn primary" id="g-again">Again</button> <button class="btn" id="g-back">Back</button></div>`; area.querySelector("#g-again").onclick = () => genderDrill(area, nouns, onDone); area.querySelector("#g-back").onclick = onDone; return; }
      const v = deck[i], g = gender(v);
      area.innerHTML = `<div class="q center"><div class="qbar"><span class="kind">Masculine or feminine?</span><span>${i + 1}/${deck.length} · ${score}</span></div><div class="emo huge">${esc(v.pic || "")}</div><p class="big-line">${ar(v.ar)}</p><p class="muted">${esc(v.en)}</p><div class="opts two-opts"><button class="opt g-m" data-g="m">مذكّر · masculine (هذا)</button><button class="opt g-f" data-g="f">مؤنّث · feminine (هذه)</button></div><div id="fb"></div></div>`;
      area.querySelectorAll(".opt").forEach((b) => b.onclick = () => { const ok = b.dataset.g === g; if (ok) score++; TTS.say((g === "m" ? "هذا " : "هذه ") + v.ar); area.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (x.dataset.g === g) x.classList.add("right"); }); if (!ok) b.classList.add("wrong"); area.querySelector("#fb").innerHTML = `<p>${ar((g === "m" ? "هٰذَا " : "هٰذِهِ ") + v.ar)}${v.note ? " · " + mix(v.note) : ""}</p><button class="btn primary" id="nx">Next →</button>`; area.querySelector("#nx").onclick = () => { i++; draw(); }; area.querySelector("#nx").focus(); });
    };
    draw();
  }
  function flashcards(area, cards, onDone, srsMode) {
    let i = 0, dir = "ar";
    const draw = () => {
      if (i >= cards.length) { area.innerHTML = `<div class="card center"><div class="score-big">✔</div><p>Deck finished — ${cards.length} cards.</p><button class="btn primary" id="fc-again">Again</button> <button class="btn" id="fc-back">Back</button></div>`; area.querySelector("#fc-again").onclick = () => { i = 0; cards = shuffle(cards); draw(); }; area.querySelector("#fc-back").onclick = onDone; return; }
      const v = cards[i];
      const front = dir === "ar" ? `<span class="emo">${esc(v.pic)}</span>${ar(v.ar, "g-" + gender(v))}<span class="hint">tap to flip</span>` : `<span class="emo">${esc(v.pic)}</span><b style="font-size:1.3rem">${esc(v.en)}</b><span class="hint">say it in Arabic, then tap</span>`;
      const back = `${ar(v.ar, "g-" + gender(v))}<b>${esc(v.en)}</b><span class="hint">${esc(v.type)}${v.forms ? " · " : ""}${v.forms ? ar(v.forms) : ""}${v.note ? " · " + mix(v.note) : ""}</span>`;
      area.innerHTML = `<div class="flash-wrap"><div class="small muted">${i + 1} / ${cards.length} · lesson ${v.lesson}</div>
        <div class="flash" id="fc"><div class="inner"><div class="face">${front}</div><div class="face back">${back}</div></div></div>
        <div class="toolbar"><button class="btn" data-say="${esc(v.ar)}">🔊</button><button class="btn" id="fc-dir">${dir === "ar" ? "Arabic → English" : "English → Arabic"}</button>
        ${srsMode ? `<button class="btn" data-g="0">Again</button><button class="btn primary" data-g="1">Good</button><button class="btn" data-g="2">Easy</button>` : `<button class="btn" id="fc-prev">←</button><button class="btn primary" id="fc-next">Next →</button>`}<button class="btn" id="fc-end">Done</button></div></div>`;
      area.querySelector("#fc").onclick = () => { const f = area.querySelector("#fc"); f.classList.toggle("flipped"); if (f.classList.contains("flipped")) TTS.say(v.ar); };
      area.querySelector("#fc-dir").onclick = () => { dir = dir === "ar" ? "en" : "ar"; draw(); };
      area.querySelector("#fc-end").onclick = onDone;
      if (srsMode) area.querySelectorAll("[data-g]").forEach((b) => b.onclick = () => { grade(wordKey(v), +b.dataset.g); i++; draw(); });
      else { area.querySelector("#fc-next").onclick = () => { i++; draw(); }; area.querySelector("#fc-prev").onclick = () => { i = Math.max(0, i - 1); draw(); }; }
    };
    draw();
  }
  const DAYS = [0, 1, 3, 7, 14, 30, 60];
  function grade(k, g) { const c = store.srs[k] || { box: 0 }; c.box = g === 0 ? 0 : Math.min(DAYS.length - 1, c.box + g); c.due = Date.now() + (g === 0 ? 60e3 : DAYS[c.box] * 864e5); store.srs[k] = c; save(); }
  function srsDeck() { return allVocab().filter((v) => store.srs[wordKey(v)]).map((v) => ({ ...v, due: store.srs[wordKey(v)].due, box: store.srs[wordKey(v)].box })); }

  // Exercises (book-style, checked automatically)
  const KIND = { gap: "أَكْمِلْ · Complete", mcq: "اِخْتَرْ · Choose", tf: "صواب أم خطأ؟ · True or false?", match: "صِلْ · Match", order: "رَتِّبْ · Put in order", sort: "صَنِّفْ · Sort", words: "رَتِّبِ الكلمات · Build the sentence", fix: "صَحِّحْ · Correct", tr: "تَرْجِمْ · Translate", shakl: "اضْبِطْ أواخرَ الكلمات · Vowel the endings", irab: "أَعْرِبْ · Parse" };
  function okAnswer(got, want) {
    const alts = String(want).split("|");
    if (alts.some((a) => norm(a) === norm(got))) return 2;
    if (alts.some((a) => loose(a) === loose(got))) return 1;
    return 0;
  }
  function tabExercises(el, n, L) {
    const exs = L.exercises || [];
    el.innerHTML = `<p class="small muted">Exercises in the styles of the book's <span class="ar">تمرينات</span> plus new ones, from easiest to hardest — the last one is a review of the lesson. Answers are checked instantly (ḥarakāt are not required when typing unless the exercise is about endings); finished exercises are ticked.</p>
      ${exs.map((x, k) => `<div class="card ex-card" id="ex${k}"><h3><span class="exn">${k + 1}</span> ${mix(x.t || KIND[x.k])} ${store.ex[n + ":" + k] ? `<span class="badge done">✔ ${store.ex[n + ":" + k]}%</span>` : ""}</h3>${x.en ? `<p class="small muted">${mix(x.en)}</p>` : ""}<div class="ex-body"></div><div class="toolbar"><button class="btn primary ex-check">Check</button><button class="btn ex-show">Show answers</button><button class="btn ex-reset">Reset</button></div><div class="ex-fb"></div></div>`).join("")}`;
    exs.forEach((x, k) => buildExercise(el.querySelector("#ex" + k), x, n, k));
  }
  const MARKS = { "ُ": "ḍamma", "َ": "fatḥa", "ِ": "kasra", "ْ": "sukūn", "ٌ": "ḍammatān", "ً": "fatḥatān", "ٍ": "kasratān" };
  function buildExercise(card, x, n, k) {
    const body = card.querySelector(".ex-body"), fb = card.querySelector(".ex-fb");
    let check = () => [0, 1], show = () => {};
    const finish = (right, total) => { const pct = Math.round((right / total) * 100); fb.innerHTML = `<div class="feedback ${pct === 100 ? "ok" : "no"}">${right} / ${total} correct${pct === 100 ? " — ممتاز!" : ""}</div>`; const key = n + ":" + k; store.ex[key] = Math.max(store.ex[key] || 0, pct); save(); };
    const optLabel = (o) => mix(o);
    const build = () => {
      fb.innerHTML = "";
      if (x.k === "gap") {
        const bank = x.bank ? shuffle(x.items.flatMap((it) => String(it[1]).split("|")[0].split("…"))) : null;
        body.innerHTML = `${bank ? `<div class="bank" dir="rtl">${bank.map((w) => `<span class="tok bankw ar">${esc(w)}</span>`).join("")}</div><p class="small muted">Tap a word, then tap a gap (or type).</p>` : ""}
          <ol class="ex-list ar-list" dir="rtl">${x.items.map((it, i) => { const parts = String(it[0]).split(/_{3,}/); return `<li><span lang="ar">${parts.map((p, j) => esc(p) + (j < parts.length - 1 ? `<input class="gap" dir="rtl" lang="ar" data-i="${i}" data-j="${j}" autocomplete="off" autocapitalize="off" spellcheck="false" size="${Math.max(5, (String(it[1]).split("|")[0].split("…")[j] || "").length + 2)}">` : "")).join("")}</span>${it[2] ? ` <span class="small muted" dir="ltr">(${mix(it[2])})</span>` : ""}</li>`; }).join("")}</ol>${x.bank ? "" : kb()}`;
        let sel = null;
        body.querySelectorAll(".bankw").forEach((b) => b.onclick = () => { body.querySelectorAll(".bankw.sel").forEach((y) => y.classList.remove("sel")); sel = b; b.classList.add("sel"); });
        body.querySelectorAll(".gap").forEach((g) => { g.onclick = () => { if (sel) { g.value = sel.textContent; sel.classList.add("used"); sel.classList.remove("sel"); sel = null; } }; });
        bindKb(body);
        const want = (i, j) => String(x.items[i][1]).split("|").map((a) => a.split("…")[j] ?? a).join("|");
        check = () => { let r = 0, t = 0; body.querySelectorAll(".gap").forEach((g) => { t++; const s = okAnswer(g.value, want(+g.dataset.i, +g.dataset.j)); g.classList.remove("right", "wrong", "close"); g.classList.add(s === 2 ? "right" : s === 1 ? "close" : "wrong"); if (s) r++; }); return [r, t]; };
        show = () => body.querySelectorAll(".gap").forEach((g) => { g.value = want(+g.dataset.i, +g.dataset.j).split("|")[0]; g.classList.add("shown"); });
      } else if (x.k === "mcq") {
        body.innerHTML = `<ol class="ex-list">${x.items.map((it, i) => `<li>${it[0] ? `<div class="${isAr(it[0]) && !/[a-z]{3}/i.test(it[0]) ? "ar-q" : ""}">${mix(it[0])}</div>` : ""}<div class="opts inline">${shuffle(it[1].map((o, j) => [o, j])).map(([o, j]) => `<button class="opt sm ${isAr(o) && !/[a-z]/i.test(o) ? "ar-opt" : ""}" data-i="${i}" data-j="${j}">${optLabel(o)}</button>`).join("")}</div>${it[3] ? `<div class="small muted why" hidden>${mix(it[3])}</div>` : ""}</li>`).join("")}</ol>`;
        body.querySelectorAll(".opt").forEach((b) => b.onclick = () => { body.querySelectorAll(`.opt[data-i="${b.dataset.i}"]`).forEach((y) => y.classList.remove("chosen", "right", "wrong")); b.classList.add("chosen"); });
        const right = (i) => [].concat(x.items[i][2]);
        check = () => { let r = 0; x.items.forEach((it, i) => { const c = body.querySelector(`.opt.chosen[data-i="${i}"]`); body.querySelectorAll(`.opt[data-i="${i}"]`).forEach((y) => y.classList.remove("right", "wrong")); if (c) { const ok = right(i).includes(+c.dataset.j); c.classList.add(ok ? "right" : "wrong"); if (ok) r++; } }); body.querySelectorAll(".why").forEach((w) => (w.hidden = false)); return [r, x.items.length]; };
        show = () => { x.items.forEach((it, i) => right(i).forEach((j) => body.querySelector(`.opt[data-i="${i}"][data-j="${j}"]`).classList.add("right", "chosen"))); body.querySelectorAll(".why").forEach((w) => (w.hidden = false)); };
      } else if (x.k === "tf") {
        body.innerHTML = `<table class="t tf"><thead><tr><th></th><th>صواب ✓</th><th>خطأ ✗</th></tr></thead><tbody>${x.items.map((it, i) => `<tr><td>${mix(it[0])}<div class="small muted why" hidden>${mix(it[2] || "")}</div></td><td><input type="radio" name="tf${n}-${k}-${i}" value="1"></td><td><input type="radio" name="tf${n}-${k}-${i}" value="0"></td></tr>`).join("")}</tbody></table>`;
        check = () => { let r = 0; x.items.forEach((it, i) => { const c = body.querySelector(`input[name="tf${n}-${k}-${i}"]:checked`); const row = body.querySelectorAll("tbody tr")[i]; row.classList.remove("right", "wrong"); if (c) { const ok = (c.value === "1") === !!it[1]; row.classList.add(ok ? "right" : "wrong"); if (ok) r++; } }); body.querySelectorAll(".why").forEach((w) => (w.hidden = false)); return [r, x.items.length]; };
        show = () => { x.items.forEach((it, i) => { body.querySelector(`input[name="tf${n}-${k}-${i}"][value="${it[1] ? 1 : 0}"]`).checked = true; }); body.querySelectorAll(".why").forEach((w) => (w.hidden = false)); };
      } else if (x.k === "match" || x.k === "sort" || x.k === "irab") {
        // sort / irab: each item gets a category from x.cats (answer = index). match: answers are shuffled strings.
        const opts = x.k === "match" ? shuffle(uniqBy(x.items.map((it) => it[1]), (y) => y)) : x.cats;
        body.innerHTML = `<table class="t match"><tbody>${x.items.map((it, i) => `<tr><td>${x.k === "irab" ? irabCell(it[0]) : mix(it[0])}${it[2] ? `<div class="small muted why" hidden>${mix(it[2])}</div>` : ""}</td><td><select class="btn msel" data-i="${i}"><option value="">—</option>${opts.map((o, j) => `<option value="${x.k === "match" ? esc(o) : j}">${esc(o)}</option>`).join("")}</select></td></tr>`).join("")}</tbody></table>`;
        const want = (i) => String(x.items[i][1]);
        check = () => { let r = 0; body.querySelectorAll(".msel").forEach((s) => { const ok = s.value === want(+s.dataset.i); s.classList.remove("right", "wrong"); if (s.value) s.classList.add(ok ? "right" : "wrong"); if (ok) r++; }); body.querySelectorAll(".why").forEach((w) => (w.hidden = false)); return [r, x.items.length]; };
        show = () => { body.querySelectorAll(".msel").forEach((s) => { s.value = want(+s.dataset.i); s.classList.add("right"); }); body.querySelectorAll(".why").forEach((w) => (w.hidden = false)); };
      } else if (x.k === "shakl") {
        // items: sentence with {mark} after the letter to vowel, e.g. "ذَهَبَ الوَلَد{ُ} إلى المَدْرَسَة{ِ}"
        const tanween = x.items.some((s) => /\{[ًٌٍ]\}/.test(s));
        const set = x.marks || (tanween ? ["ُ", "َ", "ِ", "ٌ", "ً", "ٍ"] : ["ُ", "َ", "ِ", "ْ"]);
        const ans = [];
        body.innerHTML = `<p class="small muted">Tap each dotted word, then choose its ending. ${set.map((m) => `<span class="ar mk-legend">بـ${m}</span> ${MARKS[m]}`).join(" · ")}</p><ol class="ex-list ar-list" dir="rtl">${x.items.map((s, i) => `<li lang="ar">${s.split(/(\S*\{[^}]\}\S*)/).map((tok) => { const m = tok.match(/^(\S*?)([^\u064B-\u0652][\u0651]?)\{(.)\}(\S*)$/); if (!m) return esc(tok); const id = ans.length; ans.push(m[3]); return `<span class="shk" data-a="${id}" tabindex="0" title="tap to choose the ending">${esc(m[1])}<span class="shk-l">${esc(m[2])}</span>${esc(m[4])}<span class="shk-q">?</span><span class="shk-opts" dir="rtl">${set.map((mk) => `<button type="button" class="shk-o" data-m="${mk}">${esc(m[2] + mk)}</button>`).join("")}</span></span>`; }).join("")} <button class="btn icon" data-say="${esc(s.replace(/\{(.)\}/g, "$1"))}">🔊</button></li>`).join("")}</ol>`;
        body.querySelectorAll(".shk").forEach((w) => { w.onclick = (e) => { if (e.target.closest(".shk-o")) return; const was = w.classList.contains("open"); body.querySelectorAll(".shk.open").forEach((y) => y.classList.remove("open")); w.classList.toggle("open", !was); }; w.querySelectorAll(".shk-o").forEach((b) => b.onclick = (e) => { e.stopPropagation(); w.querySelectorAll(".shk-o").forEach((y) => y.classList.remove("chosen", "right", "wrong")); b.classList.add("chosen"); w.querySelector(".shk-l").textContent = b.textContent; w.classList.remove("right", "wrong", "open"); w.classList.add("set"); }); });
        check = () => { let r = 0; body.querySelectorAll(".shk").forEach((w) => { const c = w.querySelector(".shk-o.chosen"); w.classList.remove("right", "wrong"); if (c) { const ok = c.dataset.m === ans[+w.dataset.a]; w.classList.add(ok ? "right" : "wrong"); if (ok) r++; } }); return [r, ans.length]; };
        show = () => body.querySelectorAll(".shk").forEach((w) => { const b = w.querySelector(`.shk-o[data-m="${ans[+w.dataset.a]}"]`); if (b) b.click(); w.classList.add("right"); });
      } else if (x.k === "fix" || x.k === "tr") {
        const strict = x.k === "fix";
        body.innerHTML = `<ol class="ex-list">${x.items.map((it, i) => `<li>${x.k === "tr" ? `<div class="tr-src">${mix(it[0])}</div>` : ""}<textarea class="fixin" dir="rtl" data-i="${i}" rows="${Math.max(1, Math.min(5, Math.ceil(String(it[0]).length / 60)))}" lang="ar" autocomplete="off" autocapitalize="off" spellcheck="false">${x.k === "fix" ? esc(it[0]) : ""}</textarea>${it[2] ? `<div class="small muted">(${mix(it[2])})</div>` : ""}<div class="fixres"></div></li>`).join("")}</ol>${kb()}`;
        bindKb(body);
        const score = (got, want) => { const alts = String(want).split("|"); if (alts.some((a) => norm(a) === norm(got))) return 2; if (!strict && alts.some((a) => loose(a) === loose(got))) return 1; return 0; };
        const diff = (got, want) => { const W = norm(want).split(" "), G = norm(got).split(" "); return W.map((w, j) => G[j] === w ? `<span class="ok">${esc(w)}</span>` : `<span class="miss" title="you wrote: ${esc(G[j] || "—")}">${esc(w)}</span>`).join(" "); };
        const credit = {};
        check = () => { let r = 0; body.querySelectorAll(".fixin").forEach((g) => { const i = +g.dataset.i, it = x.items[i], sc = credit[i] ? 2 : score(g.value, it[1]); const res = g.parentElement.querySelector(".fixres"); g.classList.remove("right", "wrong", "close"); g.classList.add(sc === 2 ? "right" : sc === 1 ? "close" : "wrong"); if (sc) r++;
          const best = String(it[1]).split("|")[0];
          res.innerHTML = sc === 2 ? `<span class="g-ok small">✔ ${credit[i] ? "counted as right" : "صحيح"}</span> ${ar(best)}` : `<div class="diff" dir="rtl" lang="ar">${strict ? diff(g.value, best) : ar(best)}</div>${sc === 1 ? `<span class="small" style="color:#d9822b">Right — check the hamza or ة.</span>` : ""}${!strict && !sc ? ` <button class="btn sm cred" data-i="${i}">My answer is also correct</button>` : ""} <button class="btn icon" data-say="${esc(best)}">🔊</button>`;
          const cb = res.querySelector(".cred"); if (cb) cb.onclick = () => { credit[i] = 1; card.querySelector(".ex-check").click(); }; }); return [r, x.items.length]; };
        show = () => body.querySelectorAll(".fixin").forEach((g) => { g.value = String(x.items[+g.dataset.i][1]).split("|")[0]; g.classList.add("shown"); });
      } else if (x.k === "order" || x.k === "words") {
        const sets = x.k === "order" ? [x.items] : x.items.map((s) => s.split(" "));
        body.innerHTML = sets.map((set, si) => { const pool = shuffle(set.map((t, j) => ({ t, j }))); return `<div class="order-set" data-s="${si}"><div class="order-answer ${x.k === "order" ? "lines" : ""}" dir="rtl"></div><div class="order-pool ${x.k === "order" ? "lines" : ""}" dir="rtl">${pool.map((p) => `<span class="tok ar" data-j="${p.j}">${esc(p.t)}</span>`).join("")}</div><button class="btn sm o-undo">Undo</button></div>`; }).join("");
        body.querySelectorAll(".order-set").forEach((os) => {
          const ans = [], oa = os.querySelector(".order-answer");
          const redraw = () => { oa.innerHTML = ans.map((t) => `<span class="tok ar">${esc(t.textContent)}</span>`).join(""); };
          os.querySelectorAll(".order-pool .tok").forEach((t) => t.onclick = () => { if (t.classList.contains("used")) return; ans.push(t); t.classList.add("used"); redraw(); });
          os.querySelector(".o-undo").onclick = () => { const t = ans.pop(); if (t) t.classList.remove("used"); redraw(); };
          os._ans = ans;
        });
        check = () => { let r = 0; body.querySelectorAll(".order-set").forEach((os, si) => { const set = sets[si]; const ok = os._ans.length === set.length && os._ans.every((t, j) => set[+t.dataset.j] === set[j]); os.classList.remove("right", "wrong"); os.classList.add(ok ? "right" : "wrong"); if (ok) r++; }); return [r, sets.length]; };
        show = () => body.querySelectorAll(".order-set").forEach((os, si) => { os._ans.length = 0; [...os.querySelectorAll(".order-pool .tok")].sort((a, b) => a.dataset.j - b.dataset.j).forEach((t) => { os._ans.push(t); t.classList.add("used"); }); os.querySelector(".order-answer").innerHTML = sets[si].map((t) => `<span class="tok ar">${esc(t)}</span>`).join(""); os.classList.add("right"); });
      }
    };
    build();
    card.querySelector(".ex-check").onclick = () => { const [r, t] = check(); finish(r, t); };
    card.querySelector(".ex-show").onclick = () => { show(); fb.innerHTML = `<div class="small muted">Answers shown.</div>`; };
    card.querySelector(".ex-reset").onclick = build;
  }
  // "[الوَلَدُ] يلعبُ" → the bracketed word is highlighted as the one to parse
  function irabCell(s) { return `<span class="ar irab-s" lang="ar" dir="rtl">${esc(s).replace(/\[([^\]]+)\]/g, '<mark class="hl-w">$1</mark>')}</span>`; }

  // Quiz (generated)
  function buildQuiz(L) {
    const qs = [], voc = vocabOf(L);
    const mixO = (opts, ans) => { const o = shuffle(opts.map((t, j) => ({ t, j }))); return { opts: o.map((x) => x.t), ans: o.findIndex((x) => x.j === ans) }; };
    (L.comp || []).forEach((c) => qs.push({ kind: "Comprehension", prompt: c[0], ...mixO(c[1], c[2]) }));
    pick(voc, 5).forEach((v) => { const o = shuffle([v, ...pick(voc.filter((x) => x !== v && x.en !== v.en), 3)]); qs.push({ kind: "Meaning", promptAr: v.ar, pic: v.pic, prompt: "What does this mean?", opts: o.map((x) => x.en), ans: o.indexOf(v) }); });
    pick(voc, 4).forEach((v) => { const o = shuffle([v, ...pick(voc.filter((x) => x !== v && x.ar !== v.ar), 3)]); qs.push({ kind: "Say it in Arabic", prompt: `Which is “${v.en}”?`, opts: o.map((x) => x.ar), arOpts: true, ans: o.indexOf(v) }); });
    pick(voc.filter((v) => gender(v) && /n\./.test(v.type)), 3).forEach((v) => qs.push({ kind: "Gender", promptAr: v.ar, pic: v.pic, prompt: "هٰذَا … or هٰذِهِ …? Masculine or feminine?", opts: ["مذكّر · masculine", "مؤنّث · feminine"], ans: gender(v) === "m" ? 0 : 1, say: (gender(v) === "m" ? "هٰذَا " : "هٰذِهِ ") + v.ar }));
    pick(voc, 2).forEach((v) => { const o = shuffle([v, ...pick(voc.filter((x) => x !== v), 3)]); qs.push({ kind: "Listening", listen: v.ar, prompt: "Listen 🔊 — which word did you hear?", opts: o.map((x) => x.ar), arOpts: true, ans: o.indexOf(v) }); });
    // fill the gap from the texts
    const singles = uniqBy(voc.filter((v) => !/\s/.test(strip(v.ar).trim()) && strip(v.ar).length > 2), (v) => norm(bare(v.ar)));
    shuffle(lines(L)).forEach((l) => {
      if (qs.filter((q) => q.kind === "Fill the gap").length >= 4) return;
      const toks = l[1].split(" ");
      const idx = toks.map((t, i) => [t, i]).filter(([t]) => singles.some((v) => norm(bare(t)) === norm(bare(v.ar))));
      if (!idx.length) return;
      const [tok, i] = idx[Math.floor(Math.random() * idx.length)];
      const clean = tok.replace(/[،؛؟.!:«»]/g, ""), v = singles.find((s) => norm(bare(clean)) === norm(bare(s.ar)));
      const withAl = AL.test(clean);
      const form = (s) => (withAl ? "ال" : "") + strip(bare(s.ar));
      const o = shuffle([v, ...pick(singles.filter((s) => s !== v), 3)]).map(form);
      const t2 = toks.slice(); t2[i] = tok.replace(clean, "_____");
      qs.push({ kind: "Fill the gap", promptAr: t2.join(" "), prompt: l[2], opts: o, arOpts: true, ans: o.indexOf(form(v)), say: l[1] });
    });
    lines(L).filter((l) => { const w = l[1].split(" ").length; return w >= 3 && w <= 8; }).sort(() => Math.random() - .5).slice(0, 2).forEach((l) => qs.push({ kind: "Word order", order: l[1].replace(/^[—–-]\s*/, "").split(" "), prompt: l[2] }));
    const comp = qs.filter((q) => q.kind === "Comprehension");
    const gram = (L.drills || []).map((d) => ({ kind: "Grammar", prompt: d[0], ...mixO(d[1], d[2]), why: d[3], arOpts: d[1].every((o) => isAr(o) && !/[a-z]/i.test(o)), full: /_{3,}/.test(d[0]) && isAr(d[1][d[2]]) && !/[a-z]/i.test(d[1][d[2]]) ? d[0].replace(/_{3,}/, d[1][d[2]]).replace(/\s*\([^)]*\)/g, "") : null }));
    return shuffle(pick(gram, 10).concat(pick(comp, 2), pick(qs.filter((q) => q.kind !== "Comprehension"), 7)));
  }
  function tabPractice(el, n, L) {
    let qs = buildQuiz(L), i = 0, score = 0;
    const draw = () => {
      if (i >= qs.length) {
        const pct = Math.round((score / qs.length) * 100); store.best[n] = Math.max(store.best[n] || 0, pct); save();
        el.innerHTML = `<div class="card center"><div class="score-big">${pct}%</div><p>${score} of ${qs.length} correct · best ${store.best[n]}%</p><p class="muted">${pct >= 80 ? "ممتاز! Excellent." : pct >= 50 ? "جيّد — good. Review the lesson and try again." : "Go back over the Lesson tab (the ✔ Check yourself questions), then try again."}</p><button class="btn primary" id="again">New round</button></div>`;
        el.querySelector("#again").onclick = () => { qs = buildQuiz(L); i = 0; score = 0; draw(); }; return;
      }
      const q = qs[i];
      if (q.order) return drawOrder(q);
      const pAr = q.promptAr || (isAr(q.prompt) && !/[a-z]{3}/i.test(q.prompt) ? q.prompt : null);
      el.innerHTML = `<div class="q"><div class="qbar"><span class="kind">${esc(q.kind)}</span><span>${i + 1} / ${qs.length} · score ${score}</span></div>
        <div class="prompt">${q.pic ? `<span class="emo big">${esc(q.pic)}</span>` : ""}${q.promptAr ? ar(q.promptAr, "qar") : ""}<div class="${pAr && !q.promptAr ? "ar qar" : ""}">${mix(q.prompt)}</div> ${q.promptAr || q.listen ? `<button class="btn icon" data-say="${esc(q.listen || q.say || q.promptAr.replace(/_+/g, "…"))}">🔊</button>` : ""}</div>
        <div class="opts">${q.opts.map((o, k) => `<button class="opt ${q.arOpts ? "ar-opt" : ""}" data-k="${k}">${mix(o)}</button>`).join("")}</div><div id="fb"></div></div>`;
      if (q.listen) setTimeout(() => TTS.say(q.listen), 250);
      el.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
        const ok = +b.dataset.k === q.ans; if (ok) score++;
        el.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.k === q.ans) x.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        if (q.say) TTS.say(q.say); else if (q.kind === "Grammar" && q.full) TTS.say(q.full);
        el.querySelector("#fb").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}">${ok ? "صحيح! Correct." : "Not quite."}${q.say ? " " + ar(q.say) : ""}</div>${q.why ? `<p class="small why-q">${mix(q.why)}</p>` : ""}<div class="toolbar" style="margin-top:.6rem"><button class="btn primary" id="nx">Next →</button></div>`;
        el.querySelector("#nx").onclick = () => { i++; draw(); }; el.querySelector("#nx").focus();
      });
    };
    const drawOrder = (q) => {
      const pool = shuffle(q.order.map((t, k) => ({ t, k }))); const ans = [];
      el.innerHTML = `<div class="q"><div class="qbar"><span class="kind">Word order</span><span>${i + 1} / ${qs.length} · score ${score}</span></div><div class="prompt">Rebuild the sentence (right to left): <i>${esc(q.prompt)}</i></div>
        <div class="order-answer" id="oa" dir="rtl"></div><div class="order-pool" id="op" dir="rtl">${pool.map((p, j) => `<span class="tok ar" data-j="${j}">${esc(p.t)}</span>`).join("")}</div>
        <div class="toolbar"><button class="btn" id="o-undo">Undo</button><button class="btn primary" id="o-check">Check</button></div><div id="fb"></div></div>`;
      const oa = el.querySelector("#oa");
      el.querySelectorAll("#op .tok").forEach((t) => t.onclick = () => { if (t.classList.contains("used")) return; ans.push(+t.dataset.j); t.classList.add("used"); oa.innerHTML = ans.map((j) => `<span class="tok ar">${esc(pool[j].t)}</span>`).join(""); });
      el.querySelector("#o-undo").onclick = () => { const j = ans.pop(); if (j != null) el.querySelector(`#op .tok[data-j="${j}"]`).classList.remove("used"); oa.innerHTML = ans.map((x) => `<span class="tok ar">${esc(pool[x].t)}</span>`).join(""); };
      el.querySelector("#o-check").onclick = () => {
        const ok = ans.map((j) => pool[j].t).join(" ") === q.order.join(" "); if (ok) score++;
        el.querySelector("#fb").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}">${ok ? "صحيح!" : "The sentence is:"}</div><p>${ar(q.order.join(" "), "big-line")} <button class="btn icon" data-say="${esc(q.order.join(" "))}">🔊</button></p><button class="btn primary" id="nx">Next →</button>`;
        el.querySelector("#o-check").disabled = true; el.querySelector("#nx").onclick = () => { i++; draw(); };
      };
    };
    el.innerHTML = `<div class="card"><h3>Mixed quiz</h3><p>About 19 questions: mostly grammar (with an explanation after each answer), plus meanings, Arabic recall, gender, listening, fill-the-gap from the texts and word order. Every round is different.</p><button class="btn primary" id="go">Start</button> ${store.best[n] != null ? `<span class="small muted">Best: ${store.best[n]}%</span>` : ""}</div>`;
    el.querySelector("#go").onclick = draw;
  }

  // Summary (cheat sheet)
  function tabSummary(el, n, L) {
    el.innerHTML = `<div class="toolbar"><button class="btn" onclick="window.print()">🖨 Print this page</button><span class="small muted">One page to revise from before each quiz.</span></div>
      <div class="card gcard summary">${L.cheat || ""}</div>
      ${(L.mistakes || []).length ? `<div class="card gcard"><h3>Common mistakes <span class="small muted ar">أخطاء شائعة</span></h3><div class="scroll-x"><table class="t mistakes"><thead><tr><th>✗ Not this</th><th>✓ But this</th><th>Why</th></tr></thead><tbody>${L.mistakes.map((m) => `<tr><td class="bad-x">${ar(m[0])}</td><td>${ar(m[1])} <button class="btn icon" data-say="${esc(m[1])}">🔊</button></td><td class="small">${mix(m[2])}</td></tr>`).join("")}</tbody></table></div></div>` : ""}`;
  }

  // Tips
  function tabTips(el, n, L) {
    el.innerHTML = `${(L.tips || []).map((t) => `<div class="card tip"><h3>💡 ${mix(t.t)}</h3><p>${t.b}</p></div>`).join("")}
      ${(L.culture || []).map((t) => `<div class="card culture"><h3>🌙 ${mix(t.t)}</h3><p>${t.b}</p></div>`).join("")}
      <div class="card"><h3>📕 With the book and the videos</h3><p>This lesson matches PDF pages ${L.pages[0]}–${L.pages[1]} of <i>${esc(BOOK.book)}</i>${L.bookNote ? ` (${mix(L.bookNote)})` : ""}. Work through the lesson here first, then read the book's <span class="ar">الأمثلة</span> and <span class="ar">القاعدة</span>, do its <span class="ar">تمرينات</span> on paper, and watch the matching video in the <a href="${BOOK.video}" target="_blank" rel="noopener">video series</a>. Come back here for the quiz and the review.</p></div>
      <div class="card"><h3>The routine for every lesson</h3><ol>
        <li><b>Lesson</b>: one section at a time. Play with each diagram, say every example aloud <i>with its endings</i>, answer the “check yourself” questions, then mark the section done.</li>
        <li><b>Picture words</b> and <b>Vocabulary</b>: learn nouns with their gender and plural, verbs with their present tense; star the words you want in your daily <a href="#/review">review</a>.</li>
        <li><b>Read</b>: read the texts with translation on, tapping new words; then turn translation <i>and ḥarakāt</i> off and read aloud, supplying the endings yourself.</li>
        <li><b>Listen</b> and <b>Speak</b>: shadow the texts, do three dictations, play each role.</li>
        <li><b>Exercises</b> in order: they get harder, and the last is a review.</li>
        <li><b>Quiz</b> until you reach 80%+, then print the <b>Summary</b>.</li></ol></div>`;
  }

  /* ---------- review ---------- */
  function renderReview() {
    const deck = srsDeck(), due = deck.filter((c) => c.due <= Date.now());
    app.innerHTML = `<h1>Review <span class="small muted ar">المراجعة</span></h1>
      <p class="muted">Spaced repetition: starred words come back after 1, 3, 7, 14, 30 and 60 days; “Again” brings a card back in a minute.</p>
      <div class="toolbar"><button class="btn primary" id="r-due" ${due.length ? "" : "disabled"}>Review ${due.length} due</button><button class="btn" id="r-all" ${deck.length ? "" : "disabled"}>Practise all ${deck.length}</button><button class="btn" id="r-g" ${deck.length > 2 ? "" : "disabled"}>مذكّر / مؤنّث drill</button></div>
      <div id="r-area">${deck.length ? vocabTable(deck.sort((a, b) => a.due - b.due), true) : `<div class="card">Nothing to review yet. Open a lesson's <b>Vocabulary</b> tab and press ★ on words (or “Add all to review”).</div>`}</div>`;
    const area = app.querySelector("#r-area");
    app.querySelector("#r-due").onclick = () => flashcards(area, shuffle(due), renderReview, true);
    app.querySelector("#r-all").onclick = () => flashcards(area, shuffle(deck), renderReview, true);
    app.querySelector("#r-g").onclick = () => genderDrill(area, deck.filter((v) => gender(v) && /n\./.test(v.type)), renderReview);
  }

  /* ---------- grammar index ---------- */
  function renderGrammarIndex() {
    const items = Object.values(LESSONS).sort((a, b) => a.n - b.n);
    app.innerHTML = `<h1>Grammar index <span class="small muted ar">فهرس القواعد</span></h1>
      <p class="muted">Every lesson section, lesson by lesson. Each one opens at that section.</p>
      ${items.map((L) => `<div class="card"><h3><a href="#/lesson/${L.n}">${L.n}. ${ar(meta(L.n)[1])}</a> <span class="small muted">${esc(meta(L.n)[2])}</span></h3><ul class="gidx">${(L.lesson || []).map((g) => `<li><a href="#/lesson/${L.n}/lesson/${g.id}">${esc(g.t)}</a>${g.ar ? ` ${ar(g.ar, "small")}` : ""}${g.pos ? ` <span class="chip">${esc(g.pos)}</span>` : ""}</li>`).join("")}</ul></div>`).join("")}
      <div class="card"><h3>Coming next</h3><p class="small muted">${BOOK.lessons.filter((c) => !full(c[0])).map((c) => `${c[0]}. ${esc(c[2])}`).join(" · ")}</p></div>`;
  }

  /* ---------- iʿrāb map ---------- */
  function renderIrabMap() {
    const M = BOOK.irab || [];
    app.innerHTML = `<h1>The iʿrāb map <span class="small muted ar">خريطة الإعراب</span></h1>
      <p class="muted">Every word in an Arabic sentence is in one of four states. This map collects what puts a word in each state and the sign it shows, with the lesson that teaches it. It grows as the course does.</p>
      <div class="irab-grid">${M.map((c) => `<div class="card irab-col irab-${c.k}"><h3>${ar(c.ar)} <span class="small muted">${esc(c.en)}</span></h3><p class="small">${mix(c.sign)}</p><ul>${c.items.map((it) => `<li>${ar(it[0])} <span class="small muted">${esc(it[1])}</span>${it[2] ? ` · <a href="#/lesson/${it[2]}" class="small ${full(it[2]) ? "" : "muted"}">lesson ${it[2]}</a>` : ""}${it[3] ? `<div class="small ar ex-ar">${esc(it[3])}</div>` : ""}</li>`).join("")}</ul></div>`).join("")}</div>`;
  }

  /* ---------- word index ---------- */
  function renderIndex(q) {
    const all = allVocab();
    app.innerHTML = `<h1>Word index <span class="small muted ar">فهرس المفردات</span></h1><p class="muted">Every word and expression in the course (${all.length}). Search in Arabic (with or without ḥarakāt) or English.</p>
      <div class="toolbar"><input class="dict" id="ix" placeholder="Search… (e.g. كتاب, garden, يكتب)" value="${esc(q)}" autocomplete="off"></div><div id="ix-r"></div>`;
    const inp = app.querySelector("#ix"), res = app.querySelector("#ix-r");
    const draw = () => { const s = loose(inp.value); const list = (s ? all.filter((v) => loose(v.ar).includes(s) || loose(v.forms).includes(s) || loose(v.en).includes(s)) : all).sort((a, b) => loose(bare(a.ar)).localeCompare(loose(bare(b.ar)), "ar")); res.innerHTML = `<p class="small muted">${list.length} results</p>` + vocabTable(list.slice(0, 400), true); };
    inp.oninput = draw; draw(); inp.focus();
  }

  /* ---------- method ---------- */
  function renderMethod() {
    app.innerHTML = `<h1>How to study with this course</h1>
      <div class="card"><h3>About the book</h3><p><i>${esc(BOOK.book)}</i> by ${esc(BOOK.author)} is the classic Egyptian grammar course, written for pupils in the second to fourth years of primary school and still used all over the Arab world and by learners of Arabic everywhere. It comes in three parts (<span class="ar">الجزء الأول والثاني والثالث</span>) and teaches by <b>induction</b> (<span class="ar">طريقة الاستنباط</span>): every lesson starts from <span class="ar">الأمثلة</span> (examples), moves to <span class="ar">البحث</span> (a guided discussion of what the examples show), states <span class="ar">القاعدة</span> (the rule) and ends with <span class="ar">تمرينات</span> — exercises that include <span class="ar">الإعراب</span> (parsing) and <span class="ar">الإنشاء</span> (composition), because the authors believed grammar must show in good speaking and writing.</p>
      <p>This course follows the same lessons and page numbers (of the PDF), and the same method. The explanations, illustrations, texts and most exercises here are written fresh for the course, so keep your copy of the book at hand for its own examples and exercises. A video series teaches the book lesson by lesson: <a href="${BOOK.video}" target="_blank" rel="noopener">${esc(BOOK.videoName)}</a>.</p></div>
      <div class="card tip"><h3>The method</h3><ol>
        <li><b>Read with your eyes on the last letter.</b> Arabic grammar (<span class="ar">النحو</span>) is mostly about the ending of each word: <span class="ar">ـُ</span> (rafʿ), <span class="ar">ـَ</span> (naṣb), <span class="ar">ـِ</span> (jarr), <span class="ar">ـْ</span> (jazm). The <a href="#/irab">iʿrāb map</a> shows them all on one page.</li>
        <li><b>Ask three questions of every word</b>: what is it (<span class="ar">اسم، فعل، حرف</span>)? what is its job in the sentence (subject, object, predicate…)? and so what ending must it carry? That is <span class="ar">الإعراب</span>.</li>
        <li><b>Say everything aloud with full endings</b>, slowly. A rule you can hear is a rule you will keep. Then practise reading unvowelled text (the ḥarakāt switch in Read) and supply the endings yourself — that is how real Arabic is written.</li>
        <li><b>Learn words with their partners</b>: a noun with its gender and plural (<span class="ar">كِتَابٌ ج كُتُبٌ</span>), a verb with its present (<span class="ar">كَتَبَ يَكْتُبُ</span>).</li>
        <li><b>Do the exercises in order</b>: they get harder, and the last is a review. Do the book's exercises on paper too, especially its <span class="ar">تمرين في الإعراب</span> and <span class="ar">تمرين في الإنشاء</span>.</li>
        <li><b>Review a little every day</b> (5–10 minutes) with the spaced-repetition <a href="#/review">Review</a>.</li></ol></div>
      <div class="card"><h3>Tips for this site</h3><ul>
        <li>Tap any Arabic word in a lesson or text for its meaning; ★ puts it in your review deck.</li>
        <li>Audio uses your device's text-to-speech. Chrome and Edge usually have good Arabic voices; on phones, install an Arabic voice in the system settings. Synthetic voices sometimes drop case endings — trust the written ḥarakāt.</li>
        <li>The Speak tab uses your browser's speech recognition where available (Chrome, Edge, Safari).</li>
        <li>Use the ⌨ button under the inputs for an on-screen Arabic keyboard and the ḥarakāt if your keyboard has no Arabic layout.</li>
        <li>“Larger Arabic text” on the home page makes all Arabic bigger.</li></ul></div>
      <div class="card"><h3>Keyboard</h3><p><kbd>←</kbd>/<kbd>→</kbd> previous/next lesson · <kbd>Esc</kbd> stop audio.</p></div>`;
  }

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, select")) return;
    if (e.key === "Escape") { TTS.stop(); closePop(); }
    const m = location.hash.match(/^#\/lesson\/(\d+)/); if (!m) return;
    if (e.key === "ArrowRight" && +m[1] < BOOK.lessons.length) location.hash = `#/lesson/${+m[1] + 1}`;
    if (e.key === "ArrowLeft" && +m[1] > 1) location.hash = `#/lesson/${+m[1] - 1}`;
  });

  window.__course = { lookup, strip, loose };
  route();
})();
