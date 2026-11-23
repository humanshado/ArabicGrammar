// الدرس ٣٤ — إعراب المثنى (PDF pp. 168–171)
COURSE.add({
  n: 34, pages: [168, 171], method: true,
  summary: "The dual shows its case with letters instead of vowels: alif in rafʿ (جَاءَ الطَّالِبَانِ) and yāʾ in naṣb and jarr (رَأَيْتُ الطَّالِبَيْنِ، سَلَّمْتُ عَلَى الطَّالِبَيْنِ). Its nūn is just a replacement for tanwīn.",
  objectives: [
    "put the dual in rafʿ with ـَانِ and in naṣb/jarr with ـَيْنِ",
    "parse: مرفوع وعلامة رفعه الألف لأنه مثنى",
    "make verbs and adjectives agree with a dual"
  ],

  lesson: [
    { id: "signs", t: "Letters instead of vowels", ar: "علامات إعراب المثنى", pos: "case endings", pages: "168–169",
      widget: "transform",
      wd: { title: "The dual in three cases", sets: [{ base: ["لَعِبَ [[الوَلَدَانِ]]", "The two boys played."], baseLabel: "rafʿ: alif", ops: [["naṣb: yāʾ", "رَأَيْتُ [[الوَلَدَيْنِ]]", "I saw the two boys."], ["jarr: yāʾ", "سَلَّمْتُ عَلَى [[الوَلَدَيْنِ]]", "I greeted the two boys."]] }] },
      rule: `<p><span class="ar">المُثَنَّى يُرْفَعُ بِالأَلِفِ، وَيُنْصَبُ وَيُجَرُّ بِاليَاءِ.</span></p>`,
      check: [["كَافَأَ المُعَلِّمُ ___ (the two winners)", ["الفَائِزَيْنِ", "الفَائِزَانِ"], 0, "Object → yāʾ.", "كَافَأَ المُعَلِّمُ الفَائِزَيْنِ"]] },

    { id: "agree", t: "Agreement with the dual", ar: "مطابقة المثنى", pos: "agreement", pages: "169–170",
      b: `<p>An adjective follows the dual: <span class="ar">طَالِبَانِ مُجْتَهِدَانِ، رَأَيْتُ طَالِبَيْنِ مُجْتَهِدَيْنِ</span>. A verb <b>after</b> a dual subject shows the alif: <span class="ar">الطَّالِبَانِ نَجَحَا / يَنْجَحَانِ</span>; a verb <b>before</b> it stays singular: <span class="ar">نَجَحَ الطَّالِبَانِ</span>.</p>`,
      check: [["الوَرْدَتَانِ ___", ["جَمِيلَتَانِ", "جَمِيلَتَيْنِ", "جَمِيلَةٌ"], 0, "Khabar of a dual, rafʿ.", "الوَرْدَتَانِ جَمِيلَتَانِ"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">الوَلَدَانِ: فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الأَلِفُ لِأَنَّهُ مُثَنًّى.</span></p><p><span class="ar">الوَلَدَيْنِ: مَفْعُولٌ بِهِ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ اليَاءُ لِأَنَّهُ مُثَنًّى.</span></p></div>`,
      check: [["Sign of jarr in فِي الحَقْلَيْنِ:", ["الياء", "الكسرة"], 0, "", false]] }
  ],

  scenes: [{ h: "التَّوْأَمَانِ", en: "The twins", pic: "👯", lines: [
    ["", "فِي فَصْلِنَا تَوْأَمَانِ: سَعِيدٌ وَسَعْدٌ.", "In our class there are twins: Said and Saad."],
    ["", "التَّوْأَمَانِ مُتَشَابِهَانِ جِدًّا.", "The twins look very alike."],
    ["", "يُحِبُّ المُعَلِّمُ التَّوْأَمَيْنِ، لِأَنَّهُمَا مُؤَدَّبَانِ.", "The teacher loves the twins, because they are polite."],
    ["", "جَلَسْتُ بَيْنَ التَّوْأَمَيْنِ فِي الحَافِلَةِ.", "I sat between the twins on the bus."],
    ["", "نَجَحَ التَّوْأَمَانِ، وَأَخَذَا جَائِزَتَيْنِ.", "The twins passed and got two prizes."]],
    note: "Rafʿ ـَانِ: تَوْأَمَانِ، مُتَشَابِهَانِ، مُؤَدَّبَانِ · naṣb/jarr ـَيْنِ: التَّوْأَمَيْنِ، جَائِزَتَيْنِ." }],

  vocab: [["تَوْأَمٌ", "twin", "n.m", "👯", "dual تَوْأَمَانِ", "تَوَائِمُ", "Words"], ["مُتَشَابِهٌ", "similar", "adj.", "", "", "", "Words"], ["حَافِلَةٌ", "bus", "n.f", "🚌", "", "حَافِلَاتٌ", "Words"], ["فَصْلٌ", "class; season", "n.m", "🏫", "", "فُصُولٌ", "Words"], ["كَافَأَ", "to reward", "v.", "", "يُكَافِئُ", "", "Words"], ["فَائِزٌ", "winner", "n.m", "🏆", "", "فَائِزُونَ", "Words"]],

  exercises: [
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [["حَضَرَ ___", ["الضَّيْفَانِ", "الضَّيْفَيْنِ"], 0, ""], ["أَكْرَمْتُ ___", ["الضَّيْفَيْنِ", "الضَّيْفَانِ"], 0, ""], ["مَرَرْتُ بِـ___", ["الحَدِيقَتَيْنِ", "الحَدِيقَتَانِ"], 0, ""], ["الطَّالِبَتَانِ ___", ["نَشِيطَتَانِ", "نَشِيطَتَيْنِ"], 0, ""]] },
    { k: "irab", t: "عَلَامَةُ الإِعْرَابِ", cats: ["مرفوع بالألف", "منصوب بالياء", "مجرور بالياء"], items: [["جَاءَ [الرَّجُلَانِ].", "0", ""], ["رَأَيْتُ [الرَّجُلَيْنِ].", "1", ""], ["سَلَّمْتُ عَلَى [الرَّجُلَيْنِ].", "2", ""], ["إِنَّ [الطَّالِبَيْنِ] مُجْتَهِدَانِ.", "1", "ism of inna"], ["كَانَ الطَّالِبَانِ [مُجْتَهِدَيْنِ].", "1", "khabar of kāna"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The dual is marfūʿ with alif.", true, ""], ["رَأَيْتُ الوَلَدَانِ is correct.", false, ""]] }
  ],
  drills: [["Rafʿ sign of the dual:", ["الألف", "الضمة"], 0, ""], ["Naṣb and jarr sign:", ["الياء", "الفتحة"], 0, ""], ["كَانَ البَابَانِ ___", ["مَفْتُوحَيْنِ", "مَفْتُوحَانِ"], 0, ""], ["إِنَّ ___ جَمِيلَتَانِ", ["الوَرْدَتَيْنِ", "الوَرْدَتَانِ"], 0, ""]],
  comp: [["What are the twins' names?", ["Said and Saad", "Ali and Omar", "Hind and Salma"], 0, 0], ["Why does the teacher love them?", ["they are polite", "they are tall", "they are rich"], 0, 0]],
  cheat: `<h3>إعراب المثنى</h3><div class="rule"><span class="ar">يُرْفَعُ بِالأَلِفِ، وَيُنْصَبُ وَيُجَرُّ بِاليَاءِ.</span></div><p class="ar">جَاءَ الوَلَدَانِ · رَأَيْتُ الوَلَدَيْنِ · سَلَّمْتُ عَلَى الوَلَدَيْنِ</p>`,
  mistakes: [["إِنَّ الوَلَدَانِ مُؤَدَّبَانِ", "إِنَّ الوَلَدَيْنِ مُؤَدَّبَانِ", "Ism of inna is manṣūb: yāʾ."]],
  tips: [{ t: "Count by two", b: `Describe pairs in all three cases with the same frames as lesson 16: <span class="ar">هَذَانِ… / رَأَيْتُ… / نَظَرْتُ إِلَى…</span>` }]
});
