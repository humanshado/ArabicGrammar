// الدرس ٤٨ — أفعال الاستمرار الناسخة وما دام (PDF pp. 231–235)
COURSE.add({
  n: 48, pages: [231, 235], method: true,
  summary: "Four more sisters of kāna express continuing: مَا زَالَ، مَا بَرِحَ، مَا فَتِئَ، مَا انْفَكَّ (still, kept on), and مَا دَامَ (as long as). Like kāna, they keep the ism marfūʿ and make the khabar manṣūb: مَا زَالَ الجَوُّ بَارِدًا.",
  objectives: ["use مَا زَالَ، مَا بَرِحَ، مَا فَتِئَ، مَا انْفَكَّ = still", "use مَا دَامَ = as long as", "keep the khabar manṣūb", "use the present forms: لَا يَزَالُ"],

  lesson: [
    { id: "still", t: "“Still”", ar: "ما زال وأخواتها", pos: "case endings", pages: "231–233",
      widget: "transform",
      wd: { title: "Continuing verbs", sets: [{ base: ["الجَوُّ بَارِدٌ", "The weather is cold."], baseLabel: "nominal", ops: [["مَا زَالَ", "[[مَا زَالَ]] الجَوُّ [[بَارِدًا]]", "The weather is still cold."], ["لَا يَزَالُ", "[[لَا يَزَالُ]] الجَوُّ [[بَارِدًا]]", "The weather is still cold (present form)."], ["مَا بَرِحَ", "[[مَا بَرِحَ]] الجَوُّ [[بَارِدًا]]", "The weather kept on being cold."], ["مَا دَامَ", "لَا تَخْرُجْ [[مَا دَامَ]] الجَوُّ [[بَارِدًا]]", "Don't go out as long as the weather is cold.", "مَا دَامَ needs a sentence before it."]] }] },
      rule: `<p><span class="ar">مَا زَالَ، وَمَا بَرِحَ، وَمَا فَتِئَ، وَمَا انْفَكَّ تُفِيدُ الاسْتِمْرَارَ، وَمَا دَامَ تُفِيدُ بَيَانَ المُدَّةِ؛ وَكُلُّهَا تَعْمَلُ عَمَلَ كَانَ.</span></p>`,
      check: [["مَا زَالَ المَطَرُ ___", ["غَزِيرًا", "غَزِيرٌ"], 0, "", "مَا زَالَ المَطَرُ غَزِيرًا"]] },
    { id: "neg", t: "Why the negation?", ar: "النفي في ما زال", pos: "style", pages: "233–235",
      b: `<p><span class="ar">زَالَ</span> means “ceased”. <span class="ar">مَا زَالَ</span> = “didn't cease” = <b>still</b>. So the <span class="ar">مَا</span> is essential; without it the meaning flips. In the present: <span class="ar">لَا يَزَالُ</span>.</p>`,
      check: [["“The child is still asleep”:", ["مَا زَالَ الطِّفْلُ نَائِمًا", "زَالَ الطِّفْلُ نَائِمًا"], 0, "", "مَا زَالَ الطِّفْلُ نَائِمًا"]] }
  ],
  scenes: [{ h: "صَبْرُ العَالِمِ", en: "The scholar's patience", pic: "🔬", lines: [["", "مَا زَالَ العَالِمُ يَعْمَلُ فِي مُخْتَبَرِهِ.", "The scientist is still working in his lab."], ["", "مَا فَتِئَ يُجَرِّبُ، وَمَا انْفَكَّ صَبُورًا.", "He kept on experimenting and remained patient."], ["", "قَالَ: سَأَعْمَلُ مَا دُمْتُ قَادِرًا.", "He said: I'll work as long as I am able."], ["", "وَلَا يَزَالُ النَّاسُ يَذْكُرُونَ اكْتِشَافَاتِهِ.", "And people still remember his discoveries."]]}],
  vocab: [["مَا زَالَ", "still (past)", "v.", "", "لَا يَزَالُ", "", "Continuing verbs"], ["مَا بَرِحَ", "kept on", "v.", "", "", "", "Continuing verbs"], ["مَا فَتِئَ", "kept on", "v.", "", "", "", "Continuing verbs"], ["مَا انْفَكَّ", "kept on", "v.", "", "", "", "Continuing verbs"], ["مَا دَامَ", "as long as", "v.", "", "", "", "Continuing verbs"], ["عَالِمٌ", "scientist, scholar", "n.m", "🧑‍🔬", "", "عُلَمَاءُ", "Words"], ["مُخْتَبَرٌ", "laboratory", "n.m", "🧪", "", "مُخْتَبَرَاتٌ", "Words"], ["جَرَّبَ", "to try, experiment", "v.", "", "يُجَرِّبُ", "", "Words"], ["قَادِرٌ", "able", "adj.", "", "", "", "Words"]],
  exercises: [
    { k: "shakl", t: "اضْبِطِ الخَبَرَ", items: ["مَا زَالَ البَحْرُ هَائِج{ً}ا", "لَا يَزَالُ الطَّرِيقُ طَوِيل{ً}ا", "اجْلِسْ مَا دَامَ المَكَانُ هَادِئ{ً}ا", "مَا بَرِحَ الحَارِسُ يَقِظ{ً}ا"] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["مَا زَالَ means “still”.", true, ""], ["مَا دَامَ makes the khabar marfūʿ.", false, "manṣūb"]] }
  ],
  drills: [["مَا زَالَ works like…", ["كان", "إنّ"], 0, ""], ["Present of مَا زَالَ:", ["لَا يَزَالُ", "مَا يَزُولُ"], 0, ""], ["“as long as”:", ["مَا دَامَ", "مَا زَالَ"], 0, ""]],
  comp: [["What is the scientist still doing?", ["working in his lab", "sleeping", "travelling"], 0, 0]],
  cheat: `<h3>أفعال الاستمرار وما دام</h3><p class="ar">مَا زَالَ، مَا بَرِحَ، مَا فَتِئَ، مَا انْفَكَّ (still) · مَا دَامَ (as long as)</p><p class="ar">مَا زَالَ الجَوُّ بَارِدًا · لَا يَزَالُ المَطَرُ غَزِيرًا</p>`,
  mistakes: [["مَا زَالَ الجَوُّ بَارِدٌ", "مَا زَالَ الجَوُّ بَارِدًا", "Khabar manṣūb."]],
  tips: [{ t: "Still…", b: `Describe what hasn't changed since you were young: <span class="ar">مَا زِلْتُ أُحِبُّ…، لَا يَزَالُ بَيْتُنَا…</span>` }]
});
