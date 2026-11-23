// الدرس ١٩ — أنواع البناء (PDF pp. 98–100)
COURSE.add({
  n: 19, pages: [98, 100], method: true,
  summary: "A fixed (mabnī) word always keeps the same last vowel. There are only four possibilities: sukūn (كَمْ، لَمْ)، fatḥa (أَيْنَ، كَتَبَ)، ḍamma (حَيْثُ، نَحْنُ) or kasra (أَمْسِ، هَؤُلَاءِ). In parsing we say the word is “built on” that vowel: مَبْنِيٌّ عَلَى السُّكُونِ / الفَتْحِ / الضَّمِّ / الكَسْرِ.",
  objectives: [
    "name the four kinds of fixed ending: السكون، الفتح، الضم، الكسر",
    "give examples of each among particles, verbs and nouns",
    "use the parsing formula مبني على …",
    "keep the difference between mabnī ḍamma (حَيْثُ) and marfūʿ ḍamma (الوَلَدُ)"
  ],

  lesson: [
    { id: "four", t: "Four ways to be fixed", ar: "أحوال البناء الأربعة", pos: "case endings", pages: "98–99",
      b: `<p>Look at the last letters of these fixed words from the book's examples:</p>
        <table class="g"><tr><th>built on…</th><th>sign</th><th>examples</th></tr>
        <tr><td><span class="ar">السُّكُونِ</span></td><td class="end-o">ـْ</td><td><span class="ar">كَمْ، مَنْ، قَدْ، لَمْ، هَلْ، اُكْتُبْ</span></td></tr>
        <tr><td><span class="ar">الفَتْحِ</span></td><td class="end-a">ـَ</td><td><span class="ar">أَيْنَ، كَيْفَ، ثُمَّ، إِنَّ، كَتَبَ</span></td></tr>
        <tr><td><span class="ar">الضَّمِّ</span></td><td class="end-u">ـُ</td><td><span class="ar">حَيْثُ، مُنْذُ، نَحْنُ، كَتَبُوا</span></td></tr>
        <tr><td><span class="ar">الكَسْرِ</span></td><td class="end-i">ـِ</td><td><span class="ar">أَمْسِ، هَؤُلَاءِ، بِـ، لِـ</span></td></tr></table>
        <p>Sukūn is the most common, because it is the “lightest”: most particles end in it.</p>`,
      rule: `<p><span class="ar">الأَحْوَالُ الَّتِي تَلْزَمُ أَوَاخِرَ الكَلِمَاتِ المَبْنِيَّةِ أَرْبَعٌ: السُّكُونُ وَالفَتْحُ وَالضَّمُّ وَالكَسْرُ؛ فَيُقَالُ إِنَّهَا مَبْنِيَّةٌ عَلَى السُّكُونِ أَوِ الفَتْحِ أَوِ الضَّمِّ أَوِ الكَسْرِ.</span></p><p>The fixed endings are four: sukūn, fatḥa, ḍamma and kasra; such words are said to be “built on” sukūn, fatḥa, ḍamma or kasra.</p>`,
      widget: "sorter",
      wd: { title: "Built on which vowel?", bins: [["مبني على السكون", "sukūn"], ["مبني على الفتح", "fatḥa"], ["مبني على الضم", "ḍamma"], ["مبني على الكسر", "kasra"]],
        items: [["كَمْ", 0, ""], ["أَيْنَ", 1, ""], ["حَيْثُ", 2, ""], ["أَمْسِ", 3, ""], ["هَلْ", 0, ""], ["كَيْفَ", 1, ""], ["مُنْذُ", 2, ""], ["هَؤُلَاءِ", 3, ""], ["اِجْلِسْ", 0, ""], ["جَلَسَ", 1, ""], ["نَحْنُ", 2, ""], ["مَنْ", 0, ""]] },
      check: [["أَمْسِ (yesterday) is built on…", ["kasra", "sukūn", "fatḥa"], 0, "", false], ["كَيْفَ is built on…", ["fatḥa", "ḍamma"], 0, "", false]] },

    { id: "formula", t: "The parsing formula", ar: "إعراب المبني", pos: "case endings", pages: "99–100",
      b: `<p>For a fixed word, we say what it is and what it is built on:</p>
        <div class="rule"><p><span class="ar">لَمْ: حَرْفُ جَزْمٍ مَبْنِيٌّ عَلَى السُّكُونِ.</span></p><p><span class="ar">كَتَبَ: فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الفَتْحِ.</span></p><p><span class="ar">اُكْتُبْ: فِعْلُ أَمْرٍ مَبْنِيٌّ عَلَى السُّكُونِ.</span></p><p><span class="ar">حَيْثُ: ظَرْفُ مَكَانٍ مَبْنِيٌّ عَلَى الضَّمِّ.</span></p></div>
        <p>Note the words: for a fixed word we say <span class="ar">الفَتْح، الضَّمّ، الكَسْر</span> (opening, joining, breaking); for a declinable word we say <span class="ar">الفَتْحَة، الضَّمَّة، الكَسْرَة</span> (with <span class="ar">ة</span>). It's a small difference that grammar teachers watch for.</p>`,
      check: [["Parse قَدْ:", ["حرف مبني على السكون", "حرف مجزوم", "اسم مرفوع"], 0, "", false]] },

    { id: "same", t: "Same vowel, different story", ar: "الضم البنائي والضمة الإعرابية", pos: "case endings",
      b: `<p><span class="ar">حَيْثُ</span> and <span class="ar">الوَلَدُ</span> both end in ḍamma, but for different reasons. Put them after a preposition: <span class="ar">مِنْ حَيْثُ</span> (still ḍamma — fixed) vs <span class="ar">مِنَ الوَلَدِ</span> (kasra now — declinable). The ḍamma of <span class="ar">حَيْثُ</span> is part of the word; the ḍamma of <span class="ar">الوَلَدُ</span> is a case sign.</p>`,
      widget: "transform",
      wd: { title: "Fixed ḍamma vs case ḍamma", sets: [{ base: ["جَلَسْتُ [[حَيْثُ]] جَلَسَ أَبِي", "I sat where my father sat."], baseLabel: "حيثُ", ops: [["after مِنْ", "خَرَجْتُ مِنْ [[حَيْثُ]] دَخَلْتُ", "I left by where I came in.", "Still ḍamma: mabnī."], ["a declinable noun after مِنْ", "خَرَجْتُ مِنَ [[البَيْتِ]]", "I left the house.", "Kasra: muʿrab."]] }] },
      check: [["In جِئْتُ مِنْ حَيْثُ أَتَيْتَ, حَيْثُ ends in…", ["ḍamma (fixed)", "kasra"], 0, "", false]] }
  ],

  scenes: [
    { h: "كَمْ عُمْرُكَ؟", en: "How old are you?", pic: "🎂", lines: [
      ["المُعَلِّمُ", "كَمْ عُمْرُكَ يَا عَادِلُ؟", "How old are you, Adil?"],
      ["عَادِلٌ", "عُمْرِي عَشْرُ سَنَوَاتٍ.", "I'm ten years old."],
      ["المُعَلِّمُ", "وَمُنْذُ مَتَى تَتَعَلَّمُ العَرَبِيَّةَ؟", "And since when have you been learning Arabic?"],
      ["عَادِلٌ", "مُنْذُ سَنَتَيْنِ. بَدَأْتُ حَيْثُ يَبْدَأُ الأَطْفَالُ: بِالحُرُوفِ.", "For two years. I began where children begin: with the letters."],
      ["المُعَلِّمُ", "وَكَيْفَ كَانَ دَرْسُ أَمْسِ؟", "And how was yesterday's lesson?"],
      ["عَادِلٌ", "كَانَ دَرْسُ أَمْسِ سَهْلًا. نَحْنُ نُحِبُّ النَّحْوَ!", "Yesterday's lesson was easy. We love grammar!"]],
      note: "Fixed words: كَمْ (sukūn), مُنْذُ، حَيْثُ، نَحْنُ (ḍamma), مَتَى (alif), كَيْفَ (fatḥa), أَمْسِ (kasra)." }
  ],

  vocab: [
    ["مَبْنِيٌّ عَلَى السُّكُونِ", "fixed on sukūn", "adj.", "", "", "", "Grammar words"],
    ["مَبْنِيٌّ عَلَى الفَتْحِ", "fixed on fatḥa", "adj.", "", "", "", "Grammar words"],
    ["مَبْنِيٌّ عَلَى الضَّمِّ", "fixed on ḍamma", "adj.", "", "", "", "Grammar words"],
    ["مَبْنِيٌّ عَلَى الكَسْرِ", "fixed on kasra", "adj.", "", "", "", "Grammar words"],
    ["كَمْ", "how many / how much", "n.", "", "fixed on sukūn", "", "Fixed words"],
    ["قَدْ", "already; may", "part.", "", "fixed on sukūn", "", "Fixed words"],
    ["ثُمَّ", "then", "part.", "", "fixed on fatḥa", "", "Fixed words"],
    ["مُنْذُ", "since, for (time)", "n.", "", "fixed on ḍamma", "", "Fixed words"],
    ["نَحْنُ", "we", "pron.", "", "fixed on ḍamma", "", "Fixed words"],
    ["أَمْسِ", "yesterday", "n.", "", "fixed on kasra", "", "Fixed words"],
    ["هَؤُلَاءِ", "these (people)", "n.", "", "fixed on kasra", "", "Fixed words"],
    ["مَتَى", "when?", "n.", "", "fixed on sukūn (on the alif)", "", "Fixed words"],
    ["عُمْرٌ", "age", "n.m", "🎂", "", "أَعْمَارٌ", "Nouns"],
    ["سَنَةٌ", "year", "n.f", "📅", "", "سَنَوَاتٌ", "Nouns"],
    ["نَحْوٌ", "grammar (syntax)", "n.m", "📘", "", "", "Nouns"],
    ["بَدَأَ", "to begin", "v.", "", "يَبْدَأُ", "", "Verbs"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Built on which vowel?", cats: ["السكون", "الفتح", "الضم", "الكسر"], items: [
      ["لَنْ", "0", ""], ["إِنَّ", "1", ""], ["حَيْثُ", "2", ""], ["أَمْسِ", "3", ""], ["لَعِبَ", "1", ""], ["اِلْعَبْ", "0", ""], ["مُنْذُ", "2", ""], ["هَؤُلَاءِ", "3", ""], ["سَوْفَ", "1", ""], ["عَنْ", "0", ""]] },
    { k: "irab", t: "أَعْرِبْ · Parse the highlighted word", cats: ["حرف مبني على السكون", "فعل ماضٍ مبني على الفتح", "فعل أمر مبني على السكون", "اسم مبني على الكسر"], items: [
      ["[هَلْ] زُرْتَ الهَرَمَ؟", "0", ""], ["[سَافَرَ] أَخِي.", "1", ""], ["[اُدْرُسْ] جَيِّدًا.", "2", ""], ["زُرْتُهُ [أَمْسِ].", "3", ""], ["[لَمْ] أَنَمْ.", "0", ""]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["كَيْفَ is built on…", ["الفتح", "الضم", "السكون"], 0, ""], ["نَحْنُ is built on…", ["الضم", "الكسر"], 0, ""], ["For a fixed word we say…", ["مبني على الفتح", "منصوب وعلامة نصبه الفتحة"], 0, ""], ["Which is built on kasra?", ["أَمْسِ", "أَيْنَ", "كَمْ"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["There are four kinds of fixed ending.", true, ""], ["حَيْثُ becomes حَيْثِ after مِنْ.", false, "It is fixed."], ["The past verb كَتَبَ is built on fatḥa.", true, ""], ["مَنْ is built on sukūn.", true, ""]] }
  ],

  drills: [
    ["Kinds of fixed ending:", ["السكون، الفتح، الضم، الكسر", "الرفع، النصب، الجر، الجزم"], 0, ""],
    ["هَلْ is built on…", ["السكون", "الفتح"], 0, ""],
    ["أَيْنَ is built on…", ["الفتح", "الكسر"], 0, ""],
    ["مُنْذُ is built on…", ["الضم", "الفتح"], 0, ""],
    ["هَؤُلَاءِ is built on…", ["الكسر", "الضم"], 0, ""],
    ["اِجْلِسْ is…", ["فعل أمر مبني على السكون", "فعل مضارع مجزوم"], 0, ""],
    ["Parse جَلَسَ:", ["فعل ماضٍ مبني على الفتح", "فعل ماضٍ منصوب"], 0, ""],
    ["Which is NOT fixed?", ["الطَّالِبُ", "ثُمَّ", "كَمْ"], 0, ""]
  ],

  comp: [["How old is Adil?", ["ten", "eight", "twelve"], 0, 0], ["How long has he been learning Arabic?", ["two years", "one year", "ten years"], 0, 0], ["How was yesterday's lesson?", ["easy", "hard", "long"], 0, 0]],

  cheat: `<h3>أنواع البناء</h3><div class="rule"><span class="ar">مَبْنِيٌّ عَلَى: السُّكُونِ · الفَتْحِ · الضَّمِّ · الكَسْرِ</span></div>
    <p><span class="end-o ar">كَمْ، لَمْ، مَنْ، اُكْتُبْ</span> · <span class="end-a ar">أَيْنَ، كَيْفَ، ثُمَّ، كَتَبَ</span> · <span class="end-u ar">حَيْثُ، مُنْذُ، نَحْنُ</span> · <span class="end-i ar">أَمْسِ، هَؤُلَاءِ</span></p>
    <p>Fixed: <span class="ar">الفَتْح، الضَّمّ، الكَسْر</span> · declinable: <span class="ar">الفَتْحَة، الضَّمَّة، الكَسْرَة</span></p>`,
  mistakes: [["كَتَبَ: فِعْلٌ مَاضٍ مَنْصُوبٌ", "كَتَبَ: فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الفَتْحِ", "Past verbs are fixed, not manṣūb."], ["مِنْ حَيْثِ", "مِنْ حَيْثُ", "حيثُ is always ḍamma."]],
  tips: [{ t: "Learn fixed words with their vowel", b: `Make a little list and say each word with “built on…”: <span class="ar">كَمْ – سُكُون، أَيْنَ – فَتْح، حَيْثُ – ضَمّ، أَمْسِ – كَسْر</span>.` }]
});
