// الدرس ٤١ — النكرة والمعرفة (PDF pp. 195–196)
COURSE.add({
  n: 41, pages: [195, 196], method: true,
  summary: "An indefinite noun (نكرة) refers to any one of its kind — كِتَابٌ (a book); a definite noun (معرفة) refers to a specific one — الكِتَابُ، مُحَمَّدٌ، هُوَ. The book lists the kinds of definite nouns: pronouns, proper names, demonstratives, relatives, nouns with al-, and nouns in iḍāfa with a definite noun.",
  objectives: ["tell نكرة from معرفة", "name the six kinds of definite nouns", "use definiteness to choose naʿt or khabar"],
  lesson: [
    { id: "two", t: "Any one, or a known one", ar: "النكرة والمعرفة", pos: "parts of speech", pages: "195",
      b: `<p><span class="ar">رَأَيْتُ طَائِرًا</span> — I saw <i>a</i> bird (any bird): <b>nakira</b>. <span class="ar">رَأَيْتُ الطَّائِرَ</span> — I saw <i>the</i> bird (one we both know): <b>maʿrifa</b>. A simple test: if a noun can take <span class="ar">الـ</span> and becomes more specific, it was nakira.</p>`,
      rule: `<p><span class="ar">النَّكِرَةُ: اسْمٌ يَدُلُّ عَلَى شَيْءٍ غَيْرِ مُعَيَّنٍ. المَعْرِفَةُ: اسْمٌ يَدُلُّ عَلَى شَيْءٍ مُعَيَّنٍ، وَأَنْوَاعُهَا: الضَّمِيرُ، وَالعَلَمُ، وَاسْمُ الإِشَارَةِ، وَالاسْمُ المَوْصُولُ، وَالمُعَرَّفُ بِأَلْ، وَالمُضَافُ إِلَى مَعْرِفَةٍ.</span></p>` },
    { id: "kinds", t: "Six kinds of definite noun", ar: "أنواع المعرفة", pos: "parts of speech", pages: "195–196",
      widget: "sorter",
      wd: { title: "Which kind of maʿrifa?", bins: [["ضمير", "pronoun"], ["علم", "proper name"], ["اسم إشارة", "demonstrative"], ["اسم موصول", "relative"], ["معرف بأل", "with al-"], ["مضاف إلى معرفة", "iḍāfa"]], items: [["هُوَ", 0, ""], ["القَاهِرَةُ", 1, "a proper name (with al- as part of it)"], ["هَذَا", 2, ""], ["الَّذِي", 3, ""], ["القَلَمُ", 4, ""], ["كِتَابُ عَلِيٍّ", 5, ""], ["أَنْتُمْ", 0, ""], ["خَالِدٌ", 1, ""]] },
      tip: `Lessons 42–46 take each kind in turn.`,
      check: [["Which is nakira?", ["بَيْتٌ", "بَيْتِي", "البَيْتُ"], 0, "", false]] }
  ],
  scenes: [{ h: "طَائِرٌ وَالطَّائِرُ", en: "A bird and the bird", pic: "🐦", lines: [["", "رَأَيْتُ طَائِرًا عَلَى شَجَرَةٍ.", "I saw a bird on a tree."], ["", "كَانَ الطَّائِرُ صَغِيرًا، وَالشَّجَرَةُ عَالِيَةً.", "The bird was small and the tree tall."], ["", "هَذَا الطَّائِرُ يَأْتِي كُلَّ صَبَاحٍ.", "This bird comes every morning."], ["", "سَمَّاهُ أَخِي «شَادِي».", "My brother named it “Shadi”."]], note: "First mention: nakira (طَائِرًا، شَجَرَةٍ); second mention: maʿrifa (الطَّائِرُ، الشَّجَرَةُ)." }],
  vocab: [["نَكِرَةٌ", "indefinite noun", "n.f", "", "", "", "Grammar"], ["مَعْرِفَةٌ", "definite noun", "n.f", "", "", "", "Grammar"], ["مُعَيَّنٌ", "specific", "adj.", "", "", "", "Grammar"], ["سَمَّى", "to name", "v.", "", "يُسَمِّي", "", "Words"], ["طَائِرٌ", "bird", "n.m", "🐦", "", "طُيُورٌ", "Words"], ["شَجَرَةٌ", "tree", "n.f", "🌳", "", "أَشْجَارٌ", "Words"], ["سَيَّارَةٌ", "car", "n.f", "🚗", "", "سَيَّارَاتٌ", "Words"], ["بَيْتٌ", "house", "n.m", "🏠", "", "بُيُوتٌ", "Words"]],
  exercises: [
    { k: "sort", t: "نكرة أم معرفة؟", cats: ["نكرة", "معرفة"], items: [["قَلَمٌ", "0", ""], ["القَلَمُ", "1", ""], ["قَلَمِي", "1", ""], ["هَذَا", "1", ""], ["مَدِينَةٌ", "0", ""], ["مَكَّةُ", "1", ""], ["نَحْنُ", "1", ""], ["رَجُلٌ", "0", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["Proper names are definite.", true, ""], ["كِتَابُ الطَّالِبِ is nakira.", false, "Muḍāf to a maʿrifa."]] }
  ],
  drills: [["Kinds of maʿrifa:", ["six", "two"], 0, ""], ["Which is maʿrifa?", ["الَّذِي", "كِتَابٌ"], 0, ""], ["Which is nakira?", ["سَيَّارَةٌ", "سَيَّارَتُكَ"], 0, ""], ["كِتَابُ رَجُلٍ is…", ["nakira (muḍāf to a nakira)", "maʿrifa"], 0, ""]],
  comp: [["What did the brother name the bird?", ["Shadi", "Said", "Sami"], 0, 0]],
  cheat: `<h3>النكرة والمعرفة</h3><p>Maʿrifa: pronoun · proper name · demonstrative · relative · al- · muḍāf to maʿrifa. Everything else: nakira.</p>`,
  mistakes: [["رَأَيْتُ الطَّائِرَ (first mention, any bird)", "رَأَيْتُ طَائِرًا", "First mention → nakira."]],
  tips: [{ t: "First a, then the", b: `In stories, introduce things as nakira, then refer back as maʿrifa — just like English “a … the”.` }]
});
