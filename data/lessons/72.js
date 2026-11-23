// الدرس ٧٢ — التوكيد (PDF pp. 387–396)
COURSE.add({
  n: 72, pages: [387, 396], method: true,
  summary: "Emphasis (التوكيد) is a follower that removes doubt. Verbal emphasis repeats the word (جَاءَ جَاءَ عَلِيٌّ). Semantic emphasis uses نَفْس، عَيْن (the very, himself), كِلَا / كِلْتَا (both), كُلّ، جَمِيع (all), with a pronoun back to the emphasised noun, and follows it in case: جَاءَ الأَمِيرُ نَفْسُهُ، رَأَيْتُ الأَمِيرَ نَفْسَهُ.",
  objectives: ["use verbal emphasis by repetition", "use نفس، عين، كلا، كلتا، كل، جميع with a pronoun", "make the emphasis follow its noun in case", "inflect كِلَا / كِلْتَا with a pronoun like a dual"],
  lesson: [
    { id: "two", t: "Repetition and emphatic words", ar: "التوكيد اللفظي والمعنوي", pos: "agreement", pages: "387–391",
      b: `<p><b>Verbal</b>: repeat a word or sentence: <span class="ar">أَنْتَ أَنْتَ المُجْتَهِدُ</span>, <span class="ar">نَعَمْ نَعَمْ</span>.</p>
        <p><b>Semantic</b>: <span class="ar">نَفْس / عَيْن</span> = himself / the very; <span class="ar">كِلَا</span> (m) / <span class="ar">كِلْتَا</span> (f) = both; <span class="ar">كُلّ / جَمِيع</span> = all. Each carries a pronoun matching the noun: <span class="ar">قَابَلْتُ المُدِيرَ نَفْسَهُ، جَاءَ الطَّالِبَانِ كِلَاهُمَا، نَجَحَ الطُّلَّابُ كُلُّهُمْ</span>.</p>`,
      widget: "transform",
      wd: { title: "Emphasis follows the case", sets: [{ base: ["جَاءَ الأَمِيرُ [[نَفْسُهُ]]", "The prince himself came."], baseLabel: "rafʿ", ops: [["naṣb", "رَأَيْتُ الأَمِيرَ [[نَفْسَهُ]]", "I saw the prince himself."], ["jarr", "سَلَّمْتُ عَلَى الأَمِيرِ [[نَفْسِهِ]]", "I greeted the prince himself."]] }, { base: ["جَاءَ الطَّالِبَانِ [[كِلَاهُمَا]]", "Both students came."], baseLabel: "rafʿ: alif", ops: [["naṣb", "رَأَيْتُ الطَّالِبَيْنِ [[كِلَيْهِمَا]]", "I saw both students.", "With a pronoun, كلا inflects like a dual."], ["jarr", "مَرَرْتُ بِالطَّالِبَيْنِ [[كِلَيْهِمَا]]", "I passed both students."]] }] },
      rule: `<p><span class="ar">التَّوْكِيدُ تَابِعٌ يُذْكَرُ لِرَفْعِ الشَّكِّ عَنِ المُؤَكَّدِ، وَهُوَ لَفْظِيٌّ بِإِعَادَةِ اللَّفْظِ، وَمَعْنَوِيٌّ بِأَلْفَاظٍ: نَفْسٍ، وَعَيْنٍ، وَكِلَا، وَكِلْتَا، وَكُلٍّ، وَجَمِيعٍ، مُضَافَةً إِلَى ضَمِيرٍ يَعُودُ عَلَى المُؤَكَّدِ.</span></p>`,
      check: [["نَجَحَ الطُّلَّابُ ___", ["كُلُّهُمْ", "كُلَّهُمْ", "كُلُّهُ"], 0, "", "نَجَحَ الطُّلَّابُ كُلُّهُمْ"], ["رَأَيْتُ البِنْتَيْنِ ___", ["كِلْتَيْهِمَا", "كِلْتَاهُمَا"], 0, "", "رَأَيْتُ البِنْتَيْنِ كِلْتَيْهِمَا"]] },
    { id: "pronoun", t: "Emphasising a pronoun", ar: "توكيد الضمير", pos: "agreement", pages: "391–396",
      b: `<p>To emphasise an attached subject pronoun with <span class="ar">نَفْس</span>, first add the separate pronoun: <span class="ar">قُمْتُ أَنَا نَفْسِي بِالعَمَلِ</span> (I did the work myself), <span class="ar">حَضَرْتُمْ أَنْتُمْ أَنْفُسُكُمْ</span>. Plural <span class="ar">نَفْس → أَنْفُس</span>.</p>` }
  ],
  scenes: [{ h: "زِيَارَةُ الوَزِيرِ", en: "The minister's visit", pic: "🎩", lines: [["", "زَارَ الوَزِيرُ نَفْسُهُ مَدْرَسَتَنَا.", "The minister himself visited our school."], ["", "اسْتَقْبَلَهُ المُعَلِّمُونَ كُلُّهُمْ، وَالطُّلَّابُ جَمِيعُهُمْ.", "All the teachers and all the students welcomed him."], ["", "صَافَحَ الوَزِيرُ المُدِيرَيْنِ كِلَيْهِمَا.", "The minister shook hands with both heads."], ["", "وَقُلْتُ أَنَا نَفْسِي كَلِمَةَ التَّرْحِيبِ.", "And I myself gave the welcome speech."]]}],
  vocab: [["تَوْكِيدٌ", "emphasis", "n.m", "", "", "", "Grammar"], ["نَفْسٌ", "self", "n.f", "🪞", "", "أَنْفُسٌ", "Emphasis words"], ["عَيْنٌ", "the very (also: eye)", "n.f", "👁️", "", "أَعْيُنٌ", "Emphasis words"], ["كِلَا / كِلْتَا", "both (m / f)", "", "", "", "", "Emphasis words"], ["كُلٌّ", "all", "n.", "", "", "", "Emphasis words"], ["جَمِيعٌ", "all", "n.", "", "", "", "Emphasis words"], ["أَمِيرٌ", "prince", "n.m", "🤴", "", "أُمَرَاءُ", "Words"], ["تَرْحِيبٌ", "welcome", "n.m", "👋", "", "", "Words"]],
  exercises: [
    { k: "mcq", t: "أَكِّدْ", items: [["قَابَلْتُ المُدِيرَ ___", ["نَفْسَهُ", "نَفْسُهُ"], 0, ""], ["حَضَرَتِ الأُخْتَانِ ___", ["كِلْتَاهُمَا", "كِلَاهُمَا"], 0, ""], ["قَرَأْتُ الكِتَابَ ___", ["كُلَّهُ", "كُلُّهُ"], 0, ""], ["سَلَّمْتُ عَلَى الضُّيُوفِ ___", ["جَمِيعِهِمْ", "جَمِيعَهُمْ"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["Emphasis follows the noun in case.", true, ""], ["كِلَا with a pronoun inflects like a dual.", true, ""]] }
  ],
  drills: [["“Both girls”:", ["البِنْتَانِ كِلْتَاهُمَا", "البِنْتَانِ كِلَاهُمَا"], 0, ""], ["“The students themselves”:", ["الطُّلَّابُ أَنْفُسُهُمْ", "الطُّلَّابُ نَفْسُهُمْ"], 0, ""], ["Verbal emphasis means…", ["repeating the word", "adding نفس"], 0, ""]],
  comp: [["Who visited the school?", ["the minister himself", "the prince", "the mayor"], 0, 0]],
  cheat: `<h3>التوكيد</h3><p>Verbal: repetition. Semantic: <span class="ar">نَفْسُهُ، عَيْنُهُ، كِلَاهُمَا، كِلْتَاهُمَا، كُلُّهُمْ، جَمِيعُهُمْ</span> — follows the case: <span class="ar">رَأَيْتُ الأَمِيرَ نَفْسَهُ</span>.</p>`,
  mistakes: [["رَأَيْتُ الوَلَدَيْنِ كِلَاهُمَا", "رَأَيْتُ الوَلَدَيْنِ كِلَيْهِمَا", "Naṣb → كِلَيْهِمَا."]],
  tips: [{ t: "All of them", b: `Use <span class="ar">كُلّ</span> with pronouns: <span class="ar">أَكَلْتُ الطَّعَامَ كُلَّهُ، حَضَرَ الأَصْدِقَاءُ كُلُّهُمْ</span>.` }]
});
