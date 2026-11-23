// الدرس ٣٣ — تقسيم الجمع (PDF pp. 165–167)
COURSE.add({
  n: 33, pages: [165, 167], method: true,
  summary: "There are three kinds of plural: the sound masculine plural (جمع المذكر السالم) adds ـُونَ / ـِينَ (مُعَلِّمُونَ); the sound feminine plural (جمع المؤنث السالم) adds ـَاتٌ (مُعَلِّمَاتٌ); the broken plural (جمع التكسير) changes the shape of the word (كِتَابٌ ← كُتُبٌ، رَجُلٌ ← رِجَالٌ).",
  objectives: [
    "name the three kinds of plural",
    "form the sound masculine and feminine plurals",
    "recognise broken plurals and learn the common patterns",
    "know that the singular stays whole (سالم) in sound plurals"
  ],

  lesson: [
    { id: "kinds", t: "Three ways to make a plural", ar: "أنواع الجمع", pos: "spelling", pages: "165–166",
      b: `<table class="g"><tr><th>kind</th><th>how</th><th>examples</th></tr>
        <tr><td><span class="ar">جَمْعُ المُذَكَّرِ السَّالِمُ</span></td><td>add <span class="ar">ـُونَ</span> (rafʿ) / <span class="ar">ـِينَ</span> (naṣb, jarr); the word stays whole</td><td><span class="ar">مُعَلِّمُونَ، فَلَّاحُونَ، مُسَافِرِينَ</span></td></tr>
        <tr><td><span class="ar">جَمْعُ المُؤَنَّثِ السَّالِمُ</span></td><td>add <span class="ar">ـَاتٌ</span> (ة drops)</td><td><span class="ar">مُعَلِّمَاتٌ، شَجَرَاتٌ، سَيَّارَاتٌ</span></td></tr>
        <tr><td><span class="ar">جَمْعُ التَّكْسِيرِ</span></td><td>the shape of the word is “broken”</td><td><span class="ar">كُتُبٌ، رِجَالٌ، أَقْلَامٌ، مَدَارِسُ</span></td></tr></table>`,
      rule: `<p><span class="ar">الجَمْعُ ثَلَاثَةُ أَنْوَاعٍ: جَمْعُ مُذَكَّرٍ سَالِمٌ، وَهُوَ مَا جُمِعَ بِزِيَادَةِ وَاوٍ وَنُونٍ أَوْ يَاءٍ وَنُونٍ؛ وَجَمْعُ مُؤَنَّثٍ سَالِمٌ، وَهُوَ مَا جُمِعَ بِزِيَادَةِ أَلِفٍ وَتَاءٍ؛ وَجَمْعُ تَكْسِيرٍ، وَهُوَ مَا تَغَيَّرَتْ فِيهِ صُورَةُ المُفْرَدِ.</span></p>`,
      widget: "sorter",
      wd: { title: "Which kind of plural?", bins: [["جمع مذكر سالم", "-ūna / -īna"], ["جمع مؤنث سالم", "-āt"], ["جمع تكسير", "broken"]], items: [["مُهَنْدِسُونَ", 0, ""], ["مُمَرِّضَاتٌ", 1, ""], ["أَطْفَالٌ", 2, ""], ["لَاعِبِينَ", 0, ""], ["حَدَائِقُ", 2, ""], ["طَالِبَاتٌ", 1, ""], ["بُيُوتٌ", 2, ""], ["سَيَّارَاتٌ", 1, ""]] },
      check: [["Plural of مُهَنْدِسٌ (engineer):", ["مُهَنْدِسُونَ", "مَهَانِدُ", "مُهَنْدِسَاتٌ"], 0, "", "مُهَنْدِسُونَ"]] },

    { id: "broken", t: "Common broken-plural patterns", ar: "أوزان جمع التكسير", pos: "spelling", pages: "166–167",
      b: `<p>Broken plurals must be learnt with each word, but they follow patterns:</p>
        <table class="g"><tr><th>pattern</th><th>examples</th></tr>
        <tr><td><span class="ar">أَفْعَالٌ</span></td><td><span class="ar">قَلَمٌ ← أَقْلَامٌ · بَابٌ ← أَبْوَابٌ</span></td></tr>
        <tr><td><span class="ar">فُعُولٌ</span></td><td><span class="ar">بَيْتٌ ← بُيُوتٌ · دَرْسٌ ← دُرُوسٌ</span></td></tr>
        <tr><td><span class="ar">فِعَالٌ</span></td><td><span class="ar">رَجُلٌ ← رِجَالٌ · جَبَلٌ ← جِبَالٌ</span></td></tr>
        <tr><td><span class="ar">فُعُلٌ</span></td><td><span class="ar">كِتَابٌ ← كُتُبٌ · مَدِينَةٌ ← مُدُنٌ</span></td></tr>
        <tr><td><span class="ar">مَفَاعِلُ</span></td><td><span class="ar">مَدْرَسَةٌ ← مَدَارِسُ · مَكْتَبٌ ← مَكَاتِبُ</span></td></tr>
        <tr><td><span class="ar">فُعَلَاءُ</span></td><td><span class="ar">صَدِيقٌ ← أَصْدِقَاءُ · وَزِيرٌ ← وُزَرَاءُ</span></td></tr></table>`,
      tip: `Sound masculine plurals are mostly for male <b>people</b> described by participles (<span class="ar">مُعَلِّمٌ، لَاعِبٌ</span>). Sound feminine plurals cover female people, many words in ة, and many borrowed words (<span class="ar">تِلِفِزْيُونَاتٌ</span>).`,
      check: [["Plural of بَيْتٌ:", ["بُيُوتٌ", "بَيْتُونَ", "بَيْتَاتٌ"], 0, "", "بُيُوتٌ"]] }
  ],

  scenes: [
    { h: "فِي المُسْتَشْفَى", en: "At the hospital", pic: "🏥", lines: [
      ["", "فِي المُسْتَشْفَى أَطِبَّاءُ كَثِيرُونَ وَمُمَرِّضَاتٌ نَشِيطَاتٌ.", "In the hospital there are many doctors and active nurses."],
      ["", "يَعْمَلُ المُوَظَّفُونَ فِي المَكَاتِبِ.", "The employees work in the offices."],
      ["", "وَفِي الحُجُرَاتِ أَسِرَّةٌ نَظِيفَةٌ.", "And in the rooms there are clean beds."],
      ["", "يَزُورُ الأَهْلُ المَرْضَى، وَيُقَدِّمُونَ لَهُمُ الهَدَايَا وَالزُّهُورَ.", "Families visit the sick and bring them presents and flowers."]],
      note: "Sound masculine: كَثِيرُونَ، المُوَظَّفُونَ · sound feminine: مُمَرِّضَاتٌ، نَشِيطَاتٌ، الحُجُرَاتِ · broken: أَطِبَّاءُ، المَكَاتِبِ، أَسِرَّةٌ، المَرْضَى، الهَدَايَا، الزُّهُورَ." }
  ],

  vocab: [
    ["جَمْعُ مُذَكَّرٍ سَالِمٌ", "sound masculine plural", "n.m", "", "", "", "Grammar words"], ["جَمْعُ مُؤَنَّثٍ سَالِمٌ", "sound feminine plural", "n.m", "", "", "", "Grammar words"], ["جَمْعُ تَكْسِيرٍ", "broken plural", "n.m", "", "", "", "Grammar words"],
    ["مُهَنْدِسٌ", "engineer", "n.m", "👷", "", "مُهَنْدِسُونَ", "Jobs"], ["مُمَرِّضَةٌ", "nurse (f)", "n.f", "👩‍⚕️", "", "مُمَرِّضَاتٌ", "Jobs"], ["مُوَظَّفٌ", "employee", "n.m", "🧑‍💼", "", "مُوَظَّفُونَ", "Jobs"], ["وَزِيرٌ", "minister", "n.m", "🎩", "", "وُزَرَاءُ", "Jobs"],
    ["جَبَلٌ", "mountain", "n.m", "⛰️", "", "جِبَالٌ", "Places"], ["مَدِينَةٌ", "city", "n.f", "🏙️", "", "مُدُنٌ", "Places"], ["دَرْسٌ", "lesson", "n.m", "📘", "", "دُرُوسٌ", "Places"], ["أَهْلٌ", "family, people", "n.m", "👪", "", "", "Places"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ", cats: ["مذكر سالم", "مؤنث سالم", "تكسير"], items: [["الفَلَّاحُونَ", "0", ""], ["الحُقُولُ", "2", ""], ["البَنَاتُ", "1", "ends in ـات: treated as a sound feminine plural"], ["الأَوْلَادُ", "2", ""], ["المُسْلِمِينَ", "0", ""], ["الكَلِمَاتُ", "1", ""]] },
    { k: "gap", t: "اجْمَعْ · Make the plural", items: [["مُعَلِّمٌ ← ___ (rafʿ)", "مُعَلِّمُونَ|معلمون"], ["مُعَلِّمَةٌ ← ___", "مُعَلِّمَاتٌ|معلمات"], ["قَلَمٌ ← ___", "أَقْلَامٌ|اقلام"], ["مَدْرَسَةٌ ← ___", "مَدَارِسُ|مدارس"], ["رَجُلٌ ← ___", "رِجَالٌ|رجال"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["كُتُبٌ is a broken plural.", true, ""], ["مُعَلِّمَاتٌ is a sound masculine plural.", false, ""], ["In sound plurals the singular stays whole.", true, ""]] }
  ],

  drills: [["Plural of طَالِبَةٌ:", ["طَالِبَاتٌ", "طُلَّابٌ"], 0, ""], ["Plural of وَلَدٌ:", ["أَوْلَادٌ", "وَلَدُونَ"], 0, ""], ["Which is a broken plural?", ["جِبَالٌ", "لَاعِبُونَ", "سَيَّارَاتٌ"], 0, ""], ["Pattern of أَقْلَامٌ:", ["أَفْعَالٌ", "فُعُولٌ"], 0, ""], ["Kinds of plural:", ["three", "two"], 0, ""]],
  comp: [["Who works in the offices?", ["the employees", "the nurses", "the doctors"], 0, 0], ["What do families bring the sick?", ["presents and flowers", "books", "food only"], 0, 0]],
  cheat: `<h3>أنواع الجمع</h3><p><span class="ar">مُعَلِّمُونَ / مُعَلِّمِينَ</span> sound masc. · <span class="ar">مُعَلِّمَاتٌ</span> sound fem. · <span class="ar">كُتُبٌ، رِجَالٌ، أَقْلَامٌ</span> broken</p>`,
  mistakes: [["رَجُلُونَ", "رِجَالٌ", "رجل has a broken plural."], ["مُعَلِّمَةَاتٌ", "مُعَلِّمَاتٌ", "ة drops before ـات."]],
  tips: [{ t: "Learn plurals with singulars", b: `Always learn a noun as a pair: <span class="ar">كِتَابٌ ج كُتُبٌ</span>. The Vocabulary tab shows the plural in the forms column for this reason.` }]
});
