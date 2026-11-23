// الدرس ٦٧ — الحال (PDF pp. 345–353)
COURSE.add({
  n: 67, pages: [345, 353], method: true,
  summary: "The ḥāl (الحال) is a manṣūb word describing the state of a noun at the time of the action, answering “how?”: جَاءَ الطِّفْلُ ضَاحِكًا (the child came laughing). It is usually indefinite and derived (a participle), and the noun it describes (صاحب الحال) is usually definite. It can also be a sentence (جَاءَ وَهُوَ يَضْحَكُ) or a phrase (رَأَيْتُ الهِلَالَ بَيْنَ السَّحَابِ).",
  objectives: ["use a single-word ḥāl in naṣb answering كَيْفَ؟", "make it agree with its owner in gender and number", "use a sentence ḥāl with وَ + pronoun", "tell ḥāl from naʿt"],
  lesson: [
    { id: "how", t: "In what state?", ar: "الحال المفردة", pos: "case endings", pages: "345–348",
      widget: "transform",
      wd: { title: "Adding a ḥāl", sets: [{ base: ["رَجَعَ الجُنُودُ", "The soldiers returned."], baseLabel: "no ḥāl", ops: [["ḥāl (word)", "رَجَعَ الجُنُودُ [[مُنْتَصِرِينَ]]", "The soldiers returned victorious.", "Manṣūb (plural: ـِينَ), indefinite."], ["ḥāl (nominal sentence)", "رَجَعَ الجُنُودُ [[وَهُمْ مُنْتَصِرُونَ]]", "The soldiers returned, being victorious.", "وَ + pronoun links it."], ["ḥāl (verbal sentence)", "رَجَعَ الجُنُودُ [[يُنْشِدُونَ]]", "The soldiers returned singing."], ["ḥāl (phrase)", "رَجَعَ الجُنُودُ [[فِي فَرَحٍ]]", "The soldiers returned in joy."]] }] },
      rule: `<p><span class="ar">الحَالُ: اسْمٌ مَنْصُوبٌ يُبَيِّنُ هَيْئَةَ صَاحِبِهِ وَقْتَ وُقُوعِ الفِعْلِ، وَتَكُونُ نَكِرَةً غَالِبًا، وَصَاحِبُهَا مَعْرِفَةً غَالِبًا. وَتَكُونُ مُفْرَدَةً وَجُمْلَةً وَشِبْهَ جُمْلَةٍ.</span></p>`,
      check: [["جَاءَتِ البِنْتُ ___", ["مُسْرِعَةً", "مُسْرِعَةٌ", "المُسْرِعَةَ"], 0, "", "جَاءَتِ البِنْتُ مُسْرِعَةً"]] },
    { id: "agree", t: "Agreement and owner", ar: "مطابقة الحال لصاحبها", pos: "agreement", pages: "348–350",
      b: `<p>The ḥāl agrees with its owner in gender and number (but not in case or definiteness): <span class="ar">عَادَ الطَّالِبَانِ مَسْرُورَيْنِ</span>, <span class="ar">عَادَتِ الطَّالِبَاتُ مَسْرُورَاتٍ</span>. The owner can be the doer, the object or even a majrūr noun: <span class="ar">شَرِبْتُ المَاءَ بَارِدًا</span> (I drank the water cold — the ḥāl describes the water).</p>` },
    { id: "naat", t: "Ḥāl or naʿt?", ar: "الفرق بين الحال والنعت", pos: "sentence structure", pages: "350–353",
      b: `<p><span class="ar">شَرِبْتُ المَاءَ البَارِدَ</span> — I drank the cold water (which water? naʿt, definite, same case). <span class="ar">شَرِبْتُ المَاءَ بَارِدًا</span> — I drank the water (while it was) cold (in what state? ḥāl, indefinite, naṣb).</p>`,
      check: [["Which is a ḥāl?", ["أَكَلْتُ الخُبْزَ سَاخِنًا", "أَكَلْتُ الخُبْزَ السَّاخِنَ"], 0, "", false]] }
  ],
  scenes: [{ h: "يَوْمُ السِّبَاقِ", en: "Race day", pic: "🏃", lines: [["", "وَقَفَ المُتَسَابِقُونَ مُسْتَعِدِّينَ.", "The racers stood ready."], ["", "انْطَلَقَ سَعِيدٌ مُسْرِعًا، وَجَرَى أَحْمَدُ وَهُوَ يَبْتَسِمُ.", "Said shot off fast, and Ahmad ran smiling."], ["", "وَصَلَ سَعِيدٌ أَوَّلًا، فَرَفَعَ يَدَيْهِ فَرِحًا.", "Said arrived first and raised his hands joyfully."], ["", "وَعَادَ المُتَسَابِقُونَ إِلَى بُيُوتِهِمْ مُتْعَبِينَ مَسْرُورِينَ.", "The racers went home tired and happy."]]}],
  vocab: [["حَالٌ", "circumstantial (ḥāl)", "n.f", "", "", "أَحْوَالٌ", "Grammar"], ["صَاحِبُ الحَالِ", "the noun the ḥāl describes", "n.m", "", "", "", "Grammar"], ["مُتَسَابِقٌ", "racer", "n.m", "🏃", "", "مُتَسَابِقُونَ", "Words"], ["مُسْتَعِدٌّ", "ready", "adj.", "", "", "", "Words"], ["ابْتَسَمَ", "to smile", "v.", "", "يَبْتَسِمُ", "", "Words"], ["مُتْعَبٌ", "tired", "adj.", "😓", "", "", "Words"], ["سَاخِنٌ", "hot", "adj.", "♨️", "", "", "Words"], ["أَنْشَدَ", "to sing, chant", "v.", "", "يُنْشِدُ", "", "Words"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرِ الحَالَ", items: [["عَادَ المُسَافِرُ ___", ["سَالِمًا", "سَالِمٌ"], 0, ""], ["رَجَعَتِ الطَّالِبَتَانِ ___", ["ضَاحِكَتَيْنِ", "ضَاحِكَتَانِ"], 0, ""], ["خَرَجَ العُمَّالُ ___", ["نَشِيطِينَ", "نَشِيطُونَ"], 0, ""]] },
    { k: "irab", t: "حال أم نعت؟", cats: ["حال", "نعت"], items: [["شَرِبْتُ الشَّايَ [سَاخِنًا].", "0", ""], ["شَرِبْتُ الشَّايَ [السَّاخِنَ].", "1", ""], ["رَأَيْتُ طِفْلًا [بَاكِيًا].", "1", "Indefinite owner → naʿt."], ["رَأَيْتُ الطِّفْلَ [بَاكِيًا].", "0", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The ḥāl answers “how?”.", true, ""], ["The ḥāl agrees with its owner in case.", false, "Always naṣb."]] }
  ],
  drills: [["جَلَسَ الطَّالِبُ ___", ["مُنْتَبِهًا", "مُنْتَبِهٌ"], 0, ""], ["The ḥāl is usually…", ["indefinite", "definite"], 0, ""], ["Sentence ḥāl linked by…", ["وَ + pronoun", "فـ"], 0, ""]],
  comp: [["Who arrived first?", ["Said", "Ahmad", "nobody"], 0, 0], ["How did the racers go home?", ["tired and happy", "sad", "angry"], 0, 0]],
  cheat: `<h3>الحال</h3><p class="ar">جَاءَ الطِّفْلُ ضَاحِكًا · جَاءَ وَهُوَ يَضْحَكُ · جَاءَ يَضْحَكُ · رَأَيْتُ الهِلَالَ بَيْنَ السَّحَابِ</p><p>Naṣb, usually indefinite, agrees in gender/number. <span class="ar">المَاءَ البَارِدَ</span> naʿt vs <span class="ar">المَاءَ بَارِدًا</span> ḥāl.</p>`,
  mistakes: [["جَاءَ الطِّفْلُ ضَاحِكٌ", "جَاءَ الطِّفْلُ ضَاحِكًا", "Ḥāl is manṣūb."]],
  tips: [{ t: "How?", b: `Describe how people around you are doing things: <span class="ar">يَعْمَلُ أَبِي مُبْتَسِمًا، تَقْرَأُ أُخْتِي صَامِتَةً</span>.` }]
});
