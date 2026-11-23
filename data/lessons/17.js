// الدرس ١٧ — تقسيم الفعل إلى صحيح الآخر ومعتل الآخر (PDF pp. 91–94)
COURSE.add({
  n: 17, pages: [91, 94], method: true,
  summary: "Part 2 opens by looking at the last letter of the verb. If it is one of the three “weak letters” (حروف العلة) — alif, wāw or yāʾ — the verb is مُعْتَلّ الآخِر (weak-ending): أَلْقَى، يَدْعُو، يَرْمِي. Otherwise it is صَحِيح الآخِر (sound-ending): كَتَبَ، يَلْعَبُ. This matters because weak-ending verbs show their endings differently (lesson 25).",
  objectives: [
    "name the three weak letters: ا (ى)، و، ي",
    "sort verbs into sound-ending and weak-ending",
    "remember that the alif at the end is often written ى (رَمَى، يَسْعَى)",
    "not be fooled by a weak letter at the start or in the middle (وَعَدَ، قَالَ)"
  ],

  lesson: [
    { id: "weak", t: "Three letters that are “weak”", ar: "حروف العلة", pos: "spelling", pages: "91–92",
      b: `<p>Arabic calls three letters <b>weak</b> (<span class="ar">حُرُوفُ العِلَّةِ</span>, “letters of illness”): <span class="ar">ا</span> alif, <span class="ar">و</span> wāw and <span class="ar">ي</span> yāʾ. They are “weak” because they easily change shape, merge with vowels or drop out. Every other letter is <b>sound</b> (<span class="ar">صَحِيح</span>).</p>
        <p>Look at the end of these verbs from the book's examples:</p>
        <table class="g"><tr><th>last letter</th><th>verbs</th></tr>
        <tr><td>alif (written <span class="ar">ى</span> or <span class="ar">ا</span>)</td><td><span class="ar">أَلْقَى، يَلْقَى، أَبْقَى، يُبْنَى، دَعَا</span></td></tr>
        <tr><td>wāw <span class="ar">و</span></td><td><span class="ar">يَدْنُو، تَصْفُو، يَسْمُو</span></td></tr>
        <tr><td>yāʾ <span class="ar">ي</span></td><td><span class="ar">يَرْمِي، يَجْرِي، يُعْطِي</span></td></tr>
        <tr><td>a sound letter</td><td><span class="ar">سُرَّ، أَظْلَمَ، اتَّقَدَ، يَسْتَحِمُّ</span></td></tr></table>`,
      rule: `<p><span class="ar">الفِعْلُ المُعْتَلُّ الآخِرِ: مَا كَانَ آخِرُهُ أَلِفًا أَوْ وَاوًا أَوْ يَاءً، وَتُسَمَّى هَذِهِ الأَحْرُفُ الثَّلَاثَةُ أَحْرُفَ العِلَّةِ. وَالفِعْلُ الصَّحِيحُ الآخِرِ: مَا لَمْ يَكُنْ آخِرُهُ حَرْفًا مِنْ حُرُوفِ العِلَّةِ.</span></p><p>A weak-ending verb ends in alif, wāw or yāʾ (the weak letters); a sound-ending verb does not.</p>`,
      widget: "sorter",
      wd: { title: "Sound or weak ending?", bins: [["صحيح الآخر", "sound ending"], ["معتل الآخر بالألف", "ends in alif"], ["معتل الآخر بالواو", "ends in wāw"], ["معتل الآخر بالياء", "ends in yāʾ"]],
        items: [["كَتَبَ", 0, ""], ["رَمَى", 1, "ى is an alif"], ["يَدْعُو", 2, ""], ["يَرْمِي", 3, ""], ["دَعَا", 1, ""], ["يَسْعَى", 1, ""], ["يَصْفُو", 2, ""], ["يَجْرِي", 3, ""], ["أَظْلَمَ", 0, ""], ["يَسْتَحِمُّ", 0, "ends in mīm"]] },
      check: [["The weak letters are…", ["ا و ي", "أ ن ي ت", "ب ت ث"], 0, "", false], ["Is رَمَى weak-ending?", ["yes — it ends in alif (ى)", "no"], 0, "The ى is an alif maqṣūra.", false]] },

    { id: "alif", t: "The alif that looks like a yāʾ", ar: "الألف المقصورة", pos: "spelling", pages: "92",
      b: `<p>At the end of a word, a long ā is often written <span class="ar">ى</span> — like a yāʾ without its two dots. It is called <span class="ar">أَلِفٌ مَقْصُورَةٌ</span> and is pronounced <i>ā</i>: <span class="ar">رَمَى</span> <i>ramā</i>, <span class="ar">يَسْعَى</span> <i>yasʿā</i>. In other words it is written <span class="ar">ا</span>: <span class="ar">دَعَا</span>, <span class="ar">عَلَا</span>.</p>
        <p>The rule of thumb: if the alif comes from an original wāw, write <span class="ar">ا</span> (<span class="ar">دَعَا</span> → <span class="ar">يَدْعُو</span>); if from a yāʾ, write <span class="ar">ى</span> (<span class="ar">رَمَى</span> → <span class="ar">يَرْمِي</span>). Part 3 (lesson 60) uses this when adding pronouns.</p>`,
      warn: `Don't confuse <span class="ar">ى</span> (alif, “ā”) with <span class="ar">ي</span> (yāʾ, “ī” or “y”): <span class="ar">رَمَى</span> he threw · <span class="ar">يَرْمِي</span> he throws.`,
      check: [["How is يَسْعَى pronounced at the end?", ["-ā", "-ī", "-ū"], 0, "Alif maqṣūra.", false]] },

    { id: "where", t: "Only the last letter counts", ar: "العبرة بالحرف الأخير", pos: "spelling",
      b: `<p>A weak letter at the <b>start</b> or in the <b>middle</b> does not make a verb weak-<i>ending</i>: <span class="ar">وَعَدَ</span> (promised), <span class="ar">قَالَ</span> (said), <span class="ar">يَقُولُ</span> (says) all end in a sound letter, so they are <span class="ar">صَحِيحُ الآخِرِ</span> for this lesson. (Part 3, lesson 58, classifies verbs by all their root letters.)</p>
        <p>Also, attached endings don't count: in <span class="ar">كَتَبُوا</span> (they wrote) the wāw is a pronoun, not part of the verb.</p>`,
      check: [["Is قَالَ weak-ending?", ["no — it ends in lām", "yes — it has an alif"], 0, "", false], ["Which is weak-ending?", ["يَنْمُو", "يَقُولُ", "وَصَلَ"], 0, "ends in wāw", "يَنْمُو"]] },

    { id: "why", t: "Why it matters", ar: "أثر ذلك في الإعراب", pos: "case endings",
      b: `<p>Weak letters cannot comfortably carry vowels. Try saying ḍamma on the end of <span class="ar">يَسْعَى</span>: <i>yasʿā-u</i>? Impossible. So weak-ending verbs show some of their endings <b>invisibly</b> (<span class="ar">مُقَدَّرَة</span>), and in jazm they <b>drop</b> their last letter:</p>
        <table class="g"><tr><th></th><th>sound</th><th>weak (و)</th><th>weak (ي)</th><th>weak (ا)</th></tr>
        <tr><td>rafʿ</td><td><span class="ar">يَكْتُبُ</span></td><td><span class="ar">يَدْعُو</span></td><td><span class="ar">يَرْمِي</span></td><td><span class="ar">يَسْعَى</span></td></tr>
        <tr><td>jazm (<span class="ar">لم</span>)</td><td><span class="ar">لَمْ يَكْتُبْ</span></td><td><span class="ar">لَمْ يَدْعُ</span></td><td><span class="ar">لَمْ يَرْمِ</span></td><td><span class="ar">لَمْ يَسْعَ</span></td></tr></table>
        <p>Lesson 25 teaches this fully. You already met it in Part 1: <span class="ar">لَا تَنْسَ</span>, <span class="ar">لَمْ يَأْتِ</span>.</p>`,
      check: [["“He didn't call” (from يَدْعُو):", ["لَمْ يَدْعُ", "لَمْ يَدْعُو", "لَمْ يَدْعُوْ"], 0, "The weak letter drops in jazm.", "لَمْ يَدْعُ"]] }
  ],

  scenes: [
    { h: "نُزْهَةٌ عِنْدَ الجَدْوَلِ", en: "A walk by the stream", pic: "🏞️", lines: [
      ["", "خَرَجَ فَرِيدٌ يَتَنَزَّهُ فِي الرِّيفِ.", "Farid went out for a walk in the countryside."],
      ["", "رَأَى جَدْوَلًا يَجْرِي مَاؤُهُ، فَيَرْوِي الزَّرْعَ.", "He saw a stream whose water runs and waters the crops."],
      ["", "دَنَا مِنَ المَاءِ، فَرَأَى السَّمَاءَ تَصْفُو فِيهِ.", "He drew near the water and saw the sky clear in it."],
      ["", "رَمَى حَجَرًا صَغِيرًا، فَطَفَا وَرَقُ الشَّجَرِ.", "He threw a small stone, and the leaves floated up."],
      ["", "ثُمَّ دَعَاهُ أَبُوهُ، فَمَشَى إِلَيْهِ مُسْرِعًا.", "Then his father called him, and he walked quickly to him."]],
      note: "Weak-ending verbs: رَأَى، يَجْرِي، يَرْوِي، دَنَا، تَصْفُو، رَمَى، طَفَا، دَعَا، مَشَى (رَأَى too: it ends in alif). Sound-ending: خَرَجَ، يَتَنَزَّهُ." },
    { h: "مَا آخِرُ الفِعْلِ؟", en: "What's the verb's last letter?", pic: "🔤", lines: [
      ["المُعَلِّمُ", "يَا سَمِيرُ، مَا آخِرُ الفِعْلِ «يَسْمُو»؟", "Samir, what is the last letter of yasmū?"],
      ["سَمِيرٌ", "آخِرُهُ وَاوٌ، فَهُوَ مُعْتَلُّ الآخِرِ.", "It ends in wāw, so it is weak-ending."],
      ["المُعَلِّمُ", "وَ«قَالَ»؟", "And qāla?"],
      ["سَمِيرٌ", "آخِرُهُ لَامٌ، فَهُوَ صَحِيحُ الآخِرِ، وَإِنْ كَانَ فِي وَسَطِهِ أَلِفٌ.", "It ends in lām, so it is sound-ending, even though it has an alif in the middle."],
      ["المُعَلِّمُ", "أَحْسَنْتَ!", "Well done!"]] }
  ],

  vocab: [
    ["حَرْفُ عِلَّةٍ", "weak letter (ا و ي)", "n.m", "", "pl. حُرُوفُ عِلَّةٍ", "", "Grammar words"],
    ["مُعْتَلُّ الآخِرِ", "weak-ending", "adj.", "", "", "", "Grammar words"],
    ["صَحِيحُ الآخِرِ", "sound-ending", "adj.", "", "", "", "Grammar words"],
    ["أَلِفٌ مَقْصُورَةٌ", "final alif written ى", "n.f", "", "", "", "Grammar words"],
    ["أَلْقَى", "to throw, cast", "v.", "", "يُلْقِي", "", "Weak-ending verbs"],
    ["دَعَا", "to call; to pray", "v.", "", "يَدْعُو", "", "Weak-ending verbs"],
    ["رَمَى", "to throw", "v.", "", "يَرْمِي", "", "Weak-ending verbs"],
    ["سَعَى", "to strive, hurry", "v.", "", "يَسْعَى", "", "Weak-ending verbs"],
    ["دَنَا", "to come near", "v.", "", "يَدْنُو", "", "Weak-ending verbs"],
    ["صَفَا", "to become clear", "v.", "", "يَصْفُو", "", "Weak-ending verbs"],
    ["سَمَا", "to rise high", "v.", "", "يَسْمُو", "", "Weak-ending verbs"],
    ["بَقِيَ", "to remain", "v.", "", "يَبْقَى", "", "Weak-ending verbs"],
    ["أَعْطَى", "to give", "v.", "", "يُعْطِي", "", "Weak-ending verbs"],
    ["رَوَى", "to water; to narrate", "v.", "", "يَرْوِي", "", "Weak-ending verbs"],
    ["مَشَى", "to walk", "v.", "", "يَمْشِي", "", "Weak-ending verbs"],
    ["نَمَا", "to grow", "v.", "", "يَنْمُو", "", "Weak-ending verbs"],
    ["اِتَّقَدَ", "to blaze, light up", "v.", "", "يَتَّقِدُ", "", "Sound-ending verbs"],
    ["اِسْتَحَمَّ", "to bathe", "v.", "", "يَسْتَحِمُّ", "", "Sound-ending verbs"],
    ["تَنَزَّهَ", "to go for a walk", "v.", "", "يَتَنَزَّهُ", "", "Sound-ending verbs"],
    ["جَدْوَلٌ", "stream", "n.m", "🏞️", "", "جَدَاوِلُ", "Nature"],
    ["رِيفٌ", "countryside", "n.m", "🌾", "", "أَرْيَافٌ", "Nature"],
    ["زَرْعٌ", "crops", "n.m", "🌱", "", "زُرُوعٌ", "Nature"],
    ["الوَالِدَانِ", "the parents", "n.m", "👪", "dual", "", "Nature"],
    ["الشِّتَاءُ", "winter", "n.m", "❄️", "", "", "Nature"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Sound or weak ending?", cats: ["صحيح الآخر", "معتل الآخر"], items: [
      ["يَتَنَزَّهُ", "0", ""], ["يَجْرِي", "1", ""], ["دَعَا", "1", ""], ["خَرَجَ", "0", ""], ["يَلْهُو", "1", ""], ["يَرْعَى", "1", ""], ["قَالَ", "0", "ends in lām"], ["وَصَلَ", "0", "ends in lām"], ["يَبْنِي", "1", ""], ["اِتَّقَدَ", "0", ""]] },
    { k: "mcq", t: "اِخْتَرْ · Which weak letter ends the verb?", items: [
      ["يَشْكُو", ["و", "ا", "ي"], 0, ""], ["سَعَى", ["ا (ى)", "ي", "و"], 0, ""], ["يَهْدِي", ["ي", "و", "ا"], 0, ""], ["نَمَا", ["ا", "و", "ي"], 0, ""], ["Which is sound-ending?", ["يَقُولُ", "يَقْضِي", "يَرْجُو"], 0, ""]] },
    { k: "gap", t: "هَاتِ المُضَارِعَ · Give the present", en: "Write the present (he-form) of each weak verb.", items: [
      ["دَعَا ← ___", "يَدْعُو|يدعو"], ["رَمَى ← ___", "يَرْمِي|يرمي"], ["سَعَى ← ___", "يَسْعَى|يسعى"], ["مَشَى ← ___", "يَمْشِي|يمشي"], ["دَنَا ← ___", "يَدْنُو|يدنو"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [
      ["The weak letters are alif, wāw and yāʾ.", true, ""], ["قَالَ is weak-ending because it has an alif.", false, "Only the last letter counts."], ["The ى in رَمَى is pronounced -ā.", true, ""], ["In jazm, a weak-ending verb drops its last letter.", true, "لَمْ يَدْعُ"]] },
    { k: "tr", t: "تَرْجِمْ · Translate", items: [["The water runs in the stream.", "يجري الماء في الجدول|يَجْرِي المَاءُ فِي الجَدْوَلِ"], ["He threw the ball.", "رمى الكرة|رَمَى الكُرَةَ"], ["The plant grows.", "ينمو النبات|يَنْمُو النَّبَاتُ"]] }
  ],

  drills: [
    ["Weak letters:", ["ا و ي", "ا ب ت", "م ن ل"], 0, ""],
    ["Which verb is weak-ending?", ["يَسْمُو", "يَكْتُبُ", "سَمِعَ"], 0, ""],
    ["Which verb is sound-ending?", ["وَعَدَ", "يَرْجُو", "بَقِيَ"], 0, "The و at the start doesn't count."],
    ["رَمَى ends in…", ["alif", "yāʾ", "a sound letter"], 0, ""],
    ["Present of دَعَا:", ["يَدْعُو", "يَدْعِي", "يَدْعَى"], 0, ""],
    ["Present of رَمَى:", ["يَرْمِي", "يَرْمُو", "يَرْمَى"], 0, ""],
    ["“Don't forget”:", ["لَا تَنْسَ", "لَا تَنْسَى", "لَا تَنْسْ"], 0, "Weak letter drops in jazm."],
    ["Is يَسْتَحِمُّ weak-ending?", ["no", "yes"], 0, ""],
    ["ى at the end of a word is called…", ["ألف مقصورة", "ياء", "تاء مربوطة"], 0, ""],
    ["In كَتَبُوا the final و is…", ["a pronoun (they), not part of the verb", "a weak root letter"], 0, ""]
  ],

  comp: [
    ["Where did Farid go?", ["for a walk in the countryside", "to school", "to the sea"], 0, 0],
    ["What did he throw?", ["a small stone", "a ball", "a leaf"], 0, 0],
    ["Who called him?", ["his father", "his mother", "his friend"], 0, 0],
    ["Why is قال sound-ending, according to Samir?", ["it ends in lām", "it has no alif", "it is past"], 0, 1]
  ],

  cheat: `<h3>صحيح الآخر ومعتل الآخر</h3>
    <div class="rule"><span class="ar">حُرُوفُ العِلَّةِ: ا (ى) · و · ي</span></div>
    <table class="g"><tr><th>sound-ending</th><th>weak: ا / ى</th><th>weak: و</th><th>weak: ي</th></tr>
    <tr><td><span class="ar">كَتَبَ، يَلْعَبُ، أَظْلَمَ</span></td><td><span class="ar">دَعَا، رَمَى، يَسْعَى</span></td><td><span class="ar">يَدْعُو، يَسْمُو</span></td><td><span class="ar">يَرْمِي، يَجْرِي</span></td></tr></table>
    <p>Only the <b>last</b> letter counts: <span class="ar">قَالَ، وَعَدَ</span> are sound-ending here. In jazm the weak letter drops: <span class="ar">لَمْ يَدْعُ · لَمْ يَرْمِ · لَمْ يَسْعَ</span>.</p>`,
  mistakes: [
    ["رَمَي", "رَمَى", "Final ā from a yāʾ root is written ى without dots."],
    ["دَعَى", "دَعَا", "Final ā from a wāw root is written ا."],
    ["قَالَ مُعْتَلُّ الآخِرِ", "قَالَ صَحِيحُ الآخِرِ", "The middle alif doesn't count here."]
  ],
  tips: [
    { t: "Learn weak verbs in pairs", b: `The past doesn't tell you the present's last letter unless you know the root: <span class="ar">دَعَا يَدْعُو · رَمَى يَرْمِي · سَعَى يَسْعَى · بَقِيَ يَبْقَى</span>. Learn them as pairs, aloud.` }
  ]
});
