// الدرس ٥٧ — مواضع كسر همزة إنّ (PDF pp. 276–278)
COURSE.add({
  n: 57, pages: [276, 278], method: true,
  summary: "إِنَّ (with kasra) is used where its clause cannot be a single noun: at the very start of a sentence (إِنَّ العِلْمَ نُورٌ), after قَالَ and its forms (قَالَ: إِنِّي مُسَافِرٌ), after an oath (وَاللهِ إِنَّكَ صَادِقٌ), after أَلَا (أَلَا إِنَّ…), and at the start of a relative clause or a ḥāl sentence.",
  objectives: ["write إِنَّ at the start of a sentence", "write إِنَّ after قال (reported speech)", "write إِنَّ after an oath and after أَلَا", "choose correctly between إِنَّ and أَنَّ"],
  lesson: [
    { id: "where", t: "Where إِنَّ takes kasra", ar: "مواضع الكسر", pos: "spelling", pages: "276–277",
      b: `<table class="g"><tr><th>position</th><th>example</th></tr>
        <tr><td>start of the sentence</td><td><span class="ar">إِنَّ الصَّبْرَ مِفْتَاحُ الفَرَجِ</span></td></tr>
        <tr><td>after قَالَ (direct speech)</td><td><span class="ar">قَالَ المُعَلِّمُ: إِنَّ الامْتِحَانَ غَدًا</span></td></tr>
        <tr><td>after an oath</td><td><span class="ar">وَاللهِ إِنَّ الصِّدْقَ لَمُنْجٍ</span></td></tr>
        <tr><td>after أَلَا</td><td><span class="ar">أَلَا إِنَّ النَّظَافَةَ مِنَ الإِيمَانِ</span></td></tr>
        <tr><td>start of a ṣila</td><td><span class="ar">جَاءَ الَّذِي إِنَّهُ كَرِيمٌ</span></td></tr></table>`,
      rule: `<p><span class="ar">تُكْسَرُ هَمْزَةُ «إِنَّ» إِذَا لَمْ يَصِحَّ تَأْوِيلُهَا مَعَ مَا بَعْدَهَا بِمَصْدَرٍ: فِي أَوَّلِ الكَلَامِ، وَبَعْدَ القَوْلِ، وَبَعْدَ القَسَمِ، وَبَعْدَ «أَلَا»، وَفِي أَوَّلِ جُمْلَةِ الصِّلَةِ.</span></p>`,
      widget: "sorter",
      wd: { title: "إِنَّ or أَنَّ?", bins: [["إِنَّ", "kasra"], ["أَنَّ", "fatḥa"]], items: [["___ العِلْمَ نُورٌ", 0, "start"], ["قَالَ: ___ي جَائِعٌ", 0, "after قال"], ["عَلِمْتُ ___ هُ جَائِعٌ", 1, "object"], ["وَاللهِ ___ كَ صَادِقٌ", 0, "oath"], ["يَسُرُّنِي ___ كَ هُنَا", 1, "doer"], ["أَلَا ___ الصِّدْقَ نَجَاةٌ", 0, "after ألا"]] },
      check: [["قَالَ الطَّبِيبُ: ___ المَرِيضَ تَحَسَّنَ", ["إِنَّ", "أَنَّ"], 0, "", "قَالَ الطَّبِيبُ: إِنَّ المَرِيضَ تَحَسَّنَ"]] }
  ],
  scenes: [{ h: "حِكْمَةُ الجَدِّ", en: "Grandfather's wisdom", pic: "👴", lines: [["الجَدُّ", "إِنَّ الصَّبْرَ مِفْتَاحُ الفَرَجِ.", "Patience is the key to relief."], ["الحَفِيدُ", "وَمَاذَا قَالَ أَبُوكَ لَكَ يَا جَدِّي؟", "And what did your father tell you, grandfather?"], ["الجَدُّ", "قَالَ: إِنَّ العِلْمَ أَغْلَى مِنَ المَالِ.", "He said: knowledge is more precious than wealth."], ["الحَفِيدُ", "وَاللهِ إِنَّهُ لَقَوْلٌ صَادِقٌ!", "By God, that's a true saying!"]]}],
  vocab: [["فَرَجٌ", "relief", "n.m", "😌", "", "", "Words"], ["أَغْلَى", "more precious", "adj.", "💎", "", "", "Words"], ["قَسَمٌ", "oath", "n.m", "✋", "", "", "Words"], ["أَلَا", "indeed, lo!", "part.", "", "", "", "Words"], ["تَحَسَّنَ", "to improve", "v.", "", "يَتَحَسَّنُ", "", "Words"]],
  exercises: [
    { k: "mcq", t: "إِنَّ أَمْ أَنَّ؟", items: [["___ النَّظَافَةَ وَاجِبَةٌ", ["إِنَّ", "أَنَّ"], 0, ""], ["قُلْتُ لَهُ: ___ الوَقْتَ قَصِيرٌ", ["إِنَّ", "أَنَّ"], 0, ""], ["عَرَفْتُ ___ الوَقْتَ قَصِيرٌ", ["أَنَّ", "إِنَّ"], 0, ""], ["وَاللهِ ___ ي لَصَادِقٌ", ["إِنَّ", "أَنَّ"], 0, ""]] }
  ],
  drills: [["After قَالَ:", ["إِنَّ", "أَنَّ"], 0, ""], ["After عَلِمْتُ:", ["أَنَّ", "إِنَّ"], 0, ""], ["At the start of a sentence:", ["إِنَّ", "أَنَّ"], 0, ""]],
  comp: [["What is the key to relief?", ["patience", "money", "sleep"], 0, 0]],
  cheat: `<h3>كسر همزة إنّ</h3><p>Start · after <span class="ar">قَالَ</span> · after an oath · after <span class="ar">أَلَا</span> · start of a ṣila → <span class="ar">إِنَّ</span>. Where a maṣdar fits → <span class="ar">أَنَّ</span>.</p>`,
  mistakes: [["قَالَ: أَنَّ الجَوَّ جَمِيلٌ", "قَالَ: إِنَّ الجَوَّ جَمِيلٌ", "After قال → kasra."]],
  tips: [{ t: "One question", b: `Ask: can I replace it with a maṣdar? Yes → أَنَّ. No → إِنَّ.` }]
});
