// الدرس ٢٥ — الفعل المضارع المعتل الآخر وأحوال إعرابه (PDF pp. 125–129)
COURSE.add({
  n: 25, pages: [125, 129], method: true,
  summary: "Present verbs ending in a weak letter (يَسْعَى، يَدْعُو، يَرْمِي) can't show every vowel. In rafʿ the ḍamma is hidden on all three; in naṣb the fatḥa is hidden on the alif but shows on wāw and yāʾ (لَنْ يَدْعُوَ، لَنْ يَرْمِيَ); in jazm the weak letter is dropped (لَمْ يَسْعَ، لَمْ يَدْعُ، لَمْ يَرْمِ).",
  objectives: [
    "know the hidden (estimated) vowel: مُقَدَّرَة",
    "put weak-ending present verbs in rafʿ, naṣb and jazm",
    "write the visible fatḥa on wāw and yāʾ: أَنْ يَدْعُوَ، لَنْ يَرْمِيَ",
    "drop the weak letter in jazm and keep the vowel before it"
  ],

  lesson: [
    { id: "table", t: "Three verbs, three moods", ar: "إعراب المضارع المعتل", pos: "conjugation", pages: "125–127",
      b: `<p>Compare a sound verb with the three weak types:</p>`,
      widget: "table",
      wd: { title: "Rafʿ · naṣb · jazm", head: ["mood", "sound", "ends in alif", "ends in wāw", "ends in yāʾ"], rows: [
        ["rafʿ (no particle)", "يَكْتُبُ", "يَسْعَى", "يَدْعُو", "يَرْمِي"],
        ["naṣb (لَنْ)", "لَنْ يَكْتُبَ", "لَنْ يَسْعَى", "لَنْ يَدْعُوَ", "لَنْ يَرْمِيَ"],
        ["jazm (لَمْ)", "لَمْ يَكْتُبْ", "لَمْ يَسْ[[عَ]]", "لَمْ يَدْ[[عُ]]", "لَمْ يَرْ[[مِ]]"]] },
      after: `<ul><li><b>rafʿ</b>: ḍamma is hidden on all three (<span class="ar">ضَمَّةٌ مُقَدَّرَةٌ</span>) — too heavy to say.</li>
        <li><b>naṣb</b>: fatḥa is hidden on the alif (impossible to say), but <b>visible</b> on wāw and yāʾ: <i>yadʿuwa, yarmiya</i>.</li>
        <li><b>jazm</b>: the weak letter is <b>dropped</b> (<span class="ar">حَذْفُ حَرْفِ العِلَّةِ</span>); the short vowel before it stays as a hint.</li></ul>`,
      rule: `<p><span class="ar">الفِعْلُ المُضَارِعُ المُعْتَلُّ الآخِرِ يُرْفَعُ بِضَمَّةٍ مُقَدَّرَةٍ عَلَى الأَلِفِ وَالوَاوِ وَاليَاءِ، وَيُنْصَبُ بِفَتْحَةٍ مُقَدَّرَةٍ عَلَى الأَلِفِ وَظَاهِرَةٍ عَلَى الوَاوِ وَاليَاءِ، وَيُجْزَمُ بِحَذْفِ الآخِرِ.</span></p>`,
      check: [["“He didn't forget”:", ["لَمْ يَنْسَ", "لَمْ يَنْسَى"], 0, "", "لَمْ يَنْسَ"], ["“I want to call”:", ["أُرِيدُ أَنْ أَدْعُوَ", "أُرِيدُ أَنْ أَدْعُو", "أُرِيدُ أَنْ أَدْعُ"], 0, "Visible fatḥa on the wāw.", "أُرِيدُ أَنْ أَدْعُوَ"]] },

    { id: "moods", t: "Watch the last letter move", ar: "تطبيق", pos: "conjugation", pages: "126–128",
      widget: "transform",
      wd: { title: "One weak verb through the moods", sets: [
        { base: ["يَرْمِي الصَّيَّادُ الشَّبَكَةَ", "The fisherman throws the net."], baseLabel: "rafʿ (hidden ḍamma)", ops: [["لَنْ", "لَنْ يَرْمِ[[يَ]] الصَّيَّادُ الشَّبَكَةَ", "The fisherman won't throw the net.", "Visible fatḥa on yāʾ."], ["لَمْ", "لَمْ يَرْ[[مِ]] الصَّيَّادُ الشَّبَكَةَ", "The fisherman didn't throw the net.", "Yāʾ dropped; kasra remains."]] },
        { base: ["يَسْعَى العَامِلُ إِلَى رِزْقِهِ", "The worker strives for his living."], baseLabel: "rafʿ (hidden)", ops: [["لَنْ", "لَنْ يَسْعَى العَامِلُ", "The worker won't strive.", "Hidden fatḥa: nothing changes on the page."], ["لَا (prohibition)", "لَا تَسْ[[عَ]] إِلَى الشَّرِّ", "Don't strive towards evil.", "Alif dropped; fatḥa remains."]] },
        { base: ["يَدْنُو القِطَارُ مِنَ المَحَطَّةِ", "The train approaches the station."], baseLabel: "rafʿ (hidden)", ops: [["أَنْ", "أَرْجُو أَنْ يَدْنُ[[وَ]] القِطَارُ", "I hope the train comes near.", "Visible fatḥa on wāw."], ["لَا", "لَا تَدْ[[نُ]] مِنَ الكَلْبِ", "Don't go near the dog.", "Wāw dropped; ḍamma remains."]] }
      ] } },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings", pages: "128–129",
      b: `<div class="rule"><p><span class="ar">يَسْعَى: فِعْلٌ مُضَارِعٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ المُقَدَّرَةُ عَلَى الأَلِفِ لِلتَّعَذُّرِ.</span></p>
        <p><span class="ar">يَدْعُو: … الضَّمَّةُ المُقَدَّرَةُ عَلَى الوَاوِ لِلثِّقَلِ.</span></p>
        <p><span class="ar">لَمْ يَرْمِ: فِعْلٌ مُضَارِعٌ مَجْزُومٌ، وَعَلَامَةُ جَزْمِهِ حَذْفُ حَرْفِ العِلَّةِ.</span></p></div>
        <p>Grammarians give two reasons: on the alif the vowel is <b>impossible</b> (<span class="ar">لِلتَّعَذُّرِ</span>); on wāw and yāʾ it is <b>too heavy</b> (<span class="ar">لِلثِّقَلِ</span>).</p>`,
      check: [["Sign of jazm in لَمْ يَدْعُ:", ["حذف حرف العلة", "السكون"], 0, "", false]] }
  ],

  scenes: [
    { h: "نَصِيحَةُ الجَدِّ", en: "Grandfather's advice", pic: "👴", lines: [
      ["الجَدُّ", "يَا بُنَيَّ، اِسْعَ إِلَى الخَيْرِ، وَلَا تَسْعَ إِلَى الشَّرِّ.", "My son, strive for good and don't strive for evil."],
      ["الحَفِيدُ", "سَأَسْعَى إِلَى الخَيْرِ دَائِمًا يَا جَدِّي.", "I'll always strive for good, grandfather."],
      ["الجَدُّ", "وَلَا تَرْمِ الأَوْرَاقَ فِي الطَّرِيقِ.", "And don't throw papers in the street."],
      ["الحَفِيدُ", "لَمْ أَرْمِ وَرَقَةً قَطُّ، وَلَنْ أَرْمِيَ.", "I've never thrown a single paper, and I won't."],
      ["الجَدُّ", "وَادْعُ لِوَالِدَيْكَ، فَإِنَّ اللهَ يُحِبُّ أَنْ نَدْعُوَهُ.", "And pray for your parents, for God loves us to call on Him."]],
      note: "اِسْعَ، لَا تَسْعَ، لَا تَرْمِ، لَمْ أَرْمِ، اُدْعُ (weak letter dropped) · لَنْ أَرْمِيَ، أَنْ نَدْعُوَهُ (visible fatḥa) · سَأَسْعَى (hidden ḍamma)." }
  ],

  vocab: [
    ["مُقَدَّرٌ", "estimated, hidden (vowel)", "adj.", "", "grammar term", "", "Grammar words"],
    ["ظَاهِرٌ", "visible", "adj.", "", "grammar term", "", "Grammar words"],
    ["لِلتَّعَذُّرِ", "because it is impossible", "", "", "", "", "Grammar words"],
    ["لِلثِّقَلِ", "because it is heavy", "", "", "", "", "Grammar words"],
    ["رِزْقٌ", "livelihood", "n.m", "🍞", "", "أَرْزَاقٌ", "Nouns"],
    ["خَيْرٌ", "good", "n.m", "✨", "", "", "Nouns"],
    ["شَرٌّ", "evil", "n.m", "⚠️", "", "شُرُورٌ", "Nouns"],
    ["مَحَطَّةٌ", "station", "n.f", "🚉", "", "مَحَطَّاتٌ", "Nouns"],
    ["حَفِيدٌ", "grandson", "n.m", "👦", "", "أَحْفَادٌ", "Nouns"],
    ["قَطُّ", "ever (with a negative past)", "adv.", "", "", "", "Nouns"],
    ["شَكَا", "to complain", "v.", "", "يَشْكُو", "", "Verbs"],
    ["قَضَى", "to spend; to judge", "v.", "", "يَقْضِي", "", "Verbs"],
    ["رَضِيَ", "to be content", "v.", "", "يَرْضَى", "", "Verbs"],
    ["عَفَا", "to forgive", "v.", "", "يَعْفُو", "", "Verbs"],
    ["بَكَى", "to cry", "v.", "", "يَبْكِي", "", "Verbs"]
  ],

  exercises: [
    { k: "gap", t: "اِجْزِمْ بِـ«لَمْ» · Put in jazm", items: [
      ["يَسْعَى ← لَمْ ___", "يَسْعَ|يسع"], ["يَدْعُو ← لَمْ ___", "يَدْعُ|يدع"], ["يَرْمِي ← لَمْ ___", "يَرْمِ|يرم"], ["يَشْكُو ← لَمْ ___", "يَشْكُ|يشك"], ["يَبْكِي ← لَمْ ___", "يَبْكِ|يبك"], ["يَرْضَى ← لَمْ ___", "يَرْضَ|يرض"]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["لَنْ ___ عَنِ المُسِيءِ.", ["أَعْفُوَ", "أَعْفُو", "أَعْفُ"], 0, "Visible fatḥa on wāw."], ["لَا ___ عَلَى مَا فَاتَ.", ["تَبْكِ", "تَبْكِي", "تَبْكِيَ"], 0, "Prohibition: drop the yāʾ."], ["أُرِيدُ أَنْ ___ وَقْتِي فِي القِرَاءَةِ.", ["أَقْضِيَ", "أَقْضِي", "أَقْضِ"], 0, ""], ["لَمْ ___ الطِّفْلُ.", ["يَبْكِ", "يَبْكِي"], 0, ""]] },
    { k: "irab", t: "مَا عَلَامَةُ الإِعْرَابِ؟ · What is the sign?", cats: ["ضمة مقدرة", "فتحة مقدرة", "فتحة ظاهرة", "حذف حرف العلة"], items: [
      ["[يَسْعَى] النَّاسُ.", "0", ""], ["لَنْ [يَسْعَى] الكَسُولُ.", "1", ""], ["لَنْ [يَرْمِيَ] الوَرَقَ.", "2", ""], ["لَمْ [يَدْعُ] أَحَدًا.", "3", ""], ["[يَدْعُو] المُؤَذِّنُ.", "0", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["In jazm the weak letter is dropped.", true, ""], ["The fatḥa is hidden on the yāʾ in لَنْ يَرْمِيَ.", false, "It is visible."], ["يَسْعَى in rafʿ has a hidden ḍamma.", true, ""]] }
  ],

  drills: [
    ["“Don't forget your book”:", ["لَا تَنْسَ كِتَابَكَ", "لَا تَنْسَى كِتَابَكَ"], 0, ""],
    ["“He won't complain”:", ["لَنْ يَشْكُوَ", "لَنْ يَشْكُو", "لَنْ يَشْكُ"], 0, ""],
    ["“He didn't cry”:", ["لَمْ يَبْكِ", "لَمْ يَبْكِي"], 0, ""],
    ["In rafʿ, يَدْعُو shows…", ["a hidden ḍamma", "a visible ḍamma"], 0, ""],
    ["In naṣb, يَسْعَى shows…", ["a hidden fatḥa", "a visible fatḥa"], 0, ""],
    ["Why is the vowel hidden on the alif?", ["it's impossible (تعذر)", "it's heavy (ثقل)"], 0, ""],
    ["“I hope to meet you”:", ["أَرْجُو أَنْ أَلْقَاكَ", "أَرْجُو أَنْ أَلْقَكَ"], 0, "Naṣb on an alif: hidden; the alif stays."]
  ],

  comp: [["What should the grandson strive for?", ["good", "money", "fame"], 0, 0], ["What has he never done?", ["thrown papers in the street", "prayed", "studied"], 0, 0]],

  cheat: `<h3>المضارع المعتل الآخر</h3><table class="g"><tr><th></th><th>ـى</th><th>ـو</th><th>ـي</th></tr>
    <tr><td>rafʿ</td><td><span class="ar">يَسْعَى</span> hidden</td><td><span class="ar">يَدْعُو</span> hidden</td><td><span class="ar">يَرْمِي</span> hidden</td></tr>
    <tr><td>naṣb</td><td><span class="ar">لَنْ يَسْعَى</span> hidden</td><td><span class="ar">لَنْ يَدْعُوَ</span> visible</td><td><span class="ar">لَنْ يَرْمِيَ</span> visible</td></tr>
    <tr><td>jazm</td><td><span class="ar">لَمْ يَسْعَ</span></td><td><span class="ar">لَمْ يَدْعُ</span></td><td><span class="ar">لَمْ يَرْمِ</span></td></tr></table>`,
  mistakes: [["لَمْ يَنْسَى", "لَمْ يَنْسَ", "The alif drops in jazm."], ["لَنْ أَدْعُو", "لَنْ أَدْعُوَ", "In naṣb the wāw shows its fatḥa."], ["لَا تَرْمِي (to a boy)", "لَا تَرْمِ", "Drop the yāʾ."]],
  tips: [{ t: "Proverbs with weak verbs", b: `<span class="ar">لَا تَبْكِ عَلَى اللَّبَنِ المَسْكُوبِ</span> — don't cry over spilt milk. Make three such warnings with <span class="ar">لَا تَنْسَ، لَا تَشْكُ، لَا تَرْمِ</span>.` }]
});
