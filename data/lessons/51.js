// الدرس ٥١ — ظرف الزمان وظرف المكان (PDF pp. 245–249)
COURSE.add({
  n: 51, pages: [245, 249], method: true,
  summary: "Adverbs of time and place (الظرف، المفعول فيه) are nouns in naṣb that tell when or where something happened: سَافَرْتُ لَيْلًا، جَلَسْتُ تَحْتَ الشَّجَرَةِ. Many are muḍāf to the next noun: أَمَامَ البَيْتِ، بَعْدَ الظُّهْرِ.",
  objectives: ["use time adverbs: صَبَاحًا، لَيْلًا، يَوْمًا، قَبْلَ، بَعْدَ، عِنْدَ", "use place adverbs: أَمَامَ، خَلْفَ، فَوْقَ، تَحْتَ، بَيْنَ، يَمِينَ، شِمَالَ", "put them in naṣb (or fixed: حَيْثُ، الآنَ، أَمْسِ)", "parse: ظرف زمان منصوب"],

  lesson: [
    { id: "time", t: "When?", ar: "ظرف الزمان", pos: "case endings", pages: "245–246",
      b: `<p><span class="ar">سَافَرْتُ <b>لَيْلًا</b></span> (I travelled at night), <span class="ar">أَصُومُ <b>يَوْمًا</b> فِي الأُسْبُوعِ</span>, <span class="ar">أَعُودُ <b>بَعْدَ</b> العَصْرِ</span>. The word meaning “in / at that time” is manṣūb — it hides the meaning of <span class="ar">فِي</span>.</p>`,
      rule: `<p><span class="ar">الظَّرْفُ: اسْمٌ مَنْصُوبٌ يَدُلُّ عَلَى زَمَانِ وُقُوعِ الفِعْلِ أَوْ مَكَانِهِ، وَيَتَضَمَّنُ مَعْنَى «فِي».</span></p>` },
    { id: "place", t: "Where?", ar: "ظرف المكان", pos: "case endings", pages: "246–247",
      b: `<p><span class="ar">جَلَسْتُ <b>تَحْتَ</b> الشَّجَرَةِ</span>, <span class="ar">وَقَفَ <b>أَمَامَ</b> البَابِ</span>, <span class="ar">سِرْتُ <b>مِيلًا</b></span>. The noun after <span class="ar">تَحْتَ، أَمَامَ</span> is muḍāf ilayhi (majrūr).</p>`,
      widget: "sorter",
      wd: { title: "Time or place?", bins: [["ظرف زمان", "time"], ["ظرف مكان", "place"]], items: [["صَبَاحًا", 0, ""], ["أَمَامَ", 1, ""], ["بَعْدَ", 0, ""], ["فَوْقَ", 1, ""], ["لَيْلًا", 0, ""], ["بَيْنَ", 1, "between (also used for time)"], ["سَاعَةً", 0, ""], ["خَلْفَ", 1, ""]] },
      check: [["“The cat is under the table”:", ["القِطُّ تَحْتَ المَائِدَةِ", "القِطُّ تَحْتُ المَائِدَةُ"], 0, "", "القِطُّ تَحْتَ المَائِدَةِ"]] },
    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings", pages: "247–249",
      b: `<div class="rule"><p><span class="ar">لَيْلًا: ظَرْفُ زَمَانٍ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></p><p><span class="ar">تَحْتَ: ظَرْفُ مَكَانٍ مَنْصُوبٌ وَهُوَ مُضَافٌ، الشَّجَرَةِ: مُضَافٌ إِلَيْهِ مَجْرُورٌ.</span></p><p><span class="ar">الآنَ / أَمْسِ / حَيْثُ: ظُرُوفٌ مَبْنِيَّةٌ فِي مَحَلِّ نَصْبٍ.</span></p></div>` }
  ],
  scenes: [{ h: "يَوْمُ الجُمُعَةِ", en: "Friday", pic: "🕌", lines: [["", "اسْتَيْقَظْتُ صَبَاحًا، وَصَلَّيْتُ قَبْلَ الشُّرُوقِ.", "I woke in the morning and prayed before sunrise."], ["", "جَلَسْتُ مَعَ أُسْرَتِي حَوْلَ المَائِدَةِ.", "I sat with my family around the table."], ["", "ذَهَبْنَا إِلَى المَسْجِدِ ظُهْرًا، وَجَلَسْتُ بَيْنَ أَبِي وَأَخِي.", "We went to the mosque at noon, and I sat between my father and brother."], ["", "وَبَعْدَ العَصْرِ لَعِبْنَا خَلْفَ البَيْتِ سَاعَةً.", "And after the afternoon prayer we played behind the house for an hour."]]}],
  vocab: [["ظَرْفٌ", "adverb (time/place)", "n.m", "", "", "ظُرُوفٌ", "Grammar"], ["أَمَامَ", "in front of", "adv.", "", "", "", "Place"], ["خَلْفَ", "behind", "adv.", "", "", "", "Place"], ["فَوْقَ", "above", "adv.", "", "", "", "Place"], ["تَحْتَ", "under", "adv.", "", "", "", "Place"], ["بَيْنَ", "between", "adv.", "", "", "", "Place"], ["قَبْلَ", "before", "adv.", "", "", "", "Time"], ["بَعْدَ", "after", "adv.", "", "", "", "Time"], ["ظُهْرًا", "at noon", "adv.", "", "", "", "Time"], ["شُرُوقٌ", "sunrise", "n.m", "🌅", "", "", "Time"], ["مَسْجِدٌ", "mosque", "n.m", "🕌", "", "مَسَاجِدُ", "Time"]],
  exercises: [
    { k: "gap", t: "ضَعْ ظَرْفًا مُنَاسِبًا", bank: true, items: [["يَطِيرُ الطَّائِرُ ___ الشَّجَرَةِ.", "فَوْقَ"], ["نَامَ الطِّفْلُ ___ .", "لَيْلًا"], ["وَقَفَ الحَارِسُ ___ البَابِ.", "أَمَامَ"], ["أَغْسِلُ يَدَيَّ ___ الأَكْلِ.", "قَبْلَ"]] },
    { k: "irab", t: "أَعْرِبْ", cats: ["ظرف زمان منصوب", "ظرف مكان منصوب", "مضاف إليه مجرور"], items: [["سَافَرْتُ [لَيْلًا].", "0", ""], ["جَلَسْتُ [تَحْتَ] الشَّجَرَةِ.", "1", ""], ["جَلَسْتُ تَحْتَ [الشَّجَرَةِ].", "2", ""], ["أَعُودُ [بَعْدَ] العَصْرِ.", "0", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The adverb is manṣūb.", true, ""], ["The noun after أمامَ is manṣūb.", false, "Majrūr (muḍāf ilayhi)."]] }
  ],
  drills: [["“behind the house”:", ["خَلْفَ البَيْتِ", "خَلْفُ البَيْتُ"], 0, ""], ["Time adverb:", ["صَبَاحًا", "أَمَامَ"], 0, ""], ["Place adverb:", ["يَمِينَ", "مَسَاءً"], 0, ""], ["الآنَ is…", ["fixed, in the place of naṣb", "manṣūb with fatḥa"], 0, ""]],
  comp: [["Where did the speaker sit in the mosque?", ["between his father and brother", "in front", "outside"], 0, 0], ["When did they play?", ["after the afternoon prayer", "at night", "before sunrise"], 0, 0]],
  cheat: `<h3>الظرف (المفعول فيه)</h3><p>Time: <span class="ar">صَبَاحًا، لَيْلًا، يَوْمًا، قَبْلَ، بَعْدَ، عِنْدَ</span> · place: <span class="ar">أَمَامَ، خَلْفَ، فَوْقَ، تَحْتَ، بَيْنَ، يَمِينَ</span> — manṣūb; the next noun majrūr.</p>`,
  mistakes: [["جَلَسْتُ تَحْتُ الشَّجَرَةِ", "جَلَسْتُ تَحْتَ الشَّجَرَةِ", "Adverb manṣūb."], ["أَمَامَ البَيْتَ", "أَمَامَ البَيْتِ", "Muḍāf ilayhi majrūr."]],
  tips: [{ t: "Part 2 complete", b: `You've finished Part 2. Go back to the <a href="#/irab">Iʿrāb map</a>: you can now fill in every naṣb position up to the adverbs, and every substitute sign (letters, hidden vowels, dropped letters).` }]
});
