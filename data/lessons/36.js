// الدرس ٣٦ — إعراب جمع المؤنث السالم (PDF pp. 176–179)
COURSE.add({
  n: 36, pages: [176, 179], method: true,
  summary: "The sound feminine plural (ـَاتٌ) is marfūʿ with ḍamma and majrūr with kasra as usual — but in naṣb it also takes a kasra, not a fatḥa: رَأَيْتُ الطَّالِبَاتِ، كَافَأْتُ الفَائِزَاتِ.",
  objectives: ["know the naṣb of the sound feminine plural is kasra", "parse: منصوب وعلامة نصبه الكسرة لأنه جمع مؤنث سالم", "avoid the common mistake رأيت الطالباتَ"],

  lesson: [
    { id: "signs", t: "Kasra does double duty", ar: "علامات إعرابه", pos: "case endings", pages: "176–177",
      widget: "transform",
      wd: { title: "Three cases", sets: [{ base: ["نَجَحَتِ [[الطَّالِبَاتُ]]", "The (female) students passed."], baseLabel: "rafʿ: ḍamma", ops: [["naṣb: KASRA", "كَافَأَ المُدِيرُ [[الطَّالِبَاتِ]]", "The headmaster rewarded the students.", "Not fatḥa!"], ["jarr: kasra", "سَلَّمْتُ عَلَى [[الطَّالِبَاتِ]]", "I greeted the students."], ["indefinite naṣb", "رَأَيْتُ [[طَالِبَاتٍ]]", "I saw some students.", "Tanwīn of kasra, even in naṣb."]] }] },
      rule: `<p><span class="ar">جَمْعُ المُؤَنَّثِ السَّالِمُ يُرْفَعُ بِالضَّمَّةِ، وَيُنْصَبُ وَيُجَرُّ بِالكَسْرَةِ.</span></p>`,
      check: [["رَأَيْتُ ___", ["السَّيَّارَاتِ", "السَّيَّارَاتَ"], 0, "", "رَأَيْتُ السَّيَّارَاتِ"]] },

    { id: "where", t: "Watch for it after inna and as object", ar: "مواضع الخطأ", pos: "case endings", pages: "177–178",
      b: `<p>The mistake happens wherever naṣb is needed: object (<span class="ar">زَرَعْتُ شَجَرَاتٍ</span>), ism of inna (<span class="ar">إِنَّ المُمَرِّضَاتِ نَشِيطَاتٌ</span>), khabar of kāna (<span class="ar">كَانَتِ البَنَاتُ مَسْرُورَاتٍ</span>). Note: in <span class="ar">إِنَّ المُمَرِّضَاتِ نَشِيطَاتٌ</span> the ism has kasra (naṣb) and the khabar ḍamma (rafʿ).</p>`,
      check: [["كَانَتِ الحُجُرَاتُ ___", ["نَظِيفَاتٍ", "نَظِيفَاتٌ", "نَظِيفَاتَ"], 0, "", "كَانَتِ الحُجُرَاتُ نَظِيفَاتٍ"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings",
      b: `<div class="rule"><span class="ar">الطَّالِبَاتِ: مَفْعُولٌ بِهِ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الكَسْرَةُ نِيَابَةً عَنِ الفَتْحَةِ لِأَنَّهُ جَمْعُ مُؤَنَّثٍ سَالِمٌ.</span></div>` }
  ],

  scenes: [{ h: "حَفْلُ التَّخَرُّجِ", en: "Graduation", pic: "🎓", lines: [
    ["", "حَضَرَتِ الطَّالِبَاتُ الحَفْلَ مُبَكِّرَاتٍ.", "The students came to the ceremony early."],
    ["", "هَنَّأَتِ المُعَلِّمَاتُ الخِرِّيجَاتِ.", "The teachers congratulated the graduates."],
    ["", "وَزَّعَتِ المُدِيرَةُ الشَّهَادَاتِ عَلَى الفَائِزَاتِ.", "The headmistress handed out the certificates to the winners."],
    ["", "إِنَّ الأُمَّهَاتِ فَرِحَاتٌ بِبَنَاتِهِنَّ.", "The mothers are delighted with their daughters."]],
    note: "Kasra in naṣb: مُبَكِّرَاتٍ (ḥāl)، الخِرِّيجَاتِ، الشَّهَادَاتِ، الأُمَّهَاتِ (ism of inna)." }],

  vocab: [["خِرِّيجَةٌ", "graduate (f)", "n.f", "🎓", "", "خِرِّيجَاتٌ", "Words"], ["شَهَادَةٌ", "certificate", "n.f", "📜", "", "شَهَادَاتٌ", "Words"], ["حَفْلٌ", "ceremony, party", "n.m", "🎉", "", "حَفَلَاتٌ", "Words"], ["هَنَّأَ", "to congratulate", "v.", "", "يُهَنِّئُ", "", "Words"], ["وَزَّعَ", "to distribute", "v.", "", "يُوَزِّعُ", "", "Words"], ["مُدِيرَةٌ", "headmistress", "n.f", "👩‍💼", "", "مُدِيرَاتٌ", "Words"]],

  exercises: [
    { k: "shakl", t: "اضْبِطْ · Vowel the plural", marks: ["ُ", "َ", "ِ"], items: ["نَجَحَتِ الطَّالِبَات{ُ}", "كَافَأْتُ الطَّالِبَات{ِ}", "إِنَّ المُمَرِّضَات{ِ} نَشِيطَاتٌ", "سَلَّمْتُ عَلَى المُعَلِّمَات{ِ}", "قَرَأْتُ القِصَّة{َ}"] },
    { k: "mcq", t: "اِخْتَرْ", items: [["أَصْلَحَ العَامِلُ ___", ["السَّيَّارَاتِ", "السَّيَّارَاتَ"], 0, ""], ["Sign of naṣb in the sound fem. plural:", ["الكسرة", "الفتحة"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["رَأَيْتُ البَنَاتَ is correct.", false, "البناتِ"], ["The sound fem. plural is marfūʿ with ḍamma.", true, ""]] }
  ],
  drills: [["زَرَعْنَا ___", ["شَجَرَاتٍ", "شَجَرَاتًا"], 0, ""], ["إِنَّ ___ مُفِيدَةٌ", ["الرِّحْلَاتِ", "الرِّحْلَاتُ"], 0, ""], ["Naṣb sign:", ["الكسرة نيابة عن الفتحة", "الفتحة"], 0, ""]],
  comp: [["Who handed out the certificates?", ["the headmistress", "the teachers", "the mothers"], 0, 0]],
  cheat: `<h3>إعراب جمع المؤنث السالم</h3><div class="rule"><span class="ar">يُرْفَعُ بِالضَّمَّةِ، وَيُنْصَبُ وَيُجَرُّ بِالكَسْرَةِ.</span></div><p class="ar">جَاءَتِ البَنَاتُ · رَأَيْتُ البَنَاتِ · سَلَّمْتُ عَلَى البَنَاتِ</p>`,
  mistakes: [["رَأَيْتُ الطَّالِبَاتَ", "رَأَيْتُ الطَّالِبَاتِ", "Kasra in naṣb."], ["زَرَعْتُ شَجَرَاتًا", "زَرَعْتُ شَجَرَاتٍ", "Tanwīn of kasra."]],
  tips: [{ t: "One exception to remember", b: `This is the only place where kasra stands for naṣb on a noun. Mark it in your notebook with a star.` }]
});
