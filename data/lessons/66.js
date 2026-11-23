// الدرس ٦٦ — المستثنى (PDF pp. 333–344)
COURSE.add({
  n: 66, pages: [333, 344], method: true,
  summary: "Exception (الاستثناء) removes something from a group: حَضَرَ الطُّلَّابُ إِلَّا خَالِدًا. After إِلَّا in a complete positive sentence the excepted noun is manṣūb; in a negative sentence with the group mentioned it may follow the group; if the group is missing, it takes whatever case the sentence needs (مَا حَضَرَ إِلَّا خَالِدٌ). After غَيْر / سِوَى the noun is majrūr and غير itself takes the case. After خَلَا، عَدَا، حَاشَا it is manṣūb or majrūr.",
  objectives: ["use إِلَّا in positive sentences: noun manṣūb", "handle negative sentences and the missing group (restriction)", "use غَيْر and سِوَى: the next noun majrūr, غير takes the case", "use خَلَا، عَدَا، حَاشَا"],
  lesson: [
    { id: "illa", t: "إِلَّا: except", ar: "المستثنى بإلا", pos: "case endings", pages: "333–336",
      widget: "transform",
      wd: { title: "Three situations", sets: [
        { base: ["حَضَرَ الطُّلَّابُ", "The students came."], baseLabel: "group", ops: [
          ["positive, complete", "حَضَرَ الطُّلَّابُ إِلَّا [[خَالِدًا]]", "The students came, except Khalid.", "Group mentioned, positive → manṣūb (always)."],
          ["negative, complete", "مَا حَضَرَ الطُّلَّابُ إِلَّا [[خَالِدًا / خَالِدٌ]]", "None of the students came except Khalid.", "Negative with group → manṣūb, or follow the group (خالدٌ as badal)."],
          ["group missing", "مَا حَضَرَ إِلَّا [[خَالِدٌ]]", "Only Khalid came.", "No group → إلا only restricts; خالدٌ is the doer."]] }
      ] },
      rule: `<p><span class="ar">المُسْتَثْنَى بِإِلَّا يُنْصَبُ إِذَا كَانَ الكَلَامُ تَامًّا مُثْبَتًا؛ وَيَجُوزُ نَصْبُهُ أَوْ إِتْبَاعُهُ إِذَا كَانَ تَامًّا مَنْفِيًّا؛ وَيُعْرَبُ حَسَبَ مَوْقِعِهِ إِذَا كَانَ الكَلَامُ نَاقِصًا.</span></p>`,
      check: [["نَجَحَ التَّلَامِيذُ إِلَّا ___", ["وَاحِدًا", "وَاحِدٌ"], 0, "", "نَجَحَ التَّلَامِيذُ إِلَّا وَاحِدًا"], ["مَا قَرَأْتُ إِلَّا ___ (only one book)", ["كِتَابًا", "كِتَابٌ"], 0, "Missing group: object of قرأتُ.", "مَا قَرَأْتُ إِلَّا كِتَابًا"]] },
    { id: "ghayr", t: "غَيْر and سِوَى", ar: "المستثنى بغير وسوى", pos: "case endings", pages: "337–339",
      b: `<p>With <span class="ar">غَيْر</span> and <span class="ar">سِوَى</span>, the excepted noun is <b>muḍāf ilayhi (majrūr)</b>, and <span class="ar">غَيْر</span> itself takes the case that a noun after <span class="ar">إِلَّا</span> would take: <span class="ar">حَضَرَ الطُّلَّابُ غَيْرَ خَالِدٍ</span>, <span class="ar">مَا حَضَرَ غَيْرُ خَالِدٍ</span>. (<span class="ar">سِوَى</span> ends in alif, so its case is hidden.)</p>`,
      check: [["حَضَرَ الضُّيُوفُ غَيْرَ ___", ["وَاحِدٍ", "وَاحِدًا"], 0, "", "حَضَرَ الضُّيُوفُ غَيْرَ وَاحِدٍ"]] },
    { id: "khala", t: "خَلَا، عَدَا، حَاشَا", ar: "المستثنى بخلا وعدا وحاشا", pos: "case endings", pages: "340–344",
      b: `<p>These can be treated as verbs (noun after them = object, manṣūb) or as prepositions (noun majrūr): <span class="ar">حَضَرَ الطُّلَّابُ خَلَا خَالِدًا / خَالِدٍ</span>. With <span class="ar">مَا</span> in front (<span class="ar">مَا خَلَا، مَا عَدَا</span>) only naṣb is allowed.</p>`,
      check: [["زَارَنِي أَصْدِقَائِي مَا عَدَا ___", ["سَعِيدًا", "سَعِيدٍ"], 0, "", "زَارَنِي أَصْدِقَائِي مَا عَدَا سَعِيدًا"]] }
  ],
  scenes: [{ h: "الرِّحْلَةُ", en: "The trip", pic: "🚌", lines: [["", "ذَهَبَ التَّلَامِيذُ إِلَى الرِّحْلَةِ إِلَّا تِلْمِيذًا مَرِيضًا.", "The pupils went on the trip except one sick pupil."], ["", "زَارُوا الأَمَاكِنَ كُلَّهَا غَيْرَ المَتْحَفِ.", "They visited all the places except the museum."], ["", "وَأَكَلُوا الطَّعَامَ مَا عَدَا الحَلْوَى.", "And they ate the food except the sweets."], ["", "مَا تَأَخَّرَ إِلَّا سَمِيرٌ.", "Only Samir was late."]]}],
  vocab: [["مُسْتَثْنًى", "excepted noun", "n.m", "", "", "", "Grammar"], ["إِلَّا", "except", "part.", "", "", "", "Exception words"], ["غَيْرُ", "other than, except", "n.", "", "", "", "Exception words"], ["سِوَى", "except", "n.", "", "", "", "Exception words"], ["خَلَا / عَدَا / حَاشَا", "except", "", "", "", "", "Exception words"], ["مَكَانٌ", "place", "n.m", "📍", "", "أَمَاكِنُ", "Words"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرْ", items: [["قَرَأْتُ الكُتُبَ إِلَّا ___", ["كِتَابًا", "كِتَابٌ", "كِتَابٍ"], 0, ""], ["مَا نَجَحَ إِلَّا ___", ["المُجْتَهِدُ", "المُجْتَهِدَ"], 0, ""], ["سَافَرَ الأَهْلُ سِوَى ___", ["أَبِي", "أَبَاكَ"], 0, ""], ["حَضَرَ الجَمِيعُ ___ عَلِيٍّ", ["غَيْرَ", "غَيْرُ"], 0, ""], ["مَا حَضَرَ ___ عَلِيٍّ", ["غَيْرُ", "غَيْرَ"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["After إِلَّا in a complete positive sentence, the noun is manṣūb.", true, ""], ["After غَيْر the noun is manṣūb.", false, "Majrūr."]] }
  ],
  drills: [["حَضَرَ القَوْمُ إِلَّا ___", ["زَيْدًا", "زَيْدٌ"], 0, ""], ["مَا جَاءَ إِلَّا ___", ["زَيْدٌ", "زَيْدًا"], 0, ""], ["The noun after سِوَى is…", ["majrūr", "manṣūb"], 0, ""], ["مَا عَدَا + noun:", ["manṣūb only", "majrūr only"], 0, ""]],
  comp: [["Who didn't go on the trip?", ["one sick pupil", "Samir", "everyone"], 0, 0], ["What didn't they visit?", ["the museum", "the park", "the zoo"], 0, 0]],
  cheat: `<h3>المستثنى</h3><p>إلا: positive complete → <span class="ar">إِلَّا خَالِدًا</span> · negative complete → naṣb or follow · incomplete → by position: <span class="ar">مَا حَضَرَ إِلَّا خَالِدٌ</span></p><p>غير / سوى: noun majrūr; <span class="ar">غَيْر</span> takes the case · خلا / عدا / حاشا: naṣb or jarr; with ما: naṣb.</p>`,
  mistakes: [["حَضَرَ الطُّلَّابُ إِلَّا خَالِدٌ", "حَضَرَ الطُّلَّابُ إِلَّا خَالِدًا", "Positive and complete → naṣb."], ["غَيْرَ خَالِدًا", "غَيْرَ خَالِدٍ", "After غير: majrūr."]],
  tips: [{ t: "Only…", b: `<span class="ar">مَا … إِلَّا</span> is the classic way to say “only”: <span class="ar">مَا أَكَلْتُ إِلَّا تُفَّاحَةً</span> (I only ate an apple).` }]
});
