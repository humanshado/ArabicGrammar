// الدرس ٣٨ — الأسماء الخمسة وإعرابها (PDF pp. 185–188)
COURSE.add({
  n: 38, pages: [185, 188], method: true,
  summary: "Five nouns — أَبٌ (father)، أَخٌ (brother)، حَمٌ (in-law)، فُو (mouth)، ذُو (possessor of) — show their case with long vowels when they are muḍāf (to anything but “my”): wāw in rafʿ (جَاءَ أَبُوكَ), alif in naṣb (رَأَيْتُ أَبَاكَ), yāʾ in jarr (سَلَّمْتُ عَلَى أَبِيكَ).",
  objectives: ["list the five nouns", "inflect them with و / ا / ي when muḍāf", "know they take ordinary vowels when not muḍāf or with “my”", "use ذُو / ذَا / ذِي (having)"],

  lesson: [
    { id: "five", t: "Five nouns with long-vowel endings", ar: "الأسماء الخمسة", pos: "case endings", pages: "185–186",
      widget: "table",
      wd: { title: "Rafʿ · naṣb · jarr", head: ["noun", "rafʿ (و)", "naṣb (ا)", "jarr (ي)"], rows: [
        ["أَب father", "أَبُ[[و]]كَ", "أَبَ[[ا]]كَ", "أَبِ[[ي]]كَ"], ["أَخ brother", "أَخُ[[و]]كَ", "أَخَ[[ا]]كَ", "أَخِ[[ي]]كَ"], ["حَم in-law", "حَمُ[[و]]هَا", "حَمَ[[ا]]هَا", "حَمِ[[ي]]هَا"], ["فُو mouth", "فُ[[و]]كَ", "فَ[[ا]]كَ", "فِ[[ي]]كَ"], ["ذُو having", "ذُ[[و]] مَالٍ", "ذَ[[ا]] مَالٍ", "ذِ[[ي]] مَالٍ"]] },
      rule: `<p><span class="ar">الأَسْمَاءُ الخَمْسَةُ: أَبٌ، وَأَخٌ، وَحَمٌ، وَفُو، وَذُو. تُرْفَعُ بِالوَاوِ، وَتُنْصَبُ بِالأَلِفِ، وَتُجَرُّ بِاليَاءِ، بِشَرْطِ أَنْ تَكُونَ مُضَافَةً لِغَيْرِ يَاءِ المُتَكَلِّمِ.</span></p>`,
      check: [["سَافَرَ ___ (your brother)", ["أَخُوكَ", "أَخَاكَ", "أَخِيكَ"], 0, "", "سَافَرَ أَخُوكَ"]] },

    { id: "conditions", t: "When the rule applies", ar: "شروط إعرابها بالحروف", pos: "case endings", pages: "186–187",
      b: `<ul><li><b>Muḍāf</b>: alone they take ordinary vowels: <span class="ar">هَذَا أَبٌ، رَأَيْتُ أَبًا، سَلَّمْتُ عَلَى أَبٍ</span>.</li>
        <li><b>Not to “my”</b>: <span class="ar">أَبِي</span> stays the same in all cases (hidden vowels): <span class="ar">جَاءَ أَبِي، رَأَيْتُ أَبِي</span>.</li>
        <li><b>Singular</b>: duals and plurals inflect normally: <span class="ar">آبَاءٌ، إِخْوَةٌ</span>.</li>
        <li><span class="ar">ذُو</span> is always followed by a noun meaning a quality: <span class="ar">ذُو خُلُقٍ</span> (of good character), <span class="ar">ذُو عِلْمٍ</span> (learned).</li></ul>`,
      check: [["رَأَيْتُ ___ (my father)", ["أَبِي", "أَبَايَ", "أَبَاكَ"], 0, "", "رَأَيْتُ أَبِي"]] }
  ],

  scenes: [{ h: "أُسْرَةُ صَدِيقِي", en: "My friend's family", pic: "👨‍👩‍👦", lines: [
    ["أَنَا", "مَنْ هَذَا يَا كَرِيمُ؟", "Who's this, Karim?"],
    ["كَرِيمٌ", "هَذَا أَبُو مُحَمَّدٍ، أَخُو أَبِي.", "This is Abu Muhammad, my father's brother."],
    ["أَنَا", "أَعْرِفُ أَبَا مُحَمَّدٍ! إِنَّهُ ذُو خُلُقٍ كَرِيمٍ.", "I know Abu Muhammad! He has a noble character."],
    ["كَرِيمٌ", "نَعَمْ، وَأَنَا أُحِبُّ أَخَاهُ الصَّغِيرَ أَيْضًا.", "Yes, and I love his little brother too."],
    ["أَنَا", "سَلِّمْ لِي عَلَى أَبِيكَ وَأَخِيكَ.", "Give my greetings to your father and brother."]],
    note: "أَبُو / أَخُو (rafʿ: و) · أَبَا / أَخَاهُ (naṣb: ا) · أَبِيكَ / أَخِيكَ (jarr: ي) · ذُو خُلُقٍ." }],

  vocab: [["أَبٌ", "father", "n.m", "👨", "أَبُو، أَبَا، أَبِي", "آبَاءٌ", "Five nouns"], ["أَخٌ", "brother", "n.m", "👦", "أَخُو، أَخَا، أَخِي", "إِخْوَةٌ", "Five nouns"], ["حَمٌ", "father-in-law (of a wife)", "n.m", "👴", "حَمُو، حَمَا، حَمِي", "أَحْمَاءٌ", "Five nouns"], ["فُو / فَمٌ", "mouth", "n.m", "👄", "فُو، فَا، فِي", "", "Five nouns"], ["ذُو", "possessor of, having", "n.m", "", "ذُو، ذَا، ذِي", "", "Five nouns"], ["مَالٌ", "wealth, money", "n.m", "💰", "", "أَمْوَالٌ", "Words"]],

  exercises: [
    { k: "mcq", t: "اِخْتَرْ", items: [["احْتَرِمْ ___", ["أَبَاكَ", "أَبُوكَ", "أَبِيكَ"], 0, "object"], ["سَلَّمْتُ عَلَى ___", ["أَخِيكَ", "أَخَاكَ"], 0, ""], ["حَضَرَ ___ عِلْمٍ", ["ذُو", "ذَا", "ذِي"], 0, ""], ["إِنَّ ___ كَرِيمٌ", ["أَبَاكَ", "أَبُوكَ"], 0, "ism of inna"]] },
    { k: "irab", t: "عَلَامَةُ الإِعْرَابِ", cats: ["مرفوع بالواو", "منصوب بالألف", "مجرور بالياء"], items: [["[أَخُوكَ] طَبِيبٌ.", "0", ""], ["زُرْتُ [أَخَاكَ].", "1", ""], ["ذَهَبْتُ مَعَ [أَخِيكَ].", "2", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The five nouns use و ا ي only when muḍāf.", true, ""], ["رَأَيْتُ أَبَايَ is correct.", false, "أَبِي"]] }
  ],
  drills: [["The five nouns:", ["أب، أخ، حم، فو، ذو", "أب، أم، أخ، أخت، ابن"], 0, ""], ["Rafʿ sign:", ["الواو", "الضمة"], 0, ""], ["Naṣb sign:", ["الألف", "الفتحة"], 0, ""], ["Jarr sign:", ["الياء", "الكسرة"], 0, ""]],
  comp: [["Who is Abu Muhammad?", ["Karim's father's brother", "Karim's father", "a teacher"], 0, 0]],
  cheat: `<h3>الأسماء الخمسة</h3><p class="ar">أَبٌ، أَخٌ، حَمٌ، فُو، ذُو</p><div class="rule"><span class="ar">تُرْفَعُ بِالوَاوِ، وَتُنْصَبُ بِالأَلِفِ، وَتُجَرُّ بِاليَاءِ — إِذَا أُضِيفَتْ لِغَيْرِ يَاءِ المُتَكَلِّمِ.</span></div><p class="ar">جَاءَ أَبُوكَ · رَأَيْتُ أَبَاكَ · سَلَّمْتُ عَلَى أَبِيكَ</p>`,
  mistakes: [["رَأَيْتُ أَبُوكَ", "رَأَيْتُ أَبَاكَ", "Naṣb → alif."], ["هَذَا أَبُو", "هَذَا أَبٌ", "Not muḍāf → normal vowels."]],
  tips: [{ t: "Kunya names", b: `Arab nicknames like <span class="ar">أَبُو بَكْرٍ، أَبُو مُحَمَّدٍ</span> are five-noun iḍāfas: <span class="ar">رَأَيْتُ أَبَا بَكْرٍ، سَلَّمْتُ عَلَى أَبِي بَكْرٍ</span>.` }]
});
