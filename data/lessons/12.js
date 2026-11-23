// الدرس ١٢ — رفع الفعل المضارع (PDF pp. 59–62)
COURSE.add({
  n: 12, pages: [59, 62], method: true,
  summary: "When no naṣb particle (أن، لن، كي، إذن) and no jazm particle (لم، لا الناهية، إن) comes before it, the present verb is marfūʿ and ends in ḍamma. This lesson pulls the three moods together so you can choose the right ending every time.",
  objectives: [
    "state when the present verb is marfūʿ",
    "know the “harmless” words that leave it marfūʿ: سَـ، سَوْفَ، لا (negation)، هل، ما",
    "choose between rafʿ, naṣb and jazm in any sentence",
    "parse a marfūʿ present verb"
  ],

  lesson: [
    { id: "rule", t: "No particle, no change: ḍamma", ar: "متى يُرفع المضارع؟", pos: "conjugation", pages: "59–60",
      b: `<p>In <span class="ar">يُرِيدُ عَلِيٌّ أَنْ يَلْعَبَ بِالكُرَةِ</span>, two present verbs: <span class="ar">يَلْعَبَ</span> has a fatḥa because <span class="ar">أَنْ</span> comes before it; <span class="ar">يُرِيدُ</span> has a ḍamma because nothing of the sort comes before it. That is the whole rule: the present verb is <b>marfūʿ by default</b>.</p>`,
      rule: `<p><span class="ar">يُرْفَعُ الفِعْلُ المُضَارِعُ إِذَا لَمْ تَسْبِقْهُ أَدَاةٌ مِنْ أَدَوَاتِ النَّصْبِ أَوِ الجَزْمِ.</span></p><p>The present verb is marfūʿ when no naṣb or jazm particle comes before it.</p>`,
      widget: "parse",
      wd: { title: "Why this ending?", legend: { raf: ["marfūʿ ـُ", "مرفوع"], nasb: ["manṣūb ـَ", "منصوب"], jazm: ["majzūm ـْ", "مجزوم"], other: ["particle / other", "أداة / غيرها"] }, sents: [
        { en: "Ali wants to play with the ball.", w: [["يُرِيدُ", "raf", "No particle before it → marfūʿ."], ["عَلِيٌّ", "other", "Doer."], ["أَنْ", "other", "Naṣb particle."], ["يَلْعَبَ", "nasb", "After أن → manṣūb."], ["بِالكُرَةِ", "other", "Preposition + noun."]] },
        { en: "The children are pulling the rope.", w: [["يَشُدُّ", "raf", "No particle → marfūʿ."], ["الأَطْفَالُ", "other", "Doer."], ["الحَبْلَ", "other", "Object."]] },
        { en: "The bull ploughs the land, and the lazy one didn't work.", w: [["يَحْرُثُ", "raf", "marfūʿ"], ["الثَّوْرُ", "other", ""], ["الأَرْضَ", "other", ""], ["وَلَمْ", "other", "and + jazm particle"], ["يَعْمَلِ", "jazm", "After لم → majzūm (kasra only to join with ال)."], ["الكَسُولُ", "other", ""]] }
      ] },
      check: [["Why is يَحْرُثُ marfūʿ in الثَّوْرُ يَحْرُثُ الأَرْضَ?", ["no naṣb or jazm particle precedes it", "because it follows a noun"], 0, "", false]] },

    { id: "harmless", t: "Words that do NOT change the verb", ar: "أدوات لا تعمل في المضارع", pos: "conjugation",
      b: `<p>Some little words often stand before the present verb but are <b>not</b> naṣb or jazm particles, so the verb stays marfūʿ:</p>
        <table class="g"><tr><th>word</th><th>meaning</th><th>example</th></tr>
        <tr><td><span class="ar">سَـ / سَوْفَ</span></td><td>will</td><td><span class="ar">سَيَحْضُرُ أَبِي</span></td></tr>
        <tr><td><span class="ar">لَا</span> (negation)</td><td>does not</td><td><span class="ar">لَا يَكْذِبُ المُؤْمِنُ</span></td></tr>
        <tr><td><span class="ar">مَا</span></td><td>does not</td><td><span class="ar">مَا أَعْرِفُ الطَّرِيقَ</span></td></tr>
        <tr><td><span class="ar">هَلْ</span></td><td>(question)</td><td><span class="ar">هَلْ تُحِبُّ الرِّيَاضَةَ؟</span></td></tr>
        <tr><td><span class="ar">قَدْ</span></td><td>sometimes, may</td><td><span class="ar">قَدْ يَنْزِلُ المَطَرُ</span></td></tr></table>`,
      warn: `Watch the two <span class="ar">لَا</span>s. <span class="ar">لَا تَلْعَبُ</span> = “you don't play” (statement, marfūʿ); <span class="ar">لَا تَلْعَبْ</span> = “don't play!” (prohibition, majzūm).`,
      check: [["سَوْفَ ___ الطَّائِرَةُ.", ["تَصِلُ", "تَصِلَ", "تَصِلْ"], 0, "سوف doesn't change the verb.", "سَوْفَ تَصِلُ الطَّائِرَةُ"], ["هَلْ ___ السِّبَاحَةَ؟", ["تُحِبُّ", "تُحِبَّ"], 0, "هل doesn't change the verb.", "هَلْ تُحِبُّ السِّبَاحَةَ"]] },

    { id: "three", t: "All three moods together", ar: "المضارع بين الرفع والنصب والجزم", pos: "conjugation", pages: "60–62",
      b: `<p>You can now decide the ending of any present verb with one question: <b>what comes right before it?</b></p>
        <div class="blocks"><div class="blk c1"><span class="ar">يَكْتُبُ</span><small>nothing / سـ / لا / هل → rafʿ ـُ</small></div><div class="blk c2"><span class="ar">أَنْ · لَنْ · كَيْ · إِذَنْ يَكْتُبَ</span><small>naṣb ـَ</small></div><div class="blk c4"><span class="ar">لَمْ · لا · إِنْ يَكْتُبْ</span><small>jazm ـْ</small></div></div>`,
      widget: "transform",
      wd: { title: "One verb, every particle", sets: [
        { base: ["يَسْبَحُ الوَلَدُ فِي النَّهْرِ", "The boy swims in the river."], baseLabel: "nothing → ـُ", ops: [
          ["سَـ → ـُ", "[[سَ]]يَسْبَحُ الوَلَدُ فِي النَّهْرِ", "The boy will swim in the river.", "سـ: no change."],
          ["لا (negation) → ـُ", "[[لَا]] يَسْبَحُ الوَلَدُ فِي النَّهْرِ", "The boy doesn't swim in the river."],
          ["لَنْ → ـَ", "[[لَنْ]] يَسْبَ[[حَ]] الوَلَدُ فِي النَّهْرِ", "The boy won't swim in the river."],
          ["أَنْ → ـَ", "يُحِبُّ الوَلَدُ [[أَنْ]] يَسْبَ[[حَ]] فِي النَّهْرِ", "The boy loves to swim in the river."],
          ["لَمْ → ـْ / ـِ", "[[لَمْ]] يَسْبَ[[حِ]] الوَلَدُ فِي النَّهْرِ", "The boy didn't swim in the river.", "Sukūn, turned into kasra before ال."],
          ["لا (prohibition) → ـْ", "[[لَا]] تَسْبَ[[حْ]] فِي النَّهْرِ", "Don't swim in the river!"]] }
      ] },
      check: [["لَا يَسْبَحُ الوَلَدُ is…", ["a statement (he doesn't swim)", "a prohibition"], 0, "Third person + ḍamma: negation.", false]] },

    { id: "parse", t: "Parsing the marfūʿ verb", ar: "إعراب المضارع المرفوع", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">يَنْبَحُ الكَلْبُ.</span></p><p><span class="ar">يَنْبَحُ: فِعْلٌ مُضَارِعٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p><p><span class="ar">الكَلْبُ: فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p></div>
        <p>For the reason, add: <span class="ar">لِتَجَرُّدِهِ مِنَ النَّاصِبِ وَالجَازِمِ</span> — “because it is free of any naṣb or jazm particle.”</p>`,
      check: [["Parse سَيَحْضُرُ in سَيَحْضُرُ أَبِي:", ["فعل مضارع مرفوع وعلامة رفعه الضمة", "فعل مضارع منصوب", "فعل مضارع مجزوم"], 0, "سـ doesn't change it."]] }
  ],

  scenes: [
    { h: "فِي النَّادِي", en: "At the club", pic: "🏊", lines: [
      ["", "يَذْهَبُ سَعِيدٌ إِلَى النَّادِي كُلَّ يَوْمٍ.", "Said goes to the club every day."],
      ["", "يُحِبُّ أَنْ يَسْبَحَ، وَلَكِنَّهُ لَا يُحِبُّ كُرَةَ القَدَمِ.", "He loves to swim, but he doesn't like football."],
      ["", "أَمْسِ لَمْ يَسْبَحْ، لِأَنَّ المَاءَ كَانَ بَارِدًا.", "Yesterday he didn't swim, because the water was cold."],
      ["", "قَالَ لَهُ المُدَرِّبُ: لَا تَيْأَسْ، سَتَسْبَحُ غَدًا.", "The coach said to him: don't lose heart, you'll swim tomorrow."],
      ["", "يَقُولُ سَعِيدٌ: لَنْ أَتْرُكَ السِّبَاحَةَ أَبَدًا.", "Said says: I will never give up swimming."]],
      note: "Find the three moods: يَذْهَبُ، يُحِبُّ، لَا يُحِبُّ، سَتَسْبَحُ، يَقُولُ (rafʿ) · أَنْ يَسْبَحَ، لَنْ أَتْرُكَ (naṣb) · لَمْ يَسْبَحْ، لَا تَيْأَسْ (jazm)." },
    { h: "مَاذَا تَفْعَلُ فِي العُطْلَةِ؟", en: "What do you do in the holidays?", pic: "🏖️", lines: [
      ["هِنْدٌ", "مَاذَا تَفْعَلِينَ فِي العُطْلَةِ يَا مَرْيَمُ؟", "What do you do in the holidays, Maryam?"],
      ["مَرْيَمُ", "أَقْرَأُ القِصَصَ، وَأَزُورُ جَدَّتِي.", "I read stories and visit my grandmother."],
      ["هِنْدٌ", "هَلْ تُسَافِرِينَ؟", "Do you travel?"],
      ["مَرْيَمُ", "لَا، لَا أُسَافِرُ هَذَا العَامَ. وَأَنْتِ؟", "No, I'm not travelling this year. And you?"],
      ["هِنْدٌ", "سَأُسَافِرُ إِلَى الإِسْكَنْدَرِيَّةِ، وَأُرِيدُ أَنْ أَرَى البَحْرَ.", "I'll travel to Alexandria, and I want to see the sea."]],
      note: "Most present verbs here are marfūʿ: no particle, or هل، لا (negation), سـ before them. Only أَنْ أَرَى is manṣūb (its fatḥa is hidden on the alif — Part 2)." }
  ],

  vocab: [
    ["مَرْفُوعٌ", "in rafʿ (indicative)", "adj.", "", "grammar term", "", "Grammar words"],
    ["سَوْفَ", "will (future)", "part.", "", "short form: سَـ", "", "Particles"],
    ["مَا", "not (with verbs)", "part.", "", "", "", "Particles"],
    ["قَدْ", "may, sometimes (with present)", "part.", "", "", "", "Particles"],
    ["أَبَدًا", "never, ever", "adv.", "", "", "", "Particles"],
    ["نَادٍ", "club", "n.m", "🏟️", "with al-: النَّادِي", "أَنْدِيَةٌ", "Leisure"],
    ["كُرَةُ القَدَمِ", "football", "n.f", "⚽", "", "", "Leisure"],
    ["مُدَرِّبٌ", "coach, trainer", "n.m", "🧑‍🏫", "", "مُدَرِّبُونَ", "Leisure"],
    ["عُطْلَةٌ", "holiday", "n.f", "🏖️", "", "عُطَلٌ", "Leisure"],
    ["رِيَاضَةٌ", "sport", "n.f", "🏃", "", "", "Leisure"],
    ["حَبْلٌ", "rope", "n.m", "🪢", "", "حِبَالٌ", "Things"],
    ["ثَوْرٌ", "bull, ox", "n.m", "🐂", "", "ثِيرَانٌ", "Things"],
    ["الإِسْكَنْدَرِيَّةُ", "Alexandria", "n.f", "🏙️", "", "", "Things"],
    ["شَدَّ", "to pull, tighten", "v.", "", "يَشُدُّ", "", "Verbs"],
    ["حَرَثَ", "to plough", "v.", "", "يَحْرُثُ", "", "Verbs"],
    ["سَبَحَ", "to swim", "v.", "", "يَسْبَحُ", "", "Verbs"],
    ["يَئِسَ", "to despair, lose hope", "v.", "", "يَيْأَسُ", "", "Verbs"],
    ["عَرَفَ", "to know", "v.", "", "يَعْرِفُ", "", "Verbs"],
    ["فَعَلَ", "to do", "v.", "", "يَفْعَلُ", "", "Verbs"],
    ["وَصَلَ", "to arrive", "v.", "", "يَصِلُ", "", "Verbs"],
    ["عَمِلَ", "to work", "v.", "", "يَعْمَلُ", "", "Verbs"],
    ["كَسُولٌ", "lazy", "adj.", "", "", "كُسَالَى", "Describing words"]
  ],

  exercises: [
    { k: "shakl", t: "اضْبِطْ آخِرَ المُضَارِعِ · Choose the ending", marks: ["ُ", "َ", "ْ"], items: [
      "سَوْفَ يَصِل{ُ} القِطَارُ", "لَنْ يَصِل{َ} القِطَارُ اليَوْمَ", "لَمْ يَصِل{ْ} أَحَدٌ", "هَلْ تَعْرِف{ُ} الطَّرِيقَ؟", "لَا تَيْأَس{ْ}", "لَا يَيْأَس{ُ} المُؤْمِنُ", "أُحِبُّ أَنْ أَعْمَل{َ}"] },
    { k: "sort", t: "صَنِّفِ الأَدَوَاتِ · Sort the words that come before a verb", cats: ["ترفع (no change)", "تنصب", "تجزم"], items: [
      ["سَوْفَ", "0", ""], ["لَنْ", "1", ""], ["لَمْ", "2", ""], ["هَلْ", "0", ""], ["كَيْ", "1", ""], ["لَا (prohibition)", "2", ""], ["لَا (negation)", "0", ""], ["أَنْ", "1", ""], ["إِنْ", "2", ""], ["سَـ", "0", ""]] },
    { k: "irab", t: "مَا حَالَةُ الفِعْلِ؟ · Which mood?", cats: ["مرفوع", "منصوب", "مجزوم"], items: [
      ["أَرْجُو أَنْ [يَنْجَحَ] أَخِي.", "1", ""], ["[أَرْجُو] أَنْ يَنْجَحَ أَخِي.", "0", ""], ["لَمْ [يَتَأَخَّرْ] أَبِي.", "2", ""], ["سَوْفَ [يَعُودُ] أَبِي.", "0", ""], ["إِنْ تَزْرَعْ [تَحْصُدْ].", "2", ""], ["جِئْتُ كَيْ [أَتَعَلَّمَ].", "1", ""]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["المُؤْمِنُ لَا ___", ["يَكْذِبُ", "يَكْذِبْ", "يَكْذِبَ"], 0, "Negation: marfūʿ."], ["قَدْ ___ المَطَرُ.", ["يَنْزِلُ", "يَنْزِلَ", "يَنْزِلْ"], 0, ""], ["لَنْ ___ الكَسُولُ.", ["يَنْجَحَ", "يَنْجَحُ", "يَنْجَحْ"], 0, ""], ["لَمْ ___ الطَّائِرَةُ بَعْدُ.", ["تَصِلِ", "تَصِلُ", "تَصِلَ"], 0, "Majzūm; kasra to join."]] },
    { k: "tr", t: "تَرْجِمْ · Translate", items: [
      ["Will you travel? (to a boy)", "هل ستسافر|هَلْ سَتُسَافِرُ"], ["The believer does not lie.", "لا يكذب المؤمن|لَا يَكْذِبُ المُؤْمِنُ|المؤمن لا يكذب"], ["I'll visit my grandmother.", "سأزور جدتي|سَأَزُورُ جَدَّتِي"], ["I love to read stories.", "أحب أن أقرأ القصص|أُحِبُّ أَنْ أَقْرَأَ القِصَصَ"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["سَـ makes the present verb manṣūb.", false, ""], ["The present verb is marfūʿ by default.", true, ""], ["لَا تَيْأَسْ contains a prohibition.", true, ""], ["هَلْ is a jazm particle.", false, ""]] }
  ],

  drills: [
    ["When is the present verb marfūʿ?", ["when no naṣb or jazm particle precedes it", "always", "after لن"], 0, ""],
    ["سَيَنْجَحُ is…", ["marfūʿ", "manṣūb", "majzūm"], 0, ""],
    ["Which leaves the verb marfūʿ?", ["هَلْ", "لَمْ", "كَيْ"], 0, ""],
    ["لَا ___ الكَسُولُ. (statement)", ["يَنْجَحُ", "يَنْجَحْ"], 0, ""],
    ["لَا ___ يَا خَالِدُ! (prohibition)", ["تَتَأَخَّرْ", "تَتَأَخَّرُ"], 0, ""],
    ["Parse يَشُدُّ in يَشُدُّ الأَطْفَالُ الحَبْلَ:", ["فعل مضارع مرفوع وعلامة رفعه الضمة", "فعل ماضٍ", "منصوب"], 0, ""],
    ["The three signs: rafʿ ـُ, naṣb ـَ, jazm…", ["ـْ", "ـِ", "ـٌ"], 0, ""],
    ["أُرِيدُ أَنْ ___ وَلَكِنِّي ___", ["أَنَامَ · لَا أَسْتَطِيعُ", "أَنَامُ · لَا أَسْتَطِيعَ"], 0, ""],
    ["Which verb is NOT marfūʿ?", ["تَيْأَسْ in لا تيأس", "تَعْرِفُ in هل تعرف", "يَعُودُ in سوف يعود"], 0, ""],
    ["قَدْ before a present verb…", ["doesn't change it", "makes it majzūm"], 0, ""]
  ],

  comp: [
    ["How often does Said go to the club?", ["every day", "once a week", "never"], 0, 0],
    ["Why didn't he swim yesterday?", ["the water was cold", "he was ill", "the club was closed"], 0, 0],
    ["What does Said promise?", ["never to give up swimming", "to play football", "to change club"], 0, 0],
    ["What does Maryam do in the holidays?", ["reads stories and visits her grandmother", "travels", "swims"], 0, 1],
    ["Where will Hind travel?", ["to Alexandria", "to Cairo", "nowhere"], 0, 1]
  ],

  cheat: `<h3>رفع الفعل المضارع</h3>
    <div class="rule"><span class="ar">يُرْفَعُ المُضَارِعُ إِذَا لَمْ تَسْبِقْهُ أَدَاةُ نَصْبٍ أَوْ جَزْمٍ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></div>
    <table class="g"><tr><th>before the verb</th><th>mood</th><th>example</th></tr>
    <tr><td>nothing, <span class="ar">سَـ، سَوْفَ، لا (نافية)، ما، هل، قد</span></td><td>rafʿ ـُ</td><td><span class="ar">سَيَكْتُبُ</span></td></tr>
    <tr><td><span class="ar">أَنْ، لَنْ، كَيْ، إِذَنْ</span></td><td>naṣb ـَ</td><td><span class="ar">لَنْ يَكْتُبَ</span></td></tr>
    <tr><td><span class="ar">لَمْ، لا (ناهية)، إِنْ</span></td><td>jazm ـْ</td><td><span class="ar">لَمْ يَكْتُبْ</span></td></tr></table>`,
  mistakes: [
    ["سَيَنْجَحَ", "سَيَنْجَحُ", "سـ doesn't change the ending."],
    ["هَلْ تَعْرِفْ الطَّرِيقَ؟", "هَلْ تَعْرِفُ الطَّرِيقَ؟", "هل is not a jazm particle."],
    ["لَا يَكْذِبْ المُؤْمِنُ (meaning: the believer doesn't lie)", "لَا يَكْذِبُ المُؤْمِنُ", "A statement with لا: ḍamma."]
  ],
  tips: [
    { t: "Look one word back", b: `Before you say any present verb, glance at the word in front of it. That single word decides <i>-u</i>, <i>-a</i> or silence.` },
    { t: "Colour the moods", b: `In the Read tab, read the club text and tap each present verb: say “rafʿ”, “naṣb” or “jazm” and the reason (the particle) aloud.` }
  ]
});
