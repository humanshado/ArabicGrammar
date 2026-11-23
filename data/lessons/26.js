// الدرس ٢٦ — الاسم المقصور وأحوال إعرابه (PDF pp. 130–132)
COURSE.add({
  n: 26, pages: [130, 132], method: true,
  summary: "A declinable noun ending in a fixed alif (ا or ى) is called maqṣūr: الفَتَى، العَصَا، المُسْتَشْفَى، مُصْطَفَى. Its alif can carry no vowel, so all three case signs are hidden on it: جَاءَ الفَتَى، رَأَيْتُ الفَتَى، سَلَّمْتُ عَلَى الفَتَى. Indefinite, it takes tanwīn -an in every case: فَتًى، عَصًا.",
  objectives: [
    "recognise the maqṣūr noun",
    "know that all three case vowels are hidden on its alif",
    "write and say its indefinite form: فَتًى، عَصًا، مُسْتَشْفًى",
    "parse it: … وعلامة رفعه الضمة المقدرة على الألف للتعذر"
  ],

  lesson: [
    { id: "what", t: "Nouns that end in alif", ar: "ما الاسم المقصور؟", pos: "case endings", pages: "130–131",
      b: `<p>In <span class="ar">الفَتَى شُجَاعٌ</span> (the young man is brave), the doer-like mubtadaʾ should show a ḍamma — but <span class="ar">الفَتَى</span> ends in alif (<span class="ar">ى</span>), which cannot carry any vowel. Such a noun is <b>maqṣūr</b> (<span class="ar">مَقْصُور</span>, “shortened”). All its case signs are <b>hidden</b>:</p>`,
      widget: "transform",
      wd: { title: "Three cases, no visible change", sets: [
        { base: ["جَاءَ الفَتَى", "The young man came."], baseLabel: "rafʿ (hidden ḍamma)", ops: [["naṣb", "رَأَيْتُ الفَتَى", "I saw the young man.", "Hidden fatḥa."], ["jarr", "سَلَّمْتُ عَلَى الفَتَى", "I greeted the young man.", "Hidden kasra."], ["indefinite", "جَاءَ [[فَتًى]] · رَأَيْتُ [[فَتًى]] · سَلَّمْتُ عَلَى [[فَتًى]]", "a young man …", "Indefinite maqṣūr: always -an (fatan), written ـًى or ـًا."]] }
      ] },
      rule: `<p><span class="ar">المَقْصُورُ: كُلُّ اسْمٍ مُعْرَبٍ آخِرُهُ أَلِفٌ لَازِمَةٌ. وَتُقَدَّرُ عَلَى آخِرِهِ حَرَكَاتُ الإِعْرَابِ الثَّلَاثُ.</span></p><p>The maqṣūr is any declinable noun ending in a fixed alif. All three case vowels are estimated (hidden) on its end.</p>`,
      check: [["Which is maqṣūr?", ["العَصَا", "القَاضِي", "الكِتَابُ"], 0, "", false]] },

    { id: "examples", t: "Common maqṣūr nouns", ar: "أمثلة", pos: "spelling", pages: "131–132",
      b: `<table class="g"><tr><th>definite</th><th>indefinite</th><th>meaning</th></tr>
        <tr><td><span class="ar">الفَتَى</span></td><td><span class="ar">فَتًى</span></td><td>young man</td></tr>
        <tr><td><span class="ar">العَصَا</span></td><td><span class="ar">عَصًا</span></td><td>stick</td></tr>
        <tr><td><span class="ar">المُسْتَشْفَى</span></td><td><span class="ar">مُسْتَشْفًى</span></td><td>hospital</td></tr>
        <tr><td><span class="ar">الهُدَى</span></td><td><span class="ar">هُدًى</span></td><td>guidance</td></tr>
        <tr><td><span class="ar">المَقْهَى</span></td><td><span class="ar">مَقْهًى</span></td><td>café</td></tr>
        <tr><td><span class="ar">لَيْلَى، مُصْطَفَى، سَلْمَى</span></td><td>—</td><td>names</td></tr></table>
        <p>Some end in <span class="ar">ى</span> without tanwīn ever: <span class="ar">ذِكْرَى</span> (memory), <span class="ar">كُبْرَى</span> (biggest, f.), <span class="ar">حَلْوَى</span> (sweets) — these feminine forms are diptotes (lesson 70).</p>`,
      check: [["“A stick” (indefinite):", ["عَصًا", "عَصَا", "عَصَاةٌ"], 0, "", "عَصًا"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">جَاءَ الفَتَى: الفَتَى فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ المُقَدَّرَةُ عَلَى الأَلِفِ مَنَعَ مِنْ ظُهُورِهَا التَّعَذُّرُ.</span></p><p>Same pattern for naṣb (<span class="ar">الفَتْحَةُ المُقَدَّرَةُ</span>) and jarr (<span class="ar">الكَسْرَةُ المُقَدَّرَةُ</span>).</p></div>`,
      check: [["Parse المُسْتَشْفَى in ذَهَبْتُ إِلَى المُسْتَشْفَى:", ["اسم مجرور وعلامة جره الكسرة المقدرة على الألف", "اسم مجرور بالكسرة الظاهرة"], 0, ""]] }
  ],

  scenes: [
    { h: "الفَتَى وَالعَصَا", en: "The young man and the stick", pic: "🦯", lines: [
      ["", "رَأَى مُصْطَفَى شَيْخًا يَمْشِي بِعَصًا.", "Mustafa saw an old man walking with a stick."],
      ["", "سَقَطَتِ العَصَا مِنْ يَدِ الشَّيْخِ.", "The stick fell from the old man's hand."],
      ["", "أَسْرَعَ الفَتَى، وَرَفَعَ العَصَا، وَأَعْطَاهَا لِلشَّيْخِ.", "The young man hurried, picked up the stick and gave it to the old man."],
      ["", "قَالَ الشَّيْخُ: بَارَكَ اللهُ فِيكَ يَا فَتَى!", "The old man said: God bless you, young man!"],
      ["", "ثُمَّ مَشَيَا مَعًا إِلَى المُسْتَشْفَى.", "Then they walked together to the hospital."]],
      note: "مُصْطَفَى (doer), العَصَا (doer, then object), الفَتَى (doer), يَا فَتَى, المُسْتَشْفَى (majrūr) — no visible change, all hidden." }
  ],

  vocab: [
    ["اسْمٌ مَقْصُورٌ", "noun ending in alif", "n.m", "", "grammar term", "", "Grammar words"],
    ["فَتًى", "young man", "n.m", "🧑", "def. الفَتَى", "فِتْيَانٌ", "Maqṣūr nouns"],
    ["عَصًا", "stick", "n.f", "🦯", "def. العَصَا", "عِصِيٌّ", "Maqṣūr nouns"],
    ["مُسْتَشْفًى", "hospital", "n.m", "🏥", "def. المُسْتَشْفَى", "مُسْتَشْفَيَاتٌ", "Maqṣūr nouns"],
    ["هُدًى", "guidance", "n.m", "🧭", "def. الهُدَى", "", "Maqṣūr nouns"],
    ["مَقْهًى", "café", "n.m", "☕", "def. المَقْهَى", "مَقَاهٍ", "Maqṣūr nouns"],
    ["مَبْنًى", "building", "n.m", "🏢", "def. المَبْنَى", "مَبَانٍ", "Maqṣūr nouns"],
    ["مَرْعًى", "pasture", "n.m", "🐑", "def. المَرْعَى", "مَرَاعٍ", "Maqṣūr nouns"],
    ["ذِكْرَى", "memory, anniversary", "n.f", "📸", "never tanwīn", "ذِكْرَيَاتٌ", "Maqṣūr nouns"],
    ["شَيْخٌ", "old man", "n.m", "👴", "", "شُيُوخٌ", "Others"],
    ["رَفَعَ", "to lift", "v.", "", "يَرْفَعُ", "", "Others"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Maqṣūr or not?", cats: ["مقصور", "ليس مقصورًا"], items: [["العَصَا", "0", ""], ["الهُدَى", "0", ""], ["القَاضِي", "1", "ends in yāʾ: manqūṣ (next lesson)"], ["مُسْتَشْفًى", "0", ""], ["دَعَا", "1", "a verb"], ["المَقْهَى", "0", ""], ["الكُرْسِيُّ", "1", ""]] },
    { k: "irab", t: "مَا عَلَامَةُ إِعْرَابِهِ؟ · Its sign?", cats: ["ضمة مقدرة", "فتحة مقدرة", "كسرة مقدرة"], items: [["جَاءَ [الفَتَى].", "0", ""], ["ذَهَبْتُ إِلَى [المُسْتَشْفَى].", "2", ""], ["حَمَلَ الشَّيْخُ [العَصَا].", "1", ""], ["[المَقْهَى] مُزْدَحِمٌ.", "0", ""]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [["رَأَيْتُ ___ (a young man)", ["فَتًى", "فَتًا", "فَتَى"], 0, ""], ["Is the alif of العصا ever vowelled?", ["no", "yes, in naṣb"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["All case vowels are hidden on the maqṣūr.", true, ""], ["مُصْطَفَى shows a ḍamma as doer.", false, ""]] }
  ],

  drills: [
    ["The maqṣūr ends in…", ["a fixed alif", "a yāʾ", "a hamza"], 0, ""],
    ["Its case signs are…", ["all hidden", "all visible", "visible in naṣb"], 0, ""],
    ["Reason for hiding:", ["التعذر (impossible)", "الثقل (heavy)"], 0, ""],
    ["Indefinite of المَقْهَى:", ["مَقْهًى", "مَقْهَى", "مَقْهٍ"], 0, ""],
    ["Which is NOT maqṣūr?", ["المُحَامِي", "الفَتَى", "العَصَا"], 0, "ends in yāʾ"],
    ["سَلَّمْتُ عَلَى لَيْلَى — sign of jarr:", ["كسرة مقدرة", "فتحة"], 0, ""]
  ],

  comp: [["What fell from the old man's hand?", ["his stick", "his hat", "his bag"], 0, 0], ["Where did they walk to?", ["the hospital", "the café", "the mosque"], 0, 0]],

  cheat: `<h3>الاسم المقصور</h3><div class="rule"><span class="ar">المَقْصُورُ: اسْمٌ مُعْرَبٌ آخِرُهُ أَلِفٌ لَازِمَةٌ — تُقَدَّرُ عَلَيْهِ الحَرَكَاتُ الثَّلَاثُ لِلتَّعَذُّرِ.</span></div><p class="ar">جَاءَ الفَتَى · رَأَيْتُ الفَتَى · سَلَّمْتُ عَلَى الفَتَى · فَتًى، عَصًا، مُسْتَشْفًى</p>`,
  mistakes: [["رَأَيْتُ الفَتَا", "رَأَيْتُ الفَتَى", "The alif never changes."], ["عَصَى (indefinite)", "عَصًا", "Write tanwīn -an on indefinite maqṣūr."]],
  tips: [{ t: "Spot them by their ending", b: `Nouns on the patterns <span class="ar">مَفْعًى</span> (places: <span class="ar">مَقْهًى، مَرْعًى، مَبْنًى</span>) and <span class="ar">مُسْتَفْعًى</span> are often maqṣūr. Notice them when you read.` }]
});
