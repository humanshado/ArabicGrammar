// الدرس ٥٥ — مواضع فتح همزة أنّ (PDF pp. 267–271)
COURSE.add({
  n: 55, pages: [267, 271], method: true,
  summary: "أَنَّ (with fatḥa) is used where it and its sentence can be replaced by a maṣdar — that is, where the whole clause plays the role of a single noun: doer (يَسُرُّنِي أَنَّكَ نَاجِحٌ), object (عَلِمْتُ أَنَّ الامْتِحَانَ قَرِيبٌ), after a preposition (فَرِحْتُ بِأَنَّكَ نَجَحْتَ), mubtadaʾ, or muḍāf ilayhi.",
  objectives: ["write أَنَّ where its clause = a noun", "test with the maṣdar: أنك ناجح → نجاحك", "use it after verbs of knowing, hearing, pleasing and after prepositions"],
  lesson: [
    { id: "test", t: "The maṣdar test", ar: "مواضع الفتح", pos: "spelling", pages: "267–270",
      b: `<p>If you can replace <span class="ar">أَنَّ</span> + its sentence with a maṣdar, write <b>أَنَّ</b>:</p>
        <table class="g"><tr><th>position</th><th>example</th><th>maṣdar test</th></tr>
        <tr><td>doer</td><td><span class="ar">يَسُرُّنِي أَنَّكَ مُجْتَهِدٌ</span></td><td><span class="ar">يَسُرُّنِي اجْتِهَادُكَ</span></td></tr>
        <tr><td>passive subject</td><td><span class="ar">عُرِفَ أَنَّ الأَرْضَ كُرَوِيَّةٌ</span></td><td><span class="ar">عُرِفَ كُرَوِيَّةُ الأَرْضِ</span></td></tr>
        <tr><td>object</td><td><span class="ar">عَلِمْتُ أَنَّ أَخَاكَ مُسَافِرٌ</span></td><td><span class="ar">عَلِمْتُ سَفَرَ أَخِيكَ</span></td></tr>
        <tr><td>after a preposition</td><td><span class="ar">فَرِحْتُ بِأَنَّكَ نَجَحْتَ</span></td><td><span class="ar">فَرِحْتُ بِنَجَاحِكَ</span></td></tr>
        <tr><td>mubtadaʾ</td><td><span class="ar">مِنَ الوَاضِحِ أَنَّكَ صَادِقٌ</span></td><td><span class="ar">صِدْقُكَ وَاضِحٌ</span></td></tr></table>`,
      rule: `<p><span class="ar">تُفْتَحُ هَمْزَةُ «أَنَّ» إِذَا صَحَّ أَنْ يُؤَوَّلَ مَا بَعْدَهَا مَعَ اسْمِهَا وَخَبَرِهَا بِمَصْدَرٍ.</span></p>`,
      check: [["سَمِعْتُ ___ القِطَارَ تَأَخَّرَ", ["أَنَّ", "إِنَّ"], 0, "Object of سمعت.", "سَمِعْتُ أَنَّ القِطَارَ تَأَخَّرَ"]] }
  ],
  scenes: [{ h: "خَبَرٌ سَارٌّ", en: "Good news", pic: "🎉", lines: [["سَعِيدٌ", "هَلْ عَلِمْتَ أَنَّ النَّتَائِجَ ظَهَرَتْ؟", "Did you know the results are out?"], ["كَرِيمٌ", "نَعَمْ، وَيَسُرُّنِي أَنَّكَ نَجَحْتَ.", "Yes, and I'm glad you passed."], ["سَعِيدٌ", "شُكْرًا! وَأَنَا فَرِحٌ بِأَنَّكَ تَفَوَّقْتَ.", "Thanks! And I'm happy that you excelled."]]}],
  vocab: [["كُرَوِيٌّ", "spherical", "adj.", "🌍", "", "", "Words"], ["وَاضِحٌ", "clear", "adj.", "", "", "", "Words"], ["تَفَوَّقَ", "to excel", "v.", "", "يَتَفَوَّقُ", "", "Words"], ["سَارٌّ", "pleasing", "adj.", "😊", "", "", "Words"]],
  exercises: [
    { k: "mcq", t: "أَنَّ أَمْ إِنَّ؟", items: [["عَرَفْتُ ___ الصِّدْقَ مُنْجٍ", ["أَنَّ", "إِنَّ"], 0, ""], ["___ الصِّدْقَ مُنْجٍ (start)", ["إِنَّ", "أَنَّ"], 0, "Lesson 57."], ["أَعْجَبَنِي ___ الحَدِيقَةَ نَظِيفَةٌ", ["أَنَّ", "إِنَّ"], 0, ""], ["فَرِحْتُ بِـ___ أَبِي عَادَ", ["أَنَّ", "إِنَّ"], 0, ""]] },
    { k: "tr", t: "حَوِّلْ إِلَى مَصْدَرٍ · Replace with a maṣdar", items: [["يَسُرُّنِي أَنَّكَ نَاجِحٌ.", "يسرني نجاحك|يَسُرُّنِي نَجَاحُكَ"], ["عَلِمْتُ أَنَّ أَخَاكَ مُسَافِرٌ.", "علمت سفر أخيك|عَلِمْتُ سَفَرَ أَخِيكَ"]] }
  ],
  drills: [["أَنَّ is used where its clause can be replaced by…", ["a maṣdar", "a verb"], 0, ""], ["بَلَغَنِي ___ المَطَرَ نَزَلَ", ["أَنَّ", "إِنَّ"], 0, ""]],
  comp: [["What is Karim glad about?", ["that Said passed", "the weather", "the holiday"], 0, 0]],
  cheat: `<h3>فتح همزة أنّ</h3><p>When <span class="ar">أَنَّ</span> + its sentence = a maṣdar (doer, object, after a preposition…): <span class="ar">عَلِمْتُ أَنَّكَ نَاجِحٌ = عَلِمْتُ نَجَاحَكَ</span>.</p>`,
  mistakes: [["عَلِمْتُ إِنَّكَ نَاجِحٌ", "عَلِمْتُ أَنَّكَ نَاجِحٌ", "Object position → أنّ."]],
  tips: [{ t: "Reported news", b: `Report three pieces of news with <span class="ar">سَمِعْتُ أَنَّ…، قَرَأْتُ أَنَّ…، عَلِمْتُ أَنَّ…</span>` }]
});
