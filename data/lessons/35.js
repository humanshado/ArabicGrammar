// الدرس ٣٥ — إعراب جمع المذكر السالم (PDF pp. 172–175)
COURSE.add({
  n: 35, pages: [172, 175], method: true,
  summary: "The sound masculine plural shows its case with letters: wāw in rafʿ (حَضَرَ المُعَلِّمُونَ) and yāʾ in naṣb and jarr (رَأَيْتُ المُعَلِّمِينَ، سَلَّمْتُ عَلَى المُعَلِّمِينَ). Its nūn, like the dual's, replaces tanwīn.",
  objectives: ["put the sound masculine plural in rafʿ with ـُونَ and in naṣb/jarr with ـِينَ", "parse it", "make adjectives and verbs agree with it"],

  lesson: [
    { id: "signs", t: "Wāw for rafʿ, yāʾ for the rest", ar: "علامات إعرابه", pos: "case endings", pages: "172–173",
      widget: "transform",
      wd: { title: "Three cases", sets: [{ base: ["حَضَرَ [[المُعَلِّمُونَ]]", "The teachers came."], baseLabel: "rafʿ: wāw", ops: [["naṣb: yāʾ", "احْتَرَمْنَا [[المُعَلِّمِينَ]]", "We respected the teachers."], ["jarr: yāʾ", "سَلَّمْنَا عَلَى [[المُعَلِّمِينَ]]", "We greeted the teachers."]] }] },
      rule: `<p><span class="ar">جَمْعُ المُذَكَّرِ السَّالِمُ يُرْفَعُ بِالوَاوِ، وَيُنْصَبُ وَيُجَرُّ بِاليَاءِ.</span></p>`,
      warn: `Note the vowels: dual <span class="ar">ـَيْنِ</span> (fatḥa before yāʾ, kasra on nūn) vs plural <span class="ar">ـِينَ</span> (kasra before yāʾ, fatḥa on nūn): <span class="ar">المُعَلِّمَيْنِ</span> two teachers · <span class="ar">المُعَلِّمِينَ</span> teachers.`,
      check: [["كَافَأَ المُدِيرُ ___ (the hard-working ones)", ["المُجْتَهِدِينَ", "المُجْتَهِدُونَ"], 0, "", "كَافَأَ المُدِيرُ المُجْتَهِدِينَ"]] },

    { id: "agree", t: "Agreement", ar: "المطابقة", pos: "agreement", pages: "173–174",
      b: `<p>Adjective: <span class="ar">لَاعِبُونَ مَاهِرُونَ / لَاعِبِينَ مَاهِرِينَ</span>. Verb after the plural subject: <span class="ar">اللَّاعِبُونَ فَازُوا / يَفُوزُونَ</span>. Verb before: singular — <span class="ar">فَازَ اللَّاعِبُونَ</span>.</p>`,
      check: [["المُسَافِرُونَ ___", ["وَصَلُوا", "وَصَلَ"], 0, "Verb after a plural subject shows the wāw.", "المُسَافِرُونَ وَصَلُوا"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings",
      b: `<div class="rule"><span class="ar">المُعَلِّمُونَ: فَاعِلٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الوَاوُ لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٌ.</span></div>` }
  ],

  scenes: [{ h: "المُبَارَاةُ", en: "The match", pic: "⚽", lines: [
    ["", "دَخَلَ اللَّاعِبُونَ المَلْعَبَ.", "The players entered the pitch."],
    ["", "شَجَّعَ المُتَفَرِّجُونَ اللَّاعِبِينَ بِحَمَاسٍ.", "The spectators cheered the players enthusiastically."],
    ["", "كَانَ المُدَرِّبُونَ وَاقِفِينَ بِجَانِبِ المَلْعَبِ.", "The coaches were standing beside the pitch."],
    ["", "فَازَ فَرِيقُنَا، فَفَرِحَ المُشَجِّعُونَ.", "Our team won, and the fans were happy."],
    ["", "وَصَافَحَ الحُكَّامُ اللَّاعِبِينَ المُنْتَصِرِينَ.", "And the referees shook hands with the winning players."]],
    note: "Rafʿ ـُونَ: اللَّاعِبُونَ، المُتَفَرِّجُونَ، المُدَرِّبُونَ، المُشَجِّعُونَ · naṣb ـِينَ: اللَّاعِبِينَ، وَاقِفِينَ (khabar of كان)، المُنْتَصِرِينَ." }],

  vocab: [["لَاعِبٌ", "player", "n.m", "⛹️", "", "لَاعِبُونَ", "Sport"], ["مُتَفَرِّجٌ", "spectator", "n.m", "👀", "", "مُتَفَرِّجُونَ", "Sport"], ["مُشَجِّعٌ", "fan, supporter", "n.m", "📣", "", "مُشَجِّعُونَ", "Sport"], ["مَلْعَبٌ", "pitch, stadium", "n.m", "🏟️", "", "مَلَاعِبُ", "Sport"], ["حَكَمٌ", "referee", "n.m", "🧑‍⚖️", "", "حُكَّامٌ", "Sport"], ["مُبَارَاةٌ", "match", "n.f", "⚽", "", "مُبَارَيَاتٌ", "Sport"], ["شَجَّعَ", "to cheer, encourage", "v.", "", "يُشَجِّعُ", "", "Sport"], ["صَافَحَ", "to shake hands", "v.", "", "يُصَافِحُ", "", "Sport"], ["مُنْتَصِرٌ", "victorious", "adj.", "", "", "", "Sport"], ["حَمَاسٌ", "enthusiasm", "n.m", "🔥", "", "", "Sport"]],

  exercises: [
    { k: "mcq", t: "اِخْتَرْ", items: [["نَجَحَ ___", ["المُجْتَهِدُونَ", "المُجْتَهِدِينَ"], 0, ""], ["إِنَّ ___ نَشِيطُونَ", ["العَامِلِينَ", "العَامِلُونَ"], 0, ""], ["كَانَ الطُّلَّابُ ___", ["حَاضِرِينَ", "حَاضِرُونَ"], 0, ""], ["“two engineers” (object):", ["المُهَنْدِسَيْنِ", "المُهَنْدِسِينَ"], 0, ""]] },
    { k: "irab", t: "عَلَامَةُ الإِعْرَابِ", cats: ["مرفوع بالواو", "منصوب بالياء", "مجرور بالياء"], items: [["[المُسَافِرُونَ] وَصَلُوا.", "0", ""], ["اسْتَقْبَلْنَا [المُسَافِرِينَ].", "1", ""], ["تَحَدَّثْتُ مَعَ [المُسَافِرِينَ].", "2", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The sound masc. plural is marfūʿ with wāw.", true, ""], ["رَأَيْتُ المُعَلِّمُونَ is correct.", false, ""]] }
  ],
  drills: [["Rafʿ sign:", ["الواو", "الضمة"], 0, ""], ["Naṣb/jarr sign:", ["الياء", "الكسرة"], 0, ""], ["“two teachers” vs “teachers” in naṣb:", ["المُعَلِّمَيْنِ / المُعَلِّمِينَ", "المُعَلِّمِينَ / المُعَلِّمَيْنِ"], 0, ""], ["أَصْبَحَ العُمَّالُ ___", ["مَسْرُورِينَ", "مَسْرُورُونَ"], 0, ""]],
  comp: [["Who cheered the players?", ["the spectators", "the coaches", "the referees"], 0, 0], ["Did the team win?", ["yes", "no", "a draw"], 0, 0]],
  cheat: `<h3>إعراب جمع المذكر السالم</h3><div class="rule"><span class="ar">يُرْفَعُ بِالوَاوِ، وَيُنْصَبُ وَيُجَرُّ بِاليَاءِ.</span></div><p class="ar">حَضَرَ المُعَلِّمُونَ · رَأَيْتُ المُعَلِّمِينَ · سَلَّمْتُ عَلَى المُعَلِّمِينَ</p>`,
  mistakes: [["كَانَ الطُّلَّابُ حَاضِرُونَ", "كَانَ الطُّلَّابُ حَاضِرِينَ", "Khabar of kāna → naṣb → yāʾ."]],
  tips: [{ t: "-ūna / -īna", b: `Say the pairs aloud: <span class="ar">مُسْلِمُونَ / مُسْلِمِينَ، مُهَنْدِسُونَ / مُهَنْدِسِينَ</span>, then use each after <span class="ar">رَأَيْتُ</span> and <span class="ar">مَعَ</span>.` }]
});
