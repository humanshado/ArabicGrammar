// الدرس ٢٣ — أحوال بناء المضارع (PDF pp. 116–121)
COURSE.add({
  n: 23, pages: [116, 121], method: true,
  summary: "The present verb is normally declinable, but in two cases it becomes fixed: with the nūn of emphasis directly attached it is built on fatḥa (لَأَجْتَهِدَنَّ، لَا تُهْمِلَنَّ), and with the nūn of women it is built on sukūn (البَنَاتُ يَلْعَبْنَ). In all other cases it is muʿrab.",
  objectives: [
    "recognise the nūn of emphasis (ـَنَّ / ـَنْ) and its meaning",
    "know the present is built on fatḥa with it",
    "recognise the nūn of women and know the present is built on sukūn with it",
    "keep the verb muʿrab otherwise, even after particles"
  ],

  lesson: [
    { id: "tawkid", t: "The nūn of emphasis: fixed on fatḥa", ar: "نون التوكيد", pos: "conjugation", pages: "116–117",
      b: `<p>Add <span class="ar">ـنَّ</span> (heavy) or <span class="ar">ـنْ</span> (light) to the present verb and it gains strong emphasis: <span class="ar">لَأَجْتَهِدَنَّ</span> “I <i>will</i> work hard, I swear!”. The verb before the nūn takes a fatḥa and can no longer change: it is <b>mabnī on fatḥa</b>, whatever particle comes before it.</p>`,
      widget: "transform",
      wd: { title: "Plain vs emphatic", sets: [
        { base: ["أَجْتَهِدُ", "I work hard."], baseLabel: "plain", ops: [["emphatic oath", "[[لَ]]أَجْتَهِدَ[[نَّ]]", "I will certainly work hard!", "لَـ of oath + verb + نَّ: built on fatḥa."]] },
        { base: ["لَا تُهْمِلْ وَاجِبَكَ", "Don't neglect your duty."], baseLabel: "prohibition", ops: [["emphatic", "لَا تُهْمِلَ[[نَّ]] وَاجِبَكَ", "Don't you ever neglect your duty!", "Even after لا, the verb is now fixed on fatḥa, not majzūm."]] },
        { base: ["هَلْ تُسَافِرُ؟", "Are you travelling?"], baseLabel: "question", ops: [["emphatic", "هَلْ تُسَافِرَ[[نَّ]]؟", "Are you really travelling?"]] }
      ] },
      check: [["لَأُسَاعِدَنَّكَ is built on…", ["الفتح", "الضم"], 0, "", false]] },

    { id: "niswa", t: "The nūn of women: fixed on sukūn", ar: "نون النسوة", pos: "conjugation", pages: "117",
      b: `<p>For a group of women, the present verb ends in <span class="ar">ـْنَ</span>: <span class="ar">البَنَاتُ يَلْعَبْنَ</span> (the girls are playing), <span class="ar">أَنْتُنَّ تَكْتُبْنَ</span> (you women write). The letter before the nūn is silent, and the verb never changes: <b>mabnī on sukūn</b>, even after <span class="ar">لَنْ</span> or <span class="ar">لَمْ</span>:</p>
        <table class="g"><tr><th></th><th>men</th><th>women</th></tr>
        <tr><td>plain</td><td><span class="ar">يَلْعَبُونَ</span></td><td><span class="ar">يَلْعَبْنَ</span></td></tr>
        <tr><td>after لَنْ</td><td><span class="ar">لَنْ يَلْعَبُوا</span></td><td><span class="ar">لَنْ يَلْعَبْنَ</span> (no change)</td></tr>
        <tr><td>after لَمْ</td><td><span class="ar">لَمْ يَلْعَبُوا</span></td><td><span class="ar">لَمْ يَلْعَبْنَ</span> (no change)</td></tr></table>`,
      rule: `<p><span class="ar">يُبْنَى الفِعْلُ المُضَارِعُ عَلَى الفَتْحِ إِنِ اتَّصَلَتْ بِهِ نُونُ التَّوْكِيدِ، وَيُبْنَى عَلَى السُّكُونِ إِنِ اتَّصَلَتْ بِهِ نُونُ النِّسْوَةِ، وَيُعْرَبُ فِيمَا عَدَا ذَلِكَ.</span></p><p>The present verb is built on fatḥa with the nūn of emphasis, on sukūn with the nūn of women, and is declinable otherwise.</p>`,
      check: [["“The girls didn't play”:", ["لَمْ تَلْعَبِ البَنَاتُ / البَنَاتُ لَمْ يَلْعَبْنَ", "البَنَاتُ لَمْ يَلْعَبُوا"], 0, "", false]] },

    { id: "sort", t: "Fixed or declinable?", ar: "معرب أم مبني؟", pos: "case endings", pages: "118–121",
      widget: "sorter",
      wd: { title: "Present verbs: declinable or fixed?", bins: [["معرب", "declinable"], ["مبني على الفتح", "fixed on fatḥa"], ["مبني على السكون", "fixed on sukūn"]],
        items: [["يَكْتُبُ", 0, ""], ["لَنْ يَكْتُبَ", 0, "fatḥa here is a case sign"], ["لَيَكْتُبَنَّ", 1, ""], ["يَكْتُبْنَ", 2, ""], ["لَمْ يَكْتُبْ", 0, "sukūn here is a case sign"], ["لَا تَكْتُبَنَّ", 1, ""], ["لَنْ يَكْتُبْنَ", 2, ""]] },
      warn: `<span class="ar">لَنْ يَكْتُبَ</span> and <span class="ar">لَيَكْتُبَنَّ</span> both have fatḥa on the ب — but in the first it is a <b>case sign</b> (naṣb, could change), in the second it is <b>fixed</b> because of the nūn.`,
      check: [["Is لَنْ يَكْتُبَ fixed?", ["no — it's manṣūb", "yes"], 0, "", false]] }
  ],

  scenes: [
    { h: "عَهْدٌ", en: "A pledge", pic: "✋", lines: [
      ["المُدِيرُ", "يَا تَلَامِيذُ، هَلْ تَعِدُونَنِي بِالاجْتِهَادِ؟", "Pupils, do you promise me to work hard?"],
      ["سَعِيدٌ", "نَعَمْ، وَاللهِ لَأَجْتَهِدَنَّ هَذَا العَامَ.", "Yes, by God, I will work hard this year."],
      ["المُدِيرُ", "وَأَنْتِ يَا هِنْدُ؟", "And you, Hind?"],
      ["هِنْدٌ", "وَأَنَا لَأُذَاكِرَنَّ دُرُوسِي كُلَّ يَوْمٍ.", "And I will revise my lessons every day."],
      ["المُدِيرُ", "وَالبَنَاتُ؟", "And the girls?"],
      ["هِنْدٌ", "البَنَاتُ يَحْضُرْنَ مُبَكِّرًا، وَلَا يَتَأَخَّرْنَ أَبَدًا.", "The girls come early and are never late."],
      ["المُدِيرُ", "أَحْسَنْتُمْ! لَا تُهْمِلُنَّ وَاجِبَاتِكُمْ.", "Well done! Don't any of you neglect your duties."]],
      note: "Fixed on fatḥa (emphasis): لَأَجْتَهِدَنَّ، لَأُذَاكِرَنَّ · fixed on sukūn (women): يَحْضُرْنَ، يَتَأَخَّرْنَ · declinable: تَعِدُونَنِي." }
  ],

  vocab: [
    ["نُونُ التَّوْكِيدِ الثَّقِيلَةُ", "heavy nūn of emphasis ـَنَّ", "n.f", "", "", "", "Grammar words"],
    ["نُونُ التَّوْكِيدِ الخَفِيفَةُ", "light nūn of emphasis ـَنْ", "n.f", "", "", "", "Grammar words"],
    ["نُونُ النِّسْوَةِ", "nūn of women ـْنَ", "n.f", "", "", "", "Grammar words"],
    ["أَهْمَلَ", "to neglect", "v.", "", "يُهْمِلُ", "", "Verbs"],
    ["وَعَدَ", "to promise", "v.", "", "يَعِدُ", "", "Verbs"],
    ["ذَاكَرَ", "to study, revise", "v.", "", "يُذَاكِرُ", "", "Verbs"],
    ["تَأَخَّرَ", "to be late", "v.", "", "يَتَأَخَّرُ", "", "Verbs"],
    ["مُدِيرٌ", "headmaster, director", "n.m", "👔", "", "مُدِيرُونَ", "School"],
    ["وَاجِبٌ", "duty; homework", "n.m", "📝", "", "وَاجِبَاتٌ", "School"],
    ["عَهْدٌ", "pledge, promise", "n.m", "🤝", "", "عُهُودٌ", "School"],
    ["اجْتِهَادٌ", "diligence", "n.m", "💪", "", "", "School"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Declinable or fixed?", cats: ["معرب", "مبني على الفتح", "مبني على السكون"], items: [
      ["تَعِدُونَنِي", "0", ""], ["لَأَجْتَهِدَنَّ", "1", ""], ["يَحْضُرْنَ", "2", ""], ["لَا تُهْمِلَنَّ", "1", ""], ["لَنْ يَتَأَخَّرَ", "0", ""], ["يَتَأَخَّرْنَ", "2", ""]] },
    { k: "gap", t: "أَكِّدْ بِالنُّونِ · Add the nūn of emphasis", en: "Write the emphatic form with لَـ … ـَنَّ.", items: [
      ["أَجْتَهِدُ ← ___", "لَأَجْتَهِدَنَّ|لاجتهدن"], ["أُسَاعِدُكَ ← ___كَ", "لَأُسَاعِدَنَّ|لاساعدن"], ["أَصْدُقُ ← ___", "لَأَصْدُقَنَّ|لاصدقن"]] },
    { k: "gap", t: "حَوِّلْ إِلَى نُونِ النِّسْوَةِ · For a group of women", items: [["الأَوْلَادُ يَلْعَبُونَ ← البَنَاتُ ___", "يَلْعَبْنَ|يلعبن"], ["الرِّجَالُ يَعْمَلُونَ ← النِّسَاءُ ___", "يَعْمَلْنَ|يعملن"], ["الطُّلَّابُ يَنْجَحُونَ ← الطَّالِبَاتُ ___", "يَنْجَحْنَ|ينجحن"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["With nūn of emphasis the present is built on fatḥa.", true, ""], ["لَنْ يَلْعَبْنَ: the verb is manṣūb.", false, "Fixed on sukūn (nūn of women), in the place of naṣb."], ["The present verb is normally declinable.", true, ""]] }
  ],

  drills: [
    ["The present is fixed when…", ["a nūn of emphasis or of women is attached", "after لن", "after لم"], 0, ""],
    ["يَكْتُبْنَ is built on…", ["السكون", "الفتح"], 0, ""],
    ["لَيَكْتُبَنَّ is built on…", ["الفتح", "السكون"], 0, ""],
    ["“The girls write”:", ["البَنَاتُ يَكْتُبْنَ", "البَنَاتُ يَكْتُبُونَ"], 0, ""],
    ["Which present verb is declinable?", ["يَشْرَبُ", "يَشْرَبْنَ", "لَيَشْرَبَنَّ"], 0, ""],
    ["Meaning of the nūn of emphasis:", ["strong emphasis (certainly!)", "plural", "past"], 0, ""],
    ["لَمْ يَحْضُرْنَ — the verb after لم is…", ["fixed on sukūn (in place of jazm)", "majzūm with sukūn as a case sign"], 0, ""]
  ],

  comp: [["What does Said swear?", ["to work hard", "to come early", "to travel"], 0, 0], ["What does Hind say about the girls?", ["they come early and are never late", "they are often late", "they play"], 0, 0]],

  cheat: `<h3>أحوال بناء المضارع</h3><table class="g"><tr><th>case</th><th>status</th><th>example</th></tr>
    <tr><td>nūn of emphasis</td><td><span class="ar">مبني على الفتح</span></td><td><span class="ar">لَأَجْتَهِدَنَّ · لَا تُهْمِلَنَّ</span></td></tr>
    <tr><td>nūn of women</td><td><span class="ar">مبني على السكون</span></td><td><span class="ar">يَلْعَبْنَ · لَنْ يَلْعَبْنَ</span></td></tr>
    <tr><td>anything else</td><td><span class="ar">معرب</span></td><td><span class="ar">يَلْعَبُ · لَنْ يَلْعَبَ · لَمْ يَلْعَبْ</span></td></tr></table>`,
  mistakes: [["البَنَاتُ يَلْعَبُونَ", "البَنَاتُ يَلْعَبْنَ", "For a group of women: ـْنَ."], ["لَنْ يَلْعَبْنَ → لَنْ يَلْعَبَنَ", "لَنْ يَلْعَبْنَ", "With the nūn of women nothing changes."]],
  tips: [{ t: "Promises", b: `Write three promises with <span class="ar">وَاللهِ لَـ… ـَنَّ</span>: <span class="ar">وَاللهِ لَأُحَافِظَنَّ عَلَى وَقْتِي</span> (I'll take care of my time!). Oaths are where you meet this nūn most.` }]
});
