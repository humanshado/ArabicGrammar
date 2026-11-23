// الدرس ٢٤ — الإعراب المحلي (PDF pp. 122–124)
COURSE.add({
  n: 24, pages: [122, 124], method: true,
  summary: "A fixed (mabnī) word can still do a job that normally requires rafʿ, naṣb, jarr or jazm — it just can't show it. Grammarians then say it is “in the place of” that state: فِي مَحَلِّ رَفْعٍ / نَصْبٍ / جَرٍّ / جَزْمٍ. This is iʿrāb by position (الإعراب المحلي).",
  objectives: [
    "understand “in the place of rafʿ / naṣb / jarr / jazm”",
    "parse fixed nouns (pronouns, demonstratives, question words) by their position",
    "parse a past verb as the result of إن (في محل جزم)",
    "combine both parts: what it is built on + its position"
  ],

  lesson: [
    { id: "idea", t: "A fixed word in a case slot", ar: "المبني في موضع الإعراب", pos: "case endings", pages: "122–123",
      b: `<p>Compare <span class="ar">الطَّالِبُ مُجْتَهِدٌ</span> with <span class="ar">هَذَا مُجْتَهِدٌ</span>. Both first words are the <b>mubtadaʾ</b>, which should be marfūʿ. <span class="ar">الطَّالِبُ</span> shows its ḍamma; <span class="ar">هَذَا</span> is fixed and cannot. So we say: <span class="ar">هَذَا</span> is built on sukūn, <b>in the place of rafʿ</b> (<span class="ar">فِي مَحَلِّ رَفْعٍ</span>) as mubtadaʾ. If you replaced it with a declinable word, that word would show ḍamma.</p>`,
      widget: "transform",
      wd: { title: "Swap test: replace the fixed word", sets: [
        { base: ["[[هَذَا]] مُجْتَهِدٌ", "This (one) is hard-working."], baseLabel: "fixed", ops: [["swap", "[[الطَّالِبُ]] مُجْتَهِدٌ", "The student is hard-working.", "ḍamma appears → هذا is in the place of rafʿ."]] },
        { base: ["رَأَيْتُ [[هَذَا]]", "I saw this."], baseLabel: "fixed", ops: [["swap", "رَأَيْتُ [[الطَّالِبَ]]", "I saw the student.", "fatḥa → in the place of naṣb."]] },
        { base: ["سَلَّمْتُ عَلَى [[هَذَا]]", "I greeted this one."], baseLabel: "fixed", ops: [["swap", "سَلَّمْتُ عَلَى [[الطَّالِبِ]]", "I greeted the student.", "kasra → in the place of jarr."]] },
        { base: ["إِنْ [[اجْتَهَدْتَ]] نَجَحْتَ", "If you work hard, you succeed."], baseLabel: "fixed past verbs", ops: [["swap", "إِنْ [[تَجْتَهِدْ]] [[تَنْجَحْ]]", "If you work hard you'll succeed.", "jazm appears → the past verbs after إن are in the place of jazm."]] }
      ] },
      rule: `<p><span class="ar">إِذَا وَقَعَتْ كَلِمَةٌ مَبْنِيَّةٌ فِي مَوْضِعٍ مِنْ مَوَاضِعِ الرَّفْعِ أَوِ النَّصْبِ أَوِ الجَرِّ أَوِ الجَزْمِ لَا يَتَغَيَّرُ آخِرُهَا، وَيُقَالُ إِنَّهَا فِي مَحَلِّ رَفْعٍ أَوْ نَصْبٍ أَوْ جَرٍّ أَوْ جَزْمٍ عَلَى حَسَبِ مَوْقِعِهَا فِي الجُمْلَةِ.</span></p><p>When a fixed word falls in a position of rafʿ, naṣb, jarr or jazm, its ending does not change; it is said to be in the place of rafʿ, naṣb, jarr or jazm according to its position.</p>`,
      check: [["In هُوَ نَشِيطٌ, هُوَ is…", ["مبني على الفتح في محل رفع مبتدأ", "مرفوع بالضمة"], 0, "", false]] },

    { id: "formula", t: "The two-part formula", ar: "صيغة الإعراب المحلي", pos: "case endings", pages: "123–124",
      b: `<div class="rule"><p><span class="ar">هَذَا: اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ.</span></p>
        <p><span class="ar">أَيْنَ: اسْمُ اسْتِفْهَامٍ مَبْنِيٌّ عَلَى الفَتْحِ فِي مَحَلِّ رَفْعٍ خَبَرٌ مُقَدَّمٌ.</span></p>
        <p><span class="ar">ـهُ (in رَأَيْتُهُ): ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ نَصْبٍ مَفْعُولٌ بِهِ.</span></p>
        <p><span class="ar">ـكَ (in كِتَابُكَ): ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الفَتْحِ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ.</span></p></div>
        <p>First say what it is built on (lesson 19), then what position it fills.</p>`,
      widget: "parse",
      wd: { title: "Which place does each fixed word fill?", legend: { raf: ["in the place of rafʿ", "في محل رفع"], nasb: ["in the place of naṣb", "في محل نصب"], jarr: ["in the place of jarr", "في محل جر"], other: ["declinable / particle", "غير ذلك"] }, sents: [
        { en: "He visited us yesterday.", w: [["هُوَ", "raf", "Mubtadaʾ: fixed on fatḥa, in the place of rafʿ."], ["زَارَنَا", "nasb", "زارَ + نا (us): the attached نا is the object, in the place of naṣb."], ["أَمْسِ", "nasb", "Adverb of time (lesson 51): fixed on kasra, in the place of naṣb."]] },
        { en: "Where is your book?", w: [["أَيْنَ", "raf", "Khabar placed first: fixed on fatḥa, in the place of rafʿ."], ["كِتَابُكَ", "other", "Mubtadaʾ (declinable, ḍamma). Its ـكَ is in the place of jarr (lesson 37)."]] },
        { en: "I greeted him.", w: [["سَلَّمْتُ", "other", "Verb + doer ـتُ (in the place of rafʿ)."], ["عَلَيْهِ", "jarr", "على + هِ: the pronoun is in the place of jarr."]] }
      ] },
      check: [["In ذَهَبْتُ إِلَيْهِ, the ـهِ is…", ["في محل جر", "في محل نصب"], 0, "After a preposition.", false]] }
  ],

  scenes: [
    { h: "مَنْ هَذَا؟", en: "Who's this?", pic: "🖼️", lines: [
      ["سَلْمَى", "مَنْ هَذَا فِي الصُّورَةِ؟", "Who is this in the picture?"],
      ["لَيْلَى", "هَذَا جَدِّي، وَهَذِهِ جَدَّتِي.", "This is my grandfather, and this is my grandmother."],
      ["سَلْمَى", "أَيْنَ يَسْكُنَانِ؟", "Where do they live?"],
      ["لَيْلَى", "يَسْكُنَانِ فِي القَرْيَةِ، وَنَحْنُ نَزُورُهُمَا كُلَّ صَيْفٍ.", "They live in the village, and we visit them every summer."],
      ["سَلْمَى", "إِنْ زُرْتُمَاهُمَا هَذَا العَامَ فَخُذَانِي مَعَكُمَا!", "If you two visit them this year, take me with you!"]],
      note: "Fixed words in case slots: مَنْ (rafʿ), هَذَا / هَذِهِ (rafʿ), أَيْنَ (rafʿ, khabar first), نَحْنُ (rafʿ), هُمَا in نَزُورُهُمَا (naṣb), زُرْتُمَا after إن (jazm)." }
  ],

  vocab: [
    ["فِي مَحَلِّ رَفْعٍ", "in the place of rafʿ", "", "", "", "", "Grammar words"],
    ["فِي مَحَلِّ نَصْبٍ", "in the place of naṣb", "", "", "", "", "Grammar words"],
    ["فِي مَحَلِّ جَرٍّ", "in the place of jarr", "", "", "", "", "Grammar words"],
    ["فِي مَحَلِّ جَزْمٍ", "in the place of jazm", "", "", "", "", "Grammar words"],
    ["مَحَلٌّ", "place, position", "n.m", "", "", "مَحَالُّ", "Grammar words"],
    ["جَدٌّ", "grandfather", "n.m", "👴", "", "أَجْدَادٌ", "Family"],
    ["أَخَذَ", "to take", "v.", "", "يَأْخُذُ · خُذْ", "", "Verbs"]
  ],

  exercises: [
    { k: "irab", t: "فِي أَيِّ مَحَلٍّ؟ · Which place?", cats: ["في محل رفع", "في محل نصب", "في محل جر", "في محل جزم"], items: [
      ["[هَذَا] كِتَابٌ.", "0", "mubtadaʾ"], ["قَرَأْتُ [هَذَا] الكِتَابَ.", "1", "object"], ["نَظَرْتُ إِلَى [هَذَا].", "2", "after a preposition"], ["[أَنْتَ] مُجْتَهِدٌ.", "0", ""], ["زُرْتُ[هُ].", "1", "object pronoun"], ["لِ[ي] كِتَابٌ.", "2", ""], ["إِنْ [حَضَرْتَ] أَكْرَمْتُكَ.", "3", "condition verb"]] },
    { k: "mcq", t: "اِخْتَرِ الإِعْرَابَ · Choose the parsing", items: [
      ["هُوَ in هُوَ طَبِيبٌ:", ["ضمير مبني على الفتح في محل رفع مبتدأ", "ضمير مرفوع بالضمة"], 0, ""], ["ـكَ in رَأَيْتُكَ:", ["ضمير مبني على الفتح في محل نصب مفعول به", "في محل رفع فاعل"], 0, "ـتُ is the doer."], ["ـتُ in رَأَيْتُكَ:", ["ضمير مبني على الضم في محل رفع فاعل", "في محل نصب"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["A fixed word can be in the place of rafʿ.", true, ""], ["Fixed words change their ending in case positions.", false, ""], ["A past verb after إن is in the place of jazm.", true, ""]] }
  ],

  drills: [
    ["هَذَا in هَذَا جَمِيلٌ is in the place of…", ["رفع", "نصب", "جر"], 0, ""],
    ["ـهُ in أَكْرَمْتُهُ is in the place of…", ["نصب", "رفع", "جر"], 0, ""],
    ["ـهِ in مَرَرْتُ بِهِ is in the place of…", ["جر", "نصب"], 0, ""],
    ["Which word uses iʿrāb by position?", ["نَحْنُ in نَحْنُ هُنَا", "الوَلَدُ in الوَلَدُ هُنَا"], 0, ""],
    ["The swap test means…", ["replace the fixed word with a declinable one and see its ending", "change the verb"], 0, ""],
    ["The ـتُ in كَتَبْتُ is…", ["في محل رفع فاعل", "في محل نصب"], 0, ""]
  ],

  comp: [["Who is in the picture?", ["Layla's grandparents", "her parents", "her teacher"], 0, 0], ["When does Layla's family visit them?", ["every summer", "every week", "never"], 0, 0]],

  cheat: `<h3>الإعراب المحلي</h3><div class="rule"><span class="ar">مَبْنِيٌّ عَلَى … فِي مَحَلِّ رَفْعٍ / نَصْبٍ / جَرٍّ / جَزْمٍ + الوظيفة</span></div>
    <p class="ar">هَذَا: اسم إشارة مبني على السكون في محل رفع مبتدأ · رَأَيْتُهُ: الهاء في محل نصب مفعول به · لَهُ: الهاء في محل جر</p><p>Swap test: put a declinable word in its place and see which ending it would take.</p>`,
  mistakes: [["هَذَا: مُبْتَدَأٌ مَرْفُوعٌ بِالضَّمَّةِ", "هَذَا: مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "Fixed words have no visible case sign."]],
  tips: [{ t: "Parse pronouns", b: `Pronouns are the most common fixed words. In every sentence you read, find the attached pronouns (<span class="ar">ـهُ، ـهَا، ـكَ، ـنَا، ـتُ</span>) and say which place each fills.` }]
});
