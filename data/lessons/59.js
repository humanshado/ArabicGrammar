// الدرس ٥٩ — ضمائر الرفع البارزة المتصلة بالأفعال (PDF pp. 285–288)
COURSE.add({
  n: 59, pages: [285, 288], method: true,
  summary: "Five visible subject pronouns attach to verbs: the tāʾ of the doer (ـتُ ـتَ ـتِ ـتُمْ…), nā (ـنَا), the alif of two (ـا), the wāw of the group (ـوا / ـونَ) and the nūn of women (ـنَ), plus the yāʾ of the addressed woman (ـِي / ـِينَ). Each is the doer, in the place of rafʿ.",
  objectives: ["recognise the attached subject pronouns", "know which tenses each attaches to", "parse them as doers in the place of rafʿ"],
  lesson: [
    { id: "list", t: "The visible subject pronouns", ar: "ضمائر الرفع المتصلة", pos: "conjugation", pages: "285–287",
      widget: "table",
      wd: { title: "Where each attaches", head: ["pronoun", "past", "present", "command"], rows: [["تاء الفاعل (I/you)", "كَتَبْ[[تُ]] · كَتَبْ[[تَ]] · كَتَبْ[[تِ]]", "—", "—"], ["نا (we)", "كَتَبْ[[نَا]]", "—", "—"], ["ألف الاثنين (two)", "كَتَبَ[[ا]]", "يَكْتُبَ[[ا]]نِ", "اُكْتُبَ[[ا]]"], ["واو الجماعة (they/you pl)", "كَتَبُ[[وا]]", "يَكْتُبُ[[و]]نَ", "اُكْتُبُ[[وا]]"], ["نون النسوة (they f)", "كَتَبْ[[نَ]]", "يَكْتُبْ[[نَ]]", "اُكْتُبْ[[نَ]]"], ["ياء المخاطبة (you f)", "—", "تَكْتُبِ[[ي]]نَ", "اُكْتُبِ[[ي]]"]] },
      rule: `<p><span class="ar">ضَمَائِرُ الرَّفْعِ البَارِزَةُ المُتَّصِلَةُ بِالأَفْعَالِ: تَاءُ الفَاعِلِ، وَنَا، وَأَلِفُ الاثْنَيْنِ، وَوَاوُ الجَمَاعَةِ، وَنُونُ النِّسْوَةِ، وَيَاءُ المُخَاطَبَةِ؛ وَكُلُّهَا فِي مَحَلِّ رَفْعٍ.</span></p>`,
      check: [["In تَلْعَبِينَ, the doer is…", ["the yāʾ", "the nūn"], 0, "", false]] }
  ],
  scenes: [{ h: "رِحْلَةُ المَدْرَسَةِ", en: "The school trip", pic: "🚌", lines: [["المُعَلِّمُ", "هَلْ حَضَرْتُمْ جَمِيعًا؟", "Are you all here?"], ["الطُّلَّابُ", "نَعَمْ، حَضَرْنَا.", "Yes, we're here."], ["المُعَلِّمُ", "يَا بَنَاتُ، اِجْلِسْنَ فِي المُقَدِّمَةِ. وَأَنْتِ يَا هِنْدُ، اِجْلِسِي بِجَانِبِ النَّافِذَةِ.", "Girls, sit at the front. And you, Hind, sit by the window."], ["المُعَلِّمُ", "يَا أَحْمَدُ وَيَا عُمَرُ، اِحْمِلَا الحَقَائِبَ.", "Ahmad and Omar, carry the bags."]]}],
  vocab: [["ضَمِيرٌ بَارِزٌ", "visible pronoun", "n.m", "", "", "", "Grammar"], ["مُقَدِّمَةٌ", "front", "n.f", "⬆️", "", "", "Words"], ["جَمِيعًا", "all together", "adv.", "", "", "", "Words"], ["رِحْلَةٌ", "trip", "n.f", "🚌", "", "رِحْلَاتٌ", "Words"]],
  exercises: [
    { k: "irab", t: "مَا الضَّمِيرُ؟", cats: ["تاء الفاعل", "نا", "ألف الاثنين", "واو الجماعة", "نون النسوة", "ياء المخاطبة"], items: [["حَضَرْ[تُمْ]", "0", ""], ["حَضَرْ[نَا]", "1", ""], ["حَضَرَ[ا]", "2", ""], ["حَضَرُ[وا]", "3", ""], ["حَضَرْ[نَ]", "4", ""], ["تَحْضُرِ[ي]نَ", "5", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["These pronouns are in the place of rafʿ.", true, ""], ["تاء الفاعل attaches to the present.", false, ""]] }
  ],
  drills: [["“We wrote”:", ["كَتَبْنَا", "كَتَبَنَا"], 0, ""], ["“You (f) write”:", ["تَكْتُبِينَ", "تَكْتُبْنَ"], 0, ""], ["Doer in اُكْتُبَا:", ["the alif", "hidden"], 0, ""]],
  comp: [["Where should the girls sit?", ["at the front", "at the back", "by the window"], 0, 0]],
  cheat: `<h3>ضمائر الرفع المتصلة</h3><p class="ar">ـتُ ـتَ ـتِ ـتُمَا ـتُمْ ـتُنَّ · ـنَا · ـا · ـوا · ـنَ · ـي</p>`,
  mistakes: [["كَتَبَنَا (meaning “we wrote”)", "كَتَبْنَا", "Sukūn before nā of “we”."]],
  tips: [{ t: "Full paradigm", b: `Conjugate one verb through all 13 persons in past, present and command. That is the core of lesson 60.` }]
});
