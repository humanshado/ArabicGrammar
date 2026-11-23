// الدرس ٦٣ — اللازم والمتعدي (PDF pp. 314–323)
COURSE.add({
  n: 63, pages: [314, 323], method: true,
  summary: "An intransitive verb (لازم) is complete with its doer: نَامَ الطِّفْلُ. A transitive verb (متعدٍّ) needs an object: قَرَأَ الطَّالِبُ الكِتَابَ. Some take one object, some two (أَعْطَى، ظَنَّ، جَعَلَ). An intransitive verb can be made transitive by adding a hamza (خَرَجَ ← أَخْرَجَ) or doubling the middle letter (فَرِحَ ← فَرَّحَ), or by a preposition.",
  objectives: ["tell لازم from متعدٍّ", "use verbs with two objects: أَعْطَى، مَنَحَ، ظَنَّ، جَعَلَ", "make intransitive verbs transitive with أ، تضعيف، or a preposition"],
  lesson: [
    { id: "two", t: "Does the action pass to an object?", ar: "اللازم والمتعدي", pos: "sentence structure", pages: "314–315",
      widget: "sorter",
      wd: { title: "Lāzim or mutaʿaddī?", bins: [["لازم", "no object"], ["متعدٍّ", "takes an object"]], items: [["نَامَ", 0, ""], ["قَرَأَ", 1, ""], ["جَلَسَ", 0, ""], ["كَتَبَ", 1, ""], ["ضَحِكَ", 0, ""], ["أَكَلَ", 1, ""], ["حَزِنَ", 0, ""], ["فَتَحَ", 1, ""]] },
      rule: `<p><span class="ar">الفِعْلُ اللَّازِمُ: مَا يَكْتَفِي بِفَاعِلِهِ. وَالمُتَعَدِّي: مَا يَتَجَاوَزُ فَاعِلَهُ إِلَى مَفْعُولٍ بِهِ أَوْ أَكْثَرَ.</span></p>` },
    { id: "two-objects", t: "Verbs with two objects", ar: "أقسام المتعدي", pos: "sentence structure", pages: "315–318",
      b: `<ul><li>Giving: <span class="ar">أَعْطَى المُدِيرُ الفَائِزَ جَائِزَةً</span> (the head gave the winner a prize), <span class="ar">مَنَحَ، كَسَا، أَلْبَسَ</span>.</li>
        <li>Thinking / making (originally a mubtadaʾ + khabar): <span class="ar">ظَنَنْتُ الجَوَّ بَارِدًا</span> (I thought the weather cold), <span class="ar">جَعَلْتُ الطِّينَ إِبْرِيقًا</span>, <span class="ar">حَسِبَ، وَجَدَ، رَأَى (= believed)</span>.</li></ul>`,
      check: [["Objects in أَعْطَيْتُ الفَقِيرَ ثَوْبًا:", ["الفَقِيرَ and ثَوْبًا", "ثَوْبًا only"], 0, "", false]] },
    { id: "make", t: "Making a verb transitive", ar: "تعدية الفعل", pos: "conjugation", pages: "319–323",
      widget: "transform",
      wd: { title: "Three ways", sets: [
        { base: ["خَرَجَ الوَلَدُ", "The boy went out."], baseLabel: "lāzim", ops: [["+ hamza", "[[أَ]]خْرَجَ الأَبُ الوَلَدَ", "The father took the boy out."]] },
        { base: ["فَرِحَ الطِّفْلُ", "The child was happy."], baseLabel: "lāzim", ops: [["+ doubling", "فَ[[رَّ]]حَتِ الهَدِيَّةُ الطِّفْلَ", "The gift made the child happy."]] },
        { base: ["ذَهَبَ الوَلَدُ", "The boy went."], baseLabel: "lāzim", ops: [["+ preposition", "ذَهَبَ الأَبُ [[بِـ]]الوَلَدِ", "The father took the boy (went with him)."]] }
      ] } }
  ],
  scenes: [{ h: "يَوْمُ العِيدِ", en: "Eid day", pic: "🎁", lines: [["", "فَرِحَ الأَطْفَالُ بِالعِيدِ.", "The children rejoiced at Eid."], ["", "أَعْطَى الجَدُّ كُلَّ طِفْلٍ هَدِيَّةً.", "Grandfather gave each child a present."], ["", "أَلْبَسَتِ الأُمُّ الصَّغِيرَ ثَوْبًا جَدِيدًا.", "Mother dressed the little one in a new garment."], ["", "وَأَخْرَجَ الأَبُ الأُسْرَةَ إِلَى الحَدِيقَةِ.", "And father took the family out to the park."], ["", "ظَنَنْتُ اليَوْمَ قَصِيرًا، لِأَنَّهُ كَانَ جَمِيلًا.", "I thought the day short, because it was lovely."]]}],
  vocab: [["لَازِمٌ", "intransitive", "adj.", "", "", "", "Grammar"], ["مُتَعَدٍّ", "transitive", "adj.", "", "", "", "Grammar"], ["أَعْطَى", "to give", "v.", "", "يُعْطِي", "", "Two objects"], ["مَنَحَ", "to grant", "v.", "", "يَمْنَحُ", "", "Two objects"], ["ظَنَّ", "to think", "v.", "", "يَظُنُّ", "", "Two objects"], ["جَعَلَ", "to make, turn into", "v.", "", "يَجْعَلُ", "", "Two objects"], ["أَلْبَسَ", "to dress (someone)", "v.", "", "يُلْبِسُ", "", "Two objects"], ["حَزِنَ", "to be sad", "v.", "", "يَحْزَنُ", "", "Words"], ["عِيدٌ", "feast, Eid", "n.m", "🎉", "", "أَعْيَادٌ", "Words"], ["طِينٌ", "clay", "n.m", "🏺", "", "", "Words"]],
  exercises: [
    { k: "tr", t: "عَدِّ الفِعْلَ · Make it transitive", items: [["جَلَسَ الضَّيْفُ. (+ hamza: the host seated the guest)", "أجلس المضيف الضيف|أَجْلَسَ المُضِيفُ الضَّيْفَ"], ["نَزَلَ الرَّاكِبُ. (+ hamza)", "أنزل السائق الراكب|أَنْزَلَ السَّائِقُ الرَّاكِبَ"]] },
    { k: "sort", t: "كَمْ مَفْعُولًا؟", cats: ["لازم", "متعدٍّ لمفعول", "متعدٍّ لمفعولين"], items: [["نَامَ", "0", ""], ["قَرَأَ", "1", ""], ["أَعْطَى", "2", ""], ["ظَنَّ", "2", ""], ["جَلَسَ", "0", ""], ["فَتَحَ", "1", ""]] }
  ],
  drills: [["خَرَجَ + hamza →", ["أَخْرَجَ", "خَرَّجَ"], 0, ""], ["Which takes two objects?", ["مَنَحَ", "جَلَسَ"], 0, ""], ["ظَنَنْتُ الجَوَّ ___", ["بَارِدًا", "بَارِدٌ"], 0, ""]],
  comp: [["What did grandfather give each child?", ["a present", "money", "a book"], 0, 0]],
  cheat: `<h3>اللازم والمتعدي</h3><p>Lāzim: <span class="ar">نَامَ، جَلَسَ</span> · one object: <span class="ar">قَرَأَ</span> · two: <span class="ar">أَعْطَى، ظَنَّ، جَعَلَ</span> · make transitive: <span class="ar">أَخْرَجَ، فَرَّحَ، ذَهَبَ بِـ</span></p>`,
  mistakes: [["ظَنَنْتُ الجَوَّ بَارِدٌ", "ظَنَنْتُ الجَوَّ بَارِدًا", "Both objects manṣūb."]],
  tips: [{ t: "Causatives", b: `Pair verbs: <span class="ar">دَخَلَ/أَدْخَلَ، نَامَ/أَنَامَ، فَرِحَ/فَرَّحَ، عَلِمَ/عَلَّمَ</span>.` }]
});
