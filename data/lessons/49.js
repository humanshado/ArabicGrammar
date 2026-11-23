// الدرس ٤٩ — المفعول المطلق (PDF pp. 236–240)
COURSE.add({
  n: 49, pages: [236, 240], method: true,
  summary: "The absolute object (المفعول المطلق) is the verbal noun (maṣdar) of the verb itself, in naṣb, used to emphasise the action (فَرِحْتُ فَرَحًا), to show its kind (سِرْتُ سَيْرَ العُقَلَاءِ) or its number (ضَرَبْتُ ضَرْبَتَيْنِ).",
  objectives: ["recognise the maṣdar of a verb", "use it as an absolute object in naṣb", "know its three purposes: emphasis, kind, number"],

  lesson: [
    { id: "what", t: "The verb's own noun", ar: "المفعول المطلق", pos: "case endings", pages: "236–238",
      widget: "transform",
      wd: { title: "Three purposes", sets: [{ base: ["فَرِحَ الطِّفْلُ", "The child was glad."], baseLabel: "plain", ops: [["emphasis", "فَرِحَ الطِّفْلُ [[فَرَحًا]]", "The child was really glad."], ["kind", "فَرِحَ الطِّفْلُ [[فَرَحًا كَبِيرًا]]", "The child was very glad.", "An adjective shows the kind."], ["kind (iḍāfa)", "سَارَ الجُنْدِيُّ [[سَيْرَ]] الأَبْطَالِ", "The soldier marched like heroes march."], ["number", "دَقَّ الجَرَسُ [[دَقَّتَيْنِ]]", "The bell rang twice."]] }] },
      rule: `<p><span class="ar">المَفْعُولُ المُطْلَقُ: اسْمٌ مَنْصُوبٌ يُذْكَرُ بَعْدَ الفِعْلِ لِتَوْكِيدِ مَعْنَاهُ، أَوْ بَيَانِ نَوْعِهِ، أَوْ بَيَانِ عَدَدِهِ.</span></p>`,
      check: [["“He worked hard” (emphasis):", ["اجْتَهَدَ اجْتِهَادًا", "اجْتَهَدَ مُجْتَهِدًا"], 0, "", "اجْتَهَدَ اجْتِهَادًا"]] },
    { id: "masdar", t: "Finding the maṣdar", ar: "المصدر", pos: "conjugation", pages: "238–240",
      b: `<table class="g"><tr><th>verb</th><th>maṣdar</th></tr><tr><td><span class="ar">فَرِحَ</span></td><td><span class="ar">فَرَحٌ</span></td></tr><tr><td><span class="ar">جَلَسَ</span></td><td><span class="ar">جُلُوسٌ</span></td></tr><tr><td><span class="ar">ضَرَبَ</span></td><td><span class="ar">ضَرْبٌ</span></td></tr><tr><td><span class="ar">اِحْتَرَمَ</span></td><td><span class="ar">اِحْتِرَامٌ</span></td></tr><tr><td><span class="ar">اِسْتَقْبَلَ</span></td><td><span class="ar">اِسْتِقْبَالٌ</span></td></tr><tr><td><span class="ar">نَظَّفَ</span></td><td><span class="ar">تَنْظِيفٌ</span></td></tr></table><p>Three-letter verbs have many maṣdar patterns (learn each); longer verbs have regular ones.</p>` }
  ],
  scenes: [{ h: "اسْتِقْبَالُ الأَبْطَالِ", en: "Welcoming the heroes", pic: "🏅", lines: [["", "اسْتَقْبَلَ النَّاسُ الفَرِيقَ اسْتِقْبَالًا حَارًّا.", "People gave the team a warm welcome."], ["", "صَفَّقُوا تَصْفِيقًا طَوِيلًا.", "They applauded for a long time."], ["", "وَفَرِحَ اللَّاعِبُونَ فَرَحًا عَظِيمًا.", "And the players were overjoyed."], ["", "وَقَفَزَ الأَطْفَالُ قَفْزَتَيْنِ مِنَ السُّرُورِ.", "And the children jumped twice for joy."]]}],
  vocab: [["مَفْعُولٌ مُطْلَقٌ", "absolute object", "n.m", "", "", "", "Grammar"], ["مَصْدَرٌ", "verbal noun", "n.m", "", "", "مَصَادِرُ", "Grammar"], ["صَفَّقَ", "to applaud", "v.", "", "يُصَفِّقُ · تَصْفِيقٌ", "", "Words"], ["قَفَزَ", "to jump", "v.", "", "يَقْفِزُ · قَفْزٌ", "", "Words"], ["اسْتَقْبَلَ", "to welcome", "v.", "", "يَسْتَقْبِلُ · اسْتِقْبَالٌ", "", "Words"], ["بَطَلٌ", "hero", "n.m", "🦸", "", "أَبْطَالٌ", "Words"], ["جَرَسٌ", "bell", "n.m", "🔔", "", "أَجْرَاسٌ", "Words"]],
  exercises: [
    { k: "gap", t: "ضَعْ مَفْعُولًا مُطْلَقًا", items: [["نَامَ الطِّفْلُ ___ هَادِئًا.", "نَوْمًا|نوما"], ["احْتَرَمْتُ أُسْتَاذِي ___ .", "احْتِرَامًا|احتراما"], ["جَلَسْتُ ___ المُؤَدَّبِينَ.", "جُلُوسَ|جلوس"], ["نَظَّفْتُ الحُجْرَةَ ___ .", "تَنْظِيفًا|تنظيفا"]] },
    { k: "sort", t: "مَا غَرَضُهُ؟", cats: ["توكيد", "بيان النوع", "بيان العدد"], items: [["فَرِحْتُ فَرَحًا", "0", ""], ["فَرِحْتُ فَرَحًا عَظِيمًا", "1", ""], ["قَرَأْتُ الدَّرْسَ قِرَاءَتَيْنِ", "2", ""], ["سِرْتُ سَيْرَ السُّلَحْفَاةِ", "1", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The absolute object is manṣūb.", true, ""], ["It must be the maṣdar of the verb (or its substitute).", true, ""]] }
  ],
  drills: [["Maṣdar of جَلَسَ:", ["جُلُوسٌ", "جَالِسٌ"], 0, ""], ["Absolute object is…", ["منصوب", "مرفوع"], 0, ""], ["“He laughed a lot”:", ["ضَحِكَ ضَحِكًا كَثِيرًا", "ضَحِكَ كَثِيرٌ"], 0, ""]],
  comp: [["How did people welcome the team?", ["warmly", "coldly", "quietly"], 0, 0]],
  cheat: `<h3>المفعول المطلق</h3><p>Maṣdar of the verb in naṣb: emphasis <span class="ar">فَرِحْتُ فَرَحًا</span> · kind <span class="ar">فَرَحًا كَبِيرًا / سَيْرَ الأَبْطَالِ</span> · number <span class="ar">دَقَّتَيْنِ</span>.</p>`,
  mistakes: [["فَرِحْتُ فَرَحٌ", "فَرِحْتُ فَرَحًا", "Manṣūb."]],
  tips: [{ t: "Stronger writing", b: `Turn plain verbs into vivid ones: <span class="ar">نَجَحَ نَجَاحًا بَاهِرًا، بَكَى بُكَاءً مُرًّا</span>.` }]
});
