// الدرس ٦١ — المجرد والمزيد (PDF pp. 304–308)
COURSE.add({
  n: 61, pages: [304, 308], method: true,
  summary: "A verb whose past (he-form) contains only its root letters is bare (مُجَرَّد): كَتَبَ، دَحْرَجَ. Adding letters makes it augmented (مَزِيد) and changes its meaning: كَتَبَ → كَاتَبَ (correspond), أَكْرَمَ، كَسَّرَ، تَعَلَّمَ، اسْتَغْفَرَ. Three-letter roots take one, two or three extra letters; four-letter roots one or two.",
  objectives: ["tell bare from augmented verbs", "recognise the common augmented patterns", "know the typical meaning each pattern adds"],
  lesson: [
    { id: "patterns", t: "Patterns that add meaning", ar: "أوزان المزيد", pos: "conjugation", pages: "304–307",
      b: `<table class="g"><tr><th>pattern</th><th>added</th><th>typical meaning</th><th>example</th></tr>
        <tr><td><span class="ar">أَفْعَلَ</span></td><td>1</td><td>making someone do</td><td><span class="ar">خَرَجَ ← أَخْرَجَ</span> take out</td></tr>
        <tr><td><span class="ar">فَعَّلَ</span></td><td>1</td><td>intensity, making</td><td><span class="ar">كَسَرَ ← كَسَّرَ</span> smash</td></tr>
        <tr><td><span class="ar">فَاعَلَ</span></td><td>1</td><td>doing with someone</td><td><span class="ar">كَتَبَ ← كَاتَبَ</span> correspond</td></tr>
        <tr><td><span class="ar">اِنْفَعَلَ</span></td><td>2</td><td>passive / result</td><td><span class="ar">كَسَرَ ← اِنْكَسَرَ</span> get broken</td></tr>
        <tr><td><span class="ar">اِفْتَعَلَ</span></td><td>2</td><td>reflexive</td><td><span class="ar">جَمَعَ ← اِجْتَمَعَ</span> meet</td></tr>
        <tr><td><span class="ar">تَفَعَّلَ</span></td><td>2</td><td>reflexive of فَعَّلَ</td><td><span class="ar">عَلَّمَ ← تَعَلَّمَ</span> learn</td></tr>
        <tr><td><span class="ar">تَفَاعَلَ</span></td><td>2</td><td>mutual</td><td><span class="ar">تَعَاوَنَ</span> cooperate</td></tr>
        <tr><td><span class="ar">اِسْتَفْعَلَ</span></td><td>3</td><td>asking for</td><td><span class="ar">غَفَرَ ← اِسْتَغْفَرَ</span> ask forgiveness</td></tr></table>
        <p>Four-letter roots: <span class="ar">دَحْرَجَ</span> (roll) → <span class="ar">تَدَحْرَجَ</span> (roll along).</p>`,
      rule: `<p><span class="ar">الفِعْلُ المُجَرَّدُ: مَا كَانَتْ حُرُوفُ مَاضِيهِ كُلُّهَا أَصْلِيَّةً. وَالمَزِيدُ: مَا زِيدَ فِيهِ حَرْفٌ أَوْ أَكْثَرُ عَلَى حُرُوفِهِ الأَصْلِيَّةِ.</span></p>`,
      widget: "sorter",
      wd: { title: "Bare or augmented?", bins: [["مجرد", "bare"], ["مزيد", "augmented"]], items: [["كَتَبَ", 0, ""], ["كَاتَبَ", 1, ""], ["دَحْرَجَ", 0, "four-letter root"], ["اسْتَخْرَجَ", 1, ""], ["عَلِمَ", 0, ""], ["تَعَلَّمَ", 1, ""], ["أَكْرَمَ", 1, ""], ["جَلَسَ", 0, ""]] } }
  ],
  scenes: [{ h: "فِي المَكْتَبَةِ", en: "At the library", pic: "📚", lines: [["", "اجْتَمَعَ الطُّلَّابُ فِي المَكْتَبَةِ.", "The students met in the library."], ["", "تَعَاوَنُوا عَلَى البَحْثِ، وَاسْتَخْرَجُوا المَعْلُومَاتِ.", "They cooperated on the research and extracted the information."], ["", "سَاعَدَهُمُ المُوَظَّفُ، وَأَحْضَرَ لَهُمُ الكُتُبَ.", "The librarian helped them and brought them the books."], ["", "ثُمَّ تَنَاقَشُوا وَكَتَبُوا تَقْرِيرًا.", "Then they discussed and wrote a report."]]}],
  vocab: [["مُجَرَّدٌ", "bare (verb)", "adj.", "", "", "", "Grammar"], ["مَزِيدٌ", "augmented (verb)", "adj.", "", "", "", "Grammar"], ["اجْتَمَعَ", "to meet, gather", "v.", "", "يَجْتَمِعُ", "", "Augmented verbs"], ["تَعَاوَنَ", "to cooperate", "v.", "", "يَتَعَاوَنُ", "", "Augmented verbs"], ["اسْتَخْرَجَ", "to extract", "v.", "", "يَسْتَخْرِجُ", "", "Augmented verbs"], ["تَنَاقَشَ", "to discuss", "v.", "", "يَتَنَاقَشُ", "", "Augmented verbs"], ["اسْتَغْفَرَ", "to ask forgiveness", "v.", "", "يَسْتَغْفِرُ", "", "Augmented verbs"], ["أَحْضَرَ", "to bring", "v.", "", "يُحْضِرُ", "", "Augmented verbs"], ["تَقْرِيرٌ", "report", "n.m", "📄", "", "تَقَارِيرُ", "Words"], ["بَحْثٌ", "research", "n.m", "🔍", "", "بُحُوثٌ", "Words"]],
  exercises: [
    { k: "match", t: "صِلِ الفِعْلَ بِمَعْنَاهُ", items: [["أَخْرَجَ", "to take out"], ["اِنْكَسَرَ", "to get broken"], ["كَاتَبَ", "to correspond with"], ["اسْتَغْفَرَ", "to ask forgiveness"], ["تَعَاوَنَ", "to cooperate"]] },
    { k: "mcq", t: "كَمْ حَرْفًا زِيدَ؟", items: [["أَكْرَمَ", ["1", "2", "3"], 0, ""], ["اجْتَمَعَ", ["2", "1", "3"], 0, ""], ["اسْتَقْبَلَ", ["3", "2", "1"], 0, ""]] }
  ],
  drills: [["Pattern of اسْتَخْدَمَ:", ["اسْتَفْعَلَ", "افْتَعَلَ"], 0, ""], ["Pattern meaning “asking for”:", ["اسْتَفْعَلَ", "فَاعَلَ"], 0, ""], ["Pattern meaning “mutual”:", ["تَفَاعَلَ", "أَفْعَلَ"], 0, ""], ["Is دَحْرَجَ bare?", ["yes (four-letter root)", "no"], 0, ""]],
  comp: [["What did the students write?", ["a report", "a story", "a letter"], 0, 0]],
  cheat: `<h3>المجرد والمزيد</h3><p class="ar">أَفْعَلَ · فَعَّلَ · فَاعَلَ · اِنْفَعَلَ · اِفْتَعَلَ · تَفَعَّلَ · تَفَاعَلَ · اِسْتَفْعَلَ</p>`,
  mistakes: [["دَحْرَجَ مَزِيدٌ", "دَحْرَجَ مُجَرَّدٌ رُبَاعِيٌّ", "All four letters are root letters."]],
  tips: [{ t: "One root, many verbs", b: `Take the root ع ل م: <span class="ar">عَلِمَ، عَلَّمَ، أَعْلَمَ، تَعَلَّمَ، اسْتَعْلَمَ</span> — know, teach, inform, learn, inquire.` }]
});
