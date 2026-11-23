// الدرس ٢٧ — الاسم المنقوص وأحوال إعرابه (PDF pp. 133–136)
COURSE.add({
  n: 27, pages: [133, 136], method: true,
  summary: "A declinable noun ending in a fixed yāʾ after a kasra is called manqūṣ: القَاضِي، النَّادِي، السَّاعِي. Its ḍamma and kasra are hidden on the yāʾ (too heavy), but its fatḥa is visible: رَأَيْتُ القَاضِيَ. Indefinite, it drops the yāʾ in rafʿ and jarr (قَاضٍ) but keeps it in naṣb (قَاضِيًا).",
  objectives: [
    "recognise the manqūṣ noun",
    "hide ḍamma and kasra on its yāʾ, show its fatḥa",
    "form its indefinite: قَاضٍ (rafʿ, jarr), قَاضِيًا (naṣb)",
    "parse it correctly"
  ],

  lesson: [
    { id: "what", t: "Nouns that end in -ī", ar: "ما الاسم المنقوص؟", pos: "case endings", pages: "133–134",
      b: `<p><span class="ar">القَاضِي</span> (the judge), <span class="ar">النَّادِي</span> (the club), <span class="ar">الرَّاعِي</span> (the shepherd), <span class="ar">السَّاعِي</span> (the messenger): each ends in yāʾ after a kasra. Saying <i>al-qāḍiyu</i> or <i>al-qāḍiyi</i> is heavy, so the ḍamma and kasra are hidden. But <i>al-qāḍiya</i> is easy, so the fatḥa <b>shows</b>.</p>`,
      widget: "transform",
      wd: { title: "Definite and indefinite in three cases", sets: [
        { base: ["حَكَمَ القَاضِي", "The judge ruled."], baseLabel: "rafʿ (hidden)", ops: [["naṣb", "احْتَرَمْنَا القَاضِ[[يَ]]", "We respected the judge.", "Visible fatḥa."], ["jarr", "ذَهَبْتُ إِلَى القَاضِي", "I went to the judge.", "Hidden kasra."]] },
        { base: ["حَكَمَ [[قَاضٍ]]", "A judge ruled."], baseLabel: "indef. rafʿ", ops: [["indef. naṣb", "رَأَيْتُ [[قَاضِيًا]]", "I saw a judge.", "The yāʾ comes back with -an."], ["indef. jarr", "ذَهَبْتُ إِلَى [[قَاضٍ]]", "I went to a judge.", "The yāʾ drops; tanwīn -in on the ض."]] }
      ] },
      rule: `<p><span class="ar">المَنْقُوصُ: كُلُّ اسْمٍ مُعْرَبٍ آخِرُهُ يَاءٌ لَازِمَةٌ مَكْسُورٌ مَا قَبْلَهَا. تُقَدَّرُ الضَّمَّةُ وَالكَسْرَةُ عَلَى آخِرِهِ فِي حَالَتَيِ الرَّفْعِ وَالجَرِّ، أَمَّا النَّصْبُ فَيَكُونُ بِفَتْحَةٍ ظَاهِرَةٍ.</span></p>`,
      check: [["“I saw the shepherd”:", ["رَأَيْتُ الرَّاعِيَ", "رَأَيْتُ الرَّاعِي", "رَأَيْتُ الرَّاعِ"], 0, "", "رَأَيْتُ الرَّاعِيَ"]] },

    { id: "indef", t: "The disappearing yāʾ", ar: "حذف الياء مع التنوين", pos: "spelling", pages: "135",
      b: `<p>When the manqūṣ is indefinite and in rafʿ or jarr, the yāʾ drops and the tanwīn goes on the letter before: <span class="ar">قَاضٍ، نَادٍ، رَاعٍ، وَادٍ</span>. You met this already: <span class="ar">الجَوُّ صَافٍ</span>, <span class="ar">مُحَامٍ</span>. In naṣb the yāʾ stays: <span class="ar">قَاضِيًا، وَادِيًا</span>.</p>
        <table class="g"><tr><th></th><th>definite</th><th>indefinite</th></tr><tr><td>rafʿ</td><td><span class="ar">النَّادِي</span></td><td><span class="ar">نَادٍ</span></td></tr><tr><td>naṣb</td><td><span class="ar">النَّادِيَ</span></td><td><span class="ar">نَادِيًا</span></td></tr><tr><td>jarr</td><td><span class="ar">النَّادِي</span></td><td><span class="ar">نَادٍ</span></td></tr></table>`,
      check: [["“The weather is clear” (khabar indefinite):", ["الجَوُّ صَافٍ", "الجَوُّ صَافِي", "الجَوُّ صَافِيٌ"], 0, "", "الجَوُّ صَافٍ"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">حَكَمَ القَاضِي: القَاضِي فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ المُقَدَّرَةُ عَلَى اليَاءِ لِلثِّقَلِ.</span></p><p><span class="ar">رَأَيْتُ القَاضِيَ: مَفْعُولٌ بِهِ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ الظَّاهِرَةُ.</span></p></div>`,
      check: [["Sign of rafʿ in يَحْضُرُ المُحَامِي:", ["ضمة مقدرة على الياء للثقل", "ضمة ظاهرة"], 0, "", false]] }
  ],

  scenes: [
    { h: "الرَّاعِي وَالذِّئْبُ", en: "The shepherd and the wolf", pic: "🐺", lines: [
      ["", "كَانَ رَاعٍ يَرْعَى غَنَمَهُ فِي وَادٍ أَخْضَرَ.", "A shepherd was grazing his sheep in a green valley."],
      ["", "صَاحَ الرَّاعِي يَوْمًا: الذِّئْبُ! الذِّئْبُ!", "One day the shepherd shouted: wolf! wolf!"],
      ["", "جَاءَ أَهْلُ القَرْيَةِ، فَلَمْ يَجِدُوا ذِئْبًا، فَضَحِكَ الرَّاعِي.", "The villagers came but found no wolf, and the shepherd laughed."],
      ["", "وَفِي يَوْمٍ آخَرَ جَاءَ الذِّئْبُ حَقًّا، فَنَادَى الرَّاعِي، وَلَمْ يُصَدِّقْهُ أَحَدٌ.", "Another day the wolf really came; the shepherd called, and no one believed him."],
      ["", "فَتَعَلَّمَ الرَّاعِي أَنَّ الكَذِبَ لَا يَنْفَعُ.", "So the shepherd learnt that lying does no good."]],
      note: "رَاعٍ (indefinite rafʿ: yāʾ dropped), وَادٍ (indefinite jarr), الرَّاعِي (definite rafʿ: hidden ḍamma)." }
  ],

  vocab: [
    ["اسْمٌ مَنْقُوصٌ", "noun ending in -ī", "n.m", "", "grammar term", "", "Grammar words"],
    ["قَاضٍ", "judge", "n.m", "⚖️", "def. القَاضِي", "قُضَاةٌ", "Manqūṣ nouns"],
    ["رَاعٍ", "shepherd", "n.m", "🧑‍🌾", "def. الرَّاعِي", "رُعَاةٌ", "Manqūṣ nouns"],
    ["نَادٍ", "club", "n.m", "🏟️", "def. النَّادِي", "أَنْدِيَةٌ", "Manqūṣ nouns"],
    ["وَادٍ", "valley", "n.m", "🏞️", "def. الوَادِي", "أَوْدِيَةٌ", "Manqūṣ nouns"],
    ["مُحَامٍ", "lawyer", "n.m", "🧑‍💼", "def. المُحَامِي", "مُحَامُونَ", "Manqūṣ nouns"],
    ["سَاعٍ", "messenger, runner", "n.m", "🏃", "def. السَّاعِي", "سُعَاةٌ", "Manqūṣ nouns"],
    ["أَفْعًى", "snake (maqṣūr; plural is manqūṣ)", "n.f", "🐍", "", "أَفَاعٍ", "Others"],
    ["ذِئْبٌ", "wolf", "n.m", "🐺", "", "ذِئَابٌ", "Others"],
    ["غَنَمٌ", "sheep", "n.f", "🐑", "collective", "أَغْنَامٌ", "Others"],
    ["رَعَى", "to graze, tend", "v.", "", "يَرْعَى", "", "Others"],
    ["صَدَّقَ", "to believe", "v.", "", "يُصَدِّقُ", "", "Others"],
    ["نَفَعَ", "to benefit", "v.", "", "يَنْفَعُ", "", "Others"]
  ],

  exercises: [
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["احْتَرَمَ النَّاسُ ___", ["القَاضِيَ", "القَاضِي", "القَاضِ"], 0, ""], ["جَاءَ ___ (a lawyer)", ["مُحَامٍ", "مُحَامِي", "مُحَامِيًا"], 0, ""], ["سَكَنْتُ فِي ___ (a valley)", ["وَادٍ", "وَادِي", "وَادِيًا"], 0, ""], ["رَأَيْتُ ___ (a shepherd)", ["رَاعِيًا", "رَاعٍ", "رَاعِي"], 0, ""]] },
    { k: "irab", t: "عَلَامَةُ الإِعْرَابِ · Which sign?", cats: ["ضمة مقدرة", "فتحة ظاهرة", "كسرة مقدرة"], items: [["حَضَرَ [المُحَامِي].", "0", ""], ["قَابَلْتُ [المُحَامِيَ].", "1", ""], ["ذَهَبْتُ إِلَى [النَّادِي].", "2", ""], ["[السَّاعِي] نَشِيطٌ.", "0", ""]] },
    { k: "sort", t: "مقصور أم منقوص؟", cats: ["مقصور", "منقوص"], items: [["الفَتَى", "0", ""], ["القَاضِي", "1", ""], ["العَصَا", "0", ""], ["الوَادِي", "1", ""], ["الهُدَى", "0", ""], ["المُحَامِي", "1", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The fatḥa shows on the manqūṣ.", true, ""], ["قَاضِيٌ is the correct indefinite rafʿ.", false, "قَاضٍ"], ["The maqṣūr shows its fatḥa.", false, ""]] }
  ],

  drills: [
    ["The manqūṣ ends in…", ["yāʾ after kasra", "alif", "wāw"], 0, ""],
    ["Its visible sign is…", ["الفتحة", "الضمة", "الكسرة"], 0, ""],
    ["Indefinite rafʿ of النَّادِي:", ["نَادٍ", "نَادِي", "نَادِيٌ"], 0, ""],
    ["Indefinite naṣb of الوَادِي:", ["وَادِيًا", "وَادٍ", "وَادِيً"], 0, ""],
    ["Reason for hiding on the yāʾ:", ["الثقل", "التعذر"], 0, ""],
    ["الجَوُّ ___", ["صَافٍ", "صَافِي", "صَافِيًا"], 0, ""]
  ],

  comp: [["What was the shepherd's trick?", ["shouting “wolf” when there was none", "hiding the sheep", "sleeping"], 0, 0], ["What did he learn?", ["lying does no good", "wolves are kind", "villagers are lazy"], 0, 0]],

  cheat: `<h3>الاسم المنقوص</h3><div class="rule"><span class="ar">المَنْقُوصُ: آخِرُهُ يَاءٌ لَازِمَةٌ مَكْسُورٌ مَا قَبْلَهَا — الضمة والكسرة مقدرتان للثقل، والفتحة ظاهرة.</span></div>
    <table class="g"><tr><th></th><th>def.</th><th>indef.</th></tr><tr><td>rafʿ</td><td><span class="ar">القَاضِي</span></td><td><span class="ar">قَاضٍ</span></td></tr><tr><td>naṣb</td><td><span class="ar">القَاضِيَ</span></td><td><span class="ar">قَاضِيًا</span></td></tr><tr><td>jarr</td><td><span class="ar">القَاضِي</span></td><td><span class="ar">قَاضٍ</span></td></tr></table>`,
  mistakes: [["الجَوُّ صَافِي", "الجَوُّ صَافٍ", "Indefinite manqūṣ in rafʿ drops the yāʾ."], ["رَأَيْتُ القَاضِي", "رَأَيْتُ القَاضِيَ", "Show the fatḥa in naṣb."]],
  tips: [{ t: "Maqṣūr vs manqūṣ", b: `Maqṣūr (alif) hides <b>all three</b>; manqūṣ (yāʾ) hides <b>two</b> and shows the fatḥa. A quick mnemonic: the alif is too stiff for any vowel; the yāʾ can at least manage the light fatḥa.` }]
});
