// الدرس ١٨ — المبني والمعرب (PDF pp. 95–97)
COURSE.add({
  n: 18, pages: [95, 97], method: true,
  summary: "Some words never change their last vowel, whatever their job: they are مَبْنِيّ (“built”, fixed), like أَيْنَ، هَذَا، كَتَبَ، اُكْتُبْ and every particle. Others change their ending with their job: they are مُعْرَب (declinable), like most nouns and the present verb. This lesson sorts the whole language into these two groups.",
  objectives: [
    "define مبني (fixed ending) and معرب (changing ending)",
    "know that all particles, all past verbs and all imperatives are مبني",
    "know that most nouns and the present verb are معرب",
    "spot fixed nouns: pronouns, demonstratives, some question words (هذا، أين، حيث، هو)"
  ],

  lesson: [
    { id: "two", t: "Endings that change, endings that never do", ar: "المبني والمعرب", pos: "case endings", pages: "95–96",
      b: `<p>Put the word <span class="ar">الدَّرَّاجَةُ</span> (the bicycle) in three sentences: <span class="ar">الدَّرَّاجَةُ سَرِيعَةٌ · رَكِبْتُ الدَّرَّاجَةَ · جَلَسْتُ عَلَى الدَّرَّاجَةِ</span>. Its last vowel changes with its job: it is <b>muʿrab</b> (<span class="ar">مُعْرَب</span>, declinable).</p>
        <p>Now do the same with <span class="ar">أَيْنَ</span> (where) or <span class="ar">هَذَا</span> (this): <span class="ar">هَذَا كِتَابٌ · رَأَيْتُ هَذَا · نَظَرْتُ إِلَى هَذَا</span>. The ending never moves: it is <b>mabnī</b> (<span class="ar">مَبْنِيّ</span>, “built”, fixed like a building).</p>`,
      widget: "transform",
      wd: { title: "Does the ending move?", sets: [
        { base: ["[[الدَّرَّاجَةُ]] سَرِيعَةٌ", "The bicycle is fast."], baseLabel: "rafʿ", ops: [["naṣb", "رَكِبْتُ [[الدَّرَّاجَةَ]]", "I rode the bicycle.", "Changes → مُعْرَب."], ["jarr", "جَلَسْتُ عَلَى [[الدَّرَّاجَةِ]]", "I sat on the bicycle."]] },
        { base: ["[[هَذَا]] كِتَابٌ", "This is a book."], baseLabel: "subject", ops: [["object", "قَرَأْتُ [[هَذَا]] الكِتَابَ", "I read this book.", "Same form → مَبْنِيّ."], ["after a preposition", "نَظَرْتُ إِلَى [[هَذَا]] الكِتَابِ", "I looked at this book.", "Still هَذَا."]] }
      ] },
      rule: `<p><span class="ar">الكَلِمَاتُ قِسْمَانِ: مَا يَثْبُتُ آخِرُهُ عَلَى حَالٍ وَاحِدَةٍ فِي جَمِيعِ التَّرَاكِيبِ وَيُسَمَّى مَبْنِيًّا، وَمَا يَتَغَيَّرُ آخِرُهُ وَيُسَمَّى مُعْرَبًا. الحُرُوفُ كُلُّهَا مَبْنِيَّةٌ، وَكَذَلِكَ جَمِيعُ الأَفْعَالِ المَاضِيَةِ وَجَمِيعُ أَفْعَالِ الأَمْرِ.</span></p><p>Words are of two kinds: those whose ending stays the same in every construction (mabnī), and those whose ending changes (muʿrab). All particles are mabnī, and so are all past verbs and all imperatives.</p>`,
      check: [["Which word is mabnī?", ["أَيْنَ", "البَيْتُ", "يَكْتُبُ"], 0, "Its ending never changes.", false]] },

    { id: "map", t: "Who is fixed, who changes?", ar: "خريطة البناء والإعراب", pos: "parts of speech", pages: "96",
      b: `<table class="g"><tr><th></th><th>مبني · fixed</th><th>معرب · declinable</th></tr>
        <tr><td>particles <span class="ar">الحروف</span></td><td>all: <span class="ar">مِنْ، فِي، لَمْ، إِنَّ، هَلْ</span></td><td>—</td></tr>
        <tr><td>past verb <span class="ar">الماضي</span></td><td>all: <span class="ar">كَتَبَ، كَتَبُوا، كَتَبْتُ</span></td><td>—</td></tr>
        <tr><td>imperative <span class="ar">الأمر</span></td><td>all: <span class="ar">اُكْتُبْ، اُدْعُ</span></td><td>—</td></tr>
        <tr><td>present verb <span class="ar">المضارع</span></td><td>only with nūn of emphasis or of women (lesson 23)</td><td>normally: <span class="ar">يَكْتُبُ، لَنْ يَكْتُبَ، لَمْ يَكْتُبْ</span></td></tr>
        <tr><td>nouns <span class="ar">الأسماء</span></td><td>a few: pronouns, demonstratives, relatives, some question words: <span class="ar">هُوَ، هَذَا، الَّذِي، أَيْنَ، كَيْفَ، حَيْثُ</span></td><td>most: <span class="ar">كِتَابٌ، مُحَمَّدٌ، جَمِيلٌ</span></td></tr></table>`,
      widget: "sorter",
      wd: { title: "Mabnī or muʿrab?", bins: [["مبني", "fixed"], ["معرب", "declinable"]],
        items: [["فِي", 0, "particle"], ["كَتَبَ", 0, "past verb"], ["اُكْتُبْ", 0, "imperative"], ["يَكْتُبُ", 1, "present verb"], ["الكِتَابُ", 1, "ordinary noun"], ["هُوَ", 0, "pronoun"], ["هَذِهِ", 0, "demonstrative"], ["أَيْنَ", 0, "question word"], ["حَدِيقَةٌ", 1, ""], ["لَمْ", 0, "particle"]] },
      check: [["Past verbs are…", ["all mabnī", "all muʿrab"], 0, "", false], ["The present verb is normally…", ["muʿrab", "mabnī"], 0, "", false]] },

    { id: "why", t: "Why should I care?", ar: "فائدة التمييز", pos: "case endings",
      b: `<p>Knowing which words are fixed saves you from wrong endings. You never “fix” the ending of <span class="ar">هَذَا</span> or <span class="ar">أَيْنَ</span>; you only think about endings for declinable words. In parsing, the book says <span class="ar">مَبْنِيٌّ عَلَى …</span> (“built on …”) for fixed words and <span class="ar">مَرْفُوعٌ / مَنْصُوبٌ…</span> for declinable ones. The next two lessons name the possible fixed endings (lesson 19) and the possible changing ones (lesson 20).</p>`,
      check: [["Do you ever change the ending of حَيْثُ?", ["no — it is always ḍamma", "yes, with its job"], 0, "", false]] }
  ],

  scenes: [
    { h: "أَيْنَ مَنْزِلُكَ؟", en: "Where is your house?", pic: "🏠", lines: [
      ["سَعِيدٌ", "أَيْنَ مَنْزِلُكَ يَا كَرِيمُ؟", "Where is your house, Karim?"],
      ["كَرِيمٌ", "مَنْزِلِي هُنَاكَ، حَيْثُ تَرَى الشَّجَرَةَ الكَبِيرَةَ.", "My house is there, where you see the big tree."],
      ["سَعِيدٌ", "هَذَا مَنْزِلٌ جَمِيلٌ! مَنْ يَسْكُنُ مَعَكَ؟", "That's a lovely house! Who lives with you?"],
      ["كَرِيمٌ", "يَسْكُنُ مَعِي أَبِي وَأُمِّي وَأُخْتِي.", "My father, mother and sister live with me."],
      ["سَعِيدٌ", "زُرْنِي غَدًا فِي مَنْزِلِي.", "Visit me tomorrow at my house."]],
      note: "Fixed words: أَيْنَ، هُنَاكَ، حَيْثُ، هَذَا، مَنْ، زُرْ (imperative), and all the particles. Declinable: مَنْزِلُ / مَنْزِلٌ / مَنْزِلِي، الشَّجَرَةَ، يَسْكُنُ…" }
  ],

  vocab: [
    ["مَبْنِيٌّ", "fixed (built) ending", "adj.", "", "grammar term", "", "Grammar words"],
    ["مُعْرَبٌ", "declinable", "adj.", "", "grammar term", "", "Grammar words"],
    ["بِنَاءٌ", "fixedness (of an ending)", "n.m", "", "grammar term", "", "Grammar words"],
    ["إِعْرَابٌ", "declension, case endings", "n.m", "", "grammar term", "", "Grammar words"],
    ["أَيْنَ", "where?", "n.", "", "mabnī on fatḥa", "", "Fixed nouns"],
    ["كَيْفَ", "how?", "n.", "", "mabnī on fatḥa", "", "Fixed nouns"],
    ["حَيْثُ", "where (relative)", "n.", "", "mabnī on ḍamma", "", "Fixed nouns"],
    ["هُنَا", "here", "n.", "", "mabnī", "", "Fixed nouns"],
    ["هُنَاكَ", "there", "n.", "", "mabnī", "", "Fixed nouns"],
    ["مَنْ", "who", "n.", "", "mabnī on sukūn", "", "Fixed nouns"],
    ["هَذَا", "this (m)", "n.", "", "mabnī", "", "Fixed nouns"],
    ["هَذِهِ", "this (f)", "n.", "", "mabnī", "", "Fixed nouns"],
    ["مَنْزِلٌ", "house, home", "n.m", "🏠", "", "مَنَازِلُ", "Nouns"],
    ["دَرَّاجَةٌ", "bicycle", "n.f", "🚲", "", "دَرَّاجَاتٌ", "Nouns"],
    ["سَكَنَ", "to live, reside", "v.", "", "يَسْكُنُ", "", "Verbs"],
    ["زَارَ", "to visit", "v.", "", "يَزُورُ · زُرْ", "", "Verbs"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Mabnī or muʿrab?", cats: ["مبني", "معرب"], items: [
      ["عَلَى", "0", ""], ["جَلَسَ", "0", ""], ["يَجْلِسُ", "1", ""], ["اِجْلِسْ", "0", ""], ["الكُرْسِيُّ", "1", ""], ["هِيَ", "0", ""], ["كَيْفَ", "0", ""], ["طَالِبٌ", "1", ""], ["إِنَّ", "0", ""], ["تَلْعَبُ", "1", ""]] },
    { k: "irab", t: "مَا نَوْعُ الكَلِمَةِ؟ · Fixed or declinable in this sentence?", cats: ["مبني", "معرب"], items: [
      ["[أَيْنَ] مَنْزِلُكَ؟", "0", ""], ["أَيْنَ [مَنْزِلُكَ]؟", "1", ""], ["[سَافَرَ] أَبِي.", "0", "past verb"], ["[يُسَافِرُ] أَبِي غَدًا.", "1", "present verb"], ["[هَذِهِ] حَدِيقَةٌ.", "0", ""], ["هَذِهِ [حَدِيقَةٌ].", "1", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [
      ["All particles are mabnī.", true, ""], ["All nouns are muʿrab.", false, "Pronouns, demonstratives… are mabnī."], ["The imperative is mabnī.", true, ""], ["The present verb is normally muʿrab.", true, ""], ["هَذَا changes to هَذَى in naṣb.", false, "It never changes."]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["Which changes its ending?", ["السَّمَاءُ", "مِنْ", "حَيْثُ"], 0, ""], ["Which is a fixed noun?", ["هُوَ", "رَجُلٌ", "يَدٌ"], 0, ""], ["Which verb type is muʿrab?", ["المضارع", "الماضي", "الأمر"], 0, ""]] }
  ],

  drills: [
    ["مَبْنِيٌّ means…", ["its ending never changes", "its ending changes"], 0, ""],
    ["مُعْرَبٌ means…", ["its ending changes with its job", "it has no ending"], 0, ""],
    ["Which is mabnī?", ["كَتَبَ", "يَكْتُبُ", "كِتَابٌ"], 0, ""],
    ["Which is muʿrab?", ["المَدْرَسَةُ", "فِي", "اُدْرُسْ"], 0, ""],
    ["Particles are…", ["all mabnī", "all muʿrab", "mixed"], 0, ""],
    ["Pronouns like أَنَا، هُوَ are…", ["mabnī", "muʿrab"], 0, ""],
    ["Which is NOT mabnī?", ["يَلْعَبُ", "لَعِبَ", "اِلْعَبْ"], 0, ""],
    ["أَيْنَ in أَيْنَ الكِتَابُ؟ is…", ["mabnī", "muʿrab"], 0, ""]
  ],

  comp: [
    ["Where is Karim's house?", ["where the big tree is", "next to the school", "by the river"], 0, 0],
    ["Who lives with Karim?", ["his father, mother and sister", "his grandfather", "nobody"], 0, 0]
  ],

  cheat: `<h3>المبني والمعرب</h3>
    <div class="rule"><span class="ar">المَبْنِيُّ: يَثْبُتُ آخِرُهُ · المُعْرَبُ: يَتَغَيَّرُ آخِرُهُ</span></div>
    <ul><li>Always mabnī: all particles, all past verbs, all imperatives.</li><li>Mabnī nouns: pronouns, demonstratives, relatives, some question words (<span class="ar">هُوَ، هَذَا، الَّذِي، أَيْنَ، كَيْفَ، حَيْثُ</span>).</li><li>Muʿrab: most nouns, and the present verb.</li></ul>`,
  mistakes: [["رَأَيْتُ هَذَى", "رَأَيْتُ هَذَا", "Demonstratives are mabnī: no change."], ["فِي البَيْتُ", "فِي البَيْتِ", "البيت is muʿrab: kasra after في."]],
  tips: [{ t: "Two questions per word", b: `Before giving any word an ending, ask: is it fixed (mabnī)? If yes, leave it alone. If not, ask what its job is — and only then choose rafʿ, naṣb, jarr or jazm.` }]
});
