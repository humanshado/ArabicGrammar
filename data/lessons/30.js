// الدرس ٣٠ — الأدوات التي تجزم فعلين (PDF pp. 152–155)
COURSE.add({
  n: 30, pages: [152, 155], method: true,
  summary: "Conditional words (أدوات الشرط) link two present verbs and put both in jazm: the condition (فعل الشرط) and its result (جواب الشرط). Besides إِنْ (if), the book teaches مَنْ (whoever), مَا (whatever), مَتَى (whenever), أَيْنَ (wherever), حَيْثُمَا، أَيْنَمَا، مَهْمَا and others. When the result cannot be a plain verb, it is introduced by فَـ.",
  objectives: [
    "use إِنْ، مَنْ، مَا، مَهْمَا، مَتَى، أَيْنَمَا، حَيْثُمَا، كَيْفَمَا",
    "put both the condition and the result in jazm",
    "use past verbs after conditionals (in the place of jazm)",
    "add فَـ when the result is a nominal sentence, a command, or starts with لن / سـ"
  ],

  lesson: [
    { id: "words", t: "Words that mean “if / whoever / whenever…”", ar: "أدوات الشرط الجازمة", pos: "sentence structure", pages: "152–153",
      b: `<table class="g"><tr><th>word</th><th>meaning</th><th>example</th></tr>
        <tr><td><span class="ar">إِنْ</span></td><td>if</td><td><span class="ar">إِنْ تَجْتَهِدْ تَنْجَحْ</span></td></tr>
        <tr><td><span class="ar">مَنْ</span></td><td>whoever</td><td><span class="ar">مَنْ يَزْرَعْ يَحْصُدْ</span></td></tr>
        <tr><td><span class="ar">مَا</span></td><td>whatever</td><td><span class="ar">مَا تَفْعَلْ مِنْ خَيْرٍ تَجِدْهُ</span></td></tr>
        <tr><td><span class="ar">مَهْمَا</span></td><td>whatever (strong)</td><td><span class="ar">مَهْمَا تُخْفِ يَظْهَرْ</span></td></tr>
        <tr><td><span class="ar">مَتَى</span></td><td>whenever</td><td><span class="ar">مَتَى تَزُرْنَا نُكْرِمْكَ</span></td></tr>
        <tr><td><span class="ar">أَيْنَمَا / حَيْثُمَا</span></td><td>wherever</td><td><span class="ar">أَيْنَمَا تَذْهَبْ أَذْهَبْ</span></td></tr>
        <tr><td><span class="ar">كَيْفَمَا</span></td><td>however</td><td><span class="ar">كَيْفَمَا تُعَامِلِ النَّاسَ يُعَامِلُوكَ</span></td></tr></table>`,
      widget: "transform",
      wd: { title: "Two verbs, both in jazm", sets: [
        { base: ["يَزْرَعُ · يَحْصُدُ", "sows · reaps"], baseLabel: "two plain verbs", ops: [["مَنْ", "[[مَنْ]] يَزْرَ[[عْ]] يَحْصُ[[دْ]]", "Whoever sows, reaps.", "condition + result: both majzūm."], ["إِنْ", "[[إِنْ]] تَزْرَ[[عْ]] تَحْصُ[[دْ]]", "If you sow, you reap."], ["مَتَى", "[[مَتَى]] تَزْرَ[[عْ]] تَحْصُ[[دْ]]", "Whenever you sow, you reap."]] }
      ] },
      rule: `<p><span class="ar">أَدَوَاتُ الشَّرْطِ تَجْزِمُ فِعْلَيْنِ مُضَارِعَيْنِ: الأَوَّلُ فِعْلُ الشَّرْطِ، وَالثَّانِي جَوَابُ الشَّرْطِ وَجَزَاؤُهُ.</span></p>`,
      check: [["مَنْ يَجْتَهِدْ ___", ["يَنْجَحْ", "يَنْجَحُ", "نَجَحَ"], 0, "", "مَنْ يَجْتَهِدْ يَنْجَحْ"]] },

    { id: "past", t: "Past verbs in conditions", ar: "الشرط بالماضي", pos: "sentence structure", pages: "153–154",
      b: `<p>Very often the condition and result are <b>past</b> verbs, with future meaning: <span class="ar">إِنِ اجْتَهَدْتَ نَجَحْتَ</span> (if you work hard you'll succeed). Past verbs are fixed, so they are <b>in the place of jazm</b> (lesson 24). You can also mix: <span class="ar">إِنِ اجْتَهَدْتَ تَنْجَحْ</span>.</p>`,
      check: [["مَنْ صَبَرَ ___ (whoever is patient wins)", ["ظَفِرَ", "يَظْفَرُ"], 0, "Past result (or يَظْفَرْ).", "مَنْ صَبَرَ ظَفِرَ"]] },

    { id: "fa", t: "When the result needs فَـ", ar: "اقتران الجواب بالفاء", pos: "sentence structure", pages: "154–155",
      b: `<p>If the result can't simply be a verb in jazm, it is introduced by <span class="ar">فَـ</span>. The main cases:</p>
        <ul><li>a nominal sentence: <span class="ar">إِنْ تَجْتَهِدْ فَأَنْتَ نَاجِحٌ</span></li>
        <li>a command or prohibition: <span class="ar">إِنْ جَاءَكَ ضَيْفٌ فَأَكْرِمْهُ</span></li>
        <li>a verb with <span class="ar">لَنْ، سَـ، قَدْ، مَا</span>: <span class="ar">مَنْ يَكْسَلْ فَلَنْ يَنْجَحَ</span></li></ul>
        <p>The whole sentence after <span class="ar">فَـ</span> is then in the place of jazm.</p>`,
      check: [["إِنْ رَأَيْتَ مَظْلُومًا ___", ["فَانْصُرْهُ", "انْصُرْهُ"], 0, "A command result needs فـ.", "إِنْ رَأَيْتَ مَظْلُومًا فَانْصُرْهُ"]] }
  ],

  scenes: [
    { h: "حِكَمٌ وَأَمْثَالٌ", en: "Sayings and proverbs", pic: "📜", lines: [
      ["", "مَنْ جَدَّ وَجَدَ، وَمَنْ زَرَعَ حَصَدَ.", "Whoever strives finds; whoever sows reaps."],
      ["", "مَنْ يَصْبِرْ يَظْفَرْ.", "Whoever is patient wins."],
      ["", "مَا تَفْعَلْ مِنْ خَيْرٍ تَجِدْهُ.", "Whatever good you do, you will find it."],
      ["", "مَهْمَا تُخْفِ الحَقِيقَةَ تَظْهَرْ.", "However much you hide the truth, it appears."],
      ["", "إِنْ تُصَاحِبِ الكِرَامَ تَكُنْ كَرِيمًا.", "If you keep company with the noble, you'll be noble."],
      ["", "أَيْنَمَا تَكُنْ يَكُنْ عِلْمُكَ مَعَكَ.", "Wherever you are, your knowledge is with you."]],
      note: "Every line is a condition and its result, both majzūm or past (in the place of jazm). تُخْفِ: the yāʾ dropped in jazm." }
  ],

  vocab: [
    ["أَدَاةُ شَرْطٍ", "conditional word", "n.f", "", "", "أَدَوَاتٌ", "Grammar words"],
    ["فِعْلُ الشَّرْطِ", "condition verb", "n.m", "", "", "", "Grammar words"],
    ["جَوَابُ الشَّرْطِ", "result of the condition", "n.m", "", "", "", "Grammar words"],
    ["مَهْمَا", "whatever", "n.", "", "", "", "Conditionals"],
    ["أَيْنَمَا", "wherever", "n.", "", "", "", "Conditionals"],
    ["حَيْثُمَا", "wherever", "n.", "", "", "", "Conditionals"],
    ["كَيْفَمَا", "however", "n.", "", "", "", "Conditionals"],
    ["ظَفِرَ", "to win, succeed", "v.", "", "يَظْفَرُ", "", "Verbs"],
    ["أَخْفَى", "to hide", "v.", "", "يُخْفِي", "", "Verbs"],
    ["جَدَّ", "to strive", "v.", "", "يَجِدُّ", "", "Verbs"],
    ["صَاحَبَ", "to accompany, befriend", "v.", "", "يُصَاحِبُ", "", "Verbs"],
    ["عَامَلَ", "to treat, deal with", "v.", "", "يُعَامِلُ", "", "Verbs"],
    ["نَصَرَ", "to help, support", "v.", "", "يَنْصُرُ", "", "Verbs"],
    ["حَقِيقَةٌ", "truth, reality", "n.f", "", "", "حَقَائِقُ", "Nouns"],
    ["مَظْلُومٌ", "wronged person", "n.m", "", "", "", "Nouns"]
  ],

  exercises: [
    { k: "shakl", t: "اضْبِطْ · Vowel both verbs", marks: ["ُ", "ْ"], items: ["مَنْ يَجْتَهِد{ْ} يَنْجَح{ْ}", "مَتَى تَحْضُر{ْ} نَبْدَأْ", "مَا تَقْرَأْ تَتَعَلَّم{ْ}", "أَيْنَمَا تَجْلِس{ْ} أَجْلِسْ"] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [["إِنْ تُذَاكِرْ ___", ["تَنْجَحْ", "تَنْجَحُ"], 0, ""], ["مَنْ يُهْمِلْ ___", ["فَلَنْ يَنْجَحَ", "لَنْ يَنْجَحَ"], 0, "لن → فـ."], ["إِنْ زُرْتَنَا ___", ["فَأَهْلًا بِكَ", "أَهْلًا بِكَ"], 0, "nominal → فـ."], ["Meaning of مَتَى in a condition:", ["whenever", "where"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["Conditional words put two verbs in jazm.", true, ""], ["A command as result needs فـ.", true, ""], ["Past verbs after إن are manṣūb.", false, "In the place of jazm."]] }
  ],

  drills: [
    ["مَنْ يَزْرَعْ ___", ["يَحْصُدْ", "يَحْصُدَ"], 0, ""],
    ["“Whatever you do, do it well”:", ["مَهْمَا تَفْعَلْ فَأَتْقِنْهُ", "مَهْمَا تَفْعَلُ أَتْقِنْهُ"], 0, ""],
    ["The result of a condition is called…", ["جواب الشرط", "فعل الشرط"], 0, ""],
    ["إِنْ + past verb → the verb is…", ["في محل جزم", "منصوب"], 0, ""],
    ["Which needs فـ?", ["إِنْ جَاءَ فَأَكْرِمْهُ", "إِنْ جَاءَ أَكْرَمْتُهُ"], 0, ""]
  ],

  comp: [["“Whoever strives…”", ["finds", "loses", "sleeps"], 0, 0], ["What happens to hidden truth?", ["it appears", "it disappears", "it changes"], 0, 0]],

  cheat: `<h3>أدوات الشرط الجازمة</h3><p><span class="ar">إِنْ، مَنْ، مَا، مَهْمَا، مَتَى، أَيْنَمَا، حَيْثُمَا، كَيْفَمَا</span> → condition + result, both majzūm.</p><p class="ar">مَنْ يَزْرَعْ يَحْصُدْ · إِنِ اجْتَهَدْتَ نَجَحْتَ · إِنْ جَاءَكَ ضَيْفٌ فَأَكْرِمْهُ</p>`,
  mistakes: [["مَنْ يَزْرَعُ يَحْصُدُ", "مَنْ يَزْرَعْ يَحْصُدْ", "Both verbs majzūm."], ["إِنْ جَاءَ ضَيْفٌ أَكْرِمْهُ", "إِنْ جَاءَ ضَيْفٌ فَأَكْرِمْهُ", "A command result needs فـ."]],
  tips: [{ t: "Collect proverbs", b: `Arabic is full of conditional proverbs. Keep a page of them; each one drills two jazms at once.` }]
});
