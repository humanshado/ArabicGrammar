// الدرس ٤٧ — نائب الفاعل (PDF pp. 227–230)
COURSE.add({
  n: 47, pages: [227, 230], method: true,
  summary: "When the doer is dropped — unknown, obvious or unimportant — the verb becomes passive (المبني للمجهول) and the object takes the doer's place: it becomes the نائب الفاعل (deputy doer) and is marfūʿ: كَسَرَ الوَلَدُ الزُّجَاجَ ← كُسِرَ الزُّجَاجُ. Past passive: ḍamma on the first letter, kasra before the last (كُتِبَ); present passive: ḍamma on the first, fatḥa before the last (يُكْتَبُ).",
  objectives: ["form the passive past (فُعِلَ) and present (يُفْعَلُ)", "turn the object into the nāʾib al-fāʿil with ḍamma", "make the verb agree with a feminine nāʾib fāʿil", "know when Arabic uses the passive"],

  lesson: [
    { id: "form", t: "Making a verb passive", ar: "بناء الفعل للمجهول", pos: "conjugation", pages: "227–228",
      widget: "transform",
      wd: { title: "Active → passive", sets: [
        { base: ["كَسَرَ الوَلَدُ الزُّجَاجَ", "The boy broke the glass."], baseLabel: "active", ops: [["passive", "[[كُسِرَ]] [[الزُّجَاجُ]]", "The glass was broken.", "Doer dropped; كَسَرَ → كُسِرَ; the object takes ḍamma."]] },
        { base: ["يَكْتُبُ الطَّالِبُ الدَّرْسَ", "The student writes the lesson."], baseLabel: "active", ops: [["passive", "[[يُكْتَبُ]] [[الدَّرْسُ]]", "The lesson is written.", "يَكْتُبُ → يُكْتَبُ."]] },
        { base: ["زَرَعَ الفَلَّاحُ الشَّجَرَةَ", "The farmer planted the tree."], baseLabel: "active", ops: [["passive", "[[زُرِعَتِ]] [[الشَّجَرَةُ]]", "The tree was planted.", "Feminine deputy doer → ـتْ."]] }
      ] },
      rule: `<p><span class="ar">نَائِبُ الفَاعِلِ: اسْمٌ مَرْفُوعٌ حَلَّ مَحَلَّ الفَاعِلِ بَعْدَ حَذْفِهِ. يُضَمُّ أَوَّلُ المَاضِي وَيُكْسَرُ مَا قَبْلَ آخِرِهِ، وَيُضَمُّ أَوَّلُ المُضَارِعِ وَيُفْتَحُ مَا قَبْلَ آخِرِهِ.</span></p>`,
      check: [["Passive of فَتَحَ:", ["فُتِحَ", "فَتِحَ", "يُفْتَحُ"], 0, "", "فُتِحَ"], ["Passive of يَشْرَبُ:", ["يُشْرَبُ", "يَشْرُبُ"], 0, "", "يُشْرَبُ"]] },
    { id: "why", t: "Why drop the doer?", ar: "أغراض حذف الفاعل", pos: "style", pages: "229–230",
      b: `<p>Arabic uses the passive when the doer is <b>unknown</b> (<span class="ar">سُرِقَ المَتَاعُ</span> the goods were stolen), <b>obvious</b> (<span class="ar">خُلِقَ الإِنْسَانُ ضَعِيفًا</span>), or <b>unimportant</b> (<span class="ar">أُعْلِنَتِ النَّتَائِجُ</span> the results were announced). Unlike English, it rarely names the doer with “by”.</p>`,
      check: [["“The results were announced”:", ["أُعْلِنَتِ النَّتَائِجُ", "أَعْلَنَتِ النَّتَائِجُ"], 0, "", "أُعْلِنَتِ النَّتَائِجُ"]] }
  ],
  scenes: [{ h: "خَبَرٌ فِي الجَرِيدَةِ", en: "News in the paper", pic: "📰", lines: [["", "افْتُتِحَتْ مَكْتَبَةٌ جَدِيدَةٌ فِي المَدِينَةِ.", "A new library was opened in the city."], ["", "وُضِعَتْ فِيهَا آلَافُ الكُتُبِ.", "Thousands of books were placed in it."], ["", "وَزُيِّنَتْ جُدْرَانُهَا بِالصُّوَرِ.", "And its walls were decorated with pictures."], ["", "يُسْمَحُ لِلْأَطْفَالِ بِالقِرَاءَةِ مَجَّانًا.", "Children are allowed to read for free."]]}],
  vocab: [["نَائِبُ الفَاعِلِ", "deputy doer (passive subject)", "n.m", "", "", "", "Grammar"], ["مَبْنِيٌّ لِلْمَجْهُولِ", "passive", "adj.", "", "", "", "Grammar"], ["سُرِقَ", "was stolen", "v.", "", "يُسْرَقُ", "", "Passive verbs"], ["أُعْلِنَ", "was announced", "v.", "", "يُعْلَنُ", "", "Passive verbs"], ["افْتُتِحَ", "was opened", "v.", "", "يُفْتَتَحُ", "", "Passive verbs"], ["نَتِيجَةٌ", "result", "n.f", "📊", "", "نَتَائِجُ", "Words"], ["جَرِيدَةٌ", "newspaper", "n.f", "📰", "", "جَرَائِدُ", "Words"], ["مَكْتَبَةٌ", "library", "n.f", "📚", "", "مَكْتَبَاتٌ", "Words"], ["مَجَّانًا", "for free", "adv.", "", "", "", "Words"]],
  exercises: [
    { k: "tr", t: "اِبْنِ لِلْمَجْهُولِ · Make it passive", items: [["فَتَحَ الحَارِسُ البَابَ.", "فتح الباب|فُتِحَ البَابُ"], ["يَحْصُدُ الفَلَّاحُ القَمْحَ.", "يحصد القمح|يُحْصَدُ القَمْحُ"], ["كَتَبَتِ البِنْتُ الرِّسَالَةَ.", "كتبت الرسالة|كُتِبَتِ الرِّسَالَةُ"], ["يَشْرَبُ الطِّفْلُ الحَلِيبَ.", "يشرب الحليب|يُشْرَبُ الحَلِيبُ"]] },
    { k: "irab", t: "فاعل أم نائب فاعل؟", cats: ["فاعل", "نائب فاعل"], items: [["كَسَرَ [الوَلَدُ] الزُّجَاجَ.", "0", ""], ["كُسِرَ [الزُّجَاجُ].", "1", ""], ["يُحْتَرَمُ [الصَّادِقُ].", "1", ""], ["فَازَ [الفَرِيقُ].", "0", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The nāʾib al-fāʿil is marfūʿ.", true, ""], ["Passive past: ḍamma on the first letter, kasra before the last.", true, ""]] }
  ],
  drills: [["Passive of أَكَلَ:", ["أُكِلَ", "أَكِلَ"], 0, ""], ["Passive of يَفْهَمُ:", ["يُفْهَمُ", "يَفْهُمُ"], 0, ""], ["كُتِبَ ___", ["الدَّرْسُ", "الدَّرْسَ"], 0, ""], ["“The tree was planted”:", ["زُرِعَتِ الشَّجَرَةُ", "زُرِعَ الشَّجَرَةَ"], 0, ""]],
  comp: [["What was opened?", ["a new library", "a school", "a museum"], 0, 0]],
  cheat: `<h3>نائب الفاعل</h3><p class="ar">كَسَرَ الوَلَدُ الزُّجَاجَ ← كُسِرَ الزُّجَاجُ · يَكْتُبُ ← يُكْتَبُ</p><p>Past: <span class="ar">فُعِلَ</span> · present: <span class="ar">يُفْعَلُ</span> · deputy doer: marfūʿ.</p>`,
  mistakes: [["كُسِرَ الزُّجَاجَ", "كُسِرَ الزُّجَاجُ", "The deputy doer is marfūʿ."]],
  tips: [{ t: "Newspaper Arabic", b: `Headlines love the passive: <span class="ar">افْتُتِحَ، أُعْلِنَ، اُكْتُشِفَ</span>. Read a headline a day and find the nāʾib al-fāʿil.` }]
});
