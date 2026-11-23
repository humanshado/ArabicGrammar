// Interactive illustrations ("widgets") used inside lesson sections.
// Each widget: { html(wd, section): string, bind(rootElement, TTS, wd, section) }.
// Most widgets are generic and take their data from the lesson section's `wd` object.
(function () {
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const ar = (s, cls = "") => `<span class="ar ${cls}" lang="ar" dir="rtl">${esc(s)}</span>`;
  const mix = (s) => esc(s).replace(/([؀-ۿ][؀-ۿً-ٰٟ\s،؛]*[؀-ۿً-ٰٟ]|[؀-ۿ])/g, '<span class="ar" lang="ar">$1</span>');
  // trusted lesson HTML with Arabic runs wrapped (for notes that contain <b>, <i> …)
  const mixH = (s) => String(s ?? "").replace(/([\u0600-\u06FF][\u0600-\u06FF\u064B-\u065F\u0670\s،؛]*[\u0600-\u06FF\u064B-\u065F\u0670]|[\u0600-\u06FF])/g, '<span class="ar" lang="ar">$1</span>');
  const clean = (s) => String(s).replace(/\[\[|\]\]/g, "");
  const marked = (s) => esc(s).replace(/\[\[(.+?)\]\]/g, '<mark class="chg">$1</mark>');
  const spk = (t) => `<button class="btn icon" data-say="${esc(clean(t))}" title="Listen">🔊</button>`;
  const PAL = ["#2457c5", "#c8283c", "#2e7d4f", "#a8741f", "#7a5af5", "#d9822b", "#14a3a3", "#b0417a", "#5b6b7b", "#3f8f2f"];
  const widgets = {};
  const head = (wd, t, s) => `<div class="w-title">${mix(wd.title || t)}</div>${wd.sub || s ? `<div class="w-sub">${mix(wd.sub || s)}</div>` : ""}`;

  /* ============ 1. parse: tap the words of a sentence to see what each is ============ */
  // wd: { title, sub, legend: { key: [english, arabic] }, sents: [{ en, w: [[word, key, explanation]] }], game: true }
  widgets.parse = {
    html: (wd) => `${head(wd, "Tap a word to see what it is")}
      <div class="toolbar">${wd.sents.map((s, i) => `<button class="btn sm ps-s ${i ? "" : "on"}" data-i="${i}">${wd.sents.length > 1 ? "Sentence " + (i + 1) : "Sentence"}</button>`).join("")}<button class="btn sm ps-all">Show all labels</button>${wd.game !== false ? `<button class="btn sm ps-game">🎯 Find it</button>` : ""}</div>
      <div class="ps-area"></div>
      <div class="legend">${Object.entries(wd.legend).map(([k, v], i) => `<span style="border-bottom:3px solid ${PAL[i % PAL.length]}">${ar(v[1])} · ${esc(v[0])}</span>`).join("")}</div>`,
    bind(root, TTS, wd) {
      const keys = Object.keys(wd.legend), col = (k) => PAL[keys.indexOf(k) % PAL.length];
      const area = root.querySelector(".ps-area"); let cur = 0, game = null;
      const draw = () => {
        const s = wd.sents[cur];
        area.innerHTML = `<div class="pos-sent ar-sent" dir="rtl">${s.w.map((w, j) => `<span class="pos-w" data-j="${j}" style="border-bottom:4px solid ${col(w[1])}"><span class="t ar">${esc(w[0])}</span><span class="tag" style="color:${col(w[1])}">${esc(wd.legend[w[1]][1])}</span></span>`).join("")} ${spk(s.w.map((w) => w[0]).join(" "))}</div><div class="small muted">${esc(s.en)}</div><div class="out-box ps-info" style="margin-top:.5rem">${game ? "" : "Tap a word."}</div>`;
        if (game) newGame();
        area.querySelectorAll(".pos-w").forEach((b) => b.onclick = () => {
          const w = s.w[+b.dataset.j];
          if (game) {
            const ok = w[1] === game; b.classList.add(ok ? "good" : "bad");
            area.querySelector(".ps-info").innerHTML = `${ok ? "<b class='g-ok'>✔ Yes!</b>" : "<b class='g-no'>✗ No</b> — that is " + ar(wd.legend[w[1]][1]) + "."} ${mix(w[2])}`;
            if (ok) { TTS.say(w[0]); setTimeout(() => { area.querySelectorAll(".pos-w").forEach((x) => x.classList.remove("good", "bad")); newGame(); }, 1600); }
            return;
          }
          area.querySelectorAll(".pos-w.sel").forEach((x) => x.classList.remove("sel")); b.classList.add("sel");
          TTS.say(w[0]);
          area.querySelector(".ps-info").innerHTML = `${ar(w[0], "big-w")} — <b style="color:${col(w[1])}">${ar(wd.legend[w[1]][1])}</b> <span class="muted">(${esc(wd.legend[w[1]][0])})</span><div>${mixH(w[2])}</div>`;
        });
      };
      const newGame = () => {
        const present = [...new Set(wd.sents[cur].w.map((w) => w[1]))];
        game = present[Math.floor(Math.random() * present.length)];
        area.querySelector(".ps-info").innerHTML = `🎯 Tap <b>a word that is</b> ${ar(wd.legend[game][1], "big-w")} <span class="muted">(${esc(wd.legend[game][0])})</span>`;
      };
      root.querySelectorAll(".ps-s").forEach((b) => b.onclick = () => { root.querySelectorAll(".ps-s").forEach((x) => x.classList.remove("on")); b.classList.add("on"); cur = +b.dataset.i; draw(); });
      root.querySelector(".ps-all").onclick = (e) => { root.classList.toggle("pos-on"); e.target.classList.toggle("on"); };
      const g = root.querySelector(".ps-game"); if (g) g.onclick = (e) => { game = game ? null : "x"; e.target.classList.toggle("on", !!game); if (!game) draw(); else { draw(); } };
      draw();
    }
  };

  /* ============ 2. transform: one sentence, several operations, the changes highlighted ============ */
  // wd: { title, sub, sets: [{ base: [ar, en], ops: [[label, ar (changes in [[ ]]), en, note]] }] }
  widgets.transform = {
    html: (wd) => `${head(wd, "Watch what changes")}
      ${wd.sets.length > 1 ? `<div class="toolbar">${wd.sets.map((s, i) => `<button class="btn sm tf-s ${i ? "" : "on"}" data-i="${i}">${ar(s.base[0].replace(/\[\[|\]\]/g, "").split(" ").slice(0, 3).join(" "))}…</button>`).join("")}</div>` : ""}
      <div class="tf-area"></div>`,
    bind(root, TTS, wd) {
      const area = root.querySelector(".tf-area"); let cur = 0;
      const draw = () => {
        const s = wd.sets[cur];
        area.innerHTML = `<div class="tf-ops toolbar">${(s.baseLabel !== false ? [[s.baseLabel || "Start", s.base[0], s.base[1], s.base[2] || ""]] : []).concat(s.ops).map((o, j) => `<button class="btn sm tf-o ${j ? "" : "on"}" data-j="${j}">${mix(o[0])}</button>`).join("")}</div><div class="tf-out out-box"></div>`;
        const all = (s.baseLabel !== false ? [[s.baseLabel || "Start", s.base[0], s.base[1], s.base[2] || ""]] : []).concat(s.ops);
        const show = (j) => {
          const o = all[j];
          area.querySelector(".tf-out").innerHTML = `<div class="tf-line" dir="rtl" lang="ar">${marked(o[1])} ${spk(o[1])}</div><div class="muted">${esc(o[2])}</div>${o[3] ? `<div class="small tf-note">${mixH(o[3])}</div>` : ""}${j && s.baseLabel !== false ? `<div class="small muted tf-was">before: <span class="ar">${esc(clean(s.base[0]))}</span></div>` : ""}`;
          area.querySelectorAll(".tf-o").forEach((b) => b.classList.toggle("on", +b.dataset.j === j));
        };
        area.querySelectorAll(".tf-o").forEach((b) => b.onclick = () => { show(+b.dataset.j); TTS.say(clean(all[+b.dataset.j][1])); });
        show(0);
      };
      root.querySelectorAll(".tf-s").forEach((b) => b.onclick = () => { root.querySelectorAll(".tf-s").forEach((x) => x.classList.remove("on")); b.classList.add("on"); cur = +b.dataset.i; draw(); });
      draw();
    }
  };

  /* ============ 3. sorter: put each word into the right box ============ */
  // wd: { title, sub, bins: [[ar, en]], items: [[word, binIndex, why]] }
  widgets.sorter = {
    html: (wd) => `${head(wd, "Sort the words", "Tap a word, then tap the box it belongs in.")}
      <div class="sort-pool" dir="rtl"></div>
      <div class="sort-bins">${wd.bins.map((b, i) => `<div class="sort-bin" data-b="${i}" style="--c:${PAL[i % PAL.length]}"><div class="sb-h">${ar(b[0])} <span class="small muted">${esc(b[1])}</span></div><div class="sb-in" dir="rtl"></div></div>`).join("")}</div>
      <div class="out-box sort-info small">Score: 0</div><div class="toolbar"><button class="btn sm sort-again">↺ Again</button></div>`,
    bind(root, TTS, wd) {
      let sel = null, score = 0, tries = 0;
      const pool = root.querySelector(".sort-pool"), info = root.querySelector(".sort-info");
      const reset = () => {
        score = 0; tries = 0; sel = null; root.querySelectorAll(".sb-in").forEach((x) => (x.innerHTML = ""));
        pool.innerHTML = shuffle(wd.items.map((it, i) => [it, i])).map(([it, i]) => `<span class="tok ar" data-i="${i}">${esc(it[0])}</span>`).join("");
        info.textContent = "Tap a word, then a box.";
        pool.querySelectorAll(".tok").forEach((t) => t.onclick = () => { pool.querySelectorAll(".tok.sel").forEach((x) => x.classList.remove("sel")); t.classList.add("sel"); sel = t; TTS.say(t.textContent); });
      };
      root.querySelectorAll(".sort-bin").forEach((b) => b.onclick = () => {
        if (!sel) return; const it = wd.items[+sel.dataset.i]; tries++;
        if (+b.dataset.b === it[1]) { score++; b.querySelector(".sb-in").insertAdjacentHTML("beforeend", `<span class="tok ar placed">${esc(it[0])}</span>`); sel.remove(); info.innerHTML = `<b class="g-ok">✔</b> ${mix(it[2] || "")} — ${score}/${tries}`; sel = null; if (!pool.querySelector(".tok")) info.innerHTML += " · <b>All sorted! ممتاز</b>"; }
        else { sel.classList.add("shake"); const s = sel; setTimeout(() => s.classList.remove("shake"), 500); info.innerHTML = `<b class="g-no">✗</b> Not there. ${mix(it[2] || "")} — ${score}/${tries}`; }
      });
      root.querySelector(".sort-again").onclick = reset;
      reset();
    }
  };

  /* ============ 4. builder: choose words from slots, see the sentence (with agreement) ============ */
  // wd: { title, sub, slots: [{ label, opts: [[ar, en, …]] }], make(sel) -> { ar, en, note } }
  widgets.builder = {
    html: (wd) => `${head(wd, "Build a sentence")}
      <div class="bld-slots">${wd.slots.map((s, i) => `<div class="bld-slot"><div class="small muted">${mix(s.label)}</div><div class="chips">${s.opts.map((o, j) => `<button class="chipbtn ${j ? "" : "on"}" data-s="${i}" data-j="${j}">${o[0] ? ar(o[0]) : "—"}<span class="small muted"> ${esc(o[1])}</span></button>`).join("")}</div></div>`).join("")}</div>
      <div class="out-box bld-out"></div>`,
    bind(root, TTS, wd) {
      const sel = wd.slots.map(() => 0);
      const draw = (say) => {
        const r = wd.make(sel.map((j, i) => wd.slots[i].opts[j]));
        root.querySelector(".bld-out").innerHTML = `<div class="tf-line" dir="rtl" lang="ar">${marked(r.ar)} ${spk(r.ar)}</div><div class="muted">${esc(r.en)}</div>${r.note ? `<div class="small tf-note">${mixH(r.note)}</div>` : ""}`;
        if (say) TTS.say(clean(r.ar));
      };
      root.querySelectorAll(".chipbtn").forEach((b) => b.onclick = () => { const s = +b.dataset.s; sel[s] = +b.dataset.j; root.querySelectorAll(`.chipbtn[data-s="${s}"]`).forEach((x) => x.classList.toggle("on", x === b)); draw(true); });
      draw(false);
    }
  };

  /* ============ 5. timeline: past, present-future and command for a set of verbs ============ */
  // wd: { verbs: [[past, present, imperative, en past, en present, en imperative]] }
  widgets.timeline = {
    html: (wd) => `${head(wd, "Three verbs for three times", "Choose a verb, then tap a point on the time line.")}
      <div class="chips tl-v">${wd.verbs.map((v, i) => `<button class="chipbtn ${i ? "" : "on"}" data-i="${i}">${ar(v[0])}</button>`).join("")}</div>
      <div class="tl" dir="ltr">
        <div class="tl-line"></div>
        <button class="tl-pt tl-past" data-k="0"><span class="tl-dot"></span><span class="tl-lab">past · <span class="ar">الماضي</span><br>yesterday</span></button>
        <button class="tl-pt tl-now" data-k="1"><span class="tl-dot"></span><span class="tl-lab">now · later · <span class="ar">المضارع</span><br>today, tomorrow</span></button>
        <button class="tl-pt tl-imp" data-k="2"><span class="tl-dot">❗</span><span class="tl-lab">command · <span class="ar">الأمر</span><br>do it!</span></button>
      </div>
      <div class="out-box tl-out"></div>`,
    bind(root, TTS, wd) {
      let v = 0, k = 0;
      const NAMES = ["الفعل الماضي — happened before now", "الفعل المضارع — happening now or will happen; starts with أ ن ي ت", "فعل الأمر — asks someone to do it"];
      const draw = (say) => {
        const r = wd.verbs[v];
        root.querySelectorAll(".tl-pt").forEach((p) => p.classList.toggle("on", +p.dataset.k === k));
        const word = r[k], marker = k === 1 ? word.match(/^.[\u064B-\u0652]*/)[0] : "";
        root.querySelector(".tl-out").innerHTML = `<div class="tf-line" dir="rtl" lang="ar">${k === 1 ? `<mark class="chg">${esc(marker)}</mark>${esc(word.slice(marker.length))}` : esc(word)} ${spk(word)}</div><div class="muted">${esc(r[3 + k])}</div><div class="small tf-note">${mix(NAMES[k])}${r[6] && k === 0 ? "" : ""}</div>`;
        if (say) TTS.say(word);
      };
      root.querySelectorAll(".tl-v .chipbtn").forEach((b) => b.onclick = () => { root.querySelectorAll(".tl-v .chipbtn").forEach((x) => x.classList.toggle("on", x === b)); v = +b.dataset.i; draw(true); });
      root.querySelectorAll(".tl-pt").forEach((b) => b.onclick = () => { k = +b.dataset.k; draw(true); });
      draw(false);
    }
  };

  /* ============ 6. prepositions: a little bird scene ============ */
  const PREP = [
    ["في", "العُصْفُورُ [[فِي]] القَفَصِ", "The sparrow is in the cage.", { bird: [62, 58] }, "في = in, inside (place or time)."],
    ["على", "وَقَفَ العُصْفُورُ [[عَلَى]] الشَّجَرَةِ", "The sparrow stood on the tree.", { bird: [18, 14] }, "على = on, upon."],
    ["من … إلى", "طَارَ العُصْفُورُ [[مِنَ]] الشَّجَرَةِ [[إِلَى]] البَيْتِ", "The sparrow flew from the tree to the house.", { bird: [18, 14], to: [84, 22] }, "من = from (starting point) · إلى = to (end point)."],
    ["عن", "ابْتَعَدَ العُصْفُورُ [[عَنِ]] القِطِّ", "The sparrow moved away from the cat.", { bird: [40, 8], cat: true }, "عن = away from (moving off, leaving behind). It also means “about”: تَكَلَّمَ عَنِ العُصْفُورِ."],
    ["الباء", "أَمْسَكَ الوَلَدُ الحَبَّ [[بِ]]يَدِهِ", "The boy held the seed in (with) his hand.", { bird: [62, 58], boy: true }, "بـ = with, by means of (the tool). It is joined to the next word: بِالقَلَمِ، بِيَدِهِ."],
    ["اللام", "الحَبُّ [[لِ]]لْعُصْفُورِ", "The seed is for the sparrow.", { bird: [62, 58], seed: true }, "لـ = for, belonging to. Joined to the next word; لِ + الـ is written لِلْـ: لِلْعُصْفُورِ."]
  ];
  widgets.prep = {
    html: () => `<div class="w-title">Where is the sparrow? <span class="ar small">حروف الجر</span></div><div class="w-sub">Tap a preposition. The noun after it is always <b>majrūr</b> (ends in kasra ـِ).</div>
      <div class="toolbar">${PREP.map((p, i) => `<button class="btn sm pr-b ${i ? "" : "on"}" data-i="${i}">${ar(p[0])}</button>`).join("")}</div>
      <div class="prep-scene" dir="ltr">
        <span class="ps-tree">🌳</span><span class="ps-house">🏠</span>
        <div class="ps-cage"><i></i><i></i><i></i><i></i><i></i></div>
        <span class="ps-cat">🐈</span><span class="ps-boy">🧒</span><span class="ps-seed">🌾</span>
        <span class="ps-bird">🐦</span>
      </div>
      <div class="out-box pr-out"></div>`,
    bind(root, TTS) {
      const bird = root.querySelector(".ps-bird"), scene = root.querySelector(".prep-scene");
      const place = (p) => { bird.style.left = p[0] + "%"; bird.style.top = p[1] + "%"; };
      const show = (i) => {
        const p = PREP[i];
        root.querySelectorAll(".pr-b").forEach((b) => b.classList.toggle("on", +b.dataset.i === i));
        scene.classList.toggle("cat-on", !!p[3].cat); scene.classList.toggle("boy-on", !!p[3].boy); scene.classList.toggle("seed-on", !!p[3].seed);
        place(p[3].bird); if (p[3].to) setTimeout(() => place(p[3].to), 700);
        root.querySelector(".pr-out").innerHTML = `<div class="tf-line" dir="rtl" lang="ar">${marked(p[1])} ${spk(p[1])}</div><div class="muted">${esc(p[2])}</div><div class="small tf-note">${mixH(p[4])}</div>`;
      };
      root.querySelectorAll(".pr-b").forEach((b) => b.onclick = () => { show(+b.dataset.i); TTS.say(clean(PREP[+b.dataset.i][1])); });
      show(0);
    }
  };

  /* ============ 7. meter: is this a complete, useful sentence? ============ */
  // wd: { items: [[text, isComplete, why]] }
  widgets.meter = {
    html: (wd) => `${head(wd, "Complete or not?", "Does each group of words give a full, satisfying meaning (جملة مفيدة)? Decide, then see why.")}
      <div class="mt-card out-box"></div>
      <div class="toolbar"><button class="btn mt-y">✔ جملة مفيدة · complete</button><button class="btn mt-n">✗ ناقصة · incomplete</button><span class="small muted mt-sc"></span></div>`,
    bind(root, TTS, wd) {
      let deck = shuffle(wd.items), i = 0, sc = 0, t = 0, done = false;
      const draw = () => { done = false; const it = deck[i % deck.length]; root.querySelector(".mt-card").innerHTML = `<div class="tf-line" dir="rtl" lang="ar">${esc(it[0])} ${spk(it[0])}</div><div class="mt-why small"></div>`; };
      const ans = (yes) => {
        if (done) { i++; draw(); return; }
        const it = deck[i % deck.length], ok = yes === !!it[1]; t++; if (ok) sc++; done = true;
        root.querySelector(".mt-why").innerHTML = `<div class="meter"><i style="width:${it[1] ? 100 : 45}%"></i></div>${ok ? "<b class='g-ok'>✔ Right.</b>" : "<b class='g-no'>✗ Not quite.</b>"} ${mix(it[2])} <span class="muted">(tap a button for the next one)</span>`;
        root.querySelector(".mt-sc").textContent = `${sc}/${t}`;
      };
      root.querySelector(".mt-y").onclick = () => ans(true); root.querySelector(".mt-n").onclick = () => ans(false);
      draw();
    }
  };

  /* ============ 8. table: a conjugation / paradigm table with audio on every cell ============ */
  // wd: { title, sub, head: [..], rows: [[label, cell, cell…]], hi: column index to highlight }
  widgets.table = {
    html: (wd) => `${head(wd, "Paradigm")}<div class="scroll-x"><table class="g paradigm"><tr>${wd.head.map((h) => `<th>${mix(h)}</th>`).join("")}</tr>${wd.rows.map((r) => `<tr>${r.map((c, j) => j === 0 ? `<td class="small">${mix(c)}</td>` : `<td class="ar-cell ${wd.hi === j ? "hi" : ""}" data-say="${esc(clean(c))}" lang="ar">${marked(c)}</td>`).join("")}</tr>`).join("")}</table></div><div class="small muted">Tap any Arabic cell to hear it.</div>`
  };

  window.ART = { widgets };
})();
