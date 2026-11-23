// الدرس ٢٠ — أنواع الإعراب (PDF pp. 101–105)
COURSE.add({
  n: 20, pages: [101, 105], method: true,
  summary: "A declinable word can be in four states (أنواع الإعراب): rafʿ, naṣb, jarr and jazm. Nouns and present verbs share rafʿ and naṣb; jarr belongs to nouns only, jazm to verbs only. The original signs are ḍamma, fatḥa, kasra and sukūn — and this lesson gathers everything you learnt in Part 1 into one map.",
  objectives: [
    "name the four states: الرفع، النصب، الجر، الجزم",
    "know which belong to nouns and which to verbs",
    "give the original sign of each",
    "use the full parsing formula: … مرفوع وعلامة رفعه الضمة"
  ],

  lesson: [
    { id: "four", t: "Four states of a declinable word", ar: "أنواع الإعراب", pos: "case endings", pages: "101–102",
      b: `<p>In the book's examples, <span class="ar">الطَّائِرُ يُغَرِّدُ</span>, <span class="ar">رَأَيْتُ الطَّائِرَ</span>, <span class="ar">نَظَرْتُ إِلَى الطَّائِرِ</span>, <span class="ar">لَمْ يُغَرِّدْ</span> — the last letter takes four different states. These are the <b>kinds of iʿrāb</b>:</p>
        <table class="g"><tr><th>state</th><th>original sign</th><th>nouns?</th><th>present verbs?</th></tr>
        <tr><td><span class="ar">الرَّفْعُ</span></td><td class="end-u">ḍamma ـُ</td><td>✓</td><td>✓</td></tr>
        <tr><td><span class="ar">النَّصْبُ</span></td><td class="end-a">fatḥa ـَ</td><td>✓</td><td>✓</td></tr>
        <tr><td><span class="ar">الجَرُّ</span></td><td class="end-i">kasra ـِ</td><td>✓</td><td>✗</td></tr>
        <tr><td><span class="ar">الجَزْمُ</span></td><td class="end-o">sukūn ـْ</td><td>✗</td><td>✓</td></tr></table>
        <p>So a <b>noun</b> can never be majzūm, and a <b>verb</b> can never be majrūr.</p>`,
      rule: `<p><span class="ar">الأَحْوَالُ الَّتِي تَعْتَرِي أَوَاخِرَ الكَلِمَاتِ المُعْرَبَةِ أَرْبَعٌ: الرَّفْعُ وَالنَّصْبُ وَالجَرُّ وَالجَزْمُ، وَتُسَمَّى أَنْوَاعَ الإِعْرَابِ. يَشْتَرِكُ الاسْمُ وَالفِعْلُ فِي الرَّفْعِ وَالنَّصْبِ، وَيَخْتَصُّ الاسْمُ بِالجَرِّ، وَالفِعْلُ بِالجَزْمِ.</span></p><p>The states of declinable words are four: rafʿ, naṣb, jarr and jazm. Nouns and verbs share rafʿ and naṣb; jarr is for nouns only and jazm for verbs only.</p>`,
      widget: "transform",
      wd: { title: "Noun and verb through the four states", sets: [
        { base: ["[[الطَّائِرُ]] يُغَرِّدُ", "The bird is singing."], baseLabel: "noun: rafʿ", ops: [["noun: naṣb", "رَأَيْتُ [[الطَّائِرَ]]", "I saw the bird."], ["noun: jarr", "نَظَرْتُ إِلَى [[الطَّائِرِ]]", "I looked at the bird."], ["noun: jazm?", "—", "Impossible: nouns are never majzūm."]] },
        { base: ["[[يُغَرِّدُ]] الطَّائِرُ", "The bird sings."], baseLabel: "verb: rafʿ", ops: [["verb: naṣb", "لَنْ [[يُغَرِّدَ]] الطَّائِرُ", "The bird won't sing."], ["verb: jazm", "لَمْ [[يُغَرِّدِ]] الطَّائِرُ", "The bird didn't sing.", "Sukūn, turned to kasra before ال."], ["verb: jarr?", "—", "Impossible: verbs are never majrūr."]] }
      ] },
      check: [["Can a noun be majzūm?", ["no", "yes"], 0, "", false], ["Which state is for nouns only?", ["الجر", "النصب", "الرفع"], 0, "", false]] },

    { id: "map", t: "Everything from Part 1, in one map", ar: "مراجعة: مواضع الإعراب", pos: "case endings", pages: "102–105",
      b: `<table class="g"><tr><th>state</th><th>nouns</th><th>verbs</th></tr>
        <tr><td><span class="ar">الرفع</span></td><td>doer, mubtadaʾ, khabar, ism of kāna, khabar of inna, naʿt of a marfūʿ noun</td><td>present verb with no naṣb/jazm particle</td></tr>
        <tr><td><span class="ar">النصب</span></td><td>object, khabar of kāna, ism of inna, naʿt of a manṣūb noun</td><td>after أن، لن، كي، إذن</td></tr>
        <tr><td><span class="ar">الجر</span></td><td>after a preposition, naʿt of a majrūr noun</td><td>—</td></tr>
        <tr><td><span class="ar">الجزم</span></td><td>—</td><td>after لم، لا الناهية، إن</td></tr></table>
        <p>The full map, growing with every lesson, is on the <a href="#/irab">Iʿrāb map</a> page.</p>`,
      widget: "parse",
      wd: { title: "Name the state of each word", legend: { raf: ["rafʿ", "مرفوع"], nasb: ["naṣb", "منصوب"], jarr: ["jarr", "مجرور"], jazm: ["jazm", "مجزوم"], mabni: ["fixed", "مبني"] }, sents: [
        { en: "The farmer wants to water the field in the morning.", w: [["يُرِيدُ", "raf", "Present verb, no particle."], ["الفَلَّاحُ", "raf", "Doer."], ["أَنْ", "mabni", "Particle: fixed on sukūn."], ["يَسْقِيَ", "nasb", "After أن (fatḥa on the yāʾ)."], ["الحَقْلَ", "nasb", "Object."], ["فِي", "mabni", "Particle."], ["الصَّبَاحِ", "jarr", "After a preposition."]] },
        { en: "Indeed, the lazy one didn't succeed.", w: [["إِنَّ", "mabni", "Particle, fixed on fatḥa."], ["الكَسُولَ", "nasb", "Ism of inna."], ["لَمْ", "mabni", "Particle."], ["يَنْجَحْ", "jazm", "After لم."]] }
      ] },
      check: [["The khabar of kāna is…", ["منصوب", "مرفوع"], 0, "", false]] },

    { id: "formula", t: "The full parsing formula", ar: "صيغة الإعراب", pos: "case endings",
      b: `<p>For a declinable word, name its job, its state and its sign:</p>
        <div class="rule"><p><span class="ar">[job] + [state] + وَعَلَامَةُ [state-noun]هِ + [sign]</span></p>
        <p><span class="ar">الفَلَّاحُ: فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p>
        <p><span class="ar">الحَقْلَ: مَفْعُولٌ بِهِ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></p>
        <p><span class="ar">الصَّبَاحِ: اسْمٌ مَجْرُورٌ، وَعَلَامَةُ جَرِّهِ الكَسْرَةُ.</span></p>
        <p><span class="ar">يَنْجَحْ: فِعْلٌ مُضَارِعٌ مَجْزُومٌ، وَعَلَامَةُ جَزْمِهِ السُّكُونُ.</span></p></div>
        <p>From now on the book also meets <b>other signs</b> (<span class="ar">علامات فرعية</span>): a letter instead of a vowel (dual, plurals, five nouns, five verbs), a hidden vowel (weak endings), or a dropped letter. Lessons 25–38 cover them.</p>`,
      check: [["Complete: الكِتَابَ: مفعول به منصوب وعلامة ___ الفتحة", ["نصبه", "رفعه", "جره"], 0, "", false]] }
  ],

  scenes: [
    { h: "فِي حَدِيقَةِ الحَيَوَانِ", en: "At the zoo", pic: "🦁", lines: [
      ["", "ذَهَبْنَا إِلَى حَدِيقَةِ الحَيَوَانِ يَوْمَ الجُمُعَةِ.", "We went to the zoo on Friday."],
      ["", "رَأَيْنَا الأَسَدَ فِي قَفَصٍ كَبِيرٍ.", "We saw the lion in a big cage."],
      ["", "الفِيلُ ضَخْمٌ، وَالزَّرَافَةُ طَوِيلَةُ العُنُقِ.", "The elephant is huge, and the giraffe has a long neck."],
      ["", "أَرَادَ أَخِي أَنْ يُطْعِمَ القِرْدَ، فَقَالَ الحَارِسُ: لَا تُطْعِمْهُ.", "My brother wanted to feed the monkey, and the keeper said: don't feed it."],
      ["", "لَمْ نَشْعُرْ بِالتَّعَبِ، لِأَنَّ اليَوْمَ كَانَ جَمِيلًا.", "We didn't feel tired, because the day was lovely."]],
      note: "All four states appear: rafʿ (الفِيلُ، ضَخْمٌ، الحَارِسُ…), naṣb (الأَسَدَ، يُطْعِمَ، القِرْدَ، جَمِيلًا), jarr (حَدِيقَةِ، قَفَصٍ، التَّعَبِ…), jazm (لا تُطْعِمْهُ، لَمْ نَشْعُرْ)." }
  ],

  vocab: [
    ["الرَّفْعُ", "rafʿ (nominative / indicative)", "n.m", "", "grammar term", "", "Grammar words"],
    ["النَّصْبُ", "naṣb (accusative / subjunctive)", "n.m", "", "grammar term", "", "Grammar words"],
    ["الجَرُّ", "jarr (genitive)", "n.m", "", "grammar term", "", "Grammar words"],
    ["الجَزْمُ", "jazm (jussive)", "n.m", "", "grammar term", "", "Grammar words"],
    ["عَلَامَةٌ", "sign, mark", "n.f", "", "", "عَلَامَاتٌ", "Grammar words"],
    ["أَسَدٌ", "lion", "n.m", "🦁", "", "أُسُودٌ", "The zoo"],
    ["فِيلٌ", "elephant", "n.m", "🐘", "", "فِيَلَةٌ", "The zoo"],
    ["زَرَافَةٌ", "giraffe", "n.f", "🦒", "", "زَرَافَاتٌ", "The zoo"],
    ["قِرْدٌ", "monkey", "n.m", "🐒", "", "قُرُودٌ", "The zoo"],
    ["نَمِرٌ", "tiger", "n.m", "🐅", "", "نُمُورٌ", "The zoo"],
    ["ضَخْمٌ", "huge", "adj.", "", "f. ضَخْمَةٌ", "", "The zoo"],
    ["تَعَبٌ", "tiredness", "n.m", "😓", "", "", "The zoo"],
    ["يَوْمُ الجُمُعَةِ", "Friday", "n.m", "📅", "", "", "The zoo"],
    ["شَعَرَ", "to feel", "v.", "", "يَشْعُرُ", "", "Verbs"],
    ["غَرَّدَ", "to sing (bird)", "v.", "", "يُغَرِّدُ", "", "Verbs"]
  ],

  exercises: [
    { k: "irab", t: "مَا نَوْعُ إِعْرَابِ الكَلِمَةِ؟ · Which state?", cats: ["مرفوع", "منصوب", "مجرور", "مجزوم"], items: [
      ["[الفِيلُ] ضَخْمٌ.", "0", "mubtadaʾ"], ["رَأَيْنَا [الأَسَدَ].", "1", "object"], ["فِي [قَفَصٍ] كَبِيرٍ.", "2", ""], ["لَمْ [نَشْعُرْ] بِالتَّعَبِ.", "3", ""], ["أَرَادَ أَنْ [يُطْعِمَ] القِرْدَ.", "1", ""], ["كَانَ اليَوْمُ [جَمِيلًا].", "1", "khabar of kāna"], ["إِنَّ [القِرْدَ] ذَكِيٌّ.", "1", "ism of inna"], ["إِنَّ القِرْدَ [ذَكِيٌّ].", "0", "khabar of inna"]] },
    { k: "sort", t: "لِمَنْ هَذِهِ الحَالَةُ؟ · Nouns, verbs or both?", cats: ["الأسماء والأفعال", "الأسماء فقط", "الأفعال فقط"], items: [["الرفع", "0", ""], ["النصب", "0", ""], ["الجر", "1", ""], ["الجزم", "2", ""]] },
    { k: "shakl", t: "اضْبِطْ · Vowel the endings", marks: ["ُ", "َ", "ِ", "ْ"], items: [
      "ذَهَبَ الوَلَد{ُ} إِلَى السُّوق{ِ}", "لَنْ يَتَأَخَّر{َ} القِطَارُ", "لَا تَلْعَب{ْ} فِي الطَّرِيقِ", "لَمْ يَحْضُر{ْ} أَحَدٌ"] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["Verbs can be majrūr.", false, ""], ["Nouns can be manṣūb.", true, ""], ["The original sign of jazm is sukūn.", true, ""], ["There are four kinds of iʿrāb.", true, ""]] }
  ],

  drills: [
    ["Kinds of iʿrāb:", ["الرفع، النصب، الجر، الجزم", "السكون، الفتح، الضم، الكسر"], 0, ""],
    ["Jarr belongs to…", ["nouns only", "verbs only", "both"], 0, ""],
    ["Jazm belongs to…", ["verbs only", "nouns only", "both"], 0, ""],
    ["Original sign of naṣb:", ["الفتحة", "الكسرة"], 0, ""],
    ["Original sign of jarr:", ["الكسرة", "الضمة"], 0, ""],
    ["إِنَّ ___ ذَكِيٌّ", ["القِرْدَ", "القِرْدُ", "القِرْدِ"], 0, ""],
    ["Complete: يَنْجَحْ: فعل مضارع مجزوم وعلامة جزمه ___", ["السكون", "الفتحة"], 0, ""],
    ["Which state is impossible for يَكْتُبُ?", ["الجر", "النصب", "الجزم"], 0, ""]
  ],

  comp: [["When did they go to the zoo?", ["on Friday", "on Monday", "yesterday"], 0, 0], ["What did the keeper say?", ["don't feed it", "feed it", "go home"], 0, 0], ["Why weren't they tired?", ["the day was lovely", "they slept", "they went by car"], 0, 0]],

  cheat: `<h3>أنواع الإعراب</h3><table class="g"><tr><th></th><th>sign</th><th>nouns</th><th>verbs</th></tr>
    <tr><td><span class="ar">الرفع</span></td><td class="end-u">ـُ</td><td>✓</td><td>✓</td></tr><tr><td><span class="ar">النصب</span></td><td class="end-a">ـَ</td><td>✓</td><td>✓</td></tr><tr><td><span class="ar">الجر</span></td><td class="end-i">ـِ</td><td>✓</td><td>✗</td></tr><tr><td><span class="ar">الجزم</span></td><td class="end-o">ـْ</td><td>✗</td><td>✓</td></tr></table>
    <p class="ar">… مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ · مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ · مَجْرُورٌ وَعَلَامَةُ جَرِّهِ الكَسْرَةُ · مَجْزُومٌ وَعَلَامَةُ جَزْمِهِ السُّكُونُ</p>`,
  mistakes: [["الكِتَابْ (as majzūm)", "—", "Nouns are never majzūm."], ["لِيَكْتُبِ (as majrūr)", "—", "Verbs are never majrūr; a kasra on a verb is only for joining (لم يكتبِ الولدُ)."]],
  tips: [{ t: "Parse one sentence a day", b: `Choose one sentence from any Arabic text and parse every word with the full formula. In a month the formula will be second nature.` }]
});
