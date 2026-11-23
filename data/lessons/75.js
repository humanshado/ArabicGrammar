// الدرس ٧٥ — البدل (PDF pp. 406–410)
COURSE.add({
  n: 75, pages: [406, 410], method: true,
  summary: "Apposition (البدل) is a follower that is the real target of the statement, placed after a word that introduces it, with no conjunction between: جَاءَ الخَلِيفَةُ عُمَرُ. It follows in case. Three kinds: whole for whole (أَخُوكَ عَلِيٌّ), part of the whole (أَكَلْتُ الرَّغِيفَ نِصْفَهُ), and inclusion (أَعْجَبَنِي الطَّالِبُ أَدَبُهُ).",
  objectives: ["recognise the badal and make it follow in case", "use the three kinds: whole, part (with pronoun), inclusion (with pronoun)", "know that a noun after a demonstrative is a badal: هَذَا الكِتَابُ"],
  lesson: [
    { id: "kinds", t: "Three kinds of badal", ar: "أنواع البدل", pos: "agreement", pages: "406–409",
      b: `<table class="g"><tr><th>kind</th><th>example</th><th>meaning</th></tr>
        <tr><td><span class="ar">بدل كل من كل</span> (whole)</td><td><span class="ar">زَارَنَا أَخُوكَ عَلِيٌّ</span></td><td>your brother Ali visited us</td></tr>
        <tr><td><span class="ar">بدل بعض من كل</span> (part, + pronoun)</td><td><span class="ar">قَرَأْتُ الكِتَابَ نِصْفَهُ</span></td><td>I read half the book</td></tr>
        <tr><td><span class="ar">بدل اشتمال</span> (quality, + pronoun)</td><td><span class="ar">أَعْجَبَنِي الطَّالِبُ أَدَبُهُ</span></td><td>I admired the student's manners</td></tr></table>`,
      rule: `<p><span class="ar">البَدَلُ: تَابِعٌ مَقْصُودٌ بِالحُكْمِ بِلَا وَاسِطَةٍ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ، وَيَتْبَعُ المُبْدَلَ مِنْهُ فِي إِعْرَابِهِ.</span></p>`,
      widget: "transform",
      wd: { title: "Badal follows the case", sets: [{ base: ["جَاءَ الخَلِيفَةُ [[عُمَرُ]]", "The caliph Umar came."], baseLabel: "rafʿ", ops: [["naṣb", "رَأَيْتُ الخَلِيفَةَ [[عُمَرَ]]", "I saw the caliph Umar."], ["jarr", "سَلَّمْتُ عَلَى الخَلِيفَةِ [[عُمَرَ]]", "I greeted the caliph Umar.", "عمر is a diptote: fatḥa in jarr."]] }] },
      check: [["أَكَلْتُ التُّفَّاحَةَ ___ (half of it)", ["نِصْفَهَا", "نِصْفُهَا"], 0, "", "أَكَلْتُ التُّفَّاحَةَ نِصْفَهَا"]] },
    { id: "demo", t: "After demonstratives", ar: "البدل بعد اسم الإشارة", pos: "sentence structure", pages: "409–410",
      b: `<p>In <span class="ar">هَذَا الكِتَابُ مُفِيدٌ</span>, <span class="ar">الكِتَابُ</span> is a badal (or ʿaṭf bayān) of <span class="ar">هَذَا</span>, following its position: <span class="ar">قَرَأْتُ هَذَا الكِتَابَ، نَظَرْتُ فِي هَذَا الكِتَابِ</span>.</p>` }
  ],
  scenes: [{ h: "مِنَ التَّارِيخِ", en: "From history", pic: "📜", lines: [["", "كَانَ الخَلِيفَةُ عُمَرُ عَادِلًا.", "The caliph Umar was just."], ["", "أَحَبَّ النَّاسُ الخَلِيفَةَ عَدْلَهُ.", "People loved the caliph for his justice."], ["", "وَقَرَأْتُ كِتَابَ التَّارِيخِ أَكْثَرَهُ.", "And I read most of the history book."]]}],
  vocab: [["بَدَلٌ", "apposition", "n.m", "", "", "", "Grammar"], ["خَلِيفَةٌ", "caliph", "n.m", "👑", "", "خُلَفَاءُ", "Words"], ["عَادِلٌ", "just", "adj.", "⚖️", "", "", "Words"], ["عَدْلٌ", "justice", "n.m", "⚖️", "", "", "Words"], ["نِصْفٌ", "half", "n.m", "½", "", "أَنْصَافٌ", "Words"], ["أَدَبٌ", "manners", "n.m", "🙇", "", "", "Words"], ["تَارِيخٌ", "history", "n.m", "📜", "", "", "Words"]],
  exercises: [
    { k: "sort", t: "نَوْعُ البَدَلِ", cats: ["كل من كل", "بعض من كل", "اشتمال"], items: [["جَاءَ صَدِيقِي خَالِدٌ", "0", ""], ["شَرِبْتُ المَاءَ ثُلُثَهُ", "1", ""], ["أَعْجَبَنِي البَيْتُ نَظَافَتُهُ", "2", ""], ["سَافَرَ عَمِّي أَحْمَدُ", "0", ""]] },
    { k: "mcq", t: "اِخْتَرْ", items: [["قَابَلْتُ أَخَاكَ ___", ["سَعِيدًا", "سَعِيدٌ"], 0, ""], ["مَرَرْتُ بِالمُعَلِّمِ ___", ["مُحَمَّدٍ", "مُحَمَّدًا"], 0, ""]] }
  ],
  drills: [["The badal follows in…", ["case", "nothing"], 0, ""], ["Part-of-whole badal needs…", ["a pronoun", "a conjunction"], 0, ""]],
  comp: [["What did people love about the caliph?", ["his justice", "his wealth", "his poetry"], 0, 0]],
  cheat: `<h3>البدل</h3><p class="ar">جَاءَ أَخُوكَ عَلِيٌّ · قَرَأْتُ الكِتَابَ نِصْفَهُ · أَعْجَبَنِي الطَّالِبُ أَدَبُهُ</p><p>Follows in case; part and inclusion need a pronoun.</p>`,
  mistakes: [["رَأَيْتُ أَخَاكَ عَلِيٌّ", "رَأَيْتُ أَخَاكَ عَلِيًّا", "Follows in case."]],
  tips: [{ t: "Titles and names", b: `Title + name is the commonest badal: <span class="ar">الرَّئِيسُ…، الشَّاعِرُ المُتَنَبِّي، المَدِينَةُ القَاهِرَةُ</span>.` }]
});
