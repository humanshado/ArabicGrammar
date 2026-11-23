// الدرس ٥٨ — تقسيم الفعل إلى صحيح ومعتل (PDF pp. 279–284)
COURSE.add({
  n: 58, pages: [279, 284], method: true,
  summary: "Looking at all the root letters of a verb, it is sound (صحيح) or weak (معتل). Sound verbs are: سالم (no hamza, no doubling: كَتَبَ), مهموز (with a hamza: أَخَذَ، سَأَلَ، قَرَأَ), or مضعّف (doubled: مَدَّ). Weak verbs are: مثال (weak first: وَعَدَ), أجوف (weak middle: قَالَ، بَاعَ), ناقص (weak last: دَعَا، رَمَى), or لفيف (two weak letters: وَفَى، طَوَى).",
  objectives: ["classify a verb by its three root letters", "name the sound types: سالم، مهموز، مضعف", "name the weak types: مثال، أجوف، ناقص، لفيف"],
  lesson: [
    { id: "types", t: "Sound and weak roots", ar: "الصحيح والمعتل", pos: "conjugation", pages: "279–282",
      b: `<table class="g"><tr><th>type</th><th>meaning</th><th>examples</th></tr>
        <tr><td><span class="ar">صحيح سالم</span></td><td>no weak letter, hamza or doubling</td><td><span class="ar">كَتَبَ، جَلَسَ، فَهِمَ</span></td></tr>
        <tr><td><span class="ar">صحيح مهموز</span></td><td>a root letter is hamza</td><td><span class="ar">أَخَذَ، سَأَلَ، قَرَأَ</span></td></tr>
        <tr><td><span class="ar">صحيح مضعّف</span></td><td>2nd and 3rd letters the same</td><td><span class="ar">مَدَّ، شَدَّ، عَدَّ</span></td></tr>
        <tr><td><span class="ar">معتل مثال</span></td><td>weak first letter</td><td><span class="ar">وَعَدَ، وَصَلَ، يَبِسَ</span></td></tr>
        <tr><td><span class="ar">معتل أجوف</span></td><td>weak middle letter</td><td><span class="ar">قَالَ، بَاعَ، نَامَ</span></td></tr>
        <tr><td><span class="ar">معتل ناقص</span></td><td>weak last letter</td><td><span class="ar">دَعَا، رَمَى، بَقِيَ</span></td></tr>
        <tr><td><span class="ar">معتل لفيف</span></td><td>two weak letters</td><td><span class="ar">وَفَى، وَقَى، طَوَى، شَوَى</span></td></tr></table>`,
      rule: `<p><span class="ar">الفِعْلُ الصَّحِيحُ مَا خَلَتْ حُرُوفُهُ الأَصْلِيَّةُ مِنْ أَحْرُفِ العِلَّةِ، وَهُوَ سَالِمٌ وَمَهْمُوزٌ وَمُضَعَّفٌ. وَالمُعْتَلُّ مَا كَانَ أَحَدُ حُرُوفِهِ الأَصْلِيَّةِ حَرْفَ عِلَّةٍ، وَهُوَ مِثَالٌ وَأَجْوَفُ وَنَاقِصٌ وَلَفِيفٌ.</span></p>`,
      widget: "sorter",
      wd: { title: "Classify the verb", bins: [["سالم", ""], ["مهموز", ""], ["مضعف", ""], ["مثال", ""], ["أجوف", ""], ["ناقص", ""], ["لفيف", ""]], items: [["ذَهَبَ", 0, ""], ["أَكَلَ", 1, ""], ["رَدَّ", 2, ""], ["وَجَدَ", 3, ""], ["صَامَ", 4, ""], ["سَعَى", 5, ""], ["وَعَى", 6, ""], ["بَدَأَ", 1, ""], ["طَارَ", 4, ""], ["وَقَفَ", 3, ""]] } },
    { id: "middle", t: "The alif in the middle", ar: "أصل الألف", pos: "spelling", pages: "282–284",
      b: `<p>The alif of a <span class="ar">أجوف</span> verb hides a wāw or a yāʾ, which the present reveals: <span class="ar">قَالَ يَقُولُ</span> (wāw), <span class="ar">بَاعَ يَبِيعُ</span> (yāʾ), <span class="ar">نَامَ يَنَامُ</span> (wāw: نَوْم). Lesson 60 uses this when attaching pronouns: <span class="ar">قُلْتُ، بِعْتُ، نِمْتُ</span>.</p>`,
      check: [["قَالَ is…", ["أجوف", "ناقص"], 0, "", false]] }
  ],
  scenes: [{ h: "فِي السُّوقِ", en: "At the market", pic: "🛍️", lines: [["", "وَصَلَ أَبِي إِلَى السُّوقِ صَبَاحًا.", "My father reached the market in the morning."], ["", "سَأَلَ البَائِعَ عَنِ الثَّمَنِ، فَقَالَ: عَشَرَةٌ.", "He asked the seller the price, and he said: ten."], ["", "أَخَذَ أَبِي الفَاكِهَةَ، وَعَدَّ النُّقُودَ.", "My father took the fruit and counted the money."], ["", "ثُمَّ مَشَى إِلَى البَيْتِ، وَوَفَى بِوَعْدِهِ لَنَا.", "Then he walked home and kept his promise to us."]], note: "وَصَلَ (مثال), سَأَلَ، أَخَذَ (مهموز), قَالَ (أجوف), عَدَّ (مضعف), مَشَى (ناقص), وَفَى (لفيف)." }],
  vocab: [["سَالِمٌ", "sound (no special letter)", "adj.", "", "", "", "Verb types"], ["مَهْمُوزٌ", "containing hamza", "adj.", "", "", "", "Verb types"], ["مُضَعَّفٌ", "doubled", "adj.", "", "", "", "Verb types"], ["مِثَالٌ", "weak first letter", "n.m", "", "", "", "Verb types"], ["أَجْوَفُ", "weak middle letter", "adj.", "", "", "", "Verb types"], ["نَاقِصٌ", "weak last letter", "adj.", "", "", "", "Verb types"], ["لَفِيفٌ", "two weak letters", "adj.", "", "", "", "Verb types"], ["وَفَى", "to keep (a promise)", "v.", "", "يَفِي", "", "Words"], ["ثَمَنٌ", "price", "n.m", "💲", "", "أَثْمَانٌ", "Words"], ["نُقُودٌ", "money", "n.f", "💵", "", "", "Words"]],
  exercises: [
    { k: "sort", t: "صَنِّفْ", cats: ["صحيح", "معتل"], items: [["سَأَلَ", "0", "مهموز"], ["وَعَدَ", "1", "مثال"], ["شَدَّ", "0", "مضعف"], ["بَاعَ", "1", "أجوف"], ["كَتَبَ", "0", "سالم"], ["رَمَى", "1", "ناقص"]] },
    { k: "mcq", t: "اِخْتَرِ النَّوْعَ", items: [["قَرَأَ", ["مهموز", "ناقص"], 0, ""], ["يَبِسَ", ["مثال", "أجوف"], 0, ""], ["طَوَى", ["لفيف", "ناقص"], 0, ""], ["مَدَّ", ["مضعف", "سالم"], 0, ""]] }
  ],
  drills: [["أجوف means…", ["weak middle letter", "weak first letter"], 0, ""], ["مثال means…", ["weak first letter", "doubled"], 0, ""], ["نَامَ is…", ["أجوف", "ناقص"], 0, ""], ["سَأَلَ is…", ["مهموز", "سالم"], 0, ""]],
  comp: [["What did the father count?", ["the money", "the fruit", "the people"], 0, 0]],
  cheat: `<h3>الصحيح والمعتل</h3><p>Sound: <span class="ar">سالم (كتب) · مهموز (أخذ، سأل، قرأ) · مضعف (مدّ)</span><br>Weak: <span class="ar">مثال (وعد) · أجوف (قال، باع) · ناقص (دعا، رمى) · لفيف (وفى، طوى)</span></p>`,
  mistakes: [["قَالَ صَحِيحٌ", "قَالَ مُعْتَلٌّ أَجْوَفُ", "Its middle alif is a weak letter (from و)."]],
  tips: [{ t: "Find the root", b: `To classify, first find the three root letters: drop prefixes and suffixes, look at the present and the maṣdar.` }]
});
