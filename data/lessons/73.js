// الدرس ٧٣ — العطف (PDF pp. 397–400)
COURSE.add({
  n: 73, pages: [397, 400], method: true,
  summary: "Conjunction (العطف): a word joined to another by a conjunction follows it in case. The conjunctions: وَ (and), فَـ (and then, at once), ثُمَّ (and later), أَوْ (or), أَمْ (or, in questions), بَلْ (rather), لَا (not), لَكِنْ (but). نَضِجَ التِّينُ وَالعِنَبُ، أَكَلْتُ التِّينَ وَالعِنَبَ.",
  objectives: ["join words with وَ، فَـ، ثُمَّ، أَوْ، أَمْ، بَلْ، لَا، لَكِنْ", "know their meanings", "make the joined word follow in case"],
  lesson: [
    { id: "list", t: "Eight conjunctions", ar: "حروف العطف", pos: "agreement", pages: "397–399",
      b: `<table class="g"><tr><th>conjunction</th><th>meaning</th><th>example</th></tr>
        <tr><td><span class="ar">وَ</span></td><td>and (no order)</td><td><span class="ar">حَضَرَ عَلِيٌّ وَخَالِدٌ</span></td></tr>
        <tr><td><span class="ar">فَـ</span></td><td>and then (immediately)</td><td><span class="ar">دَخَلَ المُعَلِّمُ فَالتَّلَامِيذُ</span></td></tr>
        <tr><td><span class="ar">ثُمَّ</span></td><td>and later</td><td><span class="ar">جَاءَ الشِّتَاءُ ثُمَّ الرَّبِيعُ</span></td></tr>
        <tr><td><span class="ar">أَوْ</span></td><td>or (choice)</td><td><span class="ar">خُذْ تُفَّاحَةً أَوْ بُرْتُقَالَةً</span></td></tr>
        <tr><td><span class="ar">أَمْ</span></td><td>or (after أَ in a question)</td><td><span class="ar">أَعَلِيٌّ حَضَرَ أَمْ خَالِدٌ؟</span></td></tr>
        <tr><td><span class="ar">بَلْ</span></td><td>rather, but (after negation)</td><td><span class="ar">مَا جَاءَ عَلِيٌّ بَلْ خَالِدٌ</span></td></tr>
        <tr><td><span class="ar">لَا</span></td><td>not (after a positive)</td><td><span class="ar">جَاءَ عَلِيٌّ لَا خَالِدٌ</span></td></tr>
        <tr><td><span class="ar">لَكِنْ</span></td><td>but (after negation)</td><td><span class="ar">مَا رَأَيْتُ عَلِيًّا لَكِنْ خَالِدًا</span></td></tr></table>`,
      rule: `<p><span class="ar">العَطْفُ: تَابِعٌ يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ حَرْفٌ مِنْ حُرُوفِ العَطْفِ، وَيَتْبَعُ المَعْطُوفُ المَعْطُوفَ عَلَيْهِ فِي إِعْرَابِهِ.</span></p>`,
      widget: "transform",
      wd: { title: "The joined word follows", sets: [{ base: ["نَضِجَ التِّينُ وَ[[العِنَبُ]]", "The figs and grapes ripened."], baseLabel: "rafʿ", ops: [["naṣb", "أَكَلْتُ التِّينَ وَ[[العِنَبَ]]", "I ate figs and grapes."], ["jarr", "فَرِحْتُ بِالتِّينِ وَ[[العِنَبِ]]", "I was glad of the figs and grapes."]] }] },
      check: [["اشْتَرَيْتُ قَلَمًا وَ___", ["كِتَابًا", "كِتَابٌ"], 0, "", "اشْتَرَيْتُ قَلَمًا وَكِتَابًا"]] }
  ],
  scenes: [{ h: "يَوْمٌ مُزْدَحِمٌ", en: "A busy day", pic: "📆", lines: [["", "اسْتَيْقَظْتُ فَصَلَّيْتُ، ثُمَّ أَفْطَرْتُ.", "I woke up and prayed straight away, then had breakfast."], ["", "أَكَلْتُ خُبْزًا وَجُبْنًا وَزَيْتُونًا.", "I ate bread, cheese and olives."], ["", "هَلْ أَذْهَبُ بِالحَافِلَةِ أَمْ بِالقِطَارِ؟", "Shall I go by bus or by train?"], ["", "لَمْ أَرْكَبِ الحَافِلَةَ بَلِ القِطَارَ.", "I didn't take the bus, but the train."]]}],
  vocab: [["عَطْفٌ", "conjunction", "n.m", "", "", "", "Grammar"], ["مَعْطُوفٌ", "joined word", "n.m", "", "", "", "Grammar"], ["بَلْ", "rather", "part.", "", "", "", "Conjunctions"], ["أَمْ", "or (question)", "part.", "", "", "", "Conjunctions"], ["تِينٌ", "figs", "n.m", "🫐", "", "", "Food"], ["زَيْتُونٌ", "olives", "n.m", "🫒", "", "", "Food"], ["أَفْطَرَ", "to have breakfast", "v.", "", "يُفْطِرُ", "", "Words"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرْ حَرْفَ العَطْفِ", items: [["أَقَهْوَةً تُرِيدُ ___ شَايًا؟", ["أَمْ", "أَوْ"], 0, "Question with أ."], ["مَا رَأَيْتُ القَمَرَ ___ النُّجُومَ", ["بَلْ", "ثُمَّ"], 0, ""], ["وُلِدَ الجَدُّ ___ الأَبُ ___ الابْنُ (in order, with time between)", ["ثُمَّ … ثُمَّ", "أَوْ … أَوْ"], 0, ""]] },
    { k: "shakl", t: "اضْبِطِ المَعْطُوفَ", items: ["جَاءَ عَلِيٌّ وَخَالِد{ٌ}", "رَأَيْتُ عَلِيًّا وَخَالِد{ً}ا", "سَلَّمْتُ عَلَى عَلِيٍّ وَخَالِد{ٍ}"] }
  ],
  drills: [["ثُمَّ means…", ["and later", "and immediately"], 0, ""], ["فَـ means…", ["and immediately", "or"], 0, ""], ["The joined word follows in…", ["case", "nothing"], 0, ""]],
  comp: [["How did the speaker travel?", ["by train", "by bus", "by car"], 0, 0]],
  cheat: `<h3>العطف</h3><p class="ar">وَ · فَـ · ثُمَّ · أَوْ · أَمْ · بَلْ · لَا · لَكِنْ</p><p>The joined word follows in case: <span class="ar">التِّينُ وَالعِنَبُ / التِّينَ وَالعِنَبَ / التِّينِ وَالعِنَبِ</span></p>`,
  mistakes: [["رَأَيْتُ عَلِيًّا وَخَالِدٌ", "رَأَيْتُ عَلِيًّا وَخَالِدًا", "Follows in case."]],
  tips: [{ t: "Order of events", b: `Use <span class="ar">فَـ</span> and <span class="ar">ثُمَّ</span> to narrate your morning precisely.` }]
});
