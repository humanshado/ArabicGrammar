// الدرس ٦٤ — اسم الفاعل (PDF pp. 324–328)
COURSE.add({
  n: 64, pages: [324, 328], method: true,
  summary: "The active participle (اسم الفاعل) names the one who does the action. From three-letter verbs it has the pattern فَاعِل (كَتَبَ ← كَاتِب، قَالَ ← قَائِل، رَمَى ← رَامٍ); from longer verbs it is the present tense with مُـ instead of the prefix and kasra before the last letter (يُكْرِمُ ← مُكْرِم، يَسْتَخْرِجُ ← مُسْتَخْرِج).",
  objectives: ["form the active participle from three-letter verbs: فاعل", "form it from longer verbs: مُـ…ـِـ…", "handle hollow (قائل) and defective (رامٍ) verbs"],
  lesson: [
    { id: "three", t: "From three-letter verbs: فَاعِل", ar: "اسم الفاعل من الثلاثي", pos: "parts of speech", pages: "324–326",
      widget: "table",
      wd: { title: "فَاعِل", head: ["verb", "participle", "meaning"], rows: [["كَتَبَ", "كَاتِب", "writer"], ["سَرَقَ", "سَارِق", "thief"], ["قَالَ", "قَا[[ئِ]]ل", "sayer (hollow → hamza)"], ["بَاعَ", "بَا[[ئِ]]ع", "seller"], ["رَمَى", "رَا[[مٍ]]", "thrower (manqūṣ: الرَّامِي)"], ["دَعَا", "دَا[[عٍ]]", "caller (الدَّاعِي)"]] },
      rule: `<p><span class="ar">اسْمُ الفَاعِلِ: اسْمٌ مُشْتَقٌّ يَدُلُّ عَلَى مَنْ قَامَ بِالفِعْلِ. يُصَاغُ مِنَ الثُّلَاثِيِّ عَلَى وَزْنِ «فَاعِل»، وَمِنْ غَيْرِهِ عَلَى وَزْنِ مُضَارِعِهِ بِإِبْدَالِ حَرْفِ المُضَارَعَةِ مِيمًا مَضْمُومَةً وَكَسْرِ مَا قَبْلَ الآخِرِ.</span></p>` },
    { id: "longer", t: "From longer verbs: مُـ", ar: "اسم الفاعل من غير الثلاثي", pos: "parts of speech", pages: "326–328",
      widget: "transform",
      wd: { title: "Present → participle", sets: [
        { base: ["يُكْرِمُ", "he honours"], baseLabel: "present", ops: [["participle", "[[مُ]]كْرِ[[م]]", "one who honours"]] },
        { base: ["يَجْتَهِدُ", "he works hard"], baseLabel: "present", ops: [["participle", "[[مُ]]جْتَهِ[[د]]", "hard-working"]] },
        { base: ["يَسْتَمِعُ", "he listens"], baseLabel: "present", ops: [["participle", "[[مُ]]سْتَمِ[[ع]]", "listener"]] },
        { base: ["يُعَلِّمُ", "he teaches"], baseLabel: "present", ops: [["participle", "[[مُ]]عَلِّ[[م]]", "teacher"]] }
      ] },
      check: [["Participle of اسْتَقْبَلَ:", ["مُسْتَقْبِل", "مُسْتَقْبَل"], 0, "Kasra before the last letter.", "مُسْتَقْبِل"]] }
  ],
  scenes: [{ h: "مَنْ هُوَ؟", en: "Who is it?", pic: "🕵️", lines: [["", "سَرَقَ رَجُلٌ مَالَ التَّاجِرِ، فَبَحَثَ الشُّرْطِيُّ عَنِ السَّارِقِ.", "A man stole the merchant's money, and the policeman searched for the thief."], ["", "قَالَ شَاهِدٌ: رَأَيْتُ رَجُلًا مُسْرِعًا يَحْمِلُ حَقِيبَةً.", "A witness said: I saw a man hurrying, carrying a bag."], ["", "وَجَدَ الشُّرْطِيُّ السَّارِقَ، فَأَعَادَ المَالَ إِلَى صَاحِبِهِ.", "The policeman found the thief and returned the money to its owner."], ["", "شَكَرَ التَّاجِرُ الشُّرْطِيَّ المُخْلِصَ.", "The merchant thanked the devoted policeman."]]}],
  vocab: [["اسْمُ الفَاعِلِ", "active participle", "n.m", "", "", "", "Grammar"], ["سَارِقٌ", "thief", "n.m", "🦹", "", "سَارِقُونَ", "Participles"], ["شَاهِدٌ", "witness", "n.m", "👁️", "", "شُهُودٌ", "Participles"], ["قَائِلٌ", "speaker, sayer", "n.m", "🗣️", "", "", "Participles"], ["مُخْلِصٌ", "devoted, sincere", "adj.", "", "", "", "Participles"], ["مُسْتَمِعٌ", "listener", "n.m", "👂", "", "مُسْتَمِعُونَ", "Participles"], ["شُرْطِيٌّ", "policeman", "n.m", "👮", "", "شُرْطَةٌ", "Words"], ["أَعَادَ", "to return (something)", "v.", "", "يُعِيدُ", "", "Words"]],
  exercises: [
    { k: "gap", t: "صُغِ اسْمَ الفَاعِلِ", items: [["زَرَعَ ← ___", "زَارِع|زارع"], ["صَامَ ← ___", "صَائِم|صائم"], ["قَضَى ← ___", "قَاضٍ|قاض|القاضي"], ["أَحْسَنَ ← ___", "مُحْسِن|محسن"], ["انْتَظَرَ ← ___", "مُنْتَظِر|منتظر"], ["سَافَرَ ← ___", "مُسَافِر|مسافر"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["Participle of قَالَ is قَاوِل.", false, "قائل"], ["From longer verbs it starts with مُـ.", true, ""]] }
  ],
  drills: [["Participle of بَاعَ:", ["بَائِع", "بَايِع"], 0, ""], ["Participle of اجْتَهَدَ:", ["مُجْتَهِد", "مُجْتَهَد"], 0, ""], ["Participle of دَعَا:", ["دَاعٍ", "دَاعِي (indefinite)"], 0, ""]],
  comp: [["Who found the thief?", ["the policeman", "the merchant", "the witness"], 0, 0]],
  cheat: `<h3>اسم الفاعل</h3><p>3-letter: <span class="ar">فَاعِل — كَاتِب، قَائِل، رَامٍ</span> · longer: <span class="ar">مُـ + kasra: مُكْرِم، مُجْتَهِد، مُسْتَمِع</span></p>`,
  mistakes: [["قَاوِل", "قَائِل", "Hollow → hamza."], ["مُسْتَمَع (= listener)", "مُسْتَمِع", "Kasra for the doer; fatḥa is the passive participle."]],
  tips: [{ t: "Jobs and roles", b: `Many job names are participles: <span class="ar">كَاتِب، طَالِب، بَائِع، مُعَلِّم، مُهَنْدِس، مُدِير</span>.` }]
});
