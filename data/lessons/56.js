// الدرس ٥٦ — المصدر المؤول من أن والفعل (PDF pp. 272–275)
COURSE.add({
  n: 56, pages: [272, 275], method: true,
  summary: "أَنْ + a verb can be “interpreted” as a maṣdar (المصدر المؤول): يَسُرُّنِي أَنْ تَنْجَحَ = يَسُرُّنِي نَجَاحُكَ. The pair fills any noun position: doer, object, mubtadaʾ, after a preposition. Converting between the two is a favourite exercise and a key to good style.",
  objectives: ["recognise أَنْ + verb as a noun-equivalent", "convert أَنْ + verb into an explicit maṣdar and back", "parse: المصدر المؤول في محل …"],
  lesson: [
    { id: "what", t: "A verb that acts as a noun", ar: "المصدر المؤول", pos: "sentence structure", pages: "272–274",
      widget: "transform",
      wd: { title: "Interpreted ↔ explicit maṣdar", sets: [
        { base: ["يَسُرُّنِي أَنْ تَنْجَحَ", "It pleases me that you succeed."], baseLabel: "أن + verb", ops: [["explicit maṣdar", "يَسُرُّنِي [[نَجَاحُكَ]]", "Your success pleases me.", "As doer: marfūʿ."]] },
        { base: ["أُرِيدُ أَنْ أَتَعَلَّمَ السِّبَاحَةَ", "I want to learn swimming."], baseLabel: "أن + verb", ops: [["explicit maṣdar", "أُرِيدُ [[تَعَلُّمَ]] السِّبَاحَةِ", "I want the learning of swimming.", "As object: manṣūb; السباحة becomes muḍāf ilayhi."]] },
        { base: ["يَجِبُ عَلَيْكَ أَنْ تُحَافِظَ عَلَى وَقْتِكَ", "You must keep track of your time."], baseLabel: "أن + verb", ops: [["explicit maṣdar", "يَجِبُ عَلَيْكَ [[المُحَافَظَةُ]] عَلَى وَقْتِكَ", "Keeping track of your time is a must for you."]] }
      ] },
      rule: `<p><span class="ar">«أَنْ» وَالفِعْلُ بَعْدَهَا يُؤَوَّلَانِ بِمَصْدَرٍ يَقَعُ فِي مَوْقِعِ الاسْمِ: فَاعِلًا أَوْ مَفْعُولًا بِهِ أَوْ مُبْتَدَأً أَوْ مَجْرُورًا.</span></p>`,
      check: [["Explicit form of أُحِبُّ أَنْ أَقْرَأَ:", ["أُحِبُّ القِرَاءَةَ", "أُحِبُّ القَارِئَ"], 0, "", "أُحِبُّ القِرَاءَةَ"]] },
    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings", pages: "274–275",
      b: `<div class="rule"><span class="ar">أُرِيدُ أَنْ أَتَعَلَّمَ: «أَنْ» حَرْفُ نَصْبٍ، «أَتَعَلَّمَ» فِعْلٌ مُضَارِعٌ مَنْصُوبٌ، وَالمَصْدَرُ المُؤَوَّلُ مِنْ «أَنْ» وَالفِعْلِ فِي مَحَلِّ نَصْبٍ مَفْعُولٌ بِهِ.</span></div>` }
  ],
  scenes: [{ h: "أَهْدَافِي", en: "My goals", pic: "🎯", lines: [["", "أُرِيدُ أَنْ أُتْقِنَ اللُّغَةَ العَرَبِيَّةَ.", "I want to master Arabic."], ["", "وَمِنْ أَهْدَافِي أَنْ أَقْرَأَ كُتُبَ الأَدَبِ.", "And one of my goals is to read literature."], ["", "يَسُرُّ أُسْتَاذِي أَنْ أَتَقَدَّمَ.", "It pleases my teacher that I make progress."], ["", "وَيَنْبَغِي أَنْ أُرَاجِعَ كُلَّ يَوْمٍ.", "And I ought to revise every day."]]}],
  vocab: [["مَصْدَرٌ مُؤَوَّلٌ", "interpreted maṣdar", "n.m", "", "", "", "Grammar"], ["مَصْدَرٌ صَرِيحٌ", "explicit maṣdar", "n.m", "", "", "", "Grammar"], ["أَتْقَنَ", "to master", "v.", "", "يُتْقِنُ · إِتْقَانٌ", "", "Words"], ["تَقَدَّمَ", "to progress", "v.", "", "يَتَقَدَّمُ · تَقَدُّمٌ", "", "Words"], ["حَافَظَ عَلَى", "to preserve, keep", "v.", "", "يُحَافِظُ · مُحَافَظَةٌ", "", "Words"], ["هَدَفٌ", "goal", "n.m", "🎯", "", "أَهْدَافٌ", "Words"], ["أَدَبٌ", "literature; manners", "n.m", "📚", "", "آدَابٌ", "Words"]],
  exercises: [
    { k: "tr", t: "ضَعْ مَصْدَرًا صَرِيحًا", items: [["أُحِبُّ أَنْ أَسْبَحَ.", "أحب السباحة|أُحِبُّ السِّبَاحَةَ"], ["يَسُرُّنِي أَنْ تَحْضُرَ.", "يسرني حضورك|يَسُرُّنِي حُضُورُكَ"], ["أَرْجُو أَنْ تَنْجَحَ.", "أرجو نجاحك|أَرْجُو نَجَاحَكَ"]] },
    { k: "irab", t: "مَحَلُّ المَصْدَرِ المُؤَوَّلِ", cats: ["في محل رفع فاعل", "في محل نصب مفعول به", "في محل جر"], items: [["يَسُرُّنِي [أَنْ تَنْجَحَ].", "0", ""], ["أُرِيدُ [أَنْ أَنَامَ].", "1", ""], ["نَصَحْتُهُ بِـ[أَنْ يَجْتَهِدَ].", "2", ""]] }
  ],
  drills: [["أَنْ + verb can be replaced by…", ["a maṣdar", "an adjective"], 0, ""], ["Explicit form of يَجِبُ أَنْ تَصْدُقَ:", ["يَجِبُ الصِّدْقُ", "يَجِبُ الصَّادِقُ"], 0, ""]],
  comp: [["What does the speaker want to master?", ["Arabic", "French", "maths"], 0, 0]],
  cheat: `<h3>المصدر المؤول</h3><p class="ar">يَسُرُّنِي أَنْ تَنْجَحَ = يَسُرُّنِي نَجَاحُكَ · أُرِيدُ أَنْ أَتَعَلَّمَ = أُرِيدُ التَّعَلُّمَ</p>`,
  mistakes: [["أُرِيدُ أَنْ تَعَلُّمٌ", "أُرِيدُ أَنْ أَتَعَلَّمَ / أُرِيدُ التَّعَلُّمَ", "أن takes a verb; the maṣdar stands alone."]],
  tips: [{ t: "Two styles", b: `Formal writing prefers explicit maṣdars (<span class="ar">أُرِيدُ تَعَلُّمَ…</span>); speech prefers <span class="ar">أَنْ</span> + verb. Practise both.` }]
});
