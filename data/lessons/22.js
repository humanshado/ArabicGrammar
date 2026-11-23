// الدرس ٢٢ — أحوال بناء الأمر (PDF pp. 111–115)
COURSE.add({
  n: 22, pages: [111, 115], method: true,
  summary: "The imperative is always fixed, and it is built on exactly what its present verb would show in jazm: sukūn (اُكْتُبْ، اُكْتُبْنَ)، dropping the weak last letter (اُدْعُ، اِرْمِ، اِسْعَ)، dropping the nūn (اُكْتُبِي، اُكْتُبَا، اُكْتُبُوا)، or fatḥa before the nūn of emphasis (اُكْتُبَنَّ).",
  objectives: [
    "make the imperative for a boy, a girl, two people, a group of men and of women",
    "say what it is built on: sukūn, dropping the weak letter, dropping the nūn, or fatḥa",
    "form the imperative of weak-ending verbs: اُدْعُ، اِرْمِ، اِسْعَ",
    "use the trick: imperative = jussive minus the prefix"
  ],

  lesson: [
    { id: "persons", t: "Commanding one, two, many", ar: "الأمر مع الضمائر", pos: "conjugation", pages: "111–112",
      b: `<p>In Part 1 you learnt <span class="ar">اُكْتُبْ</span> for one boy. Here is the full set:</p>`,
      widget: "table",
      wd: { title: "Command forms of كَتَبَ", head: ["to…", "imperative", "built on"], rows: [
        ["one boy أَنْتَ", "اُكْتُ[[بْ]]", "السكون"], ["a group of women أَنْتُنَّ", "اُكْتُ[[بْ]]نَ", "السكون"],
        ["one girl أَنْتِ", "اُكْتُبِي", "حذف النون"], ["two people أَنْتُمَا", "اُكْتُبَا", "حذف النون"], ["a group of men أَنْتُمْ", "اُكْتُبُوا", "حذف النون"],
        ["one boy, emphatic", "اُكْتُ[[بَ]]نَّ", "الفتح"]] },
      after: `<p>Why “dropping the nūn”? Because the present forms for these people end in <span class="ar">ـنَ / ـنِ</span>: <span class="ar">تَكْتُبِينَ، تَكْتُبَانِ، تَكْتُبُونَ</span>. In the command (and in jazm) the nūn disappears: <span class="ar">اُكْتُبِي، اُكْتُبَا، اُكْتُبُوا</span>. Lesson 31 calls these “the five verbs”.</p>`,
      check: [["Command to a girl of تَجْلِسِينَ:", ["اِجْلِسِي", "اِجْلِسِينَ", "اِجْلِسْ"], 0, "Drop the nūn.", "اِجْلِسِي"]] },

    { id: "weak", t: "Weak-ending verbs drop their last letter", ar: "أمر المعتل الآخر", pos: "conjugation", pages: "112–113",
      b: `<p>A verb ending in a weak letter (lesson 17) loses that letter in the command, and the vowel before it stays as a reminder:</p>
        <table class="g"><tr><th>present</th><th>command</th><th>meaning</th></tr>
        <tr><td><span class="ar">يَدْعُو</span></td><td><span class="ar">اُدْعُ</span></td><td>call!</td></tr>
        <tr><td><span class="ar">يَرْمِي</span></td><td><span class="ar">اِرْمِ</span></td><td>throw!</td></tr>
        <tr><td><span class="ar">يَسْعَى</span></td><td><span class="ar">اِسْعَ</span></td><td>strive!</td></tr>
        <tr><td><span class="ar">يَمْشِي</span></td><td><span class="ar">اِمْشِ</span></td><td>walk!</td></tr></table>`,
      rule: `<p><span class="ar">يُبْنَى الأَمْرُ عَلَى السُّكُونِ إِذَا كَانَ صَحِيحَ الآخِرِ وَلَمْ يَتَّصِلْ بِهِ شَيْءٌ، وَكَذَلِكَ إِذَا اتَّصَلَتْ بِهِ نُونُ النِّسْوَةِ؛ وَيُبْنَى عَلَى الفَتْحِ إِذَا اتَّصَلَتْ بِهِ نُونُ التَّوْكِيدِ؛ وَيُبْنَى عَلَى حَذْفِ حَرْفِ العِلَّةِ إِذَا كَانَ مُعْتَلَّ الآخِرِ؛ وَيُبْنَى عَلَى حَذْفِ النُّونِ إِذَا اتَّصَلَتْ بِهِ أَلِفُ الاثْنَيْنِ أَوْ وَاوُ الجَمَاعَةِ أَوْ يَاءُ المُخَاطَبَةِ.</span></p>`,
      check: [["Command of يَنْسَى (forget):", ["اِنْسَ", "اِنْسَى", "اِنْسْ"], 0, "", "اِنْسَ"], ["Command of يَرْجُو (hope):", ["اُرْجُ", "اُرْجُو", "اِرْجِ"], 0, "", "اُرْجُ"]] },

    { id: "trick", t: "The trick: jussive minus prefix", ar: "الأمر من المضارع المجزوم", pos: "conjugation",
      b: `<p>Whatever the present verb does in jazm (after <span class="ar">لَمْ</span>), the imperative does too. So take the jussive form with <span class="ar">تَـ</span>, remove <span class="ar">تَـ</span> and add a helping hamza if needed:</p>`,
      widget: "transform",
      wd: { title: "لَمْ تَـ… → command", sets: [
        { base: ["لَمْ تَكْتُبْ", "you didn't write"], baseLabel: "jazm", ops: [["command", "اُكْتُبْ", "write!"]] },
        { base: ["لَمْ تَدْعُ", "you didn't call"], baseLabel: "jazm", ops: [["command", "اُدْعُ", "call!", "The wāw dropped in jazm, so it is dropped in the command."]] },
        { base: ["لَمْ تَكْتُبُوا", "you (pl) didn't write"], baseLabel: "jazm", ops: [["command", "اُكْتُبُوا", "write! (to a group)", "The nūn of تكتبون dropped in jazm, so it's dropped here."]] }
      ] },
      check: [["لَمْ تَرْمِي → command to a girl:", ["اِرْمِي", "اِرْمِ", "اِرْمِينَ"], 0, "", "اِرْمِي"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings", pages: "113–115",
      b: `<div class="rule"><p><span class="ar">اُدْعُ: فِعْلُ أَمْرٍ مَبْنِيٌّ عَلَى حَذْفِ حَرْفِ العِلَّةِ.</span></p><p><span class="ar">اُكْتُبُوا: فِعْلُ أَمْرٍ مَبْنِيٌّ عَلَى حَذْفِ النُّونِ، وَالوَاوُ فَاعِلٌ.</span></p><p><span class="ar">اُكْتُبْ: فِعْلُ أَمْرٍ مَبْنِيٌّ عَلَى السُّكُونِ، وَالفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ أَنْتَ.</span></p></div>`,
      check: [["اِسْمَعَا is built on…", ["حذف النون", "السكون", "الفتح"], 0, "", false]] }
  ],

  scenes: [
    { h: "فِي المُخَيَّمِ", en: "At the camp", pic: "⛺", lines: [
      ["القَائِدُ", "اِسْتَيْقِظُوا يَا شَبَابُ! اِغْسِلُوا وُجُوهَكُمْ.", "Wake up, lads! Wash your faces."],
      ["القَائِدُ", "يَا عَلِيُّ، اِرْمِ الكُرَةَ إِلَى زَمِيلِكَ.", "Ali, throw the ball to your teammate."],
      ["القَائِدَةُ", "يَا بَنَاتُ، اِجْلِسْنَ فِي الظِّلِّ، وَاشْرَبْنَ المَاءَ.", "Girls, sit in the shade and drink water."],
      ["القَائِدَةُ", "يَا سَلْمَى، اُدْعِي صَدِيقَتَكِ.", "Salma, call your friend."],
      ["القَائِدُ", "يَا أَحْمَدُ وَيَا خَالِدُ، اِحْمِلَا الخَيْمَةَ مَعًا.", "Ahmad and Khalid, carry the tent together."],
      ["القَائِدُ", "وَأَنْتَ يَا سَمِيرُ، لَا تَنْسَ مِصْبَاحَكَ؛ اُذْكُرَنَّ ذَلِكَ!", "And you, Samir, don't forget your lamp — remember that!"]],
      note: "Every kind of command: اِسْتَيْقِظُوا، اِغْسِلُوا، اِحْمِلَا، اُدْعِي (drop the nūn); اِرْمِ (drop the weak letter); اِجْلِسْنَ، اشْرَبْنَ (sukūn, nūn of women); اُذْكُرَنَّ (fatḥa, nūn of emphasis)." }
  ],

  vocab: [
    ["نُونُ التَّوْكِيدِ", "the nūn of emphasis (ـَنَّ)", "n.f", "", "", "", "Grammar words"],
    ["يَاءُ المُخَاطَبَةِ", "yāʾ of the addressed woman (ـِي)", "n.f", "", "", "", "Grammar words"],
    ["أَلِفُ الاثْنَيْنِ", "alif of two (ـَا)", "n.f", "", "", "", "Grammar words"],
    ["حَذْفُ النُّونِ", "dropping the nūn", "n.m", "", "", "", "Grammar words"],
    ["مُخَيَّمٌ", "camp", "n.m", "⛺", "", "مُخَيَّمَاتٌ", "Camp"],
    ["خَيْمَةٌ", "tent", "n.f", "⛺", "", "خِيَامٌ", "Camp"],
    ["قَائِدٌ", "leader", "n.m", "🧭", "f. قَائِدَةٌ", "قَادَةٌ", "Camp"],
    ["زَمِيلٌ", "colleague, teammate", "n.m", "🧑‍🤝‍🧑", "", "زُمَلَاءُ", "Camp"],
    ["اِسْتَيْقَظَ", "to wake up", "v.", "", "يَسْتَيْقِظُ", "", "Verbs"],
    ["ذَكَرَ", "to remember, mention", "v.", "", "يَذْكُرُ", "", "Verbs"],
    ["شَرِبَ", "to drink", "v.", "", "يَشْرَبُ", "", "Verbs"],
    ["رَجَا", "to hope", "v.", "", "يَرْجُو · اُرْجُ", "", "Verbs"],
    ["نَسِيَ", "to forget", "v.", "", "يَنْسَى · اِنْسَ", "", "Verbs"]
  ],

  exercises: [
    { k: "gap", t: "هَاتِ الأَمْرَ · Give the command", items: [
      ["تَلْعَبُ (to a boy) ← ___", "اِلْعَبْ|العب"], ["تَلْعَبِينَ (to a girl) ← ___", "اِلْعَبِي|العبي"], ["تَلْعَبُونَ (to a group) ← ___", "اِلْعَبُوا|العبوا"], ["تَلْعَبَانِ (to two) ← ___", "اِلْعَبَا|العبا"], ["تَلْعَبْنَ (to women) ← ___", "اِلْعَبْنَ|العبن"], ["تَمْشِي (to a boy) ← ___", "اِمْشِ|امش"], ["تَدْعُو (to a boy) ← ___", "اُدْعُ|ادع"]] },
    { k: "sort", t: "عَلَامَ بُنِيَ الأَمْرُ؟ · Built on what?", cats: ["السكون", "حذف حرف العلة", "حذف النون", "الفتح"], items: [
      ["اِسْمَعْ", "0", ""], ["اِسْعَ", "1", ""], ["اِسْمَعُوا", "2", ""], ["اِسْمَعِي", "2", ""], ["اِسْمَعْنَ", "0", ""], ["اِسْمَعَنَّ", "3", ""], ["اُدْنُ", "1", ""], ["اِسْمَعَا", "2", ""]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["Command of يَبْنِي:", ["اِبْنِ", "اِبْنِي (to a boy)", "اُبْنُ"], 0, ""], ["“Girls, write!”:", ["اُكْتُبْنَ", "اُكْتُبُوا", "اُكْتُبِي"], 0, ""], ["“You two, sit!”:", ["اِجْلِسَا", "اِجْلِسَانِ", "اِجْلِسُوا"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The imperative is muʿrab.", false, "It is mabnī."], ["اُدْعُ is built on dropping the weak letter.", true, ""], ["اُكْتُبُوا is built on ḍamma.", false, "On dropping the nūn."]] }
  ],

  drills: [
    ["اُكْتُبْ is built on…", ["السكون", "الفتح"], 0, ""],
    ["اِرْمِ is built on…", ["حذف حرف العلة", "السكون"], 0, ""],
    ["اِجْلِسِي is built on…", ["حذف النون", "الكسر"], 0, ""],
    ["اِجْلِسْنَ is built on…", ["السكون", "حذف النون"], 0, ""],
    ["Command of تَسْعَى (to a boy):", ["اِسْعَ", "اِسْعَى"], 0, ""],
    ["Command of تَكْتُبُونَ:", ["اُكْتُبُوا", "اُكْتُبُونَ"], 0, ""],
    ["The command matches the present in…", ["jazm", "naṣb", "rafʿ"], 0, ""],
    ["“Remember (emphatic)!”:", ["اُذْكُرَنَّ", "اُذْكُرْنَ"], 0, "اذكرْنَ = remember! (to women)."]
  ],

  comp: [["What should the girls do?", ["sit in the shade and drink water", "carry the tent", "throw the ball"], 0, 0], ["What should Ahmad and Khalid carry?", ["the tent", "the lamp", "water"], 0, 0], ["What must Samir not forget?", ["his lamp", "his ball", "his friend"], 0, 0]],

  cheat: `<h3>أحوال بناء الأمر</h3><table class="g"><tr><th>built on</th><th>examples</th></tr>
    <tr><td><span class="ar">السكون</span></td><td><span class="ar">اُكْتُبْ · اُكْتُبْنَ</span></td></tr><tr><td><span class="ar">حذف حرف العلة</span></td><td><span class="ar">اُدْعُ · اِرْمِ · اِسْعَ</span></td></tr><tr><td><span class="ar">حذف النون</span></td><td><span class="ar">اُكْتُبِي · اُكْتُبَا · اُكْتُبُوا</span></td></tr><tr><td><span class="ar">الفتح</span></td><td><span class="ar">اُكْتُبَنَّ</span></td></tr></table><p>Rule of thumb: command = jussive without <span class="ar">تَـ</span>.</p>`,
  mistakes: [["اِرْمِي (to a boy)", "اِرْمِ", "To a boy the yāʾ drops; اِرْمِي is for a girl."], ["اُكْتُبُو", "اُكْتُبُوا", "Write the alif after wāw of the group."], ["اُكْتُبِينَ", "اُكْتُبِي", "The nūn drops in the command."]],
  tips: [{ t: "Be the camp leader", b: `Give orders to imaginary groups: one boy, one girl, two friends, a team of boys, a team of girls. Five forms of the same verb, aloud.` }]
});
