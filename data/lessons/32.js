// الدرس ٣٢ — تقسيم الاسم إلى مفرد ومثنى وجمع (PDF pp. 162–164)
COURSE.add({
  n: 32, pages: [162, 164], method: true,
  summary: "Arabic nouns have three numbers: singular (مفرد) for one, dual (مثنى) for exactly two — made by adding ـَانِ or ـَيْنِ — and plural (جمع) for three or more. This lesson builds the dual and introduces the plural, which the next lesson divides into kinds.",
  objectives: [
    "name the three numbers: مفرد، مثنى، جمع",
    "form the dual with ـَانِ / ـَيْنِ",
    "turn ة into ت before the dual ending: شَجَرَةٌ ← شَجَرَتَانِ",
    "recognise that a plural means three or more"
  ],

  lesson: [
    { id: "three", t: "One, two, many", ar: "المفرد والمثنى والجمع", pos: "agreement", pages: "162–163",
      b: `<p>English has singular and plural. Arabic has a third number, the <b>dual</b>, for exactly two:</p>
        <div class="blocks"><div class="blk c1"><span class="ar">كِتَابٌ</span><small>singular · one book</small></div><div class="blk c2"><span class="ar">كِتَابَانِ</span><small>dual · two books</small></div><div class="blk c3"><span class="ar">كُتُبٌ</span><small>plural · books (3+)</small></div></div>
        <p>The plural can be made by changing the word's shape (<span class="ar">كِتَابٌ ← كُتُبٌ</span>) or by adding an ending (<span class="ar">مُعَلِّمٌ ← مُعَلِّمُونَ</span>) — next lesson.</p>`,
      rule: `<p><span class="ar">المُفْرَدُ: مَا دَلَّ عَلَى وَاحِدٍ. المُثَنَّى: مَا دَلَّ عَلَى اثْنَيْنِ بِزِيَادَةِ أَلِفٍ وَنُونٍ أَوْ يَاءٍ وَنُونٍ فِي آخِرِهِ. الجَمْعُ: مَا دَلَّ عَلَى أَكْثَرَ مِنَ اثْنَيْنِ.</span></p>`,
      widget: "sorter",
      wd: { title: "Singular, dual or plural?", bins: [["مفرد", "one"], ["مثنى", "two"], ["جمع", "three or more"]], items: [["بَابٌ", 0, ""], ["بَابَانِ", 1, ""], ["أَبْوَابٌ", 2, ""], ["شَجَرَتَيْنِ", 1, ""], ["أَشْجَارٌ", 2, ""], ["طَرِيقٌ", 0, ""], ["طُرُقٌ", 2, ""], ["طَالِبَانِ", 1, ""]] },
      check: [["“Two doors”:", ["بَابَانِ", "أَبْوَابٌ", "بَابٌ"], 0, "", "بَابَانِ"]] },

    { id: "dual", t: "Making the dual", ar: "صياغة المثنى", pos: "spelling", pages: "163–164",
      b: `<p>Add <span class="ar">ـَانِ</span> (rafʿ) or <span class="ar">ـَيْنِ</span> (naṣb and jarr) to the singular. A <span class="ar">ة</span> becomes an open <span class="ar">ت</span>:</p>
        <table class="g"><tr><th>singular</th><th>dual (rafʿ)</th><th>dual (naṣb / jarr)</th></tr>
        <tr><td><span class="ar">طَالِبٌ</span></td><td><span class="ar">طَالِبَانِ</span></td><td><span class="ar">طَالِبَيْنِ</span></td></tr>
        <tr><td><span class="ar">شَجَرَةٌ</span></td><td><span class="ar">شَجَرَتَانِ</span></td><td><span class="ar">شَجَرَتَيْنِ</span></td></tr>
        <tr><td><span class="ar">عَيْنٌ</span></td><td><span class="ar">عَيْنَانِ</span></td><td><span class="ar">عَيْنَيْنِ</span></td></tr></table>
        <p>Lesson 34 shows when to use which ending.</p>`,
      check: [["Dual of وَرْدَةٌ:", ["وَرْدَتَانِ", "وَرْدَةَانِ", "وُرُودٌ"], 0, "", "وَرْدَتَانِ"]] }
  ],

  scenes: [
    { h: "جِسْمُ الإِنْسَانِ", en: "The human body", pic: "🧍", lines: [
      ["", "لِلْإِنْسَانِ رَأْسٌ وَاحِدٌ، وَعَيْنَانِ، وَأُذُنَانِ.", "A person has one head, two eyes and two ears."],
      ["", "وَلَهُ يَدَانِ وَرِجْلَانِ.", "And he has two hands and two feet."],
      ["", "وَفِي كُلِّ يَدٍ خَمْسُ أَصَابِعَ.", "And on each hand five fingers."],
      ["", "وَفِي الفَمِ أَسْنَانٌ كَثِيرَةٌ وَلِسَانٌ وَاحِدٌ.", "And in the mouth many teeth and one tongue."],
      ["", "قَالَ الحَكِيمُ: لَكَ أُذُنَانِ وَلِسَانٌ وَاحِدٌ، لِتَسْمَعَ أَكْثَرَ مِمَّا تَقُولُ.", "The wise man said: you have two ears and one tongue, so listen more than you speak."]],
      note: "Duals: عَيْنَانِ، أُذُنَانِ، يَدَانِ، رِجْلَانِ · plurals: أَصَابِعُ، أَسْنَانٌ." }
  ],

  vocab: [
    ["مُفْرَدٌ", "singular", "n.m", "", "", "", "Grammar words"], ["مُثَنًّى", "dual", "n.m", "", "", "", "Grammar words"], ["جَمْعٌ", "plural", "n.m", "", "", "جُمُوعٌ", "Grammar words"],
    ["عَيْنٌ", "eye", "n.f", "👁️", "dual عَيْنَانِ", "عُيُونٌ", "Body"], ["أُذُنٌ", "ear", "n.f", "👂", "dual أُذُنَانِ", "آذَانٌ", "Body"], ["رِجْلٌ", "leg, foot", "n.f", "🦵", "dual رِجْلَانِ", "أَرْجُلٌ", "Body"],
    ["إِصْبَعٌ", "finger", "n.f", "☝️", "", "أَصَابِعُ", "Body"], ["فَمٌ", "mouth", "n.m", "👄", "", "أَفْوَاهٌ", "Body"], ["سِنٌّ", "tooth", "n.f", "🦷", "", "أَسْنَانٌ", "Body"], ["لِسَانٌ", "tongue; language", "n.m", "👅", "", "أَلْسِنَةٌ", "Body"],
    ["حَكِيمٌ", "wise man", "n.m", "🧙", "", "حُكَمَاءُ", "Others"]
  ],

  exercises: [
    { k: "gap", t: "ثَنِّ · Make the dual (rafʿ)", items: [["بَابٌ ← ___", "بَابَانِ|بابان"], ["حَدِيقَةٌ ← ___", "حَدِيقَتَانِ|حديقتان"], ["قَلَمٌ ← ___", "قَلَمَانِ|قلمان"], ["مَدْرَسَةٌ ← ___", "مَدْرَسَتَانِ|مدرستان"], ["طَرِيقٌ ← ___", "طَرِيقَانِ|طريقان"]] },
    { k: "sort", t: "صَنِّفْ", cats: ["مفرد", "مثنى", "جمع"], items: [["عَيْنَانِ", "1", ""], ["عُيُونٌ", "2", ""], ["عَيْنٌ", "0", ""], ["يَدَيْنِ", "1", ""], ["أَيْدٍ", "2", ""], ["لِسَانٌ", "0", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The dual is for exactly two.", true, ""], ["شَجَرَةَانِ is correct.", false, "شجرتان"], ["Plural means three or more.", true, ""]] }
  ],

  drills: [["Arabic has … numbers.", ["three", "two"], 0, ""], ["Dual endings:", ["ـَانِ / ـَيْنِ", "ـُونَ / ـِينَ"], 0, ""], ["Dual of سَاعَةٌ:", ["سَاعَتَانِ", "سَاعَاتٌ"], 0, ""], ["“Two eyes”:", ["عَيْنَانِ", "عُيُونٌ"], 0, ""], ["Which is plural?", ["أَشْجَارٌ", "شَجَرَتَانِ"], 0, ""]],
  comp: [["How many ears does a person have?", ["two", "one", "four"], 0, 0], ["What does the wise man advise?", ["listen more than you speak", "speak more", "sleep more"], 0, 0]],
  cheat: `<h3>المفرد والمثنى والجمع</h3><p class="ar">كِتَابٌ · كِتَابَانِ / كِتَابَيْنِ · كُتُبٌ</p><p>Dual: + <span class="ar">ـَانِ / ـَيْنِ</span>; <span class="ar">ة → ت</span>: <span class="ar">شَجَرَتَانِ</span>.</p>`,
  mistakes: [["شَجَرَةَانِ", "شَجَرَتَانِ", "ة becomes ت before the dual ending."]],
  tips: [{ t: "Pairs around you", b: `Name things that come in pairs: <span class="ar">عَيْنَانِ، أُذُنَانِ، يَدَانِ، حِذَاءَانِ، بَابَانِ</span>.` }]
});
