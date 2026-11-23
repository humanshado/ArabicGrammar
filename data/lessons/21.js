// الدرس ٢١ — أحوال بناء الفعل الماضي (PDF pp. 106–110)
COURSE.add({
  n: 21, pages: [106, 110], method: true,
  summary: "The past verb is always fixed (mabnī), but on which vowel depends on what is attached to it: fatḥa by default (كَتَبَ، كَتَبَتْ، كَتَبَا); ḍamma with the wāw of the group (كَتَبُوا); sukūn with a moving tāʾ (كَتَبْتُ)، nūn of women (كَتَبْنَ) or nā of “we” (كَتَبْنَا). Along the way you learn the whole past-tense conjugation.",
  objectives: [
    "conjugate a past verb for all persons",
    "say when it is built on fatḥa, ḍamma or sukūn",
    "recognise the subject endings ـتُ ـتَ ـتِ ـنَا ـنَ ـوا ـا ـتْ",
    "parse the past verb correctly"
  ],

  lesson: [
    { id: "table", t: "The past verb with every subject", ar: "إسناد الماضي إلى الضمائر", pos: "conjugation", pages: "106–107",
      b: `<p>The past verb carries its subject as an ending. Look at the <b>last root letter</b> (<span class="ar">ب</span> in <span class="ar">كَتَبَ</span>) in each form:</p>`,
      widget: "table",
      wd: { title: "كَتَبَ — he wrote", head: ["person", "verb", "the ب carries", "built on"], rows: [
        ["هُوَ he", "كَتَ[[بَ]]", "fatḥa", "الفتح"], ["هِيَ she", "كَتَ[[بَ]]تْ", "fatḥa", "الفتح"], ["هُمَا they two", "كَتَ[[بَ]]ا", "fatḥa", "الفتح"],
        ["هُمْ they (m)", "كَتَ[[بُ]]وا", "ḍamma", "الضم"],
        ["أَنَا I", "كَتَ[[بْ]]تُ", "sukūn", "السكون"], ["أَنْتَ you (m)", "كَتَ[[بْ]]تَ", "sukūn", "السكون"], ["أَنْتِ you (f)", "كَتَ[[بْ]]تِ", "sukūn", "السكون"], ["نَحْنُ we", "كَتَ[[بْ]]نَا", "sukūn", "السكون"], ["هُنَّ they (f)", "كَتَ[[بْ]]نَ", "sukūn", "السكون"], ["أَنْتُمْ you (pl)", "كَتَ[[بْ]]تُمْ", "sukūn", "السكون"]] },
      rule: `<p><span class="ar">الفِعْلُ المَاضِي يُبْنَى عَلَى الفَتْحِ، إِلَّا إِذَا اتَّصَلَتْ بِهِ وَاوُ الجَمَاعَةِ فَيُبْنَى عَلَى الضَّمِّ، أَوِ اتَّصَلَتْ بِهِ التَّاءُ المُتَحَرِّكَةُ أَوْ نُونُ النِّسْوَةِ أَوْ «نَا» الدَّالَّةُ عَلَى الفَاعِلِينَ فَيُبْنَى عَلَى السُّكُونِ.</span></p><p>The past verb is built on fatḥa, except with the wāw of the group (ḍamma), or with a moving tāʾ, the nūn of women or the nā of “we” (sukūn).</p>`,
      check: [["كَتَبُوا is built on…", ["الضم", "الفتح", "السكون"], 0, "", false], ["كَتَبْنَا is built on…", ["السكون", "الفتح"], 0, "", false]] },

    { id: "why", t: "Why sukūn and ḍamma?", ar: "سبب البناء على الضم والسكون", pos: "spelling", pages: "107–108",
      b: `<ul><li><b>ḍamma before wāw</b>: a wāw sounds natural after <i>u</i>: <i>katab<b>ū</b></i>.</li>
        <li><b>sukūn before moving endings</b>: Arabic dislikes four vowelled letters in a row inside one word. <i>ka-ta-ba-tu</i> would be four, so the ب goes silent: <i>katab<b>tu</b></i>.</li>
        <li>Note: the tāʾ of <i>she</i> (<span class="ar">ـتْ</span>) is <b>silent</b>, so it does not count: <span class="ar">كَتَبَتْ</span> keeps its fatḥa.</li></ul>`,
      widget: "sorter",
      wd: { title: "Fatḥa, ḍamma or sukūn?", bins: [["الفتح", "fatḥa"], ["الضم", "ḍamma"], ["السكون", "sukūn"]],
        items: [["جَلَسَ", 0, ""], ["جَلَسَتْ", 0, "silent tāʾ"], ["جَلَسُوا", 1, ""], ["جَلَسْتُ", 2, ""], ["جَلَسْنَا", 2, ""], ["جَلَسْنَ", 2, ""], ["جَلَسَا", 0, ""], ["جَلَسْتِ", 2, ""]] },
      check: [["Why does كَتَبَتْ keep fatḥa?", ["its tāʾ is silent (sākina)", "it is feminine"], 0, "", false]] },

    { id: "weak", t: "Past verbs ending in alif", ar: "الماضي المعتل الآخر بالألف", pos: "spelling",
      b: `<p><span class="ar">دَعَا، رَمَى، سَعَى</span> end in alif, which cannot carry a fatḥa: they are built on a <b>hidden (estimated) fatḥa</b> (<span class="ar">فَتْحٌ مُقَدَّرٌ</span>). <span class="ar">بَقِيَ، نَسِيَ</span> end in yāʾ, which carries it openly. Conjugating them with pronouns comes in Part 3 (lesson 60).</p>`,
      check: [["رَمَى is built on…", ["a hidden fatḥa on the alif", "sukūn"], 0, "", false]] },

    { id: "parse", t: "Parsing the past verb", ar: "إعراب الماضي", pos: "case endings", pages: "108–110",
      b: `<div class="rule"><p><span class="ar">كَتَبُوا: فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الضَّمِّ لِاتِّصَالِهِ بِوَاوِ الجَمَاعَةِ، وَالوَاوُ فَاعِلٌ.</span></p>
        <p><span class="ar">كَتَبْتُ: فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُونِ لِاتِّصَالِهِ بِتَاءِ الفَاعِلِ، وَالتَّاءُ فَاعِلٌ.</span></p></div>
        <p>Note that the attached pronoun (<span class="ar">ـوا، ـتُ، ـنَا</span>) is itself the <b>doer</b>.</p>`,
      check: [["In ذَهَبْنَا, the doer is…", ["نَا", "there is none"], 0, "", false]] }
  ],

  scenes: [
    { h: "زِيَارَةُ حَدِيقَةِ الحَيَوَانِ", en: "A visit to the zoo", pic: "🦓", lines: [
      ["", "خَرَجْتُ مِنَ المَنْزِلِ عَصْرًا، فَقَابَلْتُ ثَلَاثَةَ أَصْدِقَاءَ.", "I left home in the afternoon and met three friends."],
      ["", "اقْتَرَحْتُ عَلَيْهِمْ أَنْ نَزُورَ حَدِيقَةَ الحَيَوَانِ، فَقَبِلُوا الفِكْرَةَ وَفَرِحُوا بِهَا.", "I suggested we visit the zoo; they accepted the idea and were pleased with it."],
      ["", "سِرْنَا جَمِيعًا إِلَيْهَا، فَدَخَلْنَاهَا وَشَاهَدْنَا مَا فِيهَا.", "We all walked there, went in and saw what was in it."],
      ["", "وَكَانَتْ أُخْتِي وَصَدِيقَاتُهَا هُنَاكَ، فَسَلَّمْنَ عَلَيْنَا.", "My sister and her friends were there, and they greeted us."],
      ["", "ثُمَّ رَجَعْنَا إِلَى بُيُوتِنَا مَسْرُورِينَ.", "Then we went back to our homes happy."]],
      note: "Built on sukūn: خَرَجْتُ، قَابَلْتُ، اقْتَرَحْتُ، سِرْنَا، دَخَلْنَا، شَاهَدْنَا، سَلَّمْنَ، رَجَعْنَا · on ḍamma: قَبِلُوا، فَرِحُوا · on fatḥa: كَانَتْ." }
  ],

  vocab: [
    ["وَاوُ الجَمَاعَةِ", "the wāw of the group (they)", "n.f", "", "ـُوا", "", "Grammar words"],
    ["تَاءُ الفَاعِلِ", "the subject tāʾ (I, you)", "n.f", "", "ـْتُ ـْتَ ـْتِ", "", "Grammar words"],
    ["نُونُ النِّسْوَةِ", "the nūn of women (they f.)", "n.f", "", "ـْنَ", "", "Grammar words"],
    ["نَا الفَاعِلِينَ", "nā of “we”", "n.f", "", "ـْنَا", "", "Grammar words"],
    ["قَابَلَ", "to meet", "v.", "", "يُقَابِلُ", "", "Verbs"],
    ["اِقْتَرَحَ", "to suggest", "v.", "", "يَقْتَرِحُ", "", "Verbs"],
    ["قَبِلَ", "to accept", "v.", "", "يَقْبَلُ", "", "Verbs"],
    ["فَرِحَ", "to be glad", "v.", "", "يَفْرَحُ", "", "Verbs"],
    ["سَارَ", "to walk, go", "v.", "", "يَسِيرُ", "", "Verbs"],
    ["شَاهَدَ", "to watch, see", "v.", "", "يُشَاهِدُ", "", "Verbs"],
    ["سَلَّمَ عَلَى", "to greet", "v.", "", "يُسَلِّمُ", "", "Verbs"],
    ["فِكْرَةٌ", "idea", "n.f", "💡", "", "أَفْكَارٌ", "Nouns"],
    ["عَصْرٌ", "afternoon", "n.m", "🌇", "", "", "Nouns"],
    ["مَسْرُورٌ", "happy, pleased", "adj.", "", "pl. مَسْرُورُونَ", "", "Nouns"]
  ],

  exercises: [
    { k: "sort", t: "عَلَامَ بُنِيَ؟ · Built on what?", cats: ["الفتح", "الضم", "السكون"], items: [
      ["خَرَجْتُ", "2", ""], ["قَبِلُوا", "1", ""], ["سِرْنَا", "2", ""], ["كَانَتْ", "0", ""], ["سَلَّمْنَ", "2", ""], ["فَرِحَ", "0", ""], ["دَخَلَا", "0", ""], ["شَاهَدْتُمْ", "2", ""]] },
    { k: "gap", t: "أَسْنِدْ · Conjugate", en: "Write the past of لَعِبَ for each subject.", items: [
      ["أَنَا ___", "لَعِبْتُ|لعبت"], ["نَحْنُ ___", "لَعِبْنَا|لعبنا"], ["هُمْ ___", "لَعِبُوا|لعبوا"], ["هُنَّ ___", "لَعِبْنَ|لعبن"], ["هِيَ ___", "لَعِبَتْ|لعبت"], ["أَنْتِ ___", "لَعِبْتِ|لعبت"]] },
    { k: "irab", t: "أَعْرِبْ · Parse", cats: ["فعل ماض مبني على الفتح", "فعل ماض مبني على الضم", "فعل ماض مبني على السكون"], items: [
      ["[حَضَرَ] الضَّيْفُ.", "0", ""], ["الأَوْلَادُ [حَضَرُوا].", "1", ""], ["[حَضَرْتُ] مُبَكِّرًا.", "2", ""], ["البَنَاتُ [حَضَرْنَ].", "2", ""], ["[حَضَرَتْ] فَاطِمَةُ.", "0", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The past verb is mabnī.", true, ""], ["كَتَبَتْ is built on sukūn.", false, "Fatḥa: its tāʾ is silent."], ["With wāw of the group the past is built on ḍamma.", true, ""], ["In كَتَبْنَا the doer is نَا.", true, ""]] }
  ],

  drills: [
    ["The past verb is built on fatḥa…", ["by default", "never", "only with ـوا"], 0, ""],
    ["لَعِبُوا is built on…", ["الضم", "السكون"], 0, ""],
    ["نَجَحْتُ is built on…", ["السكون", "الفتح"], 0, ""],
    ["نَجَحَا is built on…", ["الفتح", "الضم"], 0, ""],
    ["“We wrote”:", ["كَتَبْنَا", "كَتَبَنَا", "كَتَبُونَا"], 0, "كَتَبَنَا means “he wrote us”!"],
    ["“They (f) wrote”:", ["كَتَبْنَ", "كَتَبُوا", "كَتَبَتْ"], 0, ""],
    ["“You (f) wrote”:", ["كَتَبْتِ", "كَتَبْتَ", "كَتَبْتُ"], 0, ""],
    ["Parse ذَهَبُوا:", ["فعل ماض مبني على الضم، والواو فاعل", "فعل مضارع مرفوع"], 0, ""]
  ],

  comp: [["Whom did the speaker meet?", ["three friends", "his sister", "a teacher"], 0, 0], ["Where did they go?", ["to the zoo", "to the market", "to school"], 0, 0], ["Who greeted them?", ["the sister and her friends", "the keeper", "nobody"], 0, 0]],

  cheat: `<h3>أحوال بناء الماضي</h3>
    <table class="g"><tr><th>built on</th><th>when</th><th>examples</th></tr>
    <tr><td><span class="ar">الفتح</span></td><td>default; with ـتْ (she), ـا (two)</td><td><span class="ar">كَتَبَ، كَتَبَتْ، كَتَبَا</span></td></tr>
    <tr><td><span class="ar">الضم</span></td><td>with wāw of the group</td><td><span class="ar">كَتَبُوا</span></td></tr>
    <tr><td><span class="ar">السكون</span></td><td>with ـتُ ـتَ ـتِ ـتُم، ـنَ، ـنَا</td><td><span class="ar">كَتَبْتُ، كَتَبْنَ، كَتَبْنَا</span></td></tr></table>`,
  mistakes: [["كَتَبَنَا (meaning: we wrote)", "كَتَبْنَا", "With nā of “we”, sukūn. كَتَبَنَا = he wrote us."], ["كَتَبُو", "كَتَبُوا", "Write the alif after the wāw of the group."]],
  tips: [{ t: "Chant the conjugation", b: `Chant <span class="ar">كَتَبْتُ، كَتَبْنَا، كَتَبْتَ، كَتَبْتِ، كَتَبْتُمْ، كَتَبَ، كَتَبَتْ، كَتَبُوا، كَتَبْنَ</span> with three new verbs every day.` }]
});
