// الدرس ١٦ — النعت (PDF pp. 84–88)
(function () {
  // helpers for the agreement machine
  const SUN = "تثدذرزسشصضطظلن";
  const al = (w) => "ال" + (SUN.includes(w[0]) ? w[0] + "ّ" + w.slice(1) : w);
  const end = (w, c, def, fem) => {
    const base = def ? al(w) : w;
    const t = fem ? "ة" : "";
    const m = def ? { r: "ُ", n: "َ", j: "ِ" }[c] : { r: "ٌ", n: "ً", j: "ٍ" }[c];
    const alif = !def && c === "n" && !fem ? "ا" : "";
    return base + "[[" + t + m + alif + "]]";
  };
  window.__naat = { end };
})();

COURSE.add({
  n: 16, pages: [84, 88], method: true,
  summary: "The adjective (النعت) describes the noun before it (المنعوت) and follows it like a shadow: it copies its case (rafʿ, naṣb or jarr), its definiteness (with or without الـ) and its gender. You will build noun–adjective pairs in every case, tell a phrase from a sentence, and practise the book's “add a suitable adjective” exercises.",
  objectives: [
    "recognise a naʿt and the noun it describes (manʿūt)",
    "make the naʿt follow its noun in case: ـُ / ـَ / ـِ",
    "make it follow in definiteness and gender: كِتَابٌ مُفِيدٌ، الوَرْدَةُ الجَمِيلَةُ",
    "tell a naʿt from a khabar: البَيْتُ الوَاسِعُ vs البَيْتُ وَاسِعٌ",
    "parse a naʿt"
  ],

  lesson: [
    { id: "what", t: "A word that describes the noun before it", ar: "النعت والمنعوت", pos: "parts of speech", pages: "84",
      b: `<p>In <span class="ar">هَذَا كِتَابٌ مُفِيدٌ</span> (this is a useful book), <span class="ar">مُفِيدٌ</span> tells us something about <span class="ar">كِتَابٌ</span>: what kind of book it is. A word that describes the noun right before it is a <b>naʿt</b> (<span class="ar">النَّعْتُ</span>, also called <span class="ar">الصِّفَةُ</span>); the noun it describes is the <b>manʿūt</b> (<span class="ar">المَنْعُوتُ</span>).</p>
        <div class="blocks"><div class="blk c1"><span class="ar">كِتَابٌ</span><small>manʿūt · described</small></div><div class="blk c6"><span class="ar">مُفِيدٌ</span><small>naʿt · describing</small></div></div>
        <p>In Arabic the adjective comes <b>after</b> its noun — the opposite of English <i>a useful book</i>.</p>`,
      rule: `<p><span class="ar">النَّعْتُ: لَفْظٌ يَدُلُّ عَلَى صِفَةٍ فِي اسْمٍ قَبْلَهُ، وَيُسَمَّى الاسْمُ المَوْصُوفُ مَنْعُوتًا.</span></p><p>The naʿt is a word that shows a quality of a noun before it; the described noun is called the manʿūt.</p>`,
      widget: "parse",
      wd: { legend: { mnt: ["described noun", "منعوت"], nat: ["adjective", "نعت"], other: ["other", "أخرى"] }, sents: [
        { en: "The beautiful rose opened.", w: [["تَفَتَّحَتِ", "other", "Verb."], ["الوَرْدَةُ", "mnt", "Doer, and the noun being described."], ["الجَمِيلَةُ", "nat", "Describes الوردة: definite, feminine, marfūʿ like it."]] },
        { en: "I read a useful book.", w: [["قَرَأْتُ", "other", "Verb + doer (I)."], ["كِتَابًا", "mnt", "Object: manṣūb, indefinite."], ["مُفِيدًا", "nat", "Follows: manṣūb, indefinite, masculine."]] },
        { en: "I ran in a spacious square.", w: [["جَرَيْتُ", "other", "Verb + doer."], ["فِي", "other", "Preposition."], ["مَيْدَانٍ", "mnt", "Majrūr, indefinite."], ["فَسِيحٍ", "nat", "Follows: majrūr, indefinite."]] }
      ] },
      check: [["The naʿt in الوَلَدُ المُؤَدَّبُ يُحِبُّهُ أَبُوهُ is…", ["المُؤَدَّبُ", "الوَلَدُ", "أَبُوهُ"], 0, "It describes الولد.", "المُؤَدَّبُ"]] },

    { id: "follows", t: "It follows its noun in case", ar: "النعت يتبع المنعوت في إعرابه", pos: "agreement", pages: "84–85",
      b: `<p>The book shows the same pair in three sentences. The noun's job changes, so its ending changes — and the adjective changes <b>with</b> it:</p>
        <table class="g"><tr><th>case</th><th>sentence</th></tr>
        <tr><td>rafʿ</td><td><span class="ar">هَذَا كِتَابٌ مُفِيدٌ</span></td></tr>
        <tr><td>naṣb</td><td><span class="ar">قَرَأْتُ كِتَابًا مُفِيدًا</span></td></tr>
        <tr><td>jarr</td><td><span class="ar">نَظَرْتُ فِي كِتَابٍ مُفِيدٍ</span></td></tr></table>
        <p>The naʿt has no job of its own: it is a <b>follower</b> (<span class="ar">تَابِع</span>). Choose a noun, an adjective and a case below.</p>`,
      widget: "builder",
      wd: { title: "The agreement machine", slots: [
        { label: "noun · المنعوت", opts: [["كِتَاب", "book", "m"], ["وَرْدَة", "rose", "f"], ["قَلَم", "pen", "m"], ["حَقِيبَة", "bag", "f"]] },
        { label: "definite?", opts: [["نكرة", "a … (indefinite)", 0], ["معرفة", "the … (definite)", 1]] },
        { label: "case · الإعراب", opts: [["مرفوع", "rafʿ: doer", "r"], ["منصوب", "naṣb: object", "n"], ["مجرور", "jarr: after a preposition", "j"]] },
        { label: "adjective · النعت", opts: [["جَدِيد", "new"], ["جَمِيل", "beautiful"], ["صَغِير", "small"]] }
      ], make: (s) => {
        const E = window.__naat.end;
        const [N, D, C, A] = s; const f = N[2] === "f", def = !!D[2], c = C[2];
        const noun = E(N[0].replace(/ة$/, ""), c, def, f), adj = E(A[0], c, def, f);
        const frame = { r: [(f ? (def ? "سَقَطَتِ " : "سَقَطَتْ ") : "سَقَطَ ")], n: ["اشْتَرَيْتُ "], j: ["نَظَرْتُ إِلَى "] }[c];
        const en = (c === "r" ? "" : c === "n" ? "I bought " : "I looked at ") + (def ? "the " : "a ") + A[1] + " " + N[1] + (c === "r" ? " fell." : ".");
        return { ar: frame[0] + noun + " " + adj, en: en.charAt(0).toUpperCase() + en.slice(1), note: `The adjective copies its noun: <b>${C[0]}</b>, <b>${def ? "definite (الـ)" : "indefinite (tanwīn)"}</b>, <b>${f ? "feminine (ـة)" : "masculine"}</b>.` };
      } },
      check: [["Complete: جَلَسْتُ عَلَى كُرْسِيٍّ ___", ["مُرِيحٍ", "مُرِيحٌ", "مُرِيحًا"], 0, "Follows a majrūr noun.", "جَلَسْتُ عَلَى كُرْسِيٍّ مُرِيحٍ"]] },

    { id: "def-gen", t: "…and in definiteness and gender", ar: "التعريف والتنكير والتذكير والتأنيث", pos: "agreement", pages: "85–86",
      b: `<p>The naʿt also copies two more features of its noun:</p>
        <ul><li><b>definiteness</b>: <span class="ar">الـ</span> with <span class="ar">الـ</span>, tanwīn with tanwīn: <span class="ar">الوَرْدَةُ الجَمِيلَةُ</span> / <span class="ar">وَرْدَةٌ جَمِيلَةٌ</span>. A proper name is definite, so its adjective takes <span class="ar">الـ</span>: <span class="ar">مُحَمَّدٌ المُجْتَهِدُ</span>.</li>
        <li><b>gender</b>: <span class="ar">قَمَرٌ مُنِيرٌ</span> / <span class="ar">شَمْسٌ مُنِيرَةٌ</span>.</li></ul>
        <p>(Number — dual and plural — comes in Part 3, lesson 71. One useful rule now: a plural of <i>things</i> takes a <b>feminine singular</b> adjective: <span class="ar">كُتُبٌ مُفِيدَةٌ</span>, <span class="ar">الأَشْجَارُ العَالِيَةُ</span>.)</p>`,
      check: [["“the hot sun” (الشمس is feminine):", ["الشَّمْسُ الحَارَّةُ", "الشَّمْسُ حَارَّةٌ", "الشَّمْسُ الحَارُّ"], 0, "Definite + feminine; note الشمسُ حارّةٌ is a sentence.", "الشَّمْسُ الحَارَّةُ"]] },

    { id: "phrase", t: "Naʿt or khabar? Phrase or sentence?", ar: "الفرق بين النعت والخبر", pos: "sentence structure",
      b: `<p>You met this in lesson 7. With both words definite you get a noun and its <b>naʿt</b> — a phrase that still needs a khabar. With a definite noun and an indefinite word you get a <b>khabar</b> — a complete sentence.</p>`,
      widget: "transform",
      wd: { title: "From phrase to sentence", sets: [
        { base: ["المَيْدَانُ الفَسِيحُ", "the spacious square …"], baseLabel: "phrase (naʿt)", ops: [["sentence (khabar)", "المَيْدَانُ [[فَسِيحٌ]]", "The square is spacious."], ["phrase + khabar", "المَيْدَانُ الفَسِيحُ [[جَمِيلٌ]]", "The spacious square is beautiful.", "الفسيحُ = naʿt; جميلٌ = khabar."]] }
      ] },
      check: [["In البَيْتُ الوَاسِعُ مُرِيحٌ, the khabar is…", ["مُرِيحٌ", "الوَاسِعُ"], 0, "الواسعُ is a naʿt.", false]] },

    { id: "style", t: "Style: choose the right adjective", ar: "اختيار النعت المناسب", pos: "style", pages: "86–88",
      b: `<p>The book's composition exercises ask you to add a <b>suitable</b> adjective (<span class="ar">ضَعْ نَعْتًا مُنَاسِبًا</span>) — one that fits the noun: water is <span class="ar">عَذْبٌ</span> (fresh) or <span class="ar">صَافٍ</span>, fruit <span class="ar">نَاضِجَةٌ</span> (ripe), a flower <span class="ar">ذَابِلَةٌ</span> (withered) or <span class="ar">نَاضِرَةٌ</span> (fresh), a camel's neck <span class="ar">طَوِيلٌ</span>. You can stack two or more adjectives: <span class="ar">بَيْتٌ صَغِيرٌ جَمِيلٌ</span>.</p>
        <p>Some classic pairs from the book's exercises: <span class="ar">عَدُوٌّ عَاقِلٌ خَيْرٌ مِنْ صَدِيقٍ جَاهِلٍ</span> — a wise enemy is better than an ignorant friend.</p>`,
      check: [["Best adjective for مَاءٌ (to drink):", ["عَذْبٌ", "ذَابِلٌ", "مُؤَدَّبٌ"], 0, "Fresh water.", "مَاءٌ عَذْبٌ"]] },

    { id: "parse", t: "Parsing the naʿt", ar: "إعراب النعت", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">قَطَفْتُ الوَرْدَةَ الجَمِيلَةَ.</span></p>
        <p><span class="ar">الوَرْدَةَ: مَفْعُولٌ بِهِ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></p>
        <p><span class="ar">الجَمِيلَةَ: نَعْتٌ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></p></div>
        <p>Parse the noun first; the naʿt simply copies its state: <span class="ar">نَعْتٌ مَرْفُوعٌ / مَنْصُوبٌ / مَجْرُورٌ</span>.</p>`,
      check: [["Parse مُفِيدٍ in نَظَرْتُ فِي كِتَابٍ مُفِيدٍ:", ["نعت مجرور وعلامة جره الكسرة", "اسم مجرور بفي", "خبر"], 0, ""]] }
  ],

  scenes: [
    { h: "فِي السُّوقِ", en: "At the market", pic: "🛒", lines: [
      ["", "ذَهَبَتْ سُعَادُ إِلَى سُوقٍ كَبِيرٍ.", "Suad went to a big market."],
      ["", "رَأَتْ فَاكِهَةً نَاضِجَةً، وَخُضَرًا طَازَجَةً.", "She saw ripe fruit and fresh vegetables."],
      ["", "اشْتَرَتْ تُفَّاحًا أَحْمَرَ، وَعِنَبًا لَذِيذًا.", "She bought red apples and delicious grapes."],
      ["", "وَقَفَتْ أَمَامَ بَائِعٍ عَجُوزٍ يَبِيعُ زُهُورًا جَمِيلَةً.", "She stopped in front of an old seller selling beautiful flowers."],
      ["", "اخْتَارَتِ الوَرْدَةَ البَيْضَاءَ، وَقَدَّمَتْهَا لِأُمِّهَا الكَرِيمَةِ.", "She chose the white rose and gave it to her kind mother."]],
      note: "Each adjective copies its noun: كَبِيرٍ (jarr), نَاضِجَةً، طَازَجَةً، لَذِيذًا، جَمِيلَةً (naṣb), عَجُوزٍ (jarr), البَيْضَاءَ (naṣb, definite), الكَرِيمَةِ (jarr, definite). أَحْمَرَ and بَيْضَاءَ take no tanwīn — Part 3, lesson 70." },
    { h: "صِفْ صَدِيقَكَ", en: "Describe your friend", pic: "🧑‍🤝‍🧑", lines: [
      ["المُعَلِّمُ", "صِفْ لَنَا صَدِيقَكَ يَا يُوسُفُ.", "Describe your friend for us, Yusuf."],
      ["يُوسُفُ", "صَدِيقِي وَلَدٌ طَوِيلٌ نَشِيطٌ.", "My friend is a tall, active boy."],
      ["المُعَلِّمُ", "وَمَاذَا يُحِبُّ؟", "And what does he like?"],
      ["يُوسُفُ", "يُحِبُّ القِصَصَ القَصِيرَةَ، وَالأَلْعَابَ الصَّعْبَةَ.", "He likes short stories and difficult games."],
      ["المُعَلِّمُ", "أَحْسَنْتَ! هَذَا وَصْفٌ جَمِيلٌ.", "Well done! That's a nice description."]],
      note: "القِصَصَ القَصِيرَةَ and الأَلْعَابَ الصَّعْبَةَ: plurals of things take a feminine singular adjective." }
  ],

  vocab: [
    ["نَعْتٌ", "adjective (naʿt)", "n.m", "", "grammar term; also صِفَةٌ", "", "Grammar words"],
    ["مَنْعُوتٌ", "the described noun", "n.m", "", "grammar term", "", "Grammar words"],
    ["مُفِيدٌ", "useful", "adj.", "", "f. مُفِيدَةٌ", "", "Adjectives"],
    ["جَدِيدٌ", "new", "adj.", "", "f. جَدِيدَةٌ", "جُدُدٌ", "Adjectives"],
    ["صَغِيرٌ", "small", "adj.", "", "f. صَغِيرَةٌ", "صِغَارٌ", "Adjectives"],
    ["كَبِيرٌ", "big; old (person)", "adj.", "", "f. كَبِيرَةٌ", "كِبَارٌ", "Adjectives"],
    ["طَوِيلٌ", "long, tall", "adj.", "", "f. طَوِيلَةٌ", "", "Adjectives"],
    ["قَصِيرٌ", "short", "adj.", "", "f. قَصِيرَةٌ", "", "Adjectives"],
    ["صَعْبٌ", "difficult", "adj.", "", "f. صَعْبَةٌ", "", "Adjectives"],
    ["عَذْبٌ", "fresh, sweet (water)", "adj.", "", "", "", "Adjectives"],
    ["طَازَجٌ", "fresh (food)", "adj.", "", "f. طَازَجَةٌ", "", "Adjectives"],
    ["خَشِنٌ", "rough", "adj.", "", "f. خَشِنَةٌ", "", "Adjectives"],
    ["لَامِعٌ", "shiny", "adj.", "", "f. لَامِعَةٌ", "", "Adjectives"],
    ["عَاقِلٌ", "wise, sensible", "adj.", "", "f. عَاقِلَةٌ", "عُقَلَاءُ", "Adjectives"],
    ["جَاهِلٌ", "ignorant", "adj.", "", "f. جَاهِلَةٌ", "جُهَّالٌ", "Adjectives"],
    ["كَرِيمٌ", "generous, kind", "adj.", "", "f. كَرِيمَةٌ", "كِرَامٌ", "Adjectives"],
    ["عَجُوزٌ", "old (person)", "adj.", "", "", "", "Adjectives"],
    ["أَحْمَرُ", "red", "adj.", "", "f. حَمْرَاءُ", "حُمْرٌ", "Colours"],
    ["أَبْيَضُ", "white", "adj.", "", "f. بَيْضَاءُ", "بِيضٌ", "Colours"],
    ["أَسْوَدُ", "black", "adj.", "", "f. سَوْدَاءُ", "سُودٌ", "Colours"],
    ["أَخْضَرُ", "green", "adj.", "", "f. خَضْرَاءُ", "خُضْرٌ", "Colours"],
    ["تُفَّاحٌ", "apples", "n.m", "🍎", "one: تُفَّاحَةٌ", "", "Market"],
    ["خُضَرٌ", "vegetables", "n.f", "🥕", "", "", "Market"],
    ["بَائِعٌ", "seller", "n.m", "🧑‍🌾", "", "بَاعَةٌ", "Market"],
    ["عُنُقٌ", "neck", "n.m", "🦒", "", "أَعْنَاقٌ", "Market"],
    ["عَدُوٌّ", "enemy", "n.m", "😠", "", "أَعْدَاءٌ", "People"],
    ["صَدِيقٌ", "friend", "n.m", "🧑‍🤝‍🧑", "", "أَصْدِقَاءُ", "People"],
    ["لُعْبَةٌ", "game, toy", "n.f", "🧸", "", "أَلْعَابٌ", "People"],
    ["تَفَتَّحَ", "to open, bloom", "v.", "", "يَتَفَتَّحُ", "", "Verbs"],
    ["اِخْتَارَ", "to choose", "v.", "", "يَخْتَارُ", "", "Verbs"],
    ["قَدَّمَ", "to offer, present", "v.", "", "يُقَدِّمُ", "", "Verbs"],
    ["وَصَفَ", "to describe", "v.", "", "يَصِفُ · صِفْ", "", "Verbs"]
  ],

  exercises: [
    { k: "shakl", t: "اشْكُلْ آخِرَ النَّعْتِ · Vowel the adjective", items: [
      "هَذَا مَيْدَانٌ فَسِيح{ٌ}", "رَأَيْتُ مَيْدَانًا فَسِيح{ً}ا", "جَرَيْتُ فِي مَيْدَانٍ فَسِيح{ٍ}", "تَفَتَّحَتِ الوَرْدَةُ الجَمِيلَة{ُ}", "قَطَفْتُ الوَرْدَةَ الجَمِيلَة{َ}", "نَظَرْتُ إِلَى الوَرْدَةِ الجَمِيلَة{ِ}"] },
    { k: "gap", t: "ضَعْ نَعْتًا مُنَاسِبًا · Add a suitable adjective", en: "Pick from the bank; each adjective already has the right ending.", bank: true, items: [
      ["الوَلَدُ ___ يُحِبُّهُ أَبُوهُ.", "المُؤَدَّبُ"], ["لَا تَشْرَبْ إِلَّا المَاءَ ___ .", "العَذْبَ"], ["الحِذَاءُ ___ يُضِرُّ القَدَمَ.", "الضَّيِّقُ"], ["لِلْجَمَلِ عُنُقٌ ___ .", "طَوِيلٌ"], ["عَدُوٌّ ___ خَيْرٌ مِنْ صَدِيقٍ جَاهِلٍ.", "عَاقِلٌ"], ["أُحِبُّ القِرَاءَةَ فِي الكُتُبِ ___ .", "المُفِيدَةِ"]] },
    { k: "irab", t: "مَا وَظِيفَةُ الكَلِمَةِ؟ · Naʿt, khabar or something else?", cats: ["نعت", "خبر", "منعوت"], items: [
      ["البَيْتُ [الوَاسِعُ] جَمِيلٌ.", "0", ""], ["البَيْتُ الوَاسِعُ [جَمِيلٌ].", "1", ""], ["[البَيْتُ] الوَاسِعُ جَمِيلٌ.", "2", "It's also the mubtadaʾ."], ["القَمَرُ [مُنِيرٌ].", "1", ""], ["ظَهَرَ القَمَرُ [المُنِيرُ].", "0", ""]] },
    { k: "mcq", t: "اِخْتَرِ النَّعْتَ الصَّحِيحَ · Choose the correct adjective", items: [
      ["اشْتَرَيْتُ حَقِيبَةً …", ["جَدِيدَةً", "جَدِيدَةٌ", "الجَدِيدَةَ"], 0, "naṣb, indefinite, feminine"], ["سَلَّمْتُ عَلَى الرَّجُلِ …", ["الكَرِيمِ", "كَرِيمٍ", "الكَرِيمُ"], 0, "jarr, definite"], ["طَلَعَتِ الشَّمْسُ …", ["المُشْرِقَةُ", "مُشْرِقَةٌ", "المُشْرِقُ"], 0, "rafʿ, definite, feminine"], ["قَرَأْتُ كُتُبًا …", ["مُفِيدَةً", "مُفِيدِينَ", "مُفِيدًا"], 0, "plural of things → feminine singular"], ["جَاءَ مُحَمَّدٌ …", ["المُجْتَهِدُ", "مُجْتَهِدٌ", "المُجْتَهِدَ"], 0, "A name is definite → الـ."]] },
    { k: "tr", t: "تَرْجِمْ · Translate", items: [
      ["I read a useful book.", "قرأت كتابا مفيدا|قَرَأْتُ كِتَابًا مُفِيدًا"], ["The beautiful rose opened.", "تفتحت الوردة الجميلة|تَفَتَّحَتِ الوَرْدَةُ الجَمِيلَةُ"], ["I sat on a comfortable chair.", "جلست على كرسي مريح|جَلَسْتُ عَلَى كُرْسِيٍّ مُرِيحٍ"], ["The new pen is on the desk.", "القلم الجديد على المكتب|القَلَمُ الجَدِيدُ عَلَى المَكْتَبِ"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["The naʿt comes before its noun.", false, "After it."], ["The naʿt follows its noun in case.", true, ""], ["بَيْتٌ الجَمِيلُ is correct.", false, "Indefinite noun → indefinite adjective: بَيْتٌ جَمِيلٌ."], ["البَيْتُ الجَمِيلُ is a complete sentence.", false, "It's a phrase."], ["A plural of things can take a feminine singular adjective.", true, "كُتُبٌ مُفِيدَةٌ"]] }
  ],

  drills: [
    ["The naʿt follows its noun in…", ["case, definiteness and gender", "case only", "nothing"], 0, ""],
    ["هَذِهِ وَرْدَةٌ ___", ["جَمِيلَةٌ", "جَمِيلٌ", "الجَمِيلَةُ"], 0, ""],
    ["رَأَيْتُ رَجُلًا ___", ["كَرِيمًا", "كَرِيمٌ", "الكَرِيمَ"], 0, ""],
    ["مَرَرْتُ بِالطِّفْلِ ___", ["الصَّغِيرِ", "صَغِيرٍ", "الصَّغِيرَ"], 0, ""],
    ["Which is a sentence?", ["الجَوُّ جَمِيلٌ", "الجَوُّ الجَمِيلُ"], 0, ""],
    ["Naʿt in شَرِبْتُ مَاءً عَذْبًا:", ["عَذْبًا", "مَاءً"], 0, ""],
    ["Parse الجَمِيلَةُ in تَفَتَّحَتِ الوَرْدَةُ الجَمِيلَةُ:", ["نعت مرفوع وعلامة رفعه الضمة", "خبر مرفوع", "فاعل"], 0, ""],
    ["“a black cat” (as object):", ["قِطًّا أَسْوَدَ", "قِطًّا أَسْوَدًا", "القِطَّ أَسْوَدَ"], 0, "أسود takes no tanwīn (diptote)."],
    ["الأَشْجَارُ ___", ["العَالِيَةُ", "العَالُونَ", "العَالِي"], 0, "Plural of things → feminine singular."],
    ["The described noun is called…", ["المنعوت", "النعت", "المبتدأ"], 0, ""],
    ["سَافَرْتُ فِي سَيَّارَةٍ ___", ["سَرِيعَةٍ", "سَرِيعَةً", "سَرِيعٍ"], 0, ""],
    ["Which shows correct agreement?", ["الطَّالِبَةُ المُجْتَهِدَةُ", "الطَّالِبَةُ المُجْتَهِدُ", "طَالِبَةٌ المُجْتَهِدَةُ"], 0, ""]
  ],

  comp: [
    ["What kind of market did Suad go to?", ["a big market", "a small shop", "a night market"], 0, 0],
    ["What colour was the rose she chose?", ["white", "red", "yellow"], 0, 0],
    ["Who did she give the rose to?", ["her mother", "the seller", "her friend"], 0, 0],
    ["How does Yusuf describe his friend?", ["tall and active", "short and quiet", "old and kind"], 0, 1],
    ["What kind of stories does the friend like?", ["short ones", "long ones", "sad ones"], 0, 1]
  ],

  cheat: `<h3>النعت · The adjective</h3>
    <div class="rule"><span class="ar">النَّعْتُ يَتْبَعُ المَنْعُوتَ فِي: الإِعْرَابِ، وَالتَّعْرِيفِ وَالتَّنْكِيرِ، وَالتَّذْكِيرِ وَالتَّأْنِيثِ.</span></div>
    <table class="g"><tr><th></th><th>indefinite</th><th>definite</th></tr>
    <tr><td>rafʿ</td><td><span class="ar">كِتَابٌ مُفِيدٌ</span></td><td><span class="ar">الوَرْدَةُ الجَمِيلَةُ</span></td></tr>
    <tr><td>naṣb</td><td><span class="ar">كِتَابًا مُفِيدًا</span></td><td><span class="ar">الوَرْدَةَ الجَمِيلَةَ</span></td></tr>
    <tr><td>jarr</td><td><span class="ar">كِتَابٍ مُفِيدٍ</span></td><td><span class="ar">الوَرْدَةِ الجَمِيلَةِ</span></td></tr></table>
    <p>Phrase: <span class="ar">البَيْتُ الوَاسِعُ</span> · sentence: <span class="ar">البَيْتُ وَاسِعٌ</span> · plural of things: <span class="ar">كُتُبٌ مُفِيدَةٌ</span></p>`,
  mistakes: [
    ["قَرَأْتُ كِتَابًا مُفِيدٌ", "قَرَأْتُ كِتَابًا مُفِيدًا", "The naʿt copies the case of its noun."],
    ["الوَرْدَةُ جَمِيلَةُ (meaning: the beautiful rose)", "الوَرْدَةُ الجَمِيلَةُ", "Definite noun → definite adjective."],
    ["سَيَّارَةٌ سَرِيعٌ", "سَيَّارَةٌ سَرِيعَةٌ", "Feminine noun → feminine adjective."],
    ["جَمِيلَةٌ وَرْدَةٌ (meaning: a beautiful rose)", "وَرْدَةٌ جَمِيلَةٌ", "The adjective comes after its noun."]
  ],
  tips: [
    { t: "Describe in pairs", b: `Learn nouns with a typical adjective: <span class="ar">مَاءٌ عَذْبٌ، فَاكِهَةٌ نَاضِجَةٌ، بَحْرٌ هَائِجٌ، سَمَاءٌ صَافِيَةٌ، رَجُلٌ كَرِيمٌ</span>. Then put each pair in the three cases with the frames <span class="ar">هَذَا… / رَأَيْتُ… / نَظَرْتُ إِلَى…</span>` },
    { t: "Part 1 review", b: `You have now met every case and mood of Part 1. Open the <a href="#/irab">iʿrāb map</a> and say one example for each line aloud. Then take any short paragraph from the book and parse every word.` }
  ]
});
