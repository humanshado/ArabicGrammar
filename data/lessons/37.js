// الدرس ٣٧ — المضاف والمضاف إليه (PDF pp. 180–184)
COURSE.add({
  n: 37, pages: [180, 184], method: true,
  summary: "Two nouns can be joined so that the second specifies the first: بَابُ البَيْتِ (the door of the house). This is iḍāfa. The first noun (المضاف) loses al- and tanwīn and takes whatever case the sentence needs; the second (المضاف إليه) is always majrūr.",
  objectives: ["build an iḍāfa: كِتَابُ الوَلَدِ", "drop al- and tanwīn from the first noun", "put the second noun in jarr", "drop the nūn of duals and sound masc. plurals in iḍāfa: مُعَلِّمُو المَدْرَسَةِ", "attach pronouns: كِتَابُهُ"],

  lesson: [
    { id: "what", t: "“The X of Y”", ar: "الإضافة", pos: "sentence structure", pages: "180–181",
      b: `<div class="blocks"><div class="blk c1"><span class="ar">بَابُ</span><small>muḍāf · no ال, no tanwīn, any case</small></div><div class="blk c3"><span class="ar">البَيْتِ</span><small>muḍāf ilayhi · always jarr</small></div></div>
        <p>Iḍāfa expresses <i>of</i>, possession, material, part: <span class="ar">قَلَمُ عَلِيٍّ</span> (Ali's pen), <span class="ar">خَاتَمُ ذَهَبٍ</span> (a ring of gold), <span class="ar">قِمَّةُ الجَبَلِ</span> (the top of the mountain). The first noun becomes definite if the second is: <span class="ar">بَابُ البَيْتِ</span> = <i>the</i> door of the house.</p>`,
      widget: "transform",
      wd: { title: "The muḍāf changes, the muḍāf ilayhi stays majrūr", sets: [{ base: ["[[بَابُ]] البَيْتِ مَفْتُوحٌ", "The house's door is open."], baseLabel: "muḍāf: rafʿ", ops: [["muḍāf: naṣb", "أَغْلَقْتُ [[بَابَ]] البَيْتِ", "I closed the house's door."], ["muḍāf: jarr", "وَقَفْتُ أَمَامَ [[بَابِ]] البَيْتِ", "I stood in front of the house's door.", "البيتِ stays majrūr in all three."]] }] },
      rule: `<p><span class="ar">المُضَافُ يُعْرَبُ حَسَبَ مَوْقِعِهِ فِي الجُمْلَةِ، وَلَا يُنَوَّنُ وَلَا تَدْخُلُهُ «الـ»؛ وَالمُضَافُ إِلَيْهِ مَجْرُورٌ دَائِمًا.</span></p>`,
      check: [["“The book of the pupil”:", ["كِتَابُ التِّلْمِيذِ", "الكِتَابُ التِّلْمِيذِ", "كِتَابٌ التِّلْمِيذُ"], 0, "", "كِتَابُ التِّلْمِيذِ"]] },

    { id: "nun", t: "Duals and plurals lose their nūn", ar: "حذف النون في الإضافة", pos: "spelling", pages: "182–183",
      b: `<p>Since the muḍāf can't have tanwīn, and the nūn of duals and sound masculine plurals replaces tanwīn, that nūn drops: <span class="ar">مُعَلِّمُونَ + المَدْرَسَةِ → مُعَلِّمُو المَدْرَسَةِ</span>, <span class="ar">عَيْنَانِ + القِطِّ → عَيْنَا القِطِّ</span>, <span class="ar">رَأَيْتُ مُعَلِّمِي المَدْرَسَةِ</span>.</p>`,
      check: [["“The two hands of the child”:", ["يَدَا الطِّفْلِ", "يَدَانِ الطِّفْلِ"], 0, "", "يَدَا الطِّفْلِ"]] },

    { id: "pronouns", t: "Pronoun as muḍāf ilayhi", ar: "الإضافة إلى الضمير", pos: "parts of speech",
      b: `<p>“My, your, his…” are pronouns attached to the noun, and they are muḍāf ilayhi in the place of jarr: <span class="ar">كِتَابِي، كِتَابُكَ، كِتَابُهُ، كِتَابُهَا، كِتَابُنَا، كِتَابُهُمْ</span>. The noun keeps its case vowel before them (except before <span class="ar">ـِي</span>).</p>`,
      check: [["“I read her book”:", ["قَرَأْتُ كِتَابَهَا", "قَرَأْتُ الكِتَابَهَا"], 0, "", "قَرَأْتُ كِتَابَهَا"]] }
  ],

  scenes: [{ h: "بَيْتُ جَدِّي", en: "My grandfather's house", pic: "🏡", lines: [
    ["", "بَيْتُ جَدِّي فِي وَسَطِ القَرْيَةِ.", "My grandfather's house is in the middle of the village."],
    ["", "حَدِيقَةُ البَيْتِ وَاسِعَةٌ، وَأَشْجَارُ الحَدِيقَةِ عَالِيَةٌ.", "The house's garden is wide, and the garden's trees are tall."],
    ["", "أُحِبُّ صَوْتَ العَصَافِيرِ فِي الصَّبَاحِ.", "I love the sound of the sparrows in the morning."],
    ["", "يَجْلِسُ أَصْدِقَاءُ جَدِّي تَحْتَ شَجَرَةِ التُّوتِ.", "My grandfather's friends sit under the mulberry tree."],
    ["", "وَيَلْعَبُ أَبْنَاءُ الجِيرَانِ مَعَ أَحْفَادِ جَدِّي.", "And the neighbours' children play with my grandfather's grandchildren."]],
    note: "Chains of iḍāfa: بَيْتُ جَدِّي، أَشْجَارُ الحَدِيقَةِ، شَجَرَةِ التُّوتِ، أَبْنَاءُ الجِيرَانِ…" }],

  vocab: [["مُضَافٌ", "first term of iḍāfa", "n.m", "", "", "", "Grammar words"], ["مُضَافٌ إِلَيْهِ", "second term of iḍāfa", "n.m", "", "", "", "Grammar words"], ["قِمَّةٌ", "top, summit", "n.f", "🏔️", "", "قِمَمٌ", "Words"], ["خَاتَمٌ", "ring", "n.m", "💍", "", "خَوَاتِمُ", "Words"], ["ذَهَبٌ", "gold", "n.m", "🥇", "", "", "Words"], ["وَسَطٌ", "middle", "n.m", "🎯", "", "", "Words"], ["تُوتٌ", "mulberry", "n.m", "🫐", "", "", "Words"]],

  exercises: [
    { k: "irab", t: "مضاف أم مضاف إليه؟", cats: ["مضاف", "مضاف إليه"], items: [["[بَابُ] المَدْرَسَةِ كَبِيرٌ.", "0", ""], ["بَابُ [المَدْرَسَةِ] كَبِيرٌ.", "1", ""], ["رَكِبْتُ [سَيَّارَةَ] أَبِي.", "0", ""], ["رَكِبْتُ سَيَّارَةَ [أَبِي].", "1", ""]] },
    { k: "shakl", t: "اضْبِطْ", marks: ["ُ", "َ", "ِ"], items: ["قَرَأْتُ كِتَاب{َ} المُعَلِّم{ِ}", "نَظَّفْتُ نَافِذَة{َ} الحُجْرَة{ِ}", "صَوْت{ُ} البُلْبُل{ِ} جَمِيلٌ"] },
    { k: "mcq", t: "اِخْتَرْ", items: [["“The school's teachers came”:", ["حَضَرَ مُعَلِّمُو المَدْرَسَةِ", "حَضَرَ المُعَلِّمُونَ المَدْرَسَةِ"], 0, ""], ["“The top of the mountain”:", ["قِمَّةُ الجَبَلِ", "القِمَّةُ الجَبَلِ"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The muḍāf ilayhi is always majrūr.", true, ""], ["The muḍāf can take ال.", false, ""], ["مُعَلِّمُونَ المَدْرَسَةِ is correct.", false, "مُعَلِّمُو"]] }
  ],
  drills: [["The muḍāf ilayhi is…", ["مجرور", "مرفوع"], 0, ""], ["The muḍāf has…", ["no ال and no tanwīn", "ال"], 0, ""], ["“Ali's pen”:", ["قَلَمُ عَلِيٍّ", "قَلَمٌ عَلِيٌّ"], 0, ""], ["لَاعِبُونَ + الفَرِيقِ →", ["لَاعِبُو الفَرِيقِ", "لَاعِبُونَ الفَرِيقِ"], 0, ""]],
  comp: [["Where is the grandfather's house?", ["in the middle of the village", "by the sea", "in the city"], 0, 0]],
  cheat: `<h3>الإضافة</h3><p class="ar">بَابُ البَيْتِ · قَلَمُ عَلِيٍّ · مُعَلِّمُو المَدْرَسَةِ · كِتَابُهُ</p><div class="rule">Muḍāf: no <span class="ar">الـ</span>, no tanwīn, any case. Muḍāf ilayhi: always majrūr.</div>`,
  mistakes: [["الكِتَابُ الطَّالِبِ", "كِتَابُ الطَّالِبِ", "No ال on the muḍāf."], ["كِتَابٌ الطَّالِبِ", "كِتَابُ الطَّالِبِ", "No tanwīn on the muḍāf."]],
  tips: [{ t: "Possession everywhere", b: `Label things in your home with iḍāfa: <span class="ar">بَابُ الثَّلَّاجَةِ، مِفْتَاحُ السَّيَّارَةِ، كِتَابُ أُخْتِي</span>.` }]
});
