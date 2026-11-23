// الدرس ٣١ — الأفعال الخمسة وإعرابها (PDF pp. 156–161)
COURSE.add({
  n: 31, pages: [156, 161], method: true,
  summary: "The “five verbs” are present verbs ending in an alif of two, a wāw of the group or a yāʾ of the addressed woman, followed by nūn: يَكْتُبَانِ، تَكْتُبَانِ، يَكْتُبُونَ، تَكْتُبُونَ، تَكْتُبِينَ. Their rafʿ is shown by keeping the nūn; their naṣb and jazm by dropping it: لَنْ يَكْتُبُوا، لَمْ تَكْتُبِي.",
  objectives: [
    "recognise the five verbs",
    "use the nūn as the sign of rafʿ",
    "drop the nūn in naṣb and jazm",
    "write the alif after the wāw of the group: لَنْ يَكْتُبُوا"
  ],

  lesson: [
    { id: "five", t: "Which are the five verbs?", ar: "ما الأفعال الخمسة؟", pos: "conjugation", pages: "156–157",
      widget: "table",
      wd: { title: "The five verbs of كَتَبَ", head: ["subject", "form", "ends in"], rows: [
        ["هُمَا they two", "يَكْتُبَا[[نِ]]", "alif + nūn"], ["أَنْتُمَا you two", "تَكْتُبَا[[نِ]]", "alif + nūn"],
        ["هُمْ they (m)", "يَكْتُبُو[[نَ]]", "wāw + nūn"], ["أَنْتُمْ you (m pl)", "تَكْتُبُو[[نَ]]", "wāw + nūn"],
        ["أَنْتِ you (f)", "تَكْتُبِي[[نَ]]", "yāʾ + nūn"]] },
      after: `<p>Learn them as the pattern <span class="ar">يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ</span>.</p>`,
      check: [["Which is one of the five verbs?", ["تَلْعَبِينَ", "تَلْعَبُ", "يَلْعَبْنَ"], 0, "", false]] },

    { id: "signs", t: "The nūn is the case sign", ar: "علامات إعرابها", pos: "case endings", pages: "157–159",
      widget: "transform",
      wd: { title: "Rafʿ: keep the nūn · naṣb/jazm: drop it", sets: [
        { base: ["الأَوْلَادُ يَلْعَبُو[[نَ]]", "The boys play."], baseLabel: "rafʿ: ثبوت النون", ops: [["naṣb (لَنْ)", "الأَوْلَادُ لَنْ يَلْعَبُو[[ا]]", "The boys won't play.", "Nūn dropped; an alif is written after the wāw."], ["jazm (لَمْ)", "الأَوْلَادُ لَمْ يَلْعَبُو[[ا]]", "The boys didn't play."]] },
        { base: ["أَنْتِ تَكْتُبِي[[نَ]]", "You (f) write."], baseLabel: "rafʿ", ops: [["naṣb (أَنْ)", "أُرِيدُ أَنْ تَكْتُبِي", "I want you (f) to write."], ["jazm (لَا)", "لَا تَكْتُبِي عَلَى الجِدَارِ", "Don't write on the wall."]] },
        { base: ["الطَّالِبَانِ يَنْجَحَا[[نِ]]", "The two students succeed."], baseLabel: "rafʿ", ops: [["naṣb (كَيْ)", "يَجْتَهِدُ الطَّالِبَانِ كَيْ يَنْجَحَا", "The two students work hard so that they succeed."]] }
      ] },
      rule: `<p><span class="ar">الأَفْعَالُ الخَمْسَةُ تُرْفَعُ بِثُبُوتِ النُّونِ، وَتُنْصَبُ وَتُجْزَمُ بِحَذْفِهَا.</span></p>`,
      check: [["“You (pl) won't fail”:", ["لَنْ تَرْسُبُوا", "لَنْ تَرْسُبُونَ"], 0, "", "لَنْ تَرْسُبُوا"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings", pages: "159–161",
      b: `<div class="rule"><p><span class="ar">يَلْعَبُونَ: فِعْلٌ مُضَارِعٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ ثُبُوتُ النُّونِ لِأَنَّهُ مِنَ الأَفْعَالِ الخَمْسَةِ، وَالوَاوُ فَاعِلٌ.</span></p>
        <p><span class="ar">لَمْ يَلْعَبُوا: فِعْلٌ مُضَارِعٌ مَجْزُومٌ وَعَلَامَةُ جَزْمِهِ حَذْفُ النُّونِ…</span></p></div>`,
      warn: `Don't confuse the five verbs with <span class="ar">يَلْعَبْنَ</span> (women): there the nūn is the subject pronoun and never drops: <span class="ar">لَنْ يَلْعَبْنَ</span> (lesson 23).`,
      check: [["Sign of naṣb in لَنْ يَتَأَخَّرَا:", ["حذف النون", "الفتحة"], 0, "", false]] }
  ],

  scenes: [
    { h: "الأَخَوَانِ", en: "The two brothers", pic: "👬", lines: [
      ["الأَبُ", "يَا وَلَدَيَّ، هَلْ تُذَاكِرَانِ دُرُوسَكُمَا؟", "My two sons, are you studying your lessons?"],
      ["أَحْمَدُ", "نَعَمْ، نُذَاكِرُ، وَلَنْ نَلْعَبَ قَبْلَ أَنْ نَنْتَهِيَ.", "Yes, we're studying, and we won't play before we finish."],
      ["الأَبُ", "وَأَنْتِ يَا هِنْدُ، لِمَاذَا لَا تَكْتُبِينَ؟", "And you, Hind, why aren't you writing?"],
      ["هِنْدٌ", "لَمْ أَجِدْ قَلَمِي يَا أَبِي.", "I couldn't find my pen, father."],
      ["الأَبُ", "خُذِي قَلَمِي، وَلَا تَتَأَخَّرِي فِي النَّوْمِ.", "Take my pen, and don't stay up late."],
      ["الأَبُ", "يَا أَوْلَادُ، إِنْ تَجْتَهِدُوا تَنْجَحُوا.", "Children, if you work hard you'll succeed."]],
      note: "Rafʿ with nūn: تُذَاكِرَانِ، تَكْتُبِينَ · jazm without nūn: لَا تَتَأَخَّرِي، تَجْتَهِدُوا، تَنْجَحُوا." }
  ],

  vocab: [
    ["الأَفْعَالُ الخَمْسَةُ", "the five verbs", "n.f", "", "", "", "Grammar words"],
    ["ثُبُوتُ النُّونِ", "keeping the nūn", "n.m", "", "sign of rafʿ", "", "Grammar words"],
    ["حَذْفُ النُّونِ", "dropping the nūn", "n.m", "", "sign of naṣb/jazm", "", "Grammar words"],
    ["اِنْتَهَى", "to finish", "v.", "", "يَنْتَهِي", "", "Verbs"],
    ["جِدَارٌ", "wall", "n.m", "🧱", "", "جُدْرَانٌ", "Nouns"],
    ["نَوْمٌ", "sleep", "n.m", "😴", "", "", "Nouns"],
    ["لِمَاذَا", "why?", "n.", "", "", "", "Nouns"]
  ],

  exercises: [
    { k: "gap", t: "أَدْخِلِ الحَرْفَ · Add the particle", en: "Rewrite the verb after the particle.", items: [
      ["يَلْعَبُونَ ← لَنْ ___", "يَلْعَبُوا|يلعبوا"], ["تَكْتُبِينَ ← لَمْ ___", "تَكْتُبِي|تكتبي"], ["يَنْجَحَانِ ← كَيْ ___", "يَنْجَحَا|ينجحا"], ["تَتَأَخَّرُونَ ← لَا ___", "تَتَأَخَّرُوا|تتاخروا"], ["تَذْهَبَانِ ← أَنْ ___", "تَذْهَبَا|تذهبا"]] },
    { k: "irab", t: "مَرْفُوعٌ أَمْ مَنْصُوبٌ أَمْ مَجْزُومٌ؟", cats: ["مرفوع بثبوت النون", "منصوب بحذف النون", "مجزوم بحذف النون"], items: [["هُمْ [يَعْمَلُونَ].", "0", ""], ["لَنْ [يَتْرُكُوا] الصَّلَاةَ.", "1", ""], ["لَمْ [تَحْضُرِي].", "2", ""], ["أَنْتُمَا [تَدْرُسَانِ].", "0", ""], ["يُرِيدَانِ أَنْ [يُسَافِرَا].", "1", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["Five verbs keep the nūn in rafʿ.", true, ""], ["لَنْ يَكْتُبُونَ is correct.", false, ""], ["يَكْتُبْنَ is one of the five verbs.", false, ""]] }
  ],

  drills: [
    ["Sign of rafʿ in the five verbs:", ["ثبوت النون", "الضمة"], 0, ""],
    ["Sign of naṣb and jazm:", ["حذف النون", "الفتحة / السكون"], 0, ""],
    ["لَمْ ___ (you two didn't go)", ["تَذْهَبَا", "تَذْهَبَانِ"], 0, ""],
    ["أُرِيدُ أَنْ ___ (you f. to rest)", ["تَسْتَرِيحِي", "تَسْتَرِيحِينَ"], 0, ""],
    ["Which is NOT a five-verb form?", ["تَكْتُبْنَ", "تَكْتُبَانِ", "تَكْتُبُونَ"], 0, ""]
  ],

  comp: [["What won't the two brothers do?", ["play before finishing", "study", "eat"], 0, 0], ["Why wasn't Hind writing?", ["she couldn't find her pen", "she was tired", "she was playing"], 0, 0]],

  cheat: `<h3>الأفعال الخمسة</h3><p class="ar">يَفْعَلَانِ · تَفْعَلَانِ · يَفْعَلُونَ · تَفْعَلُونَ · تَفْعَلِينَ</p><div class="rule"><span class="ar">تُرْفَعُ بِثُبُوتِ النُّونِ، وَتُنْصَبُ وَتُجْزَمُ بِحَذْفِهَا.</span></div><p class="ar">يَلْعَبُونَ · لَنْ يَلْعَبُوا · لَمْ يَلْعَبُوا</p>`,
  mistakes: [["لَنْ يَلْعَبُونَ", "لَنْ يَلْعَبُوا", "Drop the nūn in naṣb."], ["لَمْ يَلْعَبُو", "لَمْ يَلْعَبُوا", "Write the alif after the wāw of the group."]],
  tips: [{ t: "Talk to groups", b: `Practise commands and prohibitions to two people and to groups: <span class="ar">لَا تَتَأَخَّرَا، لَا تَتَأَخَّرُوا، لَا تَتَأَخَّرِي</span>.` }]
});
