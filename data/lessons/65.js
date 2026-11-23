// الدرس ٦٥ — اسم المفعول (PDF pp. 329–332)
COURSE.add({
  n: 65, pages: [329, 332], method: true,
  summary: "The passive participle (اسم المفعول) names the one the action is done to. From three-letter verbs: مَفْعُول (كَتَبَ ← مَكْتُوب، قَالَ ← مَقُول، بَاعَ ← مَبِيع، رَمَى ← مَرْمِيّ، دَعَا ← مَدْعُوّ). From longer verbs: like the active participle but with fatḥa before the last letter (مُكْرَم، مُسْتَخْرَج).",
  objectives: ["form مَفْعُول from three-letter verbs", "handle hollow and defective verbs: مَقُول، مَبِيع، مَدْعُوّ، مَرْمِيّ", "form it from longer verbs with fatḥa: مُكْرَم", "tell مُكْرِم (who honours) from مُكْرَم (honoured)"],
  lesson: [
    { id: "three", t: "مَفْعُول", ar: "اسم المفعول من الثلاثي", pos: "parts of speech", pages: "329–331",
      widget: "table",
      wd: { title: "مَفْعُول", head: ["verb", "passive participle", "meaning"], rows: [["كَتَبَ", "مَكْتُوب", "written; a letter"], ["فَتَحَ", "مَفْتُوح", "open"], ["قَالَ", "مَقُول", "said"], ["بَاعَ", "مَبِيع", "sold"], ["دَعَا", "مَدْعُ[[وّ]]", "invited"], ["رَمَى", "مَرْمِ[[يّ]]", "thrown"]] },
      rule: `<p><span class="ar">اسْمُ المَفْعُولِ: اسْمٌ مُشْتَقٌّ يَدُلُّ عَلَى مَنْ وَقَعَ عَلَيْهِ الفِعْلُ. يُصَاغُ مِنَ الثُّلَاثِيِّ عَلَى وَزْنِ «مَفْعُول»، وَمِنْ غَيْرِهِ عَلَى وَزْنِ اسْمِ الفَاعِلِ مَعَ فَتْحِ مَا قَبْلَ الآخِرِ.</span></p>` },
    { id: "pair", t: "Doer or done-to? One vowel decides", ar: "الفرق بين اسم الفاعل واسم المفعول", pos: "parts of speech", pages: "331–332",
      widget: "sorter",
      wd: { title: "Active or passive participle?", bins: [["اسم فاعل", "does"], ["اسم مفعول", "is done to"]], items: [["مُكْرِم", 0, "honouring"], ["مُكْرَم", 1, "honoured"], ["مُعَلِّم", 0, "teacher"], ["مُعَلَّم", 1, "taught"], ["كَاتِب", 0, ""], ["مَكْتُوب", 1, ""], ["مُسْتَخْدِم", 0, "user"], ["مُسْتَخْدَم", 1, "used"]] },
      check: [["“The guest is honoured”:", ["الضَّيْفُ مُكْرَمٌ", "الضَّيْفُ مُكْرِمٌ"], 0, "", "الضَّيْفُ مُكْرَمٌ"]] }
  ],
  scenes: [{ h: "رِسَالَةٌ", en: "A letter", pic: "✉️", lines: [["", "وَصَلَتْنِي رِسَالَةٌ مَكْتُوبَةٌ بِخَطٍّ جَمِيلٍ.", "I received a letter written in beautiful handwriting."], ["", "فِيهَا: أَنْتَ مَدْعُوٌّ إِلَى حَفْلِ زِفَافِ أَخِي.", "It said: you're invited to my brother's wedding."], ["", "كَانَ البَابُ مَفْتُوحًا، وَالضُّيُوفُ مُكْرَمِينَ.", "The door was open and the guests honoured."], ["", "وَكَانَ الطَّعَامُ مَصْنُوعًا فِي البَيْتِ.", "And the food was homemade."]]}],
  vocab: [["اسْمُ المَفْعُولِ", "passive participle", "n.m", "", "", "", "Grammar"], ["مَكْتُوبٌ", "written; letter", "adj.", "✍️", "", "مَكَاتِيبُ", "Participles"], ["مَدْعُوٌّ", "invited", "adj.", "💌", "", "", "Participles"], ["مَصْنُوعٌ", "made", "adj.", "🛠️", "", "", "Participles"], ["مُكْرَمٌ", "honoured", "adj.", "", "", "", "Participles"], ["زِفَافٌ", "wedding", "n.m", "💒", "", "", "Words"], ["خَطٌّ", "handwriting; line", "n.m", "✒️", "", "خُطُوطٌ", "Words"]],
  exercises: [
    { k: "gap", t: "صُغِ اسْمَ المَفْعُولِ", items: [["شَرِبَ ← ___", "مَشْرُوب|مشروب"], ["صَانَ ← ___", "مَصُون|مصون"], ["رَجَا ← ___", "مَرْجُوّ|مرجو"], ["أَرْسَلَ ← ___", "مُرْسَل|مرسل"], ["اسْتَعْمَلَ ← ___", "مُسْتَعْمَل|مستعمل"]] },
    { k: "mcq", t: "اِخْتَرْ", items: [["“The library is closed”:", ["المَكْتَبَةُ مُغْلَقَةٌ", "المَكْتَبَةُ مُغْلِقَةٌ"], 0, ""], ["“The inviter” vs “the invited”:", ["الدَّاعِي / المَدْعُوّ", "المَدْعُوّ / الدَّاعِي"], 0, ""]] }
  ],
  drills: [["Passive participle of قَرَأَ:", ["مَقْرُوء", "قَارِئ"], 0, ""], ["Of بَاعَ:", ["مَبِيع", "مَبْيُوع"], 0, ""], ["Of أَنْتَجَ:", ["مُنْتَج", "مُنْتِج"], 0, ""]],
  comp: [["Where was the speaker invited?", ["a wedding", "a birthday", "a graduation"], 0, 0]],
  cheat: `<h3>اسم المفعول</h3><p>3-letter: <span class="ar">مَفْعُول — مَكْتُوب، مَقُول، مَبِيع، مَدْعُوّ، مَرْمِيّ</span> · longer: <span class="ar">مُـ + fatḥa: مُكْرَم، مُسْتَخْدَم</span></p>`,
  mistakes: [["مَبْيُوع", "مَبِيع", "Hollow verbs contract."]],
  tips: [{ t: "Signs around you", b: `Shop signs use these: <span class="ar">مَفْتُوح، مُغْلَق، مَمْنُوع التَّدْخِين</span>.` }]
});
