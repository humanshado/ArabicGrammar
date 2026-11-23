// الدرس ٥٢ — المبتدأ والخبر وتطابقهما (PDF pp. 253–256)
COURSE.add({
  n: 52, pages: [253, 256], method: true,
  summary: "Part 3 returns to the nominal sentence: when the khabar is a describing word, it agrees with the mubtadaʾ in gender and in number — singular, dual or plural: الطَّالِبُ مُجْتَهِدٌ، الطَّالِبَانِ مُجْتَهِدَانِ، الطُّلَّابُ مُجْتَهِدُونَ. A plural of things takes a feminine singular khabar: الأَشْجَارُ مُثْمِرَةٌ.",
  objectives: ["make the khabar agree with the mubtadaʾ in gender and number", "use dual and plural khabars: مُجْتَهِدَانِ، مُجْتَهِدُونَ، مُجْتَهِدَاتٌ", "use a feminine singular khabar for plurals of things"],
  lesson: [
    { id: "agree", t: "Agreement in gender and number", ar: "مطابقة الخبر للمبتدأ", pos: "agreement", pages: "253–255",
      widget: "builder",
      wd: { title: "Make the khabar agree", slots: [
        { label: "mubtadaʾ", opts: [["الطَّالِبُ", "the student", "ms"], ["الطَّالِبَةُ", "the student (f)", "fs"], ["الطَّالِبَانِ", "the two students", "md"], ["الطَّالِبَتَانِ", "the two students (f)", "fd"], ["الطُّلَّابُ", "the students", "mp"], ["الطَّالِبَاتُ", "the students (f)", "fp"], ["الكُتُبُ", "the books", "tp"]] },
        { label: "khabar", opts: [["مُفِيد", "useful"], ["حَاضِر", "present"]] }
      ], make: (s) => {
        const b = s[1][0], k = s[0][2];
        const f = { ms: b + "[[ٌ]]", fs: b + "[[َةٌ]]", md: b + "[[َانِ]]", fd: b + "[[َتَانِ]]", mp: b + "[[ُونَ]]", fp: b + "[[َاتٌ]]", tp: b + "[[َةٌ]]" }[k];
        const note = { ms: "masculine singular", fs: "feminine: ـَةٌ", md: "dual: ـَانِ", fd: "feminine dual: ـَتَانِ", mp: "masculine plural (people): ـُونَ", fp: "feminine plural: ـَاتٌ", tp: "plural of things → feminine singular: ـَةٌ" }[k];
        return { ar: s[0][0] + " " + f, en: s[0][1].replace(/^./, (c) => c.toUpperCase()) + (k[1] === "s" ? " is " : " are ") + s[1][1] + ".", note };
      } },
      rule: `<p><span class="ar">يَجِبُ أَنْ يُطَابِقَ الخَبَرُ المُبْتَدَأَ فِي الإِفْرَادِ وَالتَّثْنِيَةِ وَالجَمْعِ، وَفِي التَّذْكِيرِ وَالتَّأْنِيثِ.</span></p>`,
      check: [["البَحْرَانِ ___", ["عَمِيقَانِ", "عَمِيقٌ", "عَمِيقُونَ"], 0, "", "البَحْرَانِ عَمِيقَانِ"], ["الأَزْهَارُ ___", ["جَمِيلَةٌ", "جَمِيلُونَ"], 0, "Plural of things.", "الأَزْهَارُ جَمِيلَةٌ"]] }
  ],
  scenes: [{ h: "فِي الفَصْلِ", en: "In the classroom", pic: "🏫", lines: [["", "الفَصْلُ وَاسِعٌ، وَالنَّوَافِذُ كَبِيرَةٌ.", "The classroom is spacious and the windows are big."], ["", "المُعَلِّمَانِ حَاضِرَانِ، وَالتَّلَامِيذُ مُنْتَبِهُونَ.", "The two teachers are present and the pupils attentive."], ["", "البَنَاتُ نَشِيطَاتٌ، وَالكُتُبُ مَفْتُوحَةٌ.", "The girls are active and the books are open."]]}],
  vocab: [["مُطَابَقَةٌ", "agreement", "n.f", "", "", "", "Grammar"], ["مُنْتَبِهٌ", "attentive", "adj.", "👀", "", "", "Words"], ["عَمِيقٌ", "deep", "adj.", "🌊", "", "", "Words"], ["نَافِذَةٌ", "window", "n.f", "🪟", "", "نَوَافِذُ", "Words"], ["فَصْلٌ", "classroom", "n.m", "🏫", "", "فُصُولٌ", "Words"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرِ الخَبَرَ", items: [["المُهَنْدِسُونَ ___", ["مَاهِرُونَ", "مَاهِرٌ"], 0, ""], ["الأُخْتَانِ ___", ["صَغِيرَتَانِ", "صَغِيرَانِ"], 0, ""], ["السَّيَّارَاتُ ___", ["سَرِيعَةٌ", "سَرِيعُونَ"], 0, ""], ["المُمَرِّضَاتُ ___", ["رَحِيمَاتٌ", "رَحِيمَةٌ"], 0, "people → plural is better"]] },
    { k: "gap", t: "أَكْمِلْ", items: [["الوَلَدَانِ ___ (مؤدب)", "مُؤَدَّبَانِ|مؤدبان"], ["العُمَّالُ ___ (نشيط)", "نَشِيطُونَ|نشيطون"], ["الشَّجَرَتَانِ ___ (عالٍ)", "عَالِيَتَانِ|عاليتان"]] }
  ],
  drills: [["الطَّالِبَتَانِ ___", ["مُجْتَهِدَتَانِ", "مُجْتَهِدَانِ"], 0, ""], ["الطُّرُقُ ___", ["طَوِيلَةٌ", "طَوِيلُونَ"], 0, ""], ["The khabar agrees in…", ["gender and number", "case only"], 0, ""]],
  comp: [["How are the pupils?", ["attentive", "tired", "absent"], 0, 0]],
  cheat: `<h3>تطابق المبتدأ والخبر</h3><p class="ar">الطَّالِبُ مُجْتَهِدٌ · الطَّالِبَةُ مُجْتَهِدَةٌ · الطَّالِبَانِ مُجْتَهِدَانِ · الطُّلَّابُ مُجْتَهِدُونَ · الطَّالِبَاتُ مُجْتَهِدَاتٌ · الكُتُبُ مُفِيدَةٌ</p>`,
  mistakes: [["الطُّلَّابُ مُجْتَهِدٌ", "الطُّلَّابُ مُجْتَهِدُونَ", "Agreement in number."], ["الأَشْجَارُ عَالُونَ", "الأَشْجَارُ عَالِيَةٌ", "Things → feminine singular."]],
  tips: [{ t: "Describe groups", b: `Describe your family members in singular, dual and plural sentences.` }]
});
