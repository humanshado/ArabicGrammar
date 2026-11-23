// الدرس ٤٦ — اسم الإشارة (PDF pp. 222–226)
COURSE.add({
  n: 46, pages: [222, 226], method: true,
  summary: "Demonstratives (أسماء الإشارة) point: هَذَا / هَذِهِ (this), ذَلِكَ / تِلْكَ (that), هَذَانِ / هَاتَانِ (these two), هَؤُلَاءِ / أُولَئِكَ (these / those). They are fixed except the duals, which inflect like duals. A noun with al- after them is a badal: هَذَا الكِتَابُ (this book).",
  objectives: ["choose the right demonstrative for near/far, gender and number", "inflect the dual demonstratives: هَذَانِ / هَذَيْنِ", "tell هَذَا كِتَابٌ (a sentence) from هَذَا الكِتَابُ (a phrase)"],

  lesson: [
    { id: "forms", t: "Near and far", ar: "أسماء الإشارة", pos: "parts of speech", pages: "222–224",
      widget: "table",
      wd: { title: "Demonstratives", head: ["", "near (this)", "far (that)"], rows: [["m. singular", "هَذَا", "ذَلِكَ"], ["f. singular", "هَذِهِ", "تِلْكَ"], ["m. dual", "هَذَانِ / هَذَيْنِ", "ذَانِكَ"], ["f. dual", "هَاتَانِ / هَاتَيْنِ", "تَانِكَ"], ["plural (m & f)", "هَؤُلَاءِ", "أُولَئِكَ"]] },
      rule: `<p><span class="ar">اسْمُ الإِشَارَةِ: اسْمٌ يُعَيِّنُ مُسَمَّاهُ بِوَاسِطَةِ إِشَارَةٍ حِسِّيَّةٍ. وَهُوَ مَبْنِيٌّ إِلَّا المُثَنَّى فَيُعْرَبُ إِعْرَابَ المُثَنَّى.</span></p>`,
      tip: `<span class="ar">هَؤُلَاءِ</span> and <span class="ar">أُولَئِكَ</span> are for <b>people</b>. For plurals of things use the feminine singular: <span class="ar">هَذِهِ كُتُبٌ</span> (these are books), <span class="ar">تِلْكَ الأَشْجَارُ</span>.`,
      check: [["“These are students (f)”:", ["هَؤُلَاءِ طَالِبَاتٌ", "هَذِهِ طَالِبَاتٌ", "هَؤُلَاءِ طَالِبَاتٍ"], 0, "", "هَؤُلَاءِ طَالِبَاتٌ"]] },
    { id: "phrase", t: "Sentence or phrase?", ar: "هذا كتاب / هذا الكتاب", pos: "sentence structure", pages: "224–226",
      b: `<p><span class="ar">هَذَا كِتَابٌ</span> = <i>this is a book</i> (sentence: mubtadaʾ + khabar). <span class="ar">هَذَا الكِتَابُ</span> = <i>this book …</i> (phrase; الكتابُ is a badal); complete it: <span class="ar">هَذَا الكِتَابُ مُفِيدٌ</span>. To say “this is <i>the</i> book”, add a pronoun: <span class="ar">هَذَا هُوَ الكِتَابُ</span>.</p>`,
      widget: "meter",
      wd: { title: "Sentence or phrase?", items: [["هَذَا بَيْتٌ", true, "This is a house."], ["هَذَا البَيْتُ", false, "This house … (what about it?)"], ["هَذَا البَيْتُ كَبِيرٌ", true, "This house is big."], ["تِلْكَ مَدْرَسَةٌ", true, "That is a school."], ["تِلْكَ المَدْرَسَةُ", false, "That school …"]] } }
  ],
  scenes: [{ h: "فِي المَتْحَفِ", en: "In the museum", pic: "🏛️", lines: [["المُرْشِدُ", "هَذَا تِمْثَالٌ قَدِيمٌ، وَتِلْكَ لَوْحَةٌ نَادِرَةٌ.", "This is an ancient statue, and that is a rare painting."], ["الزَّائِرُ", "وَمَا هَذَانِ الحَجَرَانِ؟", "And what are these two stones?"], ["المُرْشِدُ", "هَذَانِ حَجَرَانِ مِنْ عَهْدِ الفَرَاعِنَةِ.", "These are two stones from the time of the Pharaohs."], ["الزَّائِرُ", "وَمَنْ هَؤُلَاءِ الرِّجَالُ فِي الصُّورَةِ؟", "And who are these men in the picture?"], ["المُرْشِدُ", "أُولَئِكَ عُلَمَاءُ اكْتَشَفُوا هَذِهِ الآثَارَ.", "Those are scholars who discovered these antiquities."]]}],
  vocab: [["اسْمُ إِشَارَةٍ", "demonstrative", "n.m", "", "", "", "Grammar"], ["ذَلِكَ", "that (m)", "n.", "", "", "", "Demonstratives"], ["تِلْكَ", "that (f)", "n.", "", "", "", "Demonstratives"], ["هَاتَانِ", "these two (f)", "n.", "", "", "", "Demonstratives"], ["أُولَئِكَ", "those", "n.", "", "", "", "Demonstratives"], ["مَتْحَفٌ", "museum", "n.m", "🏛️", "", "مَتَاحِفُ", "Museum"], ["تِمْثَالٌ", "statue", "n.m", "🗿", "", "تَمَاثِيلُ", "Museum"], ["لَوْحَةٌ", "painting", "n.f", "🖼️", "", "لَوْحَاتٌ", "Museum"], ["آثَارٌ", "antiquities", "n.f", "🏺", "", "", "Museum"], ["مُرْشِدٌ", "guide", "n.m", "🧑‍🏫", "", "مُرْشِدُونَ", "Museum"], ["اكْتَشَفَ", "to discover", "v.", "", "يَكْتَشِفُ", "", "Museum"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرِ اسْمَ الإِشَارَةِ", items: [["___ حَدِيقَةٌ (near)", ["هَذِهِ", "هَذَا"], 0, ""], ["___ جَبَلٌ عَالٍ (far)", ["ذَلِكَ", "تِلْكَ"], 0, ""], ["رَأَيْتُ ___ الوَلَدَيْنِ", ["هَذَيْنِ", "هَذَانِ"], 0, "Dual inflects."], ["___ لَاعِبُونَ", ["هَؤُلَاءِ", "هَذِهِ"], 0, ""], ["___ سَيَّارَاتٌ", ["هَذِهِ", "هَؤُلَاءِ"], 0, "Things → f. singular."]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["هَذَا الكِتَابُ is a full sentence.", false, ""], ["هَذَانِ becomes هَذَيْنِ in naṣb.", true, ""], ["هَؤُلَاءِ is used for things.", false, ""]] }
  ],
  drills: [["“That (f)”:", ["تِلْكَ", "ذَلِكَ"], 0, ""], ["“These two (f)”:", ["هَاتَانِ", "هَذَانِ"], 0, ""], ["Which demonstratives inflect?", ["the duals", "all"], 0, ""], ["“This is the book”:", ["هَذَا هُوَ الكِتَابُ", "هَذَا الكِتَابُ"], 0, ""]],
  comp: [["What is the rare object?", ["a painting", "a statue", "a stone"], 0, 0]],
  cheat: `<h3>اسم الإشارة</h3><p class="ar">هَذَا · هَذِهِ · هَذَانِ/هَذَيْنِ · هَاتَانِ/هَاتَيْنِ · هَؤُلَاءِ — ذَلِكَ · تِلْكَ · أُولَئِكَ</p><p><span class="ar">هَذَا كِتَابٌ</span> sentence · <span class="ar">هَذَا الكِتَابُ</span> phrase.</p>`,
  mistakes: [["هَؤُلَاءِ كُتُبٌ", "هَذِهِ كُتُبٌ", "Things → هذه."], ["رَأَيْتُ هَذَانِ", "رَأَيْتُ هَذَيْنِ", "Dual demonstrative in naṣb."]],
  tips: [{ t: "Point and say", b: `Point at things near and far and name them: <span class="ar">هَذَا قَلَمٌ، تِلْكَ نَافِذَةٌ، هَؤُلَاءِ أَصْدِقَائِي</span>.` }]
});
