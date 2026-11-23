// الدرس ٤٥ — الاسم الموصول (PDF pp. 217–221)
COURSE.add({
  n: 45, pages: [217, 221], method: true,
  summary: "Relative nouns (الأسماء الموصولة) — الَّذِي، الَّتِي، اللَّذَانِ، اللَّتَانِ، الَّذِينَ، اللَّاتِي / اللَّوَاتِي، plus مَنْ and مَا — join a sentence (the صِلَة) to a noun, like English “who, which, that”. The ṣila must contain a pronoun (العائد) referring back.",
  objectives: ["choose الذي، التي، اللذان، اللتان، الذين، اللاتي by gender and number", "use مَنْ (whoever) and مَا (whatever)", "build the relative clause (صلة) with its returning pronoun", "know that the duals inflect: اللذان / اللذين"],

  lesson: [
    { id: "forms", t: "Who, which, that", ar: "الأسماء الموصولة الخاصة", pos: "parts of speech", pages: "217–219",
      widget: "table",
      wd: { title: "Relative nouns", head: ["", "masculine", "feminine"], rows: [["singular", "الَّذِي", "الَّتِي"], ["dual (rafʿ)", "اللَّذَانِ", "اللَّتَانِ"], ["dual (naṣb/jarr)", "اللَّذَيْنِ", "اللَّتَيْنِ"], ["plural", "الَّذِينَ", "اللَّاتِي / اللَّوَاتِي"]] },
      ex: [["جَاءَ الطَّالِبُ الَّذِي نَجَحَ.", "The student who passed came."], ["قَرَأْتُ القِصَّةَ الَّتِي اشْتَرَيْتُهَا.", "I read the story that I bought."], ["أُحِبُّ الَّذِينَ يَصْدُقُونَ.", "I love those who tell the truth."]],
      rule: `<p><span class="ar">الاسْمُ المَوْصُولُ: اسْمٌ يَدُلُّ عَلَى مُعَيَّنٍ بِوَاسِطَةِ جُمْلَةٍ تُذْكَرُ بَعْدَهُ تُسَمَّى الصِّلَةَ، وَلَا بُدَّ فِيهَا مِنْ ضَمِيرٍ يَعُودُ عَلَى المَوْصُولِ.</span></p>`,
      check: [["البِنْتُ ___ رَسَمَتِ الصُّورَةَ", ["الَّتِي", "الَّذِي", "اللَّاتِي"], 0, "", "البِنْتُ الَّتِي رَسَمَتِ الصُّورَةَ"]] },

    { id: "sila", t: "The ṣila and the returning pronoun", ar: "الصلة والعائد", pos: "sentence structure", pages: "219–220",
      b: `<p>The relative noun is followed by a sentence (<span class="ar">صِلَة</span>) that contains a pronoun pointing back to it (<span class="ar">العَائِد</span>): <span class="ar">القِصَّةُ الَّتِي قَرَأْتُ<b>هَا</b></span> (the story that I read <i>it</i>). English drops it; Arabic keeps it, except when it is the hidden doer: <span class="ar">الرَّجُلُ الَّذِي جَاءَ</span>.</p>
        <p>Important: <span class="ar">الَّذِي</span> etc. follow only a <b>definite</b> noun. After an indefinite noun, no relative is used: <span class="ar">رَأَيْتُ رَجُلًا يَقْرَأُ</span> (I saw a man reading / who was reading).</p>`,
      check: [["“A girl who sings”:", ["بِنْتٌ تُغَنِّي", "بِنْتٌ الَّتِي تُغَنِّي"], 0, "", "بِنْتٌ تُغَنِّي"]] },

    { id: "man-ma", t: "مَنْ and مَا", ar: "الموصول المشترك", pos: "parts of speech", pages: "220–221",
      b: `<p><span class="ar">مَنْ</span> = “the one who” (people), <span class="ar">مَا</span> = “what, that which” (things), for any gender or number: <span class="ar">نَجَحَ مَنِ اجْتَهَدَ</span> (whoever worked hard succeeded), <span class="ar">اِفْعَلْ مَا يَنْفَعُكَ</span> (do what benefits you).</p>`,
      check: [["“I understood what you said”:", ["فَهِمْتُ مَا قُلْتَ", "فَهِمْتُ مَنْ قُلْتَ"], 0, "", "فَهِمْتُ مَا قُلْتَ"]] }
  ],
  scenes: [{ h: "الصُّورَةُ الَّتِي رَسَمْتُهَا", en: "The picture I drew", pic: "🎨", lines: [["هِنْدٌ", "هَذِهِ هِيَ الصُّورَةُ الَّتِي رَسَمْتُهَا.", "This is the picture that I drew."], ["أُمُّهَا", "مَنِ الوَلَدَانِ اللَّذَانِ فِيهَا؟", "Who are the two boys in it?"], ["هِنْدٌ", "هُمَا أَخَوَايَ اللَّذَانِ يَلْعَبَانِ بِالكُرَةِ.", "They're my two brothers who play ball."], ["أُمُّهَا", "وَالبَنَاتُ اللَّاتِي يَجْلِسْنَ تَحْتَ الشَّجَرَةِ؟", "And the girls sitting under the tree?"], ["هِنْدٌ", "هُنَّ صَدِيقَاتِي. أُحِبُّ مَنْ يُحِبُّنِي!", "They're my friends. I love those who love me!"]]}],
  vocab: [["اسْمٌ مَوْصُولٌ", "relative noun", "n.m", "", "", "", "Grammar"], ["صِلَةٌ", "relative clause", "n.f", "", "", "", "Grammar"], ["عَائِدٌ", "returning pronoun", "n.m", "", "", "", "Grammar"], ["الَّذِي", "who, which (m)", "n.", "", "", "", "Relatives"], ["الَّتِي", "who, which (f)", "n.", "", "", "", "Relatives"], ["الَّذِينَ", "who (m pl)", "n.", "", "", "", "Relatives"], ["اللَّاتِي", "who (f pl)", "n.", "", "", "", "Relatives"], ["غَنَّى", "to sing", "v.", "", "يُغَنِّي", "", "Words"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرِ المَوْصُولَ", items: [["الطُّلَّابُ ___ نَجَحُوا", ["الَّذِينَ", "الَّذِي", "اللَّاتِي"], 0, ""], ["الشَّجَرَتَانِ ___ زَرَعْتُهُمَا", ["اللَّتَانِ", "اللَّذَانِ", "الَّتِي"], 0, ""], ["رَأَيْتُ الوَلَدَيْنِ ___ فَازَا", ["اللَّذَيْنِ", "اللَّذَانِ"], 0, "Follows a manṣūb dual."], ["الأُمَّهَاتُ ___ حَضَرْنَ", ["اللَّاتِي", "الَّذِينَ"], 0, ""], ["سَاعِدْ ___ يَحْتَاجُ إِلَيْكَ", ["مَنْ", "مَا"], 0, ""]] },
    { k: "tr", t: "تَرْجِمْ", items: [["The book that I read is useful.", "الكتاب الذي قرأته مفيد|الكِتَابُ الَّذِي قَرَأْتُهُ مُفِيدٌ"], ["The girl who won is my sister.", "البنت التي فازت أختي|البِنْتُ الَّتِي فَازَتْ أُخْتِي"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["الَّذِي follows an indefinite noun.", false, ""], ["The ṣila needs a returning pronoun.", true, ""], ["مَنْ is for people.", true, ""]] }
  ],
  drills: [["Feminine plural relative:", ["اللَّاتِي", "الَّذِينَ"], 0, ""], ["Masculine dual (rafʿ):", ["اللَّذَانِ", "اللَّذَيْنِ"], 0, ""], ["مَا is for…", ["things", "people"], 0, ""], ["“the house that we bought”:", ["البَيْتُ الَّذِي اشْتَرَيْنَاهُ", "البَيْتُ الَّتِي اشْتَرَيْنَا"], 0, ""]],
  comp: [["Who are the two boys in the picture?", ["Hind's brothers", "her friends", "her cousins"], 0, 0]],
  cheat: `<h3>الاسم الموصول</h3><p class="ar">الَّذِي · الَّتِي · اللَّذَانِ/اللَّذَيْنِ · اللَّتَانِ/اللَّتَيْنِ · الَّذِينَ · اللَّاتِي/اللَّوَاتِي · مَنْ · مَا</p><p>Ṣila + returning pronoun: <span class="ar">القِصَّةُ الَّتِي قَرَأْتُهَا</span>. After an indefinite noun: no relative.</p>`,
  mistakes: [["رَجُلٌ الَّذِي جَاءَ", "رَجُلٌ جَاءَ / الرَّجُلُ الَّذِي جَاءَ", "Relatives follow definite nouns only."], ["القِصَّةُ الَّتِي قَرَأْتُ (in writing)", "القِصَّةُ الَّتِي قَرَأْتُهَا", "Keep the returning pronoun."]],
  tips: [{ t: "Describe people", b: `Describe classmates with relatives: <span class="ar">الطَّالِبُ الَّذِي يَجْلِسُ أَمَامِي، الطَّالِبَةُ الَّتِي تَرْسُمُ جَيِّدًا…</span>` }]
});
